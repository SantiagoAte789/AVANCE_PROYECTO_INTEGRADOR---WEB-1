import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MockDataService } from '../../../services/mock-data.service';

@Component({
  selector: 'app-registro', standalone: true, imports: [RouterLink],
  templateUrl: './registro.component.html', styleUrl: './registro.component.scss',
})
export class RegistroComponent {
  private data = inject(MockDataService);
  roles = ['Cliente', 'Agente'];
}
