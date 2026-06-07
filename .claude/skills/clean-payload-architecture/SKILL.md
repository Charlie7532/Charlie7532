---
name: clean-payload-architecture
description: 'Apply Clean Architecture patterns to Payload CMS 3 projects. Use when: adding a new collection hook, creating a use case, refactoring god-object collections, extracting domain rules, setting up lifecycle manifests, implementing ports and adapters, writing testable business logic without Payload, designing API route boundaries, handling errors across layers, or migrating existing Payload hooks to clean patterns. Also use for: understanding where logic should live, deciding domain vs infrastructure vs interface layer, keeping Admin and API in sync.'
argument-hint: 'Describe what you are building or refactoring (e.g. "add a hook that qualifies leads", "extract domain rules from a collection")'
---

# Clean Architecture for Payload CMS

## When to Use

Load this skill when working on any of:

- **Adding hooks** to a Payload collection
- **Creating or refactoring use cases** with business logic
- **Deciding where logic should live** (hook vs use case vs domain rule vs API route)
- **Making Admin panel and API execute the same logic**
- **Writing testable business logic** without Payload dependency
- **Extracting logic from a 1000-line route handler**
- **Setting up a lifecycle manifest** for a collection
- **Implementing ports and adapters** for repositories or external services
- **Designing error handling** across domain, use case, and HTTP layers

---

## Core Architecture

```
Framework Layer   →  Payload Hooks / API Routes / Job Handlers
                     Thin adapters: deserialize, instantiate, call use case

Application Layer →  Use Cases (orchestration)
                     Receive injected ports, coordinate rules and side-effects
                     Never import Payload

Domain Layer      →  Domain Rules (pure functions)
                     Predicates, transformations, validations
                     Zero external dependencies, zero I/O

Contracts         →  Ports (interfaces)
                     LeadRepository, JobQueue, EventEmitter, etc.
```

**Dependency rule** — imports only flow inward:

```
modules/*/domain/rules/*.ts            → 0 external imports
modules/*/domain/useCases/*.ts         → domain/ only (rules + ports)
modules/*/infrastructure/payload/*.ts  → domain/ports/ + payload
modules/*/interface/hooks/*.ts         → infrastructure/ + domain/useCases/
```

---

## Folder Structure (per module)

```
src/
├── modules/
│   └── <feature>/
│       ├── domain/
│       │   ├── rules/          # Pure predicates and transformations
│       │   ├── useCases/       # Orchestration
│       │   ├── ports/          # Interfaces (contracts)
│       │   ├── models/         # Domain types
│       │   └── errors.ts       # DomainError subclasses
│       ├── infrastructure/
│       │   └── payload/
│       │       ├── repositories/  # Implement ports using req.payload
│       │       └── mappers/
│       └── interface/
│           ├── hooks/          # Thin adapters using handle*Hook wrappers
│           ├── lifecycle.ts    # Manifest: all hooks for this collection
│           ├── api/            # HTTP boundary (Zod schemas + thin routes)
│           └── jobs/           # Thin adapter for background jobs
├── shared/
│   ├── kernel/                 # Result type, base errors, shared types
│   └── handlers/               # handle*Hook wrappers (cross-cutting)
└── collections/                # Payload collection configs (thin, hooks: lifecycle.*Hooks)
```

---

## Step-by-Step Procedures

### Procedure A — Add a new hook to a collection

1. **Identify the concern**: Is it validation (before), side-effect (after), or cleanup (delete)?
2. **Extract the decision logic** to `modules/<feature>/domain/rules/<rule>.ts` as a pure function.
3. **Create or update the use case** in `modules/<feature>/domain/useCases/<action>.ts`. Inject ports, never call `req.payload` directly.
4. **Create the Payload repository** in `modules/<feature>/infrastructure/payload/repositories/`. Use `req.payload` from the hook context.
5. **Write the thin hook** in `modules/<feature>/interface/hooks/<hook>.ts` using the correct `handle*Hook` wrapper from `@/shared/handlers`.
6. **Register the hook** in `modules/<feature>/interface/lifecycle.ts` with a JSDoc comment describing when it fires.
7. **Point the collection** at `hooks: featureLifecycle` in `collections/<Feature>/index.ts`.

### Procedure B — Refactor a god-object collection

1. **Audit the collection**: list every `if`, every `req.payload` call, every side-effect.
2. **Create `lifecycle.ts`** — move each hook into a named const using `handle*Hook` wrappers. Add JSDoc. Zero behavior change.
3. **Extract domain rules** — every `if` with business meaning moves to `domain/rules/`.
4. **Create ports** for each `req.payload` call pattern (find, create, update, delete).
5. **Build use cases** that call rules + ports.
6. **Slim the hooks** to: instantiate adapter → call use case → return.

