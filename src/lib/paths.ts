export const baseUrl = import.meta.env.BASE_URL;

/** Resolve a public/ asset path for GitHub Pages subdirectory hosting. */
export function asset(path: string) {
  return `${baseUrl}${path.replace(/^\//, "")}`;
}

/** Home route path with basename applied (always "/"). */
export function homePath() {
  return baseUrl.replace(/\/$/, "") || "/";
}
