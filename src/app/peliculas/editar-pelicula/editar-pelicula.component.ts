import { Component, Input, numberAttribute } from '@angular/core';
import { CrearPeliculaDTO, PeliculaDTO } from '../pelicula';
import { FormularioPeliculasComponent } from '../formulario-peliculas/formulario-peliculas.component';

@Component({
  selector: 'app-editar-pelicula',
  imports: [FormularioPeliculasComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css',
})
export class EditarPeliculaComponent {
  @Input({ transform: numberAttribute })
  id!: number;

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
