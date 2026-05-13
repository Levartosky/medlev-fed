/*
========================================================
CONTACT COMPONENT — SPEC
========================================================
*/

import { TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact';

describe('ContactComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

});
