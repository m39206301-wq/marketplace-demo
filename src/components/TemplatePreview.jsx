import { useState } from "react";
import { ChevronLeft, Share2, Heart, Play, Smartphone, Video, Image as ImageIcon, Copy, Instagram, MessageCircle } from "lucide-react";
import { colors, radius, typography } from "../styles/tokens";

const TemplatePreview = ({ template, category, onBack, favoriteIds, onToggleFavorite }) => {
  const [showShareSheet, setShowShareSheet] = useState(false);

  if (!template || !category) return null;

  const { colors: c, name, style, isPremium, price, format } = template;
  const isFree = price === "Free";
  const isFav = favoriteIds ? favoriteIds.has(template.id) : false;

  // Action bar height constant so preview knows how much to avoid
  const ACTION_BAR_H = 72;

  return (
    <main style={{
      height: "100%",
      display: "flex", flexDirection: "column",
      background: "#000", overflow: "hidden",
    }}>

      {/* ── Preview — fills all remaining space ── */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden", minHeight: 0 }}>
        {format === "h5" ? (
          <H5Preview c={c} />
        ) : format === "video" ? (
          <VideoPreview c={c} />
        ) : (
          <ImagePreview c={c} />
        )}

        {/* Top overlay controls */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, zIndex: 20,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 100%)",
          padding: "12px 14px 36px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          pointerEvents: "none",
        }}>
          <button
            onClick={onBack}
            aria-label="Back"
            style={{
              width: 34, height: 34, borderRadius: radius.full,
              background: "rgba(0,0,0,0.35)", backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", pointerEvents: "auto",
            }}
          >
            <ChevronLeft size={18} color="#fff" strokeWidth={2.5} />
          </button>

          <div style={{ display: "flex", gap: 8, pointerEvents: "auto" }}>
            <button
              onClick={() => setShowShareSheet(true)}
              aria-label="Share template"
              style={{
                width: 34, height: 34, borderRadius: radius.full,
                background: "rgba(0,0,0,0.35)", backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
              }}
            >
              <Share2 size={15} color="#fff" strokeWidth={2} />
            </button>
            <button
              onClick={() => onToggleFavorite && onToggleFavorite(template)}
              aria-label={isFav ? "Remove from favorites" : "Save to favorites"}
              aria-pressed={isFav}
              style={{
                width: 34, height: 34, borderRadius: radius.full,
                background: isFav ? "rgba(231,76,60,0.85)" : "rgba(0,0,0,0.35)",
                backdropFilter: "blur(8px)",
                border: `1px solid ${isFav ? "rgba(231,76,60,0.5)" : "rgba(255,255,255,0.2)"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", transition: "background 0.2s",
              }}
            >
              <Heart size={15} strokeWidth={2} color="#fff" fill={isFav ? "#fff" : "none"} />
            </button>
          </div>
        </div>

        {/* Bottom gradient overlay — template name + tags */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 20,
          background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
          padding: "40px 16px 14px",
          pointerEvents: "none",
        }}>
          <div style={{
            fontSize: typography.md, fontWeight: typography.bold, color: "#fff",
            marginBottom: 5, textShadow: "0 1px 4px rgba(0,0,0,0.4)",
          }}>
            {name}
          </div>
          <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
            <span style={{
              padding: "2px 7px", borderRadius: radius.sm,
              background: "rgba(255,255,255,0.18)", backdropFilter: "blur(4px)",
              fontSize: typography.xs, fontWeight: typography.semibold, color: "#fff",
            }}>
              {style}
            </span>
            {isPremium && (
              <span style={{
                padding: "2px 7px", borderRadius: radius.sm,
                background: "linear-gradient(135deg, rgba(197,148,74,0.8), rgba(232,193,112,0.8))",
                fontSize: typography.xs, fontWeight: typography.bold, color: "#fff",
              }}>
                Premium
              </span>
            )}
            <FormatBadge format={format} />
          </div>
        </div>
      </div>

      {/* ── Action bar — always at bottom, fixed height ── */}
      <div style={{
        flexShrink: 0, height: ACTION_BAR_H, zIndex: 30,
        background: colors.surface,
        borderTop: `1px solid ${colors.borderSubtle}`,
        padding: "0 16px",
        display: "flex", alignItems: "center", gap: 10,
      }}>
        <button
          onClick={() => onToggleFavorite && onToggleFavorite(template)}
          aria-label={isFav ? "Remove from favorites" : "Save to favorites"}
          style={{
            width: 44, height: 44, borderRadius: radius.md, flexShrink: 0,
            background: isFav ? "#fde2e4" : colors.surfaceAlt,
            border: `1px solid ${isFav ? "#fca5a5" : colors.border}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", transition: "background 0.2s",
          }}
        >
          <Heart size={17} strokeWidth={2} color={isFav ? "#e74c3c" : colors.textSecondary} fill={isFav ? "#e74c3c" : "none"} />
        </button>

        <div style={{ flex: 1 }}>
          <div style={{ fontSize: typography.xs + 1, color: colors.textMuted, marginBottom: 1 }}>
            Template price
          </div>
          <div style={{ fontSize: typography.lg, fontWeight: typography.extrabold, color: isFree ? colors.free : colors.premium }}>
            {price}
          </div>
        </div>

        <button style={{
          padding: "12px 22px", borderRadius: radius.lg,
          background: colors.primary, color: "#fff",
          fontSize: typography.md, fontWeight: typography.bold,
          border: "none", cursor: "pointer",
          fontFamily: typography.fontSans, letterSpacing: 0.2,
          flexShrink: 0,
        }}>
          Use Template
        </button>
      </div>

      {/* ── Share Sheet ── */}
      {showShareSheet && (
        <ShareSheet template={template} category={category} onClose={() => setShowShareSheet(false)} />
      )}
    </main>
  );
};

