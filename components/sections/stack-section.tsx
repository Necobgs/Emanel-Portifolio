"use client";

import React from "react";
import { motion } from "motion/react";
import { Cpu } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SystemBadge } from "@/components/ui/system-badge";
import { skillsData, SkillLevel } from "@/data/skills";

export function StackSection() {
  const getLevelBadge = (level: SkillLevel) => {
    switch (level) {
      case "Uso Profissional Contínuo":
        return (
          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded border border-emerald-500/30 bg-[#101915] text-emerald-300">
            Foco Principal
          </span>
        );
      case "Produção & Integração":
        return (
          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded border border-[#252c3f] bg-[#161b26] text-[#8e95a5]">
            Produção
          </span>
        );
      case "Aprendizado Complementar":
        return (
          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded border border-amber-500/30 bg-[#1c1810] text-amber-300">
            Estudo Ativo
          </span>
        );
    }
  };

  return (
    <section id="competencias" className="py-24 border-t border-[#1b202e] relative bg-[#0a0c10]">
      <Container size="xl">
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="flex items-center gap-2">
            <SystemBadge status="active" label="REPERTÓRIO TÉCNICO" code="03" />
            <span className="text-xs font-mono text-[#8e95a5]">Competências & Contexto</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f1f3f7] tracking-tight leading-tight">
            Tecnologias, Práticas & Nível de Domínio
          </h2>

          <p className="text-sm sm:text-base text-[#8e95a5] leading-relaxed">
            Classificação honesta das ferramentas com as quais atuo profissionalmente em
            backend, automações e infraestrutura, destacando o contexto real de aplicação sem
            métricas ou porcentagens fictícias.
          </p>
        </div>

        {/* Grid de Grupos de Tecnologias com Revelação Sutil */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="rounded-lg border border-[#1b202e] bg-[#10131b] p-5 sm:p-6 flex flex-col justify-between hover:border-[#252c3f] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1b202e]">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-emerald-400" />
                    <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                      {group.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-[#8e95a5] mb-5 leading-relaxed">
                  {group.description}
                </p>

                <div className="space-y-3">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded border border-[#181d2a] bg-[#0a0c10] space-y-1.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs font-bold text-[#f1f3f7]">
                          {skill.name}
                        </span>
                        {getLevelBadge(skill.level)}
                      </div>
                      <p className="text-[11px] text-[#8e95a5] leading-relaxed">
                        {skill.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
