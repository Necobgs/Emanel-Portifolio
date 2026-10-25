/**
 * Utilitário de configuração e resolução de URLs para SEO.
 * Permite configurar o domínio público via variável de ambiente NEXT_PUBLIC_SITE_URL
 * sem injetar URLs fictícias caso a variável não esteja preenchida.
 */

const FALLBACK_SITE_URL = "https://emanuelborges.dev";

/**
 * Retorna a URL base do site sem barra final.
 * Prioridade:
 * 1. NEXT_PUBLIC_SITE_URL (definido no .env ou host de deploy)
 * 2. VERCEL_URL (se implantado na infraestrutura Vercel)
 * 3. FALLBACK_SITE_URL (domínio oficial: https://emanuelborges.dev)
 */
export function getSiteUrl(): string {
  const customUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (customUrl) {
    return customUrl.replace(/\/+$/, "");
  }

  if (process.env.VERCEL_URL) {
    const protocol = process.env.VERCEL_ENV === "production" ? "https" : "https";
    return `${protocol}://${process.env.VERCEL_URL.replace(/\/+$/, "")}`;
  }

  return FALLBACK_SITE_URL;
}

/**
 * Converte um caminho relativo em URL canônica absoluta.
 * Exemplo: getAbsoluteUrl("/projects/plataforma-orquestracao")
 */
export function getAbsoluteUrl(path: string = "/"): string {
  const baseUrl = getSiteUrl();
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}
