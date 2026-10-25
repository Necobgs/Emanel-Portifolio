import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan";
  size?: "sm" | "md" | "lg";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  icon?: React.ReactNode;
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
  ...props
}: ButtonProps) {
  const leadingIcon = leftIcon || icon;

  const baseStyles =
    "inline-flex items-center justify-center font-medium font-mono text-xs rounded transition-all duration-200 select-none cursor-pointer relative overflow-hidden " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06080f] " +
    "active:scale-[0.98] " +
    "disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "h-8 px-3 gap-1.5 text-[11px]",
    md: "h-9 px-4 gap-2 text-xs",
    lg: "h-11 px-5 gap-2.5 text-sm",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 text-[#06080f] font-bold border border-cyan-300/40 shadow-[0_0_18px_rgba(0,242,254,0.22)] hover:shadow-[0_0_26px_rgba(0,242,254,0.38)] hover:brightness-110",
    cyan:
      "bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold border border-cyan-300/50 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:brightness-110",
    secondary:
      "bg-[#111726]/90 hover:bg-[#172033] active:bg-[#0d1320] text-[#f8fafc] border border-[#232f48] hover:border-cyan-500/50 shadow-sm hover:shadow-[0_0_15px_rgba(0,242,254,0.12)]",
    outline:
      "bg-transparent hover:bg-cyan-500/10 active:bg-cyan-500/20 text-[#f8fafc] hover:text-cyan-300 border border-[#232f48] hover:border-cyan-400/60 shadow-sm",
    ghost:
      "bg-transparent hover:bg-[#111726]/80 active:bg-[#111726] text-[#94a3b8] hover:text-[#f8fafc]",
  };

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      disabled={disabled}
      {...props}
    >
      {leadingIcon && <span className="shrink-0">{leadingIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
}
