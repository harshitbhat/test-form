import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLabTestFormComponent } from './select-lab-test-form.component';

describe('SelectLabTestFormComponent', () => {
  let component: SelectLabTestFormComponent;
  let fixture: ComponentFixture<SelectLabTestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectLabTestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLabTestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
