import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MockDataService } from '../../../services/mock-data.service';

@Component({
  selector: 'app-mis-eventos', standalone: true, imports: [RouterLink, CurrencyPipe],
  templateUrl: './mis-eventos.component.html', styleUrl: './mis-eventos.component.scss',
})
export class MisEventosComponent {
  private data = inject(MockDataService);
  eventos = this.data.getEventos();
}
