import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { toBase64 } from '../../funciones/toBase64';

@Component({
  selector: 'app-input-img',
  imports: [MatButtonModule],
  templateUrl: './input-img.component.html',
  styleUrl: './input-img.component.css',
})
export class InputImgComponent {
  @Input({ required: true })
  titulo!: string;

  @Input()
  urlImagenActual?: string;

  @Output()
  imagenSeleccionada = new EventEmitter<File>();

  imageBase64?: string;
  inputFilechange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      toBase64(file)
        .then((valor: string) => (this.imageBase64 = valor))
        .catch((error) => console.error(error));

      this.imagenSeleccionada.emit(file);
      this.urlImagenActual = undefined;
    }
  }
}
