import { Component } from '@angular/core';
import { FormularioPeliculasComponent } from '../formulario-peliculas/formulario-peliculas.component';
import { CrearPeliculaDTO } from '../pelicula';
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultiple';
import { ActorAutoCompleteDTO } from '../../actores/actores';

@Component({
  selector: 'app-crear-pelicula',
  imports: [FormularioPeliculasComponent],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css',
})
export class CrearPeliculaComponent {
  generosSeleccionados: SelectorMultipleDTO[] = [];
  generosNoSeleccionados: SelectorMultipleDTO[] = [
    { key: 1, value: 'Acción' },
    { key: 2, value: 'Comedia' },
    { key: 3, value: 'Drama' },
    { key: 4, value: 'Terror' },
    { key: 5, value: 'Ciencia Ficción' },
    { key: 6, value: 'Romance' },
  ];

  cinesSeleccionados: SelectorMultipleDTO[] = [];
  cinesNoSeleccionados: SelectorMultipleDTO[] = [
    { key: 1, value: 'cine 1' },
    { key: 2, value: 'cine 2' },
    { key: 3, value: 'cine 3' },
  ];

  actoresSeleccionados: ActorAutoCompleteDTO[] = [];

  guardarCambios(pelicula: CrearPeliculaDTO) {
    console.log('Creando la pelicula: ', pelicula);
  }
}
