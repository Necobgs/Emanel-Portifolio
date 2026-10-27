import React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ActionLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "accent" | "subtle" | "mono";
  external?: boolean;
  icon?: React.ReactNode;
}

export function ActionLink({
  className,
  variant = "accent",
  external = false,
  icon,
  children,
  ...props
}: ActionLinkProps) {
  const baseStyles =
    "group inline-flex items-center gap-1.5 font-mono text-xs font-medium transition-colors duration-150 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0a0c10] rounded-sm";

  const variantStyles = {
    accent: "text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 underline-offset-4 hover:underline",
    subtle: "text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white",
    mono: "text-slate-800 dark:text-[#f8fafc] hover:text-emerald-700 dark:hover:text-emerald-400 border border-slate-300 dark:border-[#252c3f] hover:border-emerald-500 dark:hover:border-emerald-400 p-1 bg-white/80 dark:bg-transparent rounded",
  };

  const targetProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      className={cn(baseStyles, variantStyles[variant], className)}
      {...targetProps}
      {...props}
    >
      {icon && <span className="shrink-0" aria-hidden="true">{icon}</span>}
      <span>{children}</span>
      {external && (
        <ArrowUpRight
          aria-hidden="true"
          className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-current opacity-80"
        />
      )}
    </a>
  );
}
