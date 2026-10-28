# Data Model — MySQL 8

## tables
- `contacts` (id, name, email, company, message, lang, ip, created_at)
- `newsletter_subscribers` (id, email, token, confirmed_at, created_at)
- `meta_data_deletion_requests` (id, user_id, confirmation_code, status, created_at)
- `admin_users` (id, email, password_hash, role, created_at)
- `audit_log` (id, action, entity, entity_id, ip, created_at)

All tables: utf8mb4, InnoDB, timestamps, indexed email.
Migration files in `database/migrations/`.
