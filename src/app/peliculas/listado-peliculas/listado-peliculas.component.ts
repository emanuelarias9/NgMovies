import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ListadoGenericoComponent } from '../../compartidos/componentes/listado-generico/listado-generico.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listado-peliculas',
  imports: [
    NgOptimizedImage,
    ListadoGenericoComponent,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css',
})
export class ListadoPeliculasComponent {
  @Input({ required: true })
  peliculas!: any[];

  agregarPelicula() {
    this.peliculas.push({
      titulo: 'Avatar 2',
      fechaLanzamiento: new Date('2023-12-15'),
      precio: 300.99,
    });
  }
  eliminarPelicula(pelicula: any) {
    const index = this.peliculas.indexOf(pelicula);
    this.peliculas.splice(index, 1);
  }
}
