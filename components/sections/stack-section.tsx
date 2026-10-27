"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/components/ui/container";
import { SystemBadge } from "@/components/ui/system-badge";
import { TechLogo } from "@/components/ui/tech-logo";
import { skillsData, SkillItem } from "@/data/skills";

export function StackSection() {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");

  const categories = [
    { id: "Todos", label: "Todas as Ferramentas" },
    { id: "backend", label: "Backend & APIs" },
    { id: "rpa", label: "RPA & Automação" },
    { id: "database", label: "Bancos de Dados" },
    { id: "messaging-infra", label: "Mensageria & Infra" },
    { id: "observability", label: "Observabilidade" },
    { id: "complementary", label: "Em Estudo" },
  ];

  // Flatten skills with category info for unified grid display
  const allSkills: (SkillItem & { categoryId: string; categoryName: string })[] = skillsData.flatMap(
    (group) =>
      group.skills.map((skill) => ({
        ...skill,
        categoryId: group.id,
        categoryName: group.category,
      }))
  );

  const filteredSkills =
    activeCategory === "Todos"
      ? allSkills
      : allSkills.filter((s) => s.categoryId === activeCategory);

  return (
    <section
      id="competencias"
      className="min-h-[100dvh] py-20 md:py-24 flex flex-col justify-center border-t border-slate-200 dark:border-white/[0.06] relative bg-slate-50 dark:bg-[#06080F] overflow-hidden content-visibility-auto"
    >
      {/* Luzes atmosféricas de fundo harmonizadas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-32 w-[450px] sm:w-[600px] h-[350px] sm:h-[400px] bg-gradient-to-r from-cyan-500/10 via-indigo-600/5 to-transparent blur-[60px] sm:blur-[140px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 -right-32 w-[400px] sm:w-[550px] h-[300px] sm:h-[350px] bg-gradient-to-l from-purple-500/10 via-sky-500/5 to-transparent blur-[60px] sm:blur-[140px] rounded-full"
      />

      <Container size="xl" className="relative z-10 w-full my-auto">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <SystemBadge status="active" code="Competências & Stack" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Tecnologias, Práticas &amp;{" "}
              <span className="bg-gradient-to-r from-cyan-600 via-teal-600 to-purple-600 dark:from-cyan-300 dark:via-teal-300 dark:to-purple-300 bg-clip-text text-transparent">
                Nível de Domínio
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              Catálogo de tecnologias com indicador de dominância prática (1 a 5) e status real de aplicação corporativa.
            </p>

            {/* Legenda visual */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-700 dark:text-slate-300 font-medium">
                <span aria-hidden="true" className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
                <span>Produção Corporativa</span>
              </div>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600 font-mono text-xs">•</span>
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-700 dark:text-slate-300 font-medium">
                <span aria-hidden="true" className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.7)]" />
                <span>Estudo Ativo &amp; Exploração</span>
              </div>
            </div>
          </div>

          {/* Filtros de Categoria */}
          <div
            role="tablist"
            aria-label="Filtrar competências por categoria"
            className="flex flex-wrap gap-1.5 bg-slate-100 dark:bg-[#0B0F19] p-1.5 rounded-xl border border-slate-200 dark:border-white/[0.08] backdrop-blur-md self-start md:self-end"
          >
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-slate-900 text-white dark:bg-cyan-500/25 dark:text-cyan-200 dark:border dark:border-cyan-400/50 font-bold shadow-sm"
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-200/80 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/[0.08]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid de Pequenos Cards */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const isProd = skill.status === "Produção";

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="cinematic-surface p-4 rounded-xl border border-slate-200 dark:border-white/[0.08] hover:border-cyan-400 dark:hover:border-cyan-500/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between gap-3 group"
                >
                  {/* Topo: Logo + Tag de Produção ou Estudo */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.08] flex items-center justify-center p-1.5 text-cyan-600 dark:text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                      <TechLogo name={skill.name} className="w-5 h-5" />
                    </div>

                    {isProd ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-500/40">
                        <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Produção
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-50 dark:bg-purple-950/60 text-purple-900 dark:text-purple-200 border border-purple-300 dark:border-purple-500/40">
                        <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                        Estudo
                      </span>
                    )}
                  </div>

                  {/* Centro: Nome da Ferramenta e Contexto Prático */}
                  <div>
                    <h3 className="font-mono text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-[11px] text-slate-700 dark:text-slate-300 line-clamp-2 leading-relaxed mt-1">
                      {skill.context}
                    </p>
                  </div>

                  {/* Rodapé: 5 bolinhas de nível de dominância */}
                  <div className="flex items-center justify-between pt-2.5 border-t border-slate-200/80 dark:border-white/[0.06]">
                    <span className="text-[10px] font-mono text-slate-700 dark:text-slate-300 font-medium">
                      Domínio ({skill.rating}/5)
                    </span>
                    <div
                      role="img"
                      aria-label={`Nível de dominância: ${skill.rating} de 5`}
                      className="flex items-center gap-1.5"
                    >
                      {[1, 2, 3, 4, 5].map((dot) => {
                        const isFilled = dot <= skill.rating;
                        return (
                          <span
                            key={dot}
                            aria-hidden="true"
                            className={`w-2 h-2 rounded-full transition-all ${
                              isFilled
                                ? isProd
                                  ? "bg-cyan-600 dark:bg-cyan-400 shadow-[0_0_8px_rgba(0,242,254,0.7)]"
                                  : "bg-purple-600 dark:bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.7)]"
                                : "bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700/60"
                            }`}
                          />
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
