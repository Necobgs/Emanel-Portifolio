"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Terminal, Database, Server, RefreshCw, Layers } from "lucide-react";

export function HeroArchitectureFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<number>(0);
  const [jobId, setJobId] = useState<number>(4192);

  useGSAP(
    () => {
      // Respeito à preferência por redução de movimento
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

      const interval = setInterval(cycle, 1800);

      // Linha de pulso SVG sutil
      const pulseDot = containerRef.current?.querySelector(".circuit-pulse");
      if (pulseDot) {
        gsap.to(pulseDot, {
          x: "100%",
          duration: 3.6,
          repeat: -1,
          ease: "linear",
        });
      }

      return () => {
        clearInterval(interval);
      };
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-xl border border-[#1b202e] bg-[#10131b] p-5 sm:p-6 shadow-2xl font-mono text-xs"
    >
      {/* Marcadores de canto estilo cruz técnica */}
      <div className="absolute -top-1.5 -left-1.5 text-[#343d56] text-[10px] select-none">+</div>
      <div className="absolute -top-1.5 -right-1.5 text-[#343d56] text-[10px] select-none">+</div>
      <div className="absolute -bottom-1.5 -left-1.5 text-[#343d56] text-[10px] select-none">+</div>
      <div className="absolute -bottom-1.5 -right-1.5 text-[#343d56] text-[10px] select-none">+</div>

      {/* Barra de Título Técnica */}
      <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[#1b202e] text-[#8e95a5]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <span className="font-semibold text-[#f1f3f7] uppercase tracking-wider text-[11px]">
            ARCH_TOPOLOGY :: JOB #{jobId}
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-[#525866]">
          <span className="tabular-nums">CYCLE: 18ms</span>
          <span>•</span>
          <span className="text-emerald-400 font-bold">STREAMING</span>
        </div>
      </div>

      {/* Diagrama de Nós e Fluxo em Tempo Real */}
      <div className="relative py-2">
        {/* SVG Wiring Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none stroke-[#1b202e]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="20%" y1="22%" x2="50%" y2="22%" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="50%" y1="22%" x2="80%" y2="22%" strokeWidth="1.5" />
          <line x1="80%" y1="22%" x2="80%" y2="78%" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="80%" y1="78%" x2="50%" y2="78%" strokeWidth="1.5" />
          <line x1="50%" y1="78%" x2="20%" y2="78%" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>

        {/* Nós da Topologia */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          {/* Node 1: Ingestão & Gatilho */}
          <div
            className={`p-3 rounded border transition-all duration-300 space-y-1.5 ${
              activeNode === 0
                ? "border-emerald-500/70 bg-[#101915] shadow-[0_0_12px_rgba(16,185,129,0.15)] translate-y-[-1px]"
                : "border-[#1b202e] bg-[#0a0c10]"
            }`}
          >
            <div className="flex items-center justify-between text-[#8e95a5]">
              <span className="text-[10px] uppercase tracking-wider">01. INGEST</span>
              <Terminal
                className={`w-3.5 h-3.5 ${
                  activeNode === 0 ? "text-emerald-400 animate-pulse" : "text-[#525866]"
                }`}
              />
            </div>
            <div className={`text-xs font-bold ${activeNode === 0 ? "text-emerald-300" : "text-[#f1f3f7]"}`}>
              REST / Webhook
            </div>
            <p className="text-[10px] text-[#525866]">FastAPI • NestJS</p>
          </div>

          {/* Node 2: Worker RPA & Automação */}
          <div
            className={`p-3 rounded border transition-all duration-300 space-y-1.5 ${
              activeNode === 1
                ? "border-emerald-500/70 bg-[#101915] shadow-[0_0_12px_rgba(16,185,129,0.15)] translate-y-[-1px]"
                : "border-[#1b202e] bg-[#0a0c10]"
            }`}
          >
            <div className="flex items-center justify-between text-emerald-400">
              <span className="text-[10px] uppercase tracking-wider font-bold">02. WORKER</span>
              <RefreshCw
                className={`w-3.5 h-3.5 ${
                  activeNode === 1 ? "text-emerald-400 animate-spin" : "text-[#525866]"
                }`}
              />
            </div>
            <div className={`text-xs font-bold ${activeNode === 1 ? "text-emerald-300" : "text-[#f1f3f7]"}`}>
              Python Headless
            </div>
            <p className="text-[10px] text-[#525866]">Playwright • Scrapy</p>
          </div>

          {/* Node 3: Fila de Tarefas & Concorrência */}
          <div
            className={`p-3 rounded border transition-all duration-300 space-y-1.5 ${
              activeNode === 2
                ? "border-emerald-500/70 bg-[#101915] shadow-[0_0_12px_rgba(16,185,129,0.15)] translate-y-[-1px]"
                : "border-[#1b202e] bg-[#0a0c10]"
            }`}
          >
            <div className="flex items-center justify-between text-[#8e95a5]">
              <span className="text-[10px] uppercase tracking-wider">03. QUEUE</span>
              <Layers
                className={`w-3.5 h-3.5 ${
                  activeNode === 2 ? "text-emerald-400" : "text-[#525866]"
                }`}
              />
            </div>
            <div className={`text-xs font-bold ${activeNode === 2 ? "text-emerald-300" : "text-[#f1f3f7]"}`}>
              RabbitMQ / Channels
            </div>
            <p className="text-[10px] text-[#525866]">Controle de Concorrência</p>
          </div>
        </div>

        {/* Nós Inferiores da Topologia */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Node 4: Cache Redis */}
          <div
            className={`p-3 rounded border transition-all duration-300 space-y-1 ${
              activeNode === 3
                ? "border-emerald-500/70 bg-[#101915] shadow-[0_0_12px_rgba(16,185,129,0.15)]"
                : "border-[#1b202e] bg-[#0a0c10]"
            }`}
          >
            <div className="flex items-center justify-between text-[#8e95a5]">
              <span className="text-[10px] uppercase tracking-wider">04. IN-MEMORY CACHE</span>
              <Server
                className={`w-3.5 h-3.5 ${
                  activeNode === 3 ? "text-emerald-400" : "text-[#525866]"
                }`}
              />
            </div>
            <div className={`text-xs font-bold ${activeNode === 3 ? "text-emerald-300" : "text-[#f1f3f7]"}`}>
              Redis State & Locks
            </div>
            <div className="flex items-center justify-between text-[10px] text-[#525866] pt-1">
              <span>TTL: 3600s</span>
              <span className="text-emerald-400 tabular-nums">HIT_RATE: 99.4%</span>
            </div>
          </div>

          {/* Node 5: Banco Relacional PostgreSQL */}
          <div
            className={`p-3 rounded border transition-all duration-300 space-y-1 ${
              activeNode === 4
                ? "border-emerald-500/70 bg-[#101915] shadow-[0_0_12px_rgba(16,185,129,0.15)]"
                : "border-[#1b202e] bg-[#0a0c10]"
            }`}
          >
            <div className="flex items-center justify-between text-[#8e95a5]">
              <span className="text-[10px] uppercase tracking-wider">05. PERSISTÊNCIA</span>
              <Database
                className={`w-3.5 h-3.5 ${
                  activeNode === 4 ? "text-emerald-400" : "text-[#525866]"
                }`}
              />
            </div>
            <div className={`text-xs font-bold ${activeNode === 4 ? "text-emerald-300" : "text-[#f1f3f7]"}`}>
              PostgreSQL 16
            </div>
            <div className="flex items-center justify-between text-[10px] text-[#525866] pt-1">
              <span>ACID Committed</span>
              <span className="text-[#8e95a5]">Index B-Tree</span>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de Status Inferior do Diagrama */}
      <div className="mt-4 pt-3 border-t border-[#1b202e] flex items-center justify-between text-[10px] text-[#525866]">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>ZERO_DROP_POLICY: ON</span>
        </div>
        <div className="font-mono">
          <span>UPTIME: </span>
          <span className="text-[#f1f3f7] font-semibold tabular-nums">99.98%</span>
        </div>
      </div>
    </div>
  );
}
