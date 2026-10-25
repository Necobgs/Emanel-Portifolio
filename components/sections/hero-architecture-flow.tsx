"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { Terminal, Database, Server, RefreshCw, Layers } from "lucide-react";

export function HeroArchitectureFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<number>(0);
  const [jobId, setJobId] = useState<number>(4192);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const nodes = [0, 1, 2, 3, 4];
      let currentIndex = 0;

      const cycle = () => {
        currentIndex = (currentIndex + 1) % nodes.length;
        setActiveNode(currentIndex);
        if (currentIndex === 0) {
          setJobId((prev) => prev + 1);
        }
      };

      const interval = setInterval(cycle, 1900);
      return () => clearInterval(interval);
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="cinematic-surface relative w-full rounded-2xl p-5 sm:p-7 shadow-2xl font-mono text-xs overflow-hidden"
    >
      {/* Marcadores de canto estilo cruz técnica */}
      <div className="absolute -top-1.5 -left-1.5 text-cyan-500/50 text-[10px] select-none" aria-hidden="true">+</div>
      <div className="absolute -top-1.5 -right-1.5 text-cyan-500/50 text-[10px] select-none" aria-hidden="true">+</div>
      <div className="absolute -bottom-1.5 -left-1.5 text-cyan-500/50 text-[10px] select-none" aria-hidden="true">+</div>
      <div className="absolute -bottom-1.5 -right-1.5 text-cyan-500/50 text-[10px] select-none" aria-hidden="true">+</div>

      {/* Barra de Título Técnica com rotulagem honesta */}
      <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[#1b253b] text-[#94a3b8]">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block shadow-[0_0_10px_rgba(0,242,254,0.7)]" />
          <span className="font-bold text-[#f8fafc] uppercase tracking-wider text-[11px]">
            TOPOLOGIA ARQUITETURAL (ILUSTRATIVO)
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px]">
          <span className="px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/40 font-bold shadow-[0_0_10px_rgba(0,242,254,0.2)]">
            STREAM #{jobId}
          </span>
        </div>
      </div>

      {/* Diagrama de Nós e Fluxo em Tempo Real */}
      <div className="relative py-2">
        {/* SVG Wiring Lines com gradiente de energia */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="wireGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <line x1="20%" y1="22%" x2="50%" y2="22%" stroke="url(#wireGradient)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="50%" y1="22%" x2="80%" y2="22%" stroke="url(#wireGradient)" strokeWidth="1.5" />
          <line x1="80%" y1="22%" x2="80%" y2="78%" stroke="url(#wireGradient)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="80%" y1="78%" x2="50%" y2="78%" stroke="url(#wireGradient)" strokeWidth="1.5" />
          <line x1="50%" y1="78%" x2="20%" y2="78%" stroke="url(#wireGradient)" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>

        {/* Nós da Topologia */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          {/* Node 1: Ingestão & Gatilho (Cyan Glow) */}
          <div
            className={`p-3.5 rounded-xl border transition-all duration-300 space-y-1.5 ${
              activeNode === 0
                ? "border-cyan-400 bg-cyan-950/50 shadow-[0_0_18px_rgba(0,242,254,0.3)] translate-y-[-2px]"
                : "border-[#1b253b] bg-[#090d18]/90"
            }`}
          >
            <div className="flex items-center justify-between text-[#94a3b8]">
              <span className="text-[10px] uppercase tracking-wider font-semibold">01. INGEST</span>
              <Terminal
                className={`w-3.5 h-3.5 ${
                  activeNode === 0 ? "text-cyan-300 animate-pulse" : "text-[#64748b]"
                }`}
              />
            </div>
            <div className={`text-xs font-bold ${activeNode === 0 ? "text-cyan-200" : "text-[#f8fafc]"}`}>
              REST / Webhook
            </div>
            <p className="text-[10px] text-[#64748b]">NestJS • Ingestão</p>
          </div>

          {/* Node 2: Worker RPA & Automação (Emerald Glow) */}
          <div
            className={`p-3.5 rounded-xl border transition-all duration-300 space-y-1.5 ${
              activeNode === 1
                ? "border-emerald-400 bg-emerald-950/50 shadow-[0_0_18px_rgba(16,185,129,0.3)] translate-y-[-2px]"
                : "border-[#1b253b] bg-[#090d18]/90"
            }`}
          >
            <div className="flex items-center justify-between text-emerald-400">
              <span className="text-[10px] uppercase tracking-wider font-bold">02. WORKER</span>
              <RefreshCw
                className={`w-3.5 h-3.5 ${
                  activeNode === 1 ? "text-emerald-300 animate-spin" : "text-[#64748b]"
                }`}
              />
            </div>
            <div className={`text-xs font-bold ${activeNode === 1 ? "text-emerald-200" : "text-[#f8fafc]"}`}>
              Python Worker
            </div>
            <p className="text-[10px] text-[#64748b]">Playwright • Bot</p>
          </div>

          {/* Node 3: Fila de Tarefas & Concorrência (Violet/Indigo Glow) */}
          <div
            className={`p-3.5 rounded-xl border transition-all duration-300 space-y-1.5 ${
              activeNode === 2
                ? "border-indigo-400 bg-indigo-950/50 shadow-[0_0_18px_rgba(99,102,241,0.3)] translate-y-[-2px]"
                : "border-[#1b253b] bg-[#090d18]/90"
            }`}
          >
            <div className="flex items-center justify-between text-[#94a3b8]">
              <span className="text-[10px] uppercase tracking-wider font-semibold">03. QUEUE</span>
              <Layers
                className={`w-3.5 h-3.5 ${
                  activeNode === 2 ? "text-indigo-300 animate-bounce" : "text-[#64748b]"
                }`}
              />
            </div>
            <div className={`text-xs font-bold ${activeNode === 2 ? "text-indigo-200" : "text-[#f8fafc]"}`}>
              RabbitMQ + DLQ
            </div>
            <p className="text-[10px] text-[#64748b]">ACK • Retries</p>
          </div>
        </div>

        {/* Nós Inferiores da Topologia */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Node 4: Cache Redis (Sky Blue Glow) */}
          <div
            className={`p-3.5 rounded-xl border transition-all duration-300 space-y-1.5 ${
              activeNode === 3
                ? "border-sky-400 bg-sky-950/50 shadow-[0_0_18px_rgba(14,165,233,0.3)]"
                : "border-[#1b253b] bg-[#090d18]/90"
            }`}
          >
            <div className="flex items-center justify-between text-[#94a3b8]">
              <span className="text-[10px] uppercase tracking-wider font-semibold">04. IN-MEMORY</span>
              <Server
                className={`w-3.5 h-3.5 ${
                  activeNode === 3 ? "text-sky-300" : "text-[#64748b]"
                }`}
              />
            </div>
            <div className={`text-xs font-bold ${activeNode === 3 ? "text-sky-200" : "text-[#f8fafc]"}`}>
              Redis State &amp; Locks
            </div>
            <div className="flex items-center justify-between text-[10px] text-[#64748b] pt-1">
              <span>TTL &amp; Idempotência</span>
              <span className="text-sky-400 font-semibold">Lock Distribuído</span>
            </div>
          </div>

          {/* Node 5: Banco Relacional PostgreSQL (Sky Blue Glow) */}
          <div
            className={`p-3.5 rounded-xl border transition-all duration-300 space-y-1.5 ${
              activeNode === 4
                ? "border-sky-400 bg-sky-950/50 shadow-[0_0_18px_rgba(56,189,248,0.3)]"
                : "border-[#1b253b] bg-[#090d18]/90"
            }`}
          >
            <div className="flex items-center justify-between text-[#94a3b8]">
              <span className="text-[10px] uppercase tracking-wider font-semibold">05. PERSISTÊNCIA</span>
              <Database
                className={`w-3.5 h-3.5 ${
                  activeNode === 4 ? "text-sky-300" : "text-[#64748b]"
                }`}
              />
            </div>
            <div className={`text-xs font-bold ${activeNode === 4 ? "text-sky-200" : "text-[#f8fafc]"}`}>
              PostgreSQL
            </div>
            <div className="flex items-center justify-between text-[10px] text-[#64748b] pt-1">
              <span>ACID Transacional</span>
              <span className="text-cyan-300 font-semibold">Auditoria &amp; Logs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de Status Inferior do Diagrama */}
      <div className="mt-4 pt-3 border-t border-[#1b253b] flex items-center justify-between text-[10px] text-[#64748b]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f2fe]" />
          <span className="text-[#94a3b8]">ARQUITETURA DISTRIBUÍDA</span>
        </div>
        <div className="font-mono text-cyan-300/90 font-semibold">
          RESILIÊNCIA EM PRODUÇÃO
        </div>
      </div>
    </div>
  );
}
