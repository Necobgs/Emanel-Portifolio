export type ProjectCategory =
  | "Backend & Orquestração"
  | "RPA & Automação"
  | "Desktop & .NET";

export interface TechnicalDecision {
  title: string;
  rationale: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
  description?: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  summary: string;
  tagline: string;
  category: ProjectCategory;
  status: "Em Produção" | "Concluído" | "Em Desenvolvimento" | "Estudo Aplicado";
  featured: boolean;
  starred?: boolean;
  isConfidential?: boolean;
  metrics?: ProjectMetric[];
  context: string;
  problem: string;
  objective: string;
  solution: string;
  contribution: string;
  architectureHighlights: string[];
  technicalDecisions: TechnicalDecision[];
  challengesAndLearnings: string[];
  techStack: string[];
  diagramType?: "orchestration" | "rpa-engine" | "wpf-desktop" | "reverse-engineering";
  githubUrl?: string;
  liveUrl?: string;
  plannedFeatures?: string[];
  isDemoContent?: boolean;
}

export const projectsData: ProjectDetail[] = [
  {
    slug: "plataforma-orquestracao-automacoes",
    title: "Plataforma de Orquestração de Automações & Gestão de Rotinas",
    tagline:
      "Backend corporativo em NestJS com mensageria e controle de ciclo de vida de bots.",
    summary:
      "Arquitetura modular em NestJS e TypeScript integrada a RabbitMQ e Redis para agendamento, disparo assíncrono, relatórios e observabilidade de robôs corporativos.",
    category: "Backend & Orquestração",
    status: "Em Produção",
    featured: true,
    isConfidential: true,
    metrics: [
      {
        value: "100%",
        label: "Visibilidade Operacional",
        description: "Rastreio fim a fim de estados, logs e jobs em tempo real",
      },
      {
        value: "Assíncrono",
        label: "Arquitetura com Filas",
        description: "RabbitMQ desacoplando workers de robôs corporativos",
      },
      {
        value: "Auditável",
        label: "Histórico Transacional",
        description: "Persistência segura em PostgreSQL com Job ID correlacionado",
      },
    ],
    context:
      "Ambiente corporativo com dezenas de tarefas repetitivas e rotinas operacionais sem controle centralizado de estados ou dependências (código proprietário corporativo sob sigilo/NDA).",
    problem:
      "Ausência de visibilidade centralizada sobre a execução de automações. Rotinas eram executadas de forma dispersa, dificultando identificar se um robô falhou, se completou com sucesso ou se travou em loop, além da falta de relatórios unificados para tomada de decisão.",
    objective:
      "Centralizar em um portal seguro o agendamento de tarefas, controle rigoroso de estados de execução (Pendente, Em Execução, Sucesso, Falha), geração de relatórios consolidados e orquestração assíncrona de workers.",
    solution:
      "Plataforma completa que monitora a execução das tarefas, desde o inicio ao fim, disponibilizando aos desenvolvedores visualização dos logs e acompanhamento do andamento da tarefa em tempo real, junto de relatórios automatizados e agendamento de tarefas futuras ou diárias.",
    contribution:
      "Desenvolvimento de módulos de negócio em NestJS, modelagem das entidades relacionais, integração da mensageria com RabbitMQ e criação de endpoints para relatórios operacionais.",
    architectureHighlights: [
      "Injeção de dependência e arquitetura modular limpa em NestJS",
      "Processamento desacoplado através de filas RabbitMQ",
      "Cache in-memory e controle de estados efêmeros via Redis",
      "Persistência transacional com histórico auditável em PostgreSQL",
      "Logs estruturados com correlação de execução por Job ID",
    ],
    technicalDecisions: [
      {
        title: "Arquitetura Modular NestJS",
        rationale:
          "Permitiu isolar completamente os domínios de agendamento, comunicação com workers e relatórios, facilitando manutenções e testes independentes.",
      },
      {
        title: "Desacoplamento via Mensageria",
        rationale:
          "O uso de filas evitou bloqueios na API durante execuções pesadas de robôs, garantindo alta disponibilidade da interface administrativa.",
      },
      {
        title: "Redis para Estados em Tempo Real",
        rationale:
          "Consultas contínuas de status operacional leem dados de memória do Redis com latência ínfima, aliviando o banco relacional principal.",
      },
    ],
    challengesAndLearnings: [
      "Coordenação de robôs com tempos de execução heterogêneos sem sobrecarregar a memória do cluster.",
      "Aprendizado aprofundado na modelagem de sistemas orientados a eventos e na garantia de idempotência para evitar execuções duplicadas.",
    ],
    techStack: ["NestJS", "TypeScript", "RabbitMQ", "Redis", "PostgreSQL", "Docker", "Python"],
    diagramType: "orchestration",
  },
  {
    slug: "refatoracao-scraper-santander",
    title: "Refatoração de Scraper de Dados no Santander",
    tagline:
      "Otimização assíncrona de alta escala: redução de 24h para 6h (-75% no tempo) processando 22.000 requisições com bypass de Akamai e criptografia assimétrica.",
    summary:
      "Refatoração arquitetural de um scraper corporativo no portal do Santander que escalou de 1.000 para 22.000 clientes. A eliminação da camada de navegador (Selenium) e a migração para requisições assíncronas paralelas com engenharia reversa de criptografia proprietária e bypass de Akamai reduziu o tempo de execução de 24 horas para 6 horas (-75%).",
    category: "RPA & Automação",
    status: "Em Produção",
    featured: true,
    isConfidential: true,
    metrics: [
      {
        value: "-75%",
        label: "Redução no Tempo",
        description: "De 24 horas para 6 horas (uma tarde)",
      },
      {
        value: "22.000",
        label: "Raspagens por Ciclo",
        description: "Escala massiva de 1.000 para 22 mil clientes (+2.100%)",
      },
      {
        value: "4x Mais Rápido",
        label: "Ganho em Performance",
        description: "Requisições paralelas assíncronas sem camada de navegador",
      },
      {
        value: "100% Sucesso",
        label: "Bypass & Reversão",
        description: "Akamai contornado e lib assimétrica replicada com Grok no Cursor",
      },
    ],
    context:
      "Ambiente corporativo de alta criticidade com necessidade de raspagem massiva de dados no portal do Santander. Originalmente, o robô havia sido construído sobre Selenium por conta da stack principal da Góes na época. Contudo, a base de clientes a consultar aumentou drasticamente de 1.000 para 22.000 raspagens, ultrapassando os limites operacionais aceitáveis.",
    problem:
      "Com a explosão de 1.000 para 22.000 raspagens, o robô baseado em Selenium levava mais de 24 horas ininterruptas de processamento. A sobrecarga de memória do navegador, a lentidão de renderização do DOM e a instabilidade de conexões prolongadas tornavam a operação vulnerável a falhas e inviável para o negócio.",
    objective:
      "Refatorar completamente o scraper eliminando a camada pesada do navegador e construindo uma arquitetura de requisições paralelas assíncronas. Os requisitos incluíam contornar a proteção anti-bot do Akamai e decodificar a criptografia assimétrica proprietária do portal para concluir todo o lote de 22.000 clientes no intervalo de uma tarde (até 6 horas).",
    solution:
      "Substituição do Selenium por requisições HTTP assíncronas paralelas, contornando o anti-bot Akamai com Playwright e replicando a criptografia assimétrica do portal via engenharia reversa com Grok no Cursor.",
    contribution:
      "Diagnóstico e redesign arquitetural completo do robô, migrando de Selenium para chamadas assíncronas; engenharia reversa da biblioteca de criptografia assimétrica com auxílio de IA no Cursor IDE; estratégia de handshake e extração de tokens do Akamai via Playwright; e implementação de paralelismo assíncrono com rate limit para 22.000 clientes em produção.",
    architectureHighlights: [
      "Eliminação total do overhead de navegador no loop principal de raspagem",
      "Processamento assíncrono paralelo escalado de 1.000 para 22.000 raspagens",
      "Bypass resiliente do anti-bot Akamai com Playwright headless no handshake",
      "Engenharia reversa e replicação em Python da criptografia assimétrica interna",
      "Redução comprovada do tempo total de 24 horas para 6 horas (-75%)",
    ],
    technicalDecisions: [
      {
        title: "Migração de Selenium para Requisições Assíncronas Diretas",
        rationale:
          "O navegador consumia gigabytes de memória e adicionava dezenas de segundos por página. Disparar chamadas HTTP assíncronas reduziu o tempo por requisição para centenas de milissegundos e permitiu paralelismo real.",
      },
      {
        title: "Playwright Pontual para Validação de Sessão Akamai",
        rationale:
          "O Akamai coleta sinais profundos do navegador. Ao invés de usar navegador para as 22.000 consultas, o Playwright é acionado apenas para inicializar a sessão e obter tokens e cookies válidos para o motor assíncrono.",
      },
      {
        title: "Reversão da Criptografia Assimétrica com Cursor & Grok 4.7",
        rationale:
          "Os dados das requisições viajavam criptografados por uma biblioteca interna. A inspeção de rede combinada com a análise de código ofuscado pelo Grok 4.7 no Cursor permitiu reproduzir fielmente a lib de cifragem em Python puro.",
      },
    ],
    challengesAndLearnings: [
      "Interpretação e engenharia reversa de scripts JavaScript ofuscados que implementavam criptografia assimétrica no front-end.",
      "Contorno de telemetria anti-bot avançada do Akamai sem disparar captchas ou bloqueios de IP corporativo.",
      "Calibração de semáforos assíncronos para processar 22.000 requisições em paralelo sem estourar conexões do servidor de destino.",
    ],
    techStack: [
      "Python",
      "Asyncio",
      "Playwright",
      "Selenium",
      "Engenharia Reversa",
      "Criptografia Assimétrica",
      "Akamai Anti-Bot",
      "Cursor IDE & Grok 4.7",
    ],
    diagramType: "reverse-engineering",
  },
  {
    slug: "framework-integracoes-rpa",
    title: "Framework & Padrões de Integração para RPA em Python",
    tagline:
      "Arquitetura padronizada e defensiva para automações web, desktop e integrações HTTP.",
    summary:
      "Estrutura modular em Python desenvolvida para unificar a criação de robôs corporativos, reduzindo overhead de manutenção através de retries exponenciais, tratamento de falhas e reutilização de código.",
    category: "RPA & Automação",
    status: "Em Produção",
    featured: true,
    isConfidential: true,
    context:
      "Operações corporativas dependentes de sistemas web legados e interfaces externas que sofrem alterações frequentes de leiaute e instabilidades transitórias de rede (código proprietário corporativo sob sigilo/NDA).",
    problem:
      "Alto índice de retrabalho ao criar novos robôs do zero. Cada desenvolvedor implementava tratamentos de exceção, retentativas e chamadas HTTP de forma divergente, resultando em robôs frágeis e manutenções emergenciais frequentes.",
    objective:
      "Estabelecer uma biblioteca/framework interno padronizado, fornecendo abstrações reutilizáveis para automação web (Playwright e Selenium), rotinas desktop, requisições HTTP seguras e monitoramento padronizado.",
    solution:
      "Criação de libraries internas, mapeando os sistemas utilizados com o padrão Page Object para reutilização em diversos projetos, facilitando também na manutenção de erros comuns entre os projetos.",
    contribution:
      "Concepção da estrutura arquitetural dos robôs, padronização dos utilitários de resiliência e apoio técnico à equipe na migração de automações legadas para o novo padrão.",
    architectureHighlights: [
      "Padrão Page Object com seletores desacoplados da lógica de negócio",
      "Decorators para políticas de retry com backoff exponencial e jitter",
      "Adapters intercambiáveis para Playwright e Selenium em modo headless",
      "Interceptação e injeção de tokens de autenticação em chamadas HTTP",
      "Emissão de telemetria padronizada conectada à observabilidade central",
    ],
    technicalDecisions: [
      {
        title: "Adoção do Playwright como Motor Primário",
        rationale:
          "O Playwright oferece esperas automáticas por elementos de DOM e isolamento de contextos de navegador nativo, reduzindo significativamente falhas por concorrência.",
      },
      {
        title: "Retry Exponencial com Jitter",
        rationale:
          "Evitou tempestades de requisições sobre serviços externos instáveis, conferindo elegância ao tratamento de falhas temporárias.",
      },
      {
        title: "Log Estruturado em Formato JSON",
        rationale:
          "Facilitou a ingestão e indexação dos eventos de automação pelas ferramentas de monitoramento corporativo.",
      },
    ],
    challengesAndLearnings: [
      "Tratamento de páginas com conteúdo renderizado assincronamente e iframes dinâmicos.",
      "Compreensão prática da importância de diferenciar erros de infraestrutura externa de erros de validação de dados de negócio.",
    ],
    techStack: ["Python", "Playwright", "Selenium", "Requests", "Docker", "GitLab CI/CD", "Gitlab Package Registry"],
    diagramType: "rpa-engine",
  },
  {
    slug: "move-fast-backend",
    title: "Move Fast — Backend para Mobilidade (like Uber) em Go & Redis",
    tagline:
      "Serviço backend de alto desempenho com geolocalização e cache in-memory em Go.",
    summary:
      "Projeto prático de código aberto desenvolvido para aplicar conceitos avançados além do CRUD tradicional: cache e geolocalização com Redis, comunicação em tempo real e concorrência nativa em Go.",
    category: "Backend & Orquestração",
    status: "Concluído",
    featured: true,
    githubUrl: "https://github.com/Necobgs/move-fast-backend",
    context:
      "Desenvolvimento de um ecossistema backend para mobilidade urbana, visando alta vazão, latência reduzida e estudo prático aprofundado da linguagem Go.",
    problem:
      "Aplicações de mobilidade exigem processamento intensivo de geolocalização e respostas rápidas. O modelo tradicional de persistência direta em banco relacional para cada atualização de coordenadas gera gargalos severos de I/O.",
    objective:
      "Construir uma API em Go capaz de processar coordenadas geográficas em tempo real, utilizando Redis para consultas geoespaciais eficientes e armazenamento em cache de condutores e passageiros.",
    solution:
      "Construção de uma API em Go utilizando goroutines para concorrência leve. O Redis foi adotado para comandos geoespaciais e cache de alta velocidade, mantendo dados efêmeros em memória para garantir latência mínima.",
    contribution:
      "Concepção e implementação completa da API em Go, configuração dos comandos geoespaciais no Redis, modelagem dos contratos REST e disponibilização do código fonte público no GitHub.",
    architectureHighlights: [
      "Consultas geoespaciais de alta performance com comandos nativos do Redis",
      "Processamento concorrente e leve com goroutines na linguagem Go",
      "Camada de cache in-memory para redução drástica de I/O em disco",
      "Código fonte 100% aberto e documentado no GitHub",
    ],
    technicalDecisions: [
      {
        title: "Adoção de Go para o Backend",
        rationale:
          "Permitiu explorar concorrência nativa, tipagem estática e compilação para binário único com consumo mínimo de memória.",
      },
      {
        title: "Redis Geoespacial",
        rationale:
          "Eliminou cálculos matemáticos pesados de raio de distância na camada de aplicação, delegando as buscas de proximidade diretamente ao Redis.",
      },
    ],
    challengesAndLearnings: [
      "Domínio de ponteiros, canais e estruturas de dados idiomáticas em Go.",
      "Gerenciamento atômico de chaves e TTL em cache distribuído.",
    ],
    techStack: ["Go", "Redis", "Docker", "Geolocalização", "APIs REST"],
  },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectsData.find((p) => p.slug === slug);
}
