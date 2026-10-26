"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import { SystemBadge } from "@/components/ui/system-badge";
import { ProjectCard } from "@/components/ui/project-card";
import { projectsData, ProjectCategory } from "@/data/projects";

export function CasesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");

  const categories = [
    "Todos",
    "Backend & Orquestração",
    "RPA & Automação",
    "Arquitetura & Filas",
    "Desktop & .NET",
  ];

  const filteredProjects =
    activeCategory === "Todos"
      ? projectsData
      : projectsData.filter((p) => p.category === (activeCategory as ProjectCategory));

  const getActiveFilterStyle = (cat: string) => {
    switch (cat) {
      case "Backend & Orquestração":
        return "bg-gradient-to-r from-cyan-400 to-sky-400 text-[#06080F] font-bold shadow-[0_0_15px_rgba(0,242,254,0.35)]";
      case "RPA & Automação":
        return "bg-gradient-to-r from-emerald-400 to-teal-400 text-[#06080F] font-bold shadow-[0_0_15px_rgba(16,185,129,0.35)]";
      case "Arquitetura & Filas":
        return "bg-gradient-to-r from-indigo-400 to-sky-400 text-white font-bold shadow-[0_0_15px_rgba(99,102,241,0.35)]";
      case "Desktop & .NET":
        return "bg-gradient-to-r from-purple-400 to-indigo-400 text-white font-bold shadow-[0_0_15px_rgba(168,85,247,0.35)]";
      default:
        return "bg-gradient-to-r from-cyan-400 to-emerald-400 text-[#06080F] font-bold shadow-[0_0_15px_rgba(0,242,254,0.35)]";
    }
  };

  return (
    <section id="projetos" className="py-24 border-t border-white/[0.06] relative bg-[#06080F] overflow-hidden">
      {/* Luzes atmosféricas de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/3 w-[650px] h-[450px] bg-gradient-to-br from-cyan-500/10 via-indigo-600/5 to-transparent blur-[150px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-10 w-[550px] h-[350px] bg-gradient-to-tl from-emerald-500/10 via-teal-500/5 to-transparent blur-[140px] rounded-full"
      />

      <Container size="xl" className="relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <SystemBadge status="active" code="Projetos & Cases" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Sistemas em Produção &amp;{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-sky-300 bg-clip-text text-transparent">
                Estudos de Engenharia
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Casos detalhados focados em resolução de problemas reais de orquestração assíncrona,
              automação resiliente de processos, mensageria e desenvolvimento de ferramentas corporativas.
            </p>
          </div>

          {/* Filtros de Categoria */}
          <div className="flex flex-wrap gap-1.5 bg-[#0B0F19]/90 p-1.5 rounded-xl border border-white/[0.08] backdrop-blur-md self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${activeCategory === cat
                  ? getActiveFilterStyle(cat)
                  : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Cards de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
