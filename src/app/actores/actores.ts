export interface ActorDTO {
  id: number;
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;
}
export interface CrearActorDTO {
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;
}
