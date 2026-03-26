import { useState } from "react";
import { ChevronLeft, ChevronRight, Crown, Smartphone, Video, Image as ImageIcon, Eye, Share2, Download, Edit3, Trash2, CheckCircle, TrendingUp, X, BarChart2, Users, HelpCircle, Settings, Heart } from "lucide-react";
import { colors, radius, typography } from "../styles/tokens";

const MOCK_WORKS = [
  { id: "w1", name: "Pernikahan Sarah & James", format: "h5",    status: "published", views: 342,  rsvpYes: 28, rsvpNo: 4,  isPaid: true,  price: "$7.99",  palette: { bg: "#f8e8d0", fg: "#c5944a", pattern: "◇" } },
  { id: "w2", name: "Ulang Tahun Luna — 7 th",  format: "image", status: "draft",     views: 0,    rsvpYes: 0,  rsvpNo: 0,  isPaid: false, price: "Free",   palette: { bg: "#fde2e4", fg: "#c4727a", pattern: "❀" } },
  { id: "w3", name: "Kartu Lebaran 2026",        format: "image", status: "published", views: 1204, rsvpYes: 0,  rsvpNo: 0,  isPaid: false, price: "Free",   palette: { bg: "#e8f5e9", fg: "#2d6a4f", pattern: "❋" } },
  { id: "w4", name: "Undangan Wisuda Budi",      format: "video", status: "draft",     views: 0,    rsvpYes: 0,  rsvpNo: 0,  isPaid: true,  price: "$4.99",  palette: { bg: "#dfe7fd", fg: "#6b8cce", pattern: "✦" } },
  { id: "w5", name: "Aqiqah Bayi Adam",          format: "h5",    status: "published", views: 78,   rsvpYes: 12, rsvpNo: 2,  isPaid: true,  price: "$2.99",  palette: { bg: "#f3e5f5", fg: "#8e4585", pattern: "✧" } },
];

const FMT_META = {
  h5:    { label: "Flyer", color: "#2563eb", bg: "#dbeafe", Icon: Smartphone },
  video: { label: "Video", color: "#7c3aed", bg: "#ede9fe", Icon: Video },
  image: { label: "Image", color: "#059669", bg: "#d1fae5", Icon: ImageIcon },
};

const STATUS_META = {
  published: { label: "Live",  color: "#166534", bg: "#dcfce7" },
  draft:     { label: "Draft", color: "#92400e", bg: "#fef3c7" },
};

