import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFinalization } from './step-finalization';

describe('StepFinalization', () => {
  let component: StepFinalization;
  let fixture: ComponentFixture<StepFinalization>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepFinalization],
    }).compileComponents();

    fixture = TestBed.createComponent(StepFinalization);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
