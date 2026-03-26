import { ChevronLeft, Eye, Users, Share2, TrendingUp, MessageCircle, Link, Instagram } from "lucide-react";
import { colors, radius, typography, shadows } from "../styles/tokens";

const MOCK_RSVP_LIST = [
  { name: "Budi Santoso", status: "yes", time: "2h ago", via: "WhatsApp" },
  { name: "Siti Rahayu",  status: "yes", time: "5h ago", via: "Direct" },
  { name: "Ahmad Fauzi",  status: "no",  time: "1d ago", via: "Instagram" },
  { name: "Dewi Lestari", status: "yes", time: "1d ago", via: "WhatsApp" },
  { name: "Rini Suryani", status: "yes", time: "2d ago", via: "Direct" },
  { name: "Hendra Putra", status: "no",  time: "3d ago", via: "WhatsApp" },
];

const DAILY_VIEWS = [12, 34, 28, 45, 67, 52, 48, 78, 91, 63, 55, 82, 104, 88];

const TRAFFIC_SOURCES = [
  { label: "WhatsApp", value: 52, color: "#25d366", Icon: MessageCircle },
  { label: "Direct Link", value: 31, color: colors.primary, Icon: Link },
  { label: "Instagram", value: 17, color: "#e1306c", Icon: Instagram },
];

