import { useEffect, useState } from 'react';

/**
 * prefers-reduced-motion yang aman untuk SSR: render pertama selalu `false` (sama dengan HTML server),
 * nilai asli dibaca setelah mount. `useReducedMotion` dari motion membaca matchMedia saat render pertama
 * sehingga memicu hydration mismatch.
 */
export function useReducedMotionSafe(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return reduced;
}
