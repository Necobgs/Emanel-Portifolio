import React from "react";
import { cn } from "@/lib/utils";

export interface TelemetryBadgeProps {
  status?: "online" | "warning" | "info" | "idle";
  label: string;
  className?: string;
  value?: string;
}

export function TelemetryBadge({
  status = "online",
  label,
  value,
  className,
}: TelemetryBadgeProps) {
  const statusColors = {
    online: {
      dot: "bg-emerald-400 shadow-[0_0_8px_#34d399]",
      bg: "bg-emerald-950/40 border-emerald-800/40 text-emerald-300",
    },
    warning: {
      dot: "bg-amber-400 shadow-[0_0_8px_#fbbf24]",
      bg: "bg-amber-950/40 border-amber-800/40 text-amber-300",
    },
    info: {
      dot: "bg-cyan-400 shadow-[0_0_8px_#22d3ee]",
      bg: "bg-cyan-950/40 border-cyan-800/40 text-cyan-300",
    },
    idle: {
      dot: "bg-slate-400",
      bg: "bg-slate-900/40 border-slate-700/40 text-slate-300",
    },
  };

  const current = statusColors[status];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono tracking-tight",
        current.bg,
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        {status === "online" && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        )}
        <span className={cn("relative inline-flex rounded-full h-2 w-2", current.dot)} />
      </span>
      <span>{label}</span>
      {value && <span className="font-semibold text-white/90">[{value}]</span>}
    </div>
  );
}
