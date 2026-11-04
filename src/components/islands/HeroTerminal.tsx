import { useReducedMotion } from 'motion/react';
import { AnimatedSpan, Terminal, TypingAnimation } from '@/components/ui/terminal';

export interface TerminalLine {
  command: string;
  output: string;
}

/**
 * Terminal Magic UI berisi ringkasan profil. Dekoratif: isinya duplikat dari hero,
 * jadi disembunyikan dari pembaca layar. Dengan reduced motion semua baris tampil tanpa efek ketik.
 */
export default function HeroTerminal({ title, lines }: { title: string; lines: TerminalLine[] }) {
  const reduced = useReducedMotion();

  return (
    <div aria-hidden="true" className="relative">
      <span className="absolute top-3 left-1/2 z-10 -translate-x-1/2 font-mono text-xs text-muted">{title}</span>
      <Terminal sequence={!reduced} className="max-w-none border-line bg-surface/80 shadow-(--shadow-lift) backdrop-blur [&_code]:overflow-hidden [&_pre]:whitespace-pre-wrap [&_pre]:break-words">
        {lines.flatMap(({ command, output }, i) =>
          reduced
            ? [
                <AnimatedSpan key={`c${i}`} className="text-muted">{`$ ${command}`}</AnimatedSpan>,
                <AnimatedSpan key={`o${i}`} className="mb-2 text-ink">{output}</AnimatedSpan>,
              ]
            : [
                <TypingAnimation key={`c${i}`} duration={35} className="text-muted">{`$ ${command}`}</TypingAnimation>,
                <AnimatedSpan key={`o${i}`} className="mb-2 text-ink">
                  <span>
                    <span className="text-accent">✔</span> {output}
                  </span>
                </AnimatedSpan>,
              ],
        )}
      </Terminal>
    </div>
  );
}
