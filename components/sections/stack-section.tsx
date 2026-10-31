"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Code2,
  Bot,
  Database,
  Server,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SystemBadge } from "@/components/ui/system-badge";
import { TechLogo } from "@/components/ui/tech-logo";
import { skillsData, SkillGroup, SkillItem } from "@/data/skills";

interface CategoryCarouselProps {
  group: SkillGroup;
  icon: React.ReactNode;
  rowIndex: number;
}

function CategoryCarousel({ group, icon, rowIndex }: CategoryCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Estado de movimentação livre (ativo durante o arraste e durante o deslizamento suave por inércia)
  const [isFreeMoving, setIsFreeMoving] = useState(false);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const isHorizontalDrag = useRef(false);
  const scrollLeftStart = useRef(0);
  const dragHistory = useRef<{ x: number; time: number }[]>([]);
  const momentumRaf = useRef<number | null>(null);

  const shouldReduceMotion = useReducedMotion();

  const stopMomentum = useCallback(() => {
    if (momentumRaf.current) {
      cancelAnimationFrame(momentumRaf.current);
      momentumRaf.current = null;
    }
  }, []);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScroll();

    const handleScroll = () => {
      checkScroll();
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    const timeout = setTimeout(checkScroll, 200);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScroll);
      clearTimeout(timeout);
      stopMomentum();
    };
  }, [checkScroll, stopMomentum]);

  // Navegação suave pelos botões de seta (avança 1 card: 280px + 16px gap = 296px)
  const handleScrollButton = (direction: "left" | "right") => {
    stopMomentum();
    setIsFreeMoving(false);
    const el = scrollRef.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>(":scope > div");
    const cardStep = firstCard ? firstCard.offsetWidth + 16 : 296;

    el.scrollBy({
      left: direction === "left" ? -cardStep : cardStep,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  // Início do Arraste (MouseDown / PointerDown)
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return; // Apenas botão principal do mouse
    const el = scrollRef.current;
    if (!el) return;

    // Interrompe imediatamente qualquer deslizamento anterior para controle responsivo
    stopMomentum();
    isDragging.current = true;
    startX.current = e.pageX;
    startY.current = e.pageY;
    isHorizontalDrag.current = false;
    scrollLeftStart.current = el.scrollLeft;
    dragHistory.current = [{ x: e.pageX, time: performance.now() }];

    // Desativa o snap CSS durante todo o ciclo de arraste e inércia para evitar qualquer teleporte
    setIsFreeMoving(true);

    const handleWindowMouseMove = (moveEvent: MouseEvent) => {
      if (!isDragging.current || !scrollRef.current) return;

      const currentX = moveEvent.pageX;
      const currentY = moveEvent.pageY;
      const deltaX = currentX - startX.current;
      const deltaY = currentY - startY.current;

      // Detecta intenção de rolagem horizontal vs vertical
      if (!isHorizontalDrag.current) {
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 6) {
          isHorizontalDrag.current = true;
        } else if (Math.abs(deltaY) > 8) {
          // Movimento predominantemente vertical: não bloqueia a página
          return;
        }
      }

      if (isHorizontalDrag.current) {
        moveEvent.preventDefault();
      }

      const now = performance.now();

      // Registra a trajetória recente para calcular a velocidade e intenção
      dragHistory.current.push({ x: currentX, time: now });
      dragHistory.current = dragHistory.current.filter((p) => now - p.time <= 120);

      // Desloca o carrossel em tempo real junto com o mouse
      scrollRef.current.scrollLeft = scrollLeftStart.current - deltaX;
      checkScroll();
    };

    const handleWindowMouseUp = (upEvent: MouseEvent) => {
      isDragging.current = false;
      window.removeEventListener("mousemove", handleWindowMouseMove);
      window.removeEventListener("mouseup", handleWindowMouseUp);

      const currentEl = scrollRef.current;
      if (!currentEl) {
        setIsFreeMoving(false);
        return;
      }

      const totalDelta = upEvent.pageX - startX.current;

      // Se o usuário apenas clicou sem arrastar (menos de 6px), encerra sem glide
      if (Math.abs(totalDelta) < 6 || shouldReduceMotion) {
        setIsFreeMoving(false);
        return;
      }

      // Calcula largura real do card + gap para alinhamento matemático exato
      const firstCard = currentEl.querySelector<HTMLElement>(":scope > div");
      const cardStep = firstCard ? firstCard.offsetWidth + 16 : 296;

      // Card inicial no momento do clique
      const startCardIndex = Math.round(scrollLeftStart.current / cardStep);

      // Calcula a velocidade de arremesso dos últimos 120ms
      const now = performance.now();
      const recent = dragHistory.current.filter((p) => now - p.time <= 120);
      let releaseVelocity = 0;

      if (recent.length >= 2) {
        const first = recent[0];
        const last = recent[recent.length - 1];
        const dt = last.time - first.time;
        const dx = last.x - first.x;
        if (dt > 8) {
          releaseVelocity = dx / dt; // pixels por milissegundo (positivo se arrastou para direita, negativo se esquerda)
        }
      }

      // Decisão do Card Alvo:
      // Se arrastou para a esquerda (totalDelta < -35px) ou soltou com velocidade para esquerda (releaseVelocity < -0.18):
      // -> O destino é obrigatoriamente o PRÓXIMO card (targetIndex = startCardIndex + 1 ou +2 se arremessou rápido)
      // Se arrastou para a direita (totalDelta > 35px) ou soltou com velocidade para direita:
      // -> O destino é o card ANTERIOR
      let targetIndex = startCardIndex;
      const threshold = 35; // limiar de 35px para confirmar intenção de troca de card

      if (totalDelta < -threshold || releaseVelocity < -0.18) {
        const step = Math.abs(releaseVelocity) > 1.3 ? 2 : 1;
        targetIndex = startCardIndex + step;
      } else if (totalDelta > threshold || releaseVelocity > 0.18) {
        const step = Math.abs(releaseVelocity) > 1.3 ? 2 : 1;
        targetIndex = startCardIndex - step;
      } else {
        // Não atingiu o limiar de troca: acomoda de volta suavemente no card atual
        targetIndex = startCardIndex;
      }

      // Mantém dentro dos limites do catálogo
      targetIndex = Math.max(0, Math.min(group.skills.length - 1, targetIndex));

      const maxScroll = Math.max(0, currentEl.scrollWidth - currentEl.clientWidth);
      const targetScroll = Math.max(0, Math.min(maxScroll, targetIndex * cardStep));

      const startScroll = currentEl.scrollLeft;
      const actualDelta = targetScroll - startScroll;

      // Se já estiver perfeitamente posicionado no card alvo
      if (Math.abs(actualDelta) < 2) {
        setIsFreeMoving(false);
        return;
      }

      // Duração da animação calibrada para a distância (entre 360ms e 580ms)
      const duration = Math.min(580, Math.max(360, Math.abs(actualDelta) * 1.3));
      const startTime = performance.now();

      // Curva Ease-Out Quártica: transição aveludada que desliza diretamente para o centro do card alvo
      // e pousa exatamente onde o snap espera, eliminando qualquer salto ou teleporte!
      const animateGlide = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(1, elapsed / duration);

        // Curva Ease-Out Quart: 1 - (1 - progress)^4
        const ease = 1 - Math.pow(1 - progress, 4);

        if (scrollRef.current) {
          scrollRef.current.scrollLeft = startScroll + actualDelta * ease;
          checkScroll();
        }

        if (progress < 1) {
          momentumRaf.current = requestAnimationFrame(animateGlide);
        } else {
          stopMomentum();
          if (scrollRef.current) {
            scrollRef.current.scrollLeft = targetScroll; // Fixa a posição final exata
            checkScroll();
          }
          // Só agora reativa o snap, garantindo delta zero e zero teleporte
          setIsFreeMoving(false);
        }
      };

      momentumRaf.current = requestAnimationFrame(animateGlide);
    };

    window.addEventListener("mousemove", handleWindowMouseMove, { passive: false });
    window.addEventListener("mouseup", handleWindowMouseUp);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: rowIndex * 0.08, ease: "easeOut" }}
      className="space-y-3.5"
    >
      {/* Cabeçalho da Linha de Categoria */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 dark:border-white/[0.06] pb-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.08] flex items-center justify-center shrink-0">
            {icon}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-mono text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight">
                {group.category}
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/[0.08]">
                {group.skills.length} {group.skills.length === 1 ? "item" : "itens"}
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1 mt-0.5">
              {group.description}
            </p>
          </div>
        </div>

        {/* Controles de Navegação por Botão */}
        <div className="flex items-center gap-1.5 self-end sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => handleScrollButton("left")}
            disabled={!canScrollLeft}
            aria-label={`Rolar carrossel de ${group.category} para a esquerda`}
            className={`p-1.5 rounded-lg border text-slate-700 dark:text-slate-300 transition-all ${
              canScrollLeft
                ? "bg-white dark:bg-white/[0.05] border-slate-200 dark:border-white/[0.1] hover:bg-slate-100 dark:hover:bg-white/[0.1] hover:text-cyan-600 dark:hover:text-cyan-300 cursor-pointer shadow-sm active:scale-95"
                : "bg-slate-50 dark:bg-transparent border-slate-200/50 dark:border-white/[0.03] text-slate-300 dark:text-slate-700 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => handleScrollButton("right")}
            disabled={!canScrollRight}
            aria-label={`Rolar carrossel de ${group.category} para a direita`}
            className={`p-1.5 rounded-lg border text-slate-700 dark:text-slate-300 transition-all ${
              canScrollRight
                ? "bg-white dark:bg-white/[0.05] border-slate-200 dark:border-white/[0.1] hover:bg-slate-100 dark:hover:bg-white/[0.1] hover:text-cyan-600 dark:hover:text-cyan-300 cursor-pointer shadow-sm active:scale-95"
                : "bg-slate-50 dark:bg-transparent border-slate-200/50 dark:border-white/[0.03] text-slate-300 dark:text-slate-700 cursor-not-allowed"
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Faixa do Carrossel com Perspectiva 3D */}
      <div className="relative group/carousel [perspective:1400px]">
        {/* Máscara de gradiente suave à esquerda (exibida apenas a partir de telas sm para não ofuscar o card centralizado no mobile) */}
        <div
          aria-hidden="true"
          className={`hidden sm:block pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-50 dark:from-[#06080F] to-transparent z-20 transition-opacity duration-200 ${
            canScrollLeft ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Máscara de gradiente suave à direita (exibida apenas a partir de telas sm) */}
        <div
          aria-hidden="true"
          className={`hidden sm:block pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-50 dark:from-[#06080F] to-transparent z-20 transition-opacity duration-200 ${
            canScrollRight ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Trilha do Carrossel: Perfeitamente centralizada no mobile e alinhada à esquerda no desktop */}
        <div
          ref={scrollRef}
          role="region"
          aria-label={`Carrossel interativo de ${group.category}`}
          tabIndex={0}
          onMouseDown={handleMouseDown}
          className={`flex gap-4 overflow-x-auto py-3 select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500 rounded-xl [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-[calc((100%-280px)/2)] sm:px-1 ${
            isFreeMoving ? "cursor-grabbing snap-none" : "cursor-grab snap-x snap-mandatory"
          }`}
        >
          {group.skills.map((skill: SkillItem, cardIndex: number) => {
            const isProd = skill.status === "Produção";

            // Ângulo circular dinâmico que faz o card surgir de trás em órbita tridimensional
            const circularRotationY = (cardIndex - 2) * 5;

            return (
              <motion.div
                key={skill.name}
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        scale: 0.65,
                        z: -160,
                        rotateY: circularRotationY,
                        rotateX: 6,
                        y: 12,
                      }
                }
                whileInView={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : {
                        opacity: 1,
                        scale: 1,
                        z: 0,
                        rotateY: 0,
                        rotateX: 0,
                        y: 0,
                      }
                }
                viewport={{ once: true, margin: "-20px" }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.01 }
                    : {
                        duration: 0.65,
                        delay: cardIndex * 0.06 + rowIndex * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }
                }
                whileHover={
                  shouldReduceMotion || isFreeMoving
                    ? undefined
                    : {
                        y: -5,
                        scale: 1.025,
                        z: 20,
                        transition: { duration: 0.18, ease: "easeOut" },
                      }
                }
                className="w-[280px] shrink-0 snap-center sm:snap-start cinematic-surface p-4 rounded-xl border border-slate-200 dark:border-white/[0.08] hover:border-cyan-400 dark:hover:border-cyan-500/50 hover:shadow-lg transition-colors duration-200 flex flex-col justify-between gap-3 group/card transform-gpu [transform-style:preserve-3d]"
              >
                {/* Topo: Logo + Tag de Produção ou Estudo */}
                <div className="flex items-center justify-between gap-2 pointer-events-none">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.08] flex items-center justify-center p-1.5 text-cyan-600 dark:text-cyan-400 group-hover/card:scale-105 transition-transform shrink-0">
                    <TechLogo name={skill.name} className="w-5 h-5" />
                  </div>

                  {isProd ? (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-500/40">
                      <span
                        aria-hidden="true"
                        className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
                      />
                      Produção
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-50 dark:bg-purple-950/60 text-purple-900 dark:text-purple-200 border border-purple-300 dark:border-purple-500/40">
                      <span
                        aria-hidden="true"
                        className="w-1.5 h-1.5 rounded-full bg-purple-500"
                      />
                      Estudo
                    </span>
                  )}
                </div>

                {/* Centro: Nome da Ferramenta e Contexto Prático */}
                <div className="min-h-[72px] pointer-events-none">
                  <h4 className="font-mono text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover/card:text-cyan-600 dark:group-hover/card:text-cyan-300 transition-colors">
                    {skill.name}
                  </h4>
                  <p className="text-[11px] text-slate-700 dark:text-slate-300 line-clamp-3 leading-relaxed mt-1">
                    {skill.context}
                  </p>
                </div>

                {/* Rodapé: Nível de dominância com 5 marcadores */}
                <div className="flex items-center justify-between pt-2.5 border-t border-slate-200/80 dark:border-white/[0.06] pointer-events-none">
                  <span className="text-[10px] font-mono text-slate-700 dark:text-slate-300 font-medium">
                    Domínio ({skill.rating}/5)
                  </span>
                  <div
                    role="img"
                    aria-label={`Nível de dominância: ${skill.rating} de 5`}
                    className="flex items-center gap-1.5"
                  >
                    {[1, 2, 3, 4, 5].map((dot) => {
                      const isFilled = dot <= skill.rating;
                      return (
                        <span
                          key={dot}
                          aria-hidden="true"
                          className={`w-2 h-2 rounded-full transition-all ${
                            isFilled
                              ? isProd
                                ? "bg-cyan-600 dark:bg-cyan-400 shadow-[0_0_8px_rgba(0,242,254,0.7)]"
                                : "bg-purple-600 dark:bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.7)]"
                              : "bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700/60"
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export function StackSection() {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "languages-frameworks":
        return <Code2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />;
      case "automation-integrations":
        return <Bot className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case "data-messaging":
        return <Database className="w-4 h-4 text-sky-600 dark:text-sky-400" />;
      case "devops-observability":
        return <Server className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      default:
        return <Code2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />;
    }
  };

  return (
    <section
      id="competencias"
      className="py-16 md:py-24 border-t border-slate-200 dark:border-white/[0.06] relative bg-slate-50 dark:bg-[#06080F] overflow-hidden content-visibility-auto"
    >
      {/* Luzes atmosféricas de fundo harmonizadas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-32 w-[450px] sm:w-[600px] h-[350px] sm:h-[400px] bg-gradient-to-r from-cyan-500/10 via-indigo-600/5 to-transparent blur-[60px] sm:blur-[140px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 -right-32 w-[400px] sm:w-[550px] h-[300px] sm:h-[350px] bg-gradient-to-l from-purple-500/10 via-sky-500/5 to-transparent blur-[60px] sm:blur-[140px] rounded-full"
      />

      <Container size="xl" className="relative z-10 w-full">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <SystemBadge status="active" code="Competências & Stack" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Tecnologias, Práticas &amp;{" "}
              <span className="bg-gradient-to-r from-cyan-600 via-teal-600 to-purple-600 dark:from-cyan-300 dark:via-teal-300 dark:to-purple-300 bg-clip-text text-transparent">
                Nível de Domínio
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              Catálogo de ferramentas e rotinas distribuídas em 4 linhas de especialidade, com carrossel independente, suporte a arrasto suavizado e indicador de dominância prática (1 a 5).
            </p>

            {/* Legenda visual */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-700 dark:text-slate-300 font-medium">
                <span
                  aria-hidden="true"
                  className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"
                />
                <span>Produção Corporativa</span>
              </div>
              <span
                aria-hidden="true"
                className="text-slate-400 dark:text-slate-600 font-mono text-xs"
              >
                •
              </span>
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-700 dark:text-slate-300 font-medium">
                <span
                  aria-hidden="true"
                  className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.7)]"
                />
                <span>Estudo Ativo &amp; Exploração</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Linhas com Carrossel Independente e Deslizamento Fluido */}
        <div className="space-y-10">
          {skillsData.map((group, index) => (
            <CategoryCarousel
              key={group.id}
              group={group}
              icon={getCategoryIcon(group.id)}
              rowIndex={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
