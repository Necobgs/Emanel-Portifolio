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
    <section id="experiencia" className="py-24 border-t border-white/[0.06] relative bg-[#06080F] overflow-hidden">
      {/* Luzes atmosféricas de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-1/4 w-[550px] h-[350px] bg-gradient-to-bl from-cyan-500/10 via-indigo-600/5 to-transparent blur-[140px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-10 w-[500px] h-[350px] bg-gradient-to-tr from-indigo-600/10 via-sky-500/5 to-transparent blur-[140px] rounded-full"
      />

      <Container size="xl" className="relative z-10">
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="flex items-center gap-2">
            <SystemBadge status="active" code="Trajetória Profissional" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Experiência &amp;{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              Formação Técnica
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Cargos trilhados, aprendizado técnico, responsabilidades, entregas e formação acadêmica. Aqui mostro o caminho percorrido.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Coluna da Linha do Tempo Profissional */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5 pb-3 border-b border-white/[0.08] font-mono text-xs font-bold text-white uppercase tracking-wider">
              <div className="w-6 h-6 rounded bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Briefcase className="w-3.5 h-3.5" />
              </div>
              <span>Atuação Corporativa</span>
            </div>

            <div className="relative ml-3 pl-6 space-y-8 before:absolute before:inset-0 before:left-[-2px] before:w-[2px] before:bg-gradient-to-b before:from-cyan-400 before:via-sky-400 before:to-indigo-500/40">
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
                  {exp.isCurrent ? (
                    <div className="absolute -left-[32px] top-2 flex items-center justify-center">
                      <span className="absolute w-4 h-4 rounded-full bg-emerald-400/40 animate-ping" />
                      <span className="relative w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#06080F] shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
                    </div>
                  ) : (
                    <div className="absolute -left-[31px] top-2.5 w-3 h-3 rounded-full bg-[#111726] border-2 border-white/20 group-hover:border-cyan-400 group-hover:shadow-[0_0_8px_rgba(0,242,254,0.5)] transition-all" />
                  )}

                  <div className="cinematic-surface p-5 sm:p-6 rounded-xl border border-white/[0.08] hover:border-cyan-500/40 hover:shadow-[0_10px_35px_rgba(0,242,254,0.1)] transition-all duration-300 space-y-3.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-mono text-sm sm:text-base font-bold text-white group-hover:text-cyan-200 transition-colors">
                        {exp.role}
                      </h3>
                      <span
                        className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${exp.isCurrent
                          ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-300 font-bold shadow-[0_0_10px_rgba(16,185,129,0.15)]"
                          : "bg-[#111726] border-white/10 text-slate-400"
                          }`}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono">
                      <span className="font-bold text-cyan-300">{exp.company}</span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3 h-3 text-cyan-400/70" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-white/[0.08]">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                        Responsabilidades Confirmadas:
                      </span>
                      {exp.achievements.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 leading-normal">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[#06080F]/80 text-slate-300 border border-white/[0.06]"
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
            <div className="flex items-center gap-2.5 pb-3 border-b border-white/[0.08] font-mono text-xs font-bold text-white uppercase tracking-wider">
              <div className="w-6 h-6 rounded bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <GraduationCap className="w-3.5 h-3.5" />
              </div>
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
                  className="cinematic-surface p-5 rounded-xl border border-white/[0.08] hover:border-cyan-500/40 hover:shadow-[0_8px_30px_rgba(0,242,254,0.1)] transition-all duration-300 space-y-2.5 group"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-mono text-xs sm:text-sm font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {acad.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="font-semibold text-cyan-300">{acad.company}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400">{acad.period}</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {acad.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.08]">
                    {acad.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[#06080F]/80 text-slate-300 border border-white/[0.06]"
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
