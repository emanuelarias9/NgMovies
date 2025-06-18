import { Component, inject, Input } from '@angular/core';
import { PaginacionDTO } from '../../modelos/PaginacionDTO';
import { ServicioCrudToken } from '../../proveedores/proveedores';
import { HttpResponse } from '@angular/common/http';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { ListadoGenericoComponent } from '../listado-generico/listado-generico.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-indice-entidad',
  imports: [
    RouterLink,
    MatButtonModule,
    ListadoGenericoComponent,
    MatTableModule,
    MatPaginatorModule,
    SweetAlert2Module,
  ],
  templateUrl: './indice-entidad.component.html',
  styleUrl: './indice-entidad.component.css',
})
export class IndiceEntidadComponent<TDTO> {
  @Input({ required: true }) tituloSingular!: string;
  @Input({ required: true }) tituloPlural!: string;
  @Input({ required: true }) rutaCrear!: string;
  @Input({ required: true }) rutaEditar!: string;
  @Input() columns = ['id', 'nombre', 'Acciones'];

  paginacion: PaginacionDTO = { page: 1, pageSize: 5 };
  entidad!: TDTO[];
  cantidadRegistros: number = 0;
  servicioCRUD = inject(ServicioCrudToken) as any;

  constructor() {
    this.LoadData();
  }

  LoadData() {
    this.servicioCRUD
      .Listar(this.paginacion)
      .subscribe((response: HttpResponse<TDTO[]>) => {
        this.entidad = response.body as TDTO[];
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
    this.servicioCRUD.Eliminar(id).subscribe(() => {
      this.LoadData();
    });
  }

  Confirmacion(id: number) {
    Swal.fire({
      title: `Eliminar ${this.tituloSingular.toLowerCase()}`,
      text: `¿Estás seguro de eliminar este ${this.tituloSingular.toLowerCase()}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        this.Eliminar(id);
      }
    });
  }

  primeraMayuscula(texto: string): string {
    if (!texto) return texto;
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }
}
