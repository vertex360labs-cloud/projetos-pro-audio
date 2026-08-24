# Roadmap — Guia de Equipamentos

## Objetivo

Planejar, formatar, validar e publicar uma página chamada **Guia de Equipamentos** que ajude o visitante a avançar de uma necessidade real para uma seleção coerente de produtos e, quando houver intenção comercial, para um contato qualificado ou link de compra.

“Guia de Equipamentos” passa a ser o nome de trabalho atualizado da iniciativa anteriormente chamada “Guia de Compras”. A implementação só começa após aprovação da arquitetura, dos critérios e do primeiro recorte de produtos.

- **URL aprovada:** `/guia-de-equipamentos`.

## Papel na jornada do site

O Guia deve ocupar o espaço entre conteúdo editorial e decisão comercial:

1. O visitante parte de uma aplicação, problema ou categoria.
2. O Guia explica critérios de escolha e compatibilidade.
3. O visitante encontra produtos adequados ao cenário, sem ranking artificial ou alegações não verificadas.
4. Reviews e comparativos aprofundam a avaliação.
5. O caminho termina em link de compra, WhatsApp, contato ou diagnóstico do setup, conforme complexidade e intenção.

O Guia faz parte de uma máquina própria de conteúdo e qualificação destinada a complementar as oportunidades atualmente originadas pelo Chat Music Company. Essa finalidade é interna: a experiência pública deve continuar centrada em ajudar o visitante a tomar uma decisão tecnicamente coerente.

## Regras já definidas

- Reviews de produtos continuam em `/reviews`; não serão duplicados como artigos do Guia.
- Notícias gerais não pertencem ao Guia.
- Indicações comerciais devem conter link de onde comprar quando o destino estiver confirmado.
- O Guia não será um catálogo indiscriminado nem uma reprodução da planilha de vendas.
- Dados de vendas, margens, quantidades, faturamento e critérios internos nunca serão publicados.
- Recomendações devem considerar aplicação, compatibilidade, infraestrutura, orçamento, operação e expansão.
- PreSonus/Fender Studio e Violet Audio entram como linhas estratégicas da Quanta Pro, claramente separadas da evidência histórica de vendas da Music Company.
- Categorias editoriais desabilitadas não serão reativadas apenas para acomodar o Guia.

## Arquitetura a aprovar

### Entrada por necessidade

- Montar ou melhorar Home Studio.
- Atualizar um estúdio profissional.
- Escolher interface e conversão.
- Escolher monitoração.
- Integrar outboard e setup híbrido.
- Escolher microfones e captação.
- Produção musical e controle de DAW.
- Som ao vivo, igrejas e eventos.
- Consoles, monitoração pessoal e áudio em rede.

### Entrada por categoria

- Interfaces e conversores.
- Monitores e subwoofers.
- Outboard, pré-amplificadores e processamento.
- Microfones.
- Controladores e produção.
- Consoles e mixers.
- Cabos, patch e infraestrutura.
- Soluções de Live Sound e áudio em rede.

### Componentes previstos

- Introdução curta com o problema que a categoria resolve.
- Critérios de escolha verificáveis.
- Filtros simples por aplicação, nível de sistema ou faixa de investimento, somente se agregarem clareza.
- Cards de produtos com aplicação, perfil indicado, integrações, pontos de atenção e próximo passo.
- Links para reviews, comparativos e páginas de solução relacionadas.
- CTA contextual: comprar, conversar, analisar setup ou solicitar especificação.

## Primeira onda recomendada

A primeira versão deve ser curta e concentrada nas áreas de maior evidência comercial:

1. Interfaces e conversão.
2. Monitoração de estúdio.
3. Outboard e processamento.
4. Microfones.
5. Controladores e produção.
6. Consoles e mixers.

PreSonus/Fender Studio e Violet Audio devem compor uma trilha prioritária própria, mesmo sem aparecerem como marcas vendidas no consolidado da Music Company. Essa trilha responde às metas comerciais preliminares registradas no plano editorial e comercial.

## Fases

### Fase 1 — Definição

- Confirmar o nome público e aprovar a posição na navegação; a URL `/guia-de-equipamentos` já está aprovada.
- Aprovar modelo de card, critérios de inclusão e destino dos links comerciais.
- Definir primeiro conjunto de produtos e disponibilidade atual.
- Definir quais páginas exigem contato consultivo em vez de compra direta.

### Fase 2 — Conteúdo e estrutura

- Criar matriz categoria → aplicação → produto → conteúdo → CTA.
- Revisar dados técnicos e comerciais em fontes atuais.
- Preparar textos do Guia e conexões com reviews e páginas existentes.
- Definir metadados, dados estruturados, links internos e rastreamento de eventos.

### Fase 3 — Implementação

- Construir a página preservando a identidade e os componentes atuais.
- Incluir navegação, estados responsivos, acessibilidade e CTAs contextuais.
- Não expor dados internos ou linguagem sobre geração de leads.

### Fase 4 — Validação e publicação

- Validar desktop e mobile.
- Validar links, formulário, WhatsApp, eventos e rotas relacionadas.
- Executar check, lint, testes, build e `git diff --check`.
- Publicar primeiro em Preview Deployment; produção somente após homologação.

## Dependências antes da implementação

- Definição do link ou canal de compra por linha de produto.
- Confirmação de disponibilidade e portfólio atual.
- Aprovação do primeiro conjunto de produtos.
- Aprovação da presença do Guia no menu.
