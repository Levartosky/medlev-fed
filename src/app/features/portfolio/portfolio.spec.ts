import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { PLATFORM_ID } from '@angular/core';

import { PortfolioComponent } from './portfolio';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function setup(platformId = 'browser') {
  TestBed.configureTestingModule({
    imports: [PortfolioComponent, RouterTestingModule],
    providers: [{ provide: PLATFORM_ID, useValue: platformId }],
  }).compileComponents();

  const fixture: ComponentFixture<PortfolioComponent> = TestBed.createComponent(PortfolioComponent);
  const component = fixture.componentInstance;
  fixture.detectChanges();
  return { fixture, component };
}

// ─── Suite ───────────────────────────────────────────────────────────────────

describe('PortfolioComponent', () => {

  // ── Criação ───────────────────────────────────────────────────────────────
  describe('criação', () => {
    it('should create', () => {
      const { component } = setup();
      expect(component).toBeTruthy();
    });
  });

  // ── Renderização inicial ──────────────────────────────────────────────────
  describe('renderização inicial', () => {

    it('should render 18 projects in thumbs list', () => {
      const { fixture } = setup();
      const thumbs = fixture.debugElement.queryAll(By.css('.thumb-item'));
      expect(thumbs.length).toBe(18);
    });

    it('should render 6 filter pills', () => {
      const { fixture } = setup();
      const pills = fixture.debugElement.queryAll(By.css('.filter-pill'));
      expect(pills.length).toBe(6);
    });

    it('should show first project as active by default', () => {
      const { fixture } = setup();
      const allThumbs = fixture.debugElement.queryAll(By.css('.thumb-item'));
      expect(allThumbs[0].nativeElement.classList).toContain('active');
    });

    it('should display "01 / 18" in counter', () => {
      const { fixture } = setup();
      const counter = fixture.debugElement.query(By.css('.stage-counter'));
      const text: string = (counter.nativeElement as HTMLElement).textContent ?? '';
      expect(text).toContain('01');
      expect(text).toContain('18');
    });

    it('should render 2 hero stats', () => {
      const { fixture } = setup();
      const stats = fixture.debugElement.queryAll(By.css('.hero-stat'));
      expect(stats.length).toBe(2);
    });

  });

  // ── Navegação manual ──────────────────────────────────────────────────────
  describe('navegação manual', () => {

    it('should advance to next project on next() call', () => {
      const { fixture, component } = setup();
      component.next();
      fixture.detectChanges();
      expect(component.currentIndex).toBe(1);
    });

    it('should go back to previous project on prev() call', () => {
      const { fixture, component } = setup();
      component.goTo(3);
      fixture.detectChanges();
      component.prev();
      fixture.detectChanges();
      expect(component.currentIndex).toBe(2);
    });

    it('should wrap around (last → first) on next at end', () => {
      const { fixture, component } = setup();
      component.goTo(17);
      fixture.detectChanges();
      component.next();
      fixture.detectChanges();
      expect(component.currentIndex).toBe(0);
    });

    it('should wrap around (first → last) on prev at start', () => {
      const { fixture, component } = setup();
      component.prev();
      fixture.detectChanges();
      expect(component.currentIndex).toBe(17);
    });

    it('should go to specific index on goTo(index)', () => {
      const { fixture, component } = setup();
      component.goTo(9);
      fixture.detectChanges();
      expect(component.currentIndex).toBe(9);
    });

  });

  // ── Filtros ───────────────────────────────────────────────────────────────
  describe('filtros', () => {

    it('should filter projects by category', () => {
      const { fixture, component } = setup();
      component.applyFilter('comercial');
      fixture.detectChanges();
      const thumbs = fixture.debugElement.queryAll(By.css('.thumb-item'));
      expect(thumbs.length).toBe(component.getFilterCount('comercial'));
    });

    it('should reset currentIndex to 0 when filter changes', () => {
      const { fixture, component } = setup();
      component.goTo(5);
      fixture.detectChanges();
      component.applyFilter('industrial');
      fixture.detectChanges();
      expect(component.currentIndex).toBe(0);
    });

    it('should update counter total when filter is applied', () => {
      const { fixture, component } = setup();
      component.applyFilter('residencial');
      fixture.detectChanges();
      const tot = fixture.debugElement.query(By.css('.stage-counter__tot'));
      const expected = String(component.getFilterCount('residencial')).padStart(2, '0');
      expect((tot.nativeElement as HTMLElement).textContent?.trim()).toBe(expected);
    });

    it('should show all 18 projects when "Todos" is selected', () => {
      const { fixture, component } = setup();
      component.applyFilter('comercial');
      fixture.detectChanges();
      component.applyFilter('all');
      fixture.detectChanges();
      const thumbs = fixture.debugElement.queryAll(By.css('.thumb-item'));
      expect(thumbs.length).toBe(18);
    });

    it('getFilterCount should return correct count per category', () => {
      const { component } = setup();
      expect(component.getFilterCount('all')).toBe(18);
      expect(component.getFilterCount('residencial')).toBe(7);
      expect(component.getFilterCount('comercial')).toBe(4);
      expect(component.getFilterCount('esportivo')).toBe(2);
      expect(component.getFilterCount('industrial')).toBe(3);
      expect(component.getFilterCount('institucional')).toBe(2);
    });

  });

  // ── Auto-play ─────────────────────────────────────────────────────────────
  describe('auto-play', () => {

    it('should start in paused state', () => {
      const { component } = setup();
      expect(component.autoplayActive).toBe(false);
    });

    it('should toggle autoplay on toggleAutoplay() call', fakeAsync(() => {
      const { component } = setup();
      component.toggleAutoplay();
      expect(component.autoplayActive).toBe(true);
      component.toggleAutoplay();
      expect(component.autoplayActive).toBe(false);
      tick(10000);
    }));

    it('should advance project automatically after AUTOPLAY_INTERVAL when active', fakeAsync(() => {
      const { fixture, component } = setup();
      component.toggleAutoplay();
      fixture.detectChanges();
      tick(5000);
      fixture.detectChanges();
      expect(component.currentIndex).toBe(1);
      component.toggleAutoplay();
      tick(10000);
    }));

    it('should stop autoplay on user interaction (onUserInteraction)', fakeAsync(() => {
      const { fixture, component } = setup();
      component.toggleAutoplay();
      fixture.detectChanges();
      component.onUserInteraction();
      fixture.detectChanges();
      expect(component.autoplayActive).toBe(false);
      tick(10000);
    }));

    it('should restart autoplay after IDLE_THRESHOLD of inactivity', fakeAsync(() => {
      const { fixture, component } = setup();
      component.onUserInteraction();
      fixture.detectChanges();
      tick(5000);
      fixture.detectChanges();
      expect(component.autoplayActive).toBe(true);
      component.toggleAutoplay();
      tick(10000);
    }));

  });

  // ── Navegação por teclado ─────────────────────────────────────────────────
  describe('navegação por teclado', () => {

    it('should advance on ArrowRight keydown', fakeAsync(() => {
      const { fixture, component } = setup();
      component.onKeyDown(new KeyboardEvent('keydown', { key: 'ArrowRight' }));
      fixture.detectChanges();
      expect(component.currentIndex).toBe(1);
      tick(10000);
    }));

    it('should go back on ArrowLeft keydown', fakeAsync(() => {
      const { fixture, component } = setup();
      component.goTo(5);
      fixture.detectChanges();
      component.onKeyDown(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));
      fixture.detectChanges();
      expect(component.currentIndex).toBe(4);
      tick(10000);
    }));

    it('should not advance on other keys', () => {
      const { component } = setup();
      component.onKeyDown(new KeyboardEvent('keydown', { key: 'Enter' }));
      expect(component.currentIndex).toBe(0);
    });

  });

  // ── Scroll behavior ───────────────────────────────────────────────────────
  describe('scroll behavior', () => {

    it('should set isNavScrolled to true when scrollY > 20', () => {
      const { component } = setup();
      Object.defineProperty(window, 'scrollY', { value: 21, writable: true });
      component.onScroll();
      expect(component.isNavScrolled).toBe(true);
    });

    it('should set isNavScrolled to false when scrollY <= 20', () => {
      const { component } = setup();
      Object.defineProperty(window, 'scrollY', { value: 5, writable: true });
      component.onScroll();
      expect(component.isNavScrolled).toBe(false);
    });

  });

  // ── Acessibilidade ────────────────────────────────────────────────────────
  describe('acessibilidade', () => {

    it('filter pills should reflect aria-pressed state', () => {
      const { fixture, component } = setup();
      component.applyFilter('comercial');
      fixture.detectChanges();
      const pills = fixture.debugElement.queryAll(By.css('.filter-pill'));
      const comercialPill = pills.find(p =>
        (p.nativeElement as HTMLElement).textContent?.includes('Comercial')
      );
      expect(comercialPill).toBeTruthy();
      expect((comercialPill!.nativeElement as HTMLElement).getAttribute('aria-pressed')).toBe('true');
    });

    it('active thumb should have aria-current="true"', () => {
      const { fixture, component } = setup();
      component.goTo(3);
      fixture.detectChanges();
      const thumbs = fixture.debugElement.queryAll(By.css('.thumb-item'));
      expect((thumbs[3].nativeElement as HTMLElement).getAttribute('aria-current')).toBe('true');
      expect((thumbs[0].nativeElement as HTMLElement).getAttribute('aria-current')).toBeNull();
    });

    it('autoplay button should reflect aria-pressed state', fakeAsync(() => {
      const { fixture, component } = setup();
      component.toggleAutoplay();
      fixture.detectChanges();
      const btn = fixture.debugElement.query(By.css('.autoplay-btn'));
      expect((btn.nativeElement as HTMLElement).getAttribute('aria-pressed')).toBe('true');
      component.toggleAutoplay();
      tick(10000);
    }));

    it('Portfólio nav link should have aria-current="page"', () => {
      const { fixture } = setup();
      const navLinks = fixture.debugElement.queryAll(By.css('.ps-nav__links a'));
      const activeLink = navLinks.find(
        l => (l.nativeElement as HTMLElement).getAttribute('aria-current') === 'page'
      );
      expect(activeLink).toBeTruthy();
    });

  });

  // ── SSR safety ────────────────────────────────────────────────────────────
  describe('SSR safety', () => {

    it('should not throw or set timers when running outside browser platform', () => {
      expect(() => {
        const { component } = setup('server');
        component.onScroll();
        component.onActivity();
      }).not.toThrow();
    });

  });

  // ── Cleanup ───────────────────────────────────────────────────────────────
  describe('cleanup', () => {

    it('should clear all timers on ngOnDestroy', fakeAsync(() => {
      const { component } = setup();
      component.toggleAutoplay();
      const clearTimeoutSpy = spyOn(window, 'clearTimeout').and.callThrough();
      const clearIntervalSpy = spyOn(window, 'clearInterval').and.callThrough();
      component.ngOnDestroy();
      expect(clearTimeoutSpy).toHaveBeenCalled();
      expect(clearIntervalSpy).toHaveBeenCalled();
      tick(10000);
    }));

  });

});
