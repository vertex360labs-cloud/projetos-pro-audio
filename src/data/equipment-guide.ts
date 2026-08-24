export type EquipmentCategory =
  | 'interfaces'
  | 'monitoracao'
  | 'outboard'
  | 'producao'
  | 'microfones'
  | 'consoles-live';

export type EquipmentDestination = 'music-company' | 'quanta-pro';
export type EquipmentAction = 'buy' | 'whatsapp' | 'contact' | 'diagnostic';

export interface GuideEquipment {
  id: string;
  name: string;
  brand: string;
  category: EquipmentCategory;
  destination: EquipmentDestination;
  action: EquipmentAction;
  profile: string;
  application: string;
  attention: string;
  relatedUrl?: string;
  purchaseUrl?: string;
  featured?: boolean;
}

export const equipmentCategories: Record<EquipmentCategory, { label: string; intro: string }> = {
  interfaces: {
    label: 'Interfaces e conversão',
    intro: 'Escolhas orientadas por canais, latência, expansão, roteamento e integração com o sistema atual.',
  },
  monitoracao: {
    label: 'Monitoração',
    intro: 'Monitores avaliados junto com sala, distância de escuta, SPL, extensão de graves e objetivo do trabalho.',
  },
  outboard: {
    label: 'Outboard e setup híbrido',
    intro: 'Processamento analógico, pré-amplificação e roteamento para gravação, mixagem e masterização.',
  },
  producao: {
    label: 'Controladores e produção',
    intro: 'Superfícies e ferramentas para ganhar velocidade, ergonomia e acesso direto ao workflow da DAW.',
  },
  microfones: {
    label: 'Microfones e captação',
    intro: 'Soluções escolhidas de acordo com fonte, ambiente, padrão polar, pré-amplificação e aplicação.',
  },
  'consoles-live': {
    label: 'Consoles e Live Sound',
    intro: 'Mixagem, processamento e áudio em rede para igrejas, eventos, instalações, broadcast e locadoras.',
  },
};

