import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ActoresService } from '../actores.service';
import { HttpResponse } from '@angular/common/http';
import { PaginacionDTO } from '../../compartidos/modelos/PaginacionDTO';
import { ActorDTO } from '../actores';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ListadoGenericoComponent } from '../../compartidos/componentes/listado-generico/listado-generico.component';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-indice-actores',
  imports: [
    RouterLink,
    MatButtonModule,
    SweetAlert2Module,
    MatTableModule,
    ListadoGenericoComponent,
    MatPaginatorModule,
  ],
  templateUrl: './indice-actores.component.html',
  styleUrl: './indice-actores.component.css',
})
export class IndiceActoresComponent {
  actorService = inject(ActoresService);
  columns = ['Id', 'Nombre', 'Acciones'];
  paginacion: PaginacionDTO = { page: 1, pageSize: 5 };
  actores!: ActorDTO[];
  cantidadRegistros: number = 0;

  constructor() {
    this.LoadData();
  }

  LoadData() {
    this.actorService
      .ListarActores(this.paginacion)
      .subscribe((response: HttpResponse<ActorDTO[]>) => {
        this.actores = response.body as ActorDTO[];
        this.cantidadRegistros = Number(
          response.headers.get('cantidadRegistros')
        );
      });
  }

  PageIndexChanged(data: PageEvent) {
    this.paginacion.page = data.pageIndex + 1;
    this.paginacion.pageSize = data.pageSize;
    this.LoadData();
  }

  Eliminar(id: number) {
    // this.actorService.EliminarActor(id).subscribe(() => {
    //   this.LoadData();
    // });
  }
}
