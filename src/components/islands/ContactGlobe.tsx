import { useEffect, useMemo, useState } from 'react';
import { useReducedMotionSafe } from '@/lib/use-reduced-motion-safe';
import type { COBEOptions } from 'cobe';
import { Globe } from '@/components/ui/globe';

const SURABAYA: [number, number] = [-7.2575, 112.7521];

const isDark = () => document.documentElement.classList.contains('dark');

/**
 * Globe Magic UI dengan penanda Surabaya; warna mengikuti tema (.dark).
 * Globe registry selalu berputar, jadi dengan reduced motion diganti penanda statis.
 */
export default function ContactGlobe({ label }: { label: string }) {
  const reduced = useReducedMotionSafe();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(isDark());
    const observer = new MutationObserver(() => setDark(isDark()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const config = useMemo<COBEOptions>(
    () => ({
      width: 800,
      height: 800,
      onRender: () => {},
      devicePixelRatio: 2,
      phi: 4.6,
      theta: 0.1,
      dark: dark ? 1 : 0,
      diffuse: 0.4,
      mapSamples: 16000,
      mapBrightness: dark ? 3 : 1.2,
      baseColor: dark ? [0.25, 0.25, 0.3] : [1, 1, 1],
      markerColor: [109 / 255, 94 / 255, 252 / 255],
      glowColor: dark ? [0.2, 0.2, 0.3] : [1, 1, 1],
      markers: [{ location: SURABAYA, size: 0.1 }],
    }),
    [dark],
  );

  if (reduced) {
    return (
      <div className="grid size-full place-items-center" role="img" aria-label={label}>
        <span className="relative grid size-3/4 place-items-center rounded-full border border-line bg-[radial-gradient(circle_at_35%_35%,var(--surface),var(--surface-2))]">
          <span className="size-3 rounded-full bg-accent shadow-[0_0_0_6px_color-mix(in_oklab,var(--accent)_25%,transparent)]" />
        </span>
      </div>
    );
  }

  return (
    <div className="relative size-full" role="img" aria-label={label}>
      <Globe config={config} className="max-w-none" />
    </div>
  );
}
