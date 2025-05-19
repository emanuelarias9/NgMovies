import { Component, Input, numberAttribute } from '@angular/core';
import { ActorDTO, CrearActorDTO } from '../actores';
import { FormularioActoresComponent } from '../formulario-actores/formulario-actores.component';

@Component({
  selector: 'app-editar-actor',
  imports: [FormularioActoresComponent],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css',
})
export class EditarActorComponent {
  @Input({ transform: numberAttribute })
  id!: number;

  actor: ActorDTO = {
    id: 1,
    nombre: 'alexa',
    apellido: 'tabares',
    fechaNacimiento: new Date(1991, 0, 25),
  };
  guardarCambios(actor: CrearActorDTO) {
    console.log('Creando el actor: ', actor);
  }
}
