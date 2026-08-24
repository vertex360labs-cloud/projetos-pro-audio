# Orientações para agentes — Projetos Pro Audio

## Escopo deste repositório

Este é o repositório principal do site **Projetos Pro Audio**, de Rodrigo Chiacchio. O projeto é uma plataforma editorial, técnica e comercial para o mercado profissional de áudio. Seu objetivo é ajudar profissionais e organizações a escolher, atualizar e integrar equipamentos e sistemas considerando aplicação, compatibilidade, infraestrutura, orçamento, operação e expansão.

O posicionamento combina autoridade técnica, conteúdo, consultoria e orientação comercial. A comunicação pública deve usar português brasileiro natural, claro, objetivo e profissional, sem exageros publicitários ou promessas absolutas.

## Públicos principais

- Produtores musicais, engenheiros de áudio e técnicos.
- Estúdios de gravação, mixagem, masterização e pós-produção.
- Profissionais de broadcast, podcast e áudio imersivo.
- Igrejas e equipes de voluntários.
- Casas de show, teatros, eventos e locadoras.
- Integradores, empresas e equipes que utilizam áudio profissional.

## Propriedade, autonomia e atuação comercial

- O Projetos Pro Audio é um site pessoal, editorial, consultivo e comercial de Rodrigo Chiacchio.
- Rodrigo atua como representante comercial e possui autonomia para definir marcas, produtos, ofertas, conteúdos, posicionamento e destinos comerciais do site.
- O site não pertence à Music Company nem à Quanta Pro e suas decisões não dependem de autorização dessas empresas.
- Music Company e Quanta Pro podem fornecer portfólio, histórico, contexto comercial e oportunidades, mas não limitam a independência editorial ou comercial do Projetos Pro Audio.
- Afirmações públicas específicas sobre representação oficial, exclusividade, estoque, preço ou disponibilidade devem refletir a orientação atual fornecida por Rodrigo.
- **PreSonus**, **Fender Studio/PreSonus** e **Violet Audio** são linhas estratégicas da Quanta Pro e podem orientar planejamento editorial e técnico quando pertinente.
- A planilha em `data/private/` é referência interna de negócio. Nunca publicar seus dados, expô-la no site ou adicioná-la ao Git.

## Áreas prioritárias

- Home Studio e estúdio profissional.
- Interfaces de áudio e conversão.
- Monitoração e subwoofers.
- Microfones.
- Outboard e setups híbridos.
- Produção musical, workflow e expansão multicanal.
- Som ao vivo, eventos, locadoras e igrejas.
- Áudio em rede, Dante, MADI, AES67, wireless, RF e IEM.
- Integração, diagnóstico, infraestrutura e soluções avançadas.

Dolby Atmos e áudio imersivo devem aparecer como soluções avançadas complementares dentro desse universo, e não como foco principal ou definição central do site.

## Regras editoriais e públicas

- Preservar a identidade visual, a arquitetura, a navegação e as URLs existentes. Mudanças relevantes exigem solicitação explícita.
- Não inserir no conteúdo público textos internos, prompts, instruções operacionais, notas para agentes, dados privados ou linguagem sobre "geração de leads".
- Metas de vendas, desempenho individual, necessidade de renda, origem interna dos contatos e dados do Chat Music Company são confidenciais e nunca devem aparecer no conteúdo público.
- Não inventar especificações, preços, disponibilidade, acessórios, compatibilidades, resultados, vínculos comerciais ou qualquer afirmação não verificada.
- Distinguir fatos confirmados, avaliação técnica e recomendação comercial.
- Confirmar informações técnicas ou comerciais mutáveis em fonte confiável antes da publicação.
- Relacionar produtos ao sistema completo: sala, acústica, monitoração, conversão, rede, cabeamento, workflow, equipe e expansão.
- Preservar o tom técnico e consultivo. Evitar pressão comercial artificial, superlativos vazios e afirmações de que algo é "o melhor" sem contexto verificável.
- Não expor chaves, tokens, senhas, variáveis de ambiente ou dados internos.
- Preservar todas as alterações existentes do usuário. Não descartar, sobrescrever ou reformular trabalho fora do escopo pedido.
- Evitar mudanças amplas, destrutivas ou não relacionadas. Não fazer commit, push, deploy ou alteração de DNS sem autorização explícita.

## Objetivo comercial interno

- O site deve funcionar como uma máquina própria e contínua de conteúdo, descoberta e qualificação de oportunidades.
- O objetivo é complementar os contatos recebidos pelo Chat Music Company e reduzir a dependência desse único canal.
- Conteúdo, Guia de Equipamentos, reviews, páginas de solução e CTAs devem formar jornadas mensuráveis até compra, WhatsApp, contato ou diagnóstico.
- As prioridades e metas comerciais internas estão em `docs/PLANO-EDITORIAL-E-COMERCIAL.md` e não devem ser reproduzidas publicamente.

## Regra editorial vigente do blog

- **Reviews** (`/reviews`): todos os reviews de produtos pertencem a esta seção.
- **Guia de Equipamentos** (nome de trabalho atualizado; anteriormente “Guia de Compras”): indicações e caminhos de escolha de produtos, com link de onde comprar quando a indicação for comercial.
- As demais seções editoriais permanecem desabilitadas e não devem ser reativadas sem autorização explícita.
- O formato definitivo do Guia de Equipamentos deve ser planejado e aprovado por Rodrigo antes da implementação.
- A URL aprovada é `/guia-de-equipamentos`.

## Fontes obrigatórias de contexto

Antes de qualquer mudança editorial ou estrutural relevante, ler:

1. `docs/CONTEXTO-SITE-PARA-OPENAI.md` — contexto do negócio e decisões editoriais vigentes.
2. `docs/ROADMAP-GUIA-DE-EQUIPAMENTOS.md` — decisões já tomadas e pendências do Guia de Equipamentos.
3. `README.md` — operação atual do projeto.
4. Quando aplicável, `MIGRACAO-2026.md` e `AUDITORIA.md`, lembrando que documentos históricos podem estar desatualizados.

Se houver conflito, seguir primeiro uma instrução explícita e recente de Rodrigo, depois este `AGENTS.md`, depois o contexto vigente em `docs/`. Pedir confirmação antes de alterar uma decisão editorial estabelecida.

## Estrutura técnica

- Framework: Astro.
- Conteúdo: Markdown/MDX com Content Collections.
- Hospedagem prevista: Vercel; o domínio em produção permanece na Hostinger até homologação.
- Artigos: `src/content/blog/`.
- Página de Reviews: `src/pages/reviews.astro`.
- Configuração geral: `src/config/site.ts`.
- Dados das páginas: `src/data/`.
- Imagens do blog: `public/images/blog/`.

## Comandos de trabalho

Use Node.js 24, conforme `package.json`.

```bash
npm install
npm run dev
```

Antes de entregar alterações, execute verificações proporcionais ao escopo; para a validação completa:

```bash
npm run check
npm run lint
npm test
npm run build
```

Para conferir a compilação local:

```bash
npm run preview
```

Também execute `git diff --check`. Em mudanças visuais, valide desktop e mobile. Em mudanças editoriais, confira links, rotas, metadados e inclusão de novos reviews em `/reviews`.
