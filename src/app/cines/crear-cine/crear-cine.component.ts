import { Component } from '@angular/core';
import { FormularioCinesComponent } from '../formulario-cines/formulario-cines.component';
import { ServicioCrudToken } from '../../compartidos/proveedores/proveedores';
import { CinesService } from '../cines.service';
import { CrearEntidadComponent } from '../../compartidos/componentes/crear-entidad/crear-entidad.component';

@Component({
  selector: 'app-crear-cine',
  imports: [CrearEntidadComponent],
  templateUrl: './crear-cine.component.html',
  styleUrl: './crear-cine.component.css',
  providers: [{ provide: ServicioCrudToken, useClass: CinesService }],
})
export class CrearCineComponent {
  formularioCines = FormularioCinesComponent;
}
