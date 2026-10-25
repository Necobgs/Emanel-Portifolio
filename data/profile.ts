export interface ProfileData {
  name: string;
  role: string;
  headline: string;
  location: string;
  availability: string;
  email: string;
  phone: string;
  whatsapp: string;
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
  role: "Engenheiro de Software (Backend & Automação RPA)",
  headline: "Construindo software que conecta automação, backend e negócio.",
  location: "Criciúma, Santa Catarina - Brasil (Remoto / Híbrido)",
  availability: "Disponível para novos desafios e projetos",
  email: "emanuelborgesdev@gmail.com",
  phone: "+55 48 99679-4400",
  whatsapp: "https://wa.me/5548996794400",
  github: "https://github.com/Necobgs",
  linkedin: "https://www.linkedin.com/in/emanuel-bgs-dev/",
  resumeUrl: "/curriculo-emanuel-borges.pdf",
  summary:
    "Desenvolvedor com atuação focada em engenharia de backend, mensageria com RabbitMQ, microsserviços e automação de processos corporativos (RPA). Experiência na padronização de arquiteturas resilientes em Python e NestJS/TypeScript, desenvolvimento de robôs de alta disponibilidade, integrações assíncronas e observabilidade.",
  heroMetrics: [
    {
      label: "Automações em Produção",
      value: "Dezenas de Rotinas",
      description: "ativas com execução diária e monitoramento contínuo",
    },
    {
      label: "Especialização Técnica",
      value: "Backend & RPA",
      description: "Python, NestJS, RabbitMQ, Redis e PostgreSQL",
    },
    {
      label: "Localização & Formato",
      value: "Criciúma / Remoto",
      description: "Santa Catarina, Brasil (disponível remoto e híbrido)",
    },
  ],
};
