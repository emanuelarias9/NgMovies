import { ActorAutoCompleteDTO } from '../actores/actores';

export interface PeliculaDTO {
  id: number;
  titulo: string;
  fechaLanzamiento: Date;
  trailer: string;
  poster?: string;
}

export interface CrearPeliculaDTO {
  titulo: string;
  fechaLanzamiento: Date;
  trailer: string;
  poster?: File;
  generosIds?: number[];
  cinesIds?: number[];
  actores?: ActorAutoCompleteDTO[];
}
