/** Resolve a file from `public/` (works on GitHub Pages subpath deploys). */
export function publicAsset(path: string): string {
  const base = import.meta.env.BASE_URL;
  const clean = path.replace(/^\//, '');
  return `${base}${clean}`;
}
