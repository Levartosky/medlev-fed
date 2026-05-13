import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepProperty } from './step-property';

describe('StepProperty', () => {
  let component: StepProperty;
  let fixture: ComponentFixture<StepProperty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepProperty],
    }).compileComponents();

    fixture = TestBed.createComponent(StepProperty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
