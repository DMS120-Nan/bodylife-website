export const siteName = "BodyLife Store";

export function getBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "http://localhost:3000"
  );
}

export function getCanonicalUrl(path) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${getBaseUrl()}${normalizedPath}`;
}

export function createOpenGraph({
  description,
  images,
  path,
  title,
  type = "website"
}) {
  return {
    title,
    description,
    url: getCanonicalUrl(path),
    siteName,
    type,
    images
  };
}
