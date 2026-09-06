export interface SolutionPage {
  slug: string;
  title: string;
  description: string;
  intro: string;
  bullets: string[];
}

export const studioPages: SolutionPage[] = [
  { slug: 'upgrade-de-estudio', title: 'Upgrade de Estúdio', description: 'Identifique o gargalo real e escolha o próximo investimento com impacto no trabalho.', intro: 'Trocar equipamento sem olhar o conjunto pode apenas deslocar o problema. O diagnóstico cruza sala, monitoração, captação, conversão, processamento e rotina.', bullets: ['Prioridades por impacto e orçamento', 'Compatibilidade com o setup existente', 'Caminho de expansão sem compras duplicadas'] },
  { slug: 'monitoracao', title: 'Monitoração de Estúdio', description: 'Monitores, subwoofers, sala e posicionamento avaliados como um sistema.', intro: 'Uma caixa mais cara não corrige automaticamente posicionamento, modos de sala ou distância inadequada. A escolha precisa partir do ambiente e do tipo de trabalho.', bullets: ['Tamanho da sala e distância de escuta', 'SPL, extensão de graves e subwoofers', 'Evolução estéreo e imersiva'] },
  { slug: 'interfaces-e-conversao', title: 'Interfaces e Conversão', description: 'Escolha interfaces, conversores e expansão pelo workflow — não apenas pela ficha técnica.', intro: 'Número de entradas, estabilidade dos drivers, latência, roteamento, clock e formatos digitais podem ser mais determinantes que diferenças isoladas de especificação.', bullets: ['I/O atual e futuro', 'ADAT, Dante, MADI e expansão', 'Integração com DAW e hardware externo'] },
  { slug: 'outboard-e-setup-hibrido', title: 'Outboard e Setup Híbrido', description: 'Entenda quando pré-amplificadores, compressores, EQs e somadores fazem sentido.', intro: 'Hardware analógico pode trazer operação, caráter e compromisso criativo. Também adiciona conversão, cabeamento, recall e manutenção — tudo precisa entrar na conta.', bullets: ['Cadeias de gravação e mix bus', 'Insert, patchbay e roteamento', 'Custo operacional e recall'] },
  { slug: 'expansao-multicanal', title: 'Expansão Multicanal', description: 'Planejamento de canais, conversão, monitoração e infraestrutura para crescer sem improviso.', intro: 'Gravações maiores, broadcast e áudio imersivo exigem que clock, I/O, rede, monitoração e cabeamento sejam planejados juntos.', bullets: ['Formatos e quantidade de canais', 'Clock, rede e redundância', 'Infraestrutura para Atmos e broadcast'] },
  { slug: 'controladores-e-workflow', title: 'Controladores e Workflow', description: 'Mais agilidade para gravar, editar, mixar e entregar.', intro: 'Superfícies de controle e sistemas de roteamento são úteis quando combinam com a DAW, a rotina e o espaço disponível. Ergonomia e acesso rápido também influenciam o trabalho.', bullets: ['Integração com a DAW', 'Monitor control e talkback', 'Ergonomia e velocidade de operação'] },
  { slug: 'projetos-completos', title: 'Projetos Completos de Estúdio', description: 'Do levantamento inicial à integração dos sistemas da sala.', intro: 'Projetos completos exigem etapas bem definidas, orçamento, infraestrutura e coordenação com acústica, elétrica, mobiliário e fornecedores.', bullets: ['Necessidades e escopo', 'Especificação e etapas de compra', 'Integração, documentação e expansão'] },
  { slug: 'podcast-e-broadcast', title: 'Podcast e Broadcast', description: 'Sistemas de captação e produção confiáveis para operação recorrente.', intro: 'A melhor estrutura é aquela que a equipe consegue operar com consistência. Microfones, acústica, mixagem, gravação, vídeo e redundância precisam conversar.', bullets: ['Captação e tratamento da sala', 'Mixagem, gravação e mix-minus', 'Operação simples e redundância'] },
];

