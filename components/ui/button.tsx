import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
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
    "inline-flex items-center justify-center font-medium font-mono text-xs rounded transition-all duration-150 select-none cursor-pointer " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0c10] " +
    "active:scale-[0.98] " +
    "disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "h-8 px-3 gap-1.5 text-[11px]",
    md: "h-9 px-4 gap-2 text-xs",
    lg: "h-11 px-5 gap-2.5 text-sm",
  };

  const variantStyles = {
    primary:
      "bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-[#0a0c10] font-semibold border border-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.2)] hover:shadow-[0_0_16px_rgba(16,185,129,0.35)]",
    secondary:
      "bg-[#161b26] hover:bg-[#1c2230] active:bg-[#121620] text-[#f1f3f7] border border-[#252c3f] hover:border-[#343d56]",
    outline:
      "bg-transparent hover:bg-[#161b26]/60 active:bg-[#161b26] text-[#f1f3f7] border border-[#252c3f] hover:border-emerald-500/50",
    ghost:
      "bg-transparent hover:bg-[#161b26]/50 active:bg-[#161b26] text-[#8e95a5] hover:text-[#f1f3f7]",
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
