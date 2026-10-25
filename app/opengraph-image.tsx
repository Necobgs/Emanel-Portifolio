import { ImageResponse } from "next/og";

export const alt =
  "Emanuel Borges de Oliveira — Engenharia de Software Fullstack & Automação RPA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          backgroundColor: "#0A0C10",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(16, 185, 129, 0.15) 0%, rgba(10, 12, 16, 0.95) 55%)",
          color: "#F8FAFC",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        {/* Top Header Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              padding: "8px 18px",
              borderRadius: 6,
              border: "1px solid rgba(16, 185, 129, 0.4)",
              backgroundColor: "#10131B",
              color: "#10B981",
              fontSize: 18,
              fontWeight: 700,
              fontFamily: "monospace",
            }}
          >
            EMANUEL BORGES DE OLIVEIRA
          </div>
          <div
            style={{
              fontSize: 16,
              color: "#8E95A5",
              fontFamily: "monospace",
            }}
          >
            BACKEND & RPA ENGINEER
          </div>
        </div>

        {/* Headline & Description */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 50,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              color: "#F1F3F7",
              maxWidth: 950,
            }}
          >
            Construindo software que conecta automação, backend e negócio.
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#8E95A5",
              lineHeight: 1.45,
              maxWidth: 880,
            }}
          >
            Engenharia de Backend de Alta Resiliência, Filas com RabbitMQ, Microsserviços e Automação de Processos.
          </div>
        </div>

        {/* Footer Tech Stack & Location */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #1B202E",
            paddingTop: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 18,
              color: "#10B981",
              fontFamily: "monospace",
            }}
          >
            <span>Python</span>
            <span style={{ color: "#252C3F" }}>•</span>
            <span>Golang</span>
            <span style={{ color: "#252C3F" }}>•</span>
            <span>NestJS</span>
            <span style={{ color: "#252C3F" }}>•</span>
            <span>RabbitMQ</span>
            <span style={{ color: "#252C3F" }}>•</span>
            <span>Redis</span>
            <span style={{ color: "#252C3F" }}>•</span>
            <span>PostgreSQL</span>
          </div>
          <div
            style={{
              fontSize: 16,
              color: "#525866",
              fontFamily: "monospace",
            }}
          >
            Criciúma, SC • Brasil
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
