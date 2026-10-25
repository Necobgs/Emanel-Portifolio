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
  headline: "Conectando regras de negócio, automações resilientes e engenharia de backend.",
  introduction:
    "Minha atuação profissional é guiada por uma premissa clara: software existe para destravar valor de negócio. Especializado no desenvolvimento de automações de processos (RPA) e serviços de backend, foco em transformar rotinas manuais lentas e vulneráveis a falhas em sistemas previsíveis, auditáveis e de alta confiabilidade.",
  careerFocus:
    "Com atuação contínua no desenvolvimento e sustentação de robôs em Python e APIs em NestJS/TypeScript, trabalho no dia a dia integrando bancos relacionais (PostgreSQL), comunicação entre sistemas legados e esteiras de monitoramento operacional.",
  architectureVision:
    "Tenho um direcionamento contínuo para evoluir em Arquitetura de Software. Dedico tempo ao estudo prático de desacoplamento de serviços, mensageria com RabbitMQ, cache distribuído com Redis, controle estrito de concorrência e estratégias defensivas de resiliência.",
  softSkills: [
    {
      id: "problem-solving",
      title: "Resolução de Problemas & Regras de Negócio",
      behavior: "Postura investigativa para traduzir fluxos manuais complexos em código confiável.",
      context:
        "Tratamento defensivo de exceções e instabilidades externas (seletores voláteis, timeouts, rate-limits), eliminando retrabalho operacional.",
    },
    {
      id: "code-standards",
      title: "Padronização & Manutenibilidade de Código",
      behavior: "Organização de padrões de código limpos, performáticos e reutilizáveis.",
      context:
        "Iniciativa direta na estruturação de frameworks internos para robôs e mentoria aos companheiros de equipe na adoção de boas práticas de engenharia.",
    },
    {
      id: "systemic-thinking",
      title: "Visão Sistêmica de Ponta a Ponta",
      behavior: "Compreensão da cadeia completa: do valor de negócio à infraestrutura.",
      context:
        "Avaliação do impacto de cada mudança no ciclo de vida: ingestão do evento, processamento assíncrono em fila, consistência transacional e telemetria.",
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
        "Tratamento defensivo com retries exponenciais, isolamento de escopo e logging estruturado.",
      ],
    },
    {
      step: "04",
      title: "Monitorar & Evoluir",
      objective: "Garantir previsibilidade operacional e suporte ágil.",
      details: [
        "Telemetria com métricas de tempo de execução, taxas de sucesso e alertas automáticos de falha.",
        "Refatoração contínua para redução de débito técnico e melhoria de performance.",
      ],
    },
  ],
};
