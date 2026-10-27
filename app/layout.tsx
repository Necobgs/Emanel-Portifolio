import type { Metadata } from "next";
import "./globals.css";
import { getSiteUrl } from "@/lib/site";
import { profileData } from "@/data/profile";
import { RootJsonLd } from "@/components/seo/json-ld";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Emanuel Borges | Engenheiro Backend & Automação RPA",
    template: "%s | Emanuel Borges de Oliveira",
  },
  description:
    "Engenheiro de Software em Criciúma/SC. Backend com NestJS e Python, mensageria com RabbitMQ e automação RPA com Playwright. Veja projetos e currículo.",
  authors: [{ name: profileData.name, url: profileData.github }],
  creator: profileData.name,
  publisher: profileData.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Emanuel Borges | Engenheiro Backend & Automação RPA",
    description:
      "Engenheiro de Software em Criciúma/SC. Backend com NestJS e Python, mensageria com RabbitMQ e automação RPA com Playwright.",
    url: "/",
    siteName: "Emanuel Borges de Oliveira — Portfólio de Engenharia",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emanuel Borges | Engenheiro Backend & Automação RPA",
    description:
      "Engenheiro de Software em Criciúma/SC. Backend com NestJS e Python, mensageria com RabbitMQ e automação RPA com Playwright.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="h-full antialiased scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <RootJsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-[#06080F] dark:text-[#F8FAFC] font-sans selection:bg-cyan-500/25 selection:text-cyan-900 dark:selection:text-cyan-200 transition-colors duration-200">
        <CustomCursor />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
