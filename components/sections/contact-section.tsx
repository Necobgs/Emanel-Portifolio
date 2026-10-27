"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, FileDown, Copy, Check, Send, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/icons";
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
    <section
      id="contato"
      className="min-h-[100dvh] py-20 md:py-24 flex flex-col justify-center border-t border-slate-200 dark:border-white/[0.06] relative overflow-hidden bg-slate-50 dark:bg-[#06080F] content-visibility-auto"
    >
      {/* Luzes atmosféricas de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/4 w-[450px] sm:w-[600px] h-[300px] sm:h-[400px] bg-gradient-to-bl from-cyan-500/10 via-indigo-600/5 to-transparent blur-[60px] sm:blur-[150px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/4 w-[400px] sm:w-[550px] h-[300px] sm:h-[400px] bg-gradient-to-tr from-teal-500/10 via-sky-500/5 to-transparent blur-[60px] sm:blur-[150px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Coluna Esquerda */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-50 text-cyan-950 border border-cyan-300 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-500/40 font-semibold">
              <Send aria-hidden="true" className="w-3.5 h-3.5 text-cyan-700 dark:text-cyan-400" />
              <span>Conexão &amp; Oportunidades</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Vamos construir a sua{" "}
              <span className="bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-600 dark:from-cyan-300 dark:via-sky-300 dark:to-teal-300 bg-clip-text text-transparent pr-1">
                solução?
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-lg font-normal">
              Estou disponível para novos projetos, consultoria técnica em backend e automação
              ou oportunidades corporativas, entre em contato.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-mono font-medium">
                <div
                  aria-hidden="true"
                  className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-300 dark:bg-emerald-500/10 dark:border-emerald-500/30 flex items-center justify-center text-emerald-700 dark:text-emerald-400"
                >
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-mono font-medium">
                <div
                  aria-hidden="true"
                  className="w-7 h-7 rounded-lg bg-cyan-50 border border-cyan-300 dark:bg-cyan-500/10 dark:border-cyan-500/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400"
                >
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>{profileData.email}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4">
              <Button
                href={profileData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="primary"
                leftIcon={<WhatsappIcon className="w-4 h-4" />}
              >
                Chamar no WhatsApp
              </Button>
              <Button
                href={`mailto:${profileData.email}`}
                size="lg"
                variant="secondary"
                leftIcon={<Mail className="w-4 h-4" />}
              >
                Enviar E-mail
              </Button>
              <Button
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="outline"
                leftIcon={<FileDown className="w-4 h-4 text-slate-600 dark:text-slate-300" />}
              >
                Baixar Currículo (PDF)
              </Button>
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
            <div className="cinematic-surface rounded-xl border border-slate-200 dark:border-white/[0.08] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] font-mono text-xs">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-rose-500/90 shadow-[0_0_8px_rgba(244,63,94,0.6)] inline-block" />
                  <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-amber-500/90 shadow-[0_0_8px_rgba(245,158,11,0.6)] inline-block" />
                  <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 shadow-[0_0_8px_rgba(16,185,129,0.6)] inline-block" />
                  <span className="ml-2 text-slate-600 dark:text-slate-300 text-[11px] font-medium">quick-connect.sh</span>
                </div>
                <span className="text-[10px] text-emerald-950 dark:text-emerald-300 font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40">
                  STATUS: LISTENING
                </span>
              </div>

              {/* Terminal Code Snippet */}
              <div className="space-y-4 text-slate-900 dark:text-white leading-relaxed">
                <div>
                  <span className="text-slate-600 dark:text-slate-300 font-medium"># Canal direto de e-mail</span>
                  <div className="flex items-center justify-between bg-slate-100 dark:bg-[#06080F] p-3.5 rounded-lg border border-slate-200 dark:border-white/[0.08] mt-1.5 hover:border-cyan-500/40 transition-colors">
                    <span className="text-cyan-800 dark:text-cyan-300 select-all font-semibold text-xs sm:text-sm">
                      {profileData.email}
                    </span>
                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label="Copiar endereço de e-mail"
                      className="p-1.5 rounded-md text-slate-600 hover:text-slate-950 hover:bg-slate-200/80 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/[0.08] transition-colors cursor-pointer"
                    >
                      {copiedEmail ? (
                        <Check aria-hidden="true" className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <Copy aria-hidden="true" className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <span className="text-slate-600 dark:text-slate-300 font-medium"># Conexão rápida</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-1.5">
                    <a
                      href={profileData.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg bg-slate-100 dark:bg-[#06080F] border border-slate-200 dark:border-white/[0.08] hover:border-emerald-400 dark:hover:border-emerald-500/50 hover:shadow-sm transition-all group"
                    >
                      <span className="flex items-center gap-2 text-slate-800 group-hover:text-emerald-800 dark:text-slate-200 dark:group-hover:text-emerald-300 transition-colors font-medium">
                        <WhatsappIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        WhatsApp
                      </span>
                      <span aria-hidden="true" className="text-slate-500 group-hover:text-emerald-700 dark:text-slate-400 dark:group-hover:text-emerald-300 text-[10px]">↗</span>
                    </a>

                    <a
                      href={profileData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg bg-slate-100 dark:bg-[#06080F] border border-slate-200 dark:border-white/[0.08] hover:border-cyan-400 dark:hover:border-cyan-500/50 hover:shadow-sm transition-all group"
                    >
                      <span className="flex items-center gap-2 text-slate-800 group-hover:text-cyan-800 dark:text-slate-200 dark:group-hover:text-cyan-300 transition-colors font-medium">
                        <LinkedinIcon className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                        LinkedIn
                      </span>
                      <span aria-hidden="true" className="text-slate-500 group-hover:text-cyan-700 dark:text-slate-400 dark:group-hover:text-cyan-300 text-[10px]">↗</span>
                    </a>

                    <a
                      href={profileData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg bg-slate-100 dark:bg-[#06080F] border border-slate-200 dark:border-white/[0.08] hover:border-slate-400 dark:hover:border-white/30 hover:shadow-sm transition-all group"
                    >
                      <span className="flex items-center gap-2 text-slate-800 group-hover:text-slate-950 dark:text-slate-200 dark:group-hover:text-white transition-colors font-medium">
                        <GithubIcon className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                        GitHub
                      </span>
                      <span aria-hidden="true" className="text-slate-500 group-hover:text-slate-800 dark:text-slate-400 dark:group-hover:text-white text-[10px]">↗</span>
                    </a>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-600 dark:text-slate-300">
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
