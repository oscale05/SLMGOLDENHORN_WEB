import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section class="hero">
      <div class="hero-inner">
        <h1 class="fade-in">Transformación Digital Orientada a Resultados.</h1>
        <h2 class="fade-in delay">En <strong>SLM GOLDEN HORN SRL</strong>, desarrollamos ecosistemas tecnológicos robustos.</h2>
        <a class="cta" href="#soluciones">Conoce Nuestras Soluciones</a>
      </div>
    </section>
    <section id="soluciones" class="units">
      <article class="card slide-up">
        <h3>Recaudación Digital Inteligente para el Sector Público y Privado.</h3>
        <p>Optimizamos la gestión de cobros y tributos mediante una pasarela transaccional segura, escalable y 100% integrable.</p>
        <ul><li>Integración REST API</li><li>Enrutamiento inteligente</li><li>Liquidación automatizada</li><li>Reportes en tiempo real</li></ul>
      </article>
      <article class="card slide-up delay">
        <h3>Chatbots Cognitivos: Atención 24/7 en todos tus canales.</h3>
        <p>Despliega agentes conversacionales impulsados por IA para interactuar con tus usuarios en tiempo real.</p>
        <ul><li>Integración nativa con Meta</li><li>NLP</li><li>Alta disponibilidad</li><li>Privacidad de datos</li></ul>
      </article>
    </section>
    <section class="agrotech">
      <h2>Triskal AgroTech</h2>
      <p>Gestión de datos de telemetría y plataformas digitales para el sector agroindustrial.</p>
    </section>
  `,
  styles: [`
    .hero { min-height: 70vh; display:flex; align-items:center; justify-content:center; background: linear-gradient(135deg,#0f172a,#1e3a8a); color:#fff; text-align:center; padding:4rem 1rem; }
    .hero h1 { font-size: clamp(2rem,5vw,3.5rem); margin-bottom:1rem; animation: fadeIn 1s ease forwards; }
    .hero h2 { font-size: clamp(1rem,2.5vw,1.5rem); max-width:800px; margin:0 auto 2rem; animation: fadeIn 1s ease .3s forwards; opacity:0; }
    .cta { display:inline-block; padding:.9rem 2rem; background:#22d3ee; color:#0f172a; border-radius:999px; text-decoration:none; font-weight:600; animation: fadeIn 1s ease .6s forwards; opacity:0; }
    .units { display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:2rem; padding:4rem 2rem; max-width:1200px; margin:0 auto; }
    .card { background:#fff; padding:2rem; border-radius:16px; box-shadow:0 10px 30px rgba(0,0,0,.08); animation: slideUp .8s ease forwards; opacity:0; }
    .card.delay { animation-delay:.2s; }
    @keyframes fadeIn { to { opacity:1; transform:translateY(0);} from { opacity:0; transform:translateY(10px);} }
    @keyframes slideUp { to { opacity:1; transform:translateY(0);} from { opacity:0; transform:translateY(30px);} }
  `]
})
export class HomeComponent {}
