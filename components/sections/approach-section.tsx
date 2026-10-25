"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Layers, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SystemBadge } from "@/components/ui/system-badge";
import { aboutData } from "@/data/about";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ApproachSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const stepCards = containerRef.current?.querySelectorAll(".approach-step-card");
      if (!stepCards || stepCards.length === 0) return;

      gsap.fromTo(
        stepCards,
        {
          opacity: 0.6,
          y: 8,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="abordagem"
      ref={containerRef}
      className="py-24 border-t border-white/[0.06] relative bg-[#06080F] overflow-hidden"
    >
      {/* Luzes atmosféricas de fundo estilo cinematográfico */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/4 -translate-x-1/2 w-[550px] h-[350px] bg-gradient-to-br from-cyan-500/10 via-indigo-600/5 to-transparent blur-[120px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-10 w-[450px] h-[300px] bg-gradient-to-tl from-sky-500/10 via-teal-500/5 to-transparent blur-[120px] rounded-full"
      />

      <Container size="xl" className="relative z-10">
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="flex items-center gap-2">
            <SystemBadge status="active" label="ENGENHARIA & MÉTODO" code="02" />
            <span className="text-xs font-mono text-slate-400">Ciclo de Entrega</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Abordagem Técnica:{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-teal-300 bg-clip-text text-transparent">
              Do Problema à Operação Estável
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Como conduzo a concepção de softwares e automações para assegurar que cada solução
            seja previsível, resistente a falhas externas e de fácil manutenção.
          </p>
        </div>

        {/* Linha Metodológica em 5 Etapas com Animação Sequencial */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {aboutData.approach.map((step, idx) => {
            const stepAccents = [
              { badge: "text-cyan-400 border-cyan-500/30 bg-cyan-950/40", icon: "text-cyan-400" },
              { badge: "text-sky-400 border-sky-500/30 bg-sky-950/40", icon: "text-sky-400" },
              { badge: "text-teal-300 border-teal-500/30 bg-teal-950/40", icon: "text-teal-400" },
              { badge: "text-cyan-300 border-cyan-500/30 bg-cyan-950/40", icon: "text-cyan-300" },
              { badge: "text-sky-300 border-sky-500/30 bg-sky-950/40", icon: "text-sky-300" },
            ];
            const accent = stepAccents[idx % stepAccents.length];

            return (
              <div
                key={step.step}
                className="approach-step-card cinematic-surface p-5 rounded-xl border border-white/[0.08] flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-[0_8px_30px_rgba(0,242,254,0.1)] transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs font-mono">
                    <span className={`font-bold tabular-nums px-2 py-0.5 rounded border text-[11px] ${accent.badge}`}>
                      ETAPA {step.step}
                    </span>
                    <Layers className={`w-3.5 h-3.5 ${accent.icon} opacity-80 group-hover:opacity-100 transition-opacity`} />
                  </div>

                  <h3 className="font-mono text-xs sm:text-sm font-bold text-white mb-2 leading-snug group-hover:text-cyan-200 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300 mb-4 font-mono leading-relaxed">
                    {step.objective}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.08] space-y-2">
                  {step.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-[11px] text-slate-400 leading-normal">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
