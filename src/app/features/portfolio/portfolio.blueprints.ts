// 6 main blueprint SVGs (stage, 800×500) + 6 mini SVGs (thumbs, 140×90)
// Cycling: blueprint index = (project.id - 1) % 6
// 0=Apartamento  1=Comercial  2=Esportivo  3=Industrial  4=Institucional  5=Casa

export const BLUEPRINTS: readonly string[] = [

// ─── 0: Apartamento tipo 2 quartos ───────────────────────────────────────────
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" aria-hidden="true" style="width:100%;height:100%;display:block">
  <defs>
    <pattern id="bp0g" width="32" height="32" patternUnits="userSpaceOnUse">
      <circle cx="16" cy="16" r="0.9" fill="rgba(96,165,250,0.16)"/>
    </pattern>
  </defs>
  <rect width="800" height="500" fill="#050e1e"/>
  <rect width="800" height="500" fill="url(#bp0g)"/>
  <rect x="90" y="55" width="620" height="390" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <line x1="90" y1="130" x2="710" y2="130" stroke="#1e40af" stroke-width="2"/>
  <line x1="400" y1="130" x2="400" y2="445" stroke="#1e40af" stroke-width="2"/>
  <line x1="555" y1="130" x2="555" y2="325" stroke="#1e40af" stroke-width="2"/>
  <line x1="90" y1="325" x2="710" y2="325" stroke="#1e40af" stroke-width="2"/>
  <line x1="290" y1="325" x2="290" y2="445" stroke="#1e3a8a" stroke-width="1.5"/>
  <line x1="500" y1="325" x2="500" y2="445" stroke="#1e3a8a" stroke-width="1.5"/>
  <line x1="600" y1="325" x2="600" y2="445" stroke="#1e3a8a" stroke-width="1.5"/>
  <text x="400" y="100" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="#93c5fd">VARANDA — 16,0 m²</text>
  <text x="245" y="225" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="#93c5fd">SALA / JANTAR</text>
  <text x="245" y="241" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#6ea8fe">36,0 m²</text>
  <text x="478" y="221" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#93c5fd">QUARTO 1</text>
  <text x="478" y="235" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#6ea8fe">16,0 m²</text>
  <text x="634" y="221" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#93c5fd">QUARTO 2</text>
  <text x="634" y="235" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#6ea8fe">14,0 m²</text>
  <text x="190" y="388" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#93c5fd">COZINHA</text>
  <text x="190" y="403" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#6ea8fe">14,0 m²</text>
  <text x="345" y="388" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">ÁR. SERV.</text>
  <text x="345" y="403" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#6ea8fe">8,0 m²</text>
  <text x="450" y="388" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">BWC 1</text>
  <text x="550" y="388" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">SUÍTE</text>
  <text x="655" y="388" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">BWC 2</text>
  <path d="M400,350 A22,22 0 0,1 422,328" fill="none" stroke="#3b82f6" stroke-width="1" stroke-dasharray="3,2"/>
  <path d="M500,350 A20,20 0 0,0 480,330" fill="none" stroke="#3b82f6" stroke-width="1" stroke-dasharray="3,2"/>
  <path d="M90,280 A20,20 0 0,0 110,260" fill="none" stroke="#3b82f6" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="90" y1="42" x2="710" y2="42" stroke="#60a5fa" stroke-width="0.8" stroke-dasharray="4,3" opacity="0.5"/>
  <line x1="90" y1="38" x2="90" y2="46" stroke="#60a5fa" stroke-width="0.8" opacity="0.5"/>
  <line x1="710" y1="38" x2="710" y2="46" stroke="#60a5fa" stroke-width="0.8" opacity="0.5"/>
  <text x="400" y="38" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="8" fill="#60a5fa" opacity="0.7">15,50 m</text>
  <line x1="76" y1="55" x2="76" y2="445" stroke="#60a5fa" stroke-width="0.8" stroke-dasharray="4,3" opacity="0.5"/>
  <text x="30" y="250" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="8" fill="#60a5fa" opacity="0.7" transform="rotate(-90,30,250)">9,75 m</text>
  <rect x="90" y="460" width="220" height="22" rx="3" fill="rgba(29,78,216,0.25)" stroke="#1d4ed8" stroke-width="0.8"/>
  <text x="200" y="475" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">APT. TIPO — PLANTA BAIXA</text>
  <text x="710" y="487" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="8" fill="#60a5fa" opacity="0.6">ESC. 1:75 | MEDLEV ARQUITETURA</text>
  <g transform="translate(748,472)">
    <circle r="13" fill="rgba(29,78,216,0.2)" stroke="#1d4ed8" stroke-width="1"/>
    <polygon points="0,-11 -3.5,-3 3.5,-3" fill="#3b82f6"/>
    <text y="9" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">N</text>
  </g>
</svg>`,

// ─── 1: Escritório corporativo ────────────────────────────────────────────────
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" aria-hidden="true" style="width:100%;height:100%;display:block">
  <defs>
    <pattern id="bp1g" width="32" height="32" patternUnits="userSpaceOnUse">
      <circle cx="16" cy="16" r="0.9" fill="rgba(96,165,250,0.16)"/>
    </pattern>
  </defs>
  <rect width="800" height="500" fill="#050e1e"/>
  <rect width="800" height="500" fill="url(#bp1g)"/>
  <rect x="80" y="60" width="640" height="380" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <line x1="200" y1="60" x2="200" y2="440" stroke="#1e40af" stroke-width="2"/>
  <line x1="600" y1="60" x2="600" y2="340" stroke="#1e40af" stroke-width="2"/>
  <line x1="80" y1="220" x2="200" y2="220" stroke="#1e3a8a" stroke-width="1.5"/>
  <line x1="80" y1="340" x2="720" y2="340" stroke="#1e40af" stroke-width="2"/>
  <line x1="340" y1="340" x2="340" y2="440" stroke="#1e3a8a" stroke-width="1.5"/>
  <line x1="500" y1="340" x2="500" y2="440" stroke="#1e3a8a" stroke-width="1.5"/>
  <line x1="600" y1="220" x2="720" y2="220" stroke="#1e3a8a" stroke-width="1.5"/>
  <rect x="220" y="90" width="70" height="60" fill="rgba(29,78,216,0.15)" stroke="#1e40af" stroke-width="1"/>
  <rect x="310" y="90" width="70" height="60" fill="rgba(29,78,216,0.15)" stroke="#1e40af" stroke-width="1"/>
  <rect x="400" y="90" width="70" height="60" fill="rgba(29,78,216,0.15)" stroke="#1e40af" stroke-width="1"/>
  <rect x="490" y="90" width="70" height="60" fill="rgba(29,78,216,0.15)" stroke="#1e40af" stroke-width="1"/>
  <rect x="220" y="175" width="70" height="60" fill="rgba(29,78,216,0.15)" stroke="#1e40af" stroke-width="1"/>
  <rect x="310" y="175" width="70" height="60" fill="rgba(29,78,216,0.15)" stroke="#1e40af" stroke-width="1"/>
  <rect x="400" y="175" width="70" height="60" fill="rgba(29,78,216,0.15)" stroke="#1e40af" stroke-width="1"/>
  <rect x="490" y="175" width="70" height="60" fill="rgba(29,78,216,0.15)" stroke="#1e40af" stroke-width="1"/>
  <text x="140" y="148" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#93c5fd">RECEPÇÃO</text>
  <text x="140" y="162" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#6ea8fe">12,0 m²</text>
  <text x="140" y="330" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">SALA CONF.</text>
  <text x="140" y="343" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#6ea8fe">18,0 m²</text>
  <text x="400" y="155" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="#93c5fd">OPEN OFFICE</text>
  <text x="400" y="170" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#6ea8fe">60,0 m²</text>
  <text x="660" y="148" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#93c5fd">SALA REUN.</text>
  <text x="660" y="162" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#6ea8fe">20,0 m²</text>
  <text x="660" y="288" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">DEPÓSITO</text>
  <text x="210" y="395" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">CORREDOR</text>
  <text x="420" y="395" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">BWC MASC.</text>
  <text x="600" y="395" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">BWC FEM.</text>
  <path d="M200,300 A25,25 0 0,0 225,275" fill="none" stroke="#3b82f6" stroke-width="1" stroke-dasharray="3,2"/>
  <path d="M340,370 A22,22 0 0,1 362,348" fill="none" stroke="#3b82f6" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="80" y1="46" x2="720" y2="46" stroke="#60a5fa" stroke-width="0.8" stroke-dasharray="4,3" opacity="0.5"/>
  <text x="400" y="42" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="8" fill="#60a5fa" opacity="0.7">16,00 m</text>
  <line x1="66" y1="60" x2="66" y2="440" stroke="#60a5fa" stroke-width="0.8" stroke-dasharray="4,3" opacity="0.5"/>
  <text x="22" y="250" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="8" fill="#60a5fa" opacity="0.7" transform="rotate(-90,22,250)">9,50 m</text>
  <rect x="80" y="456" width="250" height="22" rx="3" fill="rgba(29,78,216,0.25)" stroke="#1d4ed8" stroke-width="0.8"/>
  <text x="205" y="471" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">ESCRITÓRIO — PLANTA BAIXA</text>
  <text x="720" y="487" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="8" fill="#60a5fa" opacity="0.6">ESC. 1:75 | MEDLEV ARQUITETURA</text>
  <g transform="translate(748,472)">
    <circle r="13" fill="rgba(29,78,216,0.2)" stroke="#1d4ed8" stroke-width="1"/>
    <polygon points="0,-11 -3.5,-3 3.5,-3" fill="#3b82f6"/>
    <text y="9" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">N</text>
  </g>
</svg>`,

// ─── 2: Beach Tennis / Esportivo ─────────────────────────────────────────────
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" aria-hidden="true" style="width:100%;height:100%;display:block">
  <defs>
    <pattern id="bp2g" width="32" height="32" patternUnits="userSpaceOnUse">
      <circle cx="16" cy="16" r="0.9" fill="rgba(96,165,250,0.16)"/>
    </pattern>
  </defs>
  <rect width="800" height="500" fill="#050e1e"/>
  <rect width="800" height="500" fill="url(#bp2g)"/>
  <rect x="60" y="50" width="680" height="400" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <line x1="60" y1="320" x2="740" y2="320" stroke="#1e40af" stroke-width="2"/>
  <line x1="200" y1="50" x2="200" y2="320" stroke="#1e40af" stroke-width="2"/>
  <line x1="600" y1="50" x2="600" y2="320" stroke="#1e40af" stroke-width="2"/>
  <rect x="200" y="50" width="400" height="270" fill="rgba(20,50,120,0.2)" stroke="none"/>
  <rect x="215" y="65" width="370" height="240" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
  <line x1="400" y1="65" x2="400" y2="305" stroke="#3b82f6" stroke-width="1" stroke-dasharray="6,4"/>
  <line x1="215" y1="185" x2="585" y2="185" stroke="#3b82f6" stroke-width="2"/>
  <rect x="215" y="105" width="370" height="160" fill="none" stroke="#60a5fa" stroke-width="1" opacity="0.5"/>
  <line x1="215" y1="185" x2="215" y2="185" stroke="none"/>
  <circle cx="400" cy="185" r="25" fill="none" stroke="#60a5fa" stroke-width="1" opacity="0.5"/>
  <rect x="370" y="178" width="60" height="15" rx="2" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" stroke-width="1"/>
  <text x="400" y="189" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="8" fill="#93c5fd">NET</text>
  <text x="308" y="145" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#60a5fa" opacity="0.7">SERVIÇO</text>
  <text x="493" y="145" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#60a5fa" opacity="0.7">SERVIÇO</text>
  <text x="308" y="260" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#60a5fa" opacity="0.7">FUNDO</text>
  <text x="493" y="260" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#60a5fa" opacity="0.7">FUNDO</text>
  <text x="400" y="185" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="#93c5fd" dy="-30">QUADRA BEACH TENNIS</text>
  <text x="400" y="165" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#6ea8fe">8,0 × 16,0 m</text>
  <text x="130" y="190" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#93c5fd">TRIBUNA</text>
  <text x="130" y="204" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#6ea8fe">Esq.</text>
  <text x="670" y="190" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#93c5fd">TRIBUNA</text>
  <text x="670" y="204" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#6ea8fe">Dir.</text>
  <line x1="60" y1="320" x2="740" y2="320" stroke="none"/>
  <line x1="300" y1="320" x2="300" y2="450" stroke="#1e3a8a" stroke-width="1.5"/>
  <line x1="500" y1="320" x2="500" y2="450" stroke="#1e3a8a" stroke-width="1.5"/>
  <text x="180" y="390" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#93c5fd">VEST. MASC.</text>
  <text x="400" y="390" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#93c5fd">VEST. FEM.</text>
  <text x="620" y="390" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#93c5fd">DEPÓSITO</text>
  <line x1="60" y1="38" x2="740" y2="38" stroke="#60a5fa" stroke-width="0.8" stroke-dasharray="4,3" opacity="0.5"/>
  <text x="400" y="34" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="8" fill="#60a5fa" opacity="0.7">17,00 m</text>
  <rect x="60" y="458" width="240" height="22" rx="3" fill="rgba(29,78,216,0.25)" stroke="#1d4ed8" stroke-width="0.8"/>
  <text x="180" y="473" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">ESPORTIVO — PLANTA BAIXA</text>
  <text x="740" y="487" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="8" fill="#60a5fa" opacity="0.6">ESC. 1:80 | MEDLEV ARQUITETURA</text>
  <g transform="translate(768,472)">
    <circle r="13" fill="rgba(29,78,216,0.2)" stroke="#1d4ed8" stroke-width="1"/>
    <polygon points="0,-11 -3.5,-3 3.5,-3" fill="#3b82f6"/>
    <text y="9" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">N</text>
  </g>
</svg>`,

// ─── 3: Galpão industrial ─────────────────────────────────────────────────────
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" aria-hidden="true" style="width:100%;height:100%;display:block">
  <defs>
    <pattern id="bp3g" width="32" height="32" patternUnits="userSpaceOnUse">
      <circle cx="16" cy="16" r="0.9" fill="rgba(96,165,250,0.16)"/>
    </pattern>
  </defs>
  <rect width="800" height="500" fill="#050e1e"/>
  <rect width="800" height="500" fill="url(#bp3g)"/>
  <rect x="50" y="50" width="700" height="400" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <line x1="50" y1="150" x2="750" y2="150" stroke="#1e40af" stroke-width="2"/>
  <line x1="50" y1="390" x2="750" y2="390" stroke="#1e40af" stroke-width="2"/>
  <line x1="550" y1="50" x2="550" y2="150" stroke="#1e3a8a" stroke-width="1.5"/>
  <line x1="650" y1="50" x2="650" y2="150" stroke="#1e3a8a" stroke-width="1.5"/>
  <line x1="50" y1="100" x2="550" y2="100" stroke="#1e3a8a" stroke-width="1"/>
  <g stroke="#1e3a8a" stroke-width="1" opacity="0.6">
    <line x1="145" y1="150" x2="145" y2="390"/>
    <line x1="240" y1="150" x2="240" y2="390"/>
    <line x1="335" y1="150" x2="335" y2="390"/>
    <line x1="430" y1="150" x2="430" y2="390"/>
    <line x1="525" y1="150" x2="525" y2="390"/>
    <line x1="620" y1="150" x2="620" y2="390"/>
    <line x1="50" y1="230" x2="750" y2="230"/>
    <line x1="50" y1="310" x2="750" y2="310"/>
  </g>
  <g fill="rgba(29,78,216,0.4)" stroke="#3b82f6" stroke-width="0.8">
    <rect x="140" y="145" width="10" height="10" rx="1"/>
    <rect x="235" y="145" width="10" height="10" rx="1"/>
    <rect x="330" y="145" width="10" height="10" rx="1"/>
    <rect x="425" y="145" width="10" height="10" rx="1"/>
    <rect x="520" y="145" width="10" height="10" rx="1"/>
    <rect x="615" y="145" width="10" height="10" rx="1"/>
    <rect x="745" y="145" width="10" height="10" rx="1"/>
    <rect x="140" y="225" width="10" height="10" rx="1"/>
    <rect x="235" y="225" width="10" height="10" rx="1"/>
    <rect x="330" y="225" width="10" height="10" rx="1"/>
    <rect x="425" y="225" width="10" height="10" rx="1"/>
    <rect x="520" y="225" width="10" height="10" rx="1"/>
    <rect x="615" y="225" width="10" height="10" rx="1"/>
    <rect x="745" y="225" width="10" height="10" rx="1"/>
    <rect x="140" y="305" width="10" height="10" rx="1"/>
    <rect x="235" y="305" width="10" height="10" rx="1"/>
    <rect x="330" y="305" width="10" height="10" rx="1"/>
    <rect x="425" y="305" width="10" height="10" rx="1"/>
    <rect x="520" y="305" width="10" height="10" rx="1"/>
    <rect x="615" y="305" width="10" height="10" rx="1"/>
    <rect x="745" y="305" width="10" height="10" rx="1"/>
    <rect x="50" y="225" width="10" height="10" rx="1"/>
    <rect x="50" y="305" width="10" height="10" rx="1"/>
  </g>
  <text x="300" y="80" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#93c5fd">BLOCO ADM.</text>
  <text x="300" y="95" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#6ea8fe">120,0 m²</text>
  <text x="600" y="80" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">SALA CONF.</text>
  <text x="700" y="80" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">WC</text>
  <text x="400" y="275" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" fill="#93c5fd" letter-spacing="2">HALL PRINCIPAL</text>
  <text x="400" y="295" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="#6ea8fe">660,0 m²</text>
  <text x="400" y="418" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#93c5fd">DOCA DE CARGA / DESCARGA</text>
  <rect x="150" y="393" width="120" height="47" rx="2" fill="rgba(15,30,80,0.4)" stroke="#1e40af" stroke-width="1"/>
  <rect x="330" y="393" width="120" height="47" rx="2" fill="rgba(15,30,80,0.4)" stroke="#1e40af" stroke-width="1"/>
  <rect x="510" y="393" width="120" height="47" rx="2" fill="rgba(15,30,80,0.4)" stroke="#1e40af" stroke-width="1"/>
  <line x1="50" y1="36" x2="750" y2="36" stroke="#60a5fa" stroke-width="0.8" stroke-dasharray="4,3" opacity="0.5"/>
  <text x="400" y="32" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="8" fill="#60a5fa" opacity="0.7">35,00 m</text>
  <rect x="50" y="460" width="240" height="22" rx="3" fill="rgba(29,78,216,0.25)" stroke="#1d4ed8" stroke-width="0.8"/>
  <text x="170" y="475" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">INDUSTRIAL — PLANTA BAIXA</text>
  <text x="750" y="487" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="8" fill="#60a5fa" opacity="0.6">ESC. 1:200 | MEDLEV ARQUITETURA</text>
  <g transform="translate(778,472)">
    <circle r="13" fill="rgba(29,78,216,0.2)" stroke="#1d4ed8" stroke-width="1"/>
    <polygon points="0,-11 -3.5,-3 3.5,-3" fill="#3b82f6"/>
    <text y="9" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">N</text>
  </g>
</svg>`,

// ─── 4: Institucional / Capela ────────────────────────────────────────────────
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" aria-hidden="true" style="width:100%;height:100%;display:block">
  <defs>
    <pattern id="bp4g" width="32" height="32" patternUnits="userSpaceOnUse">
      <circle cx="16" cy="16" r="0.9" fill="rgba(96,165,250,0.16)"/>
    </pattern>
  </defs>
  <rect width="800" height="500" fill="#050e1e"/>
  <rect width="800" height="500" fill="url(#bp4g)"/>
  <rect x="200" y="50" width="400" height="410" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <line x1="200" y1="130" x2="600" y2="130" stroke="#1e40af" stroke-width="2"/>
  <line x1="200" y1="370" x2="600" y2="370" stroke="#1e40af" stroke-width="2"/>
  <line x1="320" y1="370" x2="320" y2="460" stroke="#1e3a8a" stroke-width="1.5"/>
  <line x1="480" y1="370" x2="480" y2="460" stroke="#1e3a8a" stroke-width="1.5"/>
  <line x1="200" y1="130" x2="200" y2="50" stroke="none"/>
  <rect x="230" y="55" width="340" height="70" fill="rgba(15,30,80,0.3)" stroke="none"/>
  <path d="M200,130 L400,60 L600,130" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="350" y1="50" x2="350" y2="130" stroke="#1e3a8a" stroke-width="1" opacity="0.6"/>
  <line x1="450" y1="50" x2="450" y2="130" stroke="#1e3a8a" stroke-width="1" opacity="0.6"/>
  <rect x="340" y="300" width="120" height="70" fill="rgba(29,78,216,0.2)" stroke="#3b82f6" stroke-width="1.5"/>
  <path d="M340,370 Q400,340 460,370" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="340" y1="295" x2="460" y2="295" stroke="#3b82f6" stroke-width="1"/>
  <rect x="368" y="295" width="64" height="75" rx="32" fill="rgba(29,78,216,0.1)" stroke="#3b82f6" stroke-width="1"/>
  <text x="400" y="346" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="8" fill="#93c5fd">ALTAR</text>
  <g stroke="#1e3a8a" stroke-width="0.8" opacity="0.5">
    <line x1="240" y1="140" x2="240" y2="370"/>
    <line x1="290" y1="140" x2="290" y2="370"/>
    <line x1="510" y1="140" x2="510" y2="370"/>
    <line x1="560" y1="140" x2="560" y2="370"/>
  </g>
  <g fill="none" stroke="#60a5fa" stroke-width="0.8" opacity="0.4">
    <rect x="220" y="155" width="50" height="30" rx="2"/>
    <rect x="220" y="195" width="50" height="30" rx="2"/>
    <rect x="220" y="235" width="50" height="30" rx="2"/>
    <rect x="220" y="275" width="50" height="30" rx="2"/>
    <rect x="530" y="155" width="50" height="30" rx="2"/>
    <rect x="530" y="195" width="50" height="30" rx="2"/>
    <rect x="530" y="235" width="50" height="30" rx="2"/>
    <rect x="530" y="275" width="50" height="30" rx="2"/>
  </g>
  <text x="400" y="90" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#93c5fd">VESTÍBULO</text>
  <text x="400" y="104" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#6ea8fe">20,0 m²</text>
  <text x="400" y="245" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" fill="#93c5fd" letter-spacing="1">NAVE PRINCIPAL</text>
  <text x="400" y="261" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#6ea8fe">80,0 m²</text>
  <text x="260" y="418" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">SACRISTIA</text>
  <text x="400" y="418" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">SALA MUSIC.</text>
  <text x="540" y="418" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">WC / DEP.</text>
  <path d="M390,460 A20,20 0 0,1 410,440" fill="none" stroke="#3b82f6" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="400" y="490" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="8" fill="#60a5fa" opacity="0.6">ACESSO PRINCIPAL</text>
  <line x1="200" y1="36" x2="600" y2="36" stroke="#60a5fa" stroke-width="0.8" stroke-dasharray="4,3" opacity="0.5"/>
  <text x="400" y="32" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="8" fill="#60a5fa" opacity="0.7">10,00 m</text>
  <rect x="50" y="460" width="240" height="22" rx="3" fill="rgba(29,78,216,0.25)" stroke="#1d4ed8" stroke-width="0.8"/>
  <text x="170" y="475" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">INSTITUCIONAL — PLANTA BAIXA</text>
  <text x="750" y="487" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="8" fill="#60a5fa" opacity="0.6">ESC. 1:80 | MEDLEV ARQUITETURA</text>
  <g transform="translate(778,472)">
    <circle r="13" fill="rgba(29,78,216,0.2)" stroke="#1d4ed8" stroke-width="1"/>
    <polygon points="0,-11 -3.5,-3 3.5,-3" fill="#3b82f6"/>
    <text y="9" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">N</text>
  </g>
</svg>`,

// ─── 5: Casa térrea ──────────────────────────────────────────────────────────
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" aria-hidden="true" style="width:100%;height:100%;display:block">
  <defs>
    <pattern id="bp5g" width="32" height="32" patternUnits="userSpaceOnUse">
      <circle cx="16" cy="16" r="0.9" fill="rgba(96,165,250,0.16)"/>
    </pattern>
  </defs>
  <rect width="800" height="500" fill="#050e1e"/>
  <rect width="800" height="500" fill="url(#bp5g)"/>
  <rect x="60" y="50" width="420" height="410" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <rect x="480" y="50" width="260" height="240" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <line x1="60" y1="50" x2="740" y2="50" stroke="none"/>
  <line x1="480" y1="290" x2="740" y2="290" stroke="#1e40af" stroke-width="2"/>
  <line x1="60" y1="180" x2="480" y2="180" stroke="#1e40af" stroke-width="2"/>
  <line x1="220" y1="180" x2="220" y2="460" stroke="#1e40af" stroke-width="2"/>
  <line x1="60" y1="320" x2="220" y2="320" stroke="#1e3a8a" stroke-width="1.5"/>
  <line x1="220" y1="340" x2="480" y2="340" stroke="#1e40af" stroke-width="2"/>
  <line x1="350" y1="180" x2="350" y2="340" stroke="#1e3a8a" stroke-width="1.5"/>
  <line x1="350" y1="340" x2="350" y2="460" stroke="#1e3a8a" stroke-width="1.5"/>
  <line x1="220" y1="460" x2="480" y2="460" stroke="none"/>
  <line x1="590" y1="50" x2="590" y2="290" stroke="#1e3a8a" stroke-width="1.5"/>
  <line x1="480" y1="170" x2="740" y2="170" stroke="#1e3a8a" stroke-width="1.5"/>
  <line x1="480" y1="230" x2="590" y2="230" stroke="#1e3a8a" stroke-width="1"/>
  <text x="140" y="122" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="#93c5fd">SALA ESTAR</text>
  <text x="140" y="138" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#6ea8fe">28,0 m²</text>
  <text x="350" y="122" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#93c5fd">SALA JANTAR</text>
  <text x="350" y="138" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#6ea8fe">18,0 m²</text>
  <text x="140" y="263" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#93c5fd">COZINHA</text>
  <text x="140" y="277" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#6ea8fe">16,0 m²</text>
  <text x="140" y="398" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">ÁR. SERV.</text>
  <text x="350" y="250" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#93c5fd">QUARTO 1</text>
  <text x="350" y="264" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#6ea8fe">14,0 m²</text>
  <text x="350" y="406" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#93c5fd">QUARTO 2</text>
  <text x="350" y="420" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#6ea8fe">12,0 m²</text>
  <text x="535" y="108" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#93c5fd">QUARTO 3</text>
  <text x="535" y="122" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#6ea8fe">16,0 m²</text>
  <text x="665" y="108" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#93c5fd">SUÍTE</text>
  <text x="665" y="122" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#6ea8fe">18,0 m²</text>
  <text x="535" y="208" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">BWC</text>
  <text x="665" y="208" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">BWC SUÍTE</text>
  <text x="610" y="345" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#93c5fd">GARAGEM</text>
  <text x="610" y="359" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#6ea8fe">36,0 m²</text>
  <path d="M220,240 A20,20 0 0,0 240,220" fill="none" stroke="#3b82f6" stroke-width="1" stroke-dasharray="3,2"/>
  <path d="M350,290 A20,20 0 0,1 370,270" fill="none" stroke="#3b82f6" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="60" y1="36" x2="740" y2="36" stroke="#60a5fa" stroke-width="0.8" stroke-dasharray="4,3" opacity="0.5"/>
  <text x="400" y="32" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="8" fill="#60a5fa" opacity="0.7">17,00 m</text>
  <rect x="60" y="460" width="230" height="22" rx="3" fill="rgba(29,78,216,0.25)" stroke="#1d4ed8" stroke-width="0.8"/>
  <text x="175" y="475" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">CASA TÉRREA — PLANTA BAIXA</text>
  <text x="740" y="487" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="8" fill="#60a5fa" opacity="0.6">ESC. 1:100 | MEDLEV ARQUITETURA</text>
  <g transform="translate(768,472)">
    <circle r="13" fill="rgba(29,78,216,0.2)" stroke="#1d4ed8" stroke-width="1"/>
    <polygon points="0,-11 -3.5,-3 3.5,-3" fill="#3b82f6"/>
    <text y="9" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#93c5fd">N</text>
  </g>
</svg>`,

];

