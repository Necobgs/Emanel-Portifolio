import React from "react";
import { cn } from "@/lib/utils";

export interface SystemBadgeProps {
  status?: "active" | "neutral" | "warning";
  code?: string;
  pulse?: boolean;
  className?: string;
}

export function SystemBadge({
  status = "active",
  code,
  pulse = true,
  className,
}: SystemBadgeProps) {
  const statusStyles = {
    active: {
      dot: "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.9)]",
      wrapper:
        "bg-emerald-500/10 border-emerald-400/40 text-emerald-950 dark:bg-emerald-500/15 dark:border-emerald-400/35 dark:text-emerald-200",
    },
    neutral: {
      dot: "bg-cyan-500 shadow-[0_0_10px_rgba(0,242,254,0.8)]",
      wrapper:
        "bg-cyan-500/10 border-cyan-400/40 text-cyan-950 dark:bg-cyan-500/15 dark:border-cyan-400/35 dark:text-cyan-200",
    },
    warning: {
      dot: "bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.9)]",
      wrapper:
        "bg-amber-500/10 border-amber-400/40 text-amber-950 dark:bg-amber-500/15 dark:border-amber-400/35 dark:text-amber-200",
    },
  };

  const current = statusStyles[status];

  return (
    <div
      className={cn(
        "liquid-glass-badge inline-flex items-center gap-2 px-2.5 py-1 rounded-full border font-mono text-[11px] select-none",
        current.wrapper,
        className
      )}
    >
      <span className="relative flex h-2 w-2" aria-hidden="true">
        {pulse && status === "active" && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
        )}
        <span className={cn("relative inline-flex rounded-full h-2 w-2", current.dot)} />
      </span>
      {code && <span className="font-semibold tracking-tight">{code}</span>}
    </div>
  );
}
