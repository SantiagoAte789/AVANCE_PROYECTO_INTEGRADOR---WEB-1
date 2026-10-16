import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MockDataService } from '../../../services/mock-data.service';

@Component({
  selector: 'app-reservar', standalone: true, imports: [RouterLink, CurrencyPipe],
  templateUrl: './reservar.component.html', styleUrl: './reservar.component.scss',
})
export class ReservarComponent {
  private data = inject(MockDataService);
  evento = this.data.getEvento(Number(inject(ActivatedRoute).snapshot.paramMap.get('id')));
  tickets = [1, 2, 3, 4, 5];
}
