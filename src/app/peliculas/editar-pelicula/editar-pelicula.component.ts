import { Component, Input, numberAttribute } from '@angular/core';
import { CrearPeliculaDTO, PeliculaDTO } from '../pelicula';
import { FormularioPeliculasComponent } from '../formulario-peliculas/formulario-peliculas.component';
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultiple';

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

  pelicula: PeliculaDTO = {
    id: 1,
    titulo: 'alexa',
    trailer: ':v',
    fechaLanzamiento: new Date(1991, 0, 25),
    poster:
      'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832',
  };
  guardarCambios(pelicula: CrearPeliculaDTO) {
    console.log('Editando la pelicula: ', pelicula);
  }
}
