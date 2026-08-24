# Contexto do site — Projetos Pro Audio

> Arquivo de referência para adicionar às pastas de projetos e conversas da OpenAI.
> Atualizado em 23 de agosto de 2026.

## Identificação

- **Nome:** Projetos Pro Audio
- **Site oficial:** https://projetosproaudio.com.br
- **Responsável e autor:** Rodrigo Chiacchio
- **Atuação:** especialista em áudio profissional, com quase 30 anos de mercado
- **Contato:** rodrigo@projetosproaudio.com.br
- **WhatsApp:** +55 19 99726-1418
- **Idioma:** português do Brasil

## O que é o site

O Projetos Pro Audio é uma plataforma editorial, comercial e de geração de contatos voltada ao mercado profissional de áudio. O site ajuda profissionais, estúdios, igrejas, empresas, casas de show, locadoras e equipes técnicas a escolher, atualizar e integrar equipamentos e sistemas de áudio.

O posicionamento combina conteúdo técnico, consultoria e orientação comercial. A proposta não é apenas divulgar equipamentos: cada recomendação deve considerar aplicação, compatibilidade, infraestrutura, orçamento, operação e possibilidade de expansão.

O site é um projeto pessoal e independente de Rodrigo Chiacchio, que atua como representante comercial e possui autonomia para definir marcas, produtos, ofertas, conteúdos e destinos comerciais. Music Company e Quanta Pro fazem parte de seu contexto profissional e podem orientar oportunidades, mas não são proprietárias do site nem limitam suas decisões editoriais e comerciais.

## Posicionamento e tom de voz

- Escrever com autoridade técnica, clareza e objetividade.
- Usar português brasileiro natural e profissional.
- Explicar os benefícios dentro de aplicações reais.
- Evitar exageros publicitários, superlativos vazios e promessas absolutas.
- Não afirmar que um produto é o melhor sem contexto técnico verificável.
- Diferenciar fatos confirmados, avaliação técnica e recomendação comercial.
- Não inventar especificações, disponibilidade, preços, acessórios incluídos ou compatibilidades.
- Quando uma informação comercial puder mudar, orientar o leitor a confirmar com o fabricante ou distribuidor.
- Relacionar produtos ao sistema completo: sala, acústica, monitoração, conversão, rede, cabeamento, workflow, equipe e expansão.

## Público principal

- Produtores musicais e engenheiros de áudio
- Estúdios de gravação, mixagem, masterização e pós-produção
- Profissionais de broadcast, podcast e áudio imersivo
- Igrejas e equipes de voluntários
- Casas de show, teatros, eventos e locadoras
- Integradores e empresas que utilizam sistemas profissionais de áudio

## Áreas de atuação

### Studio

- Upgrade de estúdio
- Monitoração e subwoofers
- Interfaces e conversão
- Outboard e setups híbridos
- Expansão multicanal
- Controladores e workflow
- Projetos completos de estúdio
- Podcast e broadcast
- Dolby Atmos e áudio imersivo

### Live Sound

- Consoles digitais
- Sistemas para igrejas
- Eventos e locadoras
- Wireless, RF e IEM
- Dante e áudio em rede
- Monitoração pessoal
- Projetos de sonorização

### Serviços

- Consultoria para estúdio profissional
- Projetos Dolby Atmos
- Consultoria de Live Sound
- Sistemas RF e wireless
- Projetos para igrejas
- Diagnóstico de setup

## Regra editorial vigente para o blog

Por enquanto, somente duas seções editoriais devem ser utilizadas. Todas as outras seções do blog estão desabilitadas e não devem receber novas publicações nem ser reativadas sem autorização explícita de Rodrigo.

### 1. Reviews

- Página de listagem: https://projetosproaudio.com.br/reviews
- Publicar nesta seção **todos os reviews de produtos**.
- O conteúdo pode apresentar especificações confirmadas, aplicações, integração, perfil de usuário, vantagens, limitações e pontos que devem ser verificados antes da compra.
- As matérias Harrison Flex-10 e Violet Audio dMix 128 pertencem a esta seção.

### 2. Guia de Equipamentos

