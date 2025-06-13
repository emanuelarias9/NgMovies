import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ActorDTO, CrearActorDTO } from '../actores';
import moment from 'moment';
import { fechaNoPuedeSerFutura } from '../../compartidos/funciones/validaciones';
import { InputImgComponent } from '../../compartidos/componentes/input-img/input-img.component';

@Component({
  selector: 'app-formulario-actores',
  imports: [
    MatButtonModule,
    RouterLink,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    InputImgComponent,
  ],
  templateUrl: './formulario-actores.component.html',
  styleUrl: './formulario-actores.component.css',
})
export class FormularioActoresComponent implements OnInit {
  ngOnInit(): void {
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }
  private formBuilder = inject(FormBuilder);

  @Input()
  model?: ActorDTO;

  @Output()
  postForm = new EventEmitter<CrearActorDTO>();

  form = this.formBuilder.group({
    nombre: ['', { validators: [Validators.required] }],
    fechaNacimiento: new FormControl<Date | null>(null, {
      validators: [Validators.required, fechaNoPuedeSerFutura()],
    }),
    imagen: new FormControl<File | string | null>(null),
  });

  mensajeErrorNombre(): string {
    let inputNombre = this.form.controls.nombre;
    if (inputNombre.hasError('required')) {
      return 'El nombre es requerido';
    }
    return '';
  }

  mensajeErrorFechaNacimiento() {
    let inputFechaNacimiento = this.form.controls.fechaNacimiento;
    if (inputFechaNacimiento.hasError('required')) {
      return 'La fecha de nacimiento es requerida';
    }
    if (inputFechaNacimiento.hasError('futuro')) {
      return inputFechaNacimiento.getError('futuro').mensaje;
    }
    return '';
  }

  imagenSeleccionada(file: File) {
    this.form.controls.imagen.setValue(file);
  }

  guardarCambios() {
    if (!this.form.valid) {
      return;
    }
    const actor = this.form.value as CrearActorDTO;
    actor.fechaNacimiento = moment(actor.fechaNacimiento).toDate();
    if (typeof actor.imagen === 'string') {
      actor.imagen = undefined;
    }
    this.postForm.emit(actor);
  }
}
