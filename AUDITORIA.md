# Auditoria do projeto Projetos Pro Audio

Data da auditoria: 24 de julho de 2026

## Resumo executivo

Nenhum arquivo existente foi alterado, apagado ou sobrescrito durante a auditoria.

**Recomendação: B) aproveitar conteúdo e componentes**, criando uma base Astro atualizada e migrando cuidadosamente o conteúdo do site publicado.

O repositório é uma boa prova de conceito, mas não representa o site atualmente publicado e ainda não está pronto para substituir a produção.

## Stack e dependências

- Framework: Astro
- Versão declarada: `^5.9.0`
- Versão instalada: `5.18.2`
- Renderização: site estático
- Linguagem: Astro + TypeScript em modo `strict`
- Conteúdo: MDX e Astro Content Collections
- Estilos: Tailwind CSS 3, embora a maior parte esteja em CSS próprio
- Node modules: já instalados
- Package manager: npm, lockfile v3

Dependências instaladas:

- Astro `5.18.2`
- `@astrojs/mdx` `4.3.14`
- `@astrojs/sitemap` `3.7.3`
- `@astrojs/tailwind` `6.0.2`
- Tailwind CSS `3.4.19`

Configurações principais:

- `package.json`
- `astro.config.mjs`
- `tailwind.config.mjs`
- `tsconfig.json`

Não existe README próprio do projeto. O único arquivo semelhante, `readme-pasta-projetos.md`, é um arquivo local genérico, não rastreado pelo Git.

## Estado do Git

- Branch atual: `main`
- Commit atual: `d780383`
- Mensagem: `Migrate site to Astro 5 with SEO architecture`
- Upstream: `origin/main`
- Diferença local/remota registrada: `0 à frente / 0 atrás`
- Remote GitHub: `https://github.com/vertex360labs-cloud/projetos-pro-audio.git`
- Alteração não commitada encontrada antes da auditoria:
  - `?? readme-pasta-projetos.md`

O repositório está configurado e conectado ao GitHub por `origin`. Nenhuma alteração existente foi descartada.

## Páginas e rotas implementadas

O build gera 19 páginas.

### Home e blog

- `/`
- `/blog`
- `/blog/como-escolher-monitores-pmc`
- `/blog/dolby-atmos-sala-pequena`
- `/blog/pmc-vs-genelec-guia`

### Serviços

- `/servicos/consultoria-estudio-profissional`
- `/servicos/consultoria-live-sound`
- `/servicos/projetos-dolby-atmos`
- `/servicos/projetos-para-igrejas`
- `/servicos/sistemas-rf-wireless`

### Comparativos

- `/comparativos/pmc-vs-genelec`
- `/comparativos/shure-vs-sennheiser`
- `/comparativos/ssl-vs-avid`

### Guias

- `/guias/como-montar-estudio-dolby-atmos`
- `/guias/guia-rf-para-igrejas`

### Marcas

- `/marcas/pmc`
- `/marcas/sennheiser`
- `/marcas/shure`
- `/marcas/ssl`

Não existem páginas dedicadas para contato, projetos, reviews, política de privacidade, termos ou erro 404.

## Componentes implementados

- Layout base
- Layout de artigo
- Layout de serviço
- Layout de comparativo
- Header responsivo
- Footer
- Breadcrumb
- FAQ/accordion
- CTA com formulário
- Caixa de autor
- Artigos relacionados
- Renderização genérica de seções
- Tempo de leitura
- Sumário de artigos
- Utilitários de SEO e Schema.org

A estrutura de componentes é limpa e compreensível. As páginas institucionais usam dados centralizados em `src/data/pages.ts`.

## Conteúdo e imagens

Existem três artigos MDX, mas são curtos e parecem conteúdo inicial de SEO, não artigos aprofundados.

Existem nove imagens locais:

- Hero de estúdio
- Microfone
- Teatro
- Line array
- Diagrama
- Blueprint
- Gráfico
- CTA
- Logo

