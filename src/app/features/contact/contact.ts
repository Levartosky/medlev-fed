/*
========================================================
CONTACT COMPONENT
========================================================

Página de contato da MEDLEV.

Responsabilidades:
- exibir canais de atendimento (WhatsApp, E-mail, Instagram, Localização)
- formulário de envio de mensagem
- manter consistência visual com Home e About

A página foi construída utilizando:
- Angular Standalone
- SCSS modular
- Glassmorphism
- UI cinematográfica

========================================================
*/

/*
Importa Component do Angular.
*/
import { AfterViewInit, Component, HostListener, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/*
Importa RouterModule.

Necessário para:
- routerLink
- navegação SPA
*/
import { RouterModule } from '@angular/router';

/*
========================================================
COMPONENT
========================================================
*/
@Component({

  /*
  Nome da tag HTML.
  */
  selector: 'app-contact',

  /*
  Angular moderno standalone.
  */
  standalone: true,

  /*
  Tudo usado no HTML
  precisa ser importado aqui.
  */
  imports: [
    RouterModule
  ],

  /*
  HTML da página.
  */
  templateUrl: './contact.html',

  /*
  SCSS da página.
  */
  styleUrl: './contact.scss'

})

/*
========================================================
CLASS
========================================================
*/
export class ContactComponent implements AfterViewInit, OnDestroy {

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
