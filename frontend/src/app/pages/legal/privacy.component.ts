import { Component } from '@angular/core';
@Component({
  selector: 'app-privacy',
  standalone: true,
  template: `<article class="legal"><h1>Política de Privacidad</h1>
  <p>SLM GOLDEN HORN SRL cumple Ley 25.326, GDPR y políticas Meta. No vendemos datos de Meta. Datos tratados según finalidades. Contacto: privacidad@slmgoldenhorn.com</p></article>`,
  styles: ['.legal{max-width:900px;margin:2rem auto;padding:2rem;line-height:1.6}']
})
export class PrivacyComponent {}
