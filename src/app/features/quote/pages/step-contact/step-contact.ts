/*
========================================================
STEP CONTACT PAGE
========================================================

Primeira etapa do formulário MEDLEV.

Responsável por:
- nome
- WhatsApp
- dados iniciais cliente

========================================================
*/

/*
Importa Component.
*/
import { Component } from '@angular/core';

/*
Importa Router.

Responsável pela navegação
entre páginas.
*/
import { Router } from '@angular/router';

/*
========================================================
COMPONENT
========================================================
*/
@Component({

  /*
  Selector HTML.
  */
  selector: 'app-step-contact',

  /*
  Standalone Angular moderno.
  */
  standalone: true,

  /*
  HTML componente.
  */
  templateUrl: './step-contact.html',

  /*
  SCSS componente.
  */
  styleUrls: ['./step-contact.scss']

})

/*
========================================================
CLASSE PRINCIPAL
========================================================
*/
export class StepContactComponent {

  /*
  ========================================================
  CONSTRUCTOR
  ========================================================

  Responsável por permitir
  navegação entre rotas.
  */
  constructor(
    private router: Router
  ) {}

  /*
  ========================================================
  NEXT STEP
  ========================================================

  Navega para:
  ETAPA 2 - IMÓVEL
  */
  nextStep(): void {

    this.router.navigate([
      '/orcamento/imovel'
    ]);

  }

  /*
  ========================================================
  PREVIOUS STEP
  ========================================================

  Futuramente:
  poderá retornar para home.
  */
  previousStep(): void {

    console.log('Voltar');

  }

}