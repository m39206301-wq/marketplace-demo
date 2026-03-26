import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, MessageSquare, SearchX } from "lucide-react";
import { colors, radius, typography } from "../styles/tokens";
import { FORMATS, FORMAT_COLORS } from "../data/filters";
import { generateTemplates } from "../data/templates";
import TemplateCard from "./TemplateCard";
import Icon from "./ui/Icon";

const WHATSAPP_REQUEST = "https://wa.me/6281234567890?text=Hi%2C%20I%20can't%20find%20the%20template%20I%20need%3A%20";

const CategoryDetail = ({ category, onBack, onTemplateClick, favoriteIds, onToggleFavorite }) => {
  const [activeScene, setActiveScene] = useState("all");

  const allTemplates = useMemo(() => generateTemplates(category.id, 24), [category.id]);

  const filteredTemplates = useMemo(() => {
    if (activeScene === "all") return allTemplates;
    return allTemplates.filter(t => t.scene === activeScene || t.scene === "all");
  }, [allTemplates, activeScene]);

  const availableFormats = FORMATS.filter(f => category.formats.includes(f.id));
  const hasAnyTemplates = filteredTemplates.length > 0;

  return (
    <main style={{ minHeight: "100%", background: colors.bg }}>

      {/* ── Category Header ── */}
      <header style={{ background: category.gradient, padding: "14px 16px 14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            onClick={onBack}
            aria-label="Back"
            style={{
              width: 34, height: 34, borderRadius: radius.full,
              background: "rgba(255,255,255,0.55)", backdropFilter: "blur(8px)",
              border: "none", display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <ChevronLeft size={18} color={colors.textPrimary} strokeWidth={2.5} />
          </button>
          <Icon name={category.icon} size={22} color={category.accent} strokeWidth={1.6} />
          <div style={{ flex: 1 }}>
            <h1 style={{
              fontSize: typography.lg, fontWeight: typography.extrabold,
              color: colors.textPrimary, letterSpacing: -0.3, lineHeight: 1.1, margin: 0,
            }}>
              {category.localName}
            </h1>
            <p style={{ fontSize: typography.xs + 1, color: "rgba(0,0,0,0.35)", fontWeight: typography.medium, margin: "1px 0 0" }}>
              {category.count.toLocaleString()} templates
            </p>
          </div>
        </div>
      </header>

      {/* ── Scene Tabs ── */}
      {category.scenes && category.scenes.length > 1 && (
        <nav aria-label="Filter by scene" style={{ background: colors.surface, borderBottom: `1px solid ${colors.borderSubtle}` }}>
          <div style={{ display: "flex", gap: 0, overflowX: "auto", scrollbarWidth: "none", padding: "0 4px" }}>
            {category.scenes.map(scene => {
              const isActive = activeScene === scene.id;
              return (
                <button
                  key={scene.id}
                  onClick={() => setActiveScene(scene.id)}
                  aria-pressed={isActive}
                  style={{
                    padding: "10px 14px", background: "none", border: "none",
                    borderBottom: isActive ? `2px solid ${category.accent}` : "2px solid transparent",
                    cursor: "pointer", flexShrink: 0, transition: "all 0.15s",
                    fontFamily: typography.fontSans,
                  }}
                >
                  <span style={{
                    fontSize: typography.xs + 1,
                    fontWeight: isActive ? typography.bold : typography.medium,
                    color: isActive ? category.accent : colors.textTertiary,
                    whiteSpace: "nowrap",
                  }}>
                    {scene.label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      )}

      {/* ── Empty state ── */}
      {!hasAnyTemplates && (
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          padding: "48px 24px", textAlign: "center",
        }}>
          <div style={{
            width: 60, height: 60, borderRadius: radius.full,
            background: colors.surfaceAlt,
            display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: 14,
          }}>
            <SearchX size={26} color={colors.textMuted} strokeWidth={1.5} />
          </div>
          <h2 style={{ fontSize: typography.base, fontWeight: typography.bold, color: colors.textPrimary, margin: "0 0 6px" }}>
            No templates yet
          </h2>
          <p style={{ fontSize: typography.xs + 1, color: colors.textSecondary, margin: "0 0 16px", lineHeight: 1.5 }}>
            We don't have templates for this scene filter yet. Try "All" or request a custom design.
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => setActiveScene("all")}
              style={{
                padding: "8px 16px", borderRadius: radius.full,
                background: category.accent, color: "#fff",
                border: "none", cursor: "pointer",
                fontSize: typography.xs + 1, fontWeight: typography.bold, fontFamily: typography.fontSans,
              }}
            >
              Show All
            </button>
            <button
              onClick={() => window.open(WHATSAPP_REQUEST, "_blank", "noopener,noreferrer")}
              style={{
                padding: "8px 16px", borderRadius: radius.full,
                background: colors.surface, border: `1px solid ${colors.border}`,
                cursor: "pointer",
                fontSize: typography.xs + 1, fontWeight: typography.semibold, color: colors.textSecondary,
                fontFamily: typography.fontSans,
              }}
            >
              Request
            </button>
          </div>
        </div>
      )}

      {/* ── Format Sections ── */}
      {hasAnyTemplates && availableFormats.map(fmt => {
        const fmtTemplates = filteredTemplates.filter(t => t.format === fmt.id);
        if (fmtTemplates.length === 0) return null;
        const displayTemplates = fmtTemplates.slice(0, 6);
        const fmtMeta = FORMAT_COLORS[fmt.id] || { color: "#666", bg: "#f0f0f0" };

        return (
          <section key={fmt.id} aria-labelledby={`section-${fmt.id}`} style={{ padding: "16px 0 4px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px 10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{
                  padding: "3px 8px", borderRadius: 6,
                  background: fmtMeta.bg, fontSize: typography.xs, fontWeight: typography.bold, color: fmtMeta.color,
                }}>
                  {fmt.label}
                </span>
                <h2 id={`section-${fmt.id}`} style={{ fontSize: typography.sm, fontWeight: typography.semibold, color: colors.textSecondary, margin: 0 }}>
                  Discover trending styles
                </h2>
              </div>
              <a
                href={`#${category.slug}-${fmt.id}`}
                onClick={e => e.preventDefault()}
                aria-label={`See all ${fmt.label} templates`}
                style={{
                  display: "flex", alignItems: "center", gap: 2,
                  fontSize: typography.xs + 1, color: category.accent,
                  fontWeight: typography.semibold, textDecoration: "none", cursor: "pointer",
                }}
              >
                See All <ChevronRight size={11} strokeWidth={2.5} />
              </a>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, padding: "0 16px" }}>
              {displayTemplates.map(t => (
                <TemplateCard
                  key={t.id}
                  template={t}
                  onClick={() => onTemplateClick(t)}
                  favoriteIds={favoriteIds}
                  onToggleFavorite={onToggleFavorite}
                  compact
                  narrow
                />
              ))}
            </div>

            {fmtTemplates.length > 6 && (
              <div style={{ padding: "10px 16px 0", textAlign: "center" }}>
                <a
                  href={`#${category.slug}-${fmt.id}-all`}
                  onClick={e => e.preventDefault()}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 4,
                    padding: "9px 0", background: colors.surface, borderRadius: radius.md,
                    border: `1px solid ${colors.border}`,
                    fontSize: typography.sm, fontWeight: typography.semibold,
                    color: category.accent, textDecoration: "none", cursor: "pointer",
                  }}
                >
                  See All {fmt.label} Templates <ChevronRight size={12} strokeWidth={2.5} />
                </a>
              </div>
            )}
          </section>
        );
      })}

      {/* ── Feedback at bottom ── */}
      {hasAnyTemplates && (
        <div style={{ padding: "12px 16px" }}>
          <div style={{
            padding: "12px 14px", background: colors.surface,
            borderRadius: radius.lg, border: `1px solid ${colors.border}`,
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <div style={{
              width: 34, height: 34, borderRadius: radius.md,
              background: colors.surfaceAlt,
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <MessageSquare size={15} color={colors.textSecondary} strokeWidth={1.8} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: typography.xs + 1, fontWeight: typography.semibold, color: colors.textPrimary }}>
                Can't find what you need?
              </div>
              <div style={{ fontSize: typography.xs, color: colors.textMuted, marginTop: 1 }}>
                Request a template via WhatsApp
              </div>
            </div>
            <button
              onClick={() => window.open(WHATSAPP_REQUEST, "_blank", "noopener,noreferrer")}
              style={{
                padding: "6px 11px", borderRadius: radius.sm,
                background: "#e8faf0", border: "1px solid #bbf7d0",
                fontSize: typography.xs, fontWeight: typography.bold, color: "#16a34a",
                cursor: "pointer", fontFamily: typography.fontSans, flexShrink: 0,
              }}
            >
              Request
            </button>
          </div>
        </div>
      )}

      <div style={{ height: 16 }} />
    </main>
  );
};

export default CategoryDetail;
