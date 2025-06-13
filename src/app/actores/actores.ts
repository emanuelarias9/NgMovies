export interface ActorDTO {
  id: number;
  nombre: string;
  fechaNacimiento: Date;
  imagen?: string;
}
export interface CrearActorDTO {
  nombre: string;
  fechaNacimiento: Date;
  imagen?: File;
}

export interface ActorAutoCompleteDTO {
  id: number;
  nombre: string;
  personaje: string;
  imagen: string;
}
