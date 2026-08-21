const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const attempts = new Map();

const text = (value, max = 2000) =>
  String(value ?? '').trim().replace(/[<>]/g, '').slice(0, max);

export function validateLead(input) {
  const lead = {
    nome: text(input.nome, 120),
    empresa: text(input.empresa, 160),
    whatsapp: text(input.whatsapp, 40),
    email: text(input.email, 180).toLowerCase(),
    interesse: text(input.interesse, 60),
    operacao: text(input.operacao, 160),
    investimento: text(input.investimento, 80),
    prazo: text(input.prazo, 80),
    cidade: text(input.cidade, 120),
    equipamentos: text(input.equipamentos),
    cenario: text(input.cenario, 4000),
    consentimento: text(input.consentimento, 10),
    origem: text(input.origem, 240),
    website: text(input.website, 200),
  };

  if (lead.website) return { ok: false, status: 400, message: 'Não foi possível validar o envio.' };
  if (!lead.nome || !lead.whatsapp || !lead.email || !lead.interesse || !lead.cenario) {
    return { ok: false, status: 400, message: 'Preencha todos os campos obrigatórios.' };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return { ok: false, status: 400, message: 'Informe um e-mail válido.' };
  }
  if (lead.consentimento !== 'sim') {
    return { ok: false, status: 400, message: 'É necessário aceitar a Política de Privacidade.' };
  }
  return { ok: true, lead };
}

export function routeLead(interesse, env = process.env) {
  const live = ['live-sound', 'igreja', 'eventos-locacao'];
  if (live.includes(interesse)) {
    return { route: 'live-sound', to: env.LIVE_LEAD_TO || env.STUDIO_LEAD_TO };
  }
  if (interesse === 'outro') {
    return { route: 'triagem', to: env.COMPLEX_LEAD_TO || env.STUDIO_LEAD_TO };
  }
  return { route: 'studio', to: env.STUDIO_LEAD_TO };
}

export function buildLeadEmail(lead, route) {
  const rows = [
    ['Rota', route],
    ['Nome', lead.nome],
    ['Empresa/estúdio', lead.empresa],
    ['WhatsApp', lead.whatsapp],
    ['E-mail', lead.email],
    ['Interesse', lead.interesse],
    ['Operação', lead.operacao],
    ['Investimento', lead.investimento],
    ['Prazo', lead.prazo],
    ['Cidade/Estado', lead.cidade],
    ['Equipamentos', lead.equipamentos],
    ['Cenário', lead.cenario],
    ['Origem', lead.origem],
  ];
  const escape = (value) => String(value || '—').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');
  return `<h1>Novo diagnóstico — ${escape(lead.interesse)}</h1>${rows.map(([label,value]) => `<p><strong>${escape(label)}:</strong><br>${escape(value)}</p>`).join('')}`;
}

function rateLimited(ip) {
  const now = Date.now();
  const recent = (attempts.get(ip) || []).filter((timestamp) => now - timestamp < WINDOW_MS);
  recent.push(now);
  attempts.set(ip, recent);
  return recent.length > MAX_REQUESTS;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Método não permitido.' });
  const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
  if (rateLimited(ip)) return res.status(429).json({ message: 'Muitas tentativas. Aguarde alguns minutos.' });

  const parsed = validateLead(req.body || {});
  if (!parsed.ok) return res.status(parsed.status).json({ message: parsed.message });

  const destination = routeLead(parsed.lead.interesse);
  if (!destination.to) {
    return res.status(503).json({ message: 'O canal de atendimento ainda não foi configurado. Tente novamente mais tarde.' });
  }

  try {
    if (process.env.LEAD_WEBHOOK_URL) {
      const webhook = await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...parsed.lead, route: destination.route, to: destination.to }),
      });
      if (!webhook.ok) throw new Error(`Webhook ${webhook.status}`);
    } else if (process.env.RESEND_API_KEY) {
      const email = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: process.env.LEAD_FROM || 'Projetos Pro Audio <onboarding@resend.dev>',
          to: [destination.to],
          reply_to: parsed.lead.email,
          subject: `[${destination.route}] Diagnóstico de ${parsed.lead.nome}`,
          html: buildLeadEmail(parsed.lead, destination.route),
        }),
      });
      if (!email.ok) throw new Error(`E-mail ${email.status}`);
    } else {
      return res.status(503).json({ message: 'O canal de atendimento ainda não foi configurado. Tente novamente mais tarde.' });
    }

    return res.status(200).json({ ok: true, route: destination.route });
  } catch (error) {
    console.error('lead_delivery_failed', error);
    return res.status(502).json({ message: 'O envio não foi concluído. Tente novamente em alguns minutos.' });
  }
}
