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
    description: 'Consultoria técnica para estúdios de gravação, mixagem e produção, com atenção à monitoração, acústica, rotina de trabalho e expansão futura.',
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
          'Monitoração, conversão, microfones, acústica, rede e workflow precisam funcionar em conjunto. A qualidade do estúdio depende da coerência entre esses elementos, não apenas das marcas escolhidas.',
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
    description: 'Planejamento de salas imersivas 7.1.4 e superiores, com monitoração, calibração e integração ao fluxo de produção.',
    faq: [
      {
        question: 'Preciso reformar toda a sala para Atmos?',
        answer: 'Nem sempre. A análise indica se uma adaptação parcial, tratamento adicional ou nova disposição atende às necessidades da sala.',
      },
    ],
    sections: [
      {
        heading: 'Áudio imersivo com planejamento',
        paragraphs: [
          'Dolby Atmos exige mais do que adicionar caixas. Posicionamento, subwoofers, gerenciamento de graves, calibração e monitoração de referência determinam a precisão da sala.',
          'O projeto considera produção, mixagem e masterização imersiva, com atenção à tradução entre sistemas e à rotina de operação.',
        ],
      },
    ],
  },
  {
    slug: '/servicos/consultoria-live-sound',
    title: 'Consultoria Live Sound',
    description: 'Sistemas de PA, monitoração de palco, padronização, cobertura e operação para turnês, casas de show e eventos.',
    sections: [
      {
        heading: 'Desempenho consistente em cada montagem',
        paragraphs: [
          'Um sistema de sonorização precisa equilibrar cobertura, margem dinâmica, redundância, facilidade de operação e custo. A especificação considera as condições de turnês, festivais e instalações fixas.',
        ],
      },
    ],
  },
  {
    slug: '/servicos/sistemas-rf-wireless',
    title: 'Sistemas RF e Wireless',
    description: 'Planejamento de frequências, densidade de canais, sistemas wireless, antenas e operação para igrejas e eventos.',
    sections: [
      {
        heading: 'RF previsível em ambientes densos',
        paragraphs: [
          'Sistemas wireless profissionais exigem coordenação, varredura de espectro, antenas adequadas e procedimentos de contingência. O projeto busca reduzir interferências e manter a operação organizada com múltiplos canais.',
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
          'Igrejas precisam de inteligibilidade, controle de microfonia e uma operação acessível para diferentes equipes. O sistema deve atender à rotina semanal e também comportar eventos especiais.',
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
        heading: 'Duas marcas, diferentes possibilidades de aplicação',
        paragraphs: [
          'Shure e Sennheiser oferecem soluções consolidadas de captação e RF profissional. A decisão envolve densidade de canais, ecossistema, operação e integração com o restante do sistema.',
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
    description: 'Guia para planejar sala, monitoração, subwoofers, calibração e workflow em estúdios imersivos.',
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
          'Igrejas concentram múltiplos sistemas wireless, IEM e interferências externas. Um plano de RF reduz dropouts e simplifica a operação semanal.',
        ],
      },
    ],
  },
];

export const brands: PageContent[] = [
  {
    slug: '/marcas/pmc',
    title: 'PMC',
    description: 'Monitoração de referência PMC para estúdios — ATL, BB5, twotwo e salas imersivas.',
    sections: [
      {
        heading: 'Referência em monitoração',
        paragraphs: [
          'A PMC desenvolve sistemas de monitoração para masterização, broadcast e produção imersiva. A escolha deve considerar sala, nível de pressão sonora e workflow.',
        ],
      },
    ],
  },
  {
    slug: '/marcas/ssl',
    title: 'Solid State Logic',
    description: 'Consoles e interfaces SSL para estúdios, broadcast e produção híbrida.',
    sections: [
      {
        heading: 'Tradição analógica e integração digital',
        paragraphs: [
          'A SSL combina circuitos analógicos com controle e integração digital. A escolha depende da operação, do I/O necessário e dos planos de expansão do estúdio.',
        ],
      },
    ],
  },
  {
    slug: '/marcas/sennheiser',
    title: 'Sennheiser',
    description: 'Microfones e sistemas wireless Sennheiser para sonorização, broadcast, estúdio e RF profissional.',
    sections: [
      {
        heading: 'Captação e sistemas de RF',
        paragraphs: [
          'A Sennheiser oferece microfones e sistemas wireless para diferentes portes de produção. A especificação considera densidade de canais, rotina de operação e integração.',
        ],
      },
    ],
  },
  {
    slug: '/marcas/shure',
    title: 'Shure',
    description: 'Microfones, sistemas wireless e IEM Shure para igrejas, sonorização, broadcast e estúdios.',
    sections: [
      {
        heading: 'Confiabilidade em campo',
        paragraphs: [
          'A Shure oferece soluções amplamente utilizadas em sonorização e RF. A escolha considera ecossistema, redundância e rotina de operação.',
        ],
      },
    ],
  },
];

export function getPageBySlug(collection: PageContent[], slug: string) {
  return collection.find((page) => page.slug === slug);
}
