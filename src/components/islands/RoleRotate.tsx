import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

/**
 * Pola word-rotate Magic UI sebagai <span> (komponen registry merender <h1>, sehingga ada h1 ganda).
 * Kata pertama sudah tampil saat SSR; daftar lengkap tersedia untuk pembaca layar.
 */
export default function RoleRotate({ words, duration = 2400, className }: { words: string[]; duration?: number; className?: string }) {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || words.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), duration);
    return () => clearInterval(id);
  }, [words, duration, reduced]);

  return (
    <span className="relative inline-flex overflow-hidden py-1 align-bottom">
      <span className="sr-only">{words.join(', ')}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          aria-hidden="true"
          className={className}
          initial={{ opacity: 0, y: -24, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
