import { useState } from "react";
import { ChevronLeft, Search, Play, MessageCircle, Lightbulb, BookOpen, ChevronRight, Star } from "lucide-react";
import { colors, radius, typography, shadows } from "../styles/tokens";

const WHATSAPP_REPORT = "https://wa.me/6281234567890?text=Hi%2C%20I%20have%20a%20problem%20with%20Jiantie%3A%20";
const WHATSAPP_SUGGEST = "https://wa.me/6281234567890?text=Hi%2C%20I%20have%20a%20feature%20suggestion%20for%20Jiantie%3A%20";

const ARTICLES = [
  { id: "a1", title: "How to create your first invitation", category: "Getting Started", readTime: "2 min", icon: "🎉" },
  { id: "a2", title: "Understanding H5 vs Image vs Video formats", category: "Getting Started", readTime: "3 min", icon: "📋" },
  { id: "a3", title: "How to share your invitation via WhatsApp", category: "Sharing", readTime: "1 min", icon: "📤" },
  { id: "a4", title: "Tracking RSVP responses in My Works", category: "Analytics", readTime: "2 min", icon: "📊" },
  { id: "a5", title: "Upgrading to Pro — what you get", category: "Membership", readTime: "2 min", icon: "👑" },
  { id: "a6", title: "How to customize text and colors", category: "Editing", readTime: "4 min", icon: "🎨" },
];

const VIDEO_TUTORIALS = [
  { id: "v1", title: "Getting Started in 60 Seconds", thumb: "#f8e8d0", thumbFg: "#c5944a", duration: "1:02" },
  { id: "v2", title: "Creating a Wedding Invitation", thumb: "#fde2e4", thumbFg: "#c4727a", duration: "3:45" },
  { id: "v3", title: "How to Track RSVPs", thumb: "#dfe7fd", thumbFg: "#6b8cce", duration: "2:18" },
  { id: "v4", title: "Sharing to Instagram Story", thumb: "#d0f4de", thumbFg: "#457b6b", duration: "1:30" },
];

