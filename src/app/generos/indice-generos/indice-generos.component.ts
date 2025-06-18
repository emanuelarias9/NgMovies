import { Component } from '@angular/core';
import { IndiceEntidadComponent } from '../../compartidos/componentes/indice-entidad/indice-entidad.component';
import { ServicioCrudToken } from '../../compartidos/proveedores/proveedores';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-indice-generos',
  imports: [IndiceEntidadComponent],
  templateUrl: './indice-generos.component.html',
  styleUrl: './indice-generos.component.css',
  providers: [{ provide: ServicioCrudToken, useClass: GenerosService }],
})
export class IndiceGenerosComponent {}
