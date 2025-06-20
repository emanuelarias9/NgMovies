import { inject, Injectable } from '@angular/core';
import { ICrudService } from '../compartidos/interfaces/ICrudService';
import { CineDTO, CrearCineDTO } from './cine';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginacionDTO } from '../compartidos/modelos/PaginacionDTO';
import { environment } from '../../environments/environment.development';
import { QueryParamsBuilder } from '../compartidos/funciones/queryParamsBuilder';

@Injectable({
  providedIn: 'root',
})
export class CinesService implements ICrudService<CineDTO, CrearCineDTO> {
  constructor() {}

  private http = inject(HttpClient);
  private urlPeticion = environment.urlApiBase + '/Cines';

  Obtener(id: number): Observable<CineDTO> {
    return this.http.get<CineDTO>(`${this.urlPeticion}/${id}`);
  }
  Eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.urlPeticion}/${id}`);
  }
  Crear(cine: CrearCineDTO): Observable<any> {
    return this.http.post(this.urlPeticion, cine);
  }
  Actualizar(id: number, cine: CrearCineDTO): Observable<any> {
    return this.http.put(`${this.urlPeticion}/${id}`, cine);
  }
  Listar(paginacion: PaginacionDTO): Observable<HttpResponse<CineDTO[]>> {
    let queryParams = QueryParamsBuilder(paginacion);
    return this.http.get<CineDTO[]>(this.urlPeticion, {
      params: queryParams,
      observe: 'response',
    });
  }
}