- URL aprovada: `/guia-de-equipamentos`.
- Usar para orientar escolhas por aplicação e categoria, conectando critérios técnicos, produtos, conteúdos relacionados e o próximo passo comercial adequado.
- Indicações comerciais devem incluir o link de onde comprar quando o destino estiver confirmado.
- O formato deve seguir `docs/ROADMAP-GUIA-DE-EQUIPAMENTOS.md` e ser aprovado por Rodrigo antes da implementação.

## Conteúdos atualmente destacados em Reviews

- Violet Audio dMix 128: plataforma de mixagem, matriz, DSP e áudio em rede
- Harrison Flex-10: interface de áudio para estúdio híbrido
- PMC 6-2: monitoração, sala e aplicação
- SSL 18: interface, workflow e expansão
- SSL Fusion: processamento analógico no mix bus
- SSL Pure Drive Quad e Octo: pré-amplificação multicanal e integração digital

## Navegação principal

- **Studio:** `/studio`
- **Live Sound:** `/live-sound`
- **Conteúdos:** `/conteudos`
- **Sobre:** `/sobre-rodrigo`
- **Analisar meu setup:** `/diagnostico-de-setup`

O menu principal não possui um item chamado “Blog”. Os reviews de produtos devem ser apresentados em `/reviews`, acessível pela área de Conteúdos/Análises técnicas.

## Marcas e temas já presentes no site

- PMC
- Solid State Logic (SSL)
- Sennheiser
- Shure
- Harrison
- Violet Audio
- PreSonus StudioLive
- Livemix
- Dolby Atmos
- Dante, MADI, AES67 e áudio em rede

A presença de uma marca nesta lista não autoriza inventar vínculo comercial, representação oficial ou condição de revenda. Qualquer afirmação desse tipo precisa respeitar as informações mais recentes fornecidas por Rodrigo.

## Chamadas para ação

As chamadas devem levar o visitante a:

- analisar o próprio setup;
- conversar com um especialista;
- solicitar uma avaliação técnica;
- planejar uma compra ou expansão;
- entrar em contato por formulário, e-mail ou WhatsApp.

Evitar pressão comercial artificial. A chamada deve ser coerente com o conteúdo e com o momento de decisão do leitor.

## Informações técnicas do projeto

- **Framework:** Astro
- **Conteúdo:** Markdown/MDX com Content Collections
- **Hospedagem:** Vercel
- **Domínio:** projetosproaudio.com.br
- **Repositório principal:** branch `main`
- **Geração:** site estático com sitemap
- **Pasta dos artigos:** `src/content/blog/`
- **Página de Reviews:** `src/pages/reviews.astro`
- **Configuração geral:** `src/config/site.ts`
- **Dados das páginas:** `src/data/`
- **Imagens do blog:** `public/images/blog/`

## Instruções para uma IA trabalhando neste projeto

1. Trate este arquivo como contexto do negócio e das decisões editoriais atuais.
2. Não reative categorias, páginas ou projetos editoriais desabilitados sem autorização.
3. Todo novo review de produto deve aparecer na página `/reviews`.
4. Não use o Guia de Equipamentos para duplicar reviews ou publicar notícias gerais.
5. Não implemente o Guia de Equipamentos antes da aprovação de sua arquitetura, critérios e primeira seleção de produtos.
6. Confirme informações técnicas e comerciais potencialmente mutáveis antes de publicá-las.
7. Preserve URLs existentes sempre que possível para não prejudicar SEO e links já divulgados.
8. Não exponha chaves, tokens, senhas, variáveis de ambiente ou dados internos.
9. Antes de publicar uma alteração, validar o build, os links e a apresentação em desktop e mobile.
10. Caso uma solicitação conflite com estas regras, pedir confirmação a Rodrigo antes de alterar a estrutura editorial.

## Observação sobre atualização

Este documento representa o estado e as decisões do projeto em 23 de agosto de 2026. Quando houver mudanças de posicionamento, navegação, marcas, contatos ou regras editoriais, atualizar este arquivo para que ele continue sendo uma fonte confiável nas conversas da OpenAI.
