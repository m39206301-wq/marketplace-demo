import { useState } from "react";
import { ChevronLeft, TrendingUp, DollarSign, Users, Zap, CheckCircle, MessageCircle, ChevronRight, ChevronDown } from "lucide-react";
import { colors, radius, typography } from "../styles/tokens";

const WHATSAPP_URL = "https://wa.me/6281234567890?text=Hi%2C%20I%20want%20to%20become%20a%20Jiantie%20Agent!";

const BENEFITS = [
  {
    icon: DollarSign, color: "#16a34a", bg: "#dcfce7",
    title: "Up to 30% Commission",
    desc: "Earn from every sale you refer. No cap, no ceiling.",
  },
  {
    icon: Zap, color: "#7c3aed", bg: "#ede9fe",
    title: "Start in 5 Minutes",
    desc: "No upfront investment. Get your unique referral link instantly.",
  },
  {
    icon: Users, color: "#2563eb", bg: "#dbeafe",
    title: "Dedicated Support",
    desc: "Personal agent manager, marketing materials, real-time dashboard.",
  },
  {
    icon: TrendingUp, color: "#c5944a", bg: "#fdf6ec",
    title: "Growing Market",
    desc: "Tap into Indonesia's booming digital invitation market — millions of events each year.",
  },
];

const HOW_IT_WORKS = [
  { step: "1", title: "Register via WhatsApp", desc: "Chat with our team, get approved in 24 hours." },
  { step: "2", title: "Get Your Referral Link", desc: "Share it on WhatsApp, Instagram, TikTok, or anywhere." },
  { step: "3", title: "Your Audience Buys", desc: "Every time someone buys through your link, you earn." },
  { step: "4", title: "Withdraw Monthly", desc: "Bank transfer or e-wallet, every month on time." },
];

const FAQ_ITEMS = [
  { q: "Is there a registration fee?", a: "No. Joining the agent program is completely free. We don't take any upfront fees or deposits." },
  { q: "When do I get paid?", a: "Commissions are paid monthly, via bank transfer or GoPay/OVO. Minimum withdrawal is Rp 100.000." },
  { q: "How do I track my earnings?", a: "You'll get access to a real-time dashboard showing clicks, conversions, and earnings — updated live." },
  { q: "What if my referral doesn't convert immediately?", a: "Your referral cookie lasts 30 days. If they purchase within 30 days of clicking your link, you earn the commission." },
  { q: "Can I be an agent and a user at the same time?", a: "Absolutely! Many of our agents use Jiantie themselves. You'll even get a Pro discount as an active agent." },
];

