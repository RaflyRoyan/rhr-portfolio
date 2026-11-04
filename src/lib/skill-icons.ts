import { siBootstrap, siChartdotjs, siDevexpress, siDotnet, siGit, siJavascript, siJquery, siTailwindcss, type SimpleIcon } from 'simple-icons';

// Nama skill di profile.ts → ikon Simple Icons. Skill tanpa ikon resmi (C#, Oracle, Visual Studio, …)
// sengaja tidak dipetakan dan dilewati.
const SKILL_ICONS: Record<string, SimpleIcon> = {
  '.net': siDotnet,
  'asp.net core mvc/razor': siDotnet,
  javascript: siJavascript,
  jquery: siJquery,
  devextreme: siDevexpress,
  'bootstrap 5': siBootstrap,
  'tailwind css': siTailwindcss,
  'chart.js': siChartdotjs,
  git: siGit,
};

/** SVG data URI (dibuat saat build, tanpa request ke CDN) untuk skill yang punya ikon; duplikat dibuang. */
export function skillIconImages(skills: string[]): string[] {
  const icons = new Set<SimpleIcon>();
  for (const skill of skills) {
    const icon = SKILL_ICONS[skill.toLowerCase().trim()];
    if (icon) icons.add(icon);
  }
  return [...icons].map((icon) => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#${icon.hex}"><path d="${icon.path}"/></svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
  });
}
