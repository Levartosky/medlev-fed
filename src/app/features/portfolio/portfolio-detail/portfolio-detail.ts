/*
========================================================
PORTFOLIO DETAIL COMPONENT
========================================================

Página de detalhe de um projeto do portfólio MEDLEV.

Responsabilidades:
- exibir todas as informações de um projeto específico
- galeria de imagens com slider
- informações técnicas
- CTA de conversão
- footer institucional

Tecnologias:
- Angular Standalone
- ActivatedRoute para ler o param :id da URL
- SCSS modular
- Reveal animation via IntersectionObserver

========================================================
*/

/*
Importa Component e hooks necessários.
*/
import {
  AfterViewInit,
  Component,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID
} from '@angular/core';

import { isPlatformBrowser, NgFor, NgIf, TitleCasePipe } from '@angular/common';

/*
ActivatedRoute: lê os parâmetros da URL (/portfolio/:id).
RouterModule: habilita routerLink no template.
*/
import { ActivatedRoute, RouterModule } from '@angular/router';

/*
========================================================
INTERFACE — PROJECT BADGE
========================================================

Selo de destaque exibido no rodapé do hero.
*/
interface ProjectBadge {
  icon: string;
  title: string;
  subtitle: string;
}

/*
========================================================
INTERFACE — PROJECT FEATURE
========================================================

Card de diferencial exibido na seção "Sobre o projeto".
*/
interface ProjectFeature {
  icon: string;
  title: string;
  desc: string;
}

/*
========================================================
INTERFACE — PROJECT DETAIL
========================================================

Modelo completo de um projeto com todos os dados
necessários para a tela de detalhe.
*/
interface ProjectDetail {
  id: number;
  category: string;
  categoryLabel: string;
  name: string;
  subtitle: string;
  location: string;
  cityState: string;
  description: string;
  heroImage: string;
  type: string;
  area: string;
  year: string;
  delivery: string;
  galleryImages: string[];
  blueprintImage: string;
  thumbnails: string[];
  aboutText: string[];
  badges: ProjectBadge[];
  features: ProjectFeature[];
}

/*
========================================================
COMPONENT
========================================================
*/
@Component({

  selector: 'app-portfolio-detail',

  standalone: true,

  /*
  NgFor: itera listas (galeria, badges, features)
  NgIf: exibe/oculta elementos condicionalmente
  RouterModule: habilita routerLink e routerLinkActive
  */
  imports: [
    RouterModule,
    NgFor,
    NgIf,
    TitleCasePipe
  ],

  templateUrl: './portfolio-detail.html',

  styleUrl: './portfolio-detail.scss'

})

/*
========================================================
CLASS
========================================================
*/
export class PortfolioDetailComponent implements OnInit, AfterViewInit, OnDestroy {

  /*
  Controla o efeito glassmorphism do header ao rolar.
  */
  isNavScrolled = false;

  /*
  Projeto carregado a partir do id da URL.
  Pode ser null se o id não for encontrado.
  */
  project: ProjectDetail | null = null;

  /*
  Índice atual do slide da galeria.
  */
  currentSlide = 0;

  /*
  Observer para animações de entrada.
  */
  private observer?: IntersectionObserver;