const ProfileScreen = ({
  onBack,
  onAgentClick,
  onFavoritesClick,
  onHelpClick,
  onSettingsClick,
  onWorkDataClick,
  favoritesCount = 0,
}) => {
  const [isPro, setIsPro] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  return (
    <main style={{ minHeight: "100%", background: colors.bg }}>

      {/* ── Header ── */}
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
          My Account
        </h1>
        <button
          onClick={onSettingsClick}
          aria-label="Settings"
          style={{
            width: 32, height: 32, borderRadius: radius.full, background: colors.surfaceAlt,
            border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
          }}
        >
          <Settings size={15} color={colors.textSecondary} strokeWidth={1.8} />
        </button>
      </header>

      {/* ── User Info ── */}
      <section style={{ padding: "14px 16px 0" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 12, padding: "14px 16px",
          background: colors.surface, borderRadius: radius.lg, border: `1px solid ${colors.border}`,
        }}>
          <div style={{
            width: 48, height: 48, borderRadius: radius.full,
            background: isPro ? "linear-gradient(135deg, #c5944a, #e8c170)" : colors.surfaceAlt,
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            {isPro ? <Crown size={22} color="#fff" strokeWidth={1.8} /> : <span style={{ fontSize: 20 }}>👤</span>}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: typography.base, fontWeight: typography.bold, color: colors.textPrimary }}>
              Guest User
            </div>
            <div style={{ fontSize: typography.xs + 1, color: colors.textTertiary, marginTop: 1 }}>
              Sign in to sync across devices
            </div>
          </div>
          <div style={{
            padding: "5px 12px", borderRadius: radius.full, background: colors.primary, color: "#fff",
            fontSize: typography.xs + 1, fontWeight: typography.bold, cursor: "pointer",
          }}>
            Sign In
          </div>
        </div>
      </section>

      {/* ── Membership Card ── */}
      <section style={{ padding: "10px 16px 0" }}>
        {isPro ? (
          <div style={{
            padding: "14px 16px", background: "linear-gradient(135deg, #1a1a2e, #2d2d4f)",
            borderRadius: radius.lg, display: "flex", alignItems: "center", gap: 12,
          }}>
            <Crown size={22} color="#c5944a" strokeWidth={1.8} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: typography.base, fontWeight: typography.bold, color: "#fff" }}>Pro Member</div>
              <div style={{ fontSize: typography.xs + 1, color: "rgba(255,255,255,0.5)" }}>Unlimited access · All templates free</div>
            </div>
            <div style={{
              padding: "3px 10px", borderRadius: radius.full,
              background: "rgba(197,148,74,0.2)", border: "1px solid rgba(197,148,74,0.4)",
              fontSize: typography.xs, fontWeight: typography.bold, color: "#c5944a",
            }}>
              Active
            </div>
          </div>
        ) : (
          <div
            onClick={() => setShowUpgradeModal(true)}
            style={{
              padding: "14px 16px", background: "linear-gradient(135deg, #fdf6ec, #f5e6cc)",
              borderRadius: radius.lg, cursor: "pointer", border: "1px solid #e8d4a0",
              display: "flex", alignItems: "center", gap: 12,
            }}
          >
            <Crown size={22} color={colors.accent} strokeWidth={1.8} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: typography.base, fontWeight: typography.bold, color: colors.textPrimary }}>Upgrade to Pro</div>
              <div style={{ fontSize: typography.xs + 1, color: colors.textSecondary }}>Unlock all templates · No per-work fees</div>
            </div>
            <ChevronRight size={16} color={colors.accent} strokeWidth={2.5} />
          </div>
        )}
      </section>

      {/* ── Quick Access Row ── */}
      <section style={{ padding: "12px 16px 0" }}>
        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={onFavoritesClick}
            style={{
              flex: 1, display: "flex", alignItems: "center", gap: 8,
              padding: "12px 14px", background: colors.surface, borderRadius: radius.lg,
              border: `1px solid ${colors.borderSubtle}`, cursor: "pointer",
              fontFamily: typography.fontSans,
            }}
          >
            <div style={{
              width: 32, height: 32, borderRadius: radius.sm,
              background: "#fde2e4", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <Heart size={14} color="#e74c3c" strokeWidth={2} />
            </div>
            <div style={{ flex: 1, textAlign: "left" }}>
              <div style={{ fontSize: typography.xs + 1, fontWeight: typography.bold, color: colors.textPrimary }}>
                Favorites
              </div>
              <div style={{ fontSize: typography.xs, color: colors.textMuted }}>
                {favoritesCount} saved
              </div>
            </div>
            <ChevronRight size={13} color={colors.textMuted} strokeWidth={2} />
          </button>

          <button
            onClick={onHelpClick}
            style={{
              flex: 1, display: "flex", alignItems: "center", gap: 8,
              padding: "12px 14px", background: colors.surface, borderRadius: radius.lg,
              border: `1px solid ${colors.borderSubtle}`, cursor: "pointer",
              fontFamily: typography.fontSans,
            }}
          >
            <div style={{
              width: 32, height: 32, borderRadius: radius.sm,
              background: colors.accentSubtle, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <HelpCircle size={14} color={colors.accent} strokeWidth={2} />
            </div>
            <div style={{ flex: 1, textAlign: "left" }}>
              <div style={{ fontSize: typography.xs + 1, fontWeight: typography.bold, color: colors.textPrimary }}>
                Help
              </div>
              <div style={{ fontSize: typography.xs, color: colors.textMuted }}>
                & Feedback
              </div>
            </div>
            <ChevronRight size={13} color={colors.textMuted} strokeWidth={2} />
          </button>
        </div>
      </section>

      {/* ── My Works ── */}
      <section style={{ padding: "14px 16px 0" }}>
        <div style={{
          fontSize: typography.xs, fontWeight: typography.semibold,
          color: colors.textMuted, letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 8,
        }}>
          My Works
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {MOCK_WORKS.map(work => (
            <WorkCard
              key={work.id}
              work={work}
              isPro={isPro}
              onWorkDataClick={onWorkDataClick}
            />
          ))}
        </div>
      </section>

      {/* ── Agent CTA ── */}
      <div
        onClick={onAgentClick}
        style={{
          margin: "12px 16px 28px", padding: "12px 16px",
          background: "linear-gradient(135deg, #1a1a2e, #2d2d4f)",
          borderRadius: radius.lg, cursor: "pointer",
          display: "flex", alignItems: "center", gap: 10,
        }}
      >
        <TrendingUp size={18} color="#c5944a" strokeWidth={1.8} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: typography.sm + 1, fontWeight: typography.bold, color: "#fff" }}>
            Become an Agent · Earn Now
          </div>
          <div style={{ fontSize: typography.xs + 1, color: "rgba(255,255,255,0.45)" }}>
            Up to 30% commission per sale
          </div>
        </div>
        <ChevronRight size={14} color="rgba(255,255,255,0.35)" strokeWidth={2.5} />
      </div>

      {/* ── Upgrade Modal ── */}
      {showUpgradeModal && (
        <UpgradeModal
          onClose={() => setShowUpgradeModal(false)}
          onUpgrade={() => { setIsPro(true); setShowUpgradeModal(false); }}
        />
      )}
    </main>
  );
};

