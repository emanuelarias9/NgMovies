import { Component, inject } from '@angular/core';
import { FormularioPeliculasComponent } from '../formulario-peliculas/formulario-peliculas.component';
import { CrearPeliculaDTO } from '../pelicula';
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultiple';
import { ActorAutoCompleteDTO } from '../../actores/actores';
import { PeliculasService } from '../peliculas.service';
import { Router } from '@angular/router';
import { errorHandler } from '../../compartidos/funciones/errorHandler';
import { ErrorHandlerComponent } from '../../compartidos/errores/error-handler/error-handler.component';
import { LoadingComponent } from '../../compartidos/componentes/loading/loading.component';

@Component({
  selector: 'app-crear-pelicula',
  imports: [
    FormularioPeliculasComponent,
    ErrorHandlerComponent,
    LoadingComponent,
  ],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css',
})
export class CrearPeliculaComponent {
  generosSeleccionados: SelectorMultipleDTO[] = [];
  generosNoSeleccionados: SelectorMultipleDTO[] = [];

  cinesSeleccionados: SelectorMultipleDTO[] = [];
  cinesNoSeleccionados: SelectorMultipleDTO[] = [];

  actoresSeleccionados: ActorAutoCompleteDTO[] = [];

  peliculaService = inject(PeliculasService);
  router = inject(Router);
  errores: string[] = [];

  constructor() {
    this.peliculaService.PeliculasPostGet().subscribe((model) => {
      this.generosNoSeleccionados = model.generos.map((genero) => {
        return <SelectorMultipleDTO>{ key: genero.id, value: genero.nombre };
      });

      this.cinesNoSeleccionados = model.cines.map((cine) => {
        return <SelectorMultipleDTO>{ key: cine.id, value: cine.nombre };
      });
    });
  }

  guardarCambios(pelicula: CrearPeliculaDTO) {
    this.peliculaService.Crear(pelicula).subscribe({
      next: (pelicula) => {
        console.log('Pelicula creada:', pelicula);
        this.router.navigate(['/']);
      },
      error: (err) => {
        const errores = errorHandler(err);
        this.errores = errores;
      },
    });
  }
}
