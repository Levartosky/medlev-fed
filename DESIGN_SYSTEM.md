# MedLev — Design System & UX Guidelines

> Documento de referência para todas as decisões de UI/UX do projeto.
> Use como contexto em qualquer conversa com IA para manter consistência.

---

## 1. Contexto do Projeto

**Cliente:** MedLev Arquitetura
**Serviço principal:** Medição e Levantamento arquitetônico
**Público-alvo:** Arquitetos, engenheiros, construtoras e pessoa física
**Mercado:** São Paulo e todo o Brasil
**No mercado desde:** 2019

**Perfil do usuário:**
- Técnico e objetivo
- Valoriza clareza e densidade de informação controlada
- Não precisa de "encantamento", mas precisa de **confiança e profissionalismo** à primeira vista
- Toma decisões baseado em precisão e credibilidade

---

## 2. Identidade Visual

### Paleta de Cores

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-primary` | `#ef3d37` | Vermelho da marca — CTAs, destaques, links |
| `--color-primary-hover` | `#ff4a4a` | Estado hover de botões |
| `--color-primary-muted` | `rgba(239,61,55,0.08)` | Fundo de ícones e badges |
| `--color-primary-border` | `rgba(239,61,55,0.25)` | Bordas com acento vermelho |
| `--color-primary-glow` | `rgba(239,61,55,0.28)` | Sombra/glow em destaques |
| `--color-bg` | `#050505` | Fundo principal (tema escuro) |
| `--color-bg-card` | `#0d0d0d` | Fundo dos cards |
| `--color-bg-alt` | `#0f0f0f` | Fundo alternativo de seções |
| `--color-text` | `#ffffff` | Texto principal |
| `--color-text-secondary` | `#d4d4d4` | Subtítulos e descrições |
| `--color-text-muted` | `rgba(255,255,255,0.55)` | Labels, metadados |
| `--color-text-subtle` | `rgba(255,255,255,0.45)` | Detalhes terciários |
| `--color-border` | `rgba(255,255,255,0.05)` | Bordas padrão (tema escuro) |
| `--color-border-light` | `rgba(255,255,255,0.08)` | Bordas sutis (header scrolled) |
| `--color-border-hover` | `rgba(239,61,55,0.40)` | Borda de card em hover |
| `--color-green` | `#19b15f` | WhatsApp e status de sucesso |
| `--color-bg-form` | `#ffffff` | Fundo do formulário de orçamento |
| `--color-text-form` | `#1c1c1c` | Texto no formulário |
| `--color-border-form` | `#d9d9d9` | Borda de inputs no formulário |
| `--color-border-form-focus` | `#ef3d37` | Input em foco no formulário |

> **Regra:** O site principal usa tema **escuro**. O fluxo de orçamento (`/orcamento/*`) usa tema **claro**. Nunca misturar.

---

## 3. Tipografia

### Famílias

| Token | Fonte | Uso |
|-------|-------|-----|
| `--font-primary` | `'Plus Jakarta Sans', Arial, sans-serif` | Todo o UI — títulos, corpo, labels, botões |
| `--font-mono` | `'JetBrains Mono', monospace` | Números, métricas, stats, contadores |

> **Decisão:** Manrope e Inter foram removidas. Plus Jakarta Sans é a fonte única do sistema — geométrica, moderna, excelente em todas as escalas. JetBrains Mono reforça o caráter técnico nos números.

### Escala de Tamanhos

| Token | Valor | Uso típico |
|-------|-------|------------|
| `--text-xs` | `0.75rem` (12px) | Section tags, labels, metadados |
| `--text-sm` | `0.875rem` (14px) | Textos secundários, botões pequenos |
| `--text-base` | `1rem` (16px) | Corpo de texto padrão |
| `--text-lg` | `1.125rem` (18px) | Descrições de destaque |
| `--text-xl` | `1.25rem` (20px) | Títulos de card |
| `--text-2xl` | `1.5rem` (24px) | Subtítulos de seção |
| `--text-3xl` | `2rem` (32px) | Títulos médios |
| `--text-4xl` | `2.625rem` (42px) | Títulos de formulário |
| `--text-5xl` | `3rem` (48px) | Títulos de seção |
| `--text-hero` | `6rem` (96px) | Hero principal |

