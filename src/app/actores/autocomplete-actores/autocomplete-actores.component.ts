import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
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
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { ActoresService } from '../actores.service';
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
    DragDropModule,
  ],
  templateUrl: './autocomplete-actores.component.html',
  styleUrl: './autocomplete-actores.component.css',
})
export class AutocompleteActoresComponent implements OnInit {
  ngOnInit(): void {
    this.control.valueChanges.subscribe((value) => {
      if (typeof value === 'string' && value) {
        this.actoresService.ObtenerPorNombre(value).subscribe((actores) => {
          this.actores = actores;
        });
      }
    });
  }
  control = new FormControl();

  actoresService = inject(ActoresService);

  actores: ActorAutoCompleteDTO[] = [];

  @Input({ required: true })
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
  ItemDropped(event: CdkDragDrop<any[]>) {
    const prevIndex = this.actoresSeleccionados.findIndex(
      (actor) => actor === event.item.data
    );
    moveItemInArray(this.actoresSeleccionados, prevIndex, event.currentIndex);
    this.table.renderRows();
  }
  Eliminar(actor: ActorAutoCompleteDTO) {
    const index = this.actoresSeleccionados.findIndex(
      (actorDTO: ActorAutoCompleteDTO) => actorDTO.id === actor.id
    );
    this.actoresSeleccionados.splice(index, 1);
    this.table.renderRows();
  }
}
