import { Heart, Smartphone, Video, Image as ImageIcon } from "lucide-react";
import { colors, radius, typography, shadows } from "../styles/tokens";

const TemplateCard = ({ template, onClick, compact, narrow, favoriteIds, onToggleFavorite }) => {
  const { colors: c, name, isPremium, isNew, style, price, format } = template;
  const isFree = price === "Free";
  const isFav = favoriteIds ? favoriteIds.has(template.id) : false;

  const fmtInfo = {
    h5:    { label: "H5",  color: "#2563eb", Icon: Smartphone },
    video: { label: "VID", color: "#7c3aed", Icon: Video },
    image: { label: "IMG", color: "#059669", Icon: ImageIcon },
  };
  const fmt = fmtInfo[format] || fmtInfo.image;

  const thumbH = narrow ? 110 : compact ? 148 : 180;

  const handleFav = (e) => {
    e.stopPropagation();
    if (onToggleFavorite) onToggleFavorite(template);
  };

  return (
    <article
      onClick={onClick}
      aria-label={`${name} — ${style} style, ${isFree ? "Free" : price}`}
      style={{
        borderRadius: radius.md, overflow: "hidden", cursor: "pointer",
        background: colors.surface, boxShadow: shadows.sm,
        transition: "transform 0.15s, box-shadow 0.2s", position: "relative",
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = shadows.lg; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = shadows.sm; }}
    >
      {/* Thumbnail */}
      <div style={{
        height: thumbH, background: c.bg,
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden",
      }}>
        {/* Pattern */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          display: "flex", flexWrap: "wrap", alignItems: "center",
          justifyContent: "center", fontSize: narrow ? 20 : 30, letterSpacing: 14,
          lineHeight: "44px", color: c.fg, userSelect: "none",
        }}>
          {Array(12).fill(c.pattern).join("  ")}
        </div>

        {/* Card mockup */}
        <div style={{
          width: narrow ? 34 : compact ? 48 : 56,
          height: narrow ? 44 : compact ? 62 : 72,
          border: `1.5px solid ${c.fg}`,
          borderRadius: 4, display: "flex", alignItems: "center",
          justifyContent: "center", background: `${c.bg}dd`, position: "relative",
          zIndex: 1, boxShadow: `0 4px 14px ${c.fg}18`,
        }}>
          <div style={{
            fontSize: narrow ? 4 : compact ? 5.5 : 7,
            color: c.fg, textAlign: "center",
            lineHeight: 1.3, fontFamily: "'Playfair Display', Georgia, serif", padding: 3,
          }}>
            <div style={{ fontSize: narrow ? 3 : 3.5, letterSpacing: 0.8, opacity: 0.5, marginBottom: 1 }}>INVITED</div>
            <div style={{ width: narrow ? 8 : 12, height: 0.5, background: c.fg, margin: "1px auto", opacity: 0.2 }} />
            <div style={{ fontSize: narrow ? 3 : 4, opacity: 0.4, marginTop: 1 }}>A & B</div>
          </div>
        </div>

        {/* Format badge — top left */}
        <div style={{
          position: "absolute", top: 5, left: 5,
          display: "flex", alignItems: "center", gap: 2,
          padding: narrow ? "1px 4px" : "2px 5px", borderRadius: 4,
          background: fmt.color, zIndex: 2,
        }}>
          <fmt.Icon size={narrow ? 6 : 8} color="#fff" strokeWidth={2.5} />
          {!narrow && (
            <span style={{ fontSize: 7, fontWeight: 700, color: "#fff" }}>{fmt.label}</span>
          )}
        </div>

        {/* Status badges — top right */}
        {!narrow && (
          <div style={{ position: "absolute", top: 5, right: 5, display: "flex", gap: 3, zIndex: 2 }}>
            {isNew && (
              <div style={{ background: colors.new, color: "#fff", fontSize: 7.5, padding: "2px 5px", borderRadius: 4, fontWeight: 700 }}>
                NEW
              </div>
            )}
            {isPremium && (
              <div style={{ background: "linear-gradient(135deg, #c5944a, #e8c170)", color: "#fff", fontSize: 7.5, padding: "2px 5px", borderRadius: 4, fontWeight: 700 }}>
                PRO
              </div>
            )}
          </div>
        )}

        {/* Fav button */}
        <button
          onClick={handleFav}
          aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
          aria-pressed={isFav}
          style={{
            position: "absolute", bottom: 5, right: 5,
            width: narrow ? 20 : 26, height: narrow ? 20 : 26,
            borderRadius: "50%",
            background: isFav ? "#fde2e4" : "rgba(255,255,255,0.8)",
            backdropFilter: "blur(4px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 2, cursor: "pointer", border: "none",
            transition: "transform 0.12s",
          }}
        >
          <Heart
            size={narrow ? 9 : 12}
            strokeWidth={2}
            color={isFav ? "#e74c3c" : "#aaa"}
            fill={isFav ? "#e74c3c" : "none"}
          />
        </button>
      </div>

      {/* Info */}
      <div style={{ padding: narrow ? "5px 6px 6px" : compact ? "6px 8px 8px" : "8px 10px 10px" }}>
        <div style={{
          fontSize: narrow ? typography.xs : typography.xs + 1,
          fontWeight: typography.semibold, color: colors.textPrimary,
          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
          marginBottom: 2,
        }}>
          {name}
        </div>
        {!narrow && (
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: typography.xs + 1, color: colors.textMuted }}>{style}</span>
            <span style={{
              fontSize: typography.xs + 1, fontWeight: typography.bold,
              color: isFree ? colors.free : colors.premium,
            }}>
              {price}
            </span>
          </div>
        )}
        {narrow && (
          <div style={{
            fontSize: typography.xs, fontWeight: typography.bold,
            color: isFree ? colors.free : colors.premium,
          }}>
            {price}
          </div>
        )}
      </div>
    </article>
  );
};

export default TemplateCard;
