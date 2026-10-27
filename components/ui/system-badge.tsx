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
      dot: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]",
      wrapper: "bg-emerald-50 border-emerald-300 text-emerald-950 dark:bg-emerald-950/60 dark:border-emerald-500/40 dark:text-emerald-200",
    },
    neutral: {
      dot: "bg-cyan-500 shadow-[0_0_8px_rgba(0,242,254,0.6)]",
      wrapper: "bg-cyan-50 border-cyan-300 text-cyan-950 dark:bg-cyan-950/60 dark:border-cyan-500/40 dark:text-cyan-200",
    },
    warning: {
      dot: "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]",
      wrapper: "bg-amber-50 border-amber-300 text-amber-950 dark:bg-amber-950/60 dark:border-amber-500/40 dark:text-amber-200",
    },
  };

  const current = statusStyles[status];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-2.5 py-1 rounded-full border font-mono text-[11px] select-none shadow-sm transition-colors",
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
      {code && <span className="text-slate-800 dark:text-slate-100 font-semibold">{code}</span>}
    </div>
  );
}
