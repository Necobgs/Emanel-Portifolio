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

  return (
    <section id="projetos" className="py-24 border-t border-[#1b202e] relative bg-[#0a0c10]">
      <Container size="xl">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <SystemBadge status="active" label="CASES SELECIONADOS" code="05" />
              <span className="text-xs font-mono text-[#8e95a5]">Projetos & Arquitetura</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f1f3f7] tracking-tight leading-tight">
              Sistemas em Produção & Estudos de Engenharia
            </h2>

            <p className="text-sm sm:text-base text-[#8e95a5] leading-relaxed">
              Casos detalhados focados em resolução de problemas reais de orquestração assíncrona,
              automação resiliente de processos, mensageria e desenvolvimento de ferramentas corporativas.
            </p>
          </div>

          {/* Filtros de Categoria */}
          <div className="flex flex-wrap gap-1.5 bg-[#10131b] p-1.5 rounded-lg border border-[#1b202e] self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded text-xs font-mono font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-emerald-500 text-[#0a0c10] font-semibold shadow-sm"
                    : "text-[#8e95a5] hover:text-[#f1f3f7] hover:bg-[#161b26]"
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
