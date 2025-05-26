import { Component, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTable, MatTableModule } from '@angular/material/table';
import { ActorAutoCompleteDTO } from '../actores';
@Component({
  selector: 'app-autocomplete-actores',
  imports: [
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
  ],
  templateUrl: './autocomplete-actores.component.html',
  styleUrl: './autocomplete-actores.component.css',
})
export class AutocompleteActoresComponent {
  control = new FormControl();

  actores: ActorAutoCompleteDTO[] = [
    {
      id: 1,
      nombre: 'tom holland',
      personaje: '',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/250px-Tom_Holland_by_Gage_Skidmore.jpg',
    },
    {
      id: 2,
      nombre: 'Chris Evans',
      personaje: '',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Mark_Kassen%2C_Tony_C%C3%A1rdenas_and_Chris_Evans_%28cropped%29.jpg/120px-Mark_Kassen%2C_Tony_C%C3%A1rdenas_and_Chris_Evans_%28cropped%29.jpg',
    },
    {
      id: 1,
      nombre: 'Robert Downey Jr',
      personaje: '',
      foto: 'https://i.pinimg.com/236x/0b/02/01/0b02011c79dd2eb68c0d372680b0bdb7.jpg',
    },
  ];

  actoresSeleccionados: ActorAutoCompleteDTO[] = [];

  columns = ['Imagen', 'Nombre', 'Personaje', 'Acciones'];

  @ViewChild(MatTable) table!: MatTable<ActorAutoCompleteDTO>;

  actorSeleccionado(event: MatAutocompleteSelectedEvent) {
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');
    if (this.table != undefined) {
      this.table.renderRows();
    }
  }

  Eliminar(actor: ActorAutoCompleteDTO) {
    const index = this.actoresSeleccionados.findIndex(
      (actorDTO: ActorAutoCompleteDTO) => actorDTO.id === actor.id
    );
    this.actoresSeleccionados.splice(index, 1);
    this.table.renderRows();
  }
}
