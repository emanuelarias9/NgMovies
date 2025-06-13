import { Component, inject } from '@angular/core';
import { FormularioActoresComponent } from '../formulario-actores/formulario-actores.component';
import { CrearActorDTO } from '../actores';
import { ActoresService } from '../actores.service';
import { Router } from '@angular/router';
import { errorHandler } from '../../compartidos/funciones/errorHandler';
import { ErrorHandlerComponent } from '../../compartidos/errores/error-handler/error-handler.component';

@Component({
  selector: 'app-crear-actor',
  imports: [FormularioActoresComponent, ErrorHandlerComponent],
  templateUrl: './crear-actor.component.html',
  styleUrl: './crear-actor.component.css',
})
export class CrearActorComponent {
  actoresService = inject(ActoresService);
  router = inject(Router);
  errorMessages: string[] = [];

  guardarCambios(actor: CrearActorDTO) {
    this.actoresService.CrearActor(actor).subscribe({
      next: () => {
        this.router.navigate(['/actores']);
      },
      error: (err) => {
        const errors = errorHandler(err);
        this.errorMessages = errors;
      },
    });
  }
}
