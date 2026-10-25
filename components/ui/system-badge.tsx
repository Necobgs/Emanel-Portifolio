import React from "react";
import { cn } from "@/lib/utils";

export interface SystemBadgeProps {
  status?: "active" | "neutral" | "warning";
  label: string;
  code?: string;
  pulse?: boolean;
  className?: string;
}

export function SystemBadge({
  status = "active",
  label,
  code,
  pulse = true,
  className,
}: SystemBadgeProps) {
  const statusStyles = {
    active: {
      dot: "bg-emerald-400 shadow-[0_0_6px_#34d399]",
      wrapper: "bg-[#101915] border-[#1d3326] text-emerald-300",
    },
    neutral: {
      dot: "bg-slate-400",
      wrapper: "bg-[#11141c] border-[#22283a] text-slate-300",
    },
    warning: {
      dot: "bg-amber-400 shadow-[0_0_6px_#fbbf24]",
      wrapper: "bg-[#1c1810] border-[#382d18] text-amber-300",
    },
  };

  const current = statusStyles[status];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-2.5 py-1 rounded border font-mono text-[11px] select-none",
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
      <span className="font-medium tracking-tight">{label}</span>
      {code && <span className="text-[#8e95a5] font-normal">[{code}]</span>}
    </div>
  );
}
