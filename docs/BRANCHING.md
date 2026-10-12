# Branching Guide

Branch: `feature/site-scaffold-and-seed-data` (current).
Base: `main` at `fbf0dfc`.

## Model
- `main` = always deployable. No direct commits.
- `feature/*` = one feature per branch, PR to `main`.
- This branch is a consolidation branch for pre-existing WIP. Future work splits:
  - `feature/header-nav-services-ui`
  - `feature/multi-page-scaffold`
  - `feature/local-seed-api-auth`

## Workflow
1. `git checkout -b feature/<name>` from updated `main`
2. Implement, update `docs/CHANGELOG.md` + relevant docs
3. `git status --short`, review diff
4. Commit with conventional message: `feat|fix|docs|style|refactor(scope): summary`
5. Push `git push -u origin feature/<name>`, open PR to `main`

## Rules
- Don't commit to `main`.
- Keep `index.html` / `styles.css` / `script.js` changes scoped; avoid mixing data-layer changes in UI branches.
- `js/config.js` is source of truth for seed paths. `API_BASE=""` until backend exists.
- `js/auth.js` is localStorage prototype only — never real credentials.
