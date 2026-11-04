import type { ComponentProps } from 'react';
import { BlurFade } from '@/components/ui/blur-fade';
import { cn } from '@/lib/utils';

type Props = ComponentProps<typeof BlurFade>;

/**
 * BlurFade yang langsung aktif saat masuk layar. Kelas `blur-fade` dipakai global.css
 * untuk menampilkan state akhir tanpa JS dan saat prefers-reduced-motion.
 */
export default function Reveal({ className, inView = true, ...props }: Props) {
  return <BlurFade inView={inView} className={cn('blur-fade', className)} {...props} />;
}
