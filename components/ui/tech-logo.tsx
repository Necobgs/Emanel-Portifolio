import React from "react";

export interface TechLogoProps {
  name: string;
  className?: string;
}

export function TechLogo({ name, className = "w-5 h-5" }: TechLogoProps) {
  const normalized = name.toLowerCase().trim();

  // TypeScript
  if (normalized.includes("typescript")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" focusable="false">
        <rect width="22" height="22" x="1" y="1" rx="4" fill="#3178C6" />
        <path d="M12.5 13.5v7h-2.5v-7H7V11h8.5v2.5h-3zM16.5 17.5c.7.5 1.5.8 2.3.8.8 0 1.2-.3 1.2-.8 0-.5-.4-.7-1.4-1.1-1.6-.6-2.6-1.3-2.6-2.7 0-1.6 1.3-2.7 3.3-2.7 1.1 0 2 .3 2.7.7l-.7 2c-.6-.4-1.3-.6-2-.6-.7 0-1.1.3-1.1.7 0 .5.4.7 1.5 1.1 1.7.6 2.6 1.4 2.6 2.8 0 1.8-1.4 2.8-3.5 2.8-1.3 0-2.4-.4-3.2-1l.8-2.1z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Node.js
  if (normalized.includes("node")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" focusable="false">
        <path d="M12 2L2 7.8v11.4L12 25l10-5.8V7.8L12 2z" fill="#5FA04E" />
        <path d="M12 4.5l7.5 4.3v8.6L12 21.7 4.5 17.4V8.8L12 4.5z" fill="#333333" />
        <path d="M12 7.5a4.5 4.5 0 0 0-4.5 4.5c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5S14.5 7.5 12 7.5z" fill="#5FA04E" />
      </svg>
    );
  }

  // NestJS
  if (normalized.includes("nestjs")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" focusable="false">
        <path d="M21.5 8.2c-.4-1.2-1.3-2.1-2.4-2.6l-5.6-2.8a3 3 0 0 0-2.7 0L4.9 5.6C3.8 6.1 3 7 2.5 8.2a7.6 7.6 0 0 0 .8 7.6l4.6 5.8a3 3 0 0 0 2.3 1.1h3.6a3 3 0 0 0 2.3-1.1l4.6-5.8a7.6 7.6 0 0 0 .8-7.6z" fill="#EA284E" />
        <path d="M12 6.5l4 2.3v4.6L12 15.7l-4-2.3V8.8l4-2.3z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Python (e Automações em Python)
  if (normalized.includes("python")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" focusable="false">
        <path d="M11.9 2c-3.1 0-5 .6-5 2.6v2.2h5.1v.7H4.5c-2 0-3.5 1.5-3.5 3.5 0 2 1.3 3.5 3.5 3.5h1.5v-2.1c0-1.7 1.5-3.1 3.2-3.1h5.1c1.4 0 2.6-1.1 2.6-2.5V4.6c0-2-2-2.6-5-2.6zm-1.8 1.4a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z" fill="#3776AB" />
        <path d="M12.1 22c3.1 0 5-.6 5-2.6v-2.2H12v-.7h7.5c2 0 3.5-1.5 3.5-3.5 0-2-1.3-3.5-3.5-3.5H18v2.1c0 1.7-1.5 3.1-3.2 3.1H9.7c-1.4 0-2.6 1.1-2.6 2.5v4.2c0 2 2 2.6 5 2.6zm1.8-1.4a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z" fill="#FFD43B" />
      </svg>
    );
  }

  // APIs REST
  if (normalized.includes("rest") || normalized.includes("api")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
        <rect width="20" height="14" x="2" y="5" rx="3" className="stroke-cyan-500 fill-cyan-500/10" />
        <path d="M6 12h2.5M10.5 12h3M15.5 12H18" className="stroke-cyan-400" />
        <circle cx="6" cy="12" r="1" fill="currentColor" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        <circle cx="18" cy="12" r="1" fill="currentColor" />
      </svg>
    );
  }

  // Playwright
  if (normalized.includes("playwright")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" focusable="false">
        <path d="M17.5 4a4.5 4.5 0 0 0-4.4 3.6 4.5 4.5 0 1 0-6.6 6.1l5.5 5.5a1.5 1.5 0 0 0 2.1 0l7.3-7.3A4.5 4.5 0 0 0 17.5 4z" fill="#45BA4B" />
        <circle cx="8.5" cy="11.5" r="1.5" fill="#FFFFFF" />
        <circle cx="17.5" cy="8.5" r="1.5" fill="#FFFFFF" />
        <path d="M14.5 17.5l-3-3" stroke="#2E7D32" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // Selenium
  if (normalized.includes("selenium")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" focusable="false">
        <rect width="20" height="20" x="2" y="2" rx="4" fill="#00B400" />
        <text x="5" y="16" fill="#FFFFFF" fontFamily="ui-monospace, monospace" fontSize="12" fontWeight="bold">
          Se
        </text>
      </svg>
    );
  }

  // Integrações HTTP
  if (normalized.includes("http")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
        <path d="M4 17l6-6-6-6" className="stroke-emerald-400" />
        <path d="M12 19h8" className="stroke-emerald-500" />
        <path d="M14 5l6 6-6 6" className="stroke-cyan-400" />
      </svg>
    );
  }

  // PostgreSQL
  if (normalized.includes("postgres")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" focusable="false">
        <path d="M12 2C6.5 2 3.5 5.2 3.5 9.5c0 5 4.2 9.5 8.5 9.5 2.1 0 4.1-.9 5.5-2.4l-1.8-1.5c-1 1.1-2.4 1.7-3.7 1.7-2.8 0-5.8-3.1-6.1-6.8h13.9C19.9 5.3 16.9 2 12 2zm-6 6c.5-2.6 2.3-4.2 6-4.2s5.4 1.6 5.8 4.2H6z" fill="#336791" />
        <circle cx="12" cy="12" r="2" fill="#336791" />
      </svg>
    );
  }

  // MySQL
  if (normalized.includes("mysql")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" focusable="false">
        <rect width="20" height="20" x="2" y="2" rx="4" fill="#00758F" />
        <path d="M6 16V8l3 4 3-4v8M15 16V8h3a2 2 0 0 1 0 4h-3" stroke="#F29111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // SQL & Modelagem
  if (normalized.includes("sql")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
        <ellipse cx="12" cy="5" rx="9" ry="3" className="stroke-sky-500 fill-sky-500/10" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" className="stroke-sky-400" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" className="stroke-sky-500" />
      </svg>
    );
  }

  // RabbitMQ
  if (normalized.includes("rabbitmq")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" focusable="false">
        <rect width="20" height="20" x="2" y="2" rx="4" fill="#FF6600" />
        <path d="M12 6c-2 0-3 1.5-3 3.5 0 1.2.6 2.3 1.5 2.9-.8.4-1.5 1.1-1.5 2.1 0 1.4 1.3 2.5 3 2.5s3-1.1 3-2.5c0-1-.7-1.7-1.5-2.1.9-.6 1.5-1.7 1.5-2.9C15 7.5 14 6 12 6zm-1 2.5a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6zm2 0a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Redis
  if (normalized.includes("redis")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" focusable="false">
        <path d="M12 2l9 4.5v11L12 22 3 17.5v-11L12 2z" fill="#DC382D" />
        <path d="M12 5l6 3v6l-6 3-6-3V8l6-3z" fill="#A82820" />
        <circle cx="12" cy="11" r="2" fill="#FFFFFF" />
      </svg>
    );
  }

  // Docker
  if (normalized.includes("docker")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" focusable="false">
        <path d="M3 13.5h18c-.5 3.5-3.5 6.5-8 6.5-4 0-7-2.5-8-6.5zm19-2.5c-.8 0-1.7.3-2.2.8-.8-.6-1.8-.8-2.8-.8h-1V9h2V7h-2V5h-3v6H2v2h20z" fill="#2496ED" />
        <rect x="6" y="8" width="2" height="2" fill="#2496ED" />
        <rect x="9" y="8" width="2" height="2" fill="#2496ED" />
        <rect x="9" y="5" width="2" height="2" fill="#2496ED" />
      </svg>
    );
  }

  // GitLab CI/CD
  if (normalized.includes("gitlab")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" focusable="false">
        <path d="M12 21.5l3.8-11.7H8.2L12 21.5z" fill="#E24329" />
        <path d="M12 21.5l3.8-11.7h5.4L12 21.5z" fill="#FC6D26" />
        <path d="M21.2 9.8l-1.3-4.1a.7.7 0 0 0-1.3 0l-2.8 8.6h5.4z" fill="#FCA326" />
        <path d="M12 21.5L8.2 9.8H2.8L12 21.5z" fill="#FC6D26" />
        <path d="M2.8 9.8l1.3-4.1a.7.7 0 0 1 1.3 0l2.8 8.6H2.8z" fill="#FCA326" />
      </svg>
    );
  }

  // HashiCorp Vault
  if (normalized.includes("vault")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" focusable="false">
        <rect width="20" height="20" x="2" y="2" rx="4" fill="#000000" />
        <path d="M12 6l5 3v6l-5 3-5-3V9l5-3z" fill="#FFE082" />
        <circle cx="12" cy="12" r="2" fill="#000000" />
      </svg>
    );
  }

  // Observabilidade / Logs
  if (normalized.includes("log")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" className="stroke-teal-500 fill-teal-500/10" />
        <path d="M14 2v6h6" className="stroke-teal-400" />
        <path d="M8 13h8M8 17h5" className="stroke-teal-400" />
      </svg>
    );
  }

  // Monitoramento
  if (normalized.includes("monitoramento")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" className="stroke-emerald-400" />
      </svg>
    );
  }

  // Dashboards
  if (normalized.includes("dashboard")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
        <rect width="7" height="9" x="3" y="3" rx="1" className="stroke-sky-400" />
        <rect width="7" height="5" x="14" y="3" rx="1" className="stroke-sky-500" />
        <rect width="7" height="9" x="14" y="12" rx="1" className="stroke-sky-400" />
        <rect width="7" height="5" x="3" y="16" rx="1" className="stroke-sky-500" />
      </svg>
    );
  }

  // Alertas
  if (normalized.includes("alerta")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" className="stroke-amber-400 fill-amber-400/10" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" className="stroke-amber-500" />
      </svg>
    );
  }

  // C# / .NET
  if (normalized.includes("c#") || normalized.includes(".net")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" focusable="false">
        <rect width="20" height="20" x="2" y="2" rx="4" fill="#512BD4" />
        <text x="5" y="16" fill="#FFFFFF" fontFamily="ui-monospace, monospace" fontSize="11" fontWeight="bold">
          C#
        </text>
      </svg>
    );
  }

  // WPF (Windows Desktop)
  if (normalized.includes("wpf") || normalized.includes("desktop")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" focusable="false">
        <path d="M3 5.5l7-1v7H3v-6zm0 7h7v7l-7-1v-6zm8-8l10-1.5v8.5H11V4.5zm0 8.5h10v8.5l-10-1.5V13z" fill="#0078D7" />
      </svg>
    );
  }

  // Golang
  if (normalized.includes("golang") || normalized.includes("go")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" focusable="false">
        <path d="M2 12c0-3.3 2.7-6 6-6 2.3 0 4.2 1.3 5.2 3.1h-2.5c-.7-.9-1.6-1.5-2.7-1.5-2.2 0-4 1.8-4 4s1.8 4 4 4c1.1 0 2-.6 2.7-1.5H8v-2.2h7.2c.1.6.2 1.1.2 1.7 0 3.3-2.7 6-6 6-3.3 0-6-2.7-6-6zM17 10h4v2h-4v-2zm0 4h5v2h-5v-2z" fill="#00ADD8" />
      </svg>
    );
  }

  // Fallback genérico de tecnologia
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
      <polyline points="16 18 22 12 16 6" className="stroke-cyan-500" />
      <polyline points="8 6 2 12 8 18" className="stroke-cyan-500" />
    </svg>
  );
}
