import { AfterViewInit, Component, HostListener, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class ServicesComponent implements AfterViewInit, OnDestroy {

  isNavScrolled = false;
  openFaqIndex = -1;
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

  toggleFaq(i: number): void {
    this.openFaqIndex = this.openFaqIndex === i ? -1 : i;
  }

  readonly services = [
    {
      number: '01',
      icon: '📐',
      title: 'Levantamento técnico',
      description: 'Levantamento minucioso de imóveis para diagnóstico estrutural, dimensional e fotográfico. Base técnica essencial para qualquer projeto.',
      features: ['Medição com equipamento a laser', 'Documentação fotográfica completa', 'Relatório técnico em PDF'],
      price: 'A partir de R$ 8/m²',
    },
    {
      number: '02',
      icon: '📏',
      title: 'Medição de imóveis',
      description: 'Medições oficiais para registro, averbação ou compra/venda. Precisão milimétrica e laudo certificado por profissional habilitado.',
      features: ['Cálculo de área real construída', 'Laudo técnico ART/RRT incluso', 'Suporte para cartório'],
      price: 'A partir de R$ 1.200',
    },
    {
      number: '03',
      icon: '🏠',
      title: 'Projetos arquitetônicos',
      description: 'Projetos que combinam estética contemporânea, funcionalidade e viabilidade técnica. Do conceito ao executivo.',
      features: ['Estudo preliminar e anteprojeto', 'Projeto executivo completo', 'Renderizações 3D fotorrealistas'],
      price: 'Sob consulta',
    },
    {
      number: '04',
      icon: '📋',
      title: 'Regularização de imóveis',
      description: 'Regularização junto à prefeitura, cartório e órgãos competentes. Habite-se, averbação e adequações pendentes.',
      features: ['Análise de viabilidade legal', 'Protocolo na prefeitura', 'Habite-se e averbação cartorial'],
      price: 'Sob análise',
    },
    {
      number: '05',
      icon: '🔧',
      title: 'Projeto de reforma',
      description: 'Reformas com planejamento técnico completo: do projeto à obra finalizada. Orçamento detalhado e gestão de fornecedores.',
      features: ['Projeto de demolição e construção', 'Orçamento detalhado por etapa', 'Acompanhamento técnico de obra'],
      price: 'Sob consulta',
    },
    {
      number: '06',
      icon: '📄',
      title: 'As Built',
      description: 'Documentação fiel da edificação como construída. Essencial para manutenção, ampliações futuras e regularização.',
      features: ['Plantas, cortes e elevações atualizadas', 'Modelagem BIM sob demanda', 'Memorial descritivo as built'],
      price: 'A partir de R$ 12/m²',
    },
  ];

  readonly processSteps = [
    { number: '01', title: 'Briefing', description: 'Entendimento das necessidades, visita técnica e diagnóstico inicial.' },
    { number: '02', title: 'Proposta', description: 'Escopo detalhado, cronograma e investimento apresentados com clareza.' },
    { number: '03', title: 'Execução', description: 'Desenvolvimento técnico com revisões e aprovação contínua do cliente.' },
    { number: '04', title: 'Entrega', description: 'Documentação completa e suporte pós-entrega até o resultado final.' },
  ];

  readonly differentials = [
    { icon: '⏱️', title: 'Prazos respeitados', description: '97% das entregas no prazo combinado com cronograma rigoroso.' },
    { icon: '🔬', title: 'Tecnologia aplicada', description: 'Laser, BIM, drone e renderização 3D para máxima precisão.' },
    { icon: '👥', title: 'Equipe multidisciplinar', description: 'Arquitetos e engenheiros integrados em cada entrega.' },
    { icon: '💬', title: 'Comunicação clara', description: 'Canal direto e atualizações constantes durante todo o projeto.' },
    { icon: '✅', title: 'Garantia técnica', description: 'ART/RRT registrados e suporte pós-entrega em todos os serviços.' },
    { icon: '⭐', title: 'Visão autoral', description: 'Cada projeto é único, pensado para o contexto e o cliente.' },
  ];

  readonly faqItems = [
    {
      question: 'Quanto tempo leva para receber o orçamento?',
      answer: 'Após o briefing inicial, enviamos o orçamento detalhado em até 3 dias úteis. Para projetos complexos, pode levar até 7 dias.',
    },
    {
      question: 'Vocês atendem em quais regiões?',
      answer: 'Atendemos toda a Grande São Paulo presencialmente. Para outras regiões, atendemos remotamente ou com deslocamento mediante combinação prévia.',
    },
    {
      question: 'Os serviços incluem ART e RRT?',
      answer: 'Sim. Todos os serviços técnicos são acompanhados de ART (CREA) ou RRT (CAU) registrados em nome do profissional responsável.',
    },
    {
      question: 'Vocês acompanham a obra além do projeto?',
      answer: 'Sim, oferecemos acompanhamento de obra como serviço adicional com visitas semanais, gestão de fornecedores e relatórios fotográficos.',
    },
    {
      question: 'Como funciona o pagamento?',
      answer: 'Trabalhamos com pagamento parcelado em até 6x sem juros, geralmente dividido em entrada e parcelas atreladas a marcos de entrega.',
    },
    {
      question: 'Posso contratar apenas o levantamento sem o projeto?',
      answer: 'Sim, todos os serviços podem ser contratados de forma independente, conforme a sua necessidade.',
    },
  ];
}
