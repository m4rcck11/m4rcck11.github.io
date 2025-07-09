# Guia da Seção "Our Projects"

## 📋 Visão Geral

A seção "Our Projects" foi criada para exibir os sites e projetos desenvolvidos, mostrando o portfólio de trabalhos realizados. A seção está posicionada entre "Our Process" e "About Me" para manter uma sequência lógica.

## 🎯 Localização

- **Arquivo**: `src/pages/index.astro`
- **Posição**: Linhas ~435-580 (após "Our Process", antes de "About Me")
- **ID da seção**: `#our-projects`

## 🏗️ Estrutura da Seção

### 1. Cabeçalho
```astro
<div class="text-center mb-16">
  <h2 class="text-6xl font-tech font-bold mb-6">Our Projects</h2>
  <p class="text-xl text-gray-300">Showcasing our digital creations and success stories</p>
</div>
```

### 2. Grid de Projetos
- **Layout**: Grid responsivo (1 coluna mobile, 2 tablets, 3 desktop)
- **Gap**: 8 unidades entre cards
- **Container**: `max-w-7xl mx-auto`

### 3. Cards de Projeto
Cada card contém:
- **Imagem/Placeholder**: Área visual do projeto
- **Overlay**: Links para demo e código (aparece no hover)
- **Categoria**: Tag indicando o tipo de projeto
- **Título**: Nome do projeto
- **Descrição**: Breve descrição das funcionalidades
- **Tecnologias**: Tags com as tecnologias utilizadas

## 🎨 Estilos CSS

### Classes Principais
- `.project-card`: Container principal do card
- `.project-image`: Área da imagem/placeholder
- `.project-overlay`: Overlay com links (hover)
- `.project-content`: Área de conteúdo textual
- `.project-category`: Tag da categoria
- `.project-title`: Título do projeto
- `.project-description`: Descrição do projeto
- `.project-tech`: Container das tags de tecnologia
- `.tech-tag`: Tag individual de tecnologia

### Animações
- **Hover**: Cards sobem 8px com sombra
- **Overlay**: Aparece suavemente no hover
- **Links**: Escalam 1.1x no hover
- **Placeholder**: Escala 1.1x no hover

## 📱 Responsividade

### Desktop (1024px+)
- Grid: 3 colunas
- Padding: 1.5rem
- Título: 1.25rem
- Descrição: 0.9rem

### Tablet (768px-1024px)
- Grid: 2 colunas
- Padding: 1.25rem
- Título: 1.125rem
- Descrição: 0.85rem

### Mobile (<768px)
- Grid: 1 coluna
- Imagem: 160px altura
- Padding: 1rem
- Título: 1rem
- Descrição: 0.8rem
- Links: 35px x 35px

## 🔧 Personalização

### Adicionar Novo Projeto
```astro
<div class="project-card opacity-0 transform translate-y-10 transition-all duration-1000 delay-[X00]" data-scroll-animate>
  <div class="project-image">
    <div class="project-placeholder">
      <!-- Ícone SVG aqui -->
    </div>
    <div class="project-overlay">
      <div class="project-links">
        <a href="[URL_DEMO]" class="project-link" target="_blank" rel="noopener noreferrer">
          <!-- Ícone de link externo -->
        </a>
        <a href="[URL_GITHUB]" class="project-link" target="_blank" rel="noopener noreferrer">
          <!-- Ícone do GitHub -->
        </a>
      </div>
    </div>
  </div>
  <div class="project-content">
    <div class="project-category">[CATEGORIA]</div>
    <h3 class="project-title">[TÍTULO_DO_PROJETO]</h3>
    <p class="project-description">[DESCRIÇÃO]</p>
    <div class="project-tech">
      <span class="tech-tag">[TECNOLOGIA_1]</span>
      <span class="tech-tag">[TECNOLOGIA_2]</span>
      <span class="tech-tag">[TECNOLOGIA_3]</span>
    </div>
  </div>
</div>
```

### Modificar Cores
```css
/* Cor de fundo da seção */
background-color: #1a1a1a;

/* Cor dos cards */
background: rgba(255, 255, 255, 0.05);

/* Cor das bordas */
border: 1px solid rgba(255, 255, 255, 0.1);

/* Cor dos títulos */
color: #e5e7eb;

/* Cor das descrições */
color: #d1d5db;
```

### Alterar Animações
```css
/* Delay das animações (em milissegundos) */
delay-400  /* Primeiro card */
delay-600  /* Segundo card */
delay-800  /* Terceiro card */
delay-1000 /* Call to Action */
```

## 🚀 Funcionalidades

### 1. Animações de Scroll
- Cards aparecem com fade-in e slide-up
- Animações sequenciais com delays diferentes
- Trigger quando 30% da seção está visível

### 2. Interações Hover
- Cards sobem e ganham sombra
- Overlay aparece com links
- Placeholder escala suavemente
- Links de ação escalam

### 3. Links de Ação
- **Demo**: Link para versão online do projeto
- **GitHub**: Link para repositório do código
- Abrem em nova aba com segurança

### 4. Call to Action
- Botão "Get in Touch" no final da seção
- Leva para seção de contato
- Design consistente com outras seções

## 📊 Projetos Exemplo

### 1. Modern Online Store (E-commerce)
- **Tecnologias**: React, Node.js, Stripe
- **Categoria**: E-commerce
- **Descrição**: Loja online completa com pagamentos

### 2. Business Management System (Web Application)
- **Tecnologias**: Vue.js, Laravel, MySQL
- **Categoria**: Web Application
- **Descrição**: Sistema CRM com analytics

### 3. Creative Portfolio (Portfolio)
- **Tecnologias**: Astro, Tailwind, TypeScript
- **Categoria**: Portfolio
- **Descrição**: Portfolio moderno com animações

## 🎯 Próximos Passos

### Para Personalizar:
1. **Substituir placeholders** por imagens reais dos projetos
2. **Atualizar links** para demos e repositórios reais
3. **Adicionar projetos** reais desenvolvidos
4. **Ajustar categorias** conforme necessário
5. **Personalizar cores** se desejar

### Para Expandir:
1. **Adicionar mais projetos** seguindo o padrão
2. **Criar filtros** por categoria/tecnologia
3. **Adicionar modal** com detalhes do projeto
4. **Integrar com CMS** para gerenciamento dinâmico

## 📝 Notas Técnicas

- **Performance**: Imagens otimizadas e lazy loading
- **Acessibilidade**: Links com `rel="noopener noreferrer"`
- **SEO**: Estrutura semântica com headings apropriados
- **Responsividade**: Design mobile-first
- **Animações**: CSS puro para performance

---

**Arquivos modificados**: `src/pages/index.astro` (linhas ~435-580 e ~1050-1200) 