# Specification — SLM GOLDEN HORN SRL

## Pages (from "Estructura y Textos de la Página Web")
- Home: Hero "Transformación Digital Orientada a Resultados.", CTA "Conoce Nuestras Soluciones", 2 business units.
- Unidad 1: "Recaudación Digital Inteligente para el Sector Público y Privado." (pagos, REST API, liquidación, reportes).
- Unidad 2: "Chatbots Cognitivos: Atención 24/7 en todos tus canales." (LLM, WhatsApp/Telegram/Instagram/web).
- AgroTech (Triskal AgroTech): telemetría y plataformas (referenced in privacy policy).
- Contacto: formulario (nombre, email, empresa, mensaje).

## Legal pages (from docs)
- `/privacidad` — Política de Privacidad (Ley 25.326, GDPR, Meta policies).
- `/cookies` — Política de Cookies.
- `/terminos` — Términos y Condiciones (Meta-compatible).

## Functional requirements
- Contact form → DB + email notification.
- Newsletter opt-in (double opt-in).
- Language switcher ES/EN.
- Cookie consent banner (necessary/analytics/Meta Pixel).
- Data deletion callback endpoint for Meta App Review.

## Non-functional
- LCP < 2.5s, CLS < 0.1, INP < 200ms.
- HTTPS only, HSTS.
- Mobile-first responsive.