// Os destinos de compra ficam vazios até Rodrigo confirmar os links de afiliado ou de loja.
// Enquanto isso, a interface oferece WhatsApp ou formulário e nunca inventa uma URL comercial.
export const guideEquipment: GuideEquipment[] = [
  {
    id: 'ssl-2-mkii', name: 'SSL 2 MKII', brand: 'SSL', category: 'interfaces', destination: 'music-company', action: 'buy', featured: true,
    profile: 'Home studio e produção musical com duas entradas.',
    application: 'Gravação, produção, streaming e monitoração em setups compactos.',
    attention: 'Confirme quantidade de entradas, saídas e necessidade de expansão antes da escolha.',
    relatedUrl: '/studio/interfaces-e-conversao',
  },
  {
    id: 'ssl-2-plus-mkii', name: 'SSL 2+ MKII', brand: 'SSL', category: 'interfaces', destination: 'music-company', action: 'buy', featured: true,
    profile: 'Home studio que precisa de conexões e monitoração adicionais.',
    application: 'Produção, gravação colaborativa, MIDI e duas saídas de fones.',
    attention: 'Compare as conexões extras com a SSL 2 MKII e com o plano de crescimento.',
    relatedUrl: '/studio/interfaces-e-conversao',
  },
  {
    id: 'ssl-18', name: 'SSL 18', brand: 'SSL', category: 'interfaces', destination: 'music-company', action: 'whatsapp', featured: true,
    profile: 'Estúdios que precisam de mais I/O e integração híbrida.',
    application: 'Gravações multicanal, outboard, expansão digital e monitor control.',
    attention: 'Mapeie canais, formatos digitais e roteamento antes de fechar a configuração.',
    relatedUrl: '/review-ssl-18',
  },
  {
    id: 'antelope-galaxy-64', name: 'Galaxy 64', brand: 'Antelope Audio', category: 'interfaces', destination: 'music-company', action: 'diagnostic',
    profile: 'Estúdios profissionais com alta contagem de canais.',
    application: 'Conversão, MADI, HDX, integração de consoles e sistemas complexos.',
    attention: 'A arquitetura depende de formatos, clock, redundância e infraestrutura existente.',
    relatedUrl: '/studio/interfaces-e-conversao',
  },
  {
    id: 'presonus-audiobox-go', name: 'AudioBox GO', brand: 'PreSonus', category: 'interfaces', destination: 'quanta-pro', action: 'contact', featured: true,
    profile: 'Primeira interface para gravação móvel e home studio.',
    application: 'Voz, instrumento, aulas, criação de conteúdo e produção compacta.',
    attention: 'Ideal quando portabilidade e simplicidade são mais importantes que expansão.',
    relatedUrl: '/studio/interfaces-e-conversao',
  },
  {
    id: 'pmc-6-2', name: 'PMC 6-2', brand: 'PMC', category: 'monitoracao', destination: 'music-company', action: 'diagnostic', featured: true,
    profile: 'Mixagem, masterização e produção profissional.',
    application: 'Monitoração de referência em salas planejadas e workflows exigentes.',
    attention: 'Sala, distância, posicionamento e calibração fazem parte da especificação.',
    relatedUrl: '/review-pmc-6-2-a-precisao-absoluta-que-redefine-o-monitoramento-de-elite',
  },
  {
    id: 'adam-a7v', name: 'A7V', brand: 'ADAM Audio', category: 'monitoracao', destination: 'music-company', action: 'whatsapp', featured: true,
    profile: 'Produção e mixagem em estúdios de pequeno e médio porte.',
    application: 'Nearfield com recursos de ajuste para diferentes ambientes.',
    attention: 'Compare tamanho da sala, distância de escuta e necessidade de subwoofer.',
    relatedUrl: '/studio/monitoracao',
  },
  {
    id: 'adam-t5v', name: 'T5V', brand: 'ADAM Audio', category: 'monitoracao', destination: 'music-company', action: 'buy',
    profile: 'Home studios compactos e produção musical.',
    application: 'Nearfield em salas pequenas e posições de escuta próximas.',
    attention: 'Avalie extensão de graves e acústica antes de adicionar subwoofer.',
    relatedUrl: '/studio/monitoracao',
  },
  {
    id: 'adam-t7v', name: 'T7V', brand: 'ADAM Audio', category: 'monitoracao', destination: 'music-company', action: 'whatsapp',
    profile: 'Home studios maiores e salas de produção.',
    application: 'Produção, edição e mixagem com maior extensão que modelos compactos.',
    attention: 'O tamanho do monitor precisa ser compatível com volume e distância da sala.',
    relatedUrl: '/studio/monitoracao',
  },
  {
    id: 'atc-scm45a-pro', name: 'SCM45A Pro', brand: 'ATC', category: 'monitoracao', destination: 'music-company', action: 'diagnostic',
    profile: 'Estúdios profissionais, mixagem e masterização.',
    application: 'Monitoração de médio porte para decisões críticas.',
    attention: 'Exige avaliação cuidadosa de sala, posicionamento, SPL e integração.',
    relatedUrl: '/studio/monitoracao',
  },
  {
    id: 'presonus-eris', name: 'Linha Eris', brand: 'PreSonus', category: 'monitoracao', destination: 'quanta-pro', action: 'contact', featured: true,
    profile: 'Home studio, criação de conteúdo e produção musical.',
    application: 'Modelos para diferentes tamanhos de mesa, sala e orçamento.',
    attention: 'A escolha deve partir do ambiente e da distância, não apenas do tamanho do falante.',
    relatedUrl: '/studio/monitoracao',
  },
  {
    id: 'ssl-fusion', name: 'SSL Fusion', brand: 'SSL', category: 'outboard', destination: 'music-company', action: 'whatsapp', featured: true,
    profile: 'Mixagem e masterização em setups híbridos.',
    application: 'Coloração, dinâmica de altas frequências, imagem estéreo e estágio de saída.',
    attention: 'Planeje conversão, inserts, níveis e recall dentro do workflow.',
    relatedUrl: '/review-ssl-fusion-o-pulo-do-gato-para-a-sonoridade-de-console-no-seu-rack',
  },
  {
    id: 'ssl-bus-plus', name: 'SSL Bus+', brand: 'SSL', category: 'outboard', destination: 'music-company', action: 'whatsapp', featured: true,
    profile: 'Mix bus e masterização com controle analógico de dinâmica.',
    application: 'Compressão estéreo, processamento paralelo e modelagem tonal.',
    attention: 'Compare a necessidade de compressão com outras formas de coloração no sistema.',
    relatedUrl: '/studio/outboard-e-setup-hibrido',
  },
  {
    id: 'ssl-puredrive-octo', name: 'PureDrive Octo', brand: 'SSL', category: 'outboard', destination: 'music-company', action: 'whatsapp',
    profile: 'Expansão de pré-amplificação para gravação multicanal.',
    application: 'Baterias, ensembles, sessões ao vivo e integração digital.',
    attention: 'Confirme formatos de expansão, canais e integração com a interface.',
    relatedUrl: '/review-ssl-pure-drive-quad-and-octo-a-evolucao-do-pre-amp-analogico-para-a-era-digital',
  },
  {
    id: 'ssl-puredrive-quad', name: 'PureDrive Quad', brand: 'SSL', category: 'outboard', destination: 'music-company', action: 'whatsapp',
    profile: 'Estúdios que precisam de quatro prés versáteis e expansão.',
    application: 'Captação, processamento de linha e integração com setups híbridos.',
    attention: 'Dimensione canais e conectividade para evitar compras duplicadas.',
    relatedUrl: '/review-ssl-pure-drive-quad-and-octo-a-evolucao-do-pre-amp-analogico-para-a-era-digital',
  },
  {
    id: 'ssl-4000-revival', name: '4000 B Dynamics', brand: 'SSL', category: 'outboard', destination: 'music-company', action: 'whatsapp',
    profile: 'Produção e mixagem em formato 500 Series.',
    application: 'Dinâmica de canal e caráter de console em racks modulares.',
    attention: 'Requer chassi 500 Series compatível e planejamento de cadeia.',
    relatedUrl: '/studio/outboard-e-setup-hibrido',
  },
  {
    id: 'warm-wa273', name: 'WA273', brand: 'Warm Audio', category: 'outboard', destination: 'music-company', action: 'whatsapp',
    profile: 'Captação estéreo e gravação com caráter analógico.',
    application: 'Voz, instrumentos, overheads e pares estéreo.',
    attention: 'Avalie ganho, impedância e assinatura desejada para as fontes.',
    relatedUrl: '/studio/outboard-e-setup-hibrido',
  },
  {
    id: 'ssl-uf8', name: 'UF8', brand: 'SSL', category: 'producao', destination: 'music-company', action: 'whatsapp', featured: true,
    profile: 'Produção e mixagem com controle físico da DAW.',
    application: 'Faders, navegação, automação e operação de sessões complexas.',
    attention: 'Confirme compatibilidade, espaço de trabalho e funções prioritárias.',
    relatedUrl: '/studio/controladores-e-workflow',
  },
  {
    id: 'ssl-uf1', name: 'UF1', brand: 'SSL', category: 'producao', destination: 'music-company', action: 'whatsapp',
    profile: 'Controle compacto de DAW e transporte.',
    application: 'Edição, automação e navegação com footprint reduzido.',
    attention: 'Pode trabalhar sozinho ou complementar outros controladores SSL.',
    relatedUrl: '/studio/controladores-e-workflow',
  },
  {
    id: 'ssl-uc1', name: 'UC1', brand: 'SSL', category: 'producao', destination: 'music-company', action: 'whatsapp',
    profile: 'Mixagem com controle dedicado de channel strip e bus compressor.',
    application: 'Workflow tátil com plugins e ecossistema SSL.',
    attention: 'Avalie integração com software, DAW e outros controladores.',
    relatedUrl: '/studio/controladores-e-workflow',
  },
  {
    id: 'neumann-u87', name: 'U 87 Ai', brand: 'Neumann', category: 'microfones', destination: 'music-company', action: 'whatsapp', featured: true,
    profile: 'Estúdios profissionais e captação versátil.',
    application: 'Voz, locução, instrumentos e múltiplas técnicas de captação.',
    attention: 'Sala, pré-amplificador e técnica influenciam tanto quanto o microfone.',
    relatedUrl: '/studio/projetos-completos',
  },
  {
    id: 'austrian-oc818', name: 'OC818 Studio Set', brand: 'Austrian Audio', category: 'microfones', destination: 'music-company', action: 'whatsapp',
    profile: 'Captação profissional com múltiplos padrões polares.',
    application: 'Voz, instrumentos, ensembles e técnicas estéreo.',
    attention: 'Defina acessórios, padrão polar e ambiente conforme a sessão.',
    relatedUrl: '/studio/projetos-completos',
  },
  {
    id: 'presonus-studiolive-32r', name: 'StudioLive 32R', brand: 'PreSonus', category: 'consoles-live', destination: 'quanta-pro', action: 'whatsapp', featured: true,
    profile: 'Igrejas, eventos, monitor mix e sistemas em rack.',
    application: 'Mixagem remota, stagebox, gravação e monitoração.',
    attention: 'Planeje controle, rede, I/O, treinamento e redundância.',
    relatedUrl: '/live-sound/presonus-studiolive',
  },
  {
    id: 'presonus-studiolive-se-16', name: 'StudioLive SE 16', brand: 'PreSonus', category: 'consoles-live', destination: 'quanta-pro', action: 'whatsapp',
    profile: 'Igrejas e operações compactas que precisam de superfície física.',
    application: 'Cultos, pequenos eventos, produção e gravação integrada.',
    attention: 'Dimensione canais, mixes, stagebox e crescimento do sistema.',
    relatedUrl: '/live-sound/presonus-studiolive',
  },
  {
    id: 'presonus-studiolive-se-24', name: 'StudioLive SE 24', brand: 'PreSonus', category: 'consoles-live', destination: 'quanta-pro', action: 'whatsapp',
    profile: 'Igrejas, eventos e produções de médio porte.',
    application: 'Mixagem, monitoração, gravação e controle integrado.',
    attention: 'Considere número de operadores, treinamento e arquitetura de palco.',
    relatedUrl: '/live-sound/presonus-studiolive',
  },
  {
    id: 'presonus-studiolive-se-32', name: 'StudioLive SE 32', brand: 'PreSonus', category: 'consoles-live', destination: 'quanta-pro', action: 'whatsapp', featured: true,
    profile: 'Igrejas, eventos e sistemas que precisam de maior capacidade.',
    application: 'FOH, monitoração, gravação multicanal e expansão.',
    attention: 'A especificação deve incluir I/O, rede, stageboxes e operação.',
    relatedUrl: '/live-sound/presonus-studiolive',
  },
  {
    id: 'violet-dmix-128', name: 'dMix 128', brand: 'Violet Audio', category: 'consoles-live', destination: 'quanta-pro', action: 'diagnostic', featured: true,
    profile: 'Projetos que exigem mixagem, matriz, DSP e áudio em rede.',
    application: 'Broadcast, instalações, igrejas, eventos e sistemas distribuídos.',
    attention: 'Protocolos, placas opcionais, firmware, controle e interoperabilidade precisam ser confirmados.',
    relatedUrl: '/blog/violet-audio-dmix-128-plataforma-mixagem-rede',
  },
  {
    id: 'ssl-big-six', name: 'BiG SiX', brand: 'SSL', category: 'consoles-live', destination: 'music-company', action: 'whatsapp',
    profile: 'Estúdios híbridos que combinam mixer, interface e processamento.',
    application: 'Gravação, summing, mix bus e integração de hardware.',
    attention: 'Mapeie entradas, inserts, conversão e recall antes da compra.',
    relatedUrl: '/studio/outboard-e-setup-hibrido',
  },
  {
    id: 'ssl-origin-32', name: 'ORIGIN 32', brand: 'SSL', category: 'consoles-live', destination: 'music-company', action: 'diagnostic',
    profile: 'Estúdios profissionais com workflow analógico de grande formato.',
    application: 'Tracking, mixagem, roteamento e integração de salas completas.',
    attention: 'Projeto envolve infraestrutura, patch, conversão, mobiliário e instalação.',
    relatedUrl: '/studio/projetos-completos',
  },
  {
    id: 'ssl-live-l350', name: 'Live L350', brand: 'SSL', category: 'consoles-live', destination: 'music-company', action: 'diagnostic',
    profile: 'Turnês, casas de show, broadcast e operações profissionais.',
    application: 'FOH, monitor, rede, stageboxes e produção de grande porte.',
    attention: 'A arquitetura completa deve ser especificada conforme operação, I/O e redundância.',
    relatedUrl: '/live-sound/consoles-digitais',
  },
];

export const equipmentCount = guideEquipment.length;
