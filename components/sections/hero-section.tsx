"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Terminal, FileDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ActionLink } from "@/components/ui/action-link";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/icons";
import { profileData } from "@/data/profile";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const ledGridRef = useRef<HTMLDivElement>(null);

  const mouseTarget = useRef<{ x: number; y: number } | null>(null);
  const currentPos = useRef<{ x: number; y: number } | null>(null);
  const isHovered = useRef(false);

  useEffect(() => {
    let animId: number;

    const updateLoop = () => {
      if (isHovered.current && mouseTarget.current) {
        if (!currentPos.current) {
          currentPos.current = { ...mouseTarget.current };
        }

        // Fator de suavização (LERP) calibrado para acompanhamento fluido, elegante e não abrupto
        const ease = 0.055;
        currentPos.current.x += (mouseTarget.current.x - currentPos.current.x) * ease;
        currentPos.current.y += (mouseTarget.current.y - currentPos.current.y) * ease;

        if (ledGridRef.current) {
          const x = currentPos.current.x.toFixed(2);
          const y = currentPos.current.y.toFixed(2);
          ledGridRef.current.style.setProperty("--led-x", `${x}px`);
          ledGridRef.current.style.setProperty("--led-y", `${y}px`);
          ledGridRef.current.style.opacity = "1";
        }
      } else if (ledGridRef.current && !isHovered.current) {
        ledGridRef.current.style.opacity = "0";
      }

      animId = requestAnimationFrame(updateLoop);
    };

    animId = requestAnimationFrame(updateLoop);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    mouseTarget.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    isHovered.current = true;
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100dvh] flex flex-col justify-center items-center pt-20 pb-12 overflow-hidden border-b border-slate-200 dark:border-[#172033]"
    >
      {/* Luzes Difusas de Fundo Harmonizadas */}
      <div
        className="absolute top-0 right-10 w-[600px] h-[600px] bg-gradient-to-br from-cyan-400/15 via-indigo-400/10 to-transparent dark:from-cyan-500/18 dark:via-indigo-600/12 rounded-full blur-[110px] pointer-events-none -z-0 animate-ambient-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-10 w-[500px] h-[500px] bg-gradient-to-tr from-teal-400/12 via-sky-400/8 to-transparent dark:from-teal-500/12 dark:via-sky-600/8 rounded-full blur-[110px] pointer-events-none -z-0"
        aria-hidden="true"
      />

      {/* 1. Grade técnica com transição de transparência circular (mais nítida no centro e suave para fora) */}
      <div
        className="absolute inset-0 bg-tech-grid pointer-events-none -z-0"
        style={{
          maskImage: "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 0.55) 45%, rgba(0, 0, 0, 0) 75%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 0.55) 45%, rgba(0, 0, 0, 0) 75%)",
        }}
        aria-hidden="true"
      />

      {/* 2. Grade LED interativa: APENAS as linhas da grade geram efeito LED com acompanhamento suave e amortecido */}
      <div
        ref={ledGridRef}
        className="absolute inset-0 bg-led-grid pointer-events-none -z-0 transition-opacity duration-500 hidden md:block"
        style={{
          opacity: 0,
          maskImage: "radial-gradient(260px circle at var(--led-x, -999px) var(--led-y, -999px), rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.55) 45%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage: "radial-gradient(260px circle at var(--led-x, -999px) var(--led-y, -999px), rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.55) 45%, rgba(0, 0, 0, 0) 100%)",
        }}
        aria-hidden="true"
      />

      <Container size="xl" className="relative z-10 w-full my-auto">
        <div className="flex justify-center items-center py-6 sm:py-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center space-y-5 max-w-3xl"
          >
            {/* Headline Cinematográfica */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold tracking-tight text-slate-900 dark:text-[#f8fafc] leading-[1.14] mb-1 text-center"
            >
              Emanuel Borges de Oliveira
            </motion.h1>

            {/* Descrição de Atuação */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 dark:text-[#94a3b8] leading-relaxed max-w-2xl text-center"
            >
              Backend Engineer | RPA Software Automation
            </motion.p>

            {/* Frase de Posicionamento / Manifesto (linha única sem quebra) */}
            <motion.p
              variants={itemVariants}
              className="text-[clamp(9.5px,2.75vw,16.5px)] font-medium text-slate-700 dark:text-cyan-200/90 tracking-tight whitespace-nowrap text-center max-w-full px-2"
            >
              &ldquo;Mais do que desenvolver software, entender o negócio e resolver problemas&rdquo;
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-3 sm:pt-5 justify-center">
              <a href="#projetos">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Explorar Projetos
                </Button>
              </a>
              <a href="#contato">
                <Button variant="secondary" size="lg" leftIcon={<Terminal className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />}>
                  Entrar em Contato
                </Button>
              </a>
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" leftIcon={<FileDown className="w-4 h-4 text-slate-500 dark:text-[#94a3b8]" />}>
                  Currículo PDF
                </Button>
              </a>
            </motion.div>

            {/* Links de Perfil Profissional */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center gap-5 pt-6 border-t border-slate-200 dark:border-[#172033] text-xs font-mono"
            >
              <ActionLink
                href={profileData.github}
                external
                variant="mono"
                icon={<GithubIcon className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />}
              >
                github.com/Necobgs
              </ActionLink>

              <ActionLink
                href={profileData.linkedin}
                external
                variant="mono"
                icon={<LinkedinIcon className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />}
              >
                linkedin.com/in/emanuel-bgs-dev
              </ActionLink>

              <ActionLink
                href={profileData.whatsapp}
                external
                variant="mono"
                icon={<WhatsappIcon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />}
              >
                WhatsApp Direto
              </ActionLink>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
