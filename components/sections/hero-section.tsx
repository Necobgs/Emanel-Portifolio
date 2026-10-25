"use client";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Terminal, FileDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ActionLink } from "@/components/ui/action-link";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/icons";
import { profileData } from "@/data/profile";
import { HeroArchitectureFlow } from "./hero-architecture-flow";

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Coluna Esquerda: Composição Editorial com Entrada Discreta */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6"
          >
            {/* Tag de Posicionamento Profissional Iluminada */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/40 text-cyan-300 border border-cyan-500/30 shadow-[0_0_12px_rgba(0,242,254,0.15)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Backend Engineer | RPA &amp; Software Automation</span>
              </div>
              <span className="hidden sm:inline-block text-[#64748b] font-mono text-xs">•</span>
              <span className="hidden sm:inline-block text-xs font-mono text-[#94a3b8]">
                Criciúma, SC (Remoto / Híbrido)
              </span>
            </motion.div>

            {/* Headline Cinematográfica de Alto Impacto */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold tracking-tight text-[#f8fafc] leading-[1.14]"
            >
              <span className="block text-xs sm:text-sm font-mono font-semibold tracking-wider text-cyan-400 uppercase mb-3">
                Emanuel Borges — Engenheiro Backend &amp; Automação RPA
              </span>
              Construindo software que conecta{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-300 drop-shadow-[0_0_20px_rgba(0,242,254,0.25)]">
                automação
              </span>
              ,{" "}
              <span className="text-[#f8fafc]">backend</span> e{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-400 drop-shadow-[0_0_20px_rgba(0,242,254,0.25)]">
                negócio
              </span>
              .
            </motion.h1>

            {/* Descrição Alinhada com Stacks de Produção */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#94a3b8] leading-relaxed max-w-2xl"
            >
              Desenvolvedor em Criciúma/SC focado em APIs de alta resiliência, processamento assíncrono e automação corporativa. Transformo problemas operacionais em soluções técnicas bem estruturadas utilizando{" "}
              <span className="text-[#f8fafc] font-mono font-medium border-b border-cyan-500/30">Python</span>,{" "}
              <span className="text-[#f8fafc] font-mono font-medium border-b border-teal-500/30">NestJS</span>,{" "}
              <span className="text-[#f8fafc] font-mono font-medium border-b border-cyan-500/30">RabbitMQ</span> e{" "}
              <span className="text-[#f8fafc] font-mono font-medium border-b border-sky-500/30">PostgreSQL</span>.
            </motion.p>

            {/* CTAs Funcionais com Reflexos LUMINOSOS */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-1">
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
              className="flex flex-wrap items-center gap-5 pt-3 border-t border-[#172033] text-xs font-mono"
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

          {/* Coluna Direita: Topologia Arquitetural Animada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Halo de fundo atrás do componente da topologia */}
            <div
              className="absolute -inset-4 bg-gradient-to-r from-cyan-500/15 via-emerald-500/10 to-indigo-500/15 rounded-2xl blur-xl -z-10"
              aria-hidden="true"
            />
            <HeroArchitectureFlow />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