export const livePages: SolutionPage[] = [
  { slug: 'consoles-digitais', title: 'Consoles Digitais', description: 'Escolha de console por operação, canais, rede, expansão e equipe.', intro: 'A quantidade de canais não conta toda a história. Workflow, treinamento, stageboxes, gravação e suporte influenciam o resultado no uso diário.', bullets: ['Arquitetura de I/O', 'Operação e treinamento', 'Rede, gravação e expansão'] },
  { slug: 'violet-audio', title: 'Violet Audio', description: 'Violet Audio dMix 128 para sistemas que precisam de flexibilidade e integração.', intro: 'A configuração depende do porte, da infraestrutura, da equipe e dos requisitos de entradas, saídas e processamento.', bullets: ['dMix 128 e arquitetura do sistema', 'Aplicação em instalações e eventos', 'Configuração conforme a necessidade'] },
  { slug: 'presonus-studiolive', title: 'PreSonus StudioLive', description: 'StudioLive SE, consoles e rack mixers dentro de um ecossistema integrado.', intro: 'Modelos de superfície e rack atendem operações diferentes. O projeto deve considerar controle, stagebox, gravação, monitoração e expansão.', bullets: ['StudioLive SE 16, 24 e 32', 'Rack mixers e controle remoto', 'Integração com gravação e monitoração'] },
  { slug: 'sistemas-para-igrejas', title: 'Sistemas para Igrejas', description: 'Inteligibilidade, cobertura e operação compatível com a equipe.', intro: 'Uma igreja precisa funcionar toda semana, com diferentes operadores. Cobertura, ganho antes da microfonia, monitoração, wireless e treinamento são partes do mesmo projeto.', bullets: ['Inteligibilidade e cobertura', 'Operação para equipes e voluntários', 'Wireless, monitoração e expansão'] },
  { slug: 'eventos-e-locadoras', title: 'Eventos e Locadoras', description: 'Sistemas preparados para montagem, transporte, redundância e diferentes demandas.', intro: 'A escolha precisa considerar frequência de uso, padronização, riders técnicos, manutenção, treinamento e retorno sobre o investimento.', bullets: ['Padronização de inventário', 'Redundância e logística', 'Capacidade de expansão e retorno'] },
  { slug: 'wireless', title: 'Wireless e RF', description: 'Microfones, IEM, antenas e coordenação de frequências.', intro: 'Sistemas wireless dependem de espectro disponível, potência, distribuição de antenas e procedimentos de operação — não apenas do transmissor.', bullets: ['Coordenação de frequências', 'Antenas e distribuição', 'Rotina de scan e operação'] },
  { slug: 'dante', title: 'Dante e Áudio em Rede', description: 'Planejamento de rede para transportar áudio com controle e previsibilidade.', intro: 'Rede de áudio envolve switches, topologia, clock, redundância, VLANs e documentação. A implantação precisa considerar a equipe que manterá o sistema.', bullets: ['Topologia e switches', 'Clock e redundância', 'Documentação e diagnóstico'] },
  { slug: 'monitoracao-pessoal', title: 'Monitoração Pessoal', description: 'Mais autonomia para músicos e menos pressão no palco.', intro: 'Sistemas pessoais como Livemix podem melhorar consistência e reduzir conflitos, desde que entradas, distribuição e treinamento sejam planejados.', bullets: ['Quantidade de mixes e canais', 'Distribuição e controle', 'Treinamento dos usuários'] },
  { slug: 'projetos-de-sonorizacao', title: 'Projetos de Sonorização', description: 'Cobertura, processamento, infraestrutura e operação planejados em conjunto.', intro: 'A escolha dos equipamentos precisa responder ao espaço e à forma de uso. Projetos mais complexos contam com o apoio das equipes responsáveis pela especificação e implementação.', bullets: ['Levantamento do ambiente', 'Cobertura e dimensionamento', 'Integração e comissionamento'] },
];

export const studioTopicKeywords: Record<string, string[]> = {
  'upgrade-de-estudio': ['upgrade', 'interface', 'ssl 18', 'harrison'],
  monitoracao: ['monitor', 'monitoração', 'adam', 'pmc', 'atc', 'subwoofer'],
  'interfaces-e-conversao': ['interface', 'conversão', 'ssl', 'antelope', 'orion', 'galaxy', 'clarett', 'tascam', 'harrison', 'alpha'],
  'outboard-e-setup-hibrido': ['fusion', 'bus+', 'channel strip', 'puredrive', 'outboard', 'neve', 'origin', 'revival'],
  'expansao-multicanal': ['galaxy', 'orion', 'adat', 'multicanal', 'umd', 'discrete'],
  'controladores-e-workflow': ['uf8', 'uf1', 'uc1', 'controlador'],
  'projetos-completos': ['console', 'origin', 'neve', 'harrison'],
  'podcast-e-broadcast': ['mixcast', 'podcast', 'tascam'],
};

export const liveTopicKeywords: Record<string, string[]> = {
  'consoles-digitais': ['console', 'l350', 'studiolive', 'dmix', 'origin'],
  'violet-audio': ['violet', 'dmix'],
  'presonus-studiolive': ['studiolive', 'presonus'],
  'sistemas-para-igrejas': ['igreja', 'studiolive', 'violet'],
  'eventos-e-locadoras': ['live', 'console', 'stagebox', 'l350'],
  dante: ['dante', 'rede', 'stagebox', 'sb32', 'dmix'],
  'monitoracao-pessoal': ['monitoração pessoal', 'iem', 'livemix'],
};
