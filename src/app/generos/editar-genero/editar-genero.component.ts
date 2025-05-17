import { Component, Input, numberAttribute } from '@angular/core';
import { FormularioGeneroComponent } from '../formulario-genero/formulario-genero.component';
import { CrearGeneroDTO, GeneroDTO } from '../genero';

@Component({
  selector: 'app-editar-genero',
  imports: [FormularioGeneroComponent],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css',
})
export class EditarGeneroComponent {
  @Input({ transform: numberAttribute })
  id!: number;

  genero: GeneroDTO = { id: 1, nombre: 'Accion' };

  guardarCambios(genero: CrearGeneroDTO) {
    console.log('editando el genero: ', genero);
  }
}
