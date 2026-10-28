# Security — PHP 8.3

- `declare(strict_types=1)` everywhere.
- PDO with prepared statements; no string interpolation in SQL.
- Input validation + sanitization (filter_var, custom validators).
- CSRF tokens for state-changing endpoints.
- Rate limiting by IP (sliding window).
- Security headers: CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, HSTS (via Nginx).
- Secrets in `.env` (not committed); use php-dotenv or native parse.
- Password hashing (password_hash, Argon2id).
- Logging without PII; audit log table.
- Dependency updates; PHP 8.3 latest patch.
- Nginx: TLS 1.2/1.3, OCSP stapling.
