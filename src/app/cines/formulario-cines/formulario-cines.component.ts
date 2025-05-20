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
import { CrearCineDTO } from '../cine';
import { MapaComponent } from '../../compartidos/componentes/mapa/mapa.component';
import { Coordenada } from '../../compartidos/componentes/mapa/Coordenada';

@Component({
  selector: 'app-formulario-cines',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    MapaComponent,
  ],
  templateUrl: './formulario-cines.component.html',
  styleUrl: './formulario-cines.component.css',
})
export class FormularioCinesComponent implements OnInit {
  ngOnInit(): void {
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
      this.coordenadasIniciales.push({
        latitud: this.model.latitud,
        longitud: this.model.longitud,
      });
    }
  }
  @Input()
  model?: CrearCineDTO;

  @Output()
  postForm = new EventEmitter<CrearCineDTO>();

  coordenadasIniciales: Coordenada[] = [];

  private formbuilder = inject(FormBuilder);

  form = this.formbuilder.group({
    nombre: ['', { validators: [Validators.required] }],
    latitud: new FormControl<number | null>(null, [Validators.required]),
    longitud: new FormControl<number | null>(null, [Validators.required]),
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

  coordenadaSeleccionada(coordenada: Coordenada) {
    this.form.patchValue(coordenada);
  }
}