const WorkDataScreen = ({ work, onBack }) => {
  if (!work) return null;

  const maxViews = Math.max(...DAILY_VIEWS);
  const yesCount = MOCK_RSVP_LIST.filter(r => r.status === "yes").length;
  const noCount = MOCK_RSVP_LIST.filter(r => r.status === "no").length;

  return (
    <main style={{ minHeight: "100%", background: colors.bg }}>
      <header style={{
        padding: "10px 16px 12px", background: colors.surface,
        borderBottom: `1px solid ${colors.borderSubtle}`,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
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
          <div style={{ flex: 1, minWidth: 0 }}>
            <h1 style={{
              fontSize: typography.base, fontWeight: typography.extrabold,
              color: colors.textPrimary, margin: 0,
              overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
            }}>
              {work.name}
            </h1>
            <div style={{ fontSize: typography.xs + 1, color: colors.textMuted, marginTop: 1 }}>
              Analytics · Last 14 days
            </div>
          </div>
        </div>
      </header>

      <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 14 }}>

        {/* Key metrics */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            { label: "Total Views",    value: work.views.toLocaleString(), icon: Eye,      color: colors.primary,  bg: "#eff6ff" },
            { label: "Unique Visitors", value: Math.floor(work.views * 0.73).toLocaleString(), icon: Users, color: "#7c3aed", bg: "#f5f3ff" },
            { label: "RSVP: Yes",      value: String(work.rsvpYes),        icon: Users,    color: "#16a34a", bg: "#f0fdf4" },
            { label: "RSVP: No",       value: String(work.rsvpNo),          icon: Users,    color: "#dc2626", bg: "#fef2f2" },
          ].map(m => (
            <div key={m.label} style={{
              padding: "14px 14px",
              background: colors.surface, borderRadius: radius.lg,
              border: `1px solid ${colors.borderSubtle}`,
              boxShadow: shadows.sm,
            }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 6, marginBottom: 8,
              }}>
                <div style={{
                  width: 26, height: 26, borderRadius: radius.sm,
                  background: m.bg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <m.icon size={13} color={m.color} strokeWidth={2} />
                </div>
                <span style={{ fontSize: typography.xs + 1, color: colors.textMuted, fontWeight: typography.medium }}>
                  {m.label}
                </span>
              </div>
              <div style={{ fontSize: typography.xl + 2, fontWeight: typography.extrabold, color: m.color }}>
                {m.value}
              </div>
            </div>
          ))}
        </div>

        {/* View trend chart */}
        <div style={{
          background: colors.surface, borderRadius: radius.lg,
          border: `1px solid ${colors.borderSubtle}`, padding: "14px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 14 }}>
            <TrendingUp size={14} color={colors.primary} strokeWidth={2} />
            <span style={{ fontSize: typography.sm + 1, fontWeight: typography.bold, color: colors.textPrimary }}>
              Daily Views (last 14 days)
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 60 }}>
            {DAILY_VIEWS.map((v, i) => (
              <div key={i} style={{
                flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
              }}>
                <div
                  title={`Day ${i + 1}: ${v} views`}
                  style={{
                    width: "100%", height: Math.round((v / maxViews) * 52),
                    background: i === DAILY_VIEWS.length - 1
                      ? colors.primary
                      : `${colors.primary}55`,
                    borderRadius: "2px 2px 0 0",
                    minHeight: 3,
                  }}
                />
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
            <span style={{ fontSize: typography.xs, color: colors.textMuted }}>14d ago</span>
            <span style={{ fontSize: typography.xs, color: colors.textMuted }}>Today</span>
          </div>
        </div>

        {/* Traffic sources */}
        <div style={{
          background: colors.surface, borderRadius: radius.lg,
          border: `1px solid ${colors.borderSubtle}`, padding: "14px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 14 }}>
            <Share2 size={14} color={colors.primary} strokeWidth={2} />
            <span style={{ fontSize: typography.sm + 1, fontWeight: typography.bold, color: colors.textPrimary }}>
              Traffic Sources
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {TRAFFIC_SOURCES.map(src => (
              <div key={src.label}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <src.Icon size={12} color={src.color} strokeWidth={2} />
                    <span style={{ fontSize: typography.xs + 1, fontWeight: typography.medium, color: colors.textPrimary }}>
                      {src.label}
                    </span>
                  </div>
                  <span style={{ fontSize: typography.xs + 1, fontWeight: typography.bold, color: src.color }}>
                    {src.value}%
                  </span>
                </div>
                <div style={{ height: 6, background: colors.surfaceAlt, borderRadius: radius.full, overflow: "hidden" }}>
                  <div style={{
                    height: "100%", width: `${src.value}%`,
                    background: src.color, borderRadius: radius.full,
                    transition: "width 0.6s ease",
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RSVP list */}
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Users size={14} color={colors.primary} strokeWidth={2} />
              <span style={{ fontSize: typography.sm + 1, fontWeight: typography.bold, color: colors.textPrimary }}>
                RSVP Responses
              </span>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <span style={{
                padding: "2px 8px", borderRadius: radius.full,
                background: "#f0fdf4", fontSize: typography.xs + 1,
                fontWeight: typography.bold, color: "#16a34a",
              }}>
                ✓ {yesCount} Yes
              </span>
              <span style={{
                padding: "2px 8px", borderRadius: radius.full,
                background: "#fef2f2", fontSize: typography.xs + 1,
                fontWeight: typography.bold, color: "#dc2626",
              }}>
                ✕ {noCount} No
              </span>
            </div>
          </div>
          <div style={{
            background: colors.surface, borderRadius: radius.lg,
            border: `1px solid ${colors.borderSubtle}`, overflow: "hidden",
          }}>
            {MOCK_RSVP_LIST.map((r, i) => (
              <div
                key={i}
                style={{
                  display: "flex", alignItems: "center", gap: 12, padding: "10px 14px",
                  borderBottom: i < MOCK_RSVP_LIST.length - 1 ? `1px solid ${colors.borderSubtle}` : "none",
                }}
              >
                <div style={{
                  width: 32, height: 32, borderRadius: radius.full, flexShrink: 0,
                  background: r.status === "yes" ? "#f0fdf4" : "#fef2f2",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14,
                }}>
                  {r.status === "yes" ? "✓" : "✕"}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: typography.sm + 1, fontWeight: typography.semibold, color: colors.textPrimary }}>
                    {r.name}
                  </div>
                  <div style={{ fontSize: typography.xs + 1, color: colors.textMuted }}>
                    via {r.via} · {r.time}
                  </div>
                </div>
                <span style={{
                  padding: "2px 8px", borderRadius: radius.full, flexShrink: 0,
                  fontSize: typography.xs, fontWeight: typography.bold,
                  color: r.status === "yes" ? "#16a34a" : "#dc2626",
                  background: r.status === "yes" ? "#f0fdf4" : "#fef2f2",
                }}>
                  {r.status === "yes" ? "Attending" : "Can't Attend"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: 8 }} />
      </div>
    </main>
  );
};

export default WorkDataScreen;
