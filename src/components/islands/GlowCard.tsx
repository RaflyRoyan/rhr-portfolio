import type { ReactNode } from 'react';
import { MagicCard } from '@/components/ui/magic-card';
import { cn } from '@/lib/utils';

/** MagicCard dengan warna tema proyek (gradien aksen di border, spotlight lembut saat hover). */
export default function GlowCard({ children, className }: { children?: ReactNode; className?: string }) {
  return (
    <MagicCard
      gradientSize={260}
      gradientFrom="var(--accent-from)"
      gradientTo="var(--accent-to)"
      gradientColor="color-mix(in oklab, var(--accent) 12%, transparent)"
      gradientOpacity={1}
      className={cn('rounded-2xl', className)}
    >
      {children}
    </MagicCard>
  );
}
