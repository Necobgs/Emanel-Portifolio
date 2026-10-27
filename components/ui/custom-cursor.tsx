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

      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, label, summary, [data-cursor="interactive"]'
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

    // Loop fluido via requestAnimationFrame com interpolação LERP para o anel seguidor
    const loop = () => {
      if (isVisible) {
        // Interpolação suave do anel externo
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;

        if (ringRef.current) {
          const scale = isClicking ? 0.75 : isHovering ? 1.55 : 1;
          ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${scale})`;
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
      {/* Anel seguidor com atenuação suave */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-500/50 dark:border-cyan-400/60 bg-cyan-500/10 dark:bg-cyan-400/10 backdrop-blur-[1px] shadow-[0_0_15px_rgba(2,132,199,0.2)] dark:shadow-[0_0_18px_rgba(0,242,254,0.3)] opacity-0 transition-opacity duration-200 will-change-transform"
        style={{
          transitionProperty: "opacity, border-color, background-color",
          transitionDuration: "180ms",
        }}
      />

      {/* Ponto central instantâneo de alta precisão */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-300 shadow-[0_0_8px_rgba(2,132,199,0.8)] dark:shadow-[0_0_10px_rgba(0,242,254,0.9)] opacity-0 transition-opacity duration-150 will-change-transform"
      />
    </div>
  );
}
