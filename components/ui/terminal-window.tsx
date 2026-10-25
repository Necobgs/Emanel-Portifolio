"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TerminalWindowProps {
  title?: string;
  initialCommand?: string;
  lines?: {
    type: "command" | "output" | "success" | "warning" | "error" | "info";
    text: string;
  }[];
  className?: string;
}

export function TerminalWindow({
  title = "bash — worker-node-01@production",
  lines = [],
  className,
}: TerminalWindowProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = lines.map((l) => l.text).join("\n");
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lineStyles = {
    command: "text-emerald-400 font-semibold",
    output: "text-slate-300",
    success: "text-emerald-300 font-medium",
    warning: "text-amber-300",
    error: "text-rose-400",
    info: "text-cyan-300",
  };

  return (
    <div
      className={cn(
        "rounded-xl border border-[#22293C] bg-[#0C0F17]/95 shadow-2xl backdrop-blur-md overflow-hidden font-mono text-xs",
        className
      )}
    >
      {/* Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#121622] border-b border-[#22293C] select-none">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="ml-2 text-slate-400 flex items-center gap-1.5 text-[11px]">
            <Terminal className="w-3.5 h-3.5 text-slate-500" />
            {title}
          </span>
        </div>
        <button
          onClick={handleCopy}
          aria-label="Copiar logs do terminal"
          className="text-slate-400 hover:text-white transition-colors p-1 rounded hover:bg-white/5 cursor-pointer"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-400" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {/* Terminal Content */}
      <div className="p-4 space-y-1.5 overflow-x-auto max-h-[360px] leading-relaxed">
        {lines.map((line, idx) => (
          <div key={idx} className={cn("flex items-start gap-2", lineStyles[line.type])}>
            {line.type === "command" && (
              <span className="text-slate-500 select-none">$</span>
            )}
            <span className="break-all">{line.text}</span>
          </div>
        ))}
        <div className="flex items-center gap-2 text-emerald-400">
          <span className="text-slate-500 select-none">$</span>
          <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
