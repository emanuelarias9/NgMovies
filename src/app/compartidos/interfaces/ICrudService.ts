import { HttpResponse } from '@angular/common/http';
import { PaginacionDTO } from '../modelos/PaginacionDTO';
import { Observable } from 'rxjs';

export interface ICrudService<TDTO, TCrearDTO> {
  Obtener(id: number): Observable<TDTO>;
  Eliminar(id: number): Observable<any>;
  Crear(entidad: TCrearDTO): Observable<any>;
  Actualizar(id: number, entidad: TCrearDTO): Observable<any>;
  Listar(paginacion: PaginacionDTO): Observable<HttpResponse<TDTO[]>>;
}
