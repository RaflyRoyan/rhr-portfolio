type Cleanup = void | (() => void);

/**
 * Jalankan `setup` di setiap halaman (termasuk setelah navigasi ClientRouter).
 * Fungsi cleanup yang dikembalikan dipanggil sebelum halaman diganti.
 */
export function onPageLoad(setup: () => Cleanup) {
  let cleanup: Cleanup;
  document.addEventListener('astro:page-load', () => {
    cleanup = setup();
  });
  document.addEventListener('astro:before-swap', () => {
    if (typeof cleanup === 'function') cleanup();
    cleanup = undefined;
  });
}

export const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
