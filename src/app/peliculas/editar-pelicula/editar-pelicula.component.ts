import { Component, Input, numberAttribute } from '@angular/core';
import { CrearPeliculaDTO, PeliculaDTO } from '../pelicula';
import { FormularioPeliculasComponent } from '../formulario-peliculas/formulario-peliculas.component';
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultiple';
import { ActorAutoCompleteDTO } from '../../actores/actores';

@Component({
  selector: 'app-editar-pelicula',
  imports: [FormularioPeliculasComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css',
})
export class EditarPeliculaComponent {
  @Input({ transform: numberAttribute })
  id!: number;

  generosSeleccionados: SelectorMultipleDTO[] = [{ key: 1, value: 'Acción' }];
  generosNoSeleccionados: SelectorMultipleDTO[] = [
    { key: 2, value: 'Comedia' },
    { key: 3, value: 'Drama' },
    { key: 4, value: 'Terror' },
    { key: 5, value: 'Ciencia Ficción' },
    { key: 6, value: 'Romance' },
  ];

  cinesSeleccionados: SelectorMultipleDTO[] = [{ key: 1, value: 'cine 1' }];
  cinesNoSeleccionados: SelectorMultipleDTO[] = [
    { key: 2, value: 'cine 2' },
    { key: 3, value: 'cine 3' },
  ];

  pelicula: PeliculaDTO = {
    id: 1,
    titulo: 'alexa',
    trailer: ':v',
    fechaLanzamiento: new Date(1991, 0, 25),
    imagenUrl:
      'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832',
  };

  actoresSeleccionados: ActorAutoCompleteDTO[] = [
    {
      id: 3,
      nombre: 'Robert Downey Jr',
      personaje: 'Tony Stark',
      imagen:
        'https://i.pinimg.com/236x/0b/02/01/0b02011c79dd2eb68c0d372680b0bdb7.jpg',
    },
  ];

  guardarCambios(pelicula: CrearPeliculaDTO) {
    console.log('Editando la pelicula: ', pelicula);
  }
}
