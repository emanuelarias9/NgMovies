import { inject, Injectable } from '@angular/core';
import { GeneroDTO } from './genero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenerosService {
  private http = inject(HttpClient);

  constructor() {}

  public ListarGenero(): Observable<GeneroDTO[]> {
    return this.http.get<GeneroDTO[]>('https://localhost:7066/api/Generos');
  }
}