// ─── Mini blueprints 140×90 ───────────────────────────────────────────────────
export const MINI_BLUEPRINTS: readonly string[] = [

// mini 0: Apartamento
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 90" aria-hidden="true" style="width:100%;height:100%;display:block">
  <rect width="140" height="90" fill="#050e1e"/>
  <rect x="10" y="8" width="120" height="74" fill="none" stroke="#2563eb" stroke-width="1.8"/>
  <line x1="10" y1="22" x2="130" y2="22" stroke="#1e40af" stroke-width="1"/>
  <line x1="75" y1="22" x2="75" y2="82" stroke="#1e40af" stroke-width="1"/>
  <line x1="102" y1="22" x2="102" y2="58" stroke="#1e3a8a" stroke-width="0.8"/>
  <line x1="10" y1="58" x2="130" y2="58" stroke="#1e40af" stroke-width="1"/>
  <line x1="50" y1="58" x2="50" y2="82" stroke="#1e3a8a" stroke-width="0.8"/>
  <line x1="90" y1="58" x2="90" y2="82" stroke="#1e3a8a" stroke-width="0.8"/>
  <line x1="112" y1="58" x2="112" y2="82" stroke="#1e3a8a" stroke-width="0.8"/>
</svg>`,

// mini 1: Escritório
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 90" aria-hidden="true" style="width:100%;height:100%;display:block">
  <rect width="140" height="90" fill="#050e1e"/>
  <rect x="8" y="8" width="124" height="74" fill="none" stroke="#2563eb" stroke-width="1.8"/>
  <line x1="36" y1="8" x2="36" y2="82" stroke="#1e40af" stroke-width="1"/>
  <line x1="110" y1="8" x2="110" y2="68" stroke="#1e40af" stroke-width="1"/>
  <line x1="36" y1="40" x2="110" y2="40" stroke="#1e3a8a" stroke-width="0.8"/>
  <line x1="8" y1="68" x2="132" y2="68" stroke="#1e40af" stroke-width="1"/>
  <line x1="68" y1="68" x2="68" y2="82" stroke="#1e3a8a" stroke-width="0.8"/>
  <line x1="96" y1="68" x2="96" y2="82" stroke="#1e3a8a" stroke-width="0.8"/>
  <rect x="44" y="14" width="14" height="10" fill="none" stroke="#1e40af" stroke-width="0.6"/>
  <rect x="64" y="14" width="14" height="10" fill="none" stroke="#1e40af" stroke-width="0.6"/>
  <rect x="84" y="14" width="14" height="10" fill="none" stroke="#1e40af" stroke-width="0.6"/>
</svg>`,

// mini 2: Esportivo
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 90" aria-hidden="true" style="width:100%;height:100%;display:block">
  <rect width="140" height="90" fill="#050e1e"/>
  <rect x="8" y="8" width="124" height="74" fill="none" stroke="#2563eb" stroke-width="1.8"/>
  <line x1="8" y1="68" x2="132" y2="68" stroke="#1e40af" stroke-width="1"/>
  <line x1="36" y1="8" x2="36" y2="68" stroke="#1e40af" stroke-width="1"/>
  <line x1="104" y1="8" x2="104" y2="68" stroke="#1e40af" stroke-width="1"/>
  <rect x="36" y="8" width="68" height="60" fill="rgba(20,50,120,0.2)" stroke="#3b82f6" stroke-width="1"/>
  <line x1="70" y1="8" x2="70" y2="68" stroke="#3b82f6" stroke-width="0.8" stroke-dasharray="4,3"/>
  <line x1="36" y1="38" x2="104" y2="38" stroke="#3b82f6" stroke-width="1.2"/>
  <circle cx="70" cy="38" r="8" fill="none" stroke="#60a5fa" stroke-width="0.8" opacity="0.6"/>
</svg>`,

// mini 3: Industrial
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 90" aria-hidden="true" style="width:100%;height:100%;display:block">
  <rect width="140" height="90" fill="#050e1e"/>
  <rect x="6" y="6" width="128" height="78" fill="none" stroke="#2563eb" stroke-width="1.8"/>
  <line x1="6" y1="26" x2="134" y2="26" stroke="#1e40af" stroke-width="1"/>
  <line x1="6" y1="72" x2="134" y2="72" stroke="#1e40af" stroke-width="1"/>
  <g stroke="#1e3a8a" stroke-width="0.7" opacity="0.7">
    <line x1="34" y1="26" x2="34" y2="72"/>
    <line x1="62" y1="26" x2="62" y2="72"/>
    <line x1="90" y1="26" x2="90" y2="72"/>
    <line x1="118" y1="26" x2="118" y2="72"/>
    <line x1="6" y1="49" x2="134" y2="49"/>
  </g>
  <g fill="rgba(59,130,246,0.5)">
    <circle cx="34" cy="26" r="2.5"/>
    <circle cx="62" cy="26" r="2.5"/>
    <circle cx="90" cy="26" r="2.5"/>
    <circle cx="118" cy="26" r="2.5"/>
    <circle cx="34" cy="49" r="2.5"/>
    <circle cx="62" cy="49" r="2.5"/>
    <circle cx="90" cy="49" r="2.5"/>
    <circle cx="118" cy="49" r="2.5"/>
  </g>
</svg>`,

// mini 4: Institucional
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 90" aria-hidden="true" style="width:100%;height:100%;display:block">
  <rect width="140" height="90" fill="#050e1e"/>
  <rect x="35" y="6" width="70" height="78" fill="none" stroke="#2563eb" stroke-width="1.8"/>
  <line x1="35" y1="22" x2="105" y2="22" stroke="#1e40af" stroke-width="1"/>
  <line x1="35" y1="70" x2="105" y2="70" stroke="#1e40af" stroke-width="1"/>
  <line x1="55" y1="70" x2="55" y2="84" stroke="#1e3a8a" stroke-width="0.8"/>
  <line x1="85" y1="70" x2="85" y2="84" stroke="#1e3a8a" stroke-width="0.8"/>
  <path d="M35,22 L70,8 L105,22" fill="none" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4,3"/>
  <rect x="58" y="52" width="24" height="18" rx="12" fill="rgba(29,78,216,0.2)" stroke="#3b82f6" stroke-width="0.8"/>
</svg>`,

// mini 5: Casa
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 90" aria-hidden="true" style="width:100%;height:100%;display:block">
  <rect width="140" height="90" fill="#050e1e"/>
  <rect x="6" y="8" width="78" height="74" fill="none" stroke="#2563eb" stroke-width="1.8"/>
  <rect x="84" y="8" width="50" height="46" fill="none" stroke="#2563eb" stroke-width="1.8"/>
  <line x1="6" y1="38" x2="84" y2="38" stroke="#1e40af" stroke-width="1"/>
  <line x1="38" y1="38" x2="38" y2="82" stroke="#1e40af" stroke-width="1"/>
  <line x1="6" y1="62" x2="38" y2="62" stroke="#1e3a8a" stroke-width="0.8"/>
  <line x1="38" y1="60" x2="84" y2="60" stroke="#1e40af" stroke-width="1"/>
  <line x1="62" y1="38" x2="62" y2="60" stroke="#1e3a8a" stroke-width="0.8"/>
  <line x1="62" y1="60" x2="62" y2="82" stroke="#1e3a8a" stroke-width="0.8"/>
  <line x1="112" y1="8" x2="112" y2="54" stroke="#1e3a8a" stroke-width="0.8"/>
  <line x1="84" y1="32" x2="134" y2="32" stroke="#1e3a8a" stroke-width="0.8"/>
</svg>`,

];