// ── Preview Components ──

const ImagePreview = ({ c }) => (
  <div style={{
    height: "100%", background: c.bg,
    display: "flex", flexDirection: "column", alignItems: "center",
    justifyContent: "center", position: "relative", overflow: "hidden",
  }}>
    <div style={{
      position: "absolute", inset: 0, opacity: 0.04,
      display: "flex", flexWrap: "wrap", alignItems: "center",
      justifyContent: "center", fontSize: 50, color: c.fg, userSelect: "none",
    }}>
      {Array(20).fill(c.pattern).join("  ")}
    </div>
    <div style={{
      width: 140, height: 200, border: `3px solid ${c.fg}`,
      borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center",
      background: `${c.bg}dd`, zIndex: 1, boxShadow: `0 8px 32px ${c.fg}22`,
    }}>
      <div style={{ textAlign: "center", color: c.fg, padding: 14 }}>
        <div style={{ fontSize: 6.5, letterSpacing: 2.5, opacity: 0.5, marginBottom: 6, textTransform: "uppercase" }}>You Are Invited To</div>
        <div style={{ fontSize: 8.5, letterSpacing: 1.5, opacity: 0.4, marginBottom: 10, textTransform: "uppercase" }}>The Wedding Of</div>
        <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, lineHeight: 1.3, marginBottom: 6 }}>
          Alex<br />&amp;<br />Jamie
        </div>
        <div style={{ width: 36, height: 1, background: c.fg, margin: "0 auto 7px", opacity: 0.25 }} />
        <div style={{ fontSize: 7, opacity: 0.45 }}>12 · 06 · 2026</div>
      </div>
    </div>
  </div>
);

const H5Preview = ({ c }) => (
  <div style={{ height: "100%", background: c.bg, position: "relative" }}>
    <div style={{ height: "100%", overflowY: "auto", background: c.bg, scrollbarWidth: "none" }}>
      <div style={{
        height: 260, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        background: `linear-gradient(160deg, ${c.bg}, ${c.bg}cc)`, position: "relative", overflow: "hidden",
        borderBottom: `1px solid ${c.fg}18`,
      }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", fontSize: 48, color: c.fg }}>
          {Array(12).fill(c.pattern).join("  ")}
        </div>
        <div style={{ textAlign: "center", color: c.fg, zIndex: 1, padding: "0 24px" }}>
          <div style={{ fontSize: 9, letterSpacing: 4, opacity: 0.45, marginBottom: 12, textTransform: "uppercase" }}>You Are Invited</div>
          <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 28, fontWeight: 700, lineHeight: 1.15, marginBottom: 10 }}>
            Alex<br />&amp;<br />Jamie
          </div>
          <div style={{ width: 48, height: 1, background: c.fg, margin: "0 auto 12px", opacity: 0.2 }} />
          <div style={{ fontSize: 11, opacity: 0.45, letterSpacing: 1.5 }}>12 · JUNE · 2026</div>
        </div>
      </div>
      <div style={{ padding: "20px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 14 }}>
          <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 15, color: c.fg, fontWeight: 600, marginBottom: 4 }}>RSVP</div>
          <div style={{ fontSize: 10, color: c.fg, opacity: 0.4 }}>Please confirm by May 30, 2026</div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <div style={{ flex: 1, padding: "10px 0", borderRadius: 8, background: `${c.fg}18`, textAlign: "center", fontSize: 12, fontWeight: 600, color: c.fg, opacity: 0.7 }}>
            Attending ✓
          </div>
          <div style={{ flex: 1, padding: "10px 0", borderRadius: 8, border: `1px solid ${c.fg}30`, textAlign: "center", fontSize: 12, color: c.fg, opacity: 0.4 }}>
            Can't Attend
          </div>
        </div>
      </div>
    </div>
  </div>
);

