/*
========================================================
STEP DELIVERABLES PAGE
========================================================
*/

/*
Importa Component do Angular e hooks de ciclo de vida.
*/
import { AfterViewInit, Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';

/*
CommonModule: habilita *ngFor, *ngIf, etc.
isPlatformBrowser: garante que o IntersectionObserver
só rode no browser (não no SSR).
*/
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { Router } from '@angular/router';

@Component({

  selector: 'app-step-deliverables',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl: './step-deliverables.html',

  styleUrls: ['./step-deliverables.scss']

})

export class StepDeliverablesComponent implements AfterViewInit, OnDestroy {

  /*
  Observer para animação reveal nos elementos da página.
  */
  private observer?: IntersectionObserver;

  /*
  ========================================================
  CONSTRUCTOR
  ========================================================
  */
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

  /*
  ========================================================
  ESTADOS
  ========================================================
  */

  selected3DType = 'Pacote básico';

  selectedSoftware = 'SketchUp';

  /*
  ========================================================
  SELECT 3D TYPE
  ========================================================
  */
  select3DType(type: string): void {

    this.selected3DType = type;

  }

  /*
  ========================================================
  SELECT SOFTWARE
  ========================================================
  */
  selectSoftware(software: string): void {

    this.selectedSoftware = software;

  }

  /*
  ========================================================
  PREVIOUS STEP
  ========================================================
  */
  previousStep(): void {

    this.router.navigate([
      '/orcamento/escopo'
    ]);

  }

  /*
  ========================================================
  NEXT STEP
  ========================================================
  */
  nextStep(): void {

    this.router.navigate([

      '/orcamento/finalizacao'
    ]);

  }

}
