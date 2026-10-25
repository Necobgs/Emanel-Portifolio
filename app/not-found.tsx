import React from "react";
import Link from "next/link";
import { ArrowLeft, Terminal, Home, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#06080F] text-slate-100 flex flex-col justify-center items-center py-20 px-4 selection:bg-cyan-500/25 selection:text-cyan-200 relative overflow-hidden">
      {/* Luzes atmosféricas de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-br from-cyan-500/10 via-rose-500/5 to-transparent blur-[140px] rounded-full"
      />

      <Container size="sm" className="text-center space-y-6 relative z-10">
        <div className="w-16 h-16 rounded-2xl border border-cyan-500/30 bg-cyan-950/40 flex items-center justify-center text-cyan-300 mx-auto shadow-[0_0_25px_rgba(0,242,254,0.25)]">
          <Terminal className="w-8 h-8" />
        </div>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span>HTTP_STATUS_404: RESOURCE_NOT_FOUND</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Página Não Encontrada
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto leading-relaxed">
            A rota ou recurso solicitado não existe ou foi movido. Verifique o endereço digitado ou retorne à navegação principal.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link href="/">
            <Button variant="primary" leftIcon={<Home className="w-4 h-4" />}>
              Página Inicial
            </Button>
          </Link>
          <Link href="/#projetos">
            <Button variant="secondary" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Ver Projetos
            </Button>
          </Link>
          <Link href="/#contato">
            <Button variant="outline" leftIcon={<Mail className="w-4 h-4" />}>
              Falar com Emanuel
            </Button>
          </Link>
        </div>

        <div className="pt-8 border-t border-white/[0.08] text-xs font-mono text-slate-500">
          <span>Emanuel Borges de Oliveira • Engenharia de Software &amp; Automação</span>
        </div>
      </Container>
    </div>
  );
}
