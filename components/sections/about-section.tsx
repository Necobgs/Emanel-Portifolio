"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Compass,
  Wrench,
  Network,
  Award,
  Zap,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { aboutData } from "@/data/about";

export function AboutSection() {
  const iconMap: Record<string, React.ReactNode> = {
    "problem-solving": <Wrench className="w-4 h-4 text-emerald-400" />,
    "code-standards": <Award className="w-4 h-4 text-cyan-400" />,
    "systemic-thinking": <Network className="w-4 h-4 text-emerald-400" />,
  };

  return (
    <section id="sobre" className="py-24 border-t border-[#172033] relative bg-[#070a12] overflow-hidden">
      {/* Luz Difusa de Fundo Harmonizada em Emerald & Deep Teal */}
      <div
        className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-emerald-500/10 via-teal-600/6 to-transparent rounded-full blur-[110px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-10 -left-10 w-[450px] h-[450px] bg-gradient-to-tr from-teal-500/8 via-transparent to-transparent rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <Container size="xl" className="relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.12)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>01 :: FILOSOFIA DE TRABALHO</span>
            </span>
            <span className="text-xs font-mono text-[#94a3b8]">Sobre &amp; Visão Técnica</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f8fafc] tracking-tight leading-tight">
            {aboutData.headline}
          </h2>

          <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed pt-1">
            {aboutData.introduction}
          </p>
        </div>

        {/* Bloco Narrativo Editorial com Superfícies Cinematográficas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="cinematic-surface p-7 rounded-xl space-y-3 hover:border-emerald-500/40 transition-colors">
            <div className="flex items-center gap-2.5 font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4 text-emerald-400" />
              <span>Atuação em Backend &amp; Automação</span>
            </div>
            <p className="text-sm text-[#f8fafc] leading-relaxed">
              {aboutData.careerFocus}
            </p>
          </div>

          <div className="cinematic-surface p-7 rounded-xl space-y-3 hover:border-teal-500/40 transition-colors">
            <div className="flex items-center gap-2.5 font-mono text-xs text-teal-300 font-bold uppercase tracking-wider">
              <Network className="w-4 h-4 text-teal-400" />
              <span>Evolução para Arquitetura de Software</span>
            </div>
            <p className="text-sm text-[#f8fafc] leading-relaxed">
              {aboutData.architectureVision}
            </p>
          </div>
        </div>

        {/* Princípios de Engenharia e Postura Profissional */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#172033] pb-3">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                Princípios de Engenharia
              </span>
              <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
                Postura Profissional &amp; Práticas de Equipe
              </h3>
            </div>
            <p className="text-xs font-mono text-[#64748b]">
              Atuação fundamentada em código sustentável e colaboração
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {aboutData.softSkills.map((skill) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="cinematic-surface p-6 rounded-xl flex flex-col justify-between hover:border-emerald-500/40 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#111726] border border-[#232f48] shadow-sm">
                      {iconMap[skill.id] || <Zap className="w-4 h-4 text-emerald-400" />}
                    </div>
                    <h4 className="font-mono text-xs font-bold text-[#f8fafc] uppercase tracking-wide">
                      {skill.title}
                    </h4>
                  </div>
                  <p className="text-xs font-medium text-emerald-300 font-mono">
                    {skill.behavior}
                  </p>
                </div>

                <p className="text-xs text-[#94a3b8] leading-relaxed pt-3 mt-4 border-t border-[#172033]">
                  {skill.context}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
