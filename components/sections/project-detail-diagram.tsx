import React from "react";
import { Server, Database, RefreshCw, Cpu, Monitor } from "lucide-react";

export interface ProjectDetailDiagramProps {
  type?: "orchestration" | "rpa-engine" | "wpf-desktop";
}

export function ProjectDetailDiagram({ type = "orchestration" }: ProjectDetailDiagramProps) {
  if (type === "orchestration") {
    return (
      <div className="cinematic-surface rounded-xl border border-white/[0.08] p-5 sm:p-7 font-mono text-xs space-y-5 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-slate-400">
          <span className="text-[11px] font-bold text-white uppercase tracking-wider">
            Topologia do Sistema: Orquestração e Mensageria
          </span>
          <span className="text-cyan-400 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cyan-950/40 border border-cyan-500/30">
            DIAGRAMA ARQUITETURAL
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 relative z-10">
          <div className="p-3.5 rounded-lg border border-white/[0.06] bg-[#06080F]/80 space-y-1.5 hover:border-cyan-500/30 transition-all">
            <span className="text-[10px] text-cyan-400 block font-bold">01. API &amp; GESTÃO</span>
            <div className="font-bold text-white flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-cyan-400" />
              <span>NestJS App</span>
            </div>
            <p className="text-[10px] text-slate-400">Agendador e Controllers</p>
          </div>

          <div className="p-3.5 rounded-lg border border-emerald-500/40 bg-emerald-950/40 space-y-1.5 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <span className="text-[10px] text-emerald-300 block font-bold">02. MENSAGERIA</span>
            <div className="font-bold text-emerald-200 flex items-center gap-1.5">
              <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
              <span>RabbitMQ</span>
            </div>
            <p className="text-[10px] text-emerald-400/90">Filas &amp; Buffers Assíncronos</p>
          </div>

          <div className="p-3.5 rounded-lg border border-white/[0.06] bg-[#06080F]/80 space-y-1.5 hover:border-emerald-500/30 transition-all">
            <span className="text-[10px] text-emerald-400 block font-bold">03. EXECUÇÃO</span>
            <div className="font-bold text-white flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" />
              <span>Python Workers</span>
            </div>
            <p className="text-[10px] text-slate-400">Processamento dos Robôs</p>
          </div>

          <div className="p-3.5 rounded-lg border border-white/[0.06] bg-[#06080F]/80 space-y-1.5 hover:border-sky-500/30 transition-all">
            <span className="text-[10px] text-sky-400 block font-bold">04. ESTADOS &amp; DADOS</span>
            <div className="font-bold text-white flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-sky-400" />
              <span>Redis &amp; Postgres</span>
            </div>
            <p className="text-[10px] text-slate-400">Cache rápido e auditoria</p>
          </div>
        </div>

        <div className="pt-3 text-[10px] text-slate-400 border-t border-white/[0.08] flex flex-col sm:flex-row sm:justify-between gap-1">
          <span>Fluxo: Requisição HTTP → Fila de Despacho → Worker em Background → Registro de Estado</span>
          <span className="text-cyan-400 font-semibold">Tolerância a falhas: Nativa</span>
        </div>
      </div>
    );
  }

  if (type === "rpa-engine") {
    return (
      <div className="cinematic-surface rounded-xl border border-white/[0.08] p-5 sm:p-7 font-mono text-xs space-y-5 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-slate-400">
          <span className="text-[11px] font-bold text-white uppercase tracking-wider">
            Ciclo de Execução: Motor de Automação Resiliente
          </span>
          <span className="text-cyan-400 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cyan-950/40 border border-cyan-500/30">
            FRAMEWORK RPA
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-lg border border-white/[0.06] bg-[#06080F]/80 space-y-1.5">
            <span className="text-[10px] text-cyan-400 block font-bold">FASE 1</span>
            <div className="font-bold text-white">Setup &amp; Contexto</div>
            <p className="text-[10px] text-slate-400">Injeção de credenciais seguras e sessão isolada</p>
          </div>

          <div className="p-3.5 rounded-lg border border-emerald-500/40 bg-emerald-950/40 space-y-1.5 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <span className="text-[10px] text-emerald-300 block font-bold">FASE 2</span>
            <div className="font-bold text-emerald-200">Navegação &amp; Extração</div>
            <p className="text-[10px] text-emerald-400/90">Seletores robustos e espera por rede ociosa</p>
          </div>

          <div className="p-3.5 rounded-lg border border-white/[0.06] bg-[#06080F]/80 space-y-1.5">
            <span className="text-[10px] text-sky-400 block font-bold">FASE 3</span>
            <div className="font-bold text-white">Telemetria &amp; Saída</div>
            <p className="text-[10px] text-slate-400">Envio de payload JSON e logs estruturados</p>
          </div>
        </div>

        <div className="pt-3 text-[10px] text-slate-400 border-t border-white/[0.08] flex flex-col sm:flex-row sm:justify-between gap-1">
          <span>Padrão adotado: Page Object + Decorators de Repetição com Jitter</span>
          <span className="text-emerald-400 font-semibold">Taxa de Recuperação: Alta</span>
        </div>
      </div>
    );
  }

  return (
    <div className="cinematic-surface rounded-xl border border-white/[0.08] p-5 sm:p-7 font-mono text-xs space-y-5 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-slate-400">
        <span className="text-[11px] font-bold text-white uppercase tracking-wider">
          Arquitetura MVVM Desktop: Aplicação Local em C#
        </span>
        <span className="text-cyan-400 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cyan-950/40 border border-cyan-500/30">
          PADRÃO CLIENTE LOCAL
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-3.5 rounded-lg border border-white/[0.06] bg-[#06080F]/80 space-y-1.5">
          <span className="text-[10px] text-cyan-400 block font-bold">CAMADA DE APRESENTAÇÃO</span>
          <div className="font-bold text-white flex items-center gap-1.5">
            <Monitor className="w-3.5 h-3.5 text-cyan-400" />
            <span>WPF UI / XAML</span>
          </div>
          <p className="text-[10px] text-slate-400">Interface Fluent Design com suporte a tema escuro</p>
        </div>

        <div className="p-3.5 rounded-lg border border-emerald-500/40 bg-emerald-950/40 space-y-1.5 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
          <span className="text-[10px] text-emerald-300 block font-bold">LÓGICA &amp; VIEWMODELS</span>
          <div className="font-bold text-emerald-200">CommunityToolkit.Mvvm</div>
          <p className="text-[10px] text-emerald-400/90">Bindings bidirecionais e comandos assíncronos</p>
        </div>

        <div className="p-3.5 rounded-lg border border-white/[0.06] bg-[#06080F]/80 space-y-1.5">
          <span className="text-[10px] text-sky-400 block font-bold">PERSISTÊNCIA EMBARCADA</span>
          <div className="font-bold text-white flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-sky-400" />
            <span>SQLite + EF Core</span>
          </div>
          <p className="text-[10px] text-slate-400">Armazenamento local rápido e 100% offline</p>
        </div>
      </div>

      <div className="pt-3 text-[10px] text-slate-400 border-t border-white/[0.08] flex flex-col sm:flex-row sm:justify-between gap-1">
        <span>Arquitetura em camadas desacoplada e independente de conexão de internet</span>
        <span className="text-cyan-400 font-semibold">Portabilidade: Total</span>
      </div>
    </div>
  );
}
