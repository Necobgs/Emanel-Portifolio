import React from "react";
import { cn } from "@/lib/utils";

export interface TechnicalPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  badge?: React.ReactNode;
  withCorners?: boolean;
  withGrid?: boolean;
}

export function TechnicalPanel({
  className,
  title,
  badge,
  withCorners = true,
  withGrid = false,
  children,
  ...props
}: TechnicalPanelProps) {
  return (
    <div
      className={cn(
        "relative rounded border border-[#1b202e] bg-[#10131b] transition-colors duration-150",
        withCorners && "corner-cross",
        withGrid && "bg-tech-grid",
        className
      )}
      {...props}
    >
      {title && (
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#1b202e] bg-[#0d1017] text-xs font-mono text-[#8e95a5]">
          <span className="font-semibold text-[#f1f3f7] uppercase tracking-wider text-[11px]">
            {title}
          </span>
          {badge && <div>{badge}</div>}
        </div>
      )}
      <div className="p-4 sm:p-6">{children}</div>
    </div>
  );
}
