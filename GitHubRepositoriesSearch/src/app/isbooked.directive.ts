import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[IsBooked]',
  exportAs: 'IsBooked'
})
export class IsBookedDirective {
  @Input() IsBooked: boolean;

  constructor() {
  }
}
