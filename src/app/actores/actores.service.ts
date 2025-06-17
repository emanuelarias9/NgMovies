import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ActorDTO, CrearActorDTO } from './actores';
import { Observable } from 'rxjs';
import { QueryParamsBuilder } from '../compartidos/funciones/queryParamsBuilder';
import { PaginacionDTO } from '../compartidos/modelos/PaginacionDTO';

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

  public ListarActores(
    paginacion: PaginacionDTO
  ): Observable<HttpResponse<ActorDTO[]>> {
    let queryParams = QueryParamsBuilder(paginacion);
    console.log(this.urlPeticion);
    return this.http.get<ActorDTO[]>(this.urlPeticion, {
      params: queryParams,
      observe: 'response',
    });
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

  public ObtenerActor(id: number): Observable<ActorDTO> {
    return this.http.get<ActorDTO>(`${this.urlPeticion}/${id}`);
  }

  public ActualizarActor(id: number, actor: CrearActorDTO) {
    const formData = this.BuildFormData(actor);
    return this.http.put(`${this.urlPeticion}/${id}`, formData);
  }

  public EliminarActor(id: number) {
    return this.http.delete(`${this.urlPeticion}/${id}`);
  }
}
