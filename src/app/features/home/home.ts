/*
========================================================
HOME COMPONENT
========================================================

Este é o componente principal da Home.

Responsabilidades:
- controlar lógica da página
- responder eventos
- integrar APIs futuramente
- controlar animações
- controlar interações

Atualmente:
- componente estático
- sem lógica complexa

Mais pra frente:
- integraremos backend
- WhatsApp
- formulário
- animações
- IA
========================================================
*/

/*
Importa Component do Angular.
*/
import { AfterViewInit, Component, HostListener, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/*
Importa RouterModule.

Responsável por disponibilizar:
- routerLink
- router-outlet
- navegação SPA
*/
import { RouterModule } from '@angular/router';

/*
Decorator do Angular.

Define:
- selector
- html
- scss
*/
@Component({

  /*
  Nome da tag HTML do componente.
  */
  selector: 'app-home',

  /*
  Angular moderno standalone.
  */
  standalone: true,

  /*
  IMPORTS DO COMPONENTE

  Em standalone:
  tudo que o HTML usa
  precisa ser importado aqui.
  */
  imports: [
    RouterModule
  ],

  /*
  Arquivo HTML do componente.
  */
  templateUrl: './home.html',

  /*
  Arquivo SCSS do componente.
  */
  styleUrl: './home.scss'

})

/*
Classe principal do componente.
*/
export class HomeComponent implements AfterViewInit, OnDestroy {

  isNavScrolled = false;
  private observer?: IntersectionObserver;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  @HostListener('window:scroll')
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isNavScrolled = window.scrollY > 20;
    }
  }

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

}