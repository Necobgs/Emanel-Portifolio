"use client";

import React from "react";
import { motion } from "motion/react";
import { Briefcase, GraduationCap, MapPin, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SystemBadge } from "@/components/ui/system-badge";
import { experienceData } from "@/data/experience";

export function ExperienceSection() {
  const professionalExperiences = experienceData.filter((e) => e.type === "Profissional");
  const academicExperiences = experienceData.filter((e) => e.type === "Acadêmica");

  return (
    <section id="experiencia" className="py-24 border-t border-[#1b202e] relative bg-[#0a0c10]">
      <Container size="xl">
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="flex items-center gap-2">
            <SystemBadge status="active" label="TRAJETÓRIA PROFISSIONAL" code="04" />
            <span className="text-xs font-mono text-[#8e95a5]">Histórico & Responsabilidades</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f1f3f7] tracking-tight leading-tight">
            Experiência & Formação Técnica
          </h2>

          <p className="text-sm sm:text-base text-[#8e95a5] leading-relaxed">
            Atuação prática em ambientes corporativos com desenvolvimento de robôs em Python,
            APIs corporativas em NestJS, gestão de banco de dados e mentoria de código.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Coluna da Linha do Tempo Profissional */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-[#1b202e] font-mono text-xs font-bold text-[#f1f3f7] uppercase tracking-wider">
              <Briefcase className="w-4 h-4 text-emerald-400" />
              <span>Atuação Corporativa</span>
            </div>

            <div className="relative border-l border-[#1b202e] ml-3 pl-6 space-y-8">
              {professionalExperiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative group"
                >
                  {/* Marcador na linha do tempo */}
                  <div
                    className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border ${
                      exp.isCurrent
                        ? "bg-emerald-400 border-emerald-300 shadow-[0_0_8px_rgba(16,185,129,0.6)]"
                        : "bg-[#161b26] border-[#252c3f]"
                    }`}
                  />

                  <div className="p-5 rounded-lg border border-[#1b202e] bg-[#10131b] hover:border-[#252c3f] transition-colors space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-mono text-sm font-bold text-[#f1f3f7]">
                        {exp.role}
                      </h3>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          exp.isCurrent
                            ? "bg-[#101915] border-emerald-500/30 text-emerald-300 font-bold"
                            : "bg-[#161b26] border-[#252c3f] text-[#8e95a5]"
                        }`}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-emerald-400/90">
                      <span className="font-semibold text-white">{exp.company}</span>
                      <span className="flex items-center gap-1 text-[#525866]">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-xs text-[#8e95a5] leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-[#181d2a]">
                      <span className="text-[10px] font-mono text-[#525866] uppercase tracking-wider block font-semibold">
                        Responsabilidades Confirmadas:
                      </span>
                      {exp.achievements.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#f1f3f7] leading-normal">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0a0c10] text-[#8e95a5] border border-[#1b202e]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Coluna da Formação Acadêmica */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-[#1b202e] font-mono text-xs font-bold text-[#f1f3f7] uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>Formação Acadêmica</span>
            </div>

            <div className="space-y-4">
              {academicExperiences.map((acad) => (
                <motion.div
                  key={acad.id}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="p-5 rounded-lg border border-[#1b202e] bg-[#10131b] hover:border-[#252c3f] transition-colors space-y-2.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-mono text-xs font-bold text-[#f1f3f7]">
                      {acad.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400/90">
                    <span className="font-semibold text-white">{acad.company}</span>
                    <span className="text-[#525866]">•</span>
                    <span className="text-[#8e95a5]">{acad.period}</span>
                  </div>

                  <p className="text-xs text-[#8e95a5] leading-relaxed">
                    {acad.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#181d2a]">
                    {acad.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0a0c10] text-[#8e95a5] border border-[#1b202e]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
