import { inject, Injectable } from '@angular/core';
import { CrearGeneroDTO, GeneroDTO } from './genero';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { PaginacionDTO } from '../compartidos/modelos/PaginacionDTO';
import { QueryParamsBuilder } from '../compartidos/funciones/QueryParamsBuilder';

@Injectable({
  providedIn: 'root',
})
export class GenerosService {
  constructor() {}

  private http = inject(HttpClient);
  private urlPeticion = environment.urlApiBase + '/Generos';

  public ListarGenero(
    paginacion: PaginacionDTO
  ): Observable<HttpResponse<GeneroDTO[]>> {
    let queryParams = QueryParamsBuilder(paginacion);
    console.log(this.urlPeticion);
    return this.http.get<GeneroDTO[]>(this.urlPeticion, {
      params: queryParams,
      observe: 'response',
    });
  }

  public CrearGenero(genero: CrearGeneroDTO) {
    return this.http.post(this.urlPeticion, genero);
  }
}
