"use client";

import React, { useEffect, useRef, useSyncExternalStore } from "react";

function subscribeFinePointer(callback: () => void) {
  const mqlFine = window.matchMedia("(pointer: fine)");
  const mqlMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  mqlFine.addEventListener("change", callback);
  mqlMotion.addEventListener("change", callback);

  return () => {
    mqlFine.removeEventListener("change", callback);
    mqlMotion.removeEventListener("change", callback);
  };
}

function getFinePointerSnapshot(): boolean {
  return (
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function getServerSnapshot(): boolean {
  return false;
}

export function CustomCursor() {
  const isFinePointer = useSyncExternalStore(
    subscribeFinePointer,
    getFinePointerSnapshot,
    getServerSnapshot
  );

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isFinePointer) return;

    document.documentElement.classList.add("custom-cursor-enabled");

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let ringScale = 1;
    let isVisible = false;
    let isHovering = false;
    let isClicking = false;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        ringX = mouseX;
        ringY = mouseY;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInput = target.closest("input, textarea, [contenteditable='true']");
      if (isInput) {
        if (dotRef.current) dotRef.current.style.opacity = "0";
        if (ringRef.current) ringRef.current.style.opacity = "0";
        return;
      } else if (isVisible) {
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }

      const interactive = target.closest(
        'a, button, [role="button"], label, summary, [data-cursor="interactive"]'
      );
      isHovering = !!interactive;
    };

    const onMouseDown = () => {
      isClicking = true;
    };

    const onMouseUp = () => {
      isClicking = false;
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const onMouseEnter = () => {
      isVisible = true;
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    // Loop de renderização com acompanhamento dinâmico, ágil e sem latência
    const loop = () => {
      if (isVisible) {
        // Interpolação ágil do anel externo (acompanha de perto sem arrasto lento)
        const followSpeed = 0.45;
        ringX += (mouseX - ringX) * followSpeed;
        ringY += (mouseY - ringY) * followSpeed;

        const targetScale = isClicking ? 0.75 : isHovering ? 1.4 : 1;
        ringScale += (targetScale - ringScale) * 0.22;

        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${ringX.toFixed(2)}px, ${ringY.toFixed(2)}px, 0) translate(-50%, -50%) scale(${ringScale.toFixed(3)})`;
        }
      }
      animId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    animId = requestAnimationFrame(loop);

    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isFinePointer]);

  if (!isFinePointer) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none"
    >
      {/* Anel seguidor técnico ultra nítido - 100% transparente, sem blur e com resposta imediata */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-500/40 dark:border-cyan-400/50 bg-transparent opacity-0 transition-opacity duration-200 will-change-transform"
        style={{
          transitionProperty: "opacity, border-color",
          transitionDuration: "180ms",
        }}
      />

      {/* Ponto central instantâneo de alta precisão */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-300 shadow-[0_0_4px_rgba(0,242,254,0.5)] opacity-0 transition-opacity duration-150 will-change-transform"
      />
    </div>
  );
}
