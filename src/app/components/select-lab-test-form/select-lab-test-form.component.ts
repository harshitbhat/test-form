import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { tests } from 'src/app/assets/test-list';
import { ILabTest } from 'src/app/interfaces/lab-test.interface';

@Component({
  selector: 'app-select-lab-test-form',
  templateUrl: './select-lab-test-form.component.html',
  styleUrls: ['./select-lab-test-form.component.scss'],
})
export class SelectLabTestFormComponent implements OnInit {
  labTests: ILabTest[];
  testSelected!: ILabTest;

  @Output() selected = new EventEmitter<ILabTest>();

  constructor() {
    this.labTests = tests;
  }

  ngOnInit(): void {}

  showSelecedValue(obj: ILabTest) {
    this.testSelected = obj;
    this.selected.emit(this.testSelected);
  }
}
