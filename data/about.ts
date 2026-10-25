export interface SoftSkillItem {
  id: string;
  title: string;
  behavior: string;
  context: string;
}

export interface ApproachStep {
  step: string;
  title: string;
  objective: string;
  details: string[];
}

export interface AboutContent {
  headline: string;
  introduction: string;
  careerFocus: string;
  architectureVision: string;
  softSkills: SoftSkillItem[];
  approach: ApproachStep[];
}

export const aboutData: AboutContent = {
  headline: "Conectando regras de negócio, automações resilientes e engenharia backend.",
  introduction:
    "Minha atuação profissional é guiada por uma premissa clara: software existe para destravar valor de negócio. Especializado no desenvolvimento de automações de processos (RPA) e serviços de backend, foco em transformar rotinas manuais lentas e vulneráveis a falhas em sistemas previsíveis, auditáveis e de alta confiabilidade.",
  careerFocus:
    "Com experiência sólida no desenvolvimento e manutenção de robôs corporativos e APIs corporativas em Python, TypeScript e NestJS, trabalho no dia a dia com integração de bancos de dados, comunicação entre sistemas e esteiras de monitoramento.",
  architectureVision:
    "Tenho um direcionamento contínuo para evoluir em Arquitetura de Software. Dedico tempo ao estudo prático de padrões de desacoplamento, mensageria com RabbitMQ, cache distribuído com Redis, concorrência e estratégias de resiliência, buscando desenhar soluções que permaneçam sustentáveis à medida que a organização escala.",
  softSkills: [
    {
      id: "fast-learning",
      title: "Aprendizado Rápido",
      behavior: "Capacidade de assimilar rapidamente novas stacks, ferramentas e ecossistemas.",
      context:
        "Adaptação ágil a novos desafios técnicos conforme o projeto exige, desde o aprofundamento em NestJS e Golang até a exploração do ecossistema .NET corporativo.",
    },
    {
      id: "product-vision",
      title: "Visão de Produto",
      behavior: "Foco no impacto prático gerado para o usuário e na saúde da operação.",
      context:
        "Compreensão de que automações e APIs devem prioritariamente poupar horas de trabalho, eliminar retrabalho humano e garantir conformidade operacional.",
    },
    {
      id: "communication",
      title: "Comunicação Técnica Clara",
      behavior: "Habilidade de dialogar com setores operacionais e equipes multidisciplinares.",
      context:
        "Tradução de regras de negócio confusas ou implícitas em fluxogramas lógicos, contratos de dados e especificações técnicas bem alinhadas.",
    },
    {
      id: "problem-solving",
      title: "Resolução de Problemas",
      behavior: "Postura investigativa para identificar a causa-raiz de falhas em processos críticos.",
      context:
        "Tratamento defensivo de exceções e instabilidades externas (seletores web voláteis, timeouts, rate-limits) sem soluções paliativas.",
    },
    {
      id: "systemic-thinking",
      title: "Pensamento Sistêmico",
      behavior: "Visão holística da arquitetura, do input do usuário à infraestrutura.",
      context:
        "Avaliação do impacto de cada mudança em todo o fluxo: da ingestão do evento, passando por filas e consistência transacional até a emissão de métricas.",
    },
    {
      id: "continuous-improvement",
      title: "Autonomia & Melhoria Contínua",
      behavior: "Iniciativa para propor melhorias de engenharia e elevar a barra de qualidade.",
      context:
        "Participação ativa na organização de padrões de código mais performáticos para automações e mentoria a colegas de equipe na estruturação de novos robôs.",
    },
  ],
  approach: [
    {
      step: "01",
      title: "Entender o Problema",
      objective: "Imersão nas regras operacionais antes da primeira linha de código.",
      details: [
        "Mapeamento detalhado do fluxo manual e das dependências entre sistemas.",
        "Identificação de pontos de atrito, cenários de exceção e requisitos de conformidade.",
      ],
    },
    {
      step: "02",
      title: "Desenhar a Solução",
      objective: "Estruturação de arquitetura simples, modular e defensiva.",
      details: [
        "Definição de contratos claros de dados e escolha das tecnologias certas para o problema.",
        "Planejamento de idempotência, tratamento de falhas transitórias e persistência segura.",
      ],
    },
    {
      step: "03",
      title: "Implementar com Rigor",
      objective: "Desenvolvimento com tipagem estrita e padrões limpos.",
      details: [
        "Código modular e testável com baixo acoplamento entre os componentes.",
        "Separação clara entre a lógica de negócio, a camada de acesso a dados e os adapters externos.",
      ],
    },
    {
      step: "04",
      title: "Monitorar & Observar",
      objective: "Visibilidade em tempo real sobre a saúde e o ciclo de vida da solução.",
      details: [
        "Instrumentação de logs estruturados correlacionados por Job ID para auditoria rápida.",
        "Dashboards e alertas automáticos para resposta imediata a qualquer desvio operacional.",
      ],
    },
    {
      step: "05",
      title: "Melhorar & Evoluir",
      objective: "Refinamento contínuo baseado em telemetria e feedback de uso.",
      details: [
        "Análise de métricas de tempo de execução e latência para otimizar gargalos identificados.",
        "Documentação técnica clara para garantir a longevidade e fácil manutenção do sistema.",
      ],
    },
  ],
};
