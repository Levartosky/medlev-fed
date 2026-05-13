import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BLUEPRINTS, MINI_BLUEPRINTS } from './portfolio.blueprints';

// ─── Types ────────────────────────────────────────────────────────────────────

export type ProjectCategory =
  | 'residencial'
  | 'comercial'
  | 'esportivo'
  | 'industrial'
  | 'institucional';

export interface Project {
  id: number;
  cat: ProjectCategory;
  catLabel: string;
  title: string;
  loc: string;
  area: string;
  year: string;
  service: string;
  delivery: string;
  pdfUrl?: string;
}

export interface FilterOption {
  key: ProjectCategory | 'all';
  label: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class PortfolioComponent implements AfterViewInit, OnDestroy {

  @ViewChildren('thumbRef') thumbRefs!: QueryList<ElementRef<HTMLButtonElement>>;

  // ── State ──────────────────────────────────────────────────────────────────

  isNavScrolled = false;
  currentIndex = 0;
  activeFilter: ProjectCategory | 'all' = 'all';
  autoplayActive = false;
  progressFillWidth = 0;

  // ── Constants ──────────────────────────────────────────────────────────────

  private readonly AUTOPLAY_INTERVAL = 5000;
  private readonly IDLE_THRESHOLD = 5000;

  // ── Timers ─────────────────────────────────────────────────────────────────

  private autoplayTimer: ReturnType<typeof setTimeout> | null = null;
  private idleTimer: ReturnType<typeof setTimeout> | null = null;
  private progressInterval: ReturnType<typeof setInterval> | null = null;

  // ── Data ───────────────────────────────────────────────────────────────────

  readonly projects: Project[] = [
    { id: 1,  cat: 'residencial',   catLabel: 'Residencial',   title: 'Apartamento 120m²',      loc: 'Santana — São Paulo, SP',          area: '120 m²',   year: '2024', service: 'Levantamento técnico',  delivery: 'PDF + DWG' },
    { id: 2,  cat: 'residencial',   catLabel: 'Residencial',   title: 'Casa térrea Aldeota',     loc: 'Alphaville — Barueri, SP',         area: '285 m²',   year: '2024', service: 'Projeto arquitetônico', delivery: 'PDF + DWG + 3D' },
    { id: 3,  cat: 'comercial',     catLabel: 'Comercial',     title: 'Escritório 122m²',        loc: 'Av. Paulista — São Paulo, SP',     area: '122 m²',   year: '2023', service: 'Planta digitalizada',   delivery: 'PDF + DWG' },
    { id: 4,  cat: 'esportivo',     catLabel: 'Esportivo',     title: 'Beach tennis Apoio',      loc: 'Praia Grande — SP',                area: '180 m²',   year: '2024', service: 'Projeto arquitetônico', delivery: 'PDF + DWG' },
    { id: 5,  cat: 'residencial',   catLabel: 'Residencial',   title: 'Apartamento duplex',      loc: 'Itaim — São Paulo, SP',            area: '210 m²',   year: '2023', service: 'As Built',              delivery: 'PDF + DWG + BIM' },
    { id: 6,  cat: 'industrial',    catLabel: 'Industrial',    title: 'Bloco ADM Fábrica',       loc: 'Cumbica — Guarulhos, SP',          area: '420 m²',   year: '2023', service: 'Levantamento 3D',       delivery: 'PDF + DWG' },
    { id: 7,  cat: 'industrial',    catLabel: 'Industrial',    title: 'Bloco Central — Galpão',  loc: 'Cumbica — Guarulhos, SP',          area: '780 m²',   year: '2023', service: 'Planta digitalizada',   delivery: 'PDF + DWG' },
    { id: 8,  cat: 'comercial',     catLabel: 'Comercial',     title: 'Cachaçaria Alambique',    loc: 'Embu das Artes, SP',               area: '95 m²',    year: '2024', service: 'Projeto arquitetônico', delivery: 'PDF + DWG' },
    { id: 9,  cat: 'esportivo',     catLabel: 'Esportivo',     title: 'Bloco Recreação',         loc: 'Condomínio Reserva — Atibaia',    area: '310 m²',   year: '2024', service: 'Projeto arquitetônico', delivery: 'PDF + DWG + 3D' },
    { id: 10, cat: 'residencial',   catLabel: 'Residencial',   title: 'Casa de gerador',         loc: 'Fazenda Boa Vista — Porto Feliz', area: '45 m²',    year: '2024', service: 'As Built',              delivery: 'PDF + DWG' },
    { id: 11, cat: 'residencial',   catLabel: 'Residencial',   title: 'Casa Dona Angela',        loc: 'Jundiaí — SP',                    area: '165 m²',   year: '2024', service: 'Regularização',         delivery: 'PDF + Habite-se' },
    { id: 12, cat: 'residencial',   catLabel: 'Residencial',   title: 'Casa Sr. Hélio',          loc: 'Indaiatuba — SP',                 area: '198 m²',   year: '2024', service: 'Projeto de reforma',    delivery: 'PDF + DWG' },
    { id: 13, cat: 'institucional', catLabel: 'Institucional', title: 'Capela São Francisco',    loc: 'Bragança Paulista, SP',           area: '140 m²',   year: '2023', service: 'Levantamento técnico',  delivery: 'PDF + DWG' },
    { id: 14, cat: 'comercial',     catLabel: 'Comercial',     title: 'Loja conceito Jardins',   loc: 'Jardins — São Paulo, SP',         area: '88 m²',    year: '2023', service: 'Projeto arquitetônico', delivery: 'PDF + DWG + 3D' },
    { id: 15, cat: 'residencial',   catLabel: 'Residencial',   title: 'Cobertura Vila Mariana',  loc: 'Vila Mariana — São Paulo, SP',    area: '245 m²',   year: '2022', service: 'Projeto de reforma',    delivery: 'PDF + DWG' },
    { id: 16, cat: 'industrial',    catLabel: 'Industrial',    title: 'Galpão logístico',        loc: 'Itupeva — SP',                    area: '1.250 m²', year: '2022', service: 'Planta digitalizada',   delivery: 'PDF + DWG' },
    { id: 17, cat: 'institucional', catLabel: 'Institucional', title: 'Centro comunitário',      loc: 'Embu-Guaçu, SP',                 area: '320 m²',   year: '2023', service: 'Projeto arquitetônico', delivery: 'PDF + DWG' },
    { id: 18, cat: 'comercial',     catLabel: 'Comercial',     title: 'Restaurante terraço',     loc: 'Pinheiros — São Paulo, SP',       area: '175 m²',   year: '2024', service: 'Projeto arquitetônico', delivery: 'PDF + DWG + 3D' },
  ];

  readonly filters: FilterOption[] = [
    { key: 'all',           label: 'Todos' },
    { key: 'residencial',   label: 'Residencial' },
    { key: 'comercial',     label: 'Comercial' },
    { key: 'esportivo',     label: 'Esportivo' },
    { key: 'industrial',    label: 'Industrial' },
    { key: 'institucional', label: 'Institucional' },
  ];

  // ── Constructor ────────────────────────────────────────────────────────────

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly sanitizer: DomSanitizer,
  ) {}

