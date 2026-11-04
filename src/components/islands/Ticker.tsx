import { useEffect, useState } from 'react';
import { NumberTicker } from '@/components/ui/number-ticker';

/**
 * NumberTicker yang SSR-nya sudah menampilkan nilai akhir (tanpa JS tetap terbaca).
 * Animasi dari 0 hanya dipasang setelah hidrasi dan bila reduced motion tidak aktif.
 */
export default function Ticker({ value, className }: { value: number; className?: string }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(!window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  if (!animate) return <span className={className}>{value}</span>;
  return <NumberTicker value={value} className={className} />;
}