const AgentScreen = ({ onBack }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const handleWhatsApp = () => {
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <main style={{ minHeight: "100%", background: colors.bg, paddingBottom: 100 }}>

      {/* ── Hero ── */}
      <div style={{
        background: "linear-gradient(160deg, #1a1a2e 0%, #2d2d4f 60%, #3d2d1a 100%)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -20, right: -20, opacity: 0.06 }}>
          <TrendingUp size={160} color="#c5944a" />
        </div>
        <div style={{ position: "absolute", bottom: -30, left: -10, opacity: 0.04 }}>
          <DollarSign size={120} color="#fff" />
        </div>

        <div style={{ padding: "10px 16px 0" }}>
          <button
            onClick={onBack}
            aria-label="Back"
            style={{
              width: 32, height: 32, borderRadius: radius.full,
              background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
            }}
          >
            <ChevronLeft size={17} color="#fff" strokeWidth={2.5} />
          </button>
        </div>

        <div style={{ padding: "14px 20px 28px", position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "4px 12px", borderRadius: radius.full,
            background: "rgba(197,148,74,0.2)", border: "1px solid rgba(197,148,74,0.35)",
            marginBottom: 10,
          }}>
            <TrendingUp size={11} color="#c5944a" strokeWidth={2} />
            <span style={{ fontSize: typography.xs, fontWeight: typography.bold, color: "#c5944a", letterSpacing: 0.5 }}>
              AGENT PROGRAM
            </span>
          </div>

          <h1 style={{
            fontSize: 24, fontWeight: typography.extrabold, color: "#fff",
            lineHeight: 1.2, margin: "0 0 8px", letterSpacing: -0.5,
          }}>
            Become an Agent.{"\n"}
            <span style={{ color: "#c5944a" }}>Earn Real Money.</span>
          </h1>

          <p style={{ fontSize: typography.sm + 1, color: "rgba(255,255,255,0.6)", margin: "0 0 18px", lineHeight: 1.5 }}>
            Share Jiantie templates, earn up to 30% commission on every sale. No investment needed.
          </p>

          <div style={{ display: "flex", gap: 10 }}>
            {[
              { value: "30%", label: "Commission" },
              { value: "24h", label: "Approval" },
              { value: "5K+", label: "Active Agents" },
            ].map(stat => (
              <div
                key={stat.label}
                style={{
                  flex: 1, padding: "10px 8px", textAlign: "center",
                  background: "rgba(255,255,255,0.07)", borderRadius: radius.md,
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div style={{ fontSize: typography.lg, fontWeight: typography.extrabold, color: "#c5944a" }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: typography.xs, color: "rgba(255,255,255,0.45)", marginTop: 1 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Benefits ── */}
      <section style={{ padding: "16px 16px 4px" }}>
        <h2 style={{ fontSize: typography.base, fontWeight: typography.bold, color: colors.textPrimary, margin: "0 0 10px" }}>
          Why Join Us?
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {BENEFITS.map(b => (
            <div
              key={b.title}
              style={{
                display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 14px",
                background: colors.surface, borderRadius: radius.lg,
                border: `1px solid ${colors.borderSubtle}`,
              }}
            >
              <div style={{
                width: 38, height: 38, borderRadius: radius.md, flexShrink: 0,
                background: b.bg, display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <b.icon size={18} color={b.color} strokeWidth={1.8} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: typography.sm + 1, fontWeight: typography.bold, color: colors.textPrimary, marginBottom: 2 }}>
                  {b.title}
                </div>
                <div style={{ fontSize: typography.xs + 1, color: colors.textSecondary, lineHeight: 1.5 }}>
                  {b.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section style={{ padding: "14px 16px 4px" }}>
        <h2 style={{ fontSize: typography.base, fontWeight: typography.bold, color: colors.textPrimary, margin: "0 0 10px" }}>
          How It Works
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {HOW_IT_WORKS.map((step, i) => (
            <div key={step.step} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 32, flexShrink: 0 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: radius.full,
                  background: "linear-gradient(135deg, #1a1a2e, #2d2d4f)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <span style={{ fontSize: typography.xs + 1, fontWeight: typography.extrabold, color: "#c5944a" }}>
                    {step.step}
                  </span>
                </div>
                {i < HOW_IT_WORKS.length - 1 && (
                  <div style={{ width: 1, height: 24, background: colors.border, margin: "3px 0" }} />
                )}
              </div>
              <div style={{ flex: 1, paddingBottom: 0 }}>
                <div style={{ fontSize: typography.sm + 1, fontWeight: typography.bold, color: colors.textPrimary, marginBottom: 2, paddingTop: 4 }}>
                  {step.title}
                </div>
                <div style={{ fontSize: typography.xs + 1, color: colors.textSecondary, lineHeight: 1.5, marginBottom: i < HOW_IT_WORKS.length - 1 ? 6 : 0 }}>
                  {step.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ — Accordion ── */}
      <section style={{ padding: "14px 16px 8px" }}>
        <h2 style={{ fontSize: typography.base, fontWeight: typography.bold, color: colors.textPrimary, margin: "0 0 10px" }}>
          Frequently Asked
        </h2>
        <div style={{
          background: colors.surface, borderRadius: radius.lg,
          border: `1px solid ${colors.borderSubtle}`, overflow: "hidden",
        }}>
          {FAQ_ITEMS.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} style={{ borderBottom: i < FAQ_ITEMS.length - 1 ? `1px solid ${colors.borderSubtle}` : "none" }}>
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  style={{
                    width: "100%", display: "flex", alignItems: "center", gap: 10,
                    padding: "13px 14px", background: "none", border: "none",
                    cursor: "pointer", textAlign: "left", fontFamily: typography.fontSans,
                  }}
                >
                  <CheckCircle size={13} color={colors.accent} strokeWidth={2} style={{ flexShrink: 0 }} />
                  <span style={{
                    flex: 1, fontSize: typography.sm + 1, fontWeight: typography.semibold,
                    color: colors.textPrimary,
                  }}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={14} color={colors.textMuted} strokeWidth={2}
                    style={{ flexShrink: 0, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
                  />
                </button>
                {isOpen && (
                  <div style={{
                    padding: "0 14px 13px 37px",
                    fontSize: typography.xs + 1, color: colors.textSecondary, lineHeight: 1.6,
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Sticky WhatsApp CTA ── fixed inside phone frame via transform on parent ── */}
      <div style={{
        position: "sticky",
        bottom: 0,
        background: "linear-gradient(to top, rgba(250,248,245,1) 60%, rgba(250,248,245,0))",
        padding: "16px 16px 20px",
        zIndex: 40,
      }}>
        <button
          onClick={handleWhatsApp}
          aria-label="Join agent program via WhatsApp"
          style={{
            width: "100%", padding: "15px 20px",
            background: "#25d366",
            borderRadius: radius.xl,
            border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
            fontFamily: typography.fontSans,
          }}
        >
          <MessageCircle size={20} color="#fff" strokeWidth={2} fill="#fff" />
          <span style={{ fontSize: typography.md, fontWeight: typography.extrabold, color: "#fff" }}>
            Join Now via WhatsApp
          </span>
          <ChevronRight size={16} color="rgba(255,255,255,0.7)" strokeWidth={2.5} />
        </button>
        <p style={{
          textAlign: "center", fontSize: typography.xs,
          color: colors.textMuted, margin: "6px 0 0",
        }}>
          Free to join · Approved within 24 hours
        </p>
      </div>
    </main>
  );
};

export default AgentScreen;