### Procedure C — Slim down a fat API route

The route should only: parse request → validate with Zod → instantiate adapters → call use case → serialize response.

```ts
// Target: ~20-30 lines
export const POST = handlerRoute(async (request) => {
  const body = await request.json();
  const input = createSomethingSchema.parse(body);   // Zod boundary
  const repo = new PayloadSomethingRepository(payload);
  const result = await createSomething(repo, input); // use case
  return NextResponse.json({ success: true, data: result });
});
```

### Procedure D — Keep Admin and API in sync

Move all business logic into hooks + use cases. Both Admin and API go through `payload.create()` / `payload.update()`, which always fires hooks.

```
API Route  →  payload.update()  →  afterChange hooks  →  use cases
Admin Save →  payload.update()  →  afterChange hooks  →  use cases  (same path)
```

Custom endpoints are only justified for: pre-Payload composition (resize image), multi-collection atomics, pure external proxy, or complex queries.

---

## The 10 Patterns (Quick Reference)

See [./references/patterns.md](./references/patterns.md) for full code examples.

| # | Pattern | Resolves |
|---|---------|---------|
| 1 | **Lifecycle Manifest** | Discovery problem — no single place to see what fires when |
| 2 | **Independent Use Cases** | Logic coupled to Payload; untestable hooks |
| 3 | **Ports and Adapters** | Dependency inversion for repos, queues, mailers |
| 4 | **Zod at Boundaries, Rules in Domain** | Where to put validation |
| 5 | **API Routes as Boundaries** | 1000-line route handlers |
| 6 | **Hooks as Single Entry Point** | Admin ≠ API behavior divergence |
| 7 | **Error Handling Across Layers** | Inconsistent error types and HTTP codes |
| 8 | **Jobs as Async Use Cases** | Job handler logic coupled to Payload |
| 9 | **Events/Webhooks as Side-Effects** | Events scattered across hooks |
| 10 | **Hook Wrappers as Standard** | Opaque hook flow; inconsistent error handling |

---

## Hook Wrapper Standard

All hooks must use wrappers from `@/shared/handlers`. Never export raw hooks without a wrapper (document exceptions in `lifecycle.ts`).

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

Available wrappers:
- `handleBeforeValidateHook`
- `handleBeforeChangeHook`
- `handleAfterChangeHook`
- `handleBeforeDeleteHook`
- `handleAfterDeleteHook`
- `handleBeforeOperationHook`
- `handleAfterOperationHook`

---

## Error Handling Rules

See [./references/error-handling.md](./references/error-handling.md) for full error hierarchy and HTTP mapping.

| Layer | Throws | Catches |
|-------|--------|---------|
| `domain/rules` | Nothing (returns boolean) | Nothing |
| `domain/useCases` | `DomainError` | Nothing (propagates) |
| `infrastructure/payload` | Wraps Payload errors | Payload errors |
| Hooks `beforeChange` | Propagates `DomainError` | Nothing |
| Hooks `afterChange` | `handleAfterChangeHook` catches | Everything |
| API routes | `handlerRoute` catches | `DomainError` → HTTP status |

---

## Adoption Phases

See [./references/adoption-phases.md](./references/adoption-phases.md) for the full incremental strategy.

**Rule: never refactor for its own sake. Apply the pattern only when you are already touching that code.**

| Phase | What | Risk |
|-------|------|------|
| 0 | Lifecycle manifests + normalize hook wrappers | Zero behavior change |
| 1 | Extract domain rules from hooks | Isolated, small PRs |
| 2 | Ports + use cases for new code only | No migration needed |
| 3 | Migrate existing use cases (only when touched) | Low |
| 4 | Hook-first for fat routes | Admin/API sync |

---

## Key Conventions

- **`shared/`** is only for behavior reused by multiple modules. Never move code to `shared` just because it looks generic.
- **Inject `req.payload`** in hooks/endpoints. Use `getPayload()` only where no Payload instance is available.
- **Use classes with `execute()`** for use cases that need clear orchestration boundaries.
- **Define DTOs with Zod** at boundaries; avoid manual `typeof` branching.
- **Name things by responsibility**: prefer `uploadAuthorization`, `campaignActivationRules` over `utils.ts`, `common.ts`.
- **`infrastructure/`** holds adapters, stores, clients. HTTP concerns (IP, request/response shaping) belong in `interface/http/`.
