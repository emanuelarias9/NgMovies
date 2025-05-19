import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { CrearCineDTO } from '../cine';

@Component({
  selector: 'app-formulario-cines',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './formulario-cines.component.html',
  styleUrl: './formulario-cines.component.css',
})
export class FormularioCinesComponent implements OnInit {
  ngOnInit(): void {
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }
  @Input()
  model?: CrearCineDTO;

  @Output()
  postForm = new EventEmitter<CrearCineDTO>();

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
    if (!this.form.valid) {
      return;
    }
    const cine = this.form.value as CrearCineDTO;
    this.postForm.emit(cine);
  }
}
