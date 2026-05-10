/*
========================================================
STEP SCOPE PAGE
========================================================

Etapa responsável pelo escopo
do levantamento arquitetônico.

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

  selector: 'app-step-scope',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl: './step-scope.html',

  styleUrls: ['./step-scope.scss']

})

export class StepScopeComponent implements AfterViewInit, OnDestroy {

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
  SEÇÕES DO ESCOPO
  ========================================================
  */
  scopeSections = [

    {
      title: 'Estrutura e vedações',
      icon: '⚠️',
      expanded: true,
      selected: 3,
      total: 6,
      items: [
        'Alvenarias (paredes)',
        'Aberturas (portas e janelas)',
        'Pé direito de ambientes',
        'Pé direito e vigas aparentes',
        'Identificação de forro/laje',
        'Desníveis de piso'
      ]
    },

    {
      title: 'Marcenaria, bancadas e nichos',
      icon: '🪑',
      expanded: false,
      selected: 0,
      total: 4,
      items: []
    },

    {
      title: 'Áreas molhadas',
      icon: '💧',
      expanded: false,
      selected: 0,
      total: 4,
      items: []
    },

    {
      title: 'Circulação',
      icon: '🏠',
      expanded: false,
      selected: 0,
      total: 4,
      items: []
    },

    {
      title: 'Áreas externas',
      icon: '🌳',
      expanded: false,
      selected: 0,
      total: 5,
      items: []
    },

    {
      title: 'Itens elétricos',
      icon: '⚡',
      expanded: false,
      selected: 0,
      total: 0,
      items: []
    },

    {
      title: 'Itens hidráulicos',
      icon: '🚰',
      expanded: false,
      selected: 0,
      total: 0,
      items: []
    }

  ];

  /*
  ========================================================
  TOGGLE ACCORDION
  ========================================================
  */
  toggleSection(index: number): void {

    this.scopeSections[index].expanded =
      !this.scopeSections[index].expanded;

  }

  /*
  ========================================================
  PREVIOUS STEP
  ========================================================
  */
  previousStep(): void {

    this.router.navigate([
      '/orcamento/imovel'
    ]);

  }

  /*
  ========================================================
  NEXT STEP
  ========================================================
  */
  nextStep(): void {

    this.router.navigate([
      '/orcamento/entregaveis'
    ]);

  }

}
