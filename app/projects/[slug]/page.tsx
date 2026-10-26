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
    <div className="min-h-screen bg-[#06080F] text-slate-100 selection:bg-cyan-500/25 selection:text-cyan-200 relative overflow-hidden">
      <ProjectJsonLd project={project} />

      {/* Luzes atmosféricas de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/4 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-br from-cyan-500/10 via-indigo-600/5 to-transparent blur-[160px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-10 w-[600px] h-[400px] bg-gradient-to-bl from-emerald-500/10 via-sky-500/5 to-transparent blur-[150px] rounded-full"
      />

      {/* Barra de Navegação Superior da Página de Detalhes */}
      <header className="border-b border-white/[0.08] bg-[#06080F]/90 backdrop-blur-xl sticky top-0 z-40">
        <Container size="xl">
          <div className="flex items-center justify-between h-14">
            <Link
              href="/#projetos"
              className="inline-flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded p-1"
            >
              <ArrowLeft className="w-4 h-4 text-cyan-400" />
              <span>Voltar aos Projetos</span>
            </Link>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-block font-mono text-xs text-slate-400">
                Emanuel Borges • Backend &amp; RPA
              </span>
              <SystemBadge status="active" code={project.status} />
            </div>
          </div>
        </Container>
      </header>

      <main className="py-12 sm:py-16 space-y-16 relative z-10">
        {/* Cabeçalho do Case */}
        <Container size="xl">
          <div className="max-w-4xl space-y-5">
            {/* Breadcrumb / Categoria */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-cyan-950/40 text-cyan-300 border border-cyan-500/30">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-500">•</span>
              <span className="text-xs font-mono text-slate-400">Estudo de Caso Técnico</span>
            </div>

            {/* Título Principal */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              {project.title}
            </h1>

            {/* Tagline de impacto */}
            <p className="text-sm sm:text-base font-mono font-medium text-emerald-400/95 leading-relaxed">
              {project.tagline}
            </p>

            {/* Resumo Executivo */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-1">
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
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono bg-amber-950/30 text-amber-300 border border-amber-500/30">
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Código proprietário corporativo sob sigilo/NDA</span>
                </span>
              )}
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mr-2">
                Tecnologias:
              </span>
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#06080F]/80 text-slate-300 border border-white/[0.06]"
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
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Diagnóstico &amp;{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-teal-300 bg-clip-text text-transparent">
                Engenharia da Solução
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Detalhamento de problemas, objetivos, arquitetura, decisões técnicas e aprendizados consolidados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* 1. Qual problema existia? */}
            <div className="cinematic-surface p-6 rounded-xl border border-white/[0.08] space-y-3">
              <h3 className="flex items-center gap-2 text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
                <HelpCircle className="w-4 h-4 text-rose-400" />
                <span>1. O Problema Identificado</span>
              </h3>
              <p className="text-xs text-rose-400/80 font-mono">Cenário e gargalos anteriores:</p>
              <p className="text-sm text-slate-200 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* 2. Qual era o objetivo? */}
            <div className="cinematic-surface p-6 rounded-xl border border-white/[0.08] space-y-3">
              <h3 className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                <Target className="w-4 h-4" />
                <span>2. O Objetivo Técnico</span>
              </h3>
              <p className="text-xs text-slate-400 font-mono">Meta e requisitos da solução:</p>
              <p className="text-sm text-slate-200 leading-relaxed">
                {project.objective}
              </p>
            </div>

            {/* 3. Como a solução foi estruturada? */}
            <div className="md:col-span-2 cinematic-surface p-6 sm:p-7 rounded-xl border border-white/[0.08] space-y-4">
              <h3 className="flex items-center gap-2 text-xs font-mono font-bold text-white uppercase tracking-wider">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>3. Estrutura da Solução</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>

              <div className="pt-3 border-t border-white/[0.08] space-y-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                  Pilares de Engenharia da Solução:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.architectureHighlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg border border-white/[0.06] bg-[#06080F]/70 flex items-start gap-2.5 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Quais decisões técnicas foram relevantes? */}
            <div className="md:col-span-2 cinematic-surface p-6 sm:p-7 rounded-xl border border-white/[0.08] space-y-4">
              <h3 className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
                <Wrench className="w-4 h-4 text-cyan-400" />
                <span>4. Decisões Técnicas Relevantes &amp; Trade-offs</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.technicalDecisions.map((decision, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg border border-white/[0.06] bg-[#06080F]/70 space-y-2"
                  >
                    <h4 className="font-mono text-xs font-bold text-white">
                      {decision.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {decision.rationale}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Desafios e Aprendizados */}
            <div className="cinematic-surface p-6 rounded-xl border border-white/[0.08] space-y-3">
              <h3 className="flex items-center gap-2 text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>5. Desafios &amp; Aprendizados</span>
              </h3>
              <ul className="space-y-2 pt-1">
                {project.challengesAndLearnings.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                    <span className="text-emerald-400 font-mono font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contribuição de Emanuel */}
            <div className="cinematic-surface p-6 rounded-xl border border-white/[0.08] space-y-3">
              <h3 className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                <UserCheck className="w-4 h-4" />
                <span>Minha Contribuição Específica</span>
              </h3>
              <p className="text-xs text-slate-400 font-mono">Papel técnico e entregas diretas:</p>
              <p className="text-sm text-slate-200 leading-relaxed">
                {project.contribution}
              </p>
            </div>

            {/* Funcionalidades Planejadas (para projetos como WPF) */}
            {project.plannedFeatures && (
              <div className="md:col-span-2 cinematic-surface p-6 rounded-xl border border-white/[0.08] space-y-3">
                <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
                  Status de Recursos &amp; Funcionalidades Planejadas:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.plannedFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-[#06080F]/80 border border-white/[0.06] text-xs font-mono text-slate-300 flex items-center gap-2"
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
          <div className="cinematic-surface p-8 rounded-xl border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h2 className="font-mono text-sm font-bold text-white">
                Deseja discutir este caso ou uma arquitetura similar?
              </h2>
              <p className="text-xs text-slate-300">
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
      <footer className="border-t border-white/[0.08] py-6 bg-[#06080F] font-mono text-xs text-slate-500">
        <Container size="xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>Emanuel Borges de Oliveira — Estudo de Caso</span>
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Voltar ao Início ↑
            </Link>
          </div>
        </Container>
      </footer>
    </div>
  );
}
