export interface SvgOptions {
  title?: string;
  pxHeight?: number;
  pxWidth?: number;
}

export function svgModel(options: SvgOptions) {
  const svg = {
    id: self.crypto.randomUUID(),
    title: options.title || "untitled",
    pxWidth: options.pxWidth || 16,
    pxHeight: options.pxHeight || 16,
  };
  return svg;
}
