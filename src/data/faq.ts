import type { FAQItem } from '@/components/FAQ.astro';

export const homeFAQ: FAQItem[] = [
  {
    question: 'A Projetos Pro Audio vende equipamento ou faz projeto?',
    answer: 'O Projetos Pro Audio oferece consultoria, planejamento e especificação. A venda dos equipamentos é realizada pelas empresas que represento oficialmente: Music Company, Quanta Pro e Pro Audio Solutions.',
  },
  {
    question: 'Vocês atendem apenas estúdios?',
    answer: 'Não. O atendimento também inclui sonorização, locadoras, igrejas, auditórios, casas de show e projetos de áudio imersivo ou sistemas de RF.',
  },
  {
    question: 'Posso contratar mesmo sem saber exatamente o que preciso?',
    answer: 'Sim. A primeira conversa serve para organizar as necessidades, identificar prioridades e definir quais informações ainda precisam ser levantadas.',
  },
  {
    question: 'Vocês trabalham com Dolby Atmos e áudio imersivo?',
    answer: 'Sim. O planejamento pode incluir formato da sala, quantidade e posição dos monitores, subwoofers, calibração, conversão e integração com a DAW.',
  },
  {
    question: 'Vocês ajudam na escolha entre marcas e modelos?',
    answer: 'Sim. A comparação considera a aplicação, o ambiente, a rotina de operação, os equipamentos existentes e os planos de expansão.',
  },
  {
    question: 'O que acontece depois do diagnóstico?',
    answer: 'Rodrigo entra em contato para entender os detalhes, esclarecer prioridades e indicar o próximo passo mais adequado ao projeto.',
  },
];

export const objectionsFAQ: FAQItem[] = [
  {
    question: 'Ainda estou pesquisando. Não é cedo demais?',
    answer: 'Não. Pesquisar antes da compra é o melhor momento para comparar caminhos, verificar compatibilidade e evitar equipamentos que não resolvam a necessidade principal.',
  },
  {
    question: 'Já tenho parte dos equipamentos',
    answer: 'Não é necessário recomeçar do zero. A análise considera o que pode ser mantido, o que precisa ser reorganizado e onde uma mudança traria benefício prático.',
  },
  {
    question: 'Meu projeto é específico demais',
    answer: 'Projetos específicos exigem mais informações sobre ambiente, aplicação e operação. Envie esses detalhes para que a conversa comece pelas restrições reais do sistema.',
  },
  {
    question: 'Ainda não quero comprar agora',
    answer: 'Sem problema. Você pode usar a análise para organizar prioridades, estimar etapas e se preparar para investir quando chegar o momento adequado.',
  },
];
