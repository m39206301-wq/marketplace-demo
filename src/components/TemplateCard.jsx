import { useState, useEffect } from 'react';
import { T, S } from '../data/tokens';

export default function TemplateCard({ template, index, aspectRatio = "4/5", onClick, isFavorited, onToggleFavorite }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 60 + index * 45);
    return () => clearTimeout(t);
  }, [index, template.id]);

  return (
    <div
      onClick={onClick}
      style={{
        borderRadius: "14px", overflow: "hidden", background: template.bg,
        aspectRatio: aspectRatio, cursor: "pointer", position: "relative",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        transform: visible ? "translateY(0)" : "translateY(8px)",
        opacity: visible ? 1 : 0,
        boxShadow: S.card,
        border: "0.5px solid rgba(0,0,0,0.04)",
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 35% 30%, " + template.accent + "12, transparent 55%)", pointerEvents: "none" }}/>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 40%, rgba(0,0,0,0.01) 100%)", pointerEvents: "none" }}/>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.13, display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", width: "60%" }}>
        <div style={{ width: "70%", height: "3px", borderRadius: "2px", background: template.accent }}/>
        <div style={{ width: "50%", height: "2px", borderRadius: "2px", background: template.accent }}/>
        <div style={{ width: "32px", height: "32px", borderRadius: "8px", border: "1.5px solid " + template.accent, transform: "rotate(45deg)", margin: "4px 0" }}/>
        <div style={{ width: "40%", height: "2px", borderRadius: "2px", background: template.accent }}/>
      </div>
      <div onClick={(e) => { e.stopPropagation(); onToggleFavorite && onToggleFavorite(template.id); }} style={{
        position: "absolute", top: "8px", right: "8px", width: "26px", height: "26px", borderRadius: "50%",
        background: "rgba(255,255,255,0.85)", backdropFilter: "blur(10px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        opacity: isFavorited ? 1 : 0.5,
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        cursor: "pointer",
      }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill={isFavorited ? "#E25555" : "none"} stroke={isFavorited ? "#E25555" : T.n[500]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
        </svg>
      </div>
      <div style={{
        position: "absolute", bottom: "8px", left: "8px",
        padding: "3px 8px", borderRadius: "6px",
        background: template.price === "Free" ? "rgba(42,122,98,0.85)" : "rgba(0,0,0,0.55)",
        backdropFilter: "blur(8px)",
        fontSize: "11px", fontWeight: 650, color: "#fff",
        letterSpacing: "0.2px",
      }}>{template.price || "$0.99"}</div>
    </div>
  );
}
