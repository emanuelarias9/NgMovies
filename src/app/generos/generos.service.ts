import { inject, Injectable } from '@angular/core';
import { CrearGeneroDTO, GeneroDTO } from './genero';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { PaginacionDTO } from '../compartidos/modelos/PaginacionDTO';
import { QueryParamsBuilder } from '../compartidos/funciones/queryParamsBuilder';

@Injectable({
  providedIn: 'root',
})
export class GenerosService {
  constructor() {}

  private http = inject(HttpClient);
  private urlPeticion = environment.urlApiBase + '/Generos';

  public ListarGeneros(
    paginacion: PaginacionDTO
  ): Observable<HttpResponse<GeneroDTO[]>> {
    let queryParams = QueryParamsBuilder(paginacion);
    console.log(this.urlPeticion);
    return this.http.get<GeneroDTO[]>(this.urlPeticion, {
      params: queryParams,
      observe: 'response',
    });
  }

  public ObtenerGenero(id: number): Observable<GeneroDTO> {
    return this.http.get<GeneroDTO>(`${this.urlPeticion}/${id}`);
  }

  public ActualizarGenero(id: number, genero: CrearGeneroDTO) {
    return this.http.put(`${this.urlPeticion}/${id}`, genero);
  }

  public CrearGenero(genero: CrearGeneroDTO) {
    return this.http.post(this.urlPeticion, genero);
  }

  public EliminarGenero(id: number) {
    return this.http.delete(`${this.urlPeticion}/${id}`);
  }
}
