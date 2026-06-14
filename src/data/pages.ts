export interface PageContent {
  slug: string;
  title: string;
  description: string;
  eyebrow?: string;
  faq?: { question: string; answer: string }[];
  sections: { heading: string; paragraphs: string[] }[];
}

export const services: PageContent[] = [
  {
    slug: '/servicos/consultoria-estudio-profissional',
    title: 'Consultoria para Estúdio Profissional',
    description: 'Direção técnica para estúdios de gravação, mixagem e produção com monitoração, acústica, workflow e expansão futura.',
    faq: [
      {
        question: 'A consultoria inclui especificação de equipamentos?',
        answer: 'Sim. A especificação considera sala, operação, orçamento e caminho de crescimento — não apenas lista de desejos.',
      },
      {
        question: 'Atendem estúdios já em operação?',
        answer: 'Sim. Muitos projetos começam com upgrade, reorganização de monitoração ou correção de gargalos existentes.',
      },
    ],
    sections: [
      {
        heading: 'Estúdio como sistema integrado',
        paragraphs: [
          'Monitoração, conversão, microfones, acústica, rede e workflow precisam conversar. Um estúdio premium nasce da coerência entre esses elementos — não de marcas isoladas.',
          'A consultoria mapeia objetivo artístico, rotina de uso, limitações da sala e investimento disponível antes de qualquer compra.',
        ],
      },
      {
        heading: 'O que entregamos',
        paragraphs: [
          'Diagnóstico técnico, prioridades de investimento, especificação de monitoração e interfaces, recomendações acústicas e visão de expansão sem gargalos.',
        ],
      },
    ],
  },
  {
    slug: '/servicos/projetos-dolby-atmos',
    title: 'Projetos Dolby Atmos',
    description: 'Salas imersivas 7.1.4 e superiores com monitoração, calibração, integração de workflow e especificação para produção premium.',
    faq: [
      {
        question: 'Preciso reformar toda a sala para Atmos?',
        answer: 'Nem sempre. O diagnóstico define se adaptação parcial, tratamento adicional ou nova disposição é o caminho mais inteligente.',
      },
    ],
    sections: [
      {
        heading: 'Immersive audio com critério',
        paragraphs: [
          'Dolby Atmos exige mais do que adicionar caixas. Posicionamento, subwoofers, bass management, calibração e monitoração de referência definem se a sala performa de verdade.',
          'Projetamos salas para produção, mixagem e masterização imersiva com foco em tradução, operação e padrão de referência.',
        ],
      },
    ],
  },
  {
    slug: '/servicos/consultoria-live-sound',
    title: 'Consultoria Live Sound',
    description: 'Sistemas PA, monitor de palco, padronização de rig, cobertura e operação para touring, venues e produções exigentes.',
    sections: [
      {
        heading: 'Performance no mundo real',
        paragraphs: [
          'Live sound premium combina cobertura, headroom, redundância, operação e retorno de investimento. Especificamos sistemas que funcionam em turnê, festival e venue fixo.',
        ],
      },
    ],
  },
  {
    slug: '/servicos/sistemas-rf-wireless',
    title: 'Sistemas RF e Wireless',
    description: 'Planejamento de frequências, densidade de canais, IEM, antenas e operação segura para igrejas, eventos e produções críticas.',
    sections: [
      {
        heading: 'RF previsível em ambientes densos',
        paragraphs: [
          'Wireless profissional exige coordenação, scan, antenas corretas e redundância. Projetamos sistemas para operação confiável mesmo com interferência e múltiplos canais.',
        ],
      },
    ],
  },
  {
    slug: '/servicos/projetos-para-igrejas',
    title: 'Projetos para Igrejas',
    description: 'Cobertura uniforme, inteligibilidade, operação simplificada e sistemas preparados para rotina real de culto e eventos.',
    sections: [
      {
        heading: 'Som claro para a congregação',
        paragraphs: [
          'Igrejas precisam de inteligibilidade, feedback controlado e operação acessível para voluntários. Projetamos sistemas que performam no culto semanal e escalam para eventos especiais.',
        ],
      },
    ],
  },
];

