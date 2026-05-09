/*
========================================================
APP ROUTES
========================================================
*/

import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home';

/*
========================================================
ROTAS
========================================================
*/
export const routes: Routes = [

  /*
  ========================================================
  HOME
  ========================================================
  */
  {
    path: '',

    component: HomeComponent
  },

  /*
  ========================================================
  ETAPA 1 - CONTATO
  ========================================================
  */
  {
    path: 'orcamento',

    loadComponent: () =>

      import('./features/quote/pages/step-contact/step-contact')
        .then(m => m.StepContactComponent)

  },

  /*
  ========================================================
  ETAPA 2 - IMÓVEL
  ========================================================
  */
  {
    path: 'orcamento/imovel',

    loadComponent: () =>

      import('./features/quote/pages/step-property/step-property')
        .then(m => m.StepPropertyComponent)

  },

  /*
  ========================================================
  ETAPA 3 - ESCOPO
  ========================================================
  */
  {
    path: 'orcamento/escopo',

    loadComponent: () =>

      import('./features/quote/pages/step-scope/step-scope')
        .then(m => m.StepScopeComponent)

  },
  /*
  ========================================================
  ETAPA 4 - ENTREGÁVEIS
  ========================================================
  */
  /*
========================================================
ETAPA 4 - ENTREGÁVEIS
========================================================
*/
  {
    path: 'orcamento/entregaveis',

    loadComponent: () =>

      import('./features/quote/pages/step-deliverables/step-deliverables')
        .then(m => m.StepDeliverablesComponent)

  },

/*
========================================================
ETAPA 5 - FINALIZAÇÃO
========================================================
*/
{
  path: 'orcamento/finalizacao',

  loadComponent: () =>

    import('./features/quote/pages/step-finalization/step-finalization')
      .then(m => m.StepFinalizationComponent)

},
/*
========================================================
TELA DE SUCESSO
========================================================
*/
{
  path: 'orcamento/sucesso',

  loadComponent: () =>

    import('./features/quote/pages/success/success')
      .then(m => m.SuccessComponent)

},

/*
========================================================
SOBRE
========================================================

Página institucional premium
da MEDLEV.

URL:
localhost:4200/sobre
*/
{
  path: 'sobre',

  loadComponent: () =>

    import('./features/about/about')
      .then(m => m.AboutComponent)

},
  /*
  ========================================================
  FALLBACK
  ========================================================
  */
  {
    path: '**',

    redirectTo: ''
  }

];