import React from "react";
import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-[#0a0c10] text-[#f1f3f7] flex flex-col justify-center items-center py-20 px-4">
      <Container size="sm" className="text-center space-y-6">
        <div className="w-12 h-12 rounded border border-[#252c3f] bg-[#10131b] flex items-center justify-center text-emerald-400 mx-auto">
          <Terminal className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">
            ERR_PROJECT_NOT_FOUND (404)
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#f1f3f7] tracking-tight">
            Estudo de Caso Não Localizado
          </h1>
          <p className="text-xs sm:text-sm text-[#8e95a5] max-w-md mx-auto leading-relaxed">
            O identificador de projeto solicitado não consta no catálogo ativo de sistemas e
            estudos de caso de Emanuel Borges de Oliveira.
          </p>
        </div>

        <div className="pt-4">
          <Link href="/#projetos">
            <Button variant="primary" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Retornar para Lista de Projetos
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
