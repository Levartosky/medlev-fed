/*
========================================================
PORTFOLIO COMPONENT
========================================================

Página de portfólio da MEDLEV.

Responsabilidades:
- exibir projetos realizados
- filtrar por categoria
- gerar interesse e conversão
- manter consistência visual com a Home

Tecnologias:
- Angular Standalone
- SCSS modular
- Filtros reativos com getter
- Reveal animation via IntersectionObserver

========================================================
*/

/*
Importa Component do Angular e hooks de ciclo de vida.
*/
import { AfterViewInit, Component, HostListener, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, NgFor, NgClass, NgIf } from '@angular/common';

/*
Importa RouterModule para navegação SPA.
*/
import { RouterModule } from '@angular/router';

/*
========================================================
INTERFACE — PROJECT
========================================================

Define o formato de cada projeto do portfólio.
*/
interface Project {
  id: number;
  category: string;
  categoryLabel: string;
  name: string;
  location: string;
  image: string;
}

/*
========================================================
INTERFACE — FILTER
========================================================

Define o formato de cada filtro de categoria.
*/
interface Filter {
  id: string;
  label: string;
  icon: string;
}

/*
========================================================
COMPONENT
========================================================
*/
@Component({

  /*
  Nome da tag HTML.
  */
  selector: 'app-portfolio',

  /*
  Angular moderno standalone.
  */
  standalone: true,

  /*
  Tudo usado no HTML
  precisa ser importado aqui.

  NgFor: para iterar projetos e filtros
  NgClass: para aplicar classe .active nos filtros
  RouterModule: para routerLink
  */
  imports: [
    RouterModule,
    NgFor,
    NgClass,
    NgIf
  ],

  /*
  HTML da página.
  */
  templateUrl: './portfolio.html',

  /*
  SCSS da página.
  */
  styleUrl: './portfolio.scss'

})

/*
========================================================
CLASS
========================================================
*/
export class PortfolioComponent implements AfterViewInit, OnDestroy {

  /*
  Controla se o header ficou scrollado
  para aplicar o efeito glassmorphism.
  */
  isNavScrolled = false;

  /*
  Filtro ativo no momento.
  'todos' é o valor padrão.
  */
  activeFilter = 'todos';

  /*
  Observer para animação reveal nas seções.
  */
  private observer?: IntersectionObserver;

  /*
  ========================================================
  FILTROS DE CATEGORIA
  ========================================================

  Cada filtro tem:
  - id: valor usado para comparação
  - label: texto exibido no botão
  - icon: ícone decorativo
  */
  filters: Filter[] = [
    { id: 'todos',                  label: 'Todos',                  icon: ''  },
    { id: 'residencial',            label: 'Residencial',            icon: '🏠' },
    { id: 'comercial',              label: 'Comercial',              icon: '📋' },
    { id: 'levantamento',           label: 'Levantamento',           icon: '⚙️' },
    { id: 'planta-digital',         label: 'Planta digital',         icon: '💻' },
    { id: 'projeto-arquitetonico',  label: 'Projeto arquitetônico',  icon: '✏️' },
  ];

  /*
  ========================================================
  PROJETOS
  ========================================================

  Lista de projetos do portfólio.

  Cada projeto tem:
  - id: identificador único
  - category: slug da categoria (usado no filtro)
  - categoryLabel: texto exibido no card
  - name: nome do projeto
  - location: localização
  - image: caminho da imagem em public/
  */
  projects: Project[] = [
    {
      id: 1,
      category: 'residencial',
      categoryLabel: 'RESIDENCIAL',
      name: 'Apartamento 120m²',
      location: 'Santana – SP',
      image: '/portfolio-1.jpg'
    },
    {
      id: 2,
      category: 'planta-digital',
      categoryLabel: 'PLANTA DIGITAL',
      name: 'Planta digitalizada',
      location: 'Itaim Bibi – SP',
      image: '/portfolio-2.jpg'
    },
    {
      id: 3,
      category: 'residencial',
      categoryLabel: 'RESIDENCIAL',
      name: 'Escritório 122m²',
      location: 'Avenida Paulista – SP',
      image: '/portfolio-3.jpg'
    },
    {
      id: 4,
      category: 'residencial',
      categoryLabel: 'RESIDENCIAL',
      name: 'Casa térrea',
      location: 'Jaguariúna – SP',
      image: '/portfolio-4.jpg'
    },
    {
      id: 5,
      category: 'residencial',
      categoryLabel: 'RESIDENCIAL',
      name: 'Apartamento duplex',
      location: 'Moema – SP',
      image: '/portfolio-5.jpg'
    },
    {
      id: 6,
      category: 'levantamento',
      categoryLabel: 'LEVANTAMENTO',
      name: 'Levantamento 3D',
      location: 'Condomínio fechado – SP',
      image: '/portfolio-6.jpg'
    },
  ];

  /*
  ========================================================
  GETTER — PROJETOS FILTRADOS
  ========================================================

  Retorna todos os projetos quando o filtro é 'todos',
  ou filtra por categoria quando um filtro está ativo.

  Getter é usado ao invés de array separado para
  que o template sempre reflita o estado atual.
  */
  get filteredProjects(): Project[] {
    if (this.activeFilter === 'todos') return this.projects;
    return this.projects.filter(p => p.category === this.activeFilter);
  }

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  /*
  ========================================================
  MÉTODO — SET FILTER
  ========================================================

  Altera o filtro ativo ao clicar em uma categoria.
  */
  setFilter(filterId: string): void {
    this.activeFilter = filterId;
  }

  /*
  ========================================================
  SCROLL — EFEITO HEADER
  ========================================================

  Detecta scroll para ativar glassmorphism no header.
  */
  @HostListener('window:scroll')
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isNavScrolled = window.scrollY > 20;
    }
  }

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

}
