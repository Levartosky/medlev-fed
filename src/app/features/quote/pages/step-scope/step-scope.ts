/*
========================================================
STEP SCOPE PAGE
========================================================

Etapa responsável pelo escopo
do levantamento arquitetônico.

========================================================
*/

import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

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

export class StepScopeComponent {

  /*
  ========================================================
  CONSTRUCTOR
  ========================================================
  */
  constructor(
    private router: Router
  ) {}

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