import { useMemo } from 'react';
import { T } from '../data/tokens';
import { HIERARCHY } from '../data/hierarchy';
import { FORMATS, FORMAT_PALETTES } from '../data/formats';
import { hashStr } from '../utils/helpers';
import SubPageHeader from './SubPageHeader';
import TemplateCard from './TemplateCard';
import Footer from './Footer';

export default function FavoritesPage({ favorites, onBack, onOpenDetail, onToggleFavorite, market, onDistributor, onNavigate }) {
  const favoriteItems = useMemo(() => {
    const items = [];
    const favArr = Array.from(favorites);
    favArr.forEach((fid) => {
      const parts = fid.split("-");
      const formatId = parts[parts.length - 2];
      const format = FORMATS.find((f) => f.id === formatId) || FORMATS[0];
      const l3Id = parts.slice(0, -2).join("-");
      let l3Name = "";
      const h = HIERARCHY[market] || [];
      h.forEach((l2) => {
        l2.l3.forEach((l3) => {
          if (l3.id === l3Id) l3Name = l3.name;
        });
      });
      const seed = hashStr(l3Id + formatId);
      const pal = FORMAT_PALETTES[formatId] || FORMAT_PALETTES.flyer;
      const idx = parseInt(parts[parts.length - 1]) || 0;
      items.push({
        id: fid,
        template: { id: fid, bg: pal[(seed + idx) % pal.length][0], accent: pal[(seed + idx) % pal.length][1] },
        format,
        l3Name,
      });
    });
    return items;
  }, [favorites, market]);

  return (
    <div style={{
      position: "absolute", inset: 0, zIndex: 25, background: T.n[100],
      animation: "slideIn 0.3s ease-out forwards",
      display: "flex", flexDirection: "column",
    }}>
      <div style={{ flex: 1, overflowY: "auto", scrollbarWidth: "none" }}>
        <SubPageHeader title="Favorites" onBack={onBack} />

        {favoriteItems.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={T.n[300]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "16px" }}>
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
            <div style={{ fontSize: "15px", fontWeight: 600, color: T.n[600], marginBottom: "6px" }}>No favorites yet</div>
            <div style={{ fontSize: "13px", color: T.n[400] }}>Browse and tap the heart icon to save templates</div>
          </div>
        ) : (
          <div style={{ padding: "16px", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
            {favoriteItems.map((item, i) => (
              <TemplateCard key={item.id} template={item.template} index={i} aspectRatio={item.format.aspect}
                isFavorited={true} onToggleFavorite={onToggleFavorite}
                onClick={() => onOpenDetail({ template: item.template, format: item.format, l3Name: item.l3Name })} />
            ))}
          </div>
        )}
        <Footer onDistributor={onDistributor} onNavigate={onNavigate} />
      </div>
    </div>
  );
}
