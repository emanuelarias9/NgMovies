import { Component, Input } from '@angular/core';

@Component({
  selector: 'error-handler',
  imports: [],
  templateUrl: './error-handler.component.html',
  styleUrl: './error-handler.component.css',
})
export class ErrorHandlerComponent {
  @Input({ required: true }) errors: string[] = [];
}
