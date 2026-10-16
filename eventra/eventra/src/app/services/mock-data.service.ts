import { Injectable } from '@angular/core';
import { Evento, Reserva, Usuario } from '../models/models';

/** Servicio con datos mockeados. Se reemplazará por llamadas HTTP al backend. */
@Injectable({ providedIn: 'root' })
export class MockDataService {
  private usuario: Usuario = { id: 1, nombre: 'Laura Gómez', email: 'laura.gomez@correo.com', rol: 'cliente' };

  private eventos: Evento[] = [
    { id: 1, nombre: 'Festival de Jazz del Valle', categoria: 'Música', fecha: '2026-11-20', lugar: 'Teatro Municipal, Cali', precio: 85000, cupos: 120, descripcion: 'Una noche con las mejores bandas de jazz de la región.', imagen: 'assets/eventos/festival-jazz.jpg' },
    { id: 2, nombre: 'Feria Gastronómica Palmira', categoria: 'Gastronomía', fecha: '2026-11-28', lugar: 'Parque Bolívar, Palmira', precio: 25000, cupos: 300, descripcion: 'Más de 40 puestos con sabores del Pacífico y el Valle.', imagen: 'assets/eventos/feria-gastronomica.jpg' },
    { id: 3, nombre: 'Conferencia Tech Valle 2026', categoria: 'Tecnología', fecha: '2026-12-05', lugar: 'Centro de Convenciones, Cali', precio: 120000, cupos: 80, descripcion: 'Charlas sobre desarrollo web, datos e inteligencia artificial.', imagen: 'assets/eventos/conferencia-tech.jpg' },
    { id: 4, nombre: 'Maratón Ciudad Verde', categoria: 'Deportes', fecha: '2026-12-12', lugar: 'Ciclovía, Palmira', precio: 40000, cupos: 500, descripcion: 'Carrera de 5K, 10K y 21K para toda la familia.', imagen: 'assets/eventos/maraton.jpg' },
    { id: 5, nombre: 'Noche de Teatro Clásico', categoria: 'Arte', fecha: '2027-01-15', lugar: 'Casa de la Cultura, Tuluá', precio: 35000, cupos: 60, descripcion: 'Montaje de obras clásicas con elenco local.', imagen: 'assets/eventos/teatro-clasico.jpg' },
  ];

  private reservas: Reserva[] = [
    { id: 101, eventoId: 1, evento: 'Festival de Jazz del Valle', cliente: 'Laura Gómez', fecha: '2026-10-10', tickets: 2, total: 170000, estado: 'Confirmada' },
    { id: 102, eventoId: 3, evento: 'Conferencia Tech Valle 2026', cliente: 'Laura Gómez', fecha: '2026-10-12', tickets: 1, total: 120000, estado: 'Pendiente' },
    { id: 103, eventoId: 4, evento: 'Maratón Ciudad Verde', cliente: 'Laura Gómez', fecha: '2026-10-14', tickets: 3, total: 120000, estado: 'Cancelada' },
    { id: 104, eventoId: 2, evento: 'Feria Gastronómica Palmira', cliente: 'Carlos Ruiz', fecha: '2026-10-15', tickets: 4, total: 100000, estado: 'Pendiente' },
    { id: 105, eventoId: 1, evento: 'Festival de Jazz del Valle', cliente: 'Ana Torres', fecha: '2026-10-16', tickets: 2, total: 170000, estado: 'Pendiente' },
  ];

  getUsuario(): Usuario { return this.usuario; }
  getEventos(): Evento[] { return this.eventos; }
  getEvento(id: number): Evento | undefined { return this.eventos.find(e => e.id === id); }
  /** Reservas del cliente (Cliente - Mis reservas) */
  getReservasCliente(): Reserva[] { return this.reservas.filter(r => r.cliente === this.usuario.nombre); }
  /** Todas las reservas solicitadas (Agente - Administrar reservas) */
  getReservasAgente(): Reserva[] { return this.reservas; }

  getReportes() {
    return {
      totalEventos: this.eventos.length,
      totalReservas: this.reservas.length,
      usuarios: 248,
      ingresos: this.reservas.filter(r => r.estado === 'Confirmada').reduce((s, r) => s + r.total, 0),
      reservasPorMes: [
        { etiqueta: 'Jun', valor: 22 }, { etiqueta: 'Jul', valor: 35 }, { etiqueta: 'Ago', valor: 41 },
        { etiqueta: 'Sep', valor: 38 }, { etiqueta: 'Oct', valor: 56 },
      ],
      porCategoria: [
        { etiqueta: 'Música', valor: 34 }, { etiqueta: 'Gastronomía', valor: 27 },
        { etiqueta: 'Tecnología', valor: 21 }, { etiqueta: 'Deportes', valor: 12 }, { etiqueta: 'Arte', valor: 6 },
      ],
    };
  }
}
