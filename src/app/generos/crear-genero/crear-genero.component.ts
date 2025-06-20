import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioGeneroComponent } from '../formulario-genero/formulario-genero.component';
import { GenerosService } from '../generos.service';
import { ServicioCrudToken } from '../../compartidos/proveedores/proveedores';
import { CrearEntidadComponent } from '../../compartidos/componentes/crear-entidad/crear-entidad.component';

@Component({
  selector: 'app-crear-genero',
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    CrearEntidadComponent,
  ],
  templateUrl: './crear-genero.component.html',
  styleUrl: './crear-genero.component.css',
  providers: [{ provide: ServicioCrudToken, useClass: GenerosService }],
})
export class CrearGeneroComponent {
  formularioGenero = FormularioGeneroComponent;
}
