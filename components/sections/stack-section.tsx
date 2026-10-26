"use client";

import React from "react";
import { motion } from "motion/react";
import { Server, Bot, Database, Layers, Activity, Sparkles, Cpu } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SystemBadge } from "@/components/ui/system-badge";
import { skillsData, SkillLevel } from "@/data/skills";

interface CategoryTheme {
  icon: React.ReactNode;
  iconBg: string;
  iconBorder: string;
  iconColor: string;
  hoverBorder: string;
  hoverShadow: string;
  hoverTitle: string;
}

const categoryThemeMap: Record<string, CategoryTheme> = {
  backend: {
    icon: <Server className="w-4 h-4 text-cyan-400" />,
    iconBg: "bg-cyan-950/40",
    iconBorder: "border-cyan-500/30",
    iconColor: "text-cyan-400",
    hoverBorder: "hover:border-cyan-500/50",
    hoverShadow: "hover:shadow-[0_10px_35px_rgba(0,242,254,0.12)]",
    hoverTitle: "group-hover:text-cyan-200",
  },
  rpa: {
    icon: <Bot className="w-4 h-4 text-emerald-400" />,
    iconBg: "bg-emerald-950/40",
    iconBorder: "border-emerald-500/30",
    iconColor: "text-emerald-400",
    hoverBorder: "hover:border-emerald-500/50",
    hoverShadow: "hover:shadow-[0_10px_35px_rgba(16,185,129,0.12)]",
    hoverTitle: "group-hover:text-emerald-200",
  },
  database: {
    icon: <Database className="w-4 h-4 text-sky-400" />,
    iconBg: "bg-sky-950/40",
    iconBorder: "border-sky-500/30",
    iconColor: "text-sky-400",
    hoverBorder: "hover:border-sky-500/50",
    hoverShadow: "hover:shadow-[0_10px_35px_rgba(56,189,248,0.12)]",
    hoverTitle: "group-hover:text-sky-200",
  },
  "messaging-infra": {
    icon: <Layers className="w-4 h-4 text-indigo-400" />,
    iconBg: "bg-indigo-950/40",
    iconBorder: "border-indigo-500/30",
    iconColor: "text-indigo-400",
    hoverBorder: "hover:border-indigo-500/50",
    hoverShadow: "hover:shadow-[0_10px_35px_rgba(99,102,241,0.12)]",
    hoverTitle: "group-hover:text-indigo-200",
  },
  observability: {
    icon: <Activity className="w-4 h-4 text-teal-300" />,
    iconBg: "bg-teal-950/40",
    iconBorder: "border-teal-500/30",
    iconColor: "text-teal-300",
    hoverBorder: "hover:border-teal-500/50",
    hoverShadow: "hover:shadow-[0_10px_35px_rgba(45,212,191,0.12)]",
    hoverTitle: "group-hover:text-teal-200",
  },
  complementary: {
    icon: <Sparkles className="w-4 h-4 text-purple-400" />,
    iconBg: "bg-purple-950/40",
    iconBorder: "border-purple-500/30",
    iconColor: "text-purple-400",
    hoverBorder: "hover:border-purple-500/50",
    hoverShadow: "hover:shadow-[0_10px_35px_rgba(168,85,247,0.12)]",
    hoverTitle: "group-hover:text-purple-200",
  },
};

export function StackSection() {
  const getLevelBadge = (level: SkillLevel) => {
    switch (level) {
      case "Uso Profissional Contínuo":
        return (
          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded border border-emerald-500/40 bg-emerald-950/40 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.15)]">
            Foco Principal
          </span>
        );
      case "Produção & Integração":
        return (
          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded border border-cyan-500/30 bg-cyan-950/30 text-cyan-300">
            Produção
          </span>
        );
      case "Aprendizado Complementar":
        return (
          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded border border-purple-500/40 bg-purple-950/40 text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
            Estudo Ativo
          </span>
        );
    }
  };

  return (
    <section id="competencias" className="py-24 border-t border-white/[0.06] relative bg-[#06080F] overflow-hidden">
      {/* Luzes atmosféricas de fundo harmonizadas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-32 w-[600px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-indigo-600/5 to-transparent blur-[140px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 -right-32 w-[550px] h-[350px] bg-gradient-to-l from-purple-500/10 via-sky-500/5 to-transparent blur-[140px] rounded-full"
      />

      <Container size="xl" className="relative z-10">
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="flex items-center gap-2">
            <SystemBadge status="active" code="Competências &amp; Contexto" />
            <span className="text-xs font-mono text-slate-400"></span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Tecnologias, Práticas &amp;{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-purple-300 bg-clip-text text-transparent">
              Nível de Domínio
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Classificação das ferramentas com as quais atuo profissionalmente em
            backend, automações e infraestrutura, destacando o contexto real de aplicação.
          </p>

          {/* Legenda visual dos níveis de domínio com distinção clara */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              <span>Foco Principal (Domínio Contínuo)</span>
            </div>
            <span className="text-slate-600 font-mono text-xs">•</span>
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,242,254,0.8)]" />
              <span>Produção &amp; Integração</span>
            </div>
            <span className="text-slate-600 font-mono text-xs">•</span>
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
              <span>Estudo Ativo (Exploração &amp; Aprendizado)</span>
            </div>
          </div>
        </div>

        {/* Grid de Grupos de Tecnologias com Separação de Categorias Concordante */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group) => {
            const theme = categoryThemeMap[group.id] || {
              icon: <Cpu className="w-4 h-4 text-cyan-400" />,
              iconBg: "bg-cyan-950/40",
              iconBorder: "border-cyan-500/30",
              iconColor: "text-cyan-400",
              hoverBorder: "hover:border-cyan-500/50",
              hoverShadow: "hover:shadow-[0_10px_35px_rgba(0,242,254,0.12)]",
              hoverTitle: "group-hover:text-cyan-200",
            };

            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`cinematic-surface rounded-xl border border-white/[0.08] p-5 sm:p-6 flex flex-col justify-between ${theme.hoverBorder} ${theme.hoverShadow} transition-all duration-300 group`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-lg ${theme.iconBg} border ${theme.iconBorder} flex items-center justify-center shadow-sm`}>
                        {theme.icon}
                      </div>
                      <h3 className={`font-mono text-xs font-bold text-white uppercase tracking-wider ${theme.hoverTitle} transition-colors`}>
                        {group.category}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3.5 rounded-lg border border-white/[0.06] bg-[#06080F]/70 hover:border-white/20 transition-all space-y-1.5"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono text-xs font-bold text-slate-100">
                            {skill.name}
                          </span>
                          {getLevelBadge(skill.level)}
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          {skill.context}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
