import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepScope } from './step-scope';

describe('StepScope', () => {
  let component: StepScope;
  let fixture: ComponentFixture<StepScope>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepScope],
    }).compileComponents();

    fixture = TestBed.createComponent(StepScope);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
