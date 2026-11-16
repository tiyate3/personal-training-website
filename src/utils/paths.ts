/** Prefix a site-local path with Astro's configured deployment base path. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const relativePath = path.replace(/^\/+/, '');
  return `${base}${relativePath}`;
}
