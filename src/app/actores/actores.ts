export interface ActorDTO {
  id: number;
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;
  foto?: string;
}
export interface CrearActorDTO {
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;
  foto?: File;
}
