import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MockDataService } from '../../../services/mock-data.service';

@Component({
  selector: 'app-eventos', standalone: true, imports: [RouterLink, CurrencyPipe],
  templateUrl: './eventos.component.html', styleUrl: './eventos.component.scss',
})
export class EventosComponent {
  private data = inject(MockDataService);
  eventos = this.data.getEventos();
}
