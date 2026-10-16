import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MockDataService } from '../../../services/mock-data.service';

@Component({
  selector: 'app-mis-reservas', standalone: true, imports: [RouterLink, CurrencyPipe],
  templateUrl: './mis-reservas.component.html', styleUrl: './mis-reservas.component.scss',
})
export class MisReservasComponent {
  private data = inject(MockDataService);
  reservas = this.data.getReservasCliente();
  badge(estado: string) { return estado === 'Confirmada' ? 'bg-success' : estado === 'Pendiente' ? 'bg-warning text-dark' : 'bg-danger'; }
}
