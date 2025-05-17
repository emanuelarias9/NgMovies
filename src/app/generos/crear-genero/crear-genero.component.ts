import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioGeneroComponent } from '../formulario-genero/formulario-genero.component';
import { CrearGeneroDTO } from '../genero';

@Component({
  selector: 'app-crear-genero',
  imports: [
    MatButtonModule,
    RouterLink,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormularioGeneroComponent,
  ],
  templateUrl: './crear-genero.component.html',
  styleUrl: './crear-genero.component.css',
})
export class CrearGeneroComponent {
  router = inject(Router);

  guardarCambios(genero: CrearGeneroDTO) {
    // this.router.navigate(['/generos']);
    console.log('creando el genero: ', genero);
  }
}
