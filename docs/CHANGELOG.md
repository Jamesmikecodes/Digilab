# Changelog

All notable changes, newest first. Format: `YYYY-MM-DD — branch — summary`.

## Unreleased — `feature/site-scaffold-and-seed-data`
- 2026-10-12 — reworked `index.html`: accessible header (`brand`, `nav-toggle`, `#primary-menu`), sidebar `li` → `button.sidebar-item[data-service]`, `#contact-button` `BUTTON` → `a[href=contact.html]`, footer added.
- 2026-10-12 — expanded `styles.css` (~+707/-129 vs `main`): site-header, hero, sidebar, modal, footer, responsive rules.
- 2026-10-12 — added multi-page scaffold: `about.html`, `product.html`, `portfolio.html`, `blog.html`, `contact.html` (placeholder copy, shared header/footer/modal).
- 2026-10-12 — added `script.js`: nav-toggle, modal open/close, `.contact-form` validation, `services{}` + `setActiveService()`.
- 2026-10-12 — added frontend groundwork (not yet wired): `js/config.js`, `js/api.js`, `js/auth.js`.
- 2026-10-12 — added seeds: `data/courses.json`, `data/services.json`, `data/testimonials.json`, `data/posts.json`, `data/events.json`, `data/ideas.json` (all `{"items":[...]}` placeholders).
- 2026-10-12 — `.gitignore`: added `.DS_Store`.

### Known gaps (next)
- No HTML loads `js/*` yet (`grep DIGILAB` only in `js/`). Need `<script src="js/config.js">`, `api.js`, `auth.js` wiring.
- `script.js:49` checks `contactButton.tagName==="BUTTON"` — dead code now that `#contact-button` is `<a>`. Decide: link-nav vs modal-open.
- `contact.html` has duplicate `id="contact-form"` + `id="contact-form-modal"`; modal copy duplicates inline form.
- Seeds are placeholders (`example.com`, `TBD` prices).

## 2026-04-08 — `main` (`fbf0dfc`)
- Merge `add-clickable-contact-form-with-styling`: branded contact form modal for Get in touch button.
