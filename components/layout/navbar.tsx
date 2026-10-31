"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Menu, X, ArrowRight, Download } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SystemBadge } from "@/components/ui/system-badge";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { profileData } from "@/data/profile";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sectionIds = ["competencias", "experiencia", "projetos", "contato"];

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Caso tenha atingido o final da página, ativa a última seção (contato)
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;

      if (isAtBottom) {
        setActiveSection("contato");
        return;
      }

      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Ativa quando a seção entra na área visível superior abaixo do header
          if (rect.top <= 240 && rect.bottom >= 140) {
            current = id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
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
    { id: "competencias", label: "Competências", href: "#competencias" },
    { id: "experiencia", label: "Experiência", href: "#experiencia" },
    { id: "projetos", label: "Projetos", href: "#projetos" },
    { id: "contato", label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "liquid-glass-nav py-2.5"
          : "liquid-glass-nav-top py-3.5"
      }`}
    >
      <Container size="xl">
        <div className="flex items-center justify-between">
          {/* Marca Tipográfica */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded p-1"
            aria-label="Emanuel Borges de Oliveira — Início"
          >
            <div
              aria-hidden="true"
              className="w-8 h-8 rounded-lg liquid-glass-pill flex items-center justify-center text-cyan-600 dark:text-cyan-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_16px_rgba(2,132,199,0.3)] dark:group-hover:shadow-[0_0_18px_rgba(0,242,254,0.4)] transition-all"
            >
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-200 transition-colors tracking-tight">
                Emanuel Borges
              </span>
              <span className="font-mono text-[10px] text-slate-600 dark:text-slate-300 leading-none">
                backend &amp; rpa
              </span>
            </div>
          </Link>

          {/* Navegação Desktop com Liquid Glass Pill e Scrollspy Ativo */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-1 liquid-glass-pill p-1.5 rounded-full"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-3.5 py-1 text-xs font-mono transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                    isActive
                      ? "text-slate-950 dark:text-cyan-100 font-bold"
                      : "text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white font-medium"
                  }`}
                >
                  {/* Cápsula deslizante suave no item ativo */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavSectionIndicator"
                      className="absolute inset-0 bg-white/95 dark:bg-cyan-500/25 border border-slate-300/80 dark:border-cyan-400/50 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.06)] dark:shadow-[0_0_16px_rgba(0,242,254,0.35)] -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* CTAs Desktop com Liquid Glass Badges */}
          <div className="hidden md:flex items-center gap-3">
            <SystemBadge status="active" code="CRICIÚMA - SC" />
            <ThemeToggle />
            <Button
              href="#projetos"
              size="sm"
              variant="primary"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Ver Projetos
            </Button>
          </div>

          {/* Botões Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <SystemBadge status="active" code="CRICIÚMA - SC" className="px-2 py-0.5 text-[10px]" />
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              className="p-2 rounded-lg liquid-glass-pill text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 cursor-pointer shadow-sm min-w-[40px] min-h-[40px] flex items-center justify-center"
            >
              {mobileMenuOpen ? (
                <X aria-hidden="true" className="w-4 h-4" />
              ) : (
                <Menu aria-hidden="true" className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile Dropdown com Indicador de Seção Ativa */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="md:hidden mt-3 rounded-2xl liquid-glass-pill p-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.85)] space-y-3"
            >
              <nav aria-label="Menu móvel" className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center justify-between px-3 py-2 text-xs font-mono rounded-lg transition-colors ${
                        isActive
                          ? "bg-slate-900 text-white dark:bg-cyan-500/20 dark:text-cyan-200 dark:border dark:border-cyan-400/40 font-bold"
                          : "text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-white/60 dark:hover:bg-white/[0.08]"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(0,242,254,0.8)] animate-pulse"
                          aria-hidden="true"
                        />
                      )}
                    </a>
                  );
                })}
              </nav>
              <div className="pt-3 border-t border-slate-200/80 dark:border-white/[0.08] flex flex-col gap-2">
                <Button
                  href="#projetos"
                  onClick={() => setMobileMenuOpen(false)}
                  size="sm"
                  variant="primary"
                  className="w-full"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Ver Projetos
                </Button>
                <Button
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  variant="outline"
                  className="w-full"
                  leftIcon={<Download className="w-3.5 h-3.5" />}
                >
                  Currículo PDF
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
