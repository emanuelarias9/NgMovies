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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { InputImgComponent } from '../../compartidos/componentes/input-img/input-img.component';
import { CrearPeliculaDTO, PeliculaDTO } from '../pelicula';
import moment from 'moment';
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultiple';
import { SelectorMultipleComponent } from '../../compartidos/componentes/selector-multiple/selector-multiple.component';

@Component({
  selector: 'app-formulario-peliculas',
  imports: [
    MatButtonModule,
    RouterLink,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    InputImgComponent,
    SelectorMultipleComponent,
  ],
  templateUrl: './formulario-peliculas.component.html',
  styleUrl: './formulario-peliculas.component.css',
})
export class FormularioPeliculasComponent implements OnInit {
  ngOnInit(): void {
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  @Input({ required: true })
  generosNoseleccionados!: SelectorMultipleDTO[];

  @Input({ required: true })
  generosSeleccionados!: SelectorMultipleDTO[];

  @Input()
  model?: PeliculaDTO;

  @Output()
  postForm = new EventEmitter<CrearPeliculaDTO>();

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    titulo: ['', { validators: [Validators.required] }],
    fechaLanzamiento: new FormControl<Date | null>(null, {
      validators: [Validators.required],
    }),
    trailer: '',
    poster: new FormControl<File | string | null>(null),
  });

  imagenSeleccionada(file: File) {
    this.form.controls.poster.setValue(file);
  }

  guardarCambios() {
    if (!this.form.valid) {
      return;
    }
    const pelicula = this.form.value as CrearPeliculaDTO;
    pelicula.fechaLanzamiento = moment(pelicula.fechaLanzamiento).toDate();
    const generosIds = this.generosSeleccionados.map((value) => value.key);
    pelicula.generosIds = generosIds;
    this.postForm.emit(pelicula);
  }

  mensajeErrorTitulo(): string {
    let inputTitulo = this.form.controls.titulo;
    if (inputTitulo.hasError('required')) {
      return 'El titulo es requerido';
    }
    return '';
  }

  mensajeErrorFechaLanzamiento() {
    let inputFechaLanzamiento = this.form.controls.fechaLanzamiento;
    if (inputFechaLanzamiento.hasError('required')) {
      return 'La fecha de lanzamiento es requerida';
    }

    return '';
  }
}
