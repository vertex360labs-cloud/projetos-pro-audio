# Migração e reposicionamento 2026

## Produção

O domínio `projetosproaudio.com.br` permanece na Hostinger durante desenvolvimento e homologação. Não alterar DNS ou nameservers antes da aprovação final.

## URLs públicas preservadas

| URL da Hostinger | Situação na nova base |
|---|---|
| `/` | Preservada |
| `/contato` | Preservada |
| `/projetos` | Preservada |
| `/reviews` | Preservada |
| `/review-pmc-6-2-a-precisao-absoluta-que-redefine-o-monitoramento-de-elite` | Preservada e revisada |
| `/review-ssl-18` | Preservada e revisada |
| `/review-ssl-fusion-o-pulo-do-gato-para-a-sonoridade-de-console-no-seu-rack` | Preservada e revisada |
| `/review-ssl-pure-drive-quad-and-octo-a-evolucao-do-pre-amp-analogico-para-a-era-digital` | Preservada e revisada |

Não são necessários redirects para as oito URLs públicas conhecidas.

## Conteúdo migrado

- Trajetória profissional pública de Rodrigo Chiacchio.
- Quatro reviews, com linguagem promocional removida e URLs preservadas.
- Imagens reais de Rodrigo, equipamentos, projetos e reviews.
- Temas das páginas Projetos, Reviews e Contato.

O HTML do Hostinger Website Builder não foi copiado.

## Arquivos removidos ou substituídos

- `tailwind.config.mjs`: removido porque a base não utilizava utilitários Tailwind e a integração antiga bloqueava a atualização segura do Astro.
- `src/content/config.ts`: substituído por `src/content.config.ts`, exigido pelas Content Collections atuais do Astro.

As imagens duplicadas em `assets/` foram mantidas nesta etapa. A remoção poderá ocorrer em um commit isolado depois da confirmação de histórico e de autoria dos arquivos.

## Publicação

1. Configurar variáveis do formulário.
2. Criar Preview Deployment.
3. Validar as oito URLs antigas na Preview.
4. Validar Search Console, sitemap e formulário.
5. Aprovar conteúdo e visual.
6. Somente então planejar registros DNS.
