import { Injectable } from '@angular/core';

export type Tema = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private clave = 'eventra-tema';
  tema: Tema = (document.documentElement.getAttribute('data-bs-theme') as Tema) || 'light';

  alternar(): void { this.aplicar(this.tema === 'dark' ? 'light' : 'dark'); }

  private aplicar(t: Tema): void {
    this.tema = t;
    document.documentElement.setAttribute('data-bs-theme', t);
    try { localStorage.setItem(this.clave, t); } catch { /* almacenamiento no disponible */ }
  }
}
