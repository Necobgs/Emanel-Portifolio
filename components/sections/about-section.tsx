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
import { SystemBadge } from "@/components/ui/system-badge";
import { aboutData } from "@/data/about";

export function AboutSection() {
  const iconMap: Record<string, React.ReactNode> = {
    "problem-solving": <Wrench className="w-4 h-4 text-emerald-400" />,
    "code-standards": <Award className="w-4 h-4 text-emerald-400" />,
    "systemic-thinking": <Network className="w-4 h-4 text-emerald-400" />,
  };

  return (
    <section id="sobre" className="py-24 border-t border-[#1b202e] relative bg-[#0a0c10]">
      <Container size="xl">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="flex items-center gap-2">
            <SystemBadge status="active" label="FILOSOFIA DE TRABALHO" code="01" />
            <span className="text-xs font-mono text-[#8e95a5]">Sobre &amp; Visão Técnica</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f1f3f7] tracking-tight leading-tight">
            {aboutData.headline}
          </h2>

          <p className="text-sm sm:text-base text-[#8e95a5] leading-relaxed pt-1">
            {aboutData.introduction}
          </p>
        </div>

        {/* Bloco Narrativo Editorial */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 rounded-lg border border-[#1b202e] bg-[#10131b] space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Atuação em Backend &amp; Automação</span>
            </div>
            <p className="text-sm text-[#f1f3f7] leading-relaxed">
              {aboutData.careerFocus}
            </p>
          </div>

          <div className="p-6 rounded-lg border border-[#1b202e] bg-[#10131b] space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[#8e95a5] font-semibold uppercase tracking-wider">
              <Network className="w-4 h-4 text-emerald-400" />
              <span>Evolução para Arquitetura de Software</span>
            </div>
            <p className="text-sm text-[#f1f3f7] leading-relaxed">
              {aboutData.architectureVision}
            </p>
          </div>
        </div>

        {/* Princípios de Engenharia e Postura Profissional */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#1b202e] pb-3">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                Princípios de Engenharia
              </span>
              <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
                Postura Profissional &amp; Práticas de Equipe
              </h3>
            </div>
            <p className="text-xs font-mono text-[#525866]">
              Atuação fundamentada em código sustentável e colaboração
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {aboutData.softSkills.map((skill) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="p-5 rounded-lg border border-[#1b202e] bg-[#0d1017] hover:border-[#252c3f] hover:bg-[#10131b] transition-colors flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded bg-[#161b26] border border-[#252c3f]">
                      {iconMap[skill.id] || <Zap className="w-4 h-4 text-emerald-400" />}
                    </div>
                    <h4 className="font-mono text-xs font-bold text-[#f1f3f7] uppercase tracking-wide">
                      {skill.title}
                    </h4>
                  </div>
                  <p className="text-xs font-medium text-emerald-400/90 font-mono">
                    {skill.behavior}
                  </p>
                </div>

                <p className="text-xs text-[#8e95a5] leading-relaxed pt-3 mt-3 border-t border-[#181d2a]">
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
