import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <section class="contact">
      <h1>Contacto</h1>
      <form (ngSubmit)="submit()">
        <input [(ngModel)]="m.name" name="name" placeholder="Nombre" required />
        <input [(ngModel)]="m.email" name="email" type="email" placeholder="Email" required />
        <input [(ngModel)]="m.company" name="company" placeholder="Empresa" />
        <textarea [(ngModel)]="m.message" name="message" placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar</button>
        <p *ngIf="ok">Enviado. Gracias.</p>
      </form>
    </section>
  `,
  styles: [`.contact{max-width:600px;margin:2rem auto;padding:2rem} form{display:flex;flex-direction:column;gap:1rem} input,textarea{padding:.7rem;border:1px solid #ccc;border-radius:8px} button{padding:.8rem;background:#1e3a8a;color:#fff;border:none;border-radius:8px}`]
})
export class ContactComponent {
  m = { name: '', email: '', company: '', message: '', lang: 'es' };
  ok = false;
  constructor(private http: HttpClient) {}
  submit() {
    this.http.post('/api/v1/contact', this.m).subscribe(() => this.ok = true);
  }
}
