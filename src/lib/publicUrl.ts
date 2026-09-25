/** Resolve a path under `public/` for both local dev and GitHub Pages base URL. */
export function publicUrl(path: string): string {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  const encoded = clean.split('/').map((segment) => encodeURIComponent(segment)).join('/');
  return `${import.meta.env.BASE_URL}${encoded}`;
}
