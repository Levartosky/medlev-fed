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
      items: [
        { label: 'Alvenarias (paredes)', checked: false },
        { label: 'Aberturas (portas e janelas)', checked: false },
        { label: 'Pé direito de ambientes', checked: false },
        { label: 'Pé direito e vigas aparentes', checked: false },
        { label: 'Identificação de forro/laje', checked: false },
        { label: 'Desníveis de piso', checked: false }
      ]
    },

    {
      title: 'Marcenaria, bancadas e nichos',
      icon: '🪑',
      expanded: false,
      items: [
        { label: 'Bancadas (medidas totais)', checked: false },
        { label: 'Armários embutidos / Marcenarias fixas', checked: false },
        { label: 'Nichos', checked: false },
        { label: 'Lareiras', checked: false }
      ]
    },

    {
      title: 'Áreas molhadas',
      icon: '💧',
      expanded: false,
      items: [
        { label: 'Box do chuveiro', checked: false },
        { label: 'Aquecedores', checked: false },
        { label: 'Pias e cubas', checked: false },
        { label: 'Área de serviço (tanque e lavanderia)', checked: false }
      ]
    },

    {
      title: 'Circulação',
      icon: '🏠',
      expanded: false,
      items: [
        { label: 'Hall social', checked: false },
        { label: 'Hall de serviço', checked: false },
        { label: 'Escadas internas', checked: false },
        { label: 'Guarda-corpo', checked: false }
      ]
    },

    {
      title: 'Áreas externas',
      icon: '🌳',
      expanded: false,
      items: [
        { label: 'Churrasqueiras', checked: false },
        { label: 'Floreiras', checked: false },
        { label: 'Piscina (medidas gerais e profundidades)', checked: false },
        { label: 'Áreas externas', checked: false },
        { label: 'Ar condicionado e condensadora', checked: false }
      ]
    },

    {
      title: 'Itens elétricos',
      icon: '⚡',
      expanded: false,
      items: [
        { label: 'Medir eixos e alturas exatos dos pontos elétricos', checked: false },
        { label: 'Locar aproximadamente a posição dos pontos (baixo, médio ou alto)', checked: false }
      ]
    },

    {
      title: 'Itens hidráulicos',
      icon: '🚰',
      expanded: false,
      items: [
        { label: 'Medir eixos e alturas dos pontos hidráulicos (água/esgoto/gás)', checked: false },
        { label: 'Medir eixos de metais e louças (cubas, bacias, torneiras)', checked: false }
      ]
    }

  ];

  /*
  ========================================================
  TOGGLE ACCORDION
  ========================================================
  */
  toggleSection(index: number): void {
    this.scopeSections[index].expanded = !this.scopeSections[index].expanded;
  }

  toggleItem(sectionIndex: number, itemIndex: number): void {
    this.scopeSections[sectionIndex].items[itemIndex].checked =
      !this.scopeSections[sectionIndex].items[itemIndex].checked;
  }

  isAllSelected(sectionIndex: number): boolean {
    const items = this.scopeSections[sectionIndex].items;
    return items.length > 0 && items.every(i => i.checked);
  }

  toggleAll(sectionIndex: number): void {
    const allSelected = this.isAllSelected(sectionIndex);
    this.scopeSections[sectionIndex].items.forEach(i => i.checked = !allSelected);
  }

  getSelectedCount(sectionIndex: number): number {
    return this.scopeSections[sectionIndex].items.filter(i => i.checked).length;
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
