export interface ProfileData {
  name: string;
  role: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  summary: string;
}

export const profileData: ProfileData = {
  name: "Emanuel Borges de Oliveira",
  role: "Engenheiro de Software (Backend & Automação RPA)",
  headline: "Construindo software que conecta automação, backend e negócio.",
  location: "Criciúma, Santa Catarina - Brasil (Remoto / Híbrido)",
  email: "emanuelborgesdev@gmail.com",
  phone: "+55 48 99679-4400",
  whatsapp: "https://wa.me/5548996794400",
  github: "https://github.com/Necobgs",
  linkedin: "https://www.linkedin.com/in/emanuel-bgs-dev/",
  resumeUrl: "/curriculo-emanuel-borges.pdf",
  summary:
    "Desenvolvedor com atuação focada em engenharia de backend, mensageria com RabbitMQ, microsserviços e automação de processos corporativos (RPA). Experiência na padronização de arquiteturas resilientes em Python e NestJS/TypeScript, desenvolvimento de robôs de alta disponibilidade, integrações assíncronas e observabilidade.",
};
