import { Component, Input, numberAttribute } from '@angular/core';
import { FormularioActoresComponent } from '../formulario-actores/formulario-actores.component';
import { ActoresService } from '../actores.service';
import { EditarEntidadComponent } from '../../compartidos/componentes/editar-entidad/editar-entidad.component';
import { ServicioCrudToken } from '../../compartidos/proveedores/proveedores';

@Component({
  selector: 'app-editar-actor',
  imports: [EditarEntidadComponent],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css',
  providers: [{ provide: ServicioCrudToken, useClass: ActoresService }],
})
export class EditarActorComponent {
  @Input({ transform: numberAttribute })
  id!: number;

  formularioActores = FormularioActoresComponent;
}
