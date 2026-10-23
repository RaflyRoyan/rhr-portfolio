/**
 * Bungkus SVG hasil rehype-mermaid dengan <figure class="diagram"> supaya bisa
 * di-scroll horizontal di layar sempit (SVG tidak dikecilkan sampai tak terbaca).
 * @returns {(tree: import('hast').Root) => void}
 */
export default function rehypeWrapDiagrams() {
  /** @param {import('hast').Parents} node */
  const walk = (node) => {
    node.children = node.children.map((child) => {
      if (child.type !== 'element') return child;
      const id = child.properties?.id;
      if (child.tagName === 'svg' && typeof id === 'string' && id.startsWith('mermaid')) {
        return {
          type: 'element',
          tagName: 'figure',
          properties: { className: ['diagram'], role: 'img', ariaLabel: 'Diagram arsitektur', tabIndex: 0 },
          children: [{ ...child, properties: { ...child.properties, ariaHidden: 'true' } }],
        };
      }
      walk(child);
      return child;
    });
  };
  return (tree) => walk(tree);
}
