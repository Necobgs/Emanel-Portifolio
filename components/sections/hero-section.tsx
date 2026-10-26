"use client";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Terminal, FileDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ActionLink } from "@/components/ui/action-link";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/icons";
import { profileData } from "@/data/profile";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
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
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-[#172033]"
    >
      {/* Luzes Difusas de Fundo Cinematográficas (Harmonizadas em Cyan, Teal & Twilight Indigo) */}
      <div
        className="absolute top-0 right-10 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/18 via-indigo-600/12 to-transparent rounded-full blur-[110px] pointer-events-none -z-0 animate-ambient-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-10 w-[500px] h-[500px] bg-gradient-to-tr from-teal-500/12 via-sky-600/8 to-transparent rounded-full blur-[110px] pointer-events-none -z-0"
        aria-hidden="true"
      />

      {/* Luz Dinâmica que reage suavemente à posição do cursor */}
      <div
        className="absolute inset-0 pointer-events-none -z-0 opacity-40 transition-opacity duration-500 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(0, 242, 254, 0.07), transparent 60%)`,
        }}
        aria-hidden="true"
      />

      {/* Grade de blueprint técnica com luminosidade aprimorada */}
      <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none -z-0" />

      <Container size="xl" className="relative z-10">
        <div className="flex justify-center items-center py-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center space-y-6 max-w-3xl"
          >
            {/* Headline Cinematográfica de Alto Impacto */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold tracking-tight text-[#f8fafc] leading-[1.14] mb-1 text-center"
            >
              Emanuel Borges de Oliveira
            </motion.h1>

            {/* Descrição Alinhada com Stacks de Produção */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#94a3b8] leading-relaxed max-w-2xl text-center"
            >
              Backend Engineer | RPA Software Automation
            </motion.p>

            {/* CTAs Funcionais com Reflexos LUMINOSOS */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-10 justify-center">
              <a href="#projetos">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Explorar Projetos
                </Button>
              </a>
              <a href="#contato">
                <Button variant="secondary" size="lg" leftIcon={<Terminal className="w-4 h-4 text-cyan-400" />}>
                  Entrar em Contato
                </Button>
              </a>
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" leftIcon={<FileDown className="w-4 h-4 text-[#94a3b8]" />}>
                  Currículo PDF
                </Button>
              </a>
            </motion.div>

            {/* Links de Perfil Profissional */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center gap-5 pt-6 border-t border-[#172033] text-xs font-mono"
            >
              <ActionLink
                href={profileData.github}
                external
                variant="mono"
                icon={<GithubIcon className="w-3.5 h-3.5 text-slate-300" />}
              >
                github.com/Necobgs
              </ActionLink>

              <ActionLink
                href={profileData.linkedin}
                external
                variant="mono"
                icon={<LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />}
              >
                linkedin.com/in/emanuel-bgs-dev
              </ActionLink>

              <ActionLink
                href={profileData.whatsapp}
                external
                variant="mono"
                icon={<WhatsappIcon className="w-3.5 h-3.5 text-emerald-400" />}
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
