import React from "react";
import { Server, Database, RefreshCw, Cpu, ShieldAlert, Monitor } from "lucide-react";

export interface ProjectDetailDiagramProps {
  type?: "orchestration" | "rpa-engine" | "async-queues" | "wpf-desktop";
}

export function ProjectDetailDiagram({ type = "orchestration" }: ProjectDetailDiagramProps) {
  if (type === "orchestration") {
    return (
      <div className="rounded-lg border border-[#1b202e] bg-[#10131b] p-5 sm:p-6 font-mono text-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#1b202e] text-[#8e95a5]">
          <span className="text-[11px] font-bold text-[#f1f3f7] uppercase tracking-wider">
            Topologia do Sistema: Orquestração e Mensageria
          </span>
          <span className="text-emerald-400 text-[10px]">DIAGRAMA ARQUITETURAL</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 relative z-10">
          <div className="p-3 rounded border border-[#1b202e] bg-[#0a0c10] space-y-1">
            <span className="text-[10px] text-[#525866] block">01. API & GESTÃO</span>
            <div className="font-bold text-[#f1f3f7] flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-emerald-400" />
              <span>NestJS App</span>
            </div>
            <p className="text-[10px] text-[#8e95a5]">Agendador e Controllers</p>
          </div>

          <div className="p-3 rounded border border-emerald-500/40 bg-[#101915] space-y-1">
            <span className="text-[10px] text-emerald-400 block font-bold">02. MENSAGERIA</span>
            <div className="font-bold text-emerald-300 flex items-center gap-1.5">
              <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
              <span>RabbitMQ</span>
            </div>
            <p className="text-[10px] text-emerald-500/80">Filas & Buffers Assíncronos</p>
          </div>

          <div className="p-3 rounded border border-[#1b202e] bg-[#0a0c10] space-y-1">
            <span className="text-[10px] text-[#525866] block">03. EXECUÇÃO</span>
            <div className="font-bold text-[#f1f3f7] flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" />
              <span>Python Workers</span>
            </div>
            <p className="text-[10px] text-[#8e95a5]">Processamento dos Robôs</p>
          </div>

          <div className="p-3 rounded border border-[#1b202e] bg-[#0a0c10] space-y-1">
            <span className="text-[10px] text-[#525866] block">04. ESTADOS & DADOS</span>
            <div className="font-bold text-[#f1f3f7] flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-emerald-400" />
              <span>Redis & Postgres</span>
            </div>
            <p className="text-[10px] text-[#8e95a5]">Cache rápido e auditoria</p>
          </div>
        </div>

        <div className="pt-2 text-[10px] text-[#525866] border-t border-[#181d2a] flex justify-between">
          <span>Fluxo: Requisição HTTP → Fila de Despacho → Worker em Background → Registro de Estado</span>
          <span>Desacoplamento: 100%</span>
        </div>
      </div>
    );
  }

  if (type === "rpa-engine") {
    return (
      <div className="rounded-lg border border-[#1b202e] bg-[#10131b] p-5 sm:p-6 font-mono text-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#1b202e] text-[#8e95a5]">
          <span className="text-[11px] font-bold text-[#f1f3f7] uppercase tracking-wider">
            Arquitetura de Resiliência: Ciclo do Robô RPA
          </span>
          <span className="text-emerald-400 text-[10px]">DIAGRAMA DEFENSIVO</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 rounded border border-[#1b202e] bg-[#0a0c10] space-y-1">
            <span className="text-[10px] text-[#525866] block">FASE 1: CONTEXTO</span>
            <div className="font-bold text-[#f1f3f7]">Session & Auth Handler</div>
            <p className="text-[10px] text-[#8e95a5]">Validação de credenciais e injeção de tokens</p>
          </div>

          <div className="p-3 rounded border border-emerald-500/40 bg-[#101915] space-y-1">
            <span className="text-[10px] text-emerald-400 block font-bold">FASE 2: NAVEGAÇÃO</span>
            <div className="font-bold text-emerald-300">Playwright Adapter</div>
            <p className="text-[10px] text-emerald-500/80">Esperas explícitas de DOM e retry com backoff</p>
          </div>

          <div className="p-3 rounded border border-[#1b202e] bg-[#0a0c10] space-y-1">
            <span className="text-[10px] text-[#525866] block">FASE 3: TELEMETRIA</span>
            <div className="font-bold text-[#f1f3f7]">Structured JSON Logs</div>
            <p className="text-[10px] text-[#8e95a5]">Emissão de métricas e status de término</p>
          </div>
        </div>

        <div className="pt-2 text-[10px] text-[#525866] border-t border-[#181d2a] flex justify-between">
          <span>Padrão adotado: Page Object + Decorators de Repetição com Jitter</span>
          <span>Taxa de Recuperação: Alta</span>
        </div>
      </div>
    );
  }

  if (type === "async-queues") {
    return (
      <div className="rounded-lg border border-[#1b202e] bg-[#10131b] p-5 sm:p-6 font-mono text-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#1b202e] text-[#8e95a5]">
          <span className="text-[11px] font-bold text-[#f1f3f7] uppercase tracking-wider">
            Fluxo de Filas: Roteamento Seguro e Dead-Letter Queue
          </span>
          <span className="text-emerald-400 text-[10px]">TOLERÂNCIA A FALHAS</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 rounded border border-[#1b202e] bg-[#0a0c10] space-y-1">
            <span className="text-[10px] text-[#525866] block">ENTRADA</span>
            <div className="font-bold text-[#f1f3f7]">Fila Principal (Main Queue)</div>
            <p className="text-[10px] text-[#8e95a5]">Distribuição balanceada com ACK manual</p>
          </div>

          <div className="p-3 rounded border border-emerald-500/40 bg-[#101915] space-y-1">
            <span className="text-[10px] text-emerald-400 block font-bold">PROCESSAMENTO</span>
            <div className="font-bold text-emerald-300">Worker Consumer</div>
            <p className="text-[10px] text-emerald-500/80">3 retentativas com backoff exponencial</p>
          </div>

          <div className="p-3 rounded border border-amber-500/30 bg-[#1c1810] space-y-1">
            <span className="text-[10px] text-amber-400 block font-bold flex items-center gap-1">
              <ShieldAlert className="w-3 h-3" />
              QUARANTINE
            </span>
            <div className="font-bold text-amber-300">Dead-Letter Queue (DLQ)</div>
            <p className="text-[10px] text-amber-400/80">Isolamento de mensagens anômalas</p>
          </div>
        </div>

        <div className="pt-2 text-[10px] text-[#525866] border-t border-[#181d2a] flex justify-between">
          <span>Garantia: Mensagens defeituosas nunca bloqueiam o fluxo principal</span>
          <span>Auditoria: Preservada</span>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-[#1b202e] bg-[#10131b] p-5 sm:p-6 font-mono text-xs space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-[#1b202e] text-[#8e95a5]">
        <span className="text-[11px] font-bold text-[#f1f3f7] uppercase tracking-wider">
          Arquitetura MVVM Desktop: Aplicação Local em C#
        </span>
        <span className="text-emerald-400 text-[10px]">PADRÃO CLIENTE LOCAL</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-3 rounded border border-[#1b202e] bg-[#0a0c10] space-y-1">
          <span className="text-[10px] text-[#525866] block">CAMADA DE APRESENTAÇÃO</span>
          <div className="font-bold text-[#f1f3f7] flex items-center gap-1.5">
            <Monitor className="w-3.5 h-3.5 text-emerald-400" />
            <span>WPF UI / XAML</span>
          </div>
          <p className="text-[10px] text-[#8e95a5]">Interface Fluent Design com suporte a tema escuro</p>
        </div>

        <div className="p-3 rounded border border-emerald-500/40 bg-[#101915] space-y-1">
          <span className="text-[10px] text-emerald-400 block font-bold">LÓGICA & VIEWMODELS</span>
          <div className="font-bold text-emerald-300">CommunityToolkit.Mvvm</div>
          <p className="text-[10px] text-emerald-500/80">Bindings bidirecionais e comandos assíncronos</p>
        </div>

        <div className="p-3 rounded border border-[#1b202e] bg-[#0a0c10] space-y-1">
          <span className="text-[10px] text-[#525866] block">PERSISTÊNCIA EMBARCADA</span>
          <div className="font-bold text-[#f1f3f7] flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-emerald-400" />
            <span>SQLite + EF Core</span>
          </div>
          <p className="text-[10px] text-[#8e95a5]">Armazenamento local rápido e 100% offline</p>
        </div>
      </div>

      <div className="pt-2 text-[10px] text-[#525866] border-t border-[#181d2a] flex justify-between">
        <span>Arquitetura em camadas desacoplada e independente de conexão de internet</span>
        <span>Portabilidade: Total</span>
      </div>
    </div>
  );
}