As mesmas nove imagens aparecem duplicadas em `assets/` e `public/images/`, com hashes idênticos. A pasta `assets/` é legado e está atualmente ignorada pelo `.gitignore`, embora seus arquivos já estejam rastreados.

### Comparação com o site atual

O site publicado em <https://projetosproaudio.com.br/> está no **Hostinger Website Builder**, não na Vercel.

Ele possui oito URLs no sitemap atual:

- Home
- Contato
- Projetos
- Reviews
- Quatro reviews específicos de SSL e PMC

Esses quatro reviews, as páginas de projetos e contato e as imagens reais da produção **não foram importados para este repositório**.

O repositório criou uma arquitetura e textos novos. Há sobreposição temática — SSL, PMC, estúdios e consultoria — mas não uma migração fiel.

## Vercel e GitHub

### GitHub

- Remote configurado corretamente.
- Branch `main` acompanha `origin/main`.
- Não há GitHub Actions ou workflows no repositório.

### Vercel

- Não existe `.vercel/project.json`.
- Não existe `vercel.json`.
- A conta Vercel conectada consultada não possui projetos.
- Não foi encontrada evidência de deployment ou vínculo deste repositório com a Vercel.
- O domínio atual aponta para Hostinger.

Portanto: **GitHub configurado; Vercel não conectada**.

## Formulários e integrações

Existe um formulário visual com:

- Nome
- Empresa
- WhatsApp
- E-mail
- Tipo de projeto
- Faixa de investimento
- Descrição do cenário

Porém ele:

- não envia dados;
- não possui API;
- não possui webhook;
- não possui integração com CRM, e-mail ou WhatsApp;
- apenas registra o payload no console;
- apresenta uma mensagem de sucesso simulada e limpa o formulário.

Isso pode causar perda silenciosa de leads caso seja publicado como está.

Não existem Analytics, Google Tag Manager, Meta Pixel, Hotjar, Clarity ou outra telemetria.

Também faltam política de privacidade, consentimento e tratamento explícito de LGPD para o formulário.

## SEO

### Já implementado

- Titles e descriptions
- Canonical
- Open Graph
- Twitter Cards
- Robots meta
- `robots.txt`
- Sitemap automático
- Schema Organization
- Schema Article
- Schema Service
- Schema FAQ
- Schema Breadcrumb
- Datas de publicação e atualização
- Autor e tempo de leitura

### Pendências

- favicon local;
- redirects das URLs atuais;
- preservação dos quatro reviews existentes;
- imagem social específica por página;
- validação dos links sociais;
- páginas legais;
- dados reais de autor/empresa;
- SEO local/comercial;
- integração com Search Console;
- Analytics;
- páginas de categorias para serviços, marcas, guias e comparativos.

## Problemas técnicos

1. `npm audit` encontrou 8 vulnerabilidades:
   - 5 altas
   - 3 baixas
   - 0 críticas

   Incluem Astro, Sharp, PostCSS, js-yaml, SVGO e esbuild. A correção completa provavelmente exige atualização major do Astro.

2. O projeto usa Astro 5, enquanto o relatório atual de segurança recomenda versões mais novas.

3. Formulário simula envio sem persistência.

4. Não há lint, testes, Astro Check ou CI.

5. CSS global monolítico com aproximadamente 1.020 linhas.

6. Imagens públicas não passam pelo pipeline de otimização do Astro.

7. Imagens duplicadas em duas pastas.

8. Conteúdo institucional muito curto em várias páginas — algumas têm apenas um título e um parágrafo.

9. Falta página 404.

10. Acessibilidade parcial:
    - FAQ sem `aria-expanded` e associação `aria-controls`;
    - menu móvel não atualiza completamente seu estado ao fechar por link;
    - vários detalhes dependem de JavaScript simples sem testes.

11. As URLs do repositório não correspondem às URLs da produção, criando risco de perda de SEO.

