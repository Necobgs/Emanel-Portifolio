import React from "react";
import { Terminal, Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { profileData } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-[#1C2234] bg-[#07090E] text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Stack Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2 text-white font-mono font-bold text-sm">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>{profileData.name}</span>
          </div>
          <p className="text-xs text-slate-500 font-mono">
            Next.js 16 • React 19 • Tailwind CSS v4 • Motion • GSAP
          </p>
          <p className="text-xs text-slate-600 font-mono mt-1">
            © 2026 — Todos os direitos reservados.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Emanuel Borges de Oliveira"
            className="p-2 rounded-lg bg-[#111520] border border-[#21293D] text-slate-400 hover:text-white hover:border-emerald-500/40 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Emanuel Borges de Oliveira"
            className="p-2 rounded-lg bg-[#111520] border border-[#21293D] text-slate-400 hover:text-white hover:border-emerald-500/40 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profileData.email}`}
            aria-label="E-mail de Emanuel Borges de Oliveira"
            className="p-2 rounded-lg bg-[#111520] border border-[#21293D] text-slate-400 hover:text-white hover:border-emerald-500/40 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="#"
            aria-label="Voltar ao topo da página"
            className="p-2 rounded-lg bg-[#111520] border border-[#21293D] text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
