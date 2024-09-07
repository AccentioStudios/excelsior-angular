import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Step {
  label: string;
}

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent {
  @Input() steps: Step[] = [];
  @Input() currentStep: number = 0;
  @Output() stepSelected = new EventEmitter<number>();

  selectStep(index: number) {
    this.currentStep = index;
    this.stepSelected.emit(index);
  }
}
