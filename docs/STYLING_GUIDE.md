# Guia de Estilização - MARKDEV

## Filosofia de Estilização

Este projeto segue as melhores práticas do Astro e Tailwind CSS, priorizando:

1. **Componentes reutilizáveis** sobre estilos inline
2. **Classes utilitárias do Tailwind** sobre CSS customizado
3. **Design tokens** para consistência
4. **Separação de responsabilidades** entre estrutura, apresentação e comportamento

## Estrutura de Estilos

### 1. Design Tokens (tailwind.config.cjs)

```javascript
// Paleta de cores cyber/retrowave
cyber: {
  bg: '#000000',           // Fundo principal
  'bg-light': '#1a1a1a',   // Fundo secundário
  'bg-lighter': '#2a2a2a', // Fundo terciário
  border: '#404040',       // Bordas
  'border-light': '#606060', // Bordas hover
  text: {
    primary: '#e5e7eb',    // Texto principal
    secondary: '#d1d5db',  // Texto secundário
    muted: '#9ca3af',      // Texto esmaecido
    accent: '#6b7280',     // Texto de destaque
  }
}
```

### 2. Componentes CSS (@layer components)

#### Componentes Cyber/Terminal
- `.cyber-window` - Janela estilo terminal
- `.cyber-window-header` - Cabeçalho da janela
- `.cyber-window-controls` - Controles da janela (botões)
- `.cyber-text-*` - Classes de texto temáticas
- `.cyber-font-*` - Classes de fonte temáticas

#### Componentes de Layout
- `.section-bg-dark` - Fundo escuro para seções
- `.section-padding` - Padding padrão das seções
- `.container-custom` - Container responsivo

#### Componentes de UI
- `.stat-card` - Cards de estatísticas
- `.service-item` - Itens de serviço
- `.text-gradient-cyber` - Gradiente temático

## Hierarquia de Estilização

### 1. Prioridade Alta - Classes Tailwind
```astro
<div class="bg-cyber-bg text-cyber-text-primary p-6 rounded-lg">
  <!-- Usar classes utilitárias do Tailwind sempre que possível -->
</div>
```

### 2. Prioridade Média - Componentes CSS
```astro
<div class="cyber-window">
  <!-- Para padrões repetitivos e complexos -->
</div>
```

### 3. Prioridade Baixa - CSS Scoped
```astro
<div class="custom-animation">
  <!-- Apenas para estilos únicos do componente -->
</div>

<style>
.custom-animation {
  /* Estilos específicos que não podem ser expressos com Tailwind */
}
</style>
```

### 4. ❌ EVITAR - Estilos Inline
```astro
<!-- ❌ NÃO FAZER -->
<div style="background-color: #000000; color: #e5e7eb;">

<!-- ✅ FAZER -->
<div class="bg-cyber-bg cyber-text-primary">
```

## Componentes Reutilizáveis

### CyberWindow.astro
```astro
<CyberWindow title="TERMINAL">
  <div class="cyber-font-mono">
    <span class="cyber-text-muted">$</span>
    <span class="cyber-text-primary">echo "Hello World"</span>
  </div>
</CyberWindow>
```

### StatCard.astro
```astro
<StatCard number="100+" label="PROJECTS" />
```

## Padrões de Nomenclatura

### Classes CSS
- **Prefixo temático**: `cyber-*` para elementos do tema
- **Elemento**: `cyber-window`, `cyber-text`
- **Modificador**: `cyber-text-primary`, `cyber-text-muted`

### Componentes Astro
- **PascalCase**: `CyberWindow.astro`
- **Descritivo**: Nome deve indicar função clara

## Responsividade

### Breakpoints Padrão (Tailwind)
- `sm:` - 640px+
- `md:` - 768px+
- `lg:` - 1024px+
- `xl:` - 1280px+
- `2xl:` - 1536px+

### Exemplo de Uso
```astro
<div class="text-sm sm:text-base md:text-lg lg:text-xl">
  Texto responsivo
</div>
```

## Animações

### Classes Utilitárias
- `transition-all duration-300` - Transição padrão
- `transform hover:scale-105` - Efeito hover
- `opacity-0 animate-fade-in` - Animação de entrada

### Animações Customizadas
Definidas no `tailwind.config.cjs`:
```javascript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
}
```

## Checklist de Qualidade

### ✅ Fazer
- [ ] Usar classes Tailwind sempre que possível
- [ ] Criar componentes para padrões repetitivos
- [ ] Usar design tokens para cores e fontes
- [ ] Implementar responsividade mobile-first
- [ ] Documentar componentes complexos

### ❌ Evitar
- [ ] Estilos inline (`style=""`)
- [ ] CSS global desnecessário
- [ ] Valores hardcoded para cores/espaçamentos
- [ ] Componentes muito específicos (não reutilizáveis)
- [ ] Uso excessivo de `!important`

## Exemplo Completo

### Antes (❌)
```astro
<div style="background-color: #000000; border: 2px solid #404040; border-radius: 8px;">
  <div style="background-color: #1a1a1a; padding: 16px; border-bottom: 1px solid #404040;">
    <span style="color: #9ca3af; font-family: 'Orbitron', monospace;">TERMINAL</span>
  </div>
  <div style="padding: 24px; color: #e5e7eb; font-family: 'JetBrains Mono', monospace;">
    $ echo "Hello World"
  </div>
</div>
```

### Depois (✅)
```astro
<CyberWindow title="TERMINAL">
  <div class="cyber-font-mono cyber-text-primary">
    <span class="cyber-text-muted">$</span> echo "Hello World"
  </div>
</CyberWindow>
```

## Status da Refatoração

### ✅ Completamente Refatorado
- `src/pages/index.astro` - **100% livre de estilos inline**
- `src/layouts/Layout.astro` - Padronizado
- `src/components/About.astro` - Padronizado
- `src/components/Skills.astro` - Padronizado
- `src/components/Projects.astro` - Padronizado
- `src/components/Contact.astro` - Padronizado
- `src/components/Footer.astro` - Padronizado

### 🎯 Componentes Criados
- `CyberWindow.astro` - Janelas terminais reutilizáveis
- `StatCard.astro` - Cards de estatísticas padronizados

### 📊 Métricas de Melhoria
- **Estilos inline removidos**: ~50+ ocorrências
- **Linhas de CSS reduzidas**: ~200 linhas movidas para componentes
- **Componentes reutilizáveis criados**: 2
- **Classes CSS padronizadas**: 15+

## Manutenção

### Atualizações de Design
1. Modificar design tokens no `tailwind.config.cjs`
2. Atualizar componentes CSS no `global.css`
3. Testar em todos os componentes
4. Executar build para verificar

### Novos Componentes
1. Verificar se padrão já existe
2. Criar componente reutilizável se necessário
3. Documentar props e uso
4. Adicionar ao guia de estilização

Este guia garante consistência, manutenibilidade e performance otimizada seguindo as melhores práticas do Astro e Tailwind CSS. 