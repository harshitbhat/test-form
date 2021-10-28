import { ILabTest } from './lab-test.interface';

export interface ILabTestComponent {
  componentId: string;
  labTest: ILabTest | undefined;
}
