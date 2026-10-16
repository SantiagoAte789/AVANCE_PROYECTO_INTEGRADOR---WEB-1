import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MockDataService } from '../../../services/mock-data.service';

@Component({
  selector: 'app-login', standalone: true, imports: [RouterLink],
  templateUrl: './login.component.html', styleUrl: './login.component.scss',
})
export class LoginComponent {
  private data = inject(MockDataService);
  usuario = this.data.getUsuario();
}
