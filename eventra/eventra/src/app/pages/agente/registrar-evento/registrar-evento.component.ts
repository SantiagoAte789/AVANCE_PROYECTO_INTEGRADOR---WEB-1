import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MockDataService } from '../../../services/mock-data.service';

@Component({
  selector: 'app-registrar-evento', standalone: true, imports: [RouterLink],
  templateUrl: './registrar-evento.component.html', styleUrl: './registrar-evento.component.scss',
})
export class RegistrarEventoComponent {
  private data = inject(MockDataService);
  categorias = ['Música', 'Gastronomía', 'Tecnología', 'Deportes', 'Arte'];
}
