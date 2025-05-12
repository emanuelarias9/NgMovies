import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  imports: [MatIconModule, NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css',
})
export class RatingComponent implements OnInit {
  ngOnInit(): void {
    this.maxRatingArray = Array(this.maxRating).fill(0);
  }
  @Input({ required: true })
  maxRating!: number;

  @Input()
  ratingActual = 0;

  maxRatingArray: any[] = [];
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
  }
}