  // ── Getters ────────────────────────────────────────────────────────────────

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') return this.projects;
    return this.projects.filter(p => p.cat === this.activeFilter);
  }

  // ── Navigation ─────────────────────────────────────────────────────────────

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.filteredProjects.length;
    this.scrollActiveThumbIntoView();
  }

  prev(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.filteredProjects.length) %
      this.filteredProjects.length;
    this.scrollActiveThumbIntoView();
  }

  goTo(index: number): void {
    this.currentIndex = index;
    this.scrollActiveThumbIntoView();
  }

  // ── Filters ────────────────────────────────────────────────────────────────

  applyFilter(key: ProjectCategory | 'all'): void {
    this.activeFilter = key;
    this.currentIndex = 0;
  }

  getFilterCount(key: ProjectCategory | 'all'): number {
    if (key === 'all') return this.projects.length;
    return this.projects.filter(p => p.cat === key).length;
  }

  // ── Autoplay ───────────────────────────────────────────────────────────────

  toggleAutoplay(): void {
    if (this.autoplayActive) {
      this.stopAutoplay();
    } else {
      this.startAutoplay();
    }
  }

  onUserInteraction(): void {
    this.stopAutoplay();
    if (!isPlatformBrowser(this.platformId)) return;
    clearTimeout(this.idleTimer!);
    this.idleTimer = setTimeout(
      () => this.startAutoplay(),
      this.IDLE_THRESHOLD,
    );
  }

  private startAutoplay(): void {
    if (this.autoplayActive) return;
    this.autoplayActive = true;
    this.scheduleNextAutoplay();
  }

  private stopAutoplay(): void {
    this.autoplayActive = false;
    this.clearAllTimers();
    this.resetProgress();
  }

  private scheduleNextAutoplay(): void {
    this.resetProgress();
    this.startProgressInterval();
    this.autoplayTimer = setTimeout(() => {
      this.next();
      if (this.autoplayActive) this.scheduleNextAutoplay();
    }, this.AUTOPLAY_INTERVAL);
  }

  private startProgressInterval(): void {
    const tickMs = 100;
    const totalTicks = this.AUTOPLAY_INTERVAL / tickMs;
    let tick = 0;
    this.progressInterval = setInterval(() => {
      tick++;
      this.progressFillWidth = (tick / totalTicks) * 100;
    }, tickMs);
  }

  private resetProgress(): void {
    if (this.progressInterval !== null) {
      clearInterval(this.progressInterval);
      this.progressInterval = null;
    }
    this.progressFillWidth = 0;
  }

  private clearAllTimers(): void {
    if (this.autoplayTimer !== null) {
      clearTimeout(this.autoplayTimer);
      this.autoplayTimer = null;
    }
    if (this.idleTimer !== null) {
      clearTimeout(this.idleTimer);
      this.idleTimer = null;
    }
    this.resetProgress();
  }

  // ── Blueprints ─────────────────────────────────────────────────────────────

  getBlueprint(projectId: number): string {
    return BLUEPRINTS[(projectId - 1) % BLUEPRINTS.length];
  }

  getMiniBlueprint(projectId: number): string {
    return MINI_BLUEPRINTS[(projectId - 1) % MINI_BLUEPRINTS.length];
  }

  getSafeBlueprint(projectId: number): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.getBlueprint(projectId));
  }

  getSafeMiniBlueprint(projectId: number): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(
      this.getMiniBlueprint(projectId),
    );
  }

  // ── Helpers ────────────────────────────────────────────────────────────────

  getCurrentProject(): Project | undefined {
    return this.filteredProjects[this.currentIndex];
  }

  pad(n: number): string {
    return String(n).padStart(2, '0');
  }

  // ── Scroll ─────────────────────────────────────────────────────────────────

  private scrollActiveThumbIntoView(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    requestAnimationFrame(() => {
      const thumbs = this.thumbRefs?.toArray();
      if (thumbs?.[this.currentIndex]) {
        thumbs[this.currentIndex].nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }
    });
  }

  // ── Lifecycle ──────────────────────────────────────────────────────────────

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.idleTimer = setTimeout(
      () => this.startAutoplay(),
      this.IDLE_THRESHOLD,
    );
  }

  ngOnDestroy(): void {
    this.clearAllTimers();
  }

  // ── Host Listeners ─────────────────────────────────────────────────────────

  @HostListener('window:scroll')
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isNavScrolled = window.scrollY > 20;
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(e: KeyboardEvent): void {
    if (e.key === 'ArrowRight') { this.next();  this.onUserInteraction(); }
    if (e.key === 'ArrowLeft')  { this.prev();  this.onUserInteraction(); }
  }

  @HostListener('window:mousemove')
  @HostListener('window:touchstart')
  onActivity(): void {
    if (this.autoplayActive) return;
    if (!isPlatformBrowser(this.platformId)) return;
    clearTimeout(this.idleTimer!);
    this.idleTimer = setTimeout(
      () => this.startAutoplay(),
      this.IDLE_THRESHOLD,
    );
  }
}
