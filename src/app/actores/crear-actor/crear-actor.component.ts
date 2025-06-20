import { Component } from '@angular/core';
import { FormularioActoresComponent } from '../formulario-actores/formulario-actores.component';
import { ActoresService } from '../actores.service';
import { CrearEntidadComponent } from '../../compartidos/componentes/crear-entidad/crear-entidad.component';
import { ServicioCrudToken } from '../../compartidos/proveedores/proveedores';

@Component({
  selector: 'app-crear-actor',
  imports: [CrearEntidadComponent],
  templateUrl: './crear-actor.component.html',
  styleUrl: './crear-actor.component.css',
  providers: [{ provide: ServicioCrudToken, useClass: ActoresService }],
})
export class CrearActorComponent {
  formularioActores = FormularioActoresComponent;
}
