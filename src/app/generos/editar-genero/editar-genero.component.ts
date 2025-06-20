import { Component, Input, numberAttribute } from '@angular/core';
import { FormularioGeneroComponent } from '../formulario-genero/formulario-genero.component';
import { GenerosService } from '../generos.service';
import { ServicioCrudToken } from '../../compartidos/proveedores/proveedores';
import { EditarEntidadComponent } from '../../compartidos/componentes/editar-entidad/editar-entidad.component';

@Component({
  selector: 'app-editar-genero',
  imports: [EditarEntidadComponent],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css',
  providers: [{ provide: ServicioCrudToken, useClass: GenerosService }],
})
export class EditarGeneroComponent {
  @Input({ transform: numberAttribute })
  id!: number;
  formularioGenero = FormularioGeneroComponent;
}
