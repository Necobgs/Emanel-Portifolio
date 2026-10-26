import React from "react";
import { Terminal, Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/icons";
import { profileData } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#06080F] text-slate-400 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Luz ambiente sutil de rodapé */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-gradient-to-t from-cyan-500/5 via-emerald-500/5 to-transparent blur-[100px] rounded-full"
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Brand & Stack Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2 text-white font-mono font-bold text-sm">
            <div className="w-5 h-5 rounded bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Terminal className="w-3 h-3" />
            </div>
            <span>{profileData.name}</span>
          </div>
          <p className="text-xs text-slate-500 font-mono mt-0.5">
            © 2026 — Engenharia de Software &amp; Automação RPA. Todos os direitos reservados.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Emanuel Borges de Oliveira"
            className="p-2.5 rounded-lg bg-[#0B0F19] border border-white/[0.08] text-slate-300 hover:text-white hover:border-white/30 hover:shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-all"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Emanuel Borges de Oliveira"
            className="p-2.5 rounded-lg bg-[#0B0F19] border border-white/[0.08] text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 hover:shadow-[0_0_12px_rgba(0,242,254,0.25)] transition-all"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={profileData.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp de Emanuel Borges de Oliveira"
            className="p-2.5 rounded-lg bg-[#0B0F19] border border-white/[0.08] text-slate-300 hover:text-emerald-300 hover:border-emerald-500/50 hover:shadow-[0_0_12px_rgba(16,185,129,0.25)] transition-all"
          >
            <WhatsappIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profileData.email}`}
            aria-label="E-mail de Emanuel Borges de Oliveira"
            className="p-2.5 rounded-lg bg-[#0B0F19] border border-white/[0.08] text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 hover:shadow-[0_0_12px_rgba(0,242,254,0.25)] transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="#main-content"
            aria-label="Voltar ao topo da página"
            className="p-2.5 rounded-lg bg-[#0B0F19] border border-white/[0.08] text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 hover:shadow-[0_0_12px_rgba(0,242,254,0.25)] transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
