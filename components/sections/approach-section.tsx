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
      className="py-24 border-t border-[#1b202e] relative bg-[#0a0c10]"
    >
      <Container size="xl">
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="flex items-center gap-2">
            <SystemBadge status="active" label="ENGENHARIA & MÉTODO" code="02" />
            <span className="text-xs font-mono text-[#8e95a5]">Ciclo de Entrega</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f1f3f7] tracking-tight leading-tight">
            Abordagem Técnica: Do Problema à Operação Estável
          </h2>

          <p className="text-sm sm:text-base text-[#8e95a5] leading-relaxed">
            Como conduzo a concepção de softwares e automações para assegurar que cada solução
            seja previsível, resistente a falhas externas e de fácil manutenção.
          </p>
        </div>

        {/* Linha Metodológica em 5 Etapas com Animação Sequencial */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {aboutData.approach.map((step) => (
            <div
              key={step.step}
              className="approach-step-card p-5 rounded-lg border border-[#1b202e] bg-[#10131b] flex flex-col justify-between hover:border-[#252c3f] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-emerald-400 font-bold tabular-nums">
                    ETAPA {step.step}
                  </span>
                  <Layers className="w-3.5 h-3.5 text-[#525866]" />
                </div>

                <h3 className="font-mono text-xs sm:text-sm font-bold text-[#f1f3f7] mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-[#8e95a5] mb-4 font-mono leading-relaxed">
                  {step.objective}
                </p>
              </div>

              <div className="pt-3 border-t border-[#181d2a] space-y-2">
                {step.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[11px] text-[#525866] leading-normal">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
