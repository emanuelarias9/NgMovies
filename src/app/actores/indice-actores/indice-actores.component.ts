import { Component } from '@angular/core';
import { ActoresService } from '../actores.service';
import { IndiceEntidadComponent } from '../../compartidos/componentes/indice-entidad/indice-entidad.component';
import { ServicioCrudToken } from '../../compartidos/proveedores/proveedores';

@Component({
  selector: 'app-indice-actores',
  imports: [IndiceEntidadComponent],
  templateUrl: './indice-actores.component.html',
  styleUrl: './indice-actores.component.css',
  providers: [{ provide: ServicioCrudToken, useClass: ActoresService }],
})
export class IndiceActoresComponent {}