12. O arquivo `dist` existente estava desatualizado: continha apenas home e blog, embora o build atual gere 19 páginas.

## Qualidade e dificuldade de alteração visual

Qualidade estrutural: **boa para uma prova de conceito, mediana para produção**.

Pontos positivos:

- Separação entre layouts, componentes, dados e conteúdo.
- Tipagem TypeScript.
- Conteúdo MDX.
- Páginas reutilizam layouts.
- SEO centralizado.
- Build rápido e totalmente estático.

Dificuldade para mudar o visual: **baixa a média**.

É fácil mudar cores, fontes, espaçamento e componentes globais. Entretanto, o CSS de 1.020 linhas concentra todo o design em um único arquivo; uma reformulação maior se beneficiaria de separar tokens, layout, componentes e páginas.

## O que já está pronto

- Base Astro funcional.
- Home completa visualmente.
- Header, footer, CTA, FAQ e cards.
- Arquitetura inicial de SEO.
- Blog MDX dinâmico.
- 19 rotas estáticas.
- Sitemap e robots.
- Responsividade básica.
- Build funcional.

## O que está incompleto

- Migração do site atual.
- Reviews e projetos reais.
- Página de contato.
- Formulário funcional.
- Integrações e Analytics.
- Deploy e configuração da Vercel.
- Redirects.
- CI, lint e testes.
- Conteúdo aprofundado.
- LGPD e páginas legais.
- Otimização de imagens.
- Documentação do projeto.

## O que reaproveitar

- Estrutura Astro.
- Layout base.
- Componentes de navegação, breadcrumb, FAQ e artigos.
- Content Collection do blog.
- Utilitários de SEO e Schema.
- Estrutura de dados das páginas.
- Tokens visuais e parte do CSS.
- Sitemap e robots.
- Ideias de serviços, guias e comparativos.

## O que descartar ou reconstruir

- Simulação atual do formulário.
- Conteúdo genérico e superficial das páginas auxiliares.
- Duplicação da pasta `assets/`.
- Dependências atuais sem atualização.
- CSS monolítico, caso o visual seja amplamente redesenhado.
- Informações fictícias ou genéricas de autor, redes sociais e empresa.
- `dist` antigo como referência de estado do projeto.

## Resultado das verificações

- Instalação: não executada; `node_modules` já existia e `npm ci` alteraria arquivos locais. A árvore instalada foi validada com `npm ls`.
- Lint: não existe script ou configuração.
- Testes: não existem scripts ou arquivos de teste.
- Build: executado com sucesso em uma cópia temporária, sem tocar no projeto.
- Resultado: **19 páginas construídas em 1,46 s**.
- Sitemap: gerado corretamente.
- Git após build: permaneceu com somente o arquivo não rastreado original.

## Árvore resumida

```text
projetos-pro-audio/
├── assets/                 # duplicata legada das imagens
├── public/
│   ├── images/             # 9 imagens
│   └── robots.txt
├── src/
│   ├── components/         # 8 componentes
│   ├── config/
│   │   └── site.ts
│   ├── content/
│   │   ├── blog/           # 3 artigos MDX
│   │   └── config.ts
│   ├── data/
│   │   ├── faq.ts
│   │   └── pages.ts
│   ├── layouts/            # 4 layouts
│   ├── pages/
│   │   ├── blog/
│   │   ├── comparativos/
│   │   ├── guias/
│   │   ├── marcas/
│   │   ├── servicos/
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css
│   └── utils/
├── astro.config.mjs
├── package.json
├── package-lock.json
├── tailwind.config.mjs
└── tsconfig.json
```

## Conclusão

Não é recomendado publicar nem continuar esta base exatamente como está.

O melhor caminho é preservar os componentes e a arquitetura SEO, atualizar a stack, importar integralmente o conteúdo da Hostinger e reconstruir a camada visual e o conteúdo dentro de uma base Astro organizada.

Isso corresponde à opção **B) aproveitar apenas conteúdo e componentes**.
