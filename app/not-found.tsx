import React from "react";
import Link from "next/link";
import { ArrowLeft, Terminal, Home, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0c10] text-[#f1f3f7] flex flex-col justify-center items-center py-20 px-4 selection:bg-emerald-500/25 selection:text-emerald-300">
      <Container size="sm" className="text-center space-y-6">
        <div className="w-14 h-14 rounded-lg border border-[#252c3f] bg-[#10131b] flex items-center justify-center text-emerald-400 mx-auto shadow-xl shadow-black/40">
          <Terminal className="w-7 h-7" />
        </div>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#161b26] border border-[#252c3f] text-emerald-400 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>HTTP_STATUS_404: RESOURCE_NOT_FOUND</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#f1f3f7] tracking-tight">
            Página Não Encontrada
          </h1>

          <p className="text-sm sm:text-base text-[#8e95a5] max-w-md mx-auto leading-relaxed">
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

        <div className="pt-8 border-t border-[#1b202e] text-xs font-mono text-[#525866]">
          <span>Emanuel Borges de Oliveira • Engenharia de Software & Automação</span>
        </div>
      </Container>
    </div>
  );
}
