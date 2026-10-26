export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  type: "Profissional" | "Acadêmica";
  description: string;
  achievements: string[];
  techStack: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "goes-pleno",
    role: "Analista de Desenvolvimento Pleno",
    company: "Góes & Nicoladelli",
    location: "Criciúma, SC",
    period: "Desde Março de 2026",
    isCurrent: true,
    type: "Profissional",
    description:
      "Atuação focada no ecossistema de automações com Python e na sustentação/evolução de sistemas corporativos internos.",
    achievements: [
      "Desenvolvimento e evolução de portal interno(intranet) full-stack utilizando NestJS, Angular 14 e Postgres",
      "Construção de extensão para Google Chrome utilizando React e Vite para login automático nos portais internos",
      "Estruturação de uma arquitetura padronizada para as dezenas de automações corporativas da equipe de automação",
      "Mentoria aos novos colaboradores da equipe de automação",
      "Participação de mapeamento de fluxos e sugestões ativas para otimizações em processos internos",
    ],
    techStack: ["Python", "NestJS", "PostgreSQL", "React", "Vite", "Angular 14", "Docker"],
  },
  {
    id: "goes-junior",
    role: "Analista de Desenvolvimento",
    company: "Góes & Nicoladelli",
    location: "Criciúma, SC",
    period: "Setembro de 2023 — Março de 2026",
    isCurrent: false,
    type: "Profissional",
    description:
      "Desenvolvimento de soluções de automação em Python e resolução de problemas analíticos de otimização de fluxo de trabalho.",
    achievements: [
      "Construção e sustentação de dezenas de ferramentas de automação e robôs com execução diária, focados em regras de negócio, estabilidade e redução de atividades manuais",
      "Aprimoramento contínuo sobre as ferramentas propostas e suas regras de negócio, com o objetivo de otimizar processos e reduzir tarefas manuais e/ou repetitivas",
    ],
    techStack: ["Python", "Automação Web", "PostgreSQL", "Git", "Selenium", "Playwright", "HTML", "CSS", "JavaScript", "Typescript"],
  },
  {
    id: "goes-setor-sistema",
    role: "Auxiliar de Sistemas",
    company: "Góes & Nicoladelli",
    location: "Criciúma, SC",
    period: "Fereveiro de 2023 — Setembro de 2023",
    isCurrent: false,
    type: "Profissional",
    description:
      "Atuação no time de sistemas, conhecendo os sistemas internos da empresa, suas aplicações no dia a dia e auxiliando usuários com dúvidas e problemas técnicos.",
    achievements: [
      "Organização e manutenção de documentos técnicos e manuais de uso dos sistemas internos",
      "Suporte direto a usuários, solucionando dúvidas e problemas técnicos relacionados aos sistemas",
      "Auxílio em testes e validações de novas funcionalidades e correções de bugs",
      "Experiência no uso real de um sistema, conhecimento de regras de negócio e fluxo de trabalho",
      "Atuação com RPA em segundo plano",
    ],
    techStack: ["Python", "Regras de negócio", "Sistemas internos", "Suporte a usuários", "Testes e validações"],
  },
  {
    id: "teia-web",
    role: "Estágio de Desenvolvimento",
    company: "Teia Desenvolvimento Web",
    location: "Criciúma, SC",
    period: "Abril de 2022 — Setembro de 2022",
    isCurrent: false,
    type: "Profissional",
    description:
      "Primeiro contato direto com regras de negócios reais e desenvolvimento de interfaces web estruturadas.",
    achievements: [
      "Implementação de interfaces responsivas utilizando Angular 13, Bootstrap e jQuery",
      "Adaptação a fluxos ágeis de entrega de código e alinhamento com requisitos de clientes",
    ],
    techStack: ["Angular 13", "Bootstrap", "jQuery", "TypeScript"],
  },
  {
    id: "agrosys",
    role: "Estágio de Desenvolvimento",
    company: "Agrosys",
    location: "Criciúma, SC",
    period: "Janeiro de 2022 — Março de 2022",
    isCurrent: false,
    type: "Profissional",
    description:
      "Imersão em ambiente corporativo de tecnologia com múltiplos times e sistemas de gestão empresarial.",
    achievements: [
      "Compreensão de padrões corporativos de arquitetura e divisão de responsabilidades de times",
      "Contato com linguagens corporativas consolidadas (Progress) e fluxos de suporte a software de gestão",
    ],
    techStack: ["Progress", "Padrões Corporativos", "Git"],
  },
  {
    id: "esucri",
    role: "Graduação em Tecnologia da Informação",
    company: "ESUCRI",
    location: "Criciúma, SC",
    period: "Fevereiro de 2023 — Novembro de 2026 (Previsão)",
    isCurrent: true,
    type: "Acadêmica",
    description:
      "Formação ampla unindo práticas de desenvolvimento contemporâneo (MongoDB, PostgreSQL, NestJS, Next.js, React e Arduino) a fundamentos teóricos de arquitetura de software e engenharia de dados.",
    achievements: [
      "Desenvolvimento do projeto de gerenciamento para o Instituto Diomício Freitas (IEEDF)",
      "Projetos práticos envolvendo microsserviços, modelagem relacional e ecossistemas IoT",
    ],
    techStack: ["NestJS", "Next.js", "PostgreSQL", "MongoDB", "React"],
  },
  {
    id: "cedup",
    role: "Ensino Médio e Técnico em Informática",
    company: "CEDUP Abílio Paulo",
    location: "Criciúma, SC",
    period: "Fevereiro de 2021 — Dezembro de 2023",
    isCurrent: false,
    type: "Acadêmica",
    description:
      "Base sólida em lógica de programação e algoritmos estruturados através de Pascal, Delphi e PHP com entrega de Projeto Integrador.",
    achievements: [
      "Formação técnica com ênfase em fundamentos de computação e estrutura de dados",
      "Desenvolvimento de projetos práticos de conclusão de curso",
    ],
    techStack: ["Lógica de Programação", "Pascal", "Delphi", "PHP"],
  },
];
