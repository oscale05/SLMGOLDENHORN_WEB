import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'es', pathMatch: 'full' },
  { path: 'es', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'en', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'contacto', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
  { path: 'privacidad', loadComponent: () => import('./pages/legal/privacy.component').then(m => m.PrivacyComponent) },
  { path: 'cookies', loadComponent: () => import('./pages/legal/cookies.component').then(m => m.CookiesComponent) },
  { path: 'terminos', loadComponent: () => import('./pages/legal/terms.component').then(m => m.TermsComponent) },
  { path: 'data-deletion', loadComponent: () => import('./pages/legal/data-deletion.component').then(m => m.DataDeletionComponent) },
];
