# API Contract — REST (PHP 8.3)

Base: `/api/v1`

- `GET /health` → {status}
- `POST /contact` → {name,email,company,message,lang} → 201
- `POST /newsletter/subscribe` → {email} → 202 (double opt-in)
- `GET /newsletter/confirm?token=` → 200
- `POST /meta/webhook` → verify X-Hub-Signature-256
- `POST /meta/data-deletion` → {signed_request} → {url, confirmation_code}
- `GET /legal/privacy|cookies|terms` (served by frontend routes)

Errors: JSON {error, code}. Rate limit: 60 req/min per IP.
Auth admin: Bearer JWT (HS256).
