/// <reference types="astro/client" />

interface Window {
  ppaTrack?: (event: string, properties?: Record<string, unknown>) => void;
  dataLayer: unknown[];
  gtag: (...args: unknown[]) => void;
}
