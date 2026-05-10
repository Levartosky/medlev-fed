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
PORTFÓLIO
========================================================

Página de portfólio com filtros por categoria
e grid de projetos realizados.

URL:
localhost:4200/portfolio
*/
{
  path: 'portfolio',

  loadComponent: () =>

    import('./features/portfolio/portfolio')
      .then(m => m.PortfolioComponent)

},

/*
========================================================
DETALHE DO PROJETO
========================================================

Página de detalhe de um projeto específico do portfólio.
O param :id corresponde ao id numérico do projeto.

URL:
localhost:4200/portfolio/1
*/
{
  path: 'portfolio/:id',

  loadComponent: () =>

    import('./features/portfolio/portfolio-detail/portfolio-detail')
      .then(m => m.PortfolioDetailComponent)

},

/*
========================================================
SERVIÇOS
========================================================

Catálogo completo de serviços da MEDLEV
com accordion, FAQ e animações.

URL:
localhost:4200/servicos
*/
{
  path: 'servicos',

  loadComponent: () =>

    import('./features/services/services')
      .then(m => m.ServicesComponent)

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
CONTATO
========================================================

Página de contato com canais de atendimento
e formulário de envio de mensagem.

URL:
localhost:4200/contato
*/
{
  path: 'contato',

  loadComponent: () =>

    import('./features/contact/contact')
      .then(m => m.ContactComponent)

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