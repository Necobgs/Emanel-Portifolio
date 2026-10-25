import type { Metadata } from "next";
import "./globals.css";
import { getSiteUrl } from "@/lib/site";
import { profileData } from "@/data/profile";
import { RootJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Emanuel Borges de Oliveira | Engenharia de Software & Automação RPA",
    template: "%s | Emanuel Borges de Oliveira",
  },
  description:
    "Portfólio de Emanuel Borges de Oliveira — Engenheiro de Software Fullstack com foco em Backend de Alta Performance, Arquitetura de Filas com RabbitMQ e Automação de Processos (RPA).",
  keywords: [
    "Emanuel Borges de Oliveira",
    "Engenheiro de Software",
    "Backend Engineer",
    "Automação RPA",
    "Python",
    "Golang",
    "Node.js",
    "NestJS",
    "RabbitMQ",
    "Redis",
    "PostgreSQL",
    "Docker",
    "Playwright",
    "Sistemas Distribuídos",
    "Arquitetura de Software",
  ],
  authors: [{ name: profileData.name, url: profileData.github }],
  creator: profileData.name,
  publisher: profileData.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Emanuel Borges de Oliveira | Engenharia de Software & Automação RPA",
    description:
      "Sistemas distribuídos, engenharia de backend resiliente, arquitetura assíncrona com RabbitMQ e automação corporativa.",
    url: "/",
    siteName: "Emanuel Borges de Oliveira — Portfólio de Engenharia",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emanuel Borges de Oliveira | Engenharia de Software & Automação RPA",
    description:
      "Sistemas distribuídos, engenharia de backend resiliente, arquitetura assíncrona com RabbitMQ e automação corporativa.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark h-full antialiased scroll-smooth">
      <head>
        <RootJsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-[#090A0F] text-[#F8FAFC] font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}
