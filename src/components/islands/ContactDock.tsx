import { Copy, FolderGit2, Mail, MessageCircle } from 'lucide-react';
import { useReducedMotionSafe } from '@/lib/use-reduced-motion-safe';
import { Dock, DockIcon } from '@/components/ui/dock';

const ICONS = { mail: Mail, whatsapp: MessageCircle, copy: Copy, projects: FolderGit2 };

export interface DockItem {
  icon: keyof typeof ICONS;
  label: string;
  href?: string;
  external?: boolean;
  /** Tombol salin email; ditangani listener `[data-copy-email]` di Contact.astro. */
  copyEmail?: string;
}

/** Dock Magic UI berisi tautan kontak. Item tanpa href menjadi tombol. */
export default function ContactDock({ items }: { items: DockItem[] }) {
  const reduced = useReducedMotionSafe();
  const cls =
    'grid size-full place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-ink focus-visible:text-ink';
  return (
    <Dock direction="middle" iconSize={44} iconMagnification={64} disableMagnification={reduced} className="mx-0 mt-0 h-16 border-line bg-surface/70 backdrop-blur-md">
      {items.map(({ icon, label, href, external, copyEmail }) => {
        const Icon = ICONS[icon];
        return (
          <DockIcon key={label}>
            {href ? (
              <a href={href} aria-label={label} title={label} className={cls} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
                <Icon className="size-5" aria-hidden="true" />
              </a>
            ) : (
              <button type="button" aria-label={label} title={label} className={cls} data-copy-email={copyEmail}>
                <Icon className="size-5" aria-hidden="true" />
              </button>
            )}
          </DockIcon>
        );
      })}
    </Dock>
  );
}
