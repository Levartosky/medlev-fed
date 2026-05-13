/*
========================================================
SUCCESS PAGE
========================================================
*/

/*
Importa Component do Angular e hooks de ciclo de vida.
*/
import { AfterViewInit, Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';

/*
isPlatformBrowser: garante que o IntersectionObserver
só rode no browser (não no SSR).
*/
import { isPlatformBrowser } from '@angular/common';

import { Router } from '@angular/router';

@Component({

  selector: 'app-success',

  standalone: true,

  templateUrl: './success.html',

  styleUrl: './success.scss'

})

export class SuccessComponent implements AfterViewInit, OnDestroy {

  /*
  Observer para animação reveal nos elementos da página.
  */
  private observer?: IntersectionObserver;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  /*
  ========================================================
  LIFECYCLE — REVEAL ANIMATION
  ========================================================
  */
  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          this.observer?.unobserve(e.target);
        }
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => this.observer!.observe(el));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  goHome(): void {

    this.router.navigate([
      '/'
    ]);

  }

}