const HelpScreen = ({ onBack }) => {
  const [query, setQuery] = useState("");

  const filteredArticles = query.length >= 2
    ? ARTICLES.filter(a =>
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.category.toLowerCase().includes(query.toLowerCase())
      )
    : ARTICLES;

  return (
    <main style={{ minHeight: "100%", background: colors.bg }}>
      <header style={{
        padding: "10px 16px 12px", background: colors.surface,
        borderBottom: `1px solid ${colors.borderSubtle}`,
        display: "flex", alignItems: "center", gap: 10,
      }}>
        <button
          onClick={onBack}
          aria-label="Back"
          style={{
            width: 32, height: 32, borderRadius: radius.full, background: colors.surfaceAlt,
            border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
          }}
        >
          <ChevronLeft size={17} color={colors.textPrimary} strokeWidth={2.5} />
        </button>
        <h1 style={{ flex: 1, fontSize: typography.lg, fontWeight: typography.extrabold, color: colors.textPrimary, margin: 0 }}>
          Help & Feedback
        </h1>
      </header>

      {/* Search */}
      <div style={{ padding: "12px 16px 0" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          padding: "9px 12px", background: colors.surface,
          borderRadius: radius.md, border: `1px solid ${colors.border}`,
        }}>
          <Search size={14} color={colors.textMuted} strokeWidth={2} />
          <input
            type="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search help articles..."
            style={{
              flex: 1, border: "none", outline: "none", background: "none",
              fontSize: typography.sm + 1, color: colors.textPrimary,
              fontFamily: typography.fontSans,
            }}
          />
        </div>
      </div>

      {/* Video Tutorials (hidden when searching) */}
      {query.length < 2 && (
        <section style={{ padding: "16px 0 0" }}>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "0 16px 10px",
          }}>
            <h2 style={{ fontSize: typography.base, fontWeight: typography.bold, color: colors.textPrimary, margin: 0 }}>
              Video Tutorials
            </h2>
            <span style={{ fontSize: typography.xs + 1, color: colors.accent, fontWeight: typography.semibold, cursor: "pointer" }}>
              See All
            </span>
          </div>
          <div style={{
            display: "flex", gap: 10, overflowX: "auto", scrollbarWidth: "none",
            padding: "0 16px 4px",
          }}>
            {VIDEO_TUTORIALS.map(v => (
              <div
                key={v.id}
                style={{
                  flexShrink: 0, width: 140, cursor: "pointer",
                  borderRadius: radius.md, overflow: "hidden",
                  background: colors.surface, boxShadow: shadows.sm,
                }}
              >
                <div style={{
                  height: 80, background: v.thumb,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative",
                }}>
                  <div style={{
                    width: 30, height: 30, borderRadius: radius.full,
                    background: "rgba(0,0,0,0.35)", backdropFilter: "blur(4px)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Play size={12} color="#fff" fill="#fff" style={{ marginLeft: 2 }} />
                  </div>
                  <div style={{
                    position: "absolute", bottom: 5, right: 6,
                    background: "rgba(0,0,0,0.5)", borderRadius: 4,
                    padding: "1px 5px", fontSize: typography.xs,
                    color: "#fff", fontWeight: typography.bold,
                  }}>
                    {v.duration}
                  </div>
                </div>
                <div style={{ padding: "7px 8px 9px" }}>
                  <div style={{
                    fontSize: typography.xs + 1, fontWeight: typography.semibold,
                    color: colors.textPrimary, lineHeight: 1.35,
                    overflow: "hidden", display: "-webkit-box",
                    WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
                  }}>
                    {v.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Articles */}
      <section style={{ padding: "16px 16px 0" }}>
        <h2 style={{ fontSize: typography.base, fontWeight: typography.bold, color: colors.textPrimary, margin: "0 0 10px" }}>
          {query.length >= 2 ? `Results for "${query}"` : "Getting Started"}
        </h2>

        {filteredArticles.length === 0 ? (
          <div style={{
            padding: "24px 16px", textAlign: "center",
            background: colors.surface, borderRadius: radius.lg,
            border: `1px solid ${colors.borderSubtle}`,
          }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>🔍</div>
            <div style={{ fontSize: typography.sm + 1, color: colors.textSecondary }}>
              No articles found for "{query}"
            </div>
            <div style={{ fontSize: typography.xs + 1, color: colors.textMuted, marginTop: 4 }}>
              Try asking us directly on WhatsApp
            </div>
          </div>
        ) : (
          <div style={{
            background: colors.surface, borderRadius: radius.lg,
            border: `1px solid ${colors.border}`, overflow: "hidden",
          }}>
            {filteredArticles.map((article, i) => (
              <div
                key={article.id}
                style={{
                  display: "flex", alignItems: "center", gap: 12, padding: "12px 14px",
                  borderBottom: i < filteredArticles.length - 1 ? `1px solid ${colors.borderSubtle}` : "none",
                  cursor: "pointer",
                }}
                onMouseEnter={e => e.currentTarget.style.background = colors.surfaceAlt}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: radius.sm, flexShrink: 0,
                  background: colors.surfaceAlt,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 18,
                }}>
                  {article.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontSize: typography.sm + 1, fontWeight: typography.medium,
                    color: colors.textPrimary, marginBottom: 2,
                    overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                  }}>
                    {article.title}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{
                      fontSize: typography.xs, color: colors.accent,
                      fontWeight: typography.semibold,
                    }}>
                      {article.category}
                    </span>
                    <span style={{ fontSize: typography.xs, color: colors.textMuted }}>·</span>
                    <span style={{ fontSize: typography.xs, color: colors.textMuted }}>
                      {article.readTime} read
                    </span>
                  </div>
                </div>
                <BookOpen size={13} color={colors.textMuted} strokeWidth={1.8} />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Contact / Feedback */}
      <section style={{ padding: "16px 16px 32px", display: "flex", flexDirection: "column", gap: 10 }}>
        <h2 style={{ fontSize: typography.base, fontWeight: typography.bold, color: colors.textPrimary, margin: "0 0 2px" }}>
          Still need help?
        </h2>

        <div
          onClick={() => window.open(WHATSAPP_REPORT, "_blank", "noopener,noreferrer")}
          style={{
            display: "flex", alignItems: "center", gap: 12, padding: "13px 14px",
            background: colors.surface, borderRadius: radius.lg,
            border: `1px solid ${colors.borderSubtle}`, cursor: "pointer",
          }}
          onMouseEnter={e => e.currentTarget.style.background = colors.surfaceAlt}
          onMouseLeave={e => e.currentTarget.style.background = colors.surface}
        >
          <div style={{
            width: 38, height: 38, borderRadius: radius.md, flexShrink: 0,
            background: "#fee2e2",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <MessageCircle size={18} color="#dc2626" strokeWidth={1.8} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: typography.sm + 1, fontWeight: typography.semibold, color: colors.textPrimary }}>
              Report a Problem
            </div>
            <div style={{ fontSize: typography.xs + 1, color: colors.textMuted, marginTop: 1 }}>
              Chat with us on WhatsApp
            </div>
          </div>
          <ChevronRight size={14} color={colors.textMuted} strokeWidth={2} />
        </div>

        <div
          onClick={() => window.open(WHATSAPP_SUGGEST, "_blank", "noopener,noreferrer")}
          style={{
            display: "flex", alignItems: "center", gap: 12, padding: "13px 14px",
            background: colors.surface, borderRadius: radius.lg,
            border: `1px solid ${colors.borderSubtle}`, cursor: "pointer",
          }}
          onMouseEnter={e => e.currentTarget.style.background = colors.surfaceAlt}
          onMouseLeave={e => e.currentTarget.style.background = colors.surface}
        >
          <div style={{
            width: 38, height: 38, borderRadius: radius.md, flexShrink: 0,
            background: colors.accentSubtle,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Lightbulb size={18} color={colors.accent} strokeWidth={1.8} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: typography.sm + 1, fontWeight: typography.semibold, color: colors.textPrimary }}>
              Suggest a Feature
            </div>
            <div style={{ fontSize: typography.xs + 1, color: colors.textMuted, marginTop: 1 }}>
              Share your idea with our team
            </div>
          </div>
          <ChevronRight size={14} color={colors.textMuted} strokeWidth={2} />
        </div>

        <div style={{
          display: "flex", alignItems: "center", gap: 8, padding: "10px 14px",
          background: "#fdf6ec", borderRadius: radius.md,
          border: `1px solid ${colors.accent}20`,
        }}>
          <Star size={13} color={colors.accent} strokeWidth={2} />
          <span style={{ fontSize: typography.xs + 1, color: colors.textSecondary }}>
            Enjoying Jiantie? Leave us a rating on the App Store
          </span>
        </div>
      </section>
    </main>
  );
};

export default HelpScreen;
