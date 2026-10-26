"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Menu, X, ArrowRight, Download } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SystemBadge } from "@/components/ui/system-badge";
import { profileData } from "@/data/profile";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Abordagem", href: "#abordagem" },
    { label: "Competências", href: "#competencias" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[#06080F]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.7)] py-2.5"
        : "bg-[#06080F]/60 backdrop-blur-md border-b border-transparent py-4"
        }`}
    >
      <Container size="xl">
        <div className="flex items-center justify-between">
          {/* Marca Tipográfica */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded p-1"
            aria-label="Emanuel Borges de Oliveira — Início"
          >
            <div className="w-8 h-8 rounded-lg border border-cyan-500/30 bg-cyan-950/40 flex items-center justify-center text-cyan-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,242,254,0.35)] transition-all">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs sm:text-sm font-bold text-white group-hover:text-cyan-200 transition-colors tracking-tight">
                Emanuel Borges
              </span>
              <span className="font-mono text-[10px] text-slate-400 leading-none">
                backend &amp; rpa
              </span>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-1 bg-[#0B0F19]/90 border border-white/[0.08] px-3 py-1.5 rounded-full shadow-inner"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1 text-xs font-mono font-medium text-slate-300 hover:text-white hover:bg-white/[0.08] rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTAs Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <SystemBadge status="active" code="CRICIÚMA - SC" />
            <a href="#projetos">
              <Button size="sm" variant="primary" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                Ver Projetos
              </Button>
            </a>
          </div>

          {/* Botão Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <SystemBadge status="active" className="px-2 py-0.5 text-[10px]" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              className="p-2 rounded-lg border border-white/[0.08] bg-[#0B0F19] text-slate-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Dropdown com Motion AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="md:hidden mt-3 rounded-xl border border-white/[0.08] cinematic-surface p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] space-y-3"
            >
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-xs font-mono text-slate-300 hover:text-white hover:bg-white/[0.08] rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
                <a
                  href="#projetos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full"
                >
                  <Button size="sm" variant="primary" className="w-full" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                    Ver Projetos
                  </Button>
                </a>
                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button size="sm" variant="outline" className="w-full" leftIcon={<Download className="w-3.5 h-3.5" />}>
                    Currículo PDF
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
