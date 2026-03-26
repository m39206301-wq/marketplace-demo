import { useState, useRef, useEffect } from "react";
import { Search, X, ChevronRight, Lock, TrendingUp, User, MessageSquare } from "lucide-react";
import { colors, radius, typography, shadows } from "../styles/tokens";
import { CATEGORIES, SEASONAL_BANNER } from "../data/categories";
import Icon from "./ui/Icon";

const HomeScreen = ({ onCategoryClick, onAgentClick, onProfileClick, searchRef }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const inputRef = useRef(null);

  // Allow parent to focus search via ref
  useEffect(() => {
    if (searchRef) searchRef.current = { focus: () => inputRef.current?.focus() };
  }, [searchRef]);

  const searchResults = searchFocused && searchQuery.length >= 2
    ? CATEGORIES.filter(c =>
        !c.comingSoon &&
        (c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
         c.localName.toLowerCase().includes(searchQuery.toLowerCase()) ||
         c.scenes?.some(s => s.label.toLowerCase().includes(searchQuery.toLowerCase())))
      )
    : null;

  const activeCategories = CATEGORIES.filter(c => !c.comingSoon);
  const comingSoonCategories = CATEGORIES.filter(c => c.comingSoon);
  const bannerCategory = CATEGORIES.find(c => c.id === SEASONAL_BANNER.categoryId);

  return (
    <main style={{ minHeight: "100%", background: colors.bg }}>

      {/* ── Header ── */}
      <header style={{ background: colors.surface }}>
        <div style={{ padding: "12px 16px 10px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <div>
              <h1 style={{
                fontSize: typography.xl + 2, fontWeight: typography.extrabold,
                color: colors.textPrimary, letterSpacing: -0.5,
                fontFamily: typography.fontSerif, margin: 0,
              }}>
                Jiantie
              </h1>
              <p style={{ fontSize: typography.xs + 1, color: colors.textTertiary, fontWeight: typography.medium, margin: 0 }}>
                Beautiful moments, meaningful designs
              </p>
            </div>

            <button
              onClick={onProfileClick}
              style={{
                display: "flex", alignItems: "center", gap: 5,
                padding: "6px 12px", borderRadius: radius.full,
                background: colors.surfaceAlt, border: `1px solid ${colors.border}`,
                cursor: "pointer", fontFamily: typography.fontSans,
              }}
            >
              <User size={13} color={colors.textSecondary} strokeWidth={1.8} />
              <span style={{ fontSize: typography.xs + 1, fontWeight: typography.semibold, color: colors.textSecondary }}>
                My Account
              </span>
            </button>
          </div>

          {/* Search */}
          <div style={{ position: "relative" }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 8, padding: "8px 12px",
              background: colors.surfaceAlt, borderRadius: radius.md,
              border: searchFocused ? `1.5px solid ${colors.accent}` : "1.5px solid transparent",
              transition: "border 0.2s",
            }}>
              <Search size={14} color={colors.textMuted} strokeWidth={2} aria-hidden="true" />
              <input
                ref={inputRef}
                type="search"
                aria-label="Search invitation templates"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                placeholder="Search templates, occasions..."
                style={{
                  flex: 1, border: "none", outline: "none", background: "none",
                  fontSize: typography.sm + 1, color: colors.textPrimary,
                  fontFamily: typography.fontSans,
                }}
              />
              {searchQuery && (
                <X size={13} color={colors.textMuted} strokeWidth={2}
                  style={{ cursor: "pointer" }} onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                />
              )}
            </div>

            {searchFocused && searchQuery.length > 1 && (
              <div
                role="listbox"
                aria-label="Search results"
                style={{
                  position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0,
                  background: colors.surface, borderRadius: radius.md,
                  border: `1px solid ${colors.border}`, overflow: "hidden",
                  boxShadow: shadows.xl, zIndex: 50,
                }}
              >
                {!searchResults || searchResults.length === 0 ? (
                  <div style={{ padding: 16, textAlign: "center", fontSize: typography.sm, color: colors.textTertiary }}>
                    No results for "{searchQuery}"
                  </div>
                ) : (
                  searchResults.map(cat => (
                    <div
                      key={cat.id}
                      role="option"
                      onClick={() => { onCategoryClick(cat); setSearchQuery(""); }}
                      style={{
                        display: "flex", alignItems: "center", gap: 10, padding: "10px 14px",
                        cursor: "pointer", borderBottom: `1px solid ${colors.borderSubtle}`,
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = colors.surfaceAlt}
                      onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                    >
                      <Icon name={cat.icon} size={16} color={cat.accent} strokeWidth={1.6} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: typography.sm + 1, fontWeight: typography.semibold, color: colors.textPrimary }}>
                          {cat.localName}
                        </div>
                        <div style={{ fontSize: typography.xs + 1, color: colors.textTertiary }}>
                          {cat.count.toLocaleString()} templates
                        </div>
                      </div>
                      <ChevronRight size={13} color={colors.textMuted} strokeWidth={2} />
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>

      </header>

      {/* ── Seasonal Banner ── */}
      {bannerCategory && (
        <section aria-label="Seasonal promotion" style={{ padding: "10px 16px 4px" }}>
          <div
            onClick={() => onCategoryClick(bannerCategory)}
            role="button"
            aria-label={SEASONAL_BANNER.title}
            style={{
              background: SEASONAL_BANNER.gradient, borderRadius: radius.lg,
              padding: "14px 16px", cursor: "pointer", position: "relative", overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", right: -10, top: -10, opacity: 0.10 }}>
              <Icon name={SEASONAL_BANNER.icon} size={72} color="#fff" />
            </div>
            <div style={{ fontSize: typography.xs + 1, color: "rgba(255,255,255,0.55)", fontWeight: typography.bold, letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>
              SEASONAL
            </div>
            <div style={{ fontSize: typography.md + 1, fontWeight: typography.extrabold, color: "#fff", lineHeight: 1.2, marginBottom: 3 }}>
              {SEASONAL_BANNER.title}
            </div>
            <div style={{ fontSize: typography.xs + 1, color: "rgba(255,255,255,0.7)", marginBottom: 8 }}>
              {SEASONAL_BANNER.subtitle}
            </div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 4,
              padding: "5px 12px", borderRadius: radius.full,
              background: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)",
              fontSize: typography.xs + 1, fontWeight: typography.bold, color: "#fff",
            }}>
              {SEASONAL_BANNER.cta} <ChevronRight size={11} strokeWidth={2.5} />
            </div>
          </div>
        </section>
      )}

      {/* ── Category List ── */}
      <section aria-label="Template categories" style={{ padding: "12px 16px 4px" }}>
        <h2 style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap" }}>
          Browse Categories
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {activeCategories.map(cat => (
            <CategoryCard key={cat.id} category={cat} onClick={() => onCategoryClick(cat)} />
          ))}
          {comingSoonCategories.map(cat => (
            <CategoryCardComingSoon key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* ── "Can't find" feedback ── */}
      <div style={{ padding: "4px 16px 0" }}>
        <div style={{
          padding: "11px 14px", background: colors.surface,
          borderRadius: radius.lg, border: `1px solid ${colors.border}`,
          display: "flex", alignItems: "center", gap: 10,
        }}>
          <MessageSquare size={15} color={colors.textSecondary} strokeWidth={1.8} style={{ flexShrink: 0 }} />
          <span style={{ flex: 1, fontSize: typography.xs + 1, color: colors.textSecondary, fontWeight: typography.medium }}>
            Can't find what you need?
          </span>
          <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
            <button
              onClick={() => window.open("https://wa.me/6281234567890?text=Hi%2C%20I%20can't%20find%20the%20template%3A%20", "_blank", "noopener,noreferrer")}
              style={{
                padding: "5px 9px", borderRadius: radius.sm,
                background: "#e8faf0", border: "1px solid #bbf7d0",
                fontSize: typography.xs, fontWeight: typography.bold, color: "#16a34a",
                cursor: "pointer", fontFamily: typography.fontSans,
              }}
            >
              Request
            </button>
            <button
              onClick={() => inputRef.current?.focus()}
              style={{
                padding: "5px 9px", borderRadius: radius.sm,
                background: colors.surfaceAlt, border: `1px solid ${colors.border}`,
                fontSize: typography.xs, fontWeight: typography.semibold, color: colors.textSecondary,
                cursor: "pointer", fontFamily: typography.fontSans,
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* ── Bottom CTAs ── */}
      <div style={{ padding: "10px 16px 28px" }}>
        <button
          onClick={onAgentClick}
          style={{
            width: "100%", display: "flex", alignItems: "center", gap: 12,
            padding: "14px 16px", borderRadius: radius.lg,
            background: "linear-gradient(135deg, #1a1a2e 0%, #2d2d4f 60%, #3d2d1a 100%)",
            border: "1px solid rgba(197,148,74,0.25)",
            cursor: "pointer", fontFamily: typography.fontSans,
          }}
        >
          <div style={{
            width: 38, height: 38, borderRadius: radius.md, flexShrink: 0,
            background: "rgba(197,148,74,0.15)", border: "1px solid rgba(197,148,74,0.25)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <TrendingUp size={18} color="#c5944a" strokeWidth={1.8} />
          </div>
          <div style={{ flex: 1, textAlign: "left" }}>
            <div style={{ fontSize: typography.sm + 1, fontWeight: typography.extrabold, color: "#fff", letterSpacing: -0.2 }}>
              Become an Agent · Earn Now
            </div>
            <div style={{ fontSize: typography.xs + 1, color: "rgba(255,255,255,0.4)", marginTop: 1 }}>
              Up to 30% commission per sale · Free to join
            </div>
          </div>
          <ChevronRight size={14} color="rgba(197,148,74,0.6)" strokeWidth={2.5} />
        </button>
      </div>
    </main>
  );
};

const CategoryCard = ({ category, onClick }) => {
  const { localName, note, icon, gradient, accent, count } = category;
  return (
    <article
      onClick={onClick}
      role="button"
      aria-label={`${localName} — ${count.toLocaleString()} templates`}
      style={{
        background: gradient, borderRadius: radius.lg, padding: "14px 16px",
        cursor: "pointer", display: "flex", alignItems: "center", gap: 12,
        border: `1px solid ${accent}18`, transition: "transform 0.12s, box-shadow 0.15s",
        position: "relative", overflow: "hidden",
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.01)"; e.currentTarget.style.boxShadow = shadows.lg; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
    >
      <div style={{ position: "absolute", right: -8, bottom: -8, opacity: 0.07 }}>
        <Icon name={icon} size={60} color={accent} />
      </div>
      <div style={{
        width: 44, height: 44, borderRadius: radius.md, flexShrink: 0,
        background: `${accent}15`, display: "flex", alignItems: "center", justifyContent: "center",
        border: `1px solid ${accent}20`,
      }}>
        <Icon name={icon} size={20} color={accent} strokeWidth={1.6} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h3 style={{ fontSize: typography.md, fontWeight: typography.bold, color: colors.textPrimary, margin: "0 0 3px", letterSpacing: -0.2 }}>
          {localName}
        </h3>
        {note && (
          <p style={{
            fontSize: typography.xs + 1, color: "rgba(0,0,0,0.38)",
            margin: 0, fontWeight: typography.medium,
            overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
          }}>
            {note}
          </p>
        )}
      </div>
      <div style={{ textAlign: "right", flexShrink: 0 }}>
        <div style={{ fontSize: typography.sm, fontWeight: typography.extrabold, color: accent }}>
          {count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count}
        </div>
        <div style={{ fontSize: typography.xs, color: "rgba(0,0,0,0.3)", marginBottom: 4 }}>templates</div>
        <ChevronRight size={15} color={accent} strokeWidth={2.5} />
      </div>
    </article>
  );
};

const CategoryCardComingSoon = ({ category }) => {
  const { localName, note, icon, gradient, accent } = category;
  return (
    <article
      aria-label={`${localName} — coming soon`}
      style={{
        background: gradient, borderRadius: radius.lg, padding: "14px 16px",
        display: "flex", alignItems: "center", gap: 12,
        opacity: 0.42, filter: "saturate(0.25)",
        position: "relative", overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", right: -8, bottom: -8, opacity: 0.07 }}>
        <Icon name={icon} size={60} color={accent} />
      </div>
      <div style={{
        width: 44, height: 44, borderRadius: radius.md, flexShrink: 0,
        background: `${accent}15`, display: "flex", alignItems: "center", justifyContent: "center",
        border: `1px solid ${accent}20`,
      }}>
        <Icon name={icon} size={20} color={accent} strokeWidth={1.6} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h3 style={{ fontSize: typography.md, fontWeight: typography.bold, color: colors.textPrimary, margin: "0 0 3px" }}>
          {localName}
        </h3>
        {note && (
          <p style={{
            fontSize: typography.xs + 1, color: `${accent}cc`,
            margin: 0, fontWeight: typography.medium,
            overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
          }}>
            {note}
          </p>
        )}
      </div>
      <div style={{
        display: "flex", alignItems: "center", gap: 4,
        padding: "4px 9px", borderRadius: radius.full,
        background: "rgba(0,0,0,0.08)", flexShrink: 0,
      }}>
        <Lock size={9} color={colors.textTertiary} strokeWidth={2} />
        <span style={{ fontSize: typography.xs, fontWeight: typography.bold, color: colors.textTertiary }}>
          Coming Soon
        </span>
      </div>
    </article>
  );
};

export default HomeScreen;
