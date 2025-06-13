import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { CrearActorDTO } from './actores';

@Injectable({
  providedIn: 'root',
})
export class ActoresService {
  private http = inject(HttpClient);
  private urlPeticion = environment.urlApiBase + '/Actores';

  constructor() {}

  public CrearActor(actor: CrearActorDTO) {
    const formData = this.BuildFormData(actor);
    return this.http.post(this.urlPeticion, formData);
  }

  private BuildFormData(actor: CrearActorDTO): FormData {
    const formData = new FormData();
    formData.append('nombre', actor.nombre);
    formData.append(
      'fechaNacimiento',
      actor.fechaNacimiento.toISOString().split('T')[0]
    );
    if (actor.imagen) {
      formData.append('imagen', actor.imagen);
    }
    return formData;
  }
}
