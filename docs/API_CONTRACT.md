# Data / API Contract

No backend. Frontend reads local seeds with the same shape the API will return later.

## Config — `js/config.js`
`window.DIGILAB.CONFIG = { API_BASE:"", USE_LOCAL_SEED:true, SEED_PATHS:{...} }`

| resource | seed path |
|---|---|
| courses | `data/courses.json` |
| services | `data/services.json` |
| testimonials | `data/testimonials.json` |
| posts | `data/posts.json` |
| events | `data/events.json` |
| ideas | `data/ideas.json` |

## API — `js/api.js`
`window.DIGILAB.API.list(resource)` → `Promise<items[]>`
- Resolves `SEED_PATHS[resource]` via `fetch`, returns `data.items || []`.
- Throws `Unknown resource: <name>` if missing.
- Future: `if (!cfg.USE_LOCAL_SEED && cfg.API_BASE) return getJSON(cfg.API_BASE+"/"+resource)` — same function name, no page rewrites.
- Usage: `const courses = await DigilabAPI.list("courses")` (note: actual global is `window.DIGILAB.API`).

## Auth — `js/auth.js` (prototype, NOT secure)
`window.DIGILAB.Auth.{signup,login,logout,currentUser}`, session shape `{user:{name,email,role}, token:"local-demo", issuedAt}` in `localStorage["digilab.session.v1"]`, emits `digilab:session` CustomEvent.

## Seed shapes (`{"items":[...]}`)
- `courses.json`: `{id, category: course|digital-product, title, summary, level?, price}` ×5
- `services.json`: `{id, category: research, title, summary}` ×3
- `testimonials.json`: `{id, name, role, quote, rating}` ×3
- `posts.json`: `{id, kind: original|external, title, summary, date?, source?, url?}` ×3
- `events.json`: `{id, title, date, location, url, note}` ×2
- `ideas.json`: `{id, title, summary, status: testing|proposed, votes}` ×2

## Wiring status
NOT wired: no `*.html` includes `js/config.js` / `api.js` / `auth.js`. Next step is adding script tags + render functions per page.
