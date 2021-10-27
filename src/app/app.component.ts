import { Component } from '@angular/core';

import { ILabTest } from 'src/app/interfaces/lab-test.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  testsSelected: ILabTest[] = [];
  showFormAfter: boolean = false;

  constructor() {}

  addTest(obj: ILabTest) {
    this.testsSelected.push(obj);
    this.showFormAfter = false;
  }

  deleteTest(obj: ILabTest) {
    this.testsSelected = this.testsSelected.filter(
      (test) => test.id !== obj.id
    );
  }

  addForm() {
    this.showFormAfter = true;
  }
}
