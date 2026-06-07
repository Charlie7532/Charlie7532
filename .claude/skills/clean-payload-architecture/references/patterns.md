# The 10 Clean Architecture Patterns for Payload CMS

## Pattern 1 — Lifecycle Manifest

**Problem:** No single place to see "when X happens, these things run in this order."

Create one `lifecycle.ts` file per collection that documents and exports all hooks:

```ts
// src/modules/projects/interface/lifecycle.ts

/**
 * PROJECT LIFECYCLE
 * beforeChange:
 *   - validateSubscription: blocks create if over limit
 * afterChange:
 *   - onCreate: emitProjectCreated
 *   - onUpdate: emitProjectUpdated
 *   - onLink(lead): qualifyLead → updates Lead.status
 * afterDelete:
 *   - emitProjectDeleted
 */

export const projectLifecycle = {
  beforeChange: [validateSubscriptionHook],
  afterChange: [updateLeadStatusHook, emitProjectCreatedHook, emitProjectUpdatedHook],
  afterDelete: [emitProjectDeletedHook],
};
```

In `collections/Projects/index.ts`:
```ts
hooks: projectLifecycle,  // one line
```

---

## Pattern 2 — Independent Use Cases

**Problem:** Business logic is coupled to Payload and untestable.

**Rule:** If a hook has an `if`, that condition is business logic — it must live outside the hook.

```ts
// modules/leads/domain/rules/qualifyLead.ts — PURE
export function shouldQualifyLead(status: string): boolean {
  return status === 'new' || status === 'contacted';
}

// modules/leads/domain/useCases/qualifyLeadOnProjectLink.ts — USE CASE
export async function qualifyLeadOnProjectLink(
  leadRepo: LeadRepository,
  leadId: string,
): Promise<void> {
  const lead = await leadRepo.findById(leadId);
  if (!shouldQualifyLead(lead.status)) return;
  await leadRepo.update(leadId, buildQualifiedLeadData());
}

// modules/projects/interface/hooks/updateLeadStatus.ts — THIN ADAPTER
export const updateLeadStatusHook = handleAfterChangeHook<Project>({
  name: "Projects",
  operation: "update",
  guards: [({ req }) => !req.context?.skipHooks, ({ doc }) => !!doc.lead],
  handler: async ({ doc, req }) => {
    const leadRepo = new PayloadLeadRepository(req.payload);
    await qualifyLeadOnProjectLink(leadRepo, doc.lead as string);
    return doc;
  },
});
```

**Test without Payload:**
```ts
const mockRepo = { findById: vi.fn(), update: vi.fn() };
mockRepo.findById.mockResolvedValue({ id: '1', status: 'new' });
await qualifyLeadOnProjectLink(mockRepo, '1');
expect(mockRepo.update).toHaveBeenCalled();
```

---

## Pattern 3 — Ports and Adapters

**Problem:** Direct `req.payload` calls scattered throughout use cases.

Define a port (interface) for each persistence/external concern, then implement it in infrastructure:

| Port (interface) | Responsibility | Adapter |
|-----------------|----------------|---------|
| `LeadRepository` | CRUD on Leads | `PayloadLeadRepository` |
| `ProjectRepository` | CRUD on Projects | `PayloadProjectRepository` |
| `CampaignRepository` | CRUD + recipients | `PayloadCampaignRepository` |
| `JobQueue` | Enqueue async work | `PayloadJobQueue` |
| `EventEmitter` | Emit domain events | `PayloadEventEmitter` |
| `MailService` | Send email directly | `StannpMailService` |
| `SubscriptionChecker` | Validate plan access | `PayloadSubscriptionChecker` |

```ts
// modules/leads/domain/ports/LeadRepository.ts
export interface LeadRepository {
  findById(id: string): Promise<Lead>;
  update(id: string, data: Partial<Lead>): Promise<Lead>;
}

// modules/leads/infrastructure/payload/repositories/PayloadLeadRepository.ts
export class PayloadLeadRepository implements LeadRepository {
  constructor(private payload: Payload) {}

  async findById(id: string): Promise<Lead> {
    const doc = await this.payload.findByID({ collection: 'leads', id });
    return mapLeadFromPayload(doc);
  }

  async update(id: string, data: Partial<Lead>): Promise<Lead> {
    const doc = await this.payload.update({ collection: 'leads', id, data });
    return mapLeadFromPayload(doc);
  }
}
```

---

## Pattern 4 — Zod at Boundaries, Rules in Domain

**Problem:** Validation spread across layers with no clear owner.

| Type | Where | Tool |
|------|-------|------|
| Input shape | API route / hook (boundary) | Zod |
| Business rules | `domain/*/rules.ts` | Pure functions |
| Data integrity | Payload / DB | Constraints |

```ts
// Boundary — "does this have the right shape?"
const createProjectSchema = z.object({ radiusMiles: z.number().positive() });

// Domain rule — "is this acceptable for the business?"
export function isValidRadius(miles: number): boolean {
  return miles >= 1 && miles <= 50;
}

// Use case receives already-validated data, applies business rules
export async function createProject(repo: ProjectRepository, input: CreateProjectInput) {
  if (!isValidRadius(input.radiusMiles)) throw new ValidationError('Radius out of range');
  return repo.create(input);
}
```

