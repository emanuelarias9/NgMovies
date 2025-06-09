import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { GenerosService } from '../generos.service';
import { GeneroDTO } from '../genero';
import { ListadoGenericoComponent } from '../../compartidos/componentes/listado-generico/listado-generico.component';
import { MatTableModule } from '@angular/material/table';
import { HttpResponse } from '@angular/common/http';
import { PaginacionDTO } from '../../compartidos/modelos/PaginacionDTO';

@Component({
  selector: 'app-indice-generos',
  imports: [
    RouterLink,
    MatButtonModule,
    ListadoGenericoComponent,
    MatTableModule,
  ],
  templateUrl: './indice-generos.component.html',
  styleUrl: './indice-generos.component.css',
})
export class IndiceGenerosComponent {
  generoServive = inject(GenerosService);
  generos!: GeneroDTO[];
  columns = ['Id', 'Nombre', 'Acciones'];
  paginacion: PaginacionDTO = { page: 1, pageSize: 5 };
  totalRegistros: number = 0;
  constructor() {
    this.generoServive
      .ListarGenero(this.paginacion)
      .subscribe((response: HttpResponse<GeneroDTO[]>) => {
        this.generos = response.body as GeneroDTO[];
      });
  }
}
