import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ILabTest } from 'src/app/interfaces/lab-test.interface';

@Component({
  selector: 'app-selected-lab-test-list',
  templateUrl: './selected-lab-test-list.component.html',
  styleUrls: ['./selected-lab-test-list.component.scss'],
})
export class SelectedLabTestListComponent implements OnInit {
  @Input() testsList!: ILabTest[];
  @Output() deleteSelected = new EventEmitter<ILabTest>();

  constructor() {}

  ngOnInit(): void {}

  onClick(test: ILabTest) {
    this.deleteSelected.emit(test);
  }
}
