"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, FileDown, Copy, Check, Send, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { profileData } from "@/data/profile";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contato" className="py-24 border-t border-[#1b202e] relative overflow-hidden bg-[#0a0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Coluna Esquerda */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Send className="w-3.5 h-3.5" />
              <span>Conexão & Oportunidades</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f1f3f7] tracking-tight">
              Vamos construir arquiteturas robustas juntos?
            </h2>

            <p className="text-sm sm:text-base text-[#8e95a5] leading-relaxed max-w-lg">
              Estou disponível para novos projetos, consultoria técnica em backend e automação
              ou oportunidades corporativas. Se você precisa de microsserviços em Golang/Node.js,
              robôs resilientes em Python ou modernização de sistemas, entre em contato.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#8e95a5] font-mono">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#8e95a5] font-mono">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{profileData.email}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a href={`mailto:${profileData.email}`}>
                <Button size="lg" variant="primary" leftIcon={<Mail className="w-4 h-4" />}>
                  Enviar Mensagem
                </Button>
              </a>
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  leftIcon={<FileDown className="w-4 h-4 text-[#8e95a5]" />}
                >
                  Baixar Currículo (PDF)
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Coluna Direita: Terminal Interativo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="rounded-lg border border-[#1b202e] bg-[#10131b] p-6 sm:p-8 shadow-2xl font-mono text-xs">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1b202e]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-[#8e95a5] text-[11px]">quick-connect.sh</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-semibold">
                  STATUS: LISTENING
                </span>
              </div>

              {/* Terminal Code Snippet */}
              <div className="space-y-3 text-[#f1f3f7] leading-relaxed">
                <div>
                  <span className="text-[#525866]"># Canal direto de e-mail</span>
                  <div className="flex items-center justify-between bg-[#0a0c10] p-3 rounded border border-[#1b202e] mt-1">
                    <span className="text-emerald-300 select-all font-semibold">
                      {profileData.email}
                    </span>
                    <button
                      onClick={copyEmail}
                      aria-label="Copiar endereço de e-mail"
                      className="p-1 rounded text-[#8e95a5] hover:text-white transition-colors cursor-pointer"
                    >
                      {copiedEmail ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <span className="text-[#525866]"># Redes profissionais</span>
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <a
                      href={profileData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded bg-[#0a0c10] border border-[#1b202e] hover:border-emerald-500/40 hover:bg-[#161b26] transition-all"
                    >
                      <span className="flex items-center gap-2 text-[#f1f3f7]">
                        <LinkedinIcon className="w-4 h-4 text-emerald-400" />
                        LinkedIn
                      </span>
                      <span className="text-[#525866] text-[10px]">↗</span>
                    </a>

                    <a
                      href={profileData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded bg-[#0a0c10] border border-[#1b202e] hover:border-emerald-500/40 hover:bg-[#161b26] transition-all"
                    >
                      <span className="flex items-center gap-2 text-[#f1f3f7]">
                        <GithubIcon className="w-4 h-4 text-[#8e95a5]" />
                        GitHub
                      </span>
                      <span className="text-[#525866] text-[10px]">↗</span>
                    </a>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-[#525866]">
                  <p>echo &quot;Tempo médio de resposta: &lt; 24h em dias úteis&quot;</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
