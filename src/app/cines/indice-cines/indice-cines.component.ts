import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-indice-cines',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './indice-cines.component.html',
  styleUrl: './indice-cines.component.css',
})
export class IndiceCinesComponent {}
