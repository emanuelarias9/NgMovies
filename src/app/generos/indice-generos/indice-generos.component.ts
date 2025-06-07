import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { GenerosService } from '../generos.service';
import { GeneroDTO } from '../genero';
import { ListadoGenericoComponent } from '../../compartidos/componentes/listado-generico/listado-generico.component';
import { MatTableModule } from '@angular/material/table';

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
  constructor() {
    this.generoServive.ListarGenero().subscribe((generos) => {
      this.generos = generos;
      console.log(this.generos);
    });
  }
}
