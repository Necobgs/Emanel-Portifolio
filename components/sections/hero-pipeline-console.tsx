"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { RefreshCw, Cpu, Activity, Database, Network } from "lucide-react";

export function HeroPipelineConsole() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [counter, setCounter] = useState(1482);

  const steps = [
    {
      id: "trigger",
      label: "Trigger & Ingestão",
      detail: "Webhook / Cron Event capturado",
      icon: Activity,
      status: "OK (0.02s)",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/30",
    },
    {
      id: "worker",
      label: "Worker Distribuído",
      detail: "Robô Python / Headless session instanciada",
      icon: Cpu,
      status: "EXECUTANDO",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/30",
    },
    {
      id: "queue",
      label: "Fila & Cache Redis",
      detail: "Desduplicação e controle de concorrência",
      icon: Network,
      status: "SYNC (12ms)",
      color: "text-indigo-400",
      bg: "bg-indigo-500/10 border-indigo-500/30",
    },
    {
      id: "storage",
      label: "Persistência PostgreSQL",
      detail: "Transação com ACID e integridade referencial",
      icon: Database,
      status: "COMMITTED",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/30",
    },
  ];

  // GSAP animation for step progression
  useGSAP(
    () => {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
        setCounter((prev) => prev + 1);
      }, 2600);

      return () => clearInterval(interval);
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative rounded-2xl border border-[#232C42] bg-[#0C101A]/95 p-6 backdrop-blur-xl shadow-2xl overflow-hidden font-mono text-xs"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#161E30_1px,transparent_1px),linear-gradient(to_bottom,#161E30_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />

      {/* Top Header */}
      <div className="relative flex items-center justify-between pb-4 mb-5 border-b border-[#1E263A]">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <span className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">
            Pipeline Engine: ACTIVE
          </span>
        </div>
        <div className="flex items-center gap-2 text-slate-400 text-[11px]">
          <RefreshCw className="w-3.5 h-3.5 animate-spin text-emerald-400" />
          <span>Jobs: #{counter}</span>
        </div>
      </div>

      {/* Pipeline Steps List */}
      <div className="relative space-y-3">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = idx === currentStep;
          const isDone = idx < currentStep;

          return (
            <div
              key={step.id}
              className={`p-3 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                isActive
                  ? `${step.bg} shadow-lg shadow-emerald-500/5 translate-x-1`
                  : isDone
                  ? "bg-[#101522]/80 border-[#1F273C] opacity-80"
                  : "bg-[#0E131E]/40 border-[#192033] opacity-40"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-lg border ${
                    isActive
                      ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
                      : "bg-[#141A28] border-[#222B40] text-slate-400"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-xs">{step.label}</span>
                    {isActive && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">{step.detail}</p>
                </div>
              </div>

              <div className="text-right">
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                    isActive
                      ? "bg-emerald-400/10 border-emerald-400/30 text-emerald-300"
                      : "bg-white/[0.02] border-white/[0.06] text-slate-400"
                  }`}
                >
                  {isActive ? "PROCESSANDO" : isDone ? "CONCLUÍDO" : "FILA"}
                </span>
                <span className="block text-[10px] text-slate-500 mt-1">{step.status}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Terminal Mini Log */}
      <div className="relative mt-5 pt-4 border-t border-[#1C2337] bg-[#080B12] p-3 rounded-xl border border-[#182033] text-[11px] text-slate-300 space-y-1">
        <div className="flex items-center justify-between text-slate-500 text-[10px]">
          <span>TELEMETRIA INTERNA</span>
          <span>LATÊNCIA: 18ms</span>
        </div>
        <p className="text-emerald-400">
          ✓ [Worker-04] Sessão autenticada. 0 bloqueios detectados.
        </p>
        <p className="text-slate-400">
          → Ingestão contínua em andamento. Consistência garantida.
        </p>
      </div>
    </div>
  );
}
