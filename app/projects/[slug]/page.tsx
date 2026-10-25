import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Cpu,
  CheckCircle2,
  ExternalLink,
  Layers,
  HelpCircle,
  Target,
  Wrench,
  AlertTriangle,
  UserCheck,
  Lock,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SystemBadge } from "@/components/ui/system-badge";
import { GithubIcon } from "@/components/ui/icons";
import { getProjectBySlug, projectsData } from "@/data/projects";
import { ProjectDetailDiagram } from "@/components/sections/project-detail-diagram";
import { ProjectJsonLd } from "@/components/seo/json-ld";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Estudo de Caso Não Encontrado",
      description: "O estudo de caso técnico solicitado não foi localizado.",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Emanuel Borges de Oliveira`,
      description: project.summary,
      url: `/projects/${project.slug}`,
      type: "article",
      locale: "pt_BR",
      siteName: "Emanuel Borges de Oliveira — Portfólio de Engenharia",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Emanuel Borges de Oliveira`,
      description: project.summary,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a0c10] text-[#f1f3f7] selection:bg-emerald-500/25 selection:text-emerald-300">
      <ProjectJsonLd project={project} />

      {/* Barra de Navegação Superior da Página de Detalhes */}
      <header className="border-b border-[#1b202e] bg-[#0a0c10]/95 backdrop-blur-md sticky top-0 z-40">
        <Container size="xl">
          <div className="flex items-center justify-between h-14">
            <Link
              href="/#projetos"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#8e95a5] hover:text-[#f1f3f7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded p-1"
            >
              <ArrowLeft className="w-4 h-4 text-emerald-400" />
              <span>Voltar aos Projetos</span>
            </Link>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-block font-mono text-xs text-[#525866]">
                Emanuel Borges • Backend & RPA
              </span>
              <SystemBadge status="active" label={project.status} />
            </div>
          </div>
        </Container>
      </header>

      <main className="py-12 sm:py-16 space-y-16">
        {/* Cabeçalho do Case */}
        <Container size="xl">
          <div className="max-w-4xl space-y-5">
            {/* Breadcrumb / Categoria */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono font-medium bg-[#161b26] text-emerald-300 border border-[#252c3f]">
                <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                {project.category}
              </span>
              <span className="text-xs font-mono text-[#525866]">•</span>
              <span className="text-xs font-mono text-[#8e95a5]">Estudo de Caso Técnico</span>
            </div>

            {/* Título Principal */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#f1f3f7] tracking-tight leading-[1.15]">
              {project.title}
            </h1>

            {/* Tagline de impacto */}
            <p className="text-sm sm:text-base font-mono font-medium text-emerald-400/90 leading-relaxed">
              {project.tagline}
            </p>

            {/* Resumo Executivo */}
            <p className="text-sm sm:text-base text-[#8e95a5] leading-relaxed pt-1">
              {project.summary}
            </p>

            {/* Links / Indicador de Confidencialidade */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="sm" leftIcon={<GithubIcon className="w-3.5 h-3.5" />}>
                    Repositório no GitHub
                  </Button>
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="sm" rightIcon={<ExternalLink className="w-3.5 h-3.5" />}>
                    Acessar Aplicação
                  </Button>
                </a>
              )}
              {project.isConfidential && (
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono bg-[#111520] text-[#8e95a5] border border-[#21293d]">
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Código proprietário corporativo sob sigilo/NDA</span>
                </span>
              )}
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-4 border-t border-[#1b202e] flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono text-[#525866] uppercase tracking-wider mr-2">
                Tecnologias:
              </span>
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#10131b] text-slate-300 border border-[#1b202e]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Container>

        {/* Diagrama Visual Técnico da Arquitetura */}
        {project.diagramType && (
          <Container size="xl">
            <ProjectDetailDiagram type={project.diagramType} />
          </Container>
        )}

        {/* Respostas às 5 Questões Técnicas Centrais */}
        <Container size="xl">
          <div className="mb-8 space-y-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#f1f3f7] tracking-tight">
              Diagnóstico & Engenharia da Solução
            </h2>
            <p className="text-xs sm:text-sm text-[#8e95a5]">
              Detalhamento de problemas, objetivos, arquitetura, decisões técnicas e aprendizados consolidados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* 1. Qual problema existia? */}
            <div className="p-6 rounded-lg border border-[#1b202e] bg-[#10131b] space-y-3">
              <h3 className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>1. O Problema Identificado</span>
              </h3>
              <p className="text-xs text-[#8e95a5] font-mono">Cenário e gargalos anteriores:</p>
              <p className="text-sm text-[#f1f3f7] leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* 2. Qual era o objetivo? */}
            <div className="p-6 rounded-lg border border-[#1b202e] bg-[#10131b] space-y-3">
              <h3 className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                <Target className="w-4 h-4" />
                <span>2. O Objetivo Técnico</span>
              </h3>
              <p className="text-xs text-[#8e95a5] font-mono">Meta e requisitos da solução:</p>
              <p className="text-sm text-[#f1f3f7] leading-relaxed">
                {project.objective}
              </p>
            </div>

            {/* 3. Como a solução foi estruturada? */}
            <div className="md:col-span-2 p-6 rounded-lg border border-[#1b202e] bg-[#10131b] space-y-4">
              <h3 className="flex items-center gap-2 text-xs font-mono font-bold text-[#f1f3f7] uppercase tracking-wider">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>3. Estrutura da Solução</span>
              </h3>
              <p className="text-sm text-[#8e95a5] leading-relaxed">
                {project.solution}
              </p>

              <div className="pt-3 border-t border-[#181d2a] space-y-2">
                <span className="text-[11px] font-mono text-[#525866] uppercase tracking-wider block font-semibold">
                  Pilares de Engenharia da Solução:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.architectureHighlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded border border-[#181d2a] bg-[#0a0c10] flex items-start gap-2.5 text-xs text-[#f1f3f7]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Quais decisões técnicas foram relevantes? */}
            <div className="md:col-span-2 p-6 rounded-lg border border-[#1b202e] bg-[#10131b] space-y-4">
              <h3 className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                <Wrench className="w-4 h-4" />
                <span>4. Decisões Técnicas Relevantes & Trade-offs</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.technicalDecisions.map((decision, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded border border-[#181d2a] bg-[#0a0c10] space-y-2"
                  >
                    <h4 className="font-mono text-xs font-bold text-[#f1f3f7]">
                      {decision.title}
                    </h4>
                    <p className="text-xs text-[#8e95a5] leading-relaxed">
                      {decision.rationale}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Desafios e Aprendizados */}
            <div className="p-6 rounded-lg border border-[#1b202e] bg-[#10131b] space-y-3">
              <h3 className="flex items-center gap-2 text-xs font-mono font-bold text-[#8e95a5] uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>5. Desafios & Aprendizados</span>
              </h3>
              <ul className="space-y-2 pt-1">
                {project.challengesAndLearnings.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#8e95a5] leading-relaxed">
                    <span className="text-emerald-400 font-mono font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contribuição de Emanuel */}
            <div className="p-6 rounded-lg border border-[#1b202e] bg-[#10131b] space-y-3">
              <h3 className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                <UserCheck className="w-4 h-4" />
                <span>Minha Contribuição Específica</span>
              </h3>
              <p className="text-xs text-[#8e95a5] font-mono">Papel técnico e entregas diretas:</p>
              <p className="text-sm text-[#f1f3f7] leading-relaxed">
                {project.contribution}
              </p>
            </div>

            {/* Funcionalidades Planejadas (para projetos como WPF) */}
            {project.plannedFeatures && (
              <div className="md:col-span-2 p-6 rounded-lg border border-[#1b202e] bg-[#10131b] space-y-3">
                <h3 className="text-xs font-mono font-bold text-[#f1f3f7] uppercase tracking-wider block">
                  Status de Recursos & Funcionalidades Planejadas:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.plannedFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded bg-[#0a0c10] border border-[#181d2a] text-xs font-mono text-[#8e95a5] flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>

        {/* Rodapé do Case com Navegação de Retorno */}
        <Container size="xl">
          <div className="p-8 rounded-lg border border-[#1b202e] bg-[#0d1017] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h2 className="font-mono text-sm font-bold text-[#f1f3f7]">
                Deseja discutir este caso ou uma arquitetura similar?
              </h2>
              <p className="text-xs text-[#8e95a5]">
                Estou aberto para conversar sobre orquestração, resiliência de filas e automações.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/#projetos">
                <Button variant="outline" size="sm" leftIcon={<ArrowLeft className="w-3.5 h-3.5" />}>
                  Outros Cases
                </Button>
              </Link>
              <Link href="/#contato">
                <Button variant="primary" size="sm">
                  Entrar em Contato
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </main>

      {/* Footer Mínimo */}
      <footer className="border-t border-[#1b202e] py-6 bg-[#07080c] font-mono text-xs text-[#525866]">
        <Container size="xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>Emanuel Borges de Oliveira — Estudo de Caso</span>
            <Link href="/" className="hover:text-emerald-400 transition-colors">
              Voltar ao Início ↑
            </Link>
          </div>
        </Container>
      </footer>
    </div>
  );
}
