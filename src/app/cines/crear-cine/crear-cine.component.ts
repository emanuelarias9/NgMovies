import { Component } from '@angular/core';
import { CrearCineDTO } from '../cine';
import { FormularioCinesComponent } from '../formulario-cines/formulario-cines.component';
import { ServicioCrudToken } from '../../compartidos/proveedores/proveedores';
import { CinesService } from '../cines.service';

@Component({
  selector: 'app-crear-cine',
  imports: [FormularioCinesComponent],
  templateUrl: './crear-cine.component.html',
  styleUrl: './crear-cine.component.css',
  providers: [{ provide: ServicioCrudToken, useClass: CinesService }],
})
export class CrearCineComponent {
  guardarCambios(cine: CrearCineDTO) {
    // this.router.navigate(['/generos']);
    console.log('creando el cine: ', cine);
  }
}
