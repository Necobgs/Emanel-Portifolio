/**
 * Utilitário de concatenação condicional de classes CSS
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}

/**
 * Formatação de data em português
 */
export function formatDate(dateString: string): string {
  return dateString;
}
