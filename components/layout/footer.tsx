import React from "react";
import { Terminal, Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/icons";
import { profileData } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/[0.08] bg-slate-100 dark:bg-[#06080F] text-slate-700 dark:text-slate-300 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors">
      {/* Luz ambiente sutil de rodapé */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[120px] bg-gradient-to-t from-cyan-500/5 via-emerald-500/5 to-transparent blur-[60px] sm:blur-[100px] rounded-full"
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Brand & Stack Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-mono font-bold text-sm">
            <div
              aria-hidden="true"
              className="w-5 h-5 rounded bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400"
            >
              <Terminal className="w-3 h-3" />
            </div>
            <span>{profileData.name}</span>
          </div>
          <p className="text-xs text-slate-700 dark:text-slate-300 font-mono mt-0.5 font-medium">
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
            className="p-2.5 rounded-lg bg-white dark:bg-[#0B0F19] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:border-slate-400 dark:hover:border-white/30 shadow-sm transition-all"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Emanuel Borges de Oliveira"
            className="p-2.5 rounded-lg bg-white dark:bg-[#0B0F19] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-300 hover:border-cyan-400 dark:hover:border-cyan-500/50 shadow-sm transition-all"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={profileData.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp de Emanuel Borges de Oliveira"
            className="p-2.5 rounded-lg bg-white dark:bg-[#0B0F19] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-300 hover:border-emerald-400 dark:hover:border-emerald-500/50 shadow-sm transition-all"
          >
            <WhatsappIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profileData.email}`}
            aria-label="E-mail de Emanuel Borges de Oliveira"
            className="p-2.5 rounded-lg bg-white dark:bg-[#0B0F19] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-300 hover:border-cyan-400 dark:hover:border-cyan-500/50 shadow-sm transition-all"
          >
            <Mail aria-hidden="true" className="w-4 h-4" />
          </a>
          <a
            href="#main-content"
            aria-label="Voltar ao topo da página"
            className="p-2.5 rounded-lg bg-white dark:bg-[#0B0F19] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-300 hover:border-cyan-400 dark:hover:border-cyan-500/50 shadow-sm transition-all"
          >
            <ArrowUp aria-hidden="true" className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
