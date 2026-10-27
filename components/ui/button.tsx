import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan";
  size?: "sm" | "md" | "lg";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  icon,
  children,
  disabled,
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const leadingIcon = leftIcon || icon;

  const baseStyles =
    "inline-flex items-center justify-center font-medium font-mono text-xs rounded transition-all duration-200 select-none cursor-pointer relative overflow-hidden " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#06080f] " +
    "active:scale-[0.98] " +
    "disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "h-8 px-3 gap-1.5 text-[11px]",
    md: "h-9 px-4 gap-2 text-xs",
    lg: "h-11 px-5 gap-2.5 text-sm",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 text-[#06080f] font-bold border border-cyan-400/40 shadow-[0_0_18px_rgba(0,242,254,0.22)] hover:shadow-[0_0_26px_rgba(0,242,254,0.38)] hover:brightness-105",
    cyan:
      "bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold border border-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:brightness-105",
    secondary:
      "bg-white hover:bg-slate-100 active:bg-slate-200 text-slate-900 border border-slate-300 hover:border-slate-400 shadow-sm hover:shadow dark:bg-[#111726]/90 dark:hover:bg-[#172033] dark:active:bg-[#0d1320] dark:text-[#f8fafc] dark:border-[#232f48] dark:hover:border-cyan-500/50 dark:hover:shadow-[0_0_15px_rgba(0,242,254,0.12)]",
    outline:
      "bg-transparent hover:bg-slate-100 active:bg-slate-200 text-slate-800 hover:text-cyan-700 border border-slate-300 hover:border-cyan-500/60 shadow-sm dark:bg-transparent dark:hover:bg-cyan-500/10 dark:active:bg-cyan-500/20 dark:text-[#f8fafc] dark:hover:text-cyan-300 dark:border-[#232f48] dark:hover:border-cyan-400/60",
    ghost:
      "bg-transparent hover:bg-slate-100 active:bg-slate-200 text-slate-700 hover:text-slate-900 dark:bg-transparent dark:hover:bg-[#111726]/80 dark:active:bg-[#111726] dark:text-[#94a3b8] dark:hover:text-[#f8fafc]",
  };

  if (href) {
    const isExternal = target === "_blank" || href.startsWith("http");
    return (
      <a
        href={href}
        target={target}
        rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {leadingIcon && <span className="shrink-0" aria-hidden="true">{leadingIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="shrink-0" aria-hidden="true">{rightIcon}</span>}
      </a>
    );
  }

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      disabled={disabled}
      {...props}
    >
      {leadingIcon && <span className="shrink-0" aria-hidden="true">{leadingIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="shrink-0" aria-hidden="true">{rightIcon}</span>}
    </button>
  );
}
