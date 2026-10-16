import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegistroComponent } from './pages/auth/registro/registro.component';
import { EventosComponent } from './pages/cliente/eventos/eventos.component';
import { ReservarComponent } from './pages/cliente/reservar/reservar.component';
import { MisReservasComponent } from './pages/cliente/mis-reservas/mis-reservas.component';
import { RegistrarEventoComponent } from './pages/agente/registrar-evento/registrar-evento.component';
import { MisEventosComponent } from './pages/agente/mis-eventos/mis-eventos.component';
import { AdminReservasComponent } from './pages/agente/admin-reservas/admin-reservas.component';
import { ReportesComponent } from './pages/admin/reportes/reportes.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/login', component: LoginComponent, title: 'Eventra | Iniciar sesión' },
  { path: 'auth/registro', component: RegistroComponent, title: 'Eventra | Registro' },
  { path: 'cliente/eventos', component: EventosComponent, title: 'Eventra | Eventos' },
  { path: 'cliente/reservar/:id', component: ReservarComponent, title: 'Eventra | Reservar' },
  { path: 'cliente/mis-reservas', component: MisReservasComponent, title: 'Eventra | Mis reservas' },
  { path: 'agente/registrar-evento', component: RegistrarEventoComponent, title: 'Eventra | Registrar evento' },
  { path: 'agente/eventos', component: MisEventosComponent, title: 'Eventra | Eventos registrados' },
  { path: 'agente/reservas', component: AdminReservasComponent, title: 'Eventra | Administrar reservas' },
  { path: 'admin/reportes', component: ReportesComponent, title: 'Eventra | Reportes' },
  { path: '**', redirectTo: 'auth/login' },
];
