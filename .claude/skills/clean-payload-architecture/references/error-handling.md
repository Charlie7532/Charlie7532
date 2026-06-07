# Error Handling Across Layers

## Error Hierarchy

```ts
// src/shared/kernel/errors.ts

export class DomainError extends Error {
  constructor(message: string, public readonly code: string) {
    super(message);
    this.name = 'DomainError';
  }
}

export class ValidationError extends DomainError {
  constructor(message: string) {
    super(message, 'VALIDATION_ERROR');
  }
}

export class InvalidTransitionError extends DomainError {
  constructor(from: string, to: string) {
    super(`Cannot transition from "${from}" to "${to}"`, 'INVALID_TRANSITION');
  }
}

export class ResourceLimitError extends DomainError {
  constructor(resource: string) {
    super(`${resource} limit reached for current plan`, 'RESOURCE_LIMIT');
  }
}

export class NotFoundError extends DomainError {
  constructor(resource: string, id: string) {
    super(`${resource} with id "${id}" not found`, 'NOT_FOUND');
  }
}
```

---

## HTTP Status Mapping

```ts
// src/shared/handlers/handlerRoute.ts

const DOMAIN_ERROR_STATUS: Record<string, number> = {
  VALIDATION_ERROR: 400,
  NOT_FOUND: 404,
  RESOURCE_LIMIT: 403,
  INVALID_TRANSITION: 409,
};

export function handlerRoute(handler: RouteHandler) {
  return async (request: Request) => {
    try {
      return await handler(request);
    } catch (error) {
      if (error instanceof DomainError) {
        const status = DOMAIN_ERROR_STATUS[error.code] ?? 500;
        return NextResponse.json({ error: error.message, code: error.code }, { status });
      }
      // Unexpected errors
      console.error('[handlerRoute] Unhandled error', error);
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
  };
}
```

---

## Layer Responsibilities

| Layer | Throws | Catches | Notes |
|-------|--------|---------|-------|
| `domain/rules` | Nothing — returns `boolean` or typed value | Nothing | Pure functions never throw |
| `domain/useCases` | `DomainError` subclass | Nothing — propagates up | Logic lives here, not error handling |
| `infrastructure/payload` | Wrapped Payload errors as `DomainError` | Payload/network errors | Wraps at the adapter boundary |
| Hooks `beforeChange` | Propagates `DomainError` (blocks operation) | Nothing | Payload will surface this to the user |
| Hooks `afterChange` | `handleAfterChangeHook` catches all | Everything | Logs and swallows to avoid data loss |
| API routes | `handlerRoute` catches | `DomainError` → HTTP code | Maps code to HTTP status |
| Jobs | Job worker catches | Permanent vs transient distinction | `DomainError` → dead letter; others → retry |

---

## Wrapping Payload Errors in Adapters

```ts
// modules/campaigns/infrastructure/payload/repositories/PayloadCampaignRepository.ts
async findById(id: string): Promise<Campaign> {
  try {
    const doc = await this.payload.findByID({ collection: 'campaigns', id });
    if (!doc) throw new NotFoundError('Campaign', id);
    return mapCampaignFromPayload(doc);
  } catch (error) {
    if (error instanceof NotFoundError) throw error;
    throw new DomainError(`Failed to fetch campaign: ${error.message}`, 'PAYLOAD_ERROR');
  }
}
```

---

## afterChange Hook Error Handling

`handleAfterChangeHook` catches all errors to prevent data loss (the document is already persisted). It logs and swallows:

```ts
// This is handled INSIDE the wrapper — hook authors don't need to try/catch
export const emitProjectCreatedHook = handleAfterChangeHook<Project>({
  name: "Projects",
  operation: "create",
  guards: [({ req }) => !req.context?.skipHooks],
  handler: async ({ doc, req }) => {
    // If this throws DomainError or anything else,
    // handleAfterChangeHook catches it, logs it, and continues.
    await eventEmitter.emit('project.created', { projectId: doc.id });
    return doc;
  },
});
```

For critical `afterChange` side-effects (payments, notifications), add alerting inside the wrapper or use a job queue to make them retryable.

---

## Job Error Classification

```ts
// modules/campaigns/interface/jobs/campaignActivate.ts
export async function handleCampaignActivate(payload: Payload, jobPayload: unknown) {
  try {
    const { campaignId } = campaignActivateJobSchema.parse(jobPayload);
    const repo = new PayloadCampaignRepository(payload);
    const queue = new PayloadJobQueue(payload);
    await onActivateCampaign(repo, queue, { campaignId });
  } catch (error) {
    if (error instanceof DomainError) {
      // Permanent failure — log and send to dead letter queue
      console.error('[job:campaignActivate] Domain error (no retry)', error);
      throw new PermanentJobError(error.message);
    }
    // Transient failure — let the job runner retry with backoff
    throw error;
  }
}
```
