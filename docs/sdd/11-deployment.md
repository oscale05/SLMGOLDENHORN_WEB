# Deployment

- Server: dedicated, Nginx reverse proxy, PHP-FPM 8.3, Node 20 LTS, MySQL 8.
- SSL: Let's Encrypt (auto-renew).
- Domains: slmgoldenhorn.com (canonical) + slmgoldenhorn.com.ar (301).
- Process manager: PM2/systemd for Angular SSR; php-fpm service.
- Backups: daily MySQL dump + weekly full; off-site.
- Monitoring: uptime checks, error logging (no PII).
- Zero-downtime deploy: build → swap → reload.
