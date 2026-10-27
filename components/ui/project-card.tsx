"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu, ExternalLink, Lock, Star } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { ProjectDetail } from "@/data/projects";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  project: ProjectDetail;
  className?: string;
}

const categoryStyles: Record<
  string,
  { badge: string; iconColor: string; hoverBorder: string; hoverShadow: string }
> = {
  "Backend & Orquestração": {
    badge: "bg-cyan-50 text-cyan-900 border-cyan-300 dark:bg-cyan-950/50 dark:text-cyan-200 dark:border-cyan-500/40 font-semibold",
    iconColor: "text-cyan-700 dark:text-cyan-400",
    hoverBorder: "hover:border-cyan-400 dark:hover:border-cyan-500/50",
    hoverShadow: "hover:shadow-[0_12px_40px_rgba(2,132,199,0.12)] dark:hover:shadow-[0_12px_40px_rgba(0,242,254,0.12)]",
  },
  "RPA & Automação": {
    badge: "bg-emerald-50 text-emerald-950 border-emerald-300 dark:bg-emerald-950/50 dark:text-emerald-200 dark:border-emerald-500/40 font-semibold",
    iconColor: "text-emerald-700 dark:text-emerald-400",
    hoverBorder: "hover:border-emerald-400 dark:hover:border-emerald-500/50",
    hoverShadow: "hover:shadow-[0_12px_40px_rgba(5,150,105,0.12)] dark:hover:shadow-[0_12px_40px_rgba(16,185,129,0.12)]",
  },
  "Desktop & .NET": {
    badge: "bg-purple-50 text-purple-950 border-purple-300 dark:bg-purple-950/50 dark:text-purple-200 dark:border-purple-500/40 font-semibold",
    iconColor: "text-purple-700 dark:text-purple-400",
    hoverBorder: "hover:border-purple-400 dark:hover:border-purple-500/50",
    hoverShadow: "hover:shadow-[0_12px_40px_rgba(147,51,234,0.12)] dark:hover:shadow-[0_12px_40px_rgba(168,85,247,0.12)]",
  },
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const theme = categoryStyles[project.category] || {
    badge: "bg-cyan-50 text-cyan-900 border-cyan-300 dark:bg-cyan-950/50 dark:text-cyan-200 dark:border-cyan-500/40 font-semibold",
    iconColor: "text-cyan-700 dark:text-cyan-400",
    hoverBorder: "hover:border-cyan-400 dark:hover:border-cyan-500/50",
    hoverShadow: "hover:shadow-[0_12px_40px_rgba(2,132,199,0.12)] dark:hover:shadow-[0_12px_40px_rgba(0,242,254,0.12)]",
  };

  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between rounded-xl border border-slate-200 dark:border-white/[0.08] cinematic-surface p-6 sm:p-7 transition-all duration-300",
        project.starred && "border-amber-400/40 dark:border-amber-500/35 shadow-[0_4px_25px_rgba(245,158,11,0.08)]",
        theme.hoverBorder,
        theme.hoverShadow,
        className
      )}
    >
      <div>
        {/* Cabeçalho de Categorias e Links */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border", theme.badge)}>
              <Cpu aria-hidden="true" className={cn("w-3 h-3", theme.iconColor)} />
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono text-slate-700 dark:text-slate-300 font-medium bg-slate-100 dark:bg-[#06080F]/80 border border-slate-200 dark:border-white/[0.06]">
              <span aria-hidden="true">●</span> {project.status}
            </span>

            {/* Estrela de Projeto de Maior Sucesso */}
            {project.starred && (
              <span
                title="Projeto de maior sucesso e impacto técnico comprovado"
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-50 text-amber-900 border border-amber-300 dark:bg-amber-950/50 dark:text-amber-200 dark:border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.25)]"
              >
                <Star aria-hidden="true" className="w-3 h-3 fill-amber-500 text-amber-500 dark:fill-amber-400 dark:text-amber-300 shrink-0" />
                <span>Maior Sucesso</span>
              </span>
            )}
          </div>

          {/* Links Externos Opcionais ou Indicador de Sigilo */}
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Código fonte de ${project.title}`}
                className="p-1.5 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/[0.08] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Acessar aplicação ${project.title}`}
                className="p-1.5 rounded-lg text-slate-600 hover:text-cyan-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-cyan-300 dark:hover:bg-white/[0.08] transition-colors"
              >
                <ExternalLink aria-hidden="true" className="w-4 h-4" />
              </a>
            )}
            {project.isConfidential && (
              <span
                title="Projeto corporativo com código sob sigilo/NDA"
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono text-amber-900 bg-amber-50 border border-amber-200 dark:text-amber-200 dark:bg-amber-950/40 dark:border-amber-500/30 font-medium"
              >
                <Lock aria-hidden="true" className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                <span>Código sob sigilo</span>
              </span>
            )}
          </div>
        </div>

        {/* Título & Tagline */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-200 transition-colors tracking-tight flex items-center gap-2">
          <Link href={`/projects/${project.slug}`} className="hover:underline underline-offset-4">
            {project.title}
          </Link>
          {project.starred && (
            <Star aria-hidden="true" className="w-4 h-4 fill-amber-400 text-amber-500 shrink-0 inline-block drop-shadow-[0_0_6px_rgba(245,158,11,0.6)]" />
          )}
        </h3>
        <p className="mt-1 text-xs font-mono font-semibold text-emerald-800 dark:text-emerald-400">
          {project.tagline}
        </p>

        {/* Resumo */}
        <p className="mt-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
          {project.solution}
        </p>

        {/* Métricas de Impacto em Destaque */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-3.5">
            {project.metrics.slice(0, 2).map((m, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/[0.08] dark:bg-amber-500/[0.12] border border-amber-500/30 text-[11px] font-mono"
              >
                <span className="font-bold text-amber-800 dark:text-amber-300">{m.value}</span>
                <span className="text-slate-800 dark:text-slate-200 font-medium">{m.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 pt-5 border-t border-slate-200 dark:border-white/[0.08] space-y-4">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200 dark:bg-[#06080F]/80 dark:text-slate-200 dark:border-white/[0.06] font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link para o Caso Detalhado */}
        <div className="pt-2">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-800 hover:text-cyan-900 dark:text-cyan-400 dark:hover:text-cyan-300 group-hover:translate-x-1 transition-all"
          >
            <span>Ver Estudo de Caso</span>
            <span className="sr-only">: {project.title}</span>
            <ArrowRight aria-hidden="true" className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
