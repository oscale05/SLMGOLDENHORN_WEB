# Plan — Architecture & Phases

## Architecture
Nginx → Angular SSR (Node, port 4000) for `/`; PHP-FPM (port 9000) for `/api/*`; MySQL 8.

## Phases
1. Foundation: repo scaffolding, CI, env, DB migrations.
2. Frontend: Angular app, pages, i18n, SEO meta service, cookie banner.
3. Backend: PHP API (contact, leads, newsletter, meta webhook + data deletion).
4. Integration: frontend ↔ API, email, Meta verification.
5. SEO & Performance: SSR, sitemap, structured data, Lighthouse.
6. Meta App Review prep: legal pages, callback, domain verification.
7. QA & launch.

## Deliverables
- `frontend/`, `backend/`, `database/`, `infra/nginx/`.
- Docs in `docs/sdd/`.
