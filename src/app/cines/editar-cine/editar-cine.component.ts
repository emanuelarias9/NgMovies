import { Component, Input, numberAttribute } from '@angular/core';
import { FormularioCinesComponent } from '../formulario-cines/formulario-cines.component';
import { ServicioCrudToken } from '../../compartidos/proveedores/proveedores';
import { CinesService } from '../cines.service';
import { EditarEntidadComponent } from '../../compartidos/componentes/editar-entidad/editar-entidad.component';

@Component({
  selector: 'app-editar-cine',
  imports: [EditarEntidadComponent],
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.css',
  providers: [{ provide: ServicioCrudToken, useClass: CinesService }],
})
export class EditarCineComponent {
  @Input({ transform: numberAttribute })
  id!: number;

  formularioCines = FormularioCinesComponent;
}
