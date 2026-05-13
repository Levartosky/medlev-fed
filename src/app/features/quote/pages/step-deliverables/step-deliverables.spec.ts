import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepDeliverables } from './step-deliverables';

describe('StepDeliverables', () => {
  let component: StepDeliverables;
  let fixture: ComponentFixture<StepDeliverables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepDeliverables],
    }).compileComponents();

    fixture = TestBed.createComponent(StepDeliverables);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
