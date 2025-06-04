import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioGeneroComponent } from '../formulario-genero/formulario-genero.component';
import { CrearGeneroDTO } from '../genero';
import { GenerosService } from '../generos.service';
import { errorHandler } from '../../compartidos/funciones/errorHandler';

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
  private generoService = inject(GenerosService);
  errorMessages: string[] = [];
  guardarCambios(genero: CrearGeneroDTO) {
    this.generoService.CrearGenero(genero).subscribe({
      next: () => {
        this.router.navigate(['/generos']);
      },
      error: (err) => {
        const errors = errorHandler(err);
        this.errorMessages = errors;
      },
    });
  }
}
