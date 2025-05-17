import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { CrearGeneroDTO, GeneroDTO } from '../genero';

@Component({
  selector: 'app-formulario-genero',
  imports: [
    MatButtonModule,
    RouterLink,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './formulario-genero.component.html',
  styleUrl: './formulario-genero.component.css',
})
export class FormularioGeneroComponent implements OnInit {
  ngOnInit(): void {
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }
  @Input()
  model?: GeneroDTO;

  @Output()
  postForm = new EventEmitter<CrearGeneroDTO>();

  private formbuilder = inject(FormBuilder);

  form = this.formbuilder.group({
    nombre: [
      '',
      { validators: [Validators.required, primeraLetraMayuscula()] },
    ],
  });

  mensajeErrorNombre(): string {
    let inputNombre = this.form.controls.nombre;
    if (inputNombre.hasError('required')) {
      return 'El nombre es requerido';
    }
    if (inputNombre.hasError('primeraLetraMayuscula')) {
      return inputNombre.getError('primeraLetraMayuscula').mensaje;
    }

    return '';
  }
  guardarCambios() {
    if (!this.form.valid) {
      return;
    }
    const genero = this.form.value as CrearGeneroDTO;
    this.postForm.emit(genero);
  }
}
