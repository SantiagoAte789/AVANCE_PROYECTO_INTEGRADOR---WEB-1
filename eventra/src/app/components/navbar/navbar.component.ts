import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar', standalone: true, imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html', styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  grupos = [
    { nombre: 'Cliente', enlaces: [
      { ruta: '/cliente/eventos', texto: 'Eventos' }, { ruta: '/cliente/mis-reservas', texto: 'Mis reservas' } ] },
    { nombre: 'Agente', enlaces: [
      { ruta: '/agente/registrar-evento', texto: 'Registrar evento' }, { ruta: '/agente/eventos', texto: 'Eventos registrados' },
      { ruta: '/agente/reservas', texto: 'Administrar reservas' } ] },
    { nombre: 'Administrador', enlaces: [ { ruta: '/admin/reportes', texto: 'Reportes' } ] },
  ];
}
