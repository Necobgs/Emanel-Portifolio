"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu, ExternalLink, Lock } from "lucide-react";
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
    badge: "bg-cyan-950/40 text-cyan-300 border-cyan-500/30",
    iconColor: "text-cyan-400",
    hoverBorder: "hover:border-cyan-500/50",
    hoverShadow: "hover:shadow-[0_12px_40px_rgba(0,242,254,0.12)]",
  },
  "RPA & Automação": {
    badge: "bg-emerald-950/40 text-emerald-300 border-emerald-500/30",
    iconColor: "text-emerald-400",
    hoverBorder: "hover:border-emerald-500/50",
    hoverShadow: "hover:shadow-[0_12px_40px_rgba(16,185,129,0.12)]",
  },
  "Desktop & .NET": {
    badge: "bg-purple-950/40 text-purple-300 border-purple-500/30",
    iconColor: "text-purple-400",
    hoverBorder: "hover:border-purple-500/50",
    hoverShadow: "hover:shadow-[0_12px_40px_rgba(168,85,247,0.12)]",
  },
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const theme = categoryStyles[project.category] || {
    badge: "bg-cyan-950/40 text-cyan-300 border-cyan-500/30",
    iconColor: "text-cyan-400",
    hoverBorder: "hover:border-cyan-500/50",
    hoverShadow: "hover:shadow-[0_12px_40px_rgba(0,242,254,0.12)]",
  };

  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between rounded-xl border border-white/[0.08] cinematic-surface p-6 sm:p-7 transition-all duration-300",
        theme.hoverBorder,
        theme.hoverShadow,
        className
      )}
    >
      <div>
        {/* Cabeçalho de Categorias e Links */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium border", theme.badge)}>
              <Cpu className={cn("w-3 h-3", theme.iconColor)} />
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono text-slate-400 bg-[#06080F]/80 border border-white/[0.06]">
              ● {project.status}
            </span>
          </div>

          {/* Links Externos Opcionais ou Indicador de Sigilo */}
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Código fonte de ${project.title}`}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Acessar ${project.title}`}
                className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-white/[0.08] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.isConfidential && (
              <span
                title="Projeto corporativo com código sob sigilo/NDA"
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono text-amber-400 bg-amber-950/30 border border-amber-500/30"
              >
                <Lock className="w-3 h-3 text-amber-400" />
                <span>Código sob sigilo</span>
              </span>
            )}
          </div>
        </div>

        {/* Título & Tagline */}
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-200 transition-colors tracking-tight">
          <Link href={`/projects/${project.slug}`} className="hover:underline underline-offset-4">
            {project.title}
          </Link>
        </h3>
        <p className="mt-1 text-xs font-mono font-medium text-emerald-400/95">
          {project.tagline}
        </p>

        {/* Resumo */}
        <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {project.solution}
        </p>
      </div>

      <div className="mt-6 pt-5 border-t border-white/[0.08] space-y-4">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[#06080F]/80 text-slate-300 border border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link para o Caso Detalhado */}
        <div className="pt-2">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
          >
            <span>Ver Estudo de Caso</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
