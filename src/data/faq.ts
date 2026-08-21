import type { FAQItem } from '@/components/FAQ.astro';

export const homeFAQ: FAQItem[] = [
  {
    question: 'A Projetos Pro Audio vende equipamento ou faz projeto?',
    answer: 'O foco principal é direção técnica, curadoria, projeto e especificação. A venda é feita pelas empresas que eu represento oficialmente: Music Company, Quanta Pro e Pro Audio Solutions.',
  },
  {
    question: 'Vocês atendem apenas estúdios?',
    answer: 'Não. A atuação cobre estúdios profissionais, live sound, locadoras, igrejas, auditórios, venues e projetos ligados a immersive audio, RF e sistemas premium.',
  },
  {
    question: 'Posso contratar mesmo sem saber exatamente o que preciso?',
    answer: 'Sim. Esse é um dos cenários mais comuns. O diagnóstico existe justamente para transformar dúvida em caminho claro.',
  },
  {
    question: 'Vocês trabalham com Dolby Atmos e áudio imersivo?',
    answer: 'Sim. Essa é uma das frentes mais estratégicas do mercado atual, tanto para estúdios quanto para ambientes de monitoração e produção mais avançados.',
  },
  {
    question: 'Vocês ajudam na escolha entre marcas e modelos?',
    answer: 'Sim. A curadoria técnica considera objetivo, ambiente, operação, expansão futura e coerência entre os elementos do sistema.',
  },
  {
    question: 'O que acontece depois do diagnóstico?',
    answer: 'Você recebe uma direção mais clara sobre prioridades, gargalos, caminhos possíveis e próximos passos recomendados.',
  },
];

export const objectionsFAQ: FAQItem[] = [
  {
    question: 'Ainda estou pesquisando. Não é cedo demais?',
    answer: 'É justamente nessa fase que mais se economiza dinheiro e erro. Quanto antes o projeto começa, menor a chance de investir em direção errada.',
  },
  {
    question: 'Já tenho parte dos equipamentos',
    answer: 'Ótimo. O objetivo não é recomeçar do zero, e sim organizar o que faz sentido, identificar gargalos e integrar melhor o que você já possui.',
  },
  {
    question: 'Meu projeto é específico demais',
    answer: 'Melhor ainda. Projetos genéricos falham justamente porque ignoram contexto. Quanto mais específico o cenário, mais valor há em direção técnica séria.',
  },
  {
    question: 'Ainda não quero comprar agora',
    answer: 'Perfeito. O diagnóstico existe para dar clareza antes da decisão, não para empurrar compra sem necessidade.',
  },
];
