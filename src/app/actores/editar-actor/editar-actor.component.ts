import {
  Component,
  inject,
  Input,
  numberAttribute,
  OnInit,
} from '@angular/core';
import { ActorDTO, CrearActorDTO } from '../actores';
import { FormularioActoresComponent } from '../formulario-actores/formulario-actores.component';
import { ActoresService } from '../actores.service';
import { Router } from '@angular/router';
import { errorHandler } from '../../compartidos/funciones/errorHandler';
import { ErrorHandlerComponent } from '../../compartidos/errores/error-handler/error-handler.component';
import { LoadingComponent } from '../../compartidos/componentes/loading/loading.component';

@Component({
  selector: 'app-editar-actor',
  imports: [
    FormularioActoresComponent,
    ErrorHandlerComponent,
    LoadingComponent,
  ],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css',
})
export class EditarActorComponent implements OnInit {
  ngOnInit(): void {
    this.actoresService.Obtener(this.id).subscribe({
      next: (actor) => {
        this.actor = actor;
      },
      error: (err) => {
        const errores = errorHandler(err);
        this.errors = errores;
      },
    });
  }
  @Input({ transform: numberAttribute })
  id!: number;

  actor?: ActorDTO;

  actoresService = inject(ActoresService);
  router = inject(Router);
  errors: string[] = [];
  guardarCambios(actor: CrearActorDTO) {
    this.actoresService.Actualizar(this.id, actor).subscribe({
      next: () => {
        this.router.navigate(['/actores']);
      },
      error: (err) => {
        const errores = errorHandler(err);
        this.errors = errores;
      },
    });
  }
}
