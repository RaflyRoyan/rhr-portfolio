import { useEffect, useState } from 'react';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';

type Theme = 'light' | 'dark';

const current = (): Theme => (document.documentElement.classList.contains('dark') ? 'dark' : 'light');

/**
 * Toggle tema Magic UI dalam mode controlled. Pilihan disimpan di sessionStorage (`rhr-theme`)
 * supaya kunjungan baru tetap mulai terang; kelas `.dark` diterapkan ulang oleh BaseLayout
 * setelah navigasi ClientRouter.
 */
export default function ThemeToggler({ label }: { label: string }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    setTheme(current());
    const observer = new MutationObserver(() => setTheme(current()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const onThemeChange = (next: Theme) => {
    setTheme(next);
    try {
      sessionStorage.setItem('rhr-theme', next);
    } catch {}
  };

  return (
    <AnimatedThemeToggler
      theme={theme}
      onThemeChange={onThemeChange}
      aria-label={label}
      title={label}
      className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-ink [&_svg]:size-[18px]"
    />
  );
}
