import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  imports: [MatIconModule, NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css',
})
export class RatingComponent {
  @Input({ required: true, transform: (valor: number) => Array(valor).fill(0) })
  maxRating!: number[];

  @Input()
  ratingActual = 0;

  @Output()
  calificado = new EventEmitter<number>();

  ratingAnterior = 0;

  mouseEnter(index: number) {
    this.ratingActual = index + 1;
  }

  mouseLeave() {
    this.ratingActual = 0;
    if (this.ratingAnterior !== 0) {
      this.ratingActual = this.ratingAnterior;
    } else {
      this.ratingActual = 0;
    }
  }

  setRating(index: number) {
    this.ratingActual = index + 1;
    this.ratingAnterior = this.ratingActual;
    this.calificado.emit(this.ratingActual);
  }
}