// ── Work card ──
const WorkCard = ({ work, isPro, onWorkDataClick }) => {
  const fmt = FMT_META[work.format] || FMT_META.image;
  const st = STATUS_META[work.status] || STATUS_META.draft;
  const showPaid = !isPro && work.isPaid;
  const isFlyer = work.format === "h5";

  return (
    <div style={{
      background: colors.surface, borderRadius: radius.lg,
      border: `1px solid ${colors.borderSubtle}`, overflow: "hidden",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 14px" }}>
        {/* Thumbnail */}
        <div style={{
          width: 44, height: 52, borderRadius: radius.sm, flexShrink: 0,
          background: work.palette.bg, display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative", overflow: "hidden", border: `1px solid ${work.palette.fg}18`,
        }}>
          <div style={{
            position: "absolute", inset: 0, opacity: 0.06,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20, color: work.palette.fg,
          }}>
            {work.palette.pattern}
          </div>
          <div style={{
            width: 20, height: 26, border: `1px solid ${work.palette.fg}40`,
            borderRadius: 3, background: `${work.palette.bg}cc`, zIndex: 1,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontSize: 4, color: work.palette.fg, fontFamily: "'Playfair Display', serif", opacity: 0.6 }}>♡</span>
          </div>
          {/* Unpaid corner badge */}
          {showPaid && (
            <div style={{
              position: "absolute", top: 0, right: 0, zIndex: 2,
              background: "#dc2626",
              borderRadius: "0 3px 0 5px",
              padding: "2px 4px",
              fontSize: 6, fontWeight: 700, color: "#fff",
              letterSpacing: 0.3, lineHeight: 1.2,
            }}>
              Unpaid
            </div>
          )}
        </div>

        {/* Info */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: typography.sm + 1, fontWeight: typography.semibold, color: colors.textPrimary,
            overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginBottom: 4,
          }}>
            {work.name}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5, flexWrap: "wrap" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 2,
              padding: "1px 6px", borderRadius: 4, fontSize: typography.xs,
              fontWeight: typography.bold, color: fmt.color, background: fmt.bg,
            }}>
              <fmt.Icon size={8} color={fmt.color} strokeWidth={2.5} />
              {fmt.label}
            </span>
            <span style={{
              padding: "1px 6px", borderRadius: 4, fontSize: typography.xs,
              fontWeight: typography.bold, color: st.color, background: st.bg,
            }}>
              {st.label}
            </span>
            {showPaid && (
              <span style={{
                padding: "1px 6px", borderRadius: 4, fontSize: typography.xs,
                fontWeight: typography.bold, color: colors.accent, background: "#fdf6ec",
                border: `1px solid ${colors.accent}30`,
              }}>
                {work.price}
              </span>
            )}
            {isPro && work.isPaid && (
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 2,
                padding: "1px 6px", borderRadius: 4, fontSize: typography.xs,
                fontWeight: typography.bold, color: "#166534", background: "#dcfce7",
              }}>
                <CheckCircle size={8} color="#166534" strokeWidth={2.5} /> Pro
              </span>
            )}
          </div>
        </div>

        {work.status === "published" && (
          <div style={{ flexShrink: 0, textAlign: "right" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Eye size={9} color={colors.textMuted} strokeWidth={2} />
              <span style={{ fontSize: typography.xs, fontWeight: typography.semibold, color: colors.textSecondary }}>
                {work.views.toLocaleString()}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Quick actions — format-aware */}
      <div style={{ display: "flex", borderTop: `1px solid ${colors.borderSubtle}` }}>
        <ActionBtn Icon={Edit3} label="Edit" />

        {isFlyer ? (
          <>
            {work.status === "published" && (
              <ActionBtn
                Icon={BarChart2}
                label="Data"
                primary
                onClick={() => onWorkDataClick && onWorkDataClick(work)}
              />
            )}
            <ActionBtn Icon={Share2} label="Share" accent />
          </>
        ) : (
          <ActionBtn Icon={Download} label="Download" accent />
        )}

        <ActionBtn Icon={Trash2} label="Delete" danger />
      </div>
    </div>
  );
};

const ActionBtn = ({ Icon, label, primary, accent, danger, onClick }) => {
  const Ic = Icon;
  return (
    <button
      onClick={onClick}
      style={{
        flex: 1, padding: "8px 0", background: "none",
        border: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
        cursor: "pointer", fontFamily: typography.fontSans,
      }}
    >
      <Ic
        size={13}
        color={accent ? colors.primary : primary ? colors.accent : danger ? colors.danger : colors.textMuted}
        strokeWidth={2}
      />
      <span style={{
        fontSize: typography.xs,
        color: accent ? colors.primary : primary ? colors.accent : danger ? colors.danger : colors.textMuted,
        fontWeight: accent || primary ? typography.bold : typography.medium,
      }}>
        {label}
      </span>
    </button>
  );
};

// ── Upgrade Modal ──
const UpgradeModal = ({ onClose, onUpgrade }) => (
  <div
    style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 100, display: "flex", alignItems: "flex-end", justifyContent: "center" }}
    onClick={onClose}
  >
    <div
      onClick={e => e.stopPropagation()}
      style={{ width: 390, background: colors.surface, borderRadius: "20px 20px 0 0", padding: "0 0 36px" }}
    >
      <div style={{ width: 36, height: 4, borderRadius: 2, background: colors.border, margin: "14px auto 0" }} />

      <div style={{ padding: "16px 20px 0", display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <Crown size={20} color={colors.accent} strokeWidth={1.8} />
            <span style={{ fontSize: typography.lg, fontWeight: typography.extrabold, color: colors.textPrimary }}>
              Upgrade to Pro
            </span>
          </div>
          <p style={{ fontSize: typography.sm, color: colors.textTertiary, margin: 0 }}>
            Unlimited templates, no per-work fees
          </p>
        </div>
        <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
          <X size={18} color={colors.textMuted} strokeWidth={2} />
        </button>
      </div>

      <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: 10 }}>
        {[
          { name: "Monthly", price: "$9.99/mo",  desc: "Cancel anytime",       recommended: false },
          { name: "Yearly",  price: "$59.99/yr", desc: "Save 50% · Best value", recommended: true  },
        ].map(plan => (
          <div
            key={plan.name}
            onClick={onUpgrade}
            style={{
              padding: "14px 16px", borderRadius: radius.lg, cursor: "pointer",
              background: plan.recommended ? "linear-gradient(135deg, #fdf6ec, #f5e6cc)" : colors.surfaceAlt,
              border: plan.recommended ? `1.5px solid ${colors.accent}` : `1px solid ${colors.border}`,
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: typography.base, fontWeight: typography.bold, color: colors.textPrimary }}>{plan.name}</span>
                {plan.recommended && (
                  <span style={{ fontSize: 9, padding: "1px 6px", background: colors.accent, color: "#fff", borderRadius: 4, fontWeight: typography.bold }}>
                    BEST VALUE
                  </span>
                )}
              </div>
              <div style={{ fontSize: typography.xs + 1, color: colors.textTertiary, marginTop: 2 }}>{plan.desc}</div>
            </div>
            <span style={{ fontSize: typography.lg, fontWeight: typography.extrabold, color: colors.accent }}>{plan.price}</span>
          </div>
        ))}
      </div>

      <div style={{ padding: "0 20px" }}>
        <div style={{
          padding: "13px", borderRadius: radius.lg, background: colors.primary,
          color: "#fff", textAlign: "center", fontSize: typography.md,
          fontWeight: typography.bold, cursor: "pointer",
        }} onClick={onUpgrade}>
          Start Free 7-Day Trial
        </div>
        <p style={{ fontSize: typography.xs, color: colors.textMuted, textAlign: "center", margin: "8px 0 0" }}>
          Auto-renews · Cancel anytime · No hidden fees
        </p>
      </div>
    </div>
  </div>
);

export default ProfileScreen;
