"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu, CheckCircle2, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { ProjectDetail } from "@/data/projects";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  project: ProjectDetail;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between rounded-lg border border-[#1b202e] bg-[#10131b] p-6 hover:border-[#252c3f] transition-all duration-200",
        className
      )}
    >
      <div>
        {/* Cabeçalho de Categorias e Links */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-medium bg-[#161b26] text-emerald-300 border border-[#252c3f]">
              <Cpu className="w-3 h-3 text-emerald-400" />
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono text-[#8e95a5] bg-[#0a0c10] border border-[#1b202e]">
              ● {project.status}
            </span>
          </div>

          {/* Links Externos Opcionais */}
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Código fonte de ${project.title}`}
                className="p-1 rounded text-[#8e95a5] hover:text-[#f1f3f7] hover:bg-[#161b26] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Acessar ${project.title}`}
                className="p-1 rounded text-[#8e95a5] hover:text-emerald-400 hover:bg-[#161b26] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Título & Tagline */}
        <h3 className="text-lg sm:text-xl font-bold text-[#f1f3f7] group-hover:text-emerald-300 transition-colors tracking-tight">
          <Link href={`/projects/${project.slug}`} className="hover:underline underline-offset-4">
            {project.title}
          </Link>
        </h3>
        <p className="mt-1 text-xs font-mono font-medium text-emerald-400/90">
          {project.tagline}
        </p>

        {/* Resumo */}
        <p className="mt-3 text-xs sm:text-sm text-[#8e95a5] leading-relaxed">
          {project.summary}
        </p>

        {/* Destaques de Engenharia */}
        <div className="mt-5 space-y-2 pt-4 border-t border-[#181d2a]">
          <span className="text-[10px] font-mono text-[#525866] uppercase tracking-wider block font-semibold">
            Destaques de Arquitetura:
          </span>
          <ul className="space-y-1.5">
            {project.architectureHighlights.slice(0, 3).map((highlight, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs text-[#8e95a5] leading-normal"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-[#181d2a] space-y-4">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0a0c10] text-[#8e95a5] border border-[#1b202e]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link para o Caso Detalhado */}
        <div className="pt-2">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 group-hover:translate-x-1 transition-all"
          >
            <span>Ver Estudo de Caso</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
