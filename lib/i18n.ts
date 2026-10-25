/**
 * Arquitetura de Internacionalização (i18n) - Preparação para versão em Inglês (en-US).
 *
 * Este módulo centraliza os tipos, locales suportados e contratos de tradução,
 * permitindo introduzir uma versão em inglês (ex.: via rota /en ou middleware de cabeçalho Accept-Language)
 * sem a necessidade de reescrever componentes existentes.
 */

export const SUPPORTED_LOCALES = ["pt-BR", "en-US"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: SupportedLocale = "pt-BR";

export interface I18nConfig {
  defaultLocale: SupportedLocale;
  locales: readonly SupportedLocale[];
}

export const i18nConfig: I18nConfig = {
  defaultLocale: DEFAULT_LOCALE,
  locales: SUPPORTED_LOCALES,
};

/**
 * Contrato tipado de chaves para internacionalização futura.
 * Quando a versão em inglês for ativada, basta prover o dicionário correspondente em data/translations/en.ts.
 */
export interface TranslationDictionary {
  meta: {
    title: string;
    description: string;
  };
  navigation: {
    about: string;
    approach: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
    resume: string;
  };
  hero: {
    roleBadge: string;
    location: string;
    headline: string;
    description: string;
    ctaProjects: string;
    ctaContact: string;
  };
}
