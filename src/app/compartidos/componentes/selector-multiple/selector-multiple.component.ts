import { Component, Input } from '@angular/core';
import { SelectorMultipleDTO } from './SelectorMultiple';

@Component({
  selector: 'app-selector-multiple',
  imports: [],
  templateUrl: './selector-multiple.component.html',
  styleUrl: './selector-multiple.component.css',
})
export class SelectorMultipleComponent {
  @Input({ required: true })
  Seleccionados!: SelectorMultipleDTO[];

  @Input({ required: true })
  NoSeleccionados!: SelectorMultipleDTO[];

  seleccionar(item: SelectorMultipleDTO, index: number) {
    this.Seleccionados.push(item);
    this.NoSeleccionados.splice(index, 1);
  }

  deseleccionar(item: SelectorMultipleDTO, index: number) {
    this.NoSeleccionados.push(item);
    this.Seleccionados.splice(index, 1);
  }

  selecionarTodo() {
    this.Seleccionados.push(...this.NoSeleccionados);
    this.NoSeleccionados.length = 0;
  }

  deselecionarTodo() {
    this.NoSeleccionados.push(...this.NoSeleccionados);
    this.Seleccionados.length = 0;
  }
}
