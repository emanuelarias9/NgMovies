import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-genero',
  imports: [
    MatButtonModule,
    RouterLink,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './crear-genero.component.html',
  styleUrl: './crear-genero.component.css',
})
export class CrearGeneroComponent {
  router = inject(Router);

  private formbuilder = inject(FormBuilder);

  form = this.formbuilder.group({
    nombre: ['', { validators: [Validators.required] }],
  });

  mensajeErrorNombre(): string {
    let inputNombre = this.form.controls.nombre;
    if (inputNombre.hasError('required')) {
      return 'El nombre es requerido';
    }
    return '';
  }

  guardarCambios() {
    // this.router.navigate(['/generos']);
    console.log(this.form.value);
  }
}