---

## Pattern 5 — API Routes as Boundaries

**Problem:** Route handlers of 1000+ lines with all business logic inside.

A route does exactly five things:

```ts
// BEFORE: route.ts (~1000 lines, all logic)
// AFTER: route.ts (~25 lines)
export const POST = handlerRoute(async (request) => {
  const body = await request.json();
  const input = createRenderSchema.parse(body);          // 1. parse + validate
  const mediaRepo = new PayloadMediaRepository(payload); // 2. instantiate adapters
  const renderRepo = new PayloadRenderRepository(payload);
  const render = await createRender(mediaRepo, renderRepo, input); // 3. call use case
  return NextResponse.json({ success: true, data: render });       // 4. serialize
});
```

**When a custom endpoint IS justified:**
1. Pre-Payload composition (download image, resize)
2. Multi-collection atomics that can't go through hooks
3. Pure external proxy (pass-through to third-party API)
4. Complex queries that Payload's API can't express

---

## Pattern 6 — Hooks as Single Entry Point (Admin = API)

**Problem:** Business logic in route handlers is not executed by the Admin panel.

Move all logic into hooks. Both Admin and API call `payload.update()`, which always fires hooks:

```
API Route  →  payload.update()  ─┐
Admin Save →  payload.update()  ─┤→  afterChange hooks  →  use cases  →  same result
Job Handler → payload.update()  ─┘
```

| Action | API | Admin | Job |
|--------|-----|-------|-----|
| Create render | `payload.create()` → hooks | Save → `payload.create()` → hooks | `payload.create()` → hooks |
| Activate campaign | `payload.update()` → hooks | Change status → Save → hooks | N/A |

---

## Pattern 7 — Error Handling Across Layers

**Problem:** Each layer uses a different error pattern.

```ts
// src/shared/kernel/errors.ts
export class DomainError extends Error {
  constructor(message: string, public readonly code: string) {
    super(message);
    this.name = 'DomainError';
  }
}
export class InvalidTransitionError extends DomainError {
  constructor(from: string, to: string) {
    super(`Cannot transition from ${from} to ${to}`, 'INVALID_TRANSITION');
  }
}
export class ResourceLimitError extends DomainError {
  constructor(resource: string) {
    super(`${resource} limit reached`, 'RESOURCE_LIMIT');
  }
}
export class NotFoundError extends DomainError {
  constructor(resource: string, id: string) {
    super(`${resource} ${id} not found`, 'NOT_FOUND');
  }
}
```

**HTTP mapping in `handlerRoute`:**
```ts
const DOMAIN_ERROR_STATUS: Record<string, number> = {
  VALIDATION_ERROR: 400,
  INVALID_TRANSITION: 409,
  RESOURCE_LIMIT: 403,
  NOT_FOUND: 404,
};
```

---

## Pattern 8 — Jobs as Async Use Cases

**Problem:** Background job handlers contain business logic coupled to Payload.

Job handlers become thin adapters, same as hooks:

```ts
// modules/campaigns/interface/jobs/campaignActivate.ts
export async function handleCampaignActivate(
  payload: Payload,
  jobPayload: { campaignId: string },
) {
  const campaignRepo = new PayloadCampaignRepository(payload);
  const jobQueue = new PayloadJobQueue(payload);
  await onActivateCampaign(campaignRepo, jobQueue, { campaignId: jobPayload.campaignId });
}
```

**Error handling in jobs:**
- `DomainError` (permanent failure) → dead letter queue, no retry
- Transient error (API timeout, network) → automatic retry with backoff

---

## Pattern 9 — Events/Webhooks as Side-Effects

**Problem:** Domain events are emitted inconsistently from different hooks.

Events are emitted via an `EventEmitter` port inside the use case:

```ts
// modules/renders/domain/useCases/triggerRenderProcessing.ts
export async function triggerRenderProcessing(
  jobQueue: JobQueue,
  eventEmitter: EventEmitter,
  renderId: string,
): Promise<void> {
  await jobQueue.enqueue('render.process', { renderId });
  await eventEmitter.emit('render.created', { renderId });
}
```

Events are explicit in the use case and testable with mocks.

---

## Pattern 10 — Hook Wrappers as Standard

**Problem:** Hook flow is opaque, errors are inconsistent, traceability is low.

All collection hooks must be declared using wrappers from `@/shared/handlers`. This makes the structure of every hook explicit and uniform: `name`, `operation`, `guards`, `handler`.

```ts
export const validateSubscriptionHook = handleBeforeChangeHook<Project>({
  name: "Projects",
  operation: "create",
  guards: [({ req }) => !req.context?.skipHooks],
  handler: async ({ data, req }) => {
    await assertActiveSubscription(req);
    return data;
  },
});
```

**Benefits:**
- Structured logging consistent across all collections
- Operation filter without repeated `if` blocks
- Declarative guards for preconditions
- Safe fallback and uniform error handling per hook type
- Discovery: every hook has a standard shape and an explicit name
