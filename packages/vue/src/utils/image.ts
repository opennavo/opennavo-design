/** A stored rendition of an image at a known pixel width, e.g. a WebP resized from the original. */
export interface OnImageRendition {
  readonly width: number;
  readonly url: string;
}

/**
 * `srcset` with width descriptors, smallest first and one candidate per width, so the browser picks the rendition
 * that fits the rendered size and pixel density. `fallback` (for example the original PNG) joins the candidates;
 * without stored renditions there is nothing to choose from and the result is undefined.
 */
export function imageSrcset(
  renditions?: readonly OnImageRendition[] | null,
  fallback?: OnImageRendition | null
): string | undefined {
  const stored = (renditions ?? []).filter(item => item.url && item.width > 0);
  if (!stored.length) return undefined;
  const byWidth = new Map<number, OnImageRendition>();
  for (const item of [...stored, ...(fallback?.url && fallback.width > 0 ? [fallback] : [])])
    if (!byWidth.has(item.width)) byWidth.set(item.width, item);
  return [...byWidth.values()]
    .sort((a, b) => a.width - b.width)
    .map(item => `${item.url} ${item.width}w`)
    .join(', ');
}
