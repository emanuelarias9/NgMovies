import { ActorAutoCompleteDTO } from '../actores/actores';
import { CineDTO } from '../cines/cine';
import { GeneroDTO } from '../generos/genero';

export interface PeliculaDTO {
  id: number;
  titulo: string;
  fechaLanzamiento: Date;
  trailer: string;
  imagenUrl?: string;
}

export interface CrearPeliculaDTO {
  titulo: string;
  fechaLanzamiento: Date;
  trailer: string;
  imagenUrl?: File;
  generosIds?: number[];
  cinesIds?: number[];
  actores?: ActorAutoCompleteDTO[];
}

export interface PeliculaPostGetDTO {
  generos: GeneroDTO[];
  cines: CineDTO[];
}
