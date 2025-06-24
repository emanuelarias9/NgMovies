import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { CrearPeliculaDTO, PeliculaDTO, PeliculaPostGetDTO } from './pelicula';
import { ICrudService } from '../compartidos/interfaces/ICrudService';
import { Observable } from 'rxjs';
import { PaginacionDTO } from '../compartidos/modelos/PaginacionDTO';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService
  implements ICrudService<PeliculaDTO, CrearPeliculaDTO>
{
  constructor() {}

  private http = inject(HttpClient);
  private urlPeticion = environment.urlApiBase + '/Peliculas';
  PeliculasPostGet(): Observable<PeliculaPostGetDTO> {
    return this.http.get<PeliculaPostGetDTO>(`${this.urlPeticion}/PostGet`);
  }

  private BuildFormData(pelicula: CrearPeliculaDTO): FormData {
    const formData = new FormData();
    formData.append('titulo', pelicula.titulo);
    formData.append(
      'fechaLanzamiento',
      pelicula.fechaLanzamiento.toISOString().split('T')[0]
    );

    if (pelicula.trailer) {
      formData.append('trailer', pelicula.trailer);
    }

    if (pelicula.imagenUrl) {
      formData.append('imagenUrl', pelicula.imagenUrl);
    }

    formData.append('generosIds', JSON.stringify(pelicula.generosIds));
    formData.append('cinesIds', JSON.stringify(pelicula.cinesIds));
    formData.append('actores', JSON.stringify(pelicula.actores));

    return formData;
  }

  Crear(pelicula: CrearPeliculaDTO): Observable<PeliculaDTO> {
    const formData = this.BuildFormData(pelicula);
    return this.http.post<PeliculaDTO>(this.urlPeticion, formData);
  }

  Obtener(id: number): Observable<PeliculaDTO> {
    throw new Error('Method not implemented.');
  }
  Eliminar(id: number): Observable<any> {
    throw new Error('Method not implemented.');
  }

  Actualizar(id: number, entidad: CrearPeliculaDTO): Observable<any> {
    throw new Error('Method not implemented.');
  }
  Listar(paginacion: PaginacionDTO): Observable<HttpResponse<PeliculaDTO[]>> {
    throw new Error('Method not implemented.');
  }
}
