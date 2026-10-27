"use client";

import React, { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "motion/react";

export interface ThemeToggleProps {
  className?: string;
}

function subscribe(callback: () => void) {
  const observer = new MutationObserver(() => {
    callback();
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getSnapshot(): boolean {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot(): boolean {
  return false;
}

const emptySubscribe = () => () => {};

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const isDark = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const toggleTheme = () => {
    const nextIsDark = !isDark;

    if (nextIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!isMounted) {
    return (
      <button
        type="button"
        aria-label="Carregando seletor de tema"
        className={`w-9 h-9 rounded-lg border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0B0F19] flex items-center justify-center text-slate-400 opacity-60 cursor-pointer ${className}`}
      >
        <span className="w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700 animate-pulse" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
      title={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
      className={`relative w-9 h-9 rounded-lg border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0B0F19] text-slate-700 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300 hover:border-slate-300 dark:hover:border-cyan-500/40 shadow-sm transition-all duration-200 flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${className}`}
    >
      <motion.div
        key={isDark ? "dark" : "light"}
        initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.6, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400" />
        ) : (
          <Moon className="w-4 h-4 text-cyan-600" />
        )}
      </motion.div>
    </button>
  );
}
