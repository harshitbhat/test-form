import { Component, OnInit, Input } from '@angular/core';
import { ILabTest } from 'src/app/interfaces/lab-test.interface';

@Component({
  selector: 'app-assigned-lab-test',
  templateUrl: './assigned-lab-test.component.html',
  styleUrls: ['./assigned-lab-test.component.scss'],
})
export class AssignedLabTestComponent implements OnInit {
  @Input() assignedLabTestList!: ILabTest[];

  constructor() {}

  ngOnInit(): void {}
}
