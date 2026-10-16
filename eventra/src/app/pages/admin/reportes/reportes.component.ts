import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MockDataService } from '../../../services/mock-data.service';

@Component({
  selector: 'app-reportes', standalone: true, imports: [CurrencyPipe],
  templateUrl: './reportes.component.html', styleUrl: './reportes.component.scss',
})
export class ReportesComponent {
  private data = inject(MockDataService);
  r = this.data.getReportes();
  maxMes = Math.max(...this.r.reservasPorMes.map(m => m.valor));
  totalCat = this.r.porCategoria.reduce((s, c) => s + c.valor, 0);
}
