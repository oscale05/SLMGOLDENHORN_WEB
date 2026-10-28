# Constitution — SLM GOLDEN HORN SRL Corporate Website

## Stack
- Frontend: Angular (latest stable), SSR + prerender, Tailwind CSS.
- Backend: PHP 8.3 native (no framework), REST JSON, PDO.
- Database: MySQL 8.
- Infra: Nginx reverse proxy → Angular SSR (Node) at `/`, PHP-FPM at `/api/*`.
- i18n: ES (primary) + EN.

## Principles
1. Security first: prepared statements, strict typing, input validation, security headers.
2. SEO first: SSR, semantic HTML, structured data, Core Web Vitals.
3. Meta compliance: public legal pages + data deletion callback before App Review.
4. Accessibility: WCAG 2.1 AA.
5. No secrets in repo; use `.env`.

## Conventions
- Angular standalone components, signals, OnPush.
- PHP PSR-12, strict_types=1, namespaced src/.
- MySQL utf8mb4, InnoDB, migrations versioned.

## Domains
- slmgoldenhorn.com (canonical), slmgoldenhorn.com.ar (301 redirect + hreflang).
