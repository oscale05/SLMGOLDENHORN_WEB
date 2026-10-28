import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <header class="nav">
      <span class="brand">SLM GOLDEN HORN SRL</span>
      <nav>
        <a href="#inicio">Inicio</a>
        <a href="#recaudacion">Recaudación</a>
        <a href="#chatbots">Chatbots e IA</a>
        <a href="#agrotech">AgroTech</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>

    <section id="inicio" class="hero">
      <div class="hero-inner">
        <h1 class="fade-in">Transformación Digital Orientada a Resultados.</h1>
        <h2 class="fade-in delay">En <strong>SLM GOLDEN HORN SRL</strong>, desarrollamos ecosistemas tecnológicos robustos. Desde plataformas de recaudación omnicanal para el sector público hasta agentes de Inteligencia Artificial para atención automatizada.</h2>
        <a class="cta" href="#recaudacion">Conoce Nuestras Soluciones</a>
      </div>
      <div class="hero-bg"></div>
    </section>

    <section id="recaudacion" class="unit">
      <div class="unit-inner slide-up">
        <h2>Recaudación Digital Inteligente para el Sector Público y Privado.</h2>
        <p class="lead">Optimizamos la gestión de cobros y tributos mediante una pasarela transaccional segura, escalable y 100% integrable.</p>
        <p>Desarrollamos arquitecturas de pago a medida diseñadas para soportar altos volúmenes transaccionales de municipios, entidades de la administración pública y empresas de servicios. Nuestra plataforma consolida todos los medios de pago digitales y billeteras virtuales del mercado en una única API de fácil integración. Facilitamos la conciliación financiera, reducimos la morosidad y brindamos al ciudadano una experiencia de pago ágil, segura y sin fricciones. Desde el cobro de tasas municipales hasta la facturación de servicios, nuestra infraestructura garantiza trazabilidad total y cumplimiento de las normativas fiscales vigentes.</p>
        <ul class="features">
          <li>Integración REST API</li><li>Enrutamiento inteligente de transacciones</li><li>Liquidación automatizada</li><li>Reportes en tiempo real</li>
        </ul>
      </div>
    </section>

    <section id="chatbots" class="unit alt">
      <div class="unit-inner slide-up">
        <h2>Chatbots Cognitivos: Atención 24/7 en todos tus canales.</h2>
        <p class="lead">Despliega agentes conversacionales impulsados por modelos de Inteligencia Artificial Avanzada para interactuar con tus usuarios en tiempo real.</p>
        <p>Revolucionamos la atención ciudadana y el soporte al cliente integrando modelos de lenguaje (LLM) de última generación directamente en las plataformas que tus usuarios ya utilizan. Nuestros sistemas cognitivos interactúan de manera natural y fluida en WhatsApp, Telegram, Instagram y portales web. Lejos de los bots basados en árboles de decisión rígidos, nuestras soluciones comprenden el contexto, resuelven consultas complejas, gestionan turnos y escalan a operadores humanos de forma inteligente cuando es necesario. Una solución indispensable para descongestionar canales de atención y elevar los estándares de servicio.</p>
        <ul class="features">
          <li>Integración nativa con Meta (WhatsApp/Instagram)</li><li>Procesamiento de lenguaje natural (NLP)</li><li>Alta disponibilidad</li><li>Privacidad de datos en cada interacción</li>
        </ul>
      </div>
    </section>

    <section id="agrotech" class="unit">
      <div class="unit-inner slide-up">
        <h2>Triskal AgroTech</h2>
        <p class="lead">Gestión de datos de telemetría y plataformas digitales para el sector agroindustrial.</p>
        <p>Soluciones tecnológicas para el agro: monitoreo, trazabilidad y plataformas digitales para mejorar la productividad y sostenibilidad.</p>
      </div>
    </section>

    <section id="contacto" class="contact">
      <div class="contact-inner">
        <h2>Contacto</h2>
        <form (submit)="onSubmit($event)">
          <input placeholder="Nombre" required />
          <input type="email" placeholder="Email" required />
          <input placeholder="Empresa" />
          <textarea placeholder="Mensaje" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>

    <footer class="footer">
      <p>© 2026 SLM GOLDEN HORN SRL. <a href="/privacidad">Privacidad</a> · <a href="/cookies">Cookies</a> · <a href="/terminos">Términos</a></p>
    </footer>
  `,
  styles: [`
    :host { display:block; font-family: system-ui, sans-serif; color:#0f172a; }
    .nav { position:sticky; top:0; z-index:10; display:flex; justify-content:space-between; align-items:center; padding:1rem 2rem; background:rgba(15,23,42,.9); backdrop-filter:blur(8px); color:#fff; }
    .nav a { color:#cbd5e1; margin-left:1.2rem; text-decoration:none; font-size:.95rem; transition:color .2s; }
    .nav a:hover { color:#22d3ee; }
    .brand { font-weight:700; letter-spacing:.5px; }
    .hero { position:relative; min-height:85vh; display:flex; align-items:center; justify-content:center; text-align:center; overflow:hidden; background:linear-gradient(135deg,#0f172a 0%,#1e3a8a 60%,#0ea5e9 100%); color:#fff; padding:4rem 1.5rem; }
    .hero-inner { position:relative; z-index:2; max-width:900px; }
    .hero h1 { font-size: clamp(2.2rem,6vw,4rem); margin:0 0 1.5rem; line-height:1.1; }
    .hero h2 { font-size: clamp(1rem,2.2vw,1.35rem); font-weight:400; opacity:.9; margin:0 0 2.5rem; }
    .cta { display:inline-block; padding:1rem 2.2rem; background:#22d3ee; color:#0f172a; border-radius:999px; text-decoration:none; font-weight:700; box-shadow:0 10px 30px rgba(34,211,238,.35); transition:transform .2s, box-shadow .2s; }
    .cta:hover { transform:translateY(-3px); box-shadow:0 15px 40px rgba(34,211,238,.5); }
    .hero-bg { position:absolute; inset:0; background: radial-gradient(circle at 20% 30%, rgba(34,211,238,.25), transparent 40%), radial-gradient(circle at 80% 70%, rgba(14,165,233,.2), transparent 40%); animation: float 8s ease-in-out infinite; }
    @keyframes float { 0%,100%{transform:translate(0,0)} 50%{transform:translate(20px,-20px)} }
    .unit { padding:5rem 1.5rem; }
    .unit.alt { background:#f1f5f9; }
    .unit-inner { max-width:900px; margin:0 auto; }
    .unit h2 { font-size: clamp(1.6rem,3.5vw,2.4rem); margin-bottom:1rem; }
    .lead { font-size:1.15rem; color:#334155; margin-bottom:1.2rem; }
    .features { display:flex; flex-wrap:wrap; gap:.6rem; list-style:none; padding:0; margin-top:1.5rem; }
    .features li { background:#e2e8f0; padding:.5rem 1rem; border-radius:999px; font-size:.9rem; }
    .contact { padding:5rem 1.5rem; background:#0f172a; color:#fff; }
    .contact-inner { max-width:600px; margin:0 auto; }
    .contact h2 { text-align:center; margin-bottom:2rem; }
    .contact form { display:flex; flex-direction:column; gap:1rem; }
    .contact input, .contact textarea { padding:.8rem 1rem; border:none; border-radius:10px; font-size:1rem; }
    .contact textarea { min-height:120px; resize:vertical; }
    .contact button { padding:.9rem; background:#22d3ee; color:#0f172a; border:none; border-radius:10px; font-weight:700; cursor:pointer; }
    .footer { text-align:center; padding:2rem; background:#020617; color:#94a3b8; font-size:.9rem; }
    .footer a { color:#22d3ee; margin:0 .4rem; }
    .fade-in { opacity:0; animation: fadeIn .9s ease forwards; }
    .fade-in.delay { animation-delay:.25s; }
    .slide-up { opacity:0; animation: slideUp .9s ease forwards; }
    @keyframes fadeIn { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
    @keyframes slideUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
  `]
})
export class HomeComponent {
  onSubmit(e: Event) { e.preventDefault(); alert('Gracias por contactarnos.'); }
}
