export const SOCIAL_PROOF_MESSAGES = [
  (n) => `${n} orang sedang browsing sekarang`,
  (n) => `${n.toLocaleString()} undangan dibuat hari ini`,
  () => `Sarah baru saja membuat undangan pernikahan ✓`,
  () => `Ulang Tahun template trending sekarang! 🔥`,
  (n) => `${n} undangan dibagikan dalam 1 jam terakhir`,
  () => `Dewi baru menggunakan template Elegant Wedding`,
  () => `Template Aqiqah baru ditambahkan minggu ini`,
  (n) => `${n}+ pengguna aktif bulan ini`,
];

export const generateLiveStats = () => ({
  browsing: Math.floor(Math.random() * 80) + 60,
  todayCount: Math.floor(Math.random() * 800) + 2800,
  sharedCount: Math.floor(Math.random() * 200) + 600,
  activeUsers: Math.floor(Math.random() * 1000) + 12000,
});

const STYLE_NAMES = [
  "Minimalist", "Luxury", "Traditional", "Watercolor", "Geometric",
  "Calligraphy", "Batik", "Tropical", "K-Style", "Vintage", "Modern", "Elegant",
];

const SCENE_IDS = ["all", "islam", "christian", "hindu", "universal", "buddhist", "chinese"];

const FORMAT_CYCLE = ["h5", "image", "video", "h5", "image", "h5", "image", "image", "video", "h5", "image", "image"];

const PRICE_OPTIONS = ["Free", "$2.99", "$4.99", "$7.99", "$9.99", "$14.99"];

export const TEMPLATE_PALETTES = [
  { bg: "#f8e8d0", fg: "#c5944a", pattern: "◇" },
  { bg: "#fde2e4", fg: "#c4727a", pattern: "❀" },
  { bg: "#dfe7fd", fg: "#6b8cce", pattern: "✦" },
  { bg: "#d0f4de", fg: "#457b6b", pattern: "⬡" },
  { bg: "#f3e5f5", fg: "#8e4585", pattern: "✧" },
  { bg: "#fff8e1", fg: "#c6922a", pattern: "◈" },
  { bg: "#e8f5e9", fg: "#2d6a4f", pattern: "❋" },
  { bg: "#fce4ec", fg: "#ad1457", pattern: "✿" },
  { bg: "#e0f2f1", fg: "#004d40", pattern: "⬢" },
  { bg: "#f1f8e9", fg: "#33691e", pattern: "❊" },
  { bg: "#1a1a2e", fg: "#c5a55a", pattern: "✦" },
  { bg: "#2d2d3f", fg: "#e8c4c4", pattern: "◇" },
];

export const generateTemplates = (categoryId, count = 12) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${categoryId}-${i}`,
    name: `${STYLE_NAMES[i % STYLE_NAMES.length]} ${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} #${i + 1}`,
    style: STYLE_NAMES[i % STYLE_NAMES.length],
    scene: SCENE_IDS[i % SCENE_IDS.length],
    format: FORMAT_CYCLE[i % FORMAT_CYCLE.length],
    isPremium: i % 3 === 0,
    isNew: i < 3,
    colors: TEMPLATE_PALETTES[i % TEMPLATE_PALETTES.length],
    likes: Math.floor(Math.random() * 500) + 50,
    uses: Math.floor(Math.random() * 3000) + 200,
    price: i % 3 === 0 ? PRICE_OPTIONS[Math.floor(i / 3) % PRICE_OPTIONS.length] : "Free",
    categoryId,
  }));
};
