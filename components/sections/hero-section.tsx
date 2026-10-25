"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Terminal, FileDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ActionLink } from "@/components/ui/action-link";
import { SystemBadge } from "@/components/ui/system-badge";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { profileData } from "@/data/profile";
import { HeroArchitectureFlow } from "./hero-architecture-flow";

export function HeroSection() {
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-[#1b202e]">
      {/* Grade de blueprint sutil ao fundo */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Coluna Esquerda: Composição Editorial com Entrada Discreta */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6"
          >
            {/* Tag de Posicionamento Profissional */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2">
              <SystemBadge
                status="active"
                label="Backend Engineer | RPA & Software Automation"
              />
              <span className="hidden sm:inline-block text-[#525866] font-mono text-xs">•</span>
              <span className="hidden sm:inline-block text-xs font-mono text-[#8e95a5]">
                Criciúma, SC (Remoto / Híbrido)
              </span>
            </motion.div>

            {/* Headline com forte hierarquia tipográfica */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight text-[#f1f3f7] leading-[1.12]"
            >
              Construindo software que conecta{" "}
              <span className="text-emerald-400 font-mono">automação</span>,{" "}
              <span className="text-[#f1f3f7]">backend</span> e{" "}
              <span className="text-[#8e95a5]">negócio</span>.
            </motion.h1>

            {/* Descrição Alinhada e Focada */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#8e95a5] leading-relaxed max-w-2xl"
            >
              Desenvolvedor de software focado em APIs, automação de processos e sistemas
              confiáveis. Transformo problemas operacionais em soluções técnicas bem
              estruturadas utilizando{" "}
              <span className="text-[#f1f3f7] font-mono font-medium">Python</span>,{" "}
              <span className="text-[#f1f3f7] font-mono font-medium">Golang</span>,{" "}
              <span className="text-[#f1f3f7] font-mono font-medium">NestJS</span> e{" "}
              <span className="text-[#f1f3f7] font-mono font-medium">PostgreSQL</span>.
            </motion.p>

            {/* CTAs Funcionais */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-1">
              <a href="#projetos">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Explorar Projetos
                </Button>
              </a>
              <a href="#contato">
                <Button variant="secondary" size="lg" leftIcon={<Terminal className="w-4 h-4" />}>
                  Entrar em Contato
                </Button>
              </a>
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" leftIcon={<FileDown className="w-4 h-4" />}>
                  Currículo PDF
                </Button>
              </a>
            </motion.div>

            {/* Links de Perfil Profissional */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-5 pt-3 border-t border-[#1b202e] text-xs font-mono"
            >
              <ActionLink
                href={profileData.github}
                external
                variant="mono"
                icon={<GithubIcon className="w-3.5 h-3.5" />}
              >
                github.com/Necobgs
              </ActionLink>

              <ActionLink
                href={profileData.linkedin}
                external
                variant="mono"
                icon={<LinkedinIcon className="w-3.5 h-3.5" />}
              >
                linkedin.com/in/emanuel-bgs-dev
              </ActionLink>
            </motion.div>
          </motion.div>

          {/* Coluna Direita: Elemento Visual Técnico com GSAP e SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 w-full"
          >
            <HeroArchitectureFlow />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
