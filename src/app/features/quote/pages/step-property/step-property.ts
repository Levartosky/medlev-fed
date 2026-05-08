/*
========================================================
STEP PROPERTY PAGE
========================================================

Responsável pela segunda etapa
do formulário da MEDLEV.

Objetivos:
- capturar dados do imóvel
- metragem
- ocupação
- endereço
- complexidade do projeto

========================================================
*/

/*
Importa Component do Angular.
*/
import { Component } from '@angular/core';

/*
Importa CommonModule.

Responsável por:
- *ngFor
- diretivas Angular
- estruturas básicas
*/
import { CommonModule } from '@angular/common';

/*
Importa Router.

Responsável pela navegação
entre etapas.
*/
import { Router } from '@angular/router';

/*
========================================================
DECORATOR COMPONENT
========================================================
*/
@Component({

  /*
  Selector HTML.
  */
  selector: 'app-step-property',

  /*
  Standalone Angular moderno.
  */
  standalone: true,

  /*
  Imports necessários.
  */
  imports: [
    CommonModule
  ],

  /*
  HTML da página.
  */
  templateUrl: './step-property.html',

  /*
  SCSS da página.
  */
  styleUrls: ['./step-property.scss']

})

/*
========================================================
CLASSE PRINCIPAL
========================================================
*/
export class StepPropertyComponent {

  /*
  ========================================================
  CONSTRUCTOR
  ========================================================

  Responsável pela navegação.
  */
  constructor(
    private router: Router
  ) {}

  /*
  ========================================================
  TIPOS DE IMÓVEL
  ========================================================

  Estrutura utilizada
  nos cards clicáveis.
  */
  propertyTypes = [

    {
      icon: 'home',
      title: 'Casa',
      description: 'Térrea ou sobrado'
    },

    {
      icon: 'apartment',
      title: 'Apartamento',
      description: 'Cobertura, duplex...'
    },

    {
      icon: 'storefront',
      title: 'Comercial',
      description: 'Loja, escritório...'
    },

    {
      icon: 'inventory_2',
      title: 'Outro',
      description: 'Galpão, terreno...'
    }

  ];

  /*
  ========================================================
  ESTADOS SELECIONADOS
  ========================================================
  */

  /*
  Tipo imóvel selecionado.
  */
  selectedPropertyType = 'Apartamento';

  /*
  Estado ocupação.
  */
  selectedOccupation = 'Sim, totalmente';

  /*
  ========================================================
  SELECT PROPERTY TYPE
  ========================================================

  Atualiza card selecionado.
  */
  selectPropertyType(type: string): void {

    this.selectedPropertyType = type;

  }

  /*
  ========================================================
  SELECT OCCUPATION
  ========================================================

  Atualiza radio selecionado.
  */
  selectOccupation(value: string): void {

    this.selectedOccupation = value;

  }

  /*
  ========================================================
  PREVIOUS STEP
  ========================================================

  Retorna para etapa contato.
  */
  previousStep(): void {

    this.router.navigate([
      '/orcamento'
    ]);

  }

/*
========================================================
NEXT STEP
========================================================

Navega para:
ETAPA 3 - ESCOPO
*/
nextStep(): void {

  this.router.navigate([
    '/orcamento/escopo'
  ]);

}

}