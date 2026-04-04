import { FORMAT_PALETTES, PRICES } from '../data/formats';

export function hashStr(s) {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export function generatePlaceholders(l3Id, format, count = 6) {
  const seed = hashStr(l3Id + format);
  const pal = FORMAT_PALETTES[format] || FORMAT_PALETTES.flyer;
  return Array.from({ length: count }, (_, i) => ({
    id: l3Id + "-" + format + "-" + i,
    bg: pal[(seed + i) % pal.length][0],
    accent: pal[(seed + i) % pal.length][1],
    price: PRICES[(seed + i) % PRICES.length],
  }));
}
