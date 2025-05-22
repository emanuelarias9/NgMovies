import { Component } from '@angular/core';
import { FormularioPeliculasComponent } from '../formulario-peliculas/formulario-peliculas.component';
import { CrearPeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-crear-pelicula',
  imports: [FormularioPeliculasComponent],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css',
})
export class CrearPeliculaComponent {
  guardarCambios(pelicula: CrearPeliculaDTO) {
    console.log('Creando la pelicula: ', pelicula);
  }
}
