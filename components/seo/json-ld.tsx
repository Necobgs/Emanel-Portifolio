import React from "react";
import { profileData } from "@/data/profile";
import { ProjectDetail } from "@/data/projects";
import { getSiteUrl, getAbsoluteUrl } from "@/lib/site";

export function RootJsonLd() {
  const siteUrl = getSiteUrl();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    jobTitle: profileData.role,
    headline: profileData.headline,
    description: profileData.summary,
    url: siteUrl,
    telephone: profileData.phone,
    email: profileData.email,
    image: `${siteUrl}/icon.svg`,
    sameAs: [profileData.github, profileData.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Criciúma",
      addressRegion: "Santa Catarina",
      addressCountry: "BR",
    },
    knowsAbout: [
      "Engenharia de Software",
      "Arquitetura de Backend",
      "Automação de Processos Robóticos (RPA)",
      "Sistemas Distribuídos",
      "Processamento Assíncrono",
      "Python",
      "Node.js",
      "NestJS",
      "RabbitMQ",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Playwright",
      "TypeScript",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${profileData.name} — Portfólio de Engenharia`,
    url: siteUrl,
    inLanguage: "pt-BR",
    description: profileData.summary,
    author: {
      "@type": "Person",
      name: profileData.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

export function ProjectJsonLd({ project }: { project: ProjectDetail }) {
  const projectUrl = getAbsoluteUrl(`/projects/${project.slug}`);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: project.title,
    description: project.summary,
    url: projectUrl,
    inLanguage: "pt-BR",
    author: {
      "@type": "Person",
      name: profileData.name,
      url: getSiteUrl(),
    },
    keywords: project.techStack.join(", "),
    proficiencyLevel: "Expert",
    articleBody: `${project.context} ${project.problem} ${project.solution}`,
    about: {
      "@type": "SoftwareApplication",
      name: project.title,
      applicationCategory: project.category,
      operatingSystem: "Linux, Windows, Docker",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  );
}
