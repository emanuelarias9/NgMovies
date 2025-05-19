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

@Component({
  selector: 'app-formulario-actores',
  imports: [
    MatButtonModule,
    RouterLink,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
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
    apellido: ['', { validators: [Validators.required] }],
    fechaNacimiento: new FormControl<Date | null>(null),
  });

  guardarCambios() {
    if (!this.form.valid) {
      return;
    }
    const actor = this.form.value as CrearActorDTO;
    actor.fechaNacimiento = moment(actor.fechaNacimiento).toDate();
    this.postForm.emit(actor);
  }
}
