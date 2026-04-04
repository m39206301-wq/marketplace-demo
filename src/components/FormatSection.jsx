import { useMemo } from 'react';
import { T, S } from '../data/tokens';
import { generatePlaceholders } from '../utils/helpers';
import TemplateCard from './TemplateCard';
import SkeletonCard from './SkeletonCard';
import SeeMoreBtn from './SeeMoreBtn';

export default function FormatSection({ l3Id, l3Name, format, onCardClick, loading, favorites, onToggleFavorite }) {
  const templates = useMemo(() => generatePlaceholders(l3Id, format.id), [l3Id, format.id]);
  return (
    <div style={{ marginBottom: "2px" }}>
      <div style={{
        margin: "0 12px", padding: "2px 0 14px", borderRadius: "18px",
        background: "linear-gradient(180deg, " + T.n[50] + " 0%, " + T.n[0] + " 100%)",
        boxShadow: "0 0.5px 0 rgba(0,0,0,0.02)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "9px", padding: "16px 12px 12px" }}>
          <span style={{
            fontSize: "10.5px", fontWeight: 650, color: format.tagColor,
            background: format.tagBg, borderRadius: "6px", padding: "3px 9px",
            letterSpacing: "0.6px", textTransform: "uppercase",
            boxShadow: S.tag, border: "0.5px solid " + format.tagColor + "12",
          }}>{format.label}</span>
          <span style={{ fontSize: "14.5px", fontWeight: 660, color: T.n[800], letterSpacing: "-0.15px" }}>
            {l3Name}
          </span>
          <span style={{ fontSize: "11px", color: T.n[400], fontWeight: 500 }}>({templates.length})</span>
        </div>
        <div key={l3Id} style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "9px", padding: "0 10px",
        }}>
          {loading ? Array.from({ length: 6 }, (_, i) => (
            <SkeletonCard key={"sk-" + i} aspectRatio={format.aspect} />
          )) : templates.map((t, i) => (
            <TemplateCard key={t.id} template={t} index={i} aspectRatio={format.aspect}
              isFavorited={favorites && favorites.has(t.id)}
              onToggleFavorite={onToggleFavorite}
              onClick={() => onCardClick && onCardClick({ template: t, format: format, l3Name: l3Name })} />
          ))}
        </div>
        <div style={{ padding: "12px 10px 4px" }}><SeeMoreBtn /></div>
      </div>
    </div>
  );
}
