import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MockDataService } from '../../../services/mock-data.service';

@Component({
  selector: 'app-admin-reservas', standalone: true, imports: [CurrencyPipe],
  templateUrl: './admin-reservas.component.html', styleUrl: './admin-reservas.component.scss',
})
export class AdminReservasComponent {
  private data = inject(MockDataService);
  reservas = this.data.getReservasAgente();
  estados = ['Pendiente', 'Confirmada', 'Cancelada'];
  badge(estado: string) { return estado === 'Confirmada' ? 'bg-success' : estado === 'Pendiente' ? 'bg-warning text-dark' : 'bg-danger'; }
}
