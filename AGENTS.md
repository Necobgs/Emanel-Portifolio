<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Instruções e Regras Permanentes - Emanuel Portfolio

Este documento estabelece as diretrizes arquiteturais, padrões de código, restrições e convenções permanentes para o desenvolvimento deste projeto no Antigravity.

---

## 1. Arquitetura e Estrutura de Diretórios
- **Framework & Router**: Next.js 16+ com App Router nativo e TypeScript em modo estrito (`strict: true`).
- **Raiz do Projeto (Sem pasta `src/`)**: A pasta `app/` reside diretamente na raiz. Não criar nem mover arquivos para `src/`.
- **Mapeamento de Módulos**: O alias `@/*` aponta para `./*` a partir da raiz (ex.: `@/components/...`, `@/data/...`, `@/lib/...`).
- **Preservação de Configurações**: Preservar configurações já validadas em `tsconfig.json`, `next.config.ts` (Turbopack, PPR, Cache Components) e `globals.css` (Tailwind CSS v4 via `@import "tailwindcss"` e `@theme`). Não substituir nem reescrever arquivos existentes sem inspeção prévia.

Organização de pastas padronizada:
```
emanuel-portfolio/
├── app/                  # App Router: layout, page, globals.css, favicon
├── components/           # Componentes modulares
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Seções da landing page (Hero, Cases, Pipeline Flow, Stack, Trajetória, Contato)
│   └── ui/               # Primitivos reutilizáveis (TerminalWindow, ProjectCard, TelemetryBadge, Button)
├── data/                 # Conteúdo tipado centralizado (profile, projects, skills, experience)
├── lib/                  # Helpers e utilitários compartilhados (formatações, cn helper)
└── public/               # Assets estáticos, ícones e currículo em PDF
```

---

## 2. Paradigma de Renderização (RSC vs. Client Components)
- **Priorizar React Server Components (RSC)**: Por padrão, componentes de página e seções estruturais devem ser Server Components para garantir performance, streaming otimizado e menor carga de JavaScript no cliente.
- **Client Components Restritos**: Utilizar `'use client'` exclusivamente na fronteira de componentes que exigem interatividade de navegador, listeners, hooks (`useState`, `useEffect`) ou APIs de animação (Motion / GSAP).
- **Isolamento de Estado**: Componentes interativos não devem inflar a árvore inteira para Client Components; manter os nós de servidor o mais alto possível na hierarquia.

---

## 3. Gestão de Conteúdo e Integridade de Informações
- **Desacoplamento de Conteúdo**: Projetos, competências técnicas, histórico profissional e links devem ser mantidos em arquivos editáveis e fortemente tipados em `data/` (`profile.ts`, `projects.ts`, `skills.ts`, `experience.ts`).
- **Veracidade Rigorosa**: Não inventar cargos, datas, métricas, clientes, resultados quantitativos, URLs ou certificações. Utilizar estritamente os dados validados do currículo e do perfil profissional do Emanuel Borges de Oliveira.
- **Sigilo Profissional**: Não expor regras de negócio confidenciais, clientes corporativos sensíveis ou códigos proprietários de atuações anteriores (ex.: Góes & Nicoladelli, Agrosys).
- **Placeholders Explícitos**: Para métricas ou dados quantitativos ainda não definidos pelo desenvolvedor, utilizar placeholders padronizados e visíveis (ex.: `[A DEFINIR: métrica X]`).
- **Idioma Padrão**: Todos os textos, títulos, descrições e interfaces devem utilizar Português do Brasil (pt-BR).

---

## 4. Engenharia de Animação e Estilização
- **Divisão Clara entre Motion e GSAP**:
  - **Motion (`motion/react`)**: Biblioteca primária para microinterações de UI, entradas no viewport (`whileInView`), feedback de hover, modais e transições de abas.
  - **GSAP (`gsap` + `@gsap/react`)**: Utilizar somente quando timelines complexas, orquestrações de múltiplos nós coordenados ou visualizações interativas densas no Hero (ex.: pipeline animado de RPA/Backend com SVG) justificarem.
- **Acessibilidade em Animações (`prefers-reduced-motion`)**: Respeitar obrigatoriamente a preferência do usuário por redução de movimento. Desativar animações pesadas e garantir transições instantâneas ou transições sutis de opacidade para acessibilidade.
- **Tailwind CSS v4**: Utilizar a sintaxe nativa do Tailwind v4 (`@theme`, variáveis de cor inline, tokens limpos), sem diretivas obsoletas ou redundantes.

---

## 5. Qualidade de Código, Acessibilidade e SEO
- **Acessibilidade (a11y)**: HTML semântico (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`), suporte completo à navegação por teclado, contraste adequado de cores em tema escuro e atributos `aria-*` onde aplicável.
- **SEO & Metadados**: Configurar metadados completos em `app/layout.tsx` (OpenGraph, Twitter Cards, descrição profissional técnica, favicon e title dinâmico).
- **Responsividade Total**: Layout fluido do mobile (320px) até telas ultrawide (2k/4k), garantindo que terminais e diagramas adaptem-se elegantemente em telas reduzidas.
- **Economia de Dependências**: Evitar instalação de pacotes redundantes ou abstrações pesadas desnecessárias.

---

## 6. Verificação Contínua e Rigor Técnico
- **Validação de Build e Lint**: Após qualquer modificação relevante de código ou estrutura, executar `npm run lint` e testar a compilação (`npm run build`). Qualquer erro ou warning introduzido deve ser imediatamente investigado e corrigido.
- **Veracidade nos Relatórios**: Nunca declarar testes ou comandos como executados sem tê-los rodado de fato.
- **Documentação de Mudanças**: Manter comandos documentados e variáveis de ambiente exemplificadas em `.env.example` caso venham a ser necessárias.

---

## 7. Comandos de Operação
- `npm run dev`: Inicia o servidor local de desenvolvimento com Turbopack.
- `npm run build`: Cria o build otimizado de produção com Turbopack.
- `npm run start`: Inicia o servidor de produção local.
- `npm run lint`: Executa a verificação estática de código com o ESLint.