### Pesos

| Token | Valor |
|-------|-------|
| `--weight-regular` | 400 |
| `--weight-medium` | 500 |
| `--weight-semibold` | 600 |
| `--weight-bold` | 700 |
| `--weight-extrabold` | 800 |

### Line Heights

| Token | Valor | Uso |
|-------|-------|-----|
| `--leading-tight` | `1.05` | Títulos hero — compacto e impactante |
| `--leading-snug` | `1.3` | Títulos de seção |
| `--leading-normal` | `1.6` | Corpo de texto |
| `--leading-relaxed` | `1.8` | Parágrafos descritivos |

---

## 4. Espaçamento

Escala baseada em múltiplos de 4px.

| Token | Valor |
|-------|-------|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 20px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-10` | 40px |
| `--space-12` | 48px |
| `--space-16` | 64px |
| `--space-20` | 80px |
| `--space-24` | 96px |
| `--space-30` | 120px |

---

## 5. Border Radius

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-sm` | 8px | Pequenos elementos |
| `--radius-md` | 12px | Inputs, botões do formulário |
| `--radius-lg` | 20px | Cards médios, banners |
| `--radius-xl` | 24px | Cards principais |
| `--radius-full` | 999px | Botões pílula (site principal) |
| `--radius-circle` | 50% | Logos, avatares |

> **Regra de botões:** Site principal usa `--radius-full` (pílula). Formulário de orçamento usa `--radius-md` (12px). Essa diferença é intencional — contextos visuais distintos.

---

## 6. Sombras & Efeitos

| Token | Valor | Uso |
|-------|-------|-----|
| `--shadow-card` | `0 0 50px rgba(239,61,55,0.12)` | Cards com glow vermelho |
| `--shadow-primary` | `0 8px 32px rgba(239,61,55,0.35)` | Botão primário em hover |

**Glassmorphism** (usado em header scrolled, hero stats, cards sobre imagem):
```css
background: rgba(255, 255, 255, 0.04);
border: 1px solid rgba(255, 255, 255, 0.08);
backdrop-filter: blur(10px);
```

---

## 7. Transições

| Token | Valor | Uso |
|-------|-------|-----|
| `--transition-fast` | `0.2s ease` | Micro-interações (seta, gap) |
| `--transition-base` | `0.3s ease` | Hover padrão |
| `--transition-slow` | `0.8s ease` | Animações reveal on scroll |

---

## 8. Layout & Grid

| Token | Valor |
|-------|-------|
| `--container-max` | 1400px |
| `--container-padding` | 80px (desktop) |
| `--container-padding-mobile` | 20px |

**Breakpoints:**
- Tablet: `1024px` — grids passam de 3 → 2 colunas
- Mobile: `768px` — grids passam para 1 coluna, nav some

---

## 9. Animações

**fadeUp** (hero content — entrada da página):
```scss
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

**Reveal on scroll** (aplicado via IntersectionObserver em todos os componentes):
```scss
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 10. Componentes

### Botão Primário (site)
```scss
background: var(--color-primary);
color: white;
border-radius: var(--radius-full);
padding: 16px 28px;
font-weight: var(--weight-bold);
// hover: translateY(-2px) + shadow-primary
```

### Botão Secundário (site)
```scss
border: 1px solid rgba(255,255,255,0.22);
color: white;
border-radius: var(--radius-full);
backdrop-filter: blur(8px);
// hover: background rgba(255,255,255,0.08) + translateY(-2px)
```

### Botão Primário (formulário)
```scss
background: var(--color-primary);
color: white;
border-radius: var(--radius-md);
height: 52px;
font-weight: var(--weight-semibold);
```

