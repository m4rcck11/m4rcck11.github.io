# 🚀 Portfólio Desenvolvedor Full Stack

Um portfólio moderno e interativo construído com **Astro**, **TypeScript** e **Tailwind CSS**.

## ✨ Características

- 🎨 **Design Moderno**: Interface limpa e profissional
- 🌙 **Modo Escuro/Claro**: Alternância automática de tema
- 📱 **Responsivo**: Funciona perfeitamente em todos os dispositivos
- ⚡ **Performance**: Otimizado para velocidade máxima
- 🎭 **Animações Suaves**: Efeitos visuais elegantes
- 🎯 **SEO Otimizado**: Meta tags e estrutura semântica
- 🔧 **TypeScript**: Tipagem estática para maior confiabilidade

## 🛠️ Tecnologias

- [Astro](https://astro.build/) - Framework web moderno
- [TypeScript](https://www.typescriptlang.org/) - JavaScript com tipos
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Inter Font](https://fonts.google.com/specimen/Inter) - Tipografia moderna

## 🚀 Como executar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou pnpm

### Instalação

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Construir para produção
npm run build

# Visualizar build de produção
npm run preview
```

### Scripts disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Constrói para produção
- `npm run preview` - Visualiza build local
- `npm run type-check` - Verifica tipos TypeScript

## 📁 Estrutura do projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.astro    # Navegação principal
│   ├── Hero.astro      # Seção hero
│   ├── About.astro     # Seção sobre
│   ├── Skills.astro    # Habilidades técnicas
│   ├── Projects.astro  # Portfólio de projetos
│   ├── Contact.astro   # Formulário de contato
│   └── Footer.astro    # Rodapé
├── layouts/
│   └── Layout.astro    # Layout principal
├── pages/
│   └── index.astro     # Página principal
└── styles/
    └── global.css      # Estilos globais
```

## 🎨 Customização

### Cores
As cores principais podem ser alteradas no arquivo `tailwind.config.cjs`:

```js
colors: {
  primary: {
    // Suas cores aqui
  }
}
```

### Conteúdo
Edite os componentes em `src/components/` para personalizar:
- Informações pessoais
- Projetos
- Habilidades
- Links de redes sociais

## 📱 Funcionalidades Interativas

- ✅ Navegação suave entre seções
- ✅ Alternância de tema dark/light
- ✅ Animações on-scroll
- ✅ Efeito typing no hero
- ✅ Filtros de projetos
- ✅ Formulário de contato funcional
- ✅ Botão "voltar ao topo"
- ✅ Menu mobile responsivo

## 🚀 Deploy

### GitHub Pages (Recomendado)

1. **Crie um repositório no GitHub** com o nome `m4rcck11.github.io`
2. **Faça push do código** para o repositório
3. **Configure GitHub Pages**:
   - Vá em Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages (será criado automaticamente pelo workflow)
   - Folder: / (root)
4. **O deploy será automático** a cada push na branch main
5. **Seu site estará disponível em**: `https://m4rcck11.github.io`

### Vercel (Alternativa)

1. **Conecte seu repositório** ao Vercel
2. **Configure o projeto**:
   - Framework Preset: Astro
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. **Deploy automático** a cada push

### Netlify

1. **Conecte seu repositório** ao Netlify
2. **Configure o build**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy automático** a cada push

## 🔧 Configuração para GitHub Pages

O projeto já está configurado para funcionar no GitHub Pages com:

- ✅ Workflow do GitHub Actions (`.github/workflows/deploy.yml`)
- ✅ Configuração do Astro para domínio raiz
- ✅ Build estático otimizado
- ✅ Compatível com `m4rcck11.github.io`

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório! 