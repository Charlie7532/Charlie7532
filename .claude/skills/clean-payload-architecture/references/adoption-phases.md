# Incremental Adoption Phases

**Core rule: never refactor for its own sake. Apply the pattern only when you are already touching that code.**

---

## Phase 0 — Lifecycle Manifests + Normalize Hook Wrappers

**Goal:** Zero behavior change — only reorganization and traceability.

Steps per collection:
1. Create `modules/<feature>/interface/lifecycle.ts`
2. Add a JSDoc comment block listing every hook, its trigger, and what it does
3. Move each existing hook into a named `const` using the appropriate `handle*Hook` wrapper
4. Set `hooks: featureLifecycle` in `collections/<Feature>/index.ts`

Result: anyone can open `lifecycle.ts` and immediately understand the entire collection's behavior.

---

## Phase 1 — Extract Domain Rules

**Goal:** Move `if` statements with business meaning out of hooks.

Steps:
1. Identify every conditional inside a hook handler
2. If the condition encodes a business rule, extract it as a pure function in `modules/<feature>/domain/rules/<rule>.ts`
3. The hook calls the rule function — the hook itself has no `if`

Each extraction is its own small, isolated PR.

---

## Phase 2 — Ports and Use Cases for New Code

**Goal:** Any new feature follows the full pattern from the start.

Steps:
1. Create `DomainError` hierarchy in `src/shared/kernel/errors.ts` if not already there
2. Add HTTP status mapping in `handlerRoute`
3. For every new feature: define port → create use case → create Payload adapter → write thin hook

Do **not** migrate existing features in this phase.

---

## Phase 3 — Migrate Existing Use Cases (Only When Touched)

**Goal:** Gradually move existing `server/useCases/` to `modules/*/domain/useCases/` with injected ports.

Steps:
1. Trigger: a bug fix or feature request requires touching an existing use case
2. At that moment, move it to `modules/<feature>/domain/useCases/`
3. Replace direct `payload.*` calls with port calls
4. Create the corresponding Payload adapter

Never migrate a use case just to migrate it.

---

## Phase 4 — Hook-First for Fat Routes

**Goal:** Move logic from large route handlers into hooks + use cases so the Admin panel executes the same flow.

Steps:
1. Identify the operations happening in the route (validate, transform, create, emit events)
2. Move each operation to the appropriate use case
3. Have the route call `payload.create()` / `payload.update()` instead of doing the work directly
4. The hooks that fire from those Payload calls now execute the use cases
5. Slim the route to: parse → validate → call `payload.*` → return response

---

## Decision: When to Apply Which Phase

| Trigger | Action |
|---------|--------|
| Adding a new hook | Phase 0 first; then extract rule (Phase 1) |
| Building a new feature | Phase 2 (full pattern from day 1) |
| Bug in existing hook | Phase 0 + Phase 1 for that hook while fixing the bug |
| Route handler getting too large | Phase 4: move logic to hooks |
| Touching an existing use case | Phase 3: migrate only that use case |

---

## Conventions Validated by Migration Experience

### shared vs module-local
- `src/shared/` is reserved for behavior reused by **multiple** modules.
- If a reusable piece only belongs to one feature, keep it inside `src/modules/<feature>/`.
- Never move code to `shared` just because it looks generic; only move it when there is a real cross-module reuse need.

### Source of truth
- When a feature has a stable home in `src/modules/<feature>/`, that folder is the source of truth.
- Any `src/lib/<feature>/` that still exists should be treated as transitional migration debt.

### Payload injection
- In hooks, Payload endpoints, jobs, and other native runtimes, prefer `req.payload` over initializing a new client with `getPayload()`.
- Use `getPayload()` only when no Payload instance is available in the current context (e.g. scripts, tests).

### Naming
- Avoid ambiguous names like `shared.ts`, `common.ts`, `utils.ts` inside a feature folder.
- Prefer names that declare responsibility: `uploadSchemas`, `uploadAuthorization`, `campaignActivationRules`.

### interface vs infrastructure
- HTTP concerns (IP resolution, request/response shaping) belong in `interface/http/`.
- `infrastructure/` holds adapters, stores, clients, and config — not HTTP boundary logic.
- Feature-specific repositories stay inside `src/modules/<feature>/infrastructure/`.
