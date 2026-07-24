export interface LegacyReview {
  slug: string;
  title: string;
  description: string;
  image: string;
  audience: string;
  notFor: string;
  points: { title: string; text: string }[];
  specs: string[];
}

export const legacyReviews: LegacyReview[] = [
  {
    slug: 'review-pmc-6-2-a-precisao-absoluta-que-redefine-o-monitoramento-de-elite',
    title: 'Review PMC 6-2: precisão, sala e aplicação',
    description: 'Uma leitura prática do monitor PMC 6-2: aplicação, integração de sala, pontos fortes e decisões antes da compra.',
    image: '/images/real/monitor-refereincia-pmc-audio-6-2-reivew-Zz88TmuPHfqXWvk1.jpg',
    audience: 'Estúdios profissionais de mixagem, produção e pós que precisam de monitoração de alta resolução e possuem ambiente compatível com a proposta do sistema.',
    notFor: 'Não deve ser tratado como correção automática para uma sala sem tratamento, posicionamento ou calibração adequados.',
    points: [
      { title: 'Monitor e sala são um sistema', text: 'A capacidade de revelar detalhes só é útil quando distância de escuta, simetria, reflexões e resposta de graves estão sob controle.' },
      { title: 'Headroom precisa ter aplicação', text: 'O porte do monitor deve acompanhar volume da sala, distância e nível de trabalho. Mais capacidade não substitui dimensionamento.' },
      { title: 'Integração e ajuste', text: 'Posicionamento e recursos de alinhamento devem ser tratados como parte da instalação, não como etapa opcional depois da compra.' },
    ],
    specs: ['Monitor ativo de três vias', 'Tecnologia ATL de transmissão de graves', 'Configuração e alinhamento dependem da instalação', 'Consulte a documentação vigente da PMC antes da especificação'],
  },
  {
    slug: 'review-ssl-18',
    title: 'Review SSL 18: interface, workflow e expansão',
    description: 'O que avaliar na SSL 18 além da quantidade de entradas: integração, expansão, monitoração e perfil de uso.',
    image: '/images/real/ssl-18-capa-blog-ETLuEt6ty4u500BU.jpg',
    audience: 'Produtores e estúdios que precisam combinar múltiplas entradas, monitoração, integração com outboard e um caminho organizado de expansão.',
    notFor: 'Quem utiliza poucos canais e não precisa dos recursos adicionais pode obter uma solução mais simples e adequada ao orçamento.',
    points: [
      { title: 'I/O como parte do workflow', text: 'A escolha deve considerar quantas fontes entram juntas, como o hardware externo será conectado e o que precisa ficar permanentemente disponível.' },
      { title: 'Monitoração e operação', text: 'Controle de monitores, fones e comunicação influenciam o uso diário tanto quanto a conversão.' },
      { title: 'Expansão', text: 'Formatos digitais e compatibilidade futura precisam entrar no projeto antes da compra de novos canais.' },
    ],
    specs: ['Interface de áudio para produção em estúdio', 'Recursos de entrada, saída e monitoração devem ser confirmados na ficha oficial', 'A aplicação ideal depende de I/O, DAW e hardware externo', 'Drivers e compatibilidade devem ser verificados para o sistema operacional em uso'],
  },
  {
    slug: 'review-ssl-fusion-o-pulo-do-gato-para-a-sonoridade-de-console-no-seu-rack',
    title: 'Review SSL Fusion: processamento analógico no mix bus',
    description: 'Onde o SSL Fusion pode contribuir, quais problemas ele não resolve e o que considerar em um workflow híbrido.',
    image: '/images/real/ssl-fusion-frente_review_ok-bFxI0l46LSyXzCBi.jpg',
    audience: 'Engenheiros e produtores com monitoração confiável, mixes consistentes e interesse em processamento analógico estéreo no mix bus ou master.',
    notFor: 'Não substitui fundamentos de arranjo, mixagem, acústica ou monitoração. Também adiciona conversão, cabeamento e necessidade de recall.',
    points: [
      { title: 'Cinco seções com funções diferentes', text: 'Drive, equalização, controle de altas frequências, imagem estéreo e transformador oferecem decisões complementares, não uma receita automática.' },
      { title: 'Workflow híbrido', text: 'O benefício precisa ser avaliado junto da qualidade de conversão, ganho, insert, latência e repetibilidade do recall.' },
      { title: 'Uso com intenção', text: 'O resultado depende da fonte e do ajuste. Comparações em nível casado são mais úteis do que descrições abstratas de “som analógico”.' },
    ],
    specs: ['Processador analógico estéreo de 2U', 'Seções Vintage Drive, Violet EQ, HF Compressor, Stereo Image e Transformer', 'Insert estéreo ou Mid-Side', 'Entradas e saídas balanceadas'],
  },
  {
    slug: 'review-ssl-pure-drive-quad-and-octo-a-evolucao-do-pre-amp-analogico-para-a-era-digital',
    title: 'Review SSL Pure Drive Quad e Octo',
    description: 'Pré-amplificação multicanal, modos de drive e integração digital avaliados dentro de sessões reais.',
    image: '/images/real/pure-drive-quad-octo-MEpHLQwnWdHHL6GC.jpg',
    audience: 'Estúdios que gravam múltiplas fontes, procuram variação de caráter na entrada e precisam combinar pré-amplificação com integração digital.',
    notFor: 'Se a necessidade principal é apenas adicionar canais pelo menor custo, uma expansão mais simples pode ser mais coerente.',
    points: [
      { title: 'Clean e modos de drive', text: 'As opções permitem escolher entre resposta limpa e diferentes comportamentos harmônicos já na captura. Isso pede monitoração e ganho criteriosos.' },
      { title: 'Quad ou Octo', text: 'A decisão começa pela quantidade de fontes simultâneas e pela expansão prevista, não apenas pela diferença de preço entre as unidades.' },
      { title: 'Integração digital', text: 'Formatos, clock, taxas suportadas e roteamento devem ser verificados contra a interface e o sistema existentes.' },
    ],
    specs: ['Versões de quatro e oito canais', 'Modos Clean, Classic Drive e Asymmetric Drive', 'Opções de integração analógica e digital', 'Confirme formatos e taxas na documentação vigente da SSL'],
  },
];
