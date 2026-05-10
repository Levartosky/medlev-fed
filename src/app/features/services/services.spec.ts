import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { PLATFORM_ID } from '@angular/core';

import { ServicesComponent } from './services';

// ─── Helpers ─────────────────────────────────────────────────────────────────
function setup(platformId = 'browser') {
  TestBed.configureTestingModule({
    imports: [ServicesComponent, RouterTestingModule],
    providers: [{ provide: PLATFORM_ID, useValue: platformId }],
  }).compileComponents();

  const fixture: ComponentFixture<ServicesComponent> = TestBed.createComponent(ServicesComponent);
  const component = fixture.componentInstance;
  fixture.detectChanges();
  return { fixture, component };
}

// ─── Suite ───────────────────────────────────────────────────────────────────
describe('ServicesComponent', () => {

  // ── Criação do componente ─────────────────────────────────────────────────
  describe('criação', () => {
    it('should create', () => {
      const { component } = setup();
      expect(component).toBeTruthy();
    });
  });

  // ── Renderização de listas ────────────────────────────────────────────────
  describe('renderização de listas', () => {
    it('should render 6 service accordion items', () => {
      const { fixture } = setup();
      const items = fixture.debugElement.queryAll(By.css('.accordion-item'));
      expect(items.length).toBe(6);
    });

    it('should render 4 process steps', () => {
      const { fixture } = setup();
      const steps = fixture.debugElement.queryAll(By.css('.process-step'));
      expect(steps.length).toBe(4);
    });

    it('should render 6 differential cards', () => {
      const { fixture } = setup();
      const cards = fixture.debugElement.queryAll(By.css('.diff-card'));
      expect(cards.length).toBe(6);
    });

    it('should render 3 testimonials', () => {
      const { fixture } = setup();
      const items = fixture.debugElement.queryAll(By.css('.testimonial'));
      expect(items.length).toBe(3);
    });

    it('should render 6 FAQ items', () => {
      const { fixture } = setup();
      const items = fixture.debugElement.queryAll(By.css('.faq-item'));
      expect(items.length).toBe(6);
    });

    it('should render 3 hero stats', () => {
      const { fixture } = setup();
      const items = fixture.debugElement.queryAll(By.css('.stat-card'));
      expect(items.length).toBe(3);
    });
  });

  // ── Accordion de serviços ─────────────────────────────────────────────────
  describe('accordion de serviços', () => {
    it('should have first service open by default', () => {
      const { component } = setup();
      expect(component.isServiceActive(1)).toBeTrue();
    });

    it('should toggle service when another item is clicked', () => {
      const { fixture, component } = setup();
      component.toggleService(2);
      fixture.detectChanges();
      expect(component.isServiceActive(2)).toBeTrue();
      expect(component.isServiceActive(1)).toBeFalse();
    });

    it('should close service when same item is clicked again', () => {
      const { component } = setup();
      component.toggleService(1);
      expect(component.isServiceActive(1)).toBeFalse();
    });

    it('should only allow one service open at a time', () => {
      const { component } = setup();
      component.toggleService(3);
      component.toggleService(5);
      const openCount = [1, 2, 3, 4, 5, 6].filter(id => component.isServiceActive(id)).length;
      expect(openCount).toBeLessThanOrEqual(1);
    });
  });

  // ── FAQ ───────────────────────────────────────────────────────────────────
  describe('FAQ', () => {
    it('should have first FAQ open by default', () => {
      const { component } = setup();
      expect(component.isFaqOpen(0)).toBeTrue();
    });

    it('should open a closed FAQ on click', () => {
      const { component } = setup();
      component.toggleFaq(1);
      expect(component.isFaqOpen(1)).toBeTrue();
    });

    it('should close an open FAQ when toggled again', () => {
      const { component } = setup();
      component.toggleFaq(0);
      expect(component.isFaqOpen(0)).toBeFalse();
    });
  });

  // ── Scroll behavior ───────────────────────────────────────────────────────
  describe('scroll behavior', () => {
    it('should set isNavScrolled to true when scrollY > 20', () => {
      const { component } = setup();
      Object.defineProperty(window, 'scrollY', { value: 21, writable: true });
      component.onScroll();
      expect(component.isNavScrolled).toBeTrue();
    });

    it('should set isNavScrolled to false when scrollY <= 20', () => {
      const { component } = setup();
      Object.defineProperty(window, 'scrollY', { value: 10, writable: true });
      component.onScroll();
      expect(component.isNavScrolled).toBeFalse();
    });
  });

  // ── Acessibilidade ────────────────────────────────────────────────────────
  describe('acessibilidade', () => {
    it('accordion header should reflect aria-expanded state', () => {
      const { fixture, component } = setup();
      component.toggleService(2);
      fixture.detectChanges();
      const headers = fixture.debugElement.queryAll(By.css('.accordion-header'));
      const secondHeader = headers[1].nativeElement as HTMLElement;
      expect(secondHeader.getAttribute('aria-expanded')).toBe('true');
    });

    it('FAQ question should reflect aria-expanded state', () => {
      const { fixture, component } = setup();
      component.toggleFaq(1);
      fixture.detectChanges();
      const questions = fixture.debugElement.queryAll(By.css('.faq-question'));
      const secondQuestion = questions[1].nativeElement as HTMLElement;
      expect(secondQuestion.getAttribute('aria-expanded')).toBe('true');
    });

    it('Serviços nav link should have aria-current="page"', () => {
      const { fixture } = setup();
      const navLinks = fixture.debugElement.queryAll(By.css('.nav-links a'));
      const activeLink = navLinks.find(
        (l) => (l.nativeElement as HTMLElement).getAttribute('aria-current') === 'page'
      );
      expect(activeLink).toBeTruthy();
    });
  });

  // ── SSR safety ────────────────────────────────────────────────────────────
  describe('SSR safety', () => {
    it('should not throw when running outside browser platform', () => {
      expect(() => {
        const { component } = setup('server');
        component.onScroll();
      }).not.toThrow();
    });
  });
});
