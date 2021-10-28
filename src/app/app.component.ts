import { Component } from '@angular/core';

import { ILabTest } from 'src/app/interfaces/lab-test.interface';
import { ILabTestComponent } from 'src/app/interfaces/lab-test-component.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  testsSelected: Map<string, ILabTest | undefined> = new Map();
  testAssigned: ILabTest[] = [];
  additionalTests: ILabTestComponent[] = [];
  formsOpenCount: number = 0;

  constructor() {}

  addTest(obj: ILabTestComponent) {
    this.testsSelected.set(obj.componentId, obj.labTest);
    //console.log(obj, this.additionalTests);
  }

  deleteTest(test: ILabTestComponent) {
    //console.log(test);
    this.additionalTests = this.additionalTests.filter(
      (obj) => obj.componentId !== test.componentId
    );
    //console.log(this.additionalTests);
    this.formsOpenCount--;
  }

  counter(i: number) {
    return new Array(i);
  }

  getNewFormData(component: ILabTestComponent) {
    this.additionalTests.push(component);
    //console.log(this.additionalTests);
  }

  addForm() {
    this.formsOpenCount++;
  }

  saveTests() {
    const tests: ILabTest[] = [];
    this.testsSelected.forEach((test) => {
      if (test) {
        tests.push(test);
      }
    });
    this.testAssigned = [...this.testAssigned, ...tests];
    this.testsSelected.clear();
    this.formsOpenCount = 0;
    this.additionalTests = [];
  }
}
