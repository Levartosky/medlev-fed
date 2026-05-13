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
Importa Component e hooks de ciclo de vida.
*/
import { AfterViewInit, Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';

/*
isPlatformBrowser: garante que o IntersectionObserver
só rode no browser (não no SSR).
*/
import { isPlatformBrowser } from '@angular/common';

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
export class StepContactComponent implements AfterViewInit, OnDestroy {

  /*
  Observer para animação reveal nos elementos da página.
  */
  private observer?: IntersectionObserver;

  /*
  ========================================================
  CONSTRUCTOR
  ========================================================

  Responsável por permitir
  navegação entre rotas.
  */
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  /*
  ========================================================
  LIFECYCLE — REVEAL ANIMATION
  ========================================================

  IntersectionObserver observa elementos com .reveal
  e adiciona .visible quando entram na viewport.
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

  /*
  Limpa o observer ao destruir o componente
  para evitar memory leaks.
  */
  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

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
  */
  previousStep(): void {

    this.router.navigate(['/']);

  }

}
