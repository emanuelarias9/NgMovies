import { inject, Injectable } from '@angular/core';
import { CrearGeneroDTO, GeneroDTO } from './genero';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { PaginacionDTO } from '../compartidos/modelos/PaginacionDTO';
import { QueryParamsBuilder } from '../compartidos/funciones/queryParamsBuilder';
import { ICrudService } from '../compartidos/interfaces/ICrudService';

@Injectable({
  providedIn: 'root',
})
export class GenerosService implements ICrudService<GeneroDTO, CrearGeneroDTO> {
  constructor() {}

  private http = inject(HttpClient);
  private urlPeticion = environment.urlApiBase + '/Generos';

  public Listar(
    paginacion: PaginacionDTO
  ): Observable<HttpResponse<GeneroDTO[]>> {
    let queryParams = QueryParamsBuilder(paginacion);
    console.log(this.urlPeticion);
    return this.http.get<GeneroDTO[]>(this.urlPeticion, {
      params: queryParams,
      observe: 'response',
    });
  }

  public Obtener(id: number): Observable<GeneroDTO> {
    return this.http.get<GeneroDTO>(`${this.urlPeticion}/${id}`);
  }

  public Actualizar(id: number, genero: CrearGeneroDTO) {
    return this.http.put(`${this.urlPeticion}/${id}`, genero);
  }

  public Crear(genero: CrearGeneroDTO) {
    return this.http.post(this.urlPeticion, genero);
  }

  public Eliminar(id: number) {
    return this.http.delete(`${this.urlPeticion}/${id}`);
  }
}
