import { Component } from '@angular/core';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';

@Component({
  selector: 'app-root',
  imports: [ListadoPeliculasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
