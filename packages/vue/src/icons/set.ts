/**
 * Icon data in the Iconify JSON shape. An IconifyJSON object from @iconify-json/* or @iconify/utils' getIcons fits;
 * declared here so the package's sources type-check without Iconify's type package.
 */
export interface OnIconSet {
  /** Collection prefix, e.g. lucide; icons are addressed as prefix:name, or by name alone for lucide. */
  prefix: string;
  /** Inner SVG markup per icon name. */
  icons: Record<string, { body: string; width?: number; height?: number }>;
  /** Alternative names pointing at an icon in `icons`. */
  aliases?: Record<string, { parent: string }>;
  /** Default view box size for icons without their own; 16 when omitted, as in Iconify. */
  width?: number;
  height?: number;
}
