# Projetos Pro Audio

Plataforma editorial e de aquisição de leads de Rodrigo Chiacchio para Studio e Live Sound.

## Diretriz editorial do blog

Por enquanto, o blog utiliza somente duas seções. As demais seções editoriais estão desabilitadas e não devem receber novas publicações nem ser reativadas sem uma orientação explícita.

1. **Reviews** (`/reviews`): seção destinada a todos os reviews de produtos.
2. **Guia de Compras**: seção destinada exclusivamente a indicações de produtos, acompanhadas do link de onde comprar.

O formato definitivo do **Guia de Compras** ainda será definido a partir de um modelo de referência. Até essa definição, não criar nem presumir uma nova estrutura para essa seção.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Verificação

```bash
npm run check
npm run lint
npm test
npm run build
npm audit
```

## Formulário

O formulário envia para `/api/lead`, uma função Vercel. Configure as variáveis descritas em `.env.example`.

É possível usar:

- `LEAD_WEBHOOK_URL`; ou
- `RESEND_API_KEY` e `LEAD_FROM`.

O projeto Vercel usa a integração oficial do Resend. Enquanto o domínio de envio não estiver verificado, mantenha `LEAD_FROM="Projetos Pro Audio <onboarding@resend.dev>"`. Depois da verificação DNS, substitua pelo remetente do domínio oficial.

Os destinatários são definidos por `STUDIO_LEAD_TO`, `LIVE_LEAD_TO` e `COMPLEX_LEAD_TO`.

Sem configuração de entrega, a API responde com erro explícito e a interface não mostra sucesso falso.

## Publicação

O domínio oficial permanece na Hostinger até homologação. Use Preview Deployments da Vercel e não altere DNS durante o desenvolvimento.