export const comparisons: PageContent[] = [
  {
    slug: '/comparativos/pmc-vs-genelec',
    title: 'PMC vs Genelec',
    description: 'Comparativo técnico entre PMC e Genelec para estúdios profissionais — monitoração, tradução, sala e workflow.',
    sections: [
      {
        heading: 'Duas escolas de referência',
        paragraphs: [
          'PMC e Genelec representam abordagens distintas de monitoração de referência. A escolha depende de sala, distância de escuta, SPL desejado e tipo de produção.',
          'Não existe vencedor universal — existe encaixe com o seu projeto.',
        ],
      },
    ],
  },
  {
    slug: '/comparativos/shure-vs-sennheiser',
    title: 'Shure vs Sennheiser',
    description: 'Análise comparativa de microfones e sistemas wireless Shure e Sennheiser para live, estúdio e igrejas.',
    sections: [
      {
        heading: 'Marcas líderes, contextos diferentes',
        paragraphs: [
          'Shure e Sennheiser dominam captação e RF profissional. A decisão envolve densidade de canais, ecossistema, operação e integração com o restante do sistema.',
        ],
      },
    ],
  },
  {
    slug: '/comparativos/ssl-vs-avid',
    title: 'SSL vs Avid',
    description: 'Comparativo entre consoles e ecossistemas SSL e Avid para estúdios, broadcast e produção híbrida.',
    sections: [
      {
        heading: 'Workflow e ecossistema',
        paragraphs: [
          'SSL e Avid atendem perfis distintos de estúdio e broadcast. A escolha envolve integração Pro Tools, I/O, operação analógica vs híbrida e visão de longo prazo.',
        ],
      },
    ],
  },
];

export const guides: PageContent[] = [
  {
    slug: '/guias/como-montar-estudio-dolby-atmos',
    title: 'Como Montar um Estúdio Dolby Atmos',
    description: 'Guia completo para planejar sala, monitoração, subwoofers, calibração e workflow em estúdios imersivos.',
    sections: [
      {
        heading: 'Planejamento antes da compra',
        paragraphs: [
          'Antes de especificar caixas Atmos, defina formato alvo (7.1.4, 9.1.6), distância de escuta, tratamento acústico e integração com DAW e conversores.',
        ],
      },
    ],
  },
  {
    slug: '/guias/guia-rf-para-igrejas',
    title: 'Guia de RF para Igrejas',
    description: 'Coordenação de frequências, antenas, IEM e operação segura de wireless em ambientes de culto.',
    sections: [
      {
        heading: 'Wireless confiável no culto',
        paragraphs: [
          'Igrejas concentram múltiplos microfones sem fio, IEM e interferência de celular. Um plano de RF reduz dropouts e simplifica a operação semanal.',
        ],
      },
    ],
  },
];

export const brands: PageContent[] = [
  {
    slug: '/marcas/pmc',
    title: 'PMC',
    description: 'Monitoração de referência PMC para estúdios premium — ATL, BB5, twotwo e salas imersivas.',
    sections: [
      {
        heading: 'Referência em monitoração',
        paragraphs: [
          'PMC é referência global em monitoração para mastering, broadcast e produção imersiva. Curadoria técnica considera sala, SPL e workflow antes da especificação.',
        ],
      },
    ],
  },
  {
    slug: '/marcas/ssl',
    title: 'Solid State Logic',
    description: 'Consoles e interfaces SSL para estúdios, broadcast e produção com padrão analógico premium.',
    sections: [
      {
        heading: 'Heritage analógico',
        paragraphs: [
          'SSL combina heritage analógico com integração digital moderna. Avaliamos encaixe com operação, I/O e expansão do estúdio.',
        ],
      },
    ],
  },
  {
    slug: '/marcas/sennheiser',
    title: 'Sennheiser',
    description: 'Microfones e sistemas wireless Sennheiser para live, broadcast, estúdio e RF profissional.',
    sections: [
      {
        heading: 'Captação e RF premium',
        paragraphs: [
          'Sennheiser lidera captação e wireless em produções exigentes. Especificamos com base em densidade de canais, operação e integração.',
        ],
      },
    ],
  },
  {
    slug: '/marcas/shure',
    title: 'Shure',
    description: 'Microfones, wireless e IEM Shure para igrejas, live sound, broadcast e estúdios.',
    sections: [
      {
        heading: 'Confiabilidade em campo',
        paragraphs: [
          'Shure é sinônimo de confiabilidade em live e RF. A curadoria considera ecossistema, redundância e operação real do projeto.',
        ],
      },
    ],
  },
];

export function getPageBySlug(collection: PageContent[], slug: string) {
  return collection.find((page) => page.slug === slug);
}
