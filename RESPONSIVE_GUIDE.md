# Guia de Responsividade - MARKDEV Portfolio

## 📱 Sistema de Breakpoints

### Breakpoints Personalizados
```css
/* Mobile pequeno */
@media (max-width: 479px) { /* XS */ }

/* Mobile grande */
@media (min-width: 480px) and (max-width: 767px) { /* SM */ }

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) { /* MD */ }

/* Desktop pequeno */
@media (min-width: 1024px) and (max-width: 1279px) { /* LG */ }

/* Desktop médio */
@media (min-width: 1280px) and (max-width: 1535px) { /* XL */ }

/* Desktop grande */
@media (min-width: 1536px) and (max-width: 1919px) { /* 2XL */ }

/* Ultra-wide */
@media (min-width: 1920px) { /* 3XL */ }

/* Zoom Breakpoints */
@media screen and (min-resolution: 1.1dppx) { /* 110% Zoom */ }
@media screen and (min-resolution: 1.2dppx) { /* 120% Zoom */ }
```

## 🎯 Classes CSS Responsivas

### Container Responsivo
```html
<div class="container-responsive">
  <!-- Conteúdo centralizado com padding automático -->
</div>
```

### Texto Responsivo
```html
<p class="text-responsive-xs">Texto muito pequeno</p>
<p class="text-responsive-sm">Texto pequeno</p>
<p class="text-responsive-base">Texto base</p>
<p class="text-responsive-lg">Texto grande</p>
<p class="text-responsive-xl">Texto extra grande</p>
<p class="text-responsive-2xl">Texto 2x grande</p>
<p class="text-responsive-3xl">Texto 3x grande</p>
<p class="text-responsive-4xl">Texto 4x grande</p>
```

### Grid Responsivo
```html
<div class="grid-responsive">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```
- **Mobile**: 1 coluna
- **Tablet**: 2 colunas  
- **Desktop**: 3 colunas
- **Ultra-wide**: 4 colunas

### Flex Responsivo
```html
<div class="flex-responsive">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```
- **Mobile**: `flex-direction: column`
- **Desktop**: `flex-direction: row`

### Botões Responsivos
```html
<button class="btn-responsive">Botão Responsivo</button>
```

### Espaçamento Responsivo
```html
<div class="p-responsive">Padding responsivo</div>
<div class="px-responsive">Padding horizontal responsivo</div>
<div class="py-responsive">Padding vertical responsivo</div>
<div class="m-responsive">Margin responsivo</div>
<div class="mx-responsive">Margin horizontal responsivo</div>
<div class="my-responsive">Margin vertical responsivo</div>
```

## 🖼️ Imagens Responsivas

### Imagem Básica
```html
<img src="image.jpg" alt="Descrição" class="img-responsive">
```

### Container com Aspect Ratio
```html
<div class="aspect-responsive">
  <img src="image.jpg" alt="Descrição">
</div>
```

## 📱 Classes Utilitárias

### Mostrar/Ocultar por Breakpoint
```html
<div class="hide-mobile">Só aparece no desktop</div>
<div class="show-mobile">Só aparece no mobile</div>
<div class="hide-desktop">Só aparece no mobile</div>
<div class="show-desktop">Só aparece no desktop</div>
```

## 🎨 Implementação no Hero

### ASCII Art Responsivo
```html
<pre id="ascii-title" class="ascii-art ascii-art-responsive">
  <!-- ASCII art que escala automaticamente -->
</pre>
```

### Conteúdo do Hero
```html
<div class="hero-content">
  <p class="text-responsive-sm">Studio by Marcelo</p>
  <p class="text-responsive-lg">Proposta de valor</p>
  <div class="hero-buttons">
    <a href="#projects" class="hero-btn-primary btn-responsive">Ver Projetos</a>
    <a href="#contact" class="hero-btn-secondary btn-responsive">Contato</a>
  </div>
</div>
```

## 🔧 Configuração do Tailwind

### Breakpoints Customizados
```javascript
// tailwind.config.cjs
module.exports = {
  theme: {
    screens: {
      'xs': '0px',
      'sm': '480px',
      'md': '768px', 
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    }
  }
}
```

## 📐 Melhores Práticas

### 1. Mobile-First
```css
/* Sempre comece com mobile */
.element {
  /* Estilos base para mobile */
}

/* Depois adicione breakpoints maiores */
@media (min-width: 768px) {
  .element {
    /* Estilos para tablet+ */
  }
}
```

### 2. Use clamp() para Escalabilidade
```css
.element {
  font-size: clamp(1rem, 3vw, 2rem);
  padding: clamp(1rem, 3vw, 2rem);
}
```

### 3. Teste em Diferentes Dispositivos
- iPhone SE (375px)
- iPhone 12 (390px)
- iPad (768px)
- Desktop (1024px+)
- Ultra-wide (1920px+)

