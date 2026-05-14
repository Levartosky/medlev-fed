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

import { CommonModule, isPlatformBrowser } from '@angular/common';

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

  imports: [CommonModule],

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
  nome = '';
  whatsapp = '';
  submitted = false;

  nextStep(): void {
    this.submitted = true;
    if (!this.nome.trim() || !this.whatsapp.trim()) return;
    this.router.navigate(['/orcamento/imovel']);
  }

  formatWhatsapp(event: Event): void {
    const input = event.target as HTMLInputElement;
    let digits = input.value.replace(/\D/g, '').slice(0, 11);
    let formatted = digits;
    if (digits.length > 7) {
      formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    } else if (digits.length > 2) {
      formatted = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    } else if (digits.length > 0) {
      formatted = `(${digits}`;
    }
    input.value = formatted;
    this.whatsapp = formatted;
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