const VideoPreview = ({ c }) => (
  <div style={{ height: "100%", background: "#111", position: "relative" }}>
    <div style={{
      height: "100%", background: `linear-gradient(135deg, ${c.bg}22, #0a0a0a)`,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.05, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", fontSize: 44, color: c.fg }}>
        {Array(10).fill(c.pattern).join("  ")}
      </div>
      <div style={{ textAlign: "center", color: c.fg, zIndex: 1, padding: "0 24px", marginBottom: 20 }}>
        <div style={{ fontSize: 8, letterSpacing: 3, opacity: 0.45, marginBottom: 10, textTransform: "uppercase" }}>Save The Date</div>
        <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 24, fontWeight: 700, lineHeight: 1.2, opacity: 0.85 }}>
          Alex &amp; Jamie
        </div>
        <div style={{ fontSize: 9, opacity: 0.4, marginTop: 8, letterSpacing: 2 }}>12 · 06 · 2026</div>
      </div>
      <div style={{
        width: 52, height: 52, borderRadius: "50%",
        background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        border: "1.5px solid rgba(255,255,255,0.3)", cursor: "pointer", zIndex: 2,
      }}>
        <Play size={20} color="#fff" fill="#fff" strokeWidth={1} style={{ marginLeft: 3 }} />
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "rgba(255,255,255,0.15)" }}>
        <div style={{ width: "28%", height: "100%", background: c.fg, opacity: 0.8 }} />
      </div>
    </div>
  </div>
);


const FormatBadge = ({ format }) => {
  const fmtInfo = {
    h5:    { label: "H5 Page", Icon: Smartphone },
    video: { label: "Video",   Icon: Video },
    image: { label: "Image",   Icon: ImageIcon },
  };
  const info = fmtInfo[format];
  if (!info) return null;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 3,
      padding: "2px 7px", borderRadius: radius.sm,
      background: "rgba(255,255,255,0.18)", backdropFilter: "blur(4px)",
      fontSize: typography.xs, fontWeight: typography.semibold, color: "#fff",
    }}>
      <info.Icon size={9} strokeWidth={2.5} />
      {info.label}
    </span>
  );
};

const ShareSheet = ({ template, category, onClose }) => {
  const { colors: c, name } = template;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Share template"
      style={{ position: "fixed", inset: 0, background: colors.overlay, zIndex: 100, display: "flex", alignItems: "flex-end", justifyContent: "center" }}
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{ width: 390, background: colors.surface, borderRadius: "20px 20px 0 0", padding: "0 20px 36px" }}
      >
        <div style={{ width: 36, height: 4, borderRadius: 2, background: colors.border, margin: "14px auto 16px" }} />
        <div style={{ fontSize: typography.lg, fontWeight: typography.bold, color: colors.textPrimary, marginBottom: 16 }}>
          Share Template
        </div>
        <div style={{
          display: "flex", gap: 12, padding: 12, background: colors.surfaceWarm,
          borderRadius: radius.lg, marginBottom: 20, border: `1px solid ${colors.borderSubtle}`,
        }}>
          <div style={{ width: 56, height: 72, borderRadius: radius.md, background: c.bg, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${c.fg}30` }}>
            <span style={{ fontSize: 10, color: c.fg, fontFamily: "'Playfair Display', Georgia, serif" }}>♡</span>
          </div>
          <div>
            <div style={{ fontSize: typography.base, fontWeight: typography.semibold, color: colors.textPrimary }}>{name}</div>
            <div style={{ fontSize: typography.sm, color: colors.textTertiary, marginTop: 2 }}>{category.localName}</div>
            <div style={{ fontSize: typography.xs + 1, color: colors.accent, marginTop: 4 }}>
              jiantie.com/t/{template.id}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 20, justifyContent: "center" }}>
          {[
            { Icon: MessageCircle, label: "WhatsApp", bg: "#e8faf0", color: "#25d366" },
            { Icon: Copy, label: "Copy Link", bg: colors.surfaceAlt, color: colors.textSecondary },
            { Icon: Instagram, label: "IG Story", bg: "#fde8f0", color: "#e1306c" },
            { Icon: Share2, label: "More", bg: colors.surfaceAlt, color: colors.textSecondary },
          ].map(s => (
            <button key={s.label} style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
              cursor: "pointer", background: "none", border: "none", fontFamily: typography.fontSans,
            }}>
              <div style={{ width: 52, height: 52, borderRadius: radius.md, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <s.Icon size={22} color={s.color} strokeWidth={1.8} />
              </div>
              <div style={{ fontSize: typography.xs + 1, fontWeight: typography.semibold, color: colors.textSecondary }}>
                {s.label}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplatePreview;
