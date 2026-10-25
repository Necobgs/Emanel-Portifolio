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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#0a0c10]/95 backdrop-blur-md border-b border-[#1b202e] shadow-lg shadow-black/40 py-2.5"
          : "bg-[#0a0c10]/70 backdrop-blur-sm border-b border-transparent py-4"
      }`}
    >
      <Container size="xl">
        <div className="flex items-center justify-between">
          {/* Marca Tipográfica */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded p-1"
            aria-label="Emanuel Borges de Oliveira — Início"
          >
            <div className="w-8 h-8 rounded border border-[#252c3f] bg-[#10131b] flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/60 group-hover:bg-[#141a29] transition-all">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs sm:text-sm font-bold text-[#f1f3f7] group-hover:text-emerald-300 transition-colors tracking-tight">
                Emanuel Borges
              </span>
              <span className="font-mono text-[10px] text-[#525866] leading-none">
                backend &amp; rpa
              </span>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-1 bg-[#10131b] border border-[#1b202e] px-3 py-1.5 rounded-full"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1 text-xs font-mono font-medium text-[#8e95a5] hover:text-[#f1f3f7] hover:bg-[#161b26] rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTAs Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <SystemBadge status="active" label="ONLINE" code="CRICIÚMA" />
            <a href="#projetos">
              <Button size="sm" variant="primary" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                Ver Projetos
              </Button>
            </a>
          </div>

          {/* Botão Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <SystemBadge status="active" label="ONLINE" className="px-2 py-0.5 text-[10px]" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              className="p-2 rounded border border-[#252c3f] bg-[#10131b] text-[#8e95a5] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
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
              className="md:hidden mt-3 rounded-lg border border-[#252c3f] bg-[#10131b] p-4 shadow-2xl space-y-3"
            >
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-xs font-mono text-[#8e95a5] hover:text-[#f1f3f7] hover:bg-[#161b26] rounded transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="pt-3 border-t border-[#1b202e] flex flex-col gap-2">
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
