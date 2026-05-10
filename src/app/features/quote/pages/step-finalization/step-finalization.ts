/*
========================================================
STEP FINALIZATION PAGE
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

  selector: 'app-step-finalization',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl: './step-finalization.html',

  styleUrls: ['./step-finalization.scss']

})

export class StepFinalizationComponent implements AfterViewInit, OnDestroy {

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
  ) { }

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

  selectedUrgency = 'Esta semana';

  selectedRpa = 'Não';

  acceptedPrivacy = true;

  /*
  ========================================================
  SELECT URGENCY
  ========================================================
  */
  selectUrgency(value: string): void {

    this.selectedUrgency = value;

  }

  /*
  ========================================================
  SELECT RPA
  ========================================================
  */
  selectRpa(value: string): void {

    this.selectedRpa = value;

  }

  /*
  ========================================================
  TOGGLE PRIVACY
  ========================================================
  */
  togglePrivacy(): void {

    this.acceptedPrivacy =
      !this.acceptedPrivacy;

  }

  /*
  ========================================================
  PREVIOUS STEP
  ========================================================
  */
  previousStep(): void {

    this.router.navigate([
      '/orcamento/entregaveis'
    ]);

  }

  /*
  ========================================================
  SUBMIT FORM
  ========================================================
  */
  submitForm(): void {

    this.router.navigate([
      '/orcamento/sucesso'
    ]);

  }

}
