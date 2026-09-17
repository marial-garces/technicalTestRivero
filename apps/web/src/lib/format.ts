export function formatRelativeTime(iso: string): string {
  const diffMin = Math.floor((Date.now() - new Date(iso).getTime()) / 60_000);
  if (diffMin < 1) return "hace instantes";
  if (diffMin < 60) return `hace ${diffMin} min`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `hace ${diffHr}h`;
  const diffDay = Math.floor(diffHr / 24);
  if (diffDay === 1) return "ayer";
  return `hace ${diffDay} dias`;
}

export function formatDate(iso: string | null): string {
  if (!iso) return "Nunca auditado";
  return new Date(iso).toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

/** Short, human-friendly reference for a cuid — the full id is still used for navigation/lookups. */
export function shortId(id: string): string {
  return id.slice(-6);
}
