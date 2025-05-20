import { Component, Input, numberAttribute } from '@angular/core';
import { CineDTO, CrearCineDTO } from '../cine';
import { FormularioCinesComponent } from '../formulario-cines/formulario-cines.component';

@Component({
  selector: 'app-editar-cine',
  imports: [FormularioCinesComponent],
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.css',
})
export class EditarCineComponent {
  @Input({ transform: numberAttribute })
  id!: number;

  cine: CineDTO = {
    id: 1,
    nombre: 'royal films',
    latitud: 11.009746102368025,
    longitud: -74.82012370182068,
  };

  guardarCambios(cine: CrearCineDTO) {
    console.log('editando el cine: ', cine);
  }
}