  /*
  ========================================================
  DADOS DOS PROJETOS
  ========================================================

  Espelha os projetos do PortfolioComponent com dados
  adicionais para a tela de detalhe.
  No futuro, isso virá de um serviço compartilhado.
  */
  private allProjects: ProjectDetail[] = [
    {
      id: 1,
      category: 'residencial',
      categoryLabel: 'RESIDENCIAL',
      name: 'Apartamento 120m²',
      subtitle: 'Santana – SP',
      location: 'Santana – SP',
      cityState: 'Santana – São Paulo, SP',
      description:
        'Levantamento técnico completo e planta digitalizada de apartamento residencial, entregue com precisão e riqueza de detalhes.',
      heroImage: '/portfolio-1.jpg',
      type: 'Levantamento técnico',
      area: '120 m²',
      year: '2024',
      delivery: 'Planta digitalizada (PDF/DWG)',
      galleryImages: [
        '/portfolio-1.jpg',
        '/portfolio-2.jpg',
        '/portfolio-3.jpg',
      ],
      blueprintImage: '/portfolio-blueprint-1.jpg',
      thumbnails: [
        '/portfolio-1.jpg',
        '/portfolio-2.jpg',
        '/portfolio-3.jpg',
        '/portfolio-4.jpg',
        '/portfolio-5.jpg',
      ],
      aboutText: [
        'Este projeto consistiu no levantamento técnico completo de um apartamento residencial de 120m² localizado no bairro de Santana, São Paulo – SP.',
        'O serviço inclui medição in loco de todos os ambientes, registro fotográfico e desenvolvimento da planta digitalizada com alto nível de precisão.',
        'As informações obtidas são utilizadas como base para futuras reformas, projetos de interiores e aprovações junto a órgãos competentes.',
      ],
      badges: [
        { icon: '📐', title: 'Levantamento', subtitle: 'Completo' },
        { icon: '📄', title: 'Planta digitalizada', subtitle: 'Detalhada' },
        { icon: '🎯', title: 'Precisão', subtitle: 'Milimétrica' },
      ],
      features: [
        {
          icon: '🎯',
          title: 'Precisão',
          desc: 'Medições realizadas com equipamentos de alta precisão.',
        },
        {
          icon: '⚡',
          title: 'Agilidade',
          desc: 'Entrega rápida e organizada para você ganhar tempo.',
        },
        {
          icon: '🛡️',
          title: 'Confiabilidade',
          desc: 'Dados seguros e confiáveis para seu projeto avançar.',
        },
      ],
    },
    {
      id: 2,
      category: 'planta-digital',
      categoryLabel: 'PLANTA DIGITAL',
      name: 'Planta digitalizada',
      subtitle: 'Itaim Bibi – SP',
      location: 'Itaim Bibi – SP',
      cityState: 'Itaim Bibi – São Paulo, SP',
      description:
        'Digitalização de planta arquitetônica com precisão milimétrica e entrega em formatos PDF e DWG para uso imediato.',
      heroImage: '/portfolio-2.jpg',
      type: 'Planta digital',
      area: '85 m²',
      year: '2024',
      delivery: 'Arquivo DWG + PDF',
      galleryImages: [
        '/portfolio-2.jpg',
        '/portfolio-1.jpg',
        '/portfolio-3.jpg',
      ],
      blueprintImage: '/portfolio-blueprint-1.jpg',
      thumbnails: [
        '/portfolio-2.jpg',
        '/portfolio-1.jpg',
        '/portfolio-3.jpg',
        '/portfolio-4.jpg',
        '/portfolio-5.jpg',
      ],
      aboutText: [
        'Projeto de digitalização de planta arquitetônica de apartamento residencial de 85m² no bairro de Itaim Bibi, São Paulo – SP.',
        'O serviço inclui varredura e redesenho da planta original em software CAD profissional, garantindo precisão milimétrica em todos os cômodos.',
        'A planta digitalizada permite reformas, regularizações e projetos de interiores com base técnica sólida e confiável.',
      ],
      badges: [
        { icon: '💻', title: 'Formato', subtitle: 'CAD + PDF' },
        { icon: '📐', title: 'Escala', subtitle: 'Milimétrica' },
        { icon: '⚡', title: 'Entrega', subtitle: 'Rápida' },
      ],
      features: [
        {
          icon: '💻',
          title: 'Digital',
          desc: 'Arquivo editável em AutoCAD para uso profissional.',
        },
        {
          icon: '📐',
          title: 'Precisão',
          desc: 'Redesenho fiel à planta original com margem mínima de erro.',
        },
        {
          icon: '🛡️',
          title: 'Versatilidade',
          desc: 'Compatível com qualquer software de projeto e engenharia.',
        },
      ],
    },
    {
      id: 3,
      category: 'residencial',
      categoryLabel: 'RESIDENCIAL',
      name: 'Escritório 122m²',
      subtitle: 'Avenida Paulista – SP',
      location: 'Avenida Paulista – SP',
      cityState: 'Av. Paulista – São Paulo, SP',
      description:
        'Levantamento técnico completo de espaço comercial de alto padrão na Avenida Paulista, com planta detalhada e relatório técnico.',
      heroImage: '/portfolio-3.jpg',
      type: 'Levantamento técnico',
      area: '122 m²',
      year: '2024',
      delivery: 'Planta + Relatório',
      galleryImages: [
        '/portfolio-3.jpg',
        '/portfolio-1.jpg',
        '/portfolio-2.jpg',
      ],
      blueprintImage: '/portfolio-blueprint-1.jpg',
      thumbnails: [
        '/portfolio-3.jpg',
        '/portfolio-1.jpg',
        '/portfolio-2.jpg',
        '/portfolio-4.jpg',
        '/portfolio-5.jpg',
      ],
      aboutText: [
        'Levantamento técnico de escritório corporativo de 122m² localizado na Avenida Paulista, região central de São Paulo – SP.',
        'Inclui medição detalhada de todos os ambientes, pontos de energia, hidráulica e estrutura, com entrega de planta digitalizada e relatório técnico completo.',
        'O material é utilizado para planejamento de reformas, adequação de layout e aprovação junto a administradoras de edifícios comerciais.',
      ],
      badges: [
        { icon: '📋', title: 'Relatório', subtitle: 'Técnico' },
        { icon: '📐', title: 'Levantamento', subtitle: 'Completo' },
        { icon: '🎯', title: 'Precisão', subtitle: 'Profissional' },
      ],
      features: [
        {
          icon: '📋',
          title: 'Documentação',
          desc: 'Relatório técnico completo com todos os dados do imóvel.',
        },
        {
          icon: '🎯',
          title: 'Precisão',
          desc: 'Medições com equipamentos de última geração.',
        },
        {
          icon: '⚡',
          title: 'Agilidade',
          desc: 'Entrega no prazo acordado sem comprometer a qualidade.',
        },
      ],
    },
    {
      id: 4,
      category: 'residencial',
      categoryLabel: 'RESIDENCIAL',
      name: 'Casa térrea',
      subtitle: 'Jaguariúna – SP',
      location: 'Jaguariúna – SP',
      cityState: 'Jaguariúna – São Paulo, SP',
      description:
        'Levantamento técnico de casa térrea residencial com medição de todos os cômodos e área externa, com entrega de planta completa.',
      heroImage: '/portfolio-4.jpg',
      type: 'Levantamento técnico',
      area: '180 m²',
      year: '2023',
      delivery: 'Planta digitalizada (PDF/DWG)',
      galleryImages: [
        '/portfolio-4.jpg',
        '/portfolio-1.jpg',
        '/portfolio-5.jpg',
      ],
      blueprintImage: '/portfolio-blueprint-1.jpg',
      thumbnails: [
        '/portfolio-4.jpg',
        '/portfolio-1.jpg',
        '/portfolio-2.jpg',
        '/portfolio-5.jpg',
        '/portfolio-6.jpg',
      ],
      aboutText: [
        'Levantamento técnico de casa térrea residencial de 180m² localizada em Jaguariúna, São Paulo – SP.',
        'O projeto inclui medição interna e externa completa, cobertura, área de lazer e jardim, com registro fotográfico detalhado de todos os ambientes.',
        'A planta entregue é utilizada como base para ampliações, reformas e regularização do imóvel junto à prefeitura municipal.',
      ],
      badges: [
        { icon: '🏠', title: 'Área interna', subtitle: '+ Externos' },
        { icon: '📐', title: 'Levantamento', subtitle: 'Completo' },
        { icon: '📄', title: 'Regularização', subtitle: 'Documental' },
      ],
      features: [
        {
          icon: '🏠',
          title: 'Completo',
          desc: 'Medição interna, externa e área de lazer incluídas.',
        },
        {
          icon: '📄',
          title: 'Regularização',
          desc: 'Documentação adequada para aprovação na prefeitura.',
        },
        {
          icon: '🎯',
          title: 'Precisão',
          desc: 'Levantamento com equipamentos de alta precisão.',
        },
      ],
    },
    {
      id: 5,
      category: 'residencial',
      categoryLabel: 'RESIDENCIAL',
      name: 'Apartamento duplex',
      subtitle: 'Moema – SP',
      location: 'Moema – SP',
      cityState: 'Moema – São Paulo, SP',
      description:
        'Levantamento técnico de apartamento duplex de alto padrão em Moema, com mapeamento completo dos dois pavimentos.',
      heroImage: '/portfolio-5.jpg',
      type: 'Levantamento técnico',
      area: '210 m²',
      year: '2024',
      delivery: 'Planta digitalizada (PDF/DWG)',
      galleryImages: [
        '/portfolio-5.jpg',
        '/portfolio-1.jpg',
        '/portfolio-4.jpg',
      ],
      blueprintImage: '/portfolio-blueprint-1.jpg',
      thumbnails: [
        '/portfolio-5.jpg',
        '/portfolio-1.jpg',
        '/portfolio-2.jpg',
        '/portfolio-3.jpg',
        '/portfolio-4.jpg',
      ],
      aboutText: [
        'Levantamento técnico de apartamento duplex de 210m² em Moema, bairro nobre da Zona Sul de São Paulo – SP.',
        'O serviço contemplou os dois pavimentos do imóvel, incluindo escada interna, varanda gourmet e terraço, com medição milimétrica de todos os ambientes.',
        'Projeto desenvolvido para cliente que planejava reforma completa de alto padrão, demandando base técnica precisa para o projeto arquitetônico.',
      ],
      badges: [
        { icon: '🏢', title: 'Duplex', subtitle: '2 Pavimentos' },
        { icon: '📐', title: 'Levantamento', subtitle: 'Milimétrico' },
        { icon: '⭐', title: 'Alto', subtitle: 'Padrão' },
      ],
      features: [
        {
          icon: '🏢',
          title: 'Multi-nível',
          desc: 'Levantamento completo dos dois pavimentos do imóvel.',
        },
        {
          icon: '⭐',
          title: 'Alto padrão',
          desc: 'Atendimento personalizado para imóveis de luxo.',
        },
        {
          icon: '🎯',
          title: 'Precisão',
          desc: 'Medições com margem de erro mínima para reformas exigentes.',
        },
      ],
    },
    {
      id: 6,
      category: 'levantamento',
      categoryLabel: 'LEVANTAMENTO',
      name: 'Levantamento 3D',
      subtitle: 'Condomínio fechado – SP',
      location: 'Condomínio fechado – SP',
      cityState: 'Condomínio – São Paulo, SP',
      description:
        'Levantamento tridimensional de residência em condomínio fechado com modelagem 3D completa e entrega de arquivos para projeto arquitetônico.',
      heroImage: '/portfolio-6.jpg',
      type: 'Levantamento 3D',
      area: '320 m²',
      year: '2024',
      delivery: 'Modelo 3D + Planta (DWG)',
      galleryImages: [
        '/portfolio-6.jpg',
        '/portfolio-1.jpg',
        '/portfolio-3.jpg',
      ],
      blueprintImage: '/portfolio-blueprint-1.jpg',
      thumbnails: [
        '/portfolio-6.jpg',
        '/portfolio-1.jpg',
        '/portfolio-2.jpg',
        '/portfolio-3.jpg',
        '/portfolio-4.jpg',
      ],
      aboutText: [
        'Levantamento tridimensional de residência de 320m² em condomínio fechado na Grande São Paulo – SP.',
        'O serviço inclui escaneamento 3D com equipamento de última geração, gerando nuvem de pontos de alta densidade e modelo BIM do imóvel.',
        'Entregue modelo 3D completo, plantas baixas, cortes e elevações em formato DWG, prontos para uso em projeto arquitetônico e engenharia.',
      ],
      badges: [
        { icon: '🔷', title: 'Modelo', subtitle: '3D Completo' },
        { icon: '📐', title: 'Escaneamento', subtitle: 'Avançado' },
        { icon: '📁', title: 'Arquivo', subtitle: 'BIM/DWG' },
      ],
      features: [
        {
          icon: '🔷',
          title: '3D Real',
          desc: 'Modelo tridimensional fiel ao imóvel com nuvem de pontos.',
        },
        {
          icon: '📁',
          title: 'BIM Ready',
          desc: 'Arquivo compatível com software de modelagem BIM.',
        },
        {
          icon: '⚡',
          title: 'Eficiência',
          desc: 'Reduz retrabalho e acelera o desenvolvimento do projeto.',
        },
      ],
    },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private route: ActivatedRoute
  ) {}

  /*
  ========================================================
  LIFECYCLE — INIT
  ========================================================

  Lê o param :id da URL e carrega o projeto correspondente.
  */
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? parseInt(idParam, 10) : null;
    this.project = this.allProjects.find(p => p.id === id) ?? this.allProjects[0];
  }

  /*
  ========================================================
  LIFECYCLE — REVEAL ANIMATION
  ========================================================
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
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach(el => this.observer!.observe(el));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  /*
  ========================================================
  SCROLL — EFEITO HEADER
  ========================================================
  */
  @HostListener('window:scroll')
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isNavScrolled = window.scrollY > 20;
    }
  }

  /*
  ========================================================
  GALERIA — NAVEGAÇÃO DO SLIDER
  ========================================================
  */
  prevSlide(): void {
    if (!this.project) return;
    const total = this.project.galleryImages.length;
    this.currentSlide = (this.currentSlide - 1 + total) % total;
  }

  nextSlide(): void {
    if (!this.project) return;
    const total = this.project.galleryImages.length;
    this.currentSlide = (this.currentSlide + 1) % total;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

}
