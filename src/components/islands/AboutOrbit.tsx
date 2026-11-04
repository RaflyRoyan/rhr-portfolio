import { OrbitingCircles } from '@/components/ui/orbiting-circles';

/**
 * Ikon teknologi yang mengorbit inisial. Murni CSS (animate-orbit), dirender statis tanpa hidrasi;
 * komponen React dipakai karena OrbitingCircles memetakan children untuk sudutnya.
 */
export default function AboutOrbit({ initials, inner, outer }: { initials: string; inner: string[]; outer: string[] }) {
  const icon = (src: string) => (
    <span key={src} className="grid size-full place-items-center rounded-full border border-line bg-surface p-2 shadow-(--shadow-sheet)">
      <img src={src} alt="" className="size-full" />
    </span>
  );
  return (
    <div className="relative flex size-[22rem] items-center justify-center" aria-hidden="true">
      <span className="grid size-24 place-items-center rounded-full bg-linear-to-br from-accent-from to-accent-to text-3xl font-extrabold tracking-tight text-white shadow-(--shadow-lift)">
        {initials}
      </span>
      <OrbitingCircles iconSize={40} radius={90} duration={22}>
        {inner.map(icon)}
      </OrbitingCircles>
      <OrbitingCircles iconSize={46} radius={160} duration={34} reverse>
        {outer.map(icon)}
      </OrbitingCircles>
    </div>
  );
}