### 4. Teste com Diferentes Níveis de Zoom
- Zoom 90% (reduzido)
- Zoom 100% (normal)
- Zoom 110% (aumentado)
- Zoom 120% (muito aumentado)
- Zoom 150% (acessibilidade)

### 5. Performance em Mobile
```css
/* Reduzir animações em mobile */
@media (max-width: 767px) {
  .reduce-motion-mobile * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 6. Touch Targets
```css
/* Mínimo 44px para elementos clicáveis */
@media (max-width: 767px) {
  button, a, input {
    min-height: 44px;
    min-width: 44px;
  }
}
```

## 🔍 Zoom Responsiveness

### Breakpoints de Zoom
```css
/* Zoom 110% */
@media screen and (min-resolution: 1.1dppx) {
  .container-responsive {
    max-width: calc(100% - 2rem);
  }
  
  .ascii-art-responsive {
    font-size: clamp(7px, 1.8vw, 16px);
    transform: scale(0.95);
  }
}

/* Zoom 120% */
@media screen and (min-resolution: 1.2dppx) {
  .container-responsive {
    max-width: calc(100% - 3rem);
  }
  
  .ascii-art-responsive {
    font-size: clamp(6px, 1.6vw, 14px);
    transform: scale(0.9);
  }
  
  /* Força layout de coluna única */
  .grid-responsive {
    grid-template-columns: 1fr !important;
  }
}
```

### Melhorias para Zoom
- **Container ajustado**: Reduz largura máxima para evitar overflow
- **ASCII Art escalado**: Reduz tamanho e aplica transform scale
- **Texto responsivo**: Ajusta tamanhos com clamp() otimizado
- **Layout simplificado**: Força coluna única em zoom alto
- **Touch targets**: Aumenta tamanho mínimo para 48px
- **Contraste melhorado**: Aumenta peso da fonte para legibilidade

## 🧪 Teste de Responsividade

### Componente de Teste
```astro
---
import ResponsiveTest from '../components/ResponsiveTest.astro';
---

<!-- Adicione temporariamente para testar -->
<ResponsiveTest />
```

### Ferramentas de Desenvolvimento
1. **Chrome DevTools**: F12 → Device Toolbar
2. **Firefox Responsive Design Mode**: F12 → Responsive Design Mode
3. **Componente ResponsiveTest**: Visualização em tempo real

## 📊 Monitoramento

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Métricas de Responsividade
- Tempo de carregamento em diferentes conexões
- Performance em dispositivos de baixo poder
- Acessibilidade em diferentes tamanhos de tela

## 🎯 Checklist de Responsividade

### ✅ Mobile (0-767px)
- [ ] Texto legível sem zoom
- [ ] Botões com tamanho mínimo 44px
- [ ] Navegação otimizada para touch
- [ ] Imagens não quebram o layout
- [ ] Performance otimizada

### ✅ Tablet (768-1023px)
- [ ] Layout adaptado para orientação landscape
- [ ] Grid com 2 colunas
- [ ] Espaçamento adequado
- [ ] Navegação híbrida

### ✅ Desktop (1024px+)
- [ ] Layout completo com 3+ colunas
- [ ] Hover effects funcionais
- [ ] Navegação completa
- [ ] Espaçamento generoso

### ✅ Ultra-wide (1920px+)
- [ ] Layout não fica muito esticado
- [ ] Conteúdo centralizado
- [ ] Grid com 4 colunas
- [ ] Experiência premium

## 🔄 Manutenção

### Atualizações Regulares
1. **Teste mensal** em diferentes dispositivos
2. **Monitoramento** de Core Web Vitals
3. **Feedback** de usuários sobre usabilidade
4. **Atualização** de breakpoints conforme necessário

### Debugging
```javascript
// Console para debug de responsividade
console.log('Screen size:', window.innerWidth, 'x', window.innerHeight);
console.log('Device pixel ratio:', window.devicePixelRatio);
console.log('Orientation:', window.innerWidth > window.innerHeight ? 'Landscape' : 'Portrait');
```

## 📚 Recursos Adicionais

### Ferramentas
- [Responsively App](https://responsively.app/)
- [BrowserStack](https://www.browserstack.com/)
- [LambdaTest](https://www.lambdatest.com/)

### Referências
- [MDN Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [CSS-Tricks Responsive Design](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Web.dev Responsive Design](https://web.dev/learn/design/responsive/)

---

**Arquivos para Modificação:**
- `src/styles/responsive.css` - Sistema principal de responsividade
- `src/components/Hero.astro` - Hero responsivo (linhas 1-251)
- `src/layouts/Layout.astro` - Layout principal (linhas 1-162)
- `tailwind.config.cjs` - Configuração de breakpoints
- `src/components/ResponsiveTest.astro` - Componente de teste 