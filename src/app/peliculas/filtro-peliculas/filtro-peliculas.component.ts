import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ListadoPeliculasComponent } from '../listado-peliculas/listado-peliculas.component';
import { FiltroPelicula } from './filtroPelicula';

@Component({
  selector: 'app-filtro-peliculas',
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    ListadoPeliculasComponent,
  ],
  templateUrl: './filtro-peliculas.component.html',
  styleUrl: './filtro-peliculas.component.css',
})
export class FiltroPeliculasComponent implements OnInit {
  ngOnInit(): void {
    this.form.valueChanges.subscribe((valores) => {
      this.peliculasFiltradas = this.peliculas;
      this.filtrarPeliculas(valores as FiltroPelicula);
    });
  }

  filtrarPeliculas(valores: FiltroPelicula) {
    if (valores.titulo) {
      console.log(valores.titulo);
      this.peliculasFiltradas = this.peliculasFiltradas.filter((peli) =>
        peli.titulo.toLowerCase().includes(valores.titulo.toLowerCase())
      );
    }

    if (valores.generoId !== 0) {
      console.log(valores.generoId);
      this.peliculasFiltradas = this.peliculasFiltradas.filter((peli) =>
        peli.generos.includes(valores.generoId)
      );
    }
    if (valores.enCines) {
      this.peliculasFiltradas = this.peliculasFiltradas.filter(
        (peli) => peli.enCines
      );
    }
    if (valores.proximosEstrenos) {
      this.peliculasFiltradas = this.peliculasFiltradas.filter(
        (peli) => peli.proximosEstrenos
      );
    }
  }

  limpiarFiltros() {
    this.form.patchValue({
      titulo: '',
      generoId: 0,
      enCines: false,
      proximosEstrenos: false,
    });
  }

  private formbuilder = inject(FormBuilder);

  form = this.formbuilder.group({
    titulo: '',
    generoId: 0,
    enCines: false,
    proximosEstrenos: false,
  });

  peliculas = [
    {
      titulo: 'Inside Out 2',
      fechaLanzamiento: new Date(),
      precio: 1400.99,
      generos: [1],
      enCines: true,
      proximosEstrenos: false,
      poster:
        'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832',
    },
    {
      titulo: 'Moana 2',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      generos: [2],
      enCines: false,
      proximosEstrenos: true,
      poster:
        'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg',
    },
    {
      titulo: 'Bad Boys: Ride or Die',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      generos: [3, 4],
      enCines: true,
      proximosEstrenos: false,
      poster:
        'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg',
    },
    {
      titulo: 'Deadpool & Wolverine',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      generos: [4],
      enCines: false,
      proximosEstrenos: true,
      poster:
        'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg',
    },
    {
      titulo: 'Oppenheimer',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      generos: [5],
      enCines: true,
      proximosEstrenos: false,
      poster:
        'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg',
    },
    {
      titulo: 'The Flash',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      generos: [6],
      enCines: false,
      proximosEstrenos: true,
      poster:
        'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg',
    },
  ];

  peliculasFiltradas = this.peliculas;

  generos = [
    { id: 1, nombre: 'Acción' },
    { id: 2, nombre: 'Comedia' },
    { id: 3, nombre: 'Drama' },
    { id: 4, nombre: 'Terror' },
    { id: 5, nombre: 'Ciencia Ficción' },
    { id: 6, nombre: 'Romance' },
  ];
}
