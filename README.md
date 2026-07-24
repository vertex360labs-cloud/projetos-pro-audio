# Projetos Pro Audio

Plataforma editorial e de aquisição de leads de Rodrigo Chiacchio para Studio e Live Sound.

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

Os destinatários são definidos por `STUDIO_LEAD_TO`, `LIVE_LEAD_TO` e `COMPLEX_LEAD_TO`.

Sem configuração de entrega, a API responde com erro explícito e a interface não mostra sucesso falso.

## Publicação

O domínio oficial permanece na Hostinger até homologação. Use Preview Deployments da Vercel e não altere DNS durante o desenvolvimento.
