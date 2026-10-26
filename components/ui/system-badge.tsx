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
      dot: "bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]",
      wrapper: "bg-emerald-950/40 border-emerald-500/30 text-emerald-300",
    },
    neutral: {
      dot: "bg-cyan-400 shadow-[0_0_8px_rgba(0,242,254,0.6)]",
      wrapper: "bg-cyan-950/40 border-cyan-500/30 text-cyan-300",
    },
    warning: {
      dot: "bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]",
      wrapper: "bg-amber-950/40 border-amber-500/30 text-amber-300",
    },
  };

  const current = statusStyles[status];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-2.5 py-1 rounded-full border font-mono text-[11px] select-none shadow-sm",
        current.wrapper,
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        {pulse && status === "active" && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
        )}
        <span className={cn("relative inline-flex rounded-full h-2 w-2", current.dot)} />
      </span>
      {code && <span className="text-slate-400 font-normal">{code}</span>}
    </div>
  );
}
