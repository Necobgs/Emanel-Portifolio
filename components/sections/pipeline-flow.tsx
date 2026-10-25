"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { GitBranch, Activity, Cpu, Database, Network, Bell, ArrowRight } from "lucide-react";

export function PipelineFlow() {
  const [selectedNode, setSelectedNode] = useState<number>(1);

  const pipelineNodes = [
    {
      id: 0,
      title: "01. Gatilho & Ingestão",
      subtitle: "Webhooks / Cron Schedulers",
      icon: Activity,
      summary:
        "Captura de requisições de clientes, eventos orientados a mensageria ou gatilhos temporais parametrizados com validação prévia de payload.",
      details: [
        "Desacoplamento inicial entre cliente e worker para evitar bloqueio I/O",
        "Validação de tokens e sanitização de schema de entrada",
        "Atribuição imediata de Job ID para rastreamento de ponta a ponta",
      ],
      tags: ["FastAPI", "NestJS", "Webhooks", "JSON Schema"],
    },
    {
      id: 1,
      title: "02. Orquestração & Worker",
      subtitle: "Golang Coroutines & Python RPA",
      icon: Cpu,
      summary:
        "Instanciação de rotinas concorrentes otimizadas para processamento assíncrono ou robôs headless com tratamento defensivo de exceções.",
      details: [
        "Execução paralela de rotinas com baixo consumo de memória",
        "Políticas de retry exponencial com jitter para contornar instabilidades",
        "Controle de headless sessions e bypass inteligente de seletores voláteis",
      ],
      tags: ["Golang", "Python", "Playwright", "Selenium"],
    },
    {
      id: 2,
      title: "03. Fila & Cache Distribuído",
      subtitle: "Redis Caching & Concorrência",
      icon: Network,
      summary:
        "Controle de desduplicação de tarefas, cache de consultas de alta frequência e consultas espaciais ultrarrápidas em memória.",
      details: [
        "Caching in-memory reduzindo consultas repetitivas ao banco",
        "Comandos espaciais GEO com Redis para localização em tempo real",
        "Locks distribuídos para evitar race conditions em tarefas críticas",
      ],
      tags: ["Redis", "Redis GEO", "Pub/Sub", "Memory Management"],
    },
    {
      id: 3,
      title: "04. Persistência Estruturada",
      subtitle: "PostgreSQL & Transações ACID",
      icon: Database,
      summary:
        "Gravação transacional com garantia estrita de integridade referencial, modelagem normalizada e indexação para consultas analíticas.",
      details: [
        "Transações seguras com rollback automático em caso de anomalia",
        "Índices otimizados (B-Tree, GIN) para recuperação ágil de registros",
        "Auditoria de logs de mutação para rastreabilidade de compliance",
      ],
      tags: ["PostgreSQL", "TypeORM", "SQL Otimizado", "Docker"],
    },
    {
      id: 4,
      title: "05. Observabilidade & Alertas",
      subtitle: "Healthchecks & Telemetria",
      icon: Bell,
      summary:
        "Monitoramento do ciclo de vida da execução, métricas de taxa de sucesso, latência de ponta e disparos de alertas imediatos.",
      details: [
        "Logs estruturados em formato JSON com correlação de Job ID",
        "Métricas de tempo de execução e uso de recursos do host",
        "Notificações automáticas para equipes operacionais e clientes",
      ],
      tags: ["Observabilidade", "Healthchecks", "Webhooks", "Logging"],
    },
  ];

  const current = pipelineNodes[selectedNode];

  return (
    <section id="pipeline" className="py-24 border-t border-[#161D2E] bg-[#0A0D15] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Ciclo de Vida de Software</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Arquitetura de Execução & Fluxo de Automação
          </h2>
          <p className="mt-2 text-base text-slate-400 max-w-2xl">
            Como orquestro pipelines assíncronos e robôs de dados do evento inicial até a
            persistência segura e monitoramento em tempo real.
          </p>
        </div>

        {/* Pipeline Steps Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
          {pipelineNodes.map((node) => {
            const Icon = node.icon;
            const isSelected = selectedNode === node.id;

            return (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node.id)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#141A29] border-emerald-500/60 shadow-lg shadow-emerald-500/10 -translate-y-0.5"
                    : "bg-[#0E121B] border-[#1C2337] hover:border-[#2D3852] hover:bg-[#121622]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`p-2 rounded-lg border ${
                        isSelected
                          ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
                          : "bg-[#131926] border-[#20293D] text-slate-400"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        isSelected
                          ? "bg-emerald-500/20 text-emerald-300 font-bold"
                          : "text-slate-500"
                      }`}
                    >
                      Etapa 0{node.id + 1}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight">{node.title}</h3>
                  <p className="text-xs text-slate-400 mt-0.5 font-mono">{node.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Node Detailed Breakdown */}
        <motion.div
          key={selectedNode}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border border-[#232C42] bg-[#101420] p-6 sm:p-8 backdrop-blur-md"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-[#1E2538]">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                Detalhamento Técnico da Etapa
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">{current.title}</h3>
              <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
                {current.summary}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {current.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[#171E2E] text-slate-200 border border-[#242F46]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Princípios de Resiliência Aplicados:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {current.details.map((detail, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0B0E17] border border-[#1A2234] flex items-start gap-3"
                >
                  <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
