export type Rol = 'cliente' | 'agente' | 'admin';
export type EstadoReserva = 'Pendiente' | 'Confirmada' | 'Cancelada';

export interface Usuario { id: number; nombre: string; email: string; rol: Rol; }
export interface Evento {
  id: number; nombre: string; categoria: string; fecha: string; lugar: string;
  precio: number; cupos: number; descripcion: string; imagen: string;
}
export interface Reserva {
  id: number; eventoId: number; evento: string; cliente: string; fecha: string;
  tickets: number; total: number; estado: EstadoReserva;
}
