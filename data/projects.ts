export type ProjectCategory =
  | "Backend & Orquestração"
  | "RPA & Automação"
  | "Arquitetura & Filas"
  | "Desktop & .NET";

export interface TechnicalDecision {
  title: string;
  rationale: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  summary: string;
  tagline: string;
  category: ProjectCategory;
  status: "Em Produção" | "Concluído" | "Em Desenvolvimento" | "Estudo Aplicado";
  featured: boolean;
  isConfidential?: boolean;
  context: string;
  problem: string;
  objective: string;
  solution: string;
  contribution: string;
  architectureHighlights: string[];
  technicalDecisions: TechnicalDecision[];
  challengesAndLearnings: string[];
  techStack: string[];
  diagramType?: "orchestration" | "rpa-engine" | "async-queues" | "wpf-desktop";
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
    context:
      "Ambiente corporativo com dezenas de tarefas repetitivas e rotinas operacionais sem controle centralizado de estados ou dependências (código proprietário corporativo sob sigilo/NDA).",
    problem:
      "Ausência de visibilidade centralizada sobre a execução de automações. Rotinas eram executadas de forma dispersa, dificultando identificar se um robô falhou, se completou com sucesso ou se travou em loop, além da falta de relatórios unificados para tomada de decisão.",
    objective:
      "Centralizar em um portal seguro o agendamento de tarefas, controle rigoroso de estados de execução (Pendente, Em Execução, Sucesso, Falha), geração de relatórios consolidados e orquestração assíncrona de workers.",
    solution:
      "Construção de uma API backend modular em NestJS e TypeScript. O agendamento dispara mensagens no RabbitMQ para distribuição assíncrona entre workers especializados em Python. O Redis gerencia estados em memória e locks de concorrência, enquanto o PostgreSQL mantém o histórico transacional auditável.",
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
      "Criação de classes base e decorators defensivos em Python. A arquitetura implementa o padrão Page Object, estratégias de retry exponencial com jitter, interceptadores de requisições com renovação automática de sessão e emissão de logs estruturados em JSON.",
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
    techStack: ["Python", "Playwright", "Selenium", "Requests", "Docker", "GitLab CI/CD"],
    diagramType: "rpa-engine",
  },
  {
    slug: "move-fast-backend",
    title: "Move Fast — Backend Otimizado para Mobilidade com Go & Redis",
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
    diagramType: "async-queues",
  },
  {
    slug: "gestao-instituto-diomicio-freitas",
    title: "Sistema de Gestão Interna para o Instituto Diomício Freitas",
    tagline:
      "Backend modular em NestJS e PostgreSQL desenvolvido para a ONG IEEDF.",
    summary:
      "Projeto social desenvolvido em parceria com a ESUCRI para centralizar os registros acadêmicos e assistenciais dos alunos do Instituto Diomício Freitas, eliminando planilhas manuais e inconsistências.",
    category: "Backend & Orquestração",
    status: "Concluído",
    featured: true,
    githubUrl: "https://github.com/Necobgs/instituto-diomicio-freitas-backend",
    context:
      "O Instituto Diomício Freitas atende alunos com necessidades especiais e gerenciava informações de forma descentralizada em planilhas, dificultando o acompanhamento pedagógico e assistencial.",
    problem:
      "Inconsistências em registros de matrícula, histórico de atendimentos disperso e retrabalho manual para consolidar dados exigidos por órgãos conveniados.",
    objective:
      "Desenvolver um backend centralizado, seguro e auditável para organizar o cadastro e histórico pedagógico dos alunos da instituição.",
    solution:
      "API desenvolvida em NestJS com TypeScript e PostgreSQL. Implementação de validação rigorosa de dados via DTOs, migrações automatizadas e relatórios consolidados para a equipe administrativa.",
    contribution:
      "Arquitetura do backend em NestJS, modelagem das entidades relacionais no PostgreSQL, implementação da camada de autenticação/autorização e entrega do código em repositório aberto.",
    architectureHighlights: [
      "Arquitetura modular em NestJS com validação de dados via DTOs",
      "Modelagem relacional e integridade transacional no PostgreSQL",
      "Controle de acesso seguro e histórico auditável de alterações",
      "Código fonte 100% aberto e auditável no GitHub",
    ],
    technicalDecisions: [
      {
        title: "NestJS & TypeScript",
        rationale:
          "Proporcionou uma estrutura corporativa robusta com injeção de dependência e tipagem estrita de contratos de dados.",
      },
      {
        title: "PostgreSQL Transacional",
        rationale:
          "Garantia de integridade referencial para dados acadêmicos e históricos de atendimento sensíveis.",
      },
    ],
    challengesAndLearnings: [
      "Mapeamento de requisitos com usuários reais da ONG para atender necessidades práticas do balcão de atendimento.",
      "Estruturação de consultas eficientes com relacionamentos múltiplos em banco relacional.",
    ],
    techStack: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "Docker"],
    diagramType: "orchestration",
  },
  {
    slug: "arquitetura-processamento-assincrono",
    title: "Arquitetura de Processamento Assíncrono & Tolerância a Falhas",
    tagline:
      "Padrões de mensageria com RabbitMQ, Dead-Letter Queues e controle estrito de concorrência.",
    summary:
      "Estudo arquitetural aplicado sobre o desenho de filas distribuídas, políticas de descarte seguro, confirmação manual de entrega (ACK) e resiliência transacional sob alta carga.",
    category: "Arquitetura & Filas",
    status: "Estudo Aplicado",
    featured: true,
    context:
      "Camada arquitetural crítica responsável por garantir que picos de demanda ou indisponibilidade de serviços terceiros não causem perda de mensagens nem interrupção das operações.",
    problem:
      "Sistemas síncronos sofrem com travamentos em cadeia (cascading failures): se um sistema terceiro fica lento ou fora do ar, requisições HTTP empilham conexões, esgotam recursos do servidor e derrubam a plataforma.",
    objective:
      "Construir uma topologia resiliente de mensageria assíncrona com tratamento automático de falhas, filas de quarentena para mensagens defeituosas e garantia de entrega com concorrência controlada.",
    solution:
      "Implementação de filas no RabbitMQ com ACK manual após confirmação de persistência. Mensagens com falhas recorrentes são roteadas para Dead-Letter Queues (DLQ) para análise posterior, sem bloquear o fluxo principal. O Redis atua no controle de locks distribuídos para evitar processamentos simultâneos.",
    contribution:
      "Desenho dos fluxos de roteamento de filas, parametrização dos limites de concorrência por consumidor e implementação dos mecanismos de idempotência.",
    architectureHighlights: [
      "ACK manual (acknowledgement) apenas após execução e persistência bem-sucedidas",
      "Dead-Letter Queues (DLQ) para isolamento seguro de mensagens anômalas",
      "Locks distribuídos via Redis para prevenção de race conditions",
      "Controle de concorrência por worker para não exceder limites de infraestrutura",
      "Idempotência com identificador único de mensagem contra duplicações",
    ],
    technicalDecisions: [
      {
        title: "Dead-Letter Exchange Dedicada",
        rationale:
          "Mensagens com erros irrecuperáveis são direcionadas para análise sem interromper o processamento das milhares de mensagens saudáveis seguintes.",
      },
      {
        title: "Confirmação de Entrega Granular",
        rationale:
          "Se um worker cair no meio de um processamento, a mensagem retorna à fila automaticamente graças ao modelo de ACK tardio.",
      },
    ],
    challengesAndLearnings: [
      "Garantia de idempotência em sistemas distribuídos sem depender de transações distribuídas pesadas (2PC).",
      "Domínio prático dos trade-offs entre vazão (throughput) e garantia estrita de ordem de entrega.",
    ],
    techStack: ["RabbitMQ", "Redis", "TypeScript", "Node.js", "Docker", "PostgreSQL"],
    diagramType: "async-queues",
  },
  {
    slug: "gerenciador-desktop-salao",
    title: "Gerenciador Desktop para Salão de Beleza & Estética",
    tagline:
      "Aplicação desktop corporativa em C#, WPF, biblioteca WPF UI e banco SQLite local.",
    summary:
      "Projeto pessoal desenvolvido para pequenas empresas de serviços, focado em agilidade operacional, interface moderna com Fluent Design e persistência local 100% offline.",
    category: "Desktop & .NET",
    status: "Em Desenvolvimento",
    featured: true,
    context:
      "Pequenos estabelecimentos comerciais costumam controlar seus agendamentos, fichas de clientes e serviços em anotações manuais ou planilhas suscetíveis a inconsistências.",
    problem:
      "Dificuldade de controle rápido no balcão de atendimento, falta de histórico centralizado de clientes e dependência de ferramentas lentas ou com mensalidades inviáveis para negócios iniciantes.",
    objective:
      "Desenvolver um software desktop leve, intuitivo, esteticamente refinado e com operação totalmente local sem dependência de internet para consultas de rotina.",
    solution:
      "Aplicação desenvolvida em C# com arquitetura MVVM limpa. A camada de interface utiliza a biblioteca moderna WPF UI para estética alinhada ao Windows 11 com suporte a tema escuro. A persistência utiliza SQLite com Entity Framework Core para garantir velocidade de consulta e portabilidade de dados.",
    contribution:
      "Concepção completa do projeto: levantamento de requisitos, arquitetura em camadas (Views, ViewModels, Services), modelagem do schema relacional e implementação de testes locais.",
    architectureHighlights: [
      "Arquitetura MVVM pura com CommunityToolkit.Mvvm para desacoplamento",
      "Interface moderna e limpa construída com WPF UI e Fluent Design",
      "Persistência local leve e portátil em SQLite via Entity Framework Core",
      "Injeção de dependência nativa do Microsoft.Extensions.DependencyInjection",
      "Tratamento defensivo para validações de formulário e consistência local",
    ],
    technicalDecisions: [
      {
        title: "Adoção do Padrão MVVM",
        rationale:
          "Permitiu isolar completamente a lógica de manipulação de dados dos arquivos XAML, facilitando testes unitários e manutenções visuais.",
      },
      {
        title: "SQLite Embarcado",
        rationale:
          "Eliminou a necessidade de instalar servidores de banco de dados pesados nas máquinas dos clientes, tornando o instalador simples e portátil.",
      },
      {
        title: "WPF UI para Fluent Design",
        rationale:
          "Proporcionou uma experiência de usuário contemporânea e profissional, superando a aparência tradicional e cinzenta de softwares desktop legados.",
      },
    ],
    challengesAndLearnings: [
      "Aprofundamento na sintaxe do XAML, data binding bidirecional e comandos assíncronos em aplicações de desktop.",
      "Gerenciamento correto de conexões de contexto do Entity Framework Core em aplicações com interface de usuário reativa.",
    ],
    techStack: ["C#", ".NET", "WPF", "WPF UI", "SQLite", "Entity Framework Core", "MVVM"],
    diagramType: "wpf-desktop",
    plannedFeatures: [
      "[Implementado] Cadastro e histórico detalhado de clientes e serviços",
      "[Implementado] Interface moderna com WPF UI e suporte nativo a tema escuro",
      "[Implementado] Persistência local em SQLite com transações seguras",
      "[Planejado] Painel de agendamentos com visão de calendário interativa",
      "[Planejado] Fechamento de comandas e cálculo de comissões por profissional",
      "[Planejado] Exportação de relatórios operacionais em PDF e Excel",
      "[Planejado] Mecanismo de backup e restauração automática do banco local",
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectsData.find((p) => p.slug === slug);
}
