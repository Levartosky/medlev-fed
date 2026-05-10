/*
========================================================
PORTFOLIO DETAIL — TESTES UNITÁRIOS
========================================================
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { PortfolioDetailComponent } from './portfolio-detail';

describe('PortfolioDetailComponent', () => {

  let component: PortfolioDetailComponent;
  let fixture: ComponentFixture<PortfolioDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1'
              }
            }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load project with id 1', () => {
    expect(component.project).not.toBeNull();
    expect(component.project?.id).toBe(1);
  });

  it('should start at slide 0', () => {
    expect(component.currentSlide).toBe(0);
  });

  it('should navigate slides with nextSlide', () => {
    component.nextSlide();
    expect(component.currentSlide).toBe(1);
  });

  it('should wrap around to last slide with prevSlide from 0', () => {
    component.prevSlide();
    const total = component.project?.galleryImages.length ?? 1;
    expect(component.currentSlide).toBe(total - 1);
  });

});
