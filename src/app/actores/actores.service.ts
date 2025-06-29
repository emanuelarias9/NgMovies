import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ActorAutoCompleteDTO, ActorDTO, CrearActorDTO } from './actores';
import { Observable } from 'rxjs';
import { QueryParamsBuilder } from '../compartidos/funciones/queryParamsBuilder';
import { PaginacionDTO } from '../compartidos/modelos/PaginacionDTO';
import { ICrudService } from '../compartidos/interfaces/ICrudService';

@Injectable({
  providedIn: 'root',
})
export class ActoresService implements ICrudService<ActorDTO, CrearActorDTO> {
  private http = inject(HttpClient);
  private urlPeticion = environment.urlApiBase + '/Actores';

  constructor() {}

  public Crear(actor: CrearActorDTO) {
    const formData = this.BuildFormData(actor);
    return this.http.post(this.urlPeticion, formData);
  }

  public Listar(
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

  public ObtenerPorNombre(nombre: string): Observable<ActorAutoCompleteDTO[]> {
    return this.http.get<ActorAutoCompleteDTO[]>(
      `${this.urlPeticion}/${nombre}`
    );
  }

  public Obtener(id: number): Observable<ActorDTO> {
    return this.http.get<ActorDTO>(`${this.urlPeticion}/${id}`);
  }

  public Actualizar(id: number, actor: CrearActorDTO) {
    const formData = this.BuildFormData(actor);
    return this.http.put(`${this.urlPeticion}/${id}`, formData);
  }

  public Eliminar(id: number) {
    return this.http.delete(`${this.urlPeticion}/${id}`);
  }
}
