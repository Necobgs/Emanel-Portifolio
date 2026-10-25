export type SkillLevel =
  | "Uso Profissional Contínuo"
  | "Produção & Integração"
  | "Aprendizado Complementar";

export interface SkillItem {
  name: string;
  context: string;
  level: SkillLevel;
}

export interface SkillGroup {
  id: string;
  category: string;
  description: string;
  skills: SkillItem[];
}

export const skillsData: SkillGroup[] = [
  {
    id: "backend",
    category: "Backend & APIs",
    description:
      "Construção de APIs corporativas estruturadas, regras de negócio e serviços assíncronos.",
    skills: [
      {
        name: "TypeScript",
        context: "Linguagem primária para APIs tipadas, contratos estritos e ferramentas internas.",
        level: "Uso Profissional Contínuo",
      },
      {
        name: "Node.js",
        context: "Execução assíncrona, microsserviços, processamento de filas e scripts operacionais.",
        level: "Uso Profissional Contínuo",
      },
      {
        name: "NestJS",
        context: "Arquitetura modular corporativa, injeção de dependência e APIs corporativas.",
        level: "Uso Profissional Contínuo",
      },
      {
        name: "Python",
        context: "Lógica analítica, robôs de dados, manipulação de arquivos e serviços de automação.",
        level: "Uso Profissional Contínuo",
      },
      {
        name: "APIs REST",
        context: "Desenho de endpoints RESTful, contratos HTTP bem definidos e tratamento de erros.",
        level: "Uso Profissional Contínuo",
      },
    ],
  },
  {
    id: "rpa",
    category: "RPA & Automação de Processos",
    description:
      "Desenvolvimento de robôs para fluxos operacionais de alta complexidade e rotinas headless.",
    skills: [
      {
        name: "Automações em Python",
        context: "Extração, transformação de dados e orquestração de rotinas em lote sem intervenção manual.",
        level: "Uso Profissional Contínuo",
      },
      {
        name: "Playwright",
        context: "Automação moderna de navegadores headless com tratamento de concorrência e seletores dinâmicos.",
        level: "Uso Profissional Contínuo",
      },
      {
        name: "Selenium",
        context: "Navegação automatizada, emulação de ações do usuário e automação de sistemas legados.",
        level: "Produção & Integração",
      },
      {
        name: "Integrações HTTP",
        context: "Consumo de endpoints externos, controle de rate-limit, retries e autenticações complexas.",
        level: "Uso Profissional Contínuo",
      },
    ],
  },
  {
    id: "database",
    category: "Bancos de Dados & SQL",
    description:
      "Persistência relacional, garantia de integridade transacional e consultas otimizadas.",
    skills: [
      {
        name: "PostgreSQL",
        context: "Modelagem de dados, índices, constraints e transações ACID em aplicações de produção.",
        level: "Uso Profissional Contínuo",
      },
      {
        name: "MySQL",
        context: "Manutenção e suporte a schemas relacionais corporativos e consultas integradas.",
        level: "Produção & Integração",
      },
      {
        name: "SQL & Modelagem",
        context: "Estruturação de consultas, joins complexos, agregação e normalização de dados.",
        level: "Uso Profissional Contínuo",
      },
    ],
  },
  {
    id: "messaging-infra",
    category: "Mensageria & Infraestrutura",
    description:
      "Comunicação assíncrona, isolamento em contêineres e esteiras de entrega contínua.",
    skills: [
      {
        name: "RabbitMQ",
        context: "Orquestração de filas de mensagens, buffers de tarefas e desacoplamento de serviços.",
        level: "Produção & Integração",
      },
      {
        name: "Redis",
        context: "Cache in-memory, controle de estados voláteis e desduplicação de eventos em tempo real.",
        level: "Produção & Integração",
      },
      {
        name: "Docker",
        context: "Padronização de ambientes de desenvolvimento e conteinerização de microsserviços.",
        level: "Produção & Integração",
      },
      {
        name: "GitLab CI/CD",
        context: "Pipelines automatizados de verificação, build e deploy de aplicações e rotinas.",
        level: "Produção & Integração",
      },
      {
        name: "HashiCorp Vault",
        context: "Gerenciamento seguro de credenciais, segredos e tokens sensíveis de automação.",
        level: "Produção & Integração",
      },
    ],
  },
  {
    id: "observability",
    category: "Observabilidade & Monitoramento",
    description:
      "Instrumentação para garantir visibilidade operacional e detecção proativa de falhas.",
    skills: [
      {
        name: "Logs Estruturados",
        context: "Padronização de logs com rastreabilidade de requisições e identificadores de lote.",
        level: "Uso Profissional Contínuo",
      },
      {
        name: "Monitoramento de Rotinas",
        context: "Acompanhamento do status de execução, tempo de ciclo e volume de dados processados.",
        level: "Uso Profissional Contínuo",
      },
      {
        name: "Dashboards Operacionais",
        context: "Visualização consolidada de métricas de sucesso, taxas de retry e gargalos.",
        level: "Produção & Integração",
      },
      {
        name: "Alertas em Tempo Real",
        context: "Notificações automáticas em caso de exceções críticas ou interrupção de fluxo.",
        level: "Produção & Integração",
      },
    ],
  },
  {
    id: "complementary",
    category: "Aprendizado Complementar & Exploração",
    description:
      "Tecnologias estudadas ativamente para ampliação de repertório e versatilidade técnica.",
    skills: [
      {
        name: "C# / .NET",
        context: "Estudo de arquitetura orientada a objetos no ecossistema Microsoft e backend robusto.",
        level: "Aprendizado Complementar",
      },
      {
        name: "WPF (Windows Desktop)",
        context: "Exploração de desenvolvimento desktop corporativo para utilitários de suporte operacional.",
        level: "Aprendizado Complementar",
      },
      {
        name: "Golang",
        context: "Prática em concorrência (goroutines/channels) aplicada a projetos de alta performance.",
        level: "Aprendizado Complementar",
      },
    ],
  },
];
