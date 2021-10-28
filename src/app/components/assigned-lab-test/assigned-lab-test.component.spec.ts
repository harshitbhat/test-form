import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedLabTestComponent } from './assigned-lab-test.component';

describe('AssignedLabTestComponent', () => {
  let component: AssignedLabTestComponent;
  let fixture: ComponentFixture<AssignedLabTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedLabTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedLabTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
