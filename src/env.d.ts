/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GA_ID?: string;
  readonly PUBLIC_GOOGLE_SITE_VERIFICATION?: string;
}

interface Window {
  ppaTrack?: (event: string, properties?: Record<string, unknown>) => void;
  dataLayer: unknown[];
  gtag: (...args: unknown[]) => void;
}
