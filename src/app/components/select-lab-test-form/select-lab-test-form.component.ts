import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { tests } from 'src/app/assets/test-list';
import { ILabTest } from 'src/app/interfaces/lab-test.interface';
import { ILabTestComponent } from 'src/app/interfaces/lab-test-component.interface';

@Component({
  selector: 'app-select-lab-test-form',
  templateUrl: './select-lab-test-form.component.html',
  styleUrls: ['./select-lab-test-form.component.scss'],
})
export class SelectLabTestFormComponent implements OnChanges {
  labTests: ILabTest[];
  testSelected: ILabTest | undefined;
  testSelectedComponent!: ILabTestComponent | undefined;

  @Input() showDelIcon!: boolean;
  @Input() componentDetails!: ILabTestComponent | undefined;

  @Output() componentCreated = new EventEmitter<ILabTestComponent>();
  @Output() selected = new EventEmitter<ILabTestComponent>();
  @Output() deleteSelected = new EventEmitter<ILabTestComponent>();

  constructor() {
    this.labTests = tests;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.testSelectedComponent = {
        componentId: this.componentDetails?.componentId || uuidv4(),
        labTest: this.componentDetails?.labTest,
      };
      this.testSelected = this.testSelectedComponent.labTest;
      this.componentCreated.emit(this.testSelectedComponent);
    });
  }

  // The game is being played here
  ngOnChanges() {
    console.log('Comming ', this.componentDetails);
    console.log('Current ', this.testSelectedComponent);
    if (this.componentDetails) {
      this.testSelectedComponent = { ...this.componentDetails };
    }
    this.testSelected = this.testSelectedComponent?.labTest;
  }

  showSelecedValue(obj: ILabTest) {
    this.testSelected = obj;
    if (this.testSelectedComponent) {
      this.testSelectedComponent.labTest = this.testSelected;
    }
    this.selected.emit(this.testSelectedComponent);
  }

  onClickDelete(test: ILabTestComponent | undefined) {
    this.deleteSelected.emit(test);
  }
}
