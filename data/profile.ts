export interface ProfileData {
  name: string;
  role: string;
  headline: string;
  location: string;
  availability: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  summary: string;
  heroMetrics: {
    label: string;
    value: string;
    description: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Emanuel Borges de Oliveira",
  role: "Engenheiro de Software Fullstack",
  headline: "Especialista em Backend de Alta Performance & Automação RPA",
  location: "Criciúma, Santa Catarina - Brasil (Remoto / Híbrido)",
  availability: "Disponível para novos desafios e projetos",
  email: "emanuelborgesdev@gmail.com",
  github: "https://github.com/Necobgs",
  linkedin: "https://www.linkedin.com/in/emanuel-bgs-dev/",
  resumeUrl: "/curriculo-emanuel-borges.pdf",
  summary:
    "Desenvolvedor fullstack com sólido direcionamento para engenharia de backend, microsserviços, mensageria e automação de processos corporativos (RPA). Experiência na padronização de arquiteturas resilientes em Python, Node.js e Golang, desenvolvimento de bots de alta disponibilidade, integrações assíncronas e observabilidade.",
  heroMetrics: [
    {
      label: "Uptime & Confiabilidade",
      value: "99.9%",
      description: "em automações e serviços críticos de background",
    },
    {
      label: "Eficiência Operacional",
      value: "[A DEFINIR]",
      description: "horas manuais convertidas em fluxos automatizados",
    },
    {
      label: "Ecossistemas Integrados",
      value: "Backend & RPA",
      description: "Python, Golang, NestJS, Redis e PostgreSQL",
    },
  ],
};
