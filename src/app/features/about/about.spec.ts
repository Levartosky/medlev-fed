import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

          <span>
            ARQUITETURA
          </span>

        </div>

      </div>

      <!-- MENU -->
      <nav class="about-header__nav">

        <a routerLink="/">
          Início
        </a>

        <a>
          Portfólio
        </a>

        <a>
          Serviços
        </a>

        <a class="active">
          Sobre
        </a>

        <a>
          Contato
        </a>

      </nav>

      <!-- CTA -->
      <button class="header-button">

        Solicitar orçamento →

      </button>

    </header>

    <!--
    ========================================================
    HERO CONTENT
    ========================================================
    -->
    <div class="about-hero__content">

      <!--
      ====================================================
      TEXTO
      ====================================================
      -->
      <div class="about-hero__left">

        <span class="about-label">
          SOBRE A MEDLEV
        </span>

        <h2>

          Criamos espaços
          que unem

          <span>
            estética,
            precisão
          </span>

          e experiência.

        </h2>

        <!-- Linha -->
        <div class="about-divider"></div>

        <p>

          Acreditamos que arquitetura
          vai além da planta
          ou execução.

        </p>

        <p>

          Projetamos ambientes capazes
          de gerar sensações,
          conforto e identidade.

        </p>

      </div>

      <!--
      ====================================================
      CARD PREMIUM
      ====================================================
      -->
      <div class="about-hero__right">

        <div class="floating-card">

          <!-- Glow -->
          <div class="floating-card__glow"></div>

          <!-- Ícone -->
          <div class="floating-card__icon">

            <span class="material-symbols-outlined">
              apartment
            </span>

          </div>

          <!-- Texto -->
          <div class="floating-card__content">

            <h3>
              Arquitetura autoral
            </h3>

            <p>

              Atenção a cada detalhe
              e foco em resultados.

            </p>

          </div>

        </div>

      </div>

    </div>

  </section>

  <!--
  ========================================================
  FILOSOFIA
  ========================================================
  -->
  <section class="about-philosophy">

    <span class="section-label">
      NOSSA FILOSOFIA
    </span>

    <h3>

      Cada detalhe

      <span>
        importa.
      </span>

    </h3>

    <!-- GRID -->
    <div class="philosophy-grid">

      <!-- CARD -->
      <div class="philosophy-card">

        <span class="material-symbols-outlined">
          center_focus_strong
        </span>

        <h4>
          Precisão técnica
        </h4>

        <p>

          Levantamentos e medições
          com máxima confiabilidade.

        </p>

      </div>

      <!-- CARD -->
      <div class="philosophy-card">

        <span class="material-symbols-outlined">
          deployed_code
        </span>

        <h4>
          Visão contemporânea
        </h4>

        <p>

          Soluções modernas
          e funcionais.

        </p>

      </div>

      <!-- CARD -->
      <div class="philosophy-card">

        <span class="material-symbols-outlined">
          groups
        </span>

        <h4>
          Atendimento próximo
        </h4>

        <p>

          Acompanhamento
          em todas as etapas.

        </p>

      </div>

    </div>

  </section>

  <!--
  ========================================================
  MÉTRICAS
  ========================================================
  -->
  <section class="about-metrics">

    <!-- CARD -->
    <div class="metric-card">

      <span class="material-symbols-outlined">
        apartment
      </span>

      <h3>
        +120
      </h3>

      <p>
        Projetos entregues
      </p>

    </div>

    <!-- CARD -->
    <div class="metric-card">

      <span class="material-symbols-outlined">
        calendar_month
      </span>

      <h3>
        +8
      </h3>

      <p>
        Anos de experiência
      </p>

    </div>

    <!-- CARD -->
    <div class="metric-card">

      <span class="material-symbols-outlined">
        groups
      </span>

      <h3>
        100%
      </h3>

      <p>
        Projetos personalizados
      </p>

    </div>

    <!-- CARD -->
    <div class="metric-card">

      <span class="material-symbols-outlined">
        location_on
      </span>

      <h3>
        Atuação
      </h3>

      <p>
        Presencial e remota
      </p>

    </div>

  </section>

  <!--
  ========================================================
  DIFERENCIAL
  ========================================================
  -->
  <section class="about-differential">

    <!-- ESQUERDA -->
    <div class="about-differential__left">

      <img
        src="/home-hero.jpg"
        alt="Projeto MedLev"
      >

    </div>

    <!-- DIREITA -->
    <div class="about-differential__right">

      <span class="section-label">
        NOSSO DIFERENCIAL
      </span>

      <h3>

        Não entregamos
        apenas desenhos.

      </h3>

      <h4>

        Entregamos clareza,
        planejamento
        e confiança
        para execução.

      </h4>

      <!-- LINHA -->
      <div class="about-divider"></div>

      <!-- LISTA -->
      <div class="differential-list">

        <div class="differential-item">

          <span class="material-symbols-outlined">
            check_circle
          </span>

          <p>
            Levantamento técnico detalhado
          </p>

        </div>

        <div class="differential-item">

          <span class="material-symbols-outlined">
            check_circle
          </span>

          <p>
            Compatibilização inteligente
          </p>

        </div>

        <div class="differential-item">

          <span class="material-symbols-outlined">
            check_circle
          </span>

          <p>
            Escopo completo
            e organizado
          </p>

        </div>

        <div class="differential-item">

          <span class="material-symbols-outlined">
            check_circle
          </span>

          <p>
            Atendimento próximo
          </p>

        </div>

      </div>

    </div>

  </section>

  <!--
  ========================================================
  FOOTER CTA
  ========================================================
  -->
  <section class="about-footer">

    <!-- ESQUERDA -->
    <div class="about-footer__left">

      <h3>

        Arquitetura pensada
        para quem valoriza

        <span>
          experiência.
        </span>

      </h3>

      <p>

        Mais do que projetos,
        criamos ambientes
        que transformam
        a forma de viver.

      </p>

    </div>

    <!-- CENTRO -->
    <div class="about-footer__center">

      <div class="footer-mini-card">

        <span class="material-symbols-outlined">
          visibility
        </span>

        <h4>
          Visão
        </h4>

      </div>

      <div class="footer-mini-card">

        <span class="material-symbols-outlined">
          deployed_code
        </span>

        <h4>
          Propósito
        </h4>

      </div>

      <div class="footer-mini-card">

        <span class="material-symbols-outlined">
          favorite
        </span>

        <h4>
          Experiência
        </h4>

      </div>

    </div>

    <!-- DIREITA -->
    <div class="about-footer__right">

      <h3>

        Vamos transformar
        sua ideia em um

        <span>
          projeto real.
        </span>

      </h3>

      <div class="footer-actions">

        <button class="primary-button">

          Solicitar orçamento →

        </button>

        <button class="secondary-button">

          <span class="material-symbols-outlined">
            chat
          </span>

          Falar no WhatsApp

        </button>

      </div>

    </div>

  </section>

</div>