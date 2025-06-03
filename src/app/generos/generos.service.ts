import { inject, Injectable } from '@angular/core';
import { GeneroDTO } from './genero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class GenerosService {
  constructor() {}

  private http = inject(HttpClient);
  private urlPeticion = environment.urlApiBase + '/Generos';

  public ListarGenero(): Observable<GeneroDTO[]> {
    return this.http.get<GeneroDTO[]>(this.urlPeticion);
  }
}