### Section Tag
```scss
color: var(--color-primary);
font-size: var(--text-xs);
font-weight: var(--weight-bold);
text-transform: uppercase;
letter-spacing: 0.2em;
```

### Service Card (site escuro)
```scss
background: var(--color-bg-card);
border: 1px solid var(--color-border);
border-radius: var(--radius-xl);
padding: 40px 36px;
// hover: translateY(-6px) + border-color-hover + shadow
```

### Card Icon
```scss
width: 50px; height: 50px;
border-radius: var(--radius-md);
background: var(--color-primary-muted);
border: 1px solid var(--color-primary-border);
// Usar Material Symbols Outlined, nunca emoji
```

### Input (formulário)
```scss
height: 58px;
border: 1px solid var(--color-border-form);
border-radius: var(--radius-md);
font-size: var(--text-base);
// focus: border-color → var(--color-primary)
```

### Field Error
```scss
color: #e53935;
font-size: var(--text-xs);
margin-top: 4px;
display: block;
```

---

## 11. Ícones

**Biblioteca:** Material Symbols Outlined (Google)
**Como usar:** `<span class="material-symbols-outlined">nome_do_icone</span>`

> **Regra:** Nunca usar emoji como ícone de UI. Sempre usar Material Symbols.

Ícones usados no projeto:
- `square_foot` — Levantamento técnico
- `straighten` — Medição
- `architecture` — Projetos arquitetônicos
- `arrow_forward` — CTAs e links
- `chat` — WhatsApp / suporte
- `upload` — Upload de arquivos
- `picture_as_pdf` — PDF
- `photo_camera` — Mídias

---

## 12. Fluxo de Orçamento (`/orcamento`)

5 etapas + sucesso:

| Rota | Etapa | Campos obrigatórios |
|------|-------|---------------------|
| `/orcamento` | Contato | Nome/Empresa, WhatsApp |
| `/orcamento/imovel` | Imóvel | Metragem total, Endereço |
| `/orcamento/escopo` | Escopo | — (opcional) |
| `/orcamento/entregaveis` | Entregáveis | — (todos opcionais) |
| `/orcamento/finalizacao` | Finalização | Aceitar política de privacidade |
| `/orcamento/sucesso` | Sucesso | — |

**Validação:** Bloqueia avanço se campos obrigatórios estiverem vazios. Exibe `<span class="field-error">` abaixo do campo.

**WhatsApp:** Formatado automaticamente como `(XX) XXXXX-XXXX`, limitado a 11 dígitos.

---

## 13. Regras Gerais de UX

1. **Scroll position:** Toda navegação entre rotas inicia no topo (`scrollPositionRestoration: 'top'`)
2. **Ícones:** Sempre Material Symbols, nunca emoji
3. **Cores hardcoded:** Proibido — usar sempre `var(--token)`
4. **Fontes hardcoded:** Proibido — usar sempre `var(--font-primary)` ou `var(--font-mono)`
5. **Reset duplicado:** Não repetir `* {}` e `body {}` nos componentes — já está em `styles.scss`
6. **Textos de UI:** Específicos e diretos, nada genérico. O público é técnico
7. **Prova social:** Métricas reais sempre que possível (+7 anos, SP + Brasil)

---

## 14. Status do Redesign

| Página | Status |
|--------|--------|
| Home — Hero | ✅ Concluído |
| Home — Serviços | ✅ Concluído |
| Home — Portfólio | ⏳ Pendente |
| Home — Diferenciais | ⏳ Pendente |
| Home — CTA final | ⏳ Pendente |
| Home — Footer | ⏳ Pendente |
| Portfólio | ⏳ Pendente |
| Serviços | ⏳ Pendente |
| Sobre | ⏳ Pendente |
| Contato | ⏳ Pendente |
| Orçamento (formulário) | 🔧 Funcional, refinamento pendente |

---

*Arquivo gerado em: 2026-05-14*
*Branch: feature/medlev-notes-new*
