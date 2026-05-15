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
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MINI_BLUEPRINTS } from '../portfolio/portfolio.blueprints';

interface FeaturedProject {
  title: string;
  catLabel: string;
  loc: string;
  area: string;
  year: string;
  safeMini: SafeHtml;
}

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

  readonly featuredProjects: FeaturedProject[];

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private sanitizer: DomSanitizer,
  ) {
    this.featuredProjects = [
      { title: 'Apartamento 120m²',  catLabel: 'Residencial', loc: 'Santana — São Paulo, SP',  area: '120 m²',   year: '2024', safeMini: sanitizer.bypassSecurityTrustHtml(MINI_BLUEPRINTS[0]) },
      { title: 'Escritório 122m²',   catLabel: 'Comercial',   loc: 'Av. Paulista — São Paulo', area: '122 m²',   year: '2023', safeMini: sanitizer.bypassSecurityTrustHtml(MINI_BLUEPRINTS[1]) },
      { title: 'Beach Tennis Apoio', catLabel: 'Esportivo',   loc: 'Praia Grande — SP',        area: '180 m²',   year: '2024', safeMini: sanitizer.bypassSecurityTrustHtml(MINI_BLUEPRINTS[2]) },
      { title: 'Galpão logístico',   catLabel: 'Industrial',  loc: 'Itupeva — SP',             area: '1.250 m²', year: '2022', safeMini: sanitizer.bypassSecurityTrustHtml(MINI_BLUEPRINTS[3]) },
    ];
  }

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