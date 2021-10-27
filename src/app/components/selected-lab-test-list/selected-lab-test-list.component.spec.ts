import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedLabTestListComponent } from './selected-lab-test-list.component';

describe('SelectedLabTestListComponent', () => {
  let component: SelectedLabTestListComponent;
  let fixture: ComponentFixture<SelectedLabTestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedLabTestListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedLabTestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
