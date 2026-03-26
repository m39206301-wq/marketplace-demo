import { ChevronLeft, ChevronRight, Globe, Bell, Moon, Smartphone, Shield, FileText, Cookie, Trash2, Download, Info } from "lucide-react";
import { colors, radius, typography } from "../styles/tokens";

const SettingsScreen = ({ onBack }) => (
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
        Settings
      </h1>
    </header>

    <div style={{ padding: "14px 16px 32px", display: "flex", flexDirection: "column", gap: 20 }}>
      <SettingsGroup title="Preferences" items={[
        {
          Icon: Globe, label: "Language", value: "Indonesian (ID)",
          desc: "App display language",
        },
        {
          Icon: Bell, label: "Push Notifications", value: "On",
          desc: "Template updates & promotions",
          toggle: true, toggleOn: true,
        },
        {
          Icon: Moon, label: "Dark Mode", value: "Off",
          desc: "Use dark color scheme",
          toggle: true, toggleOn: false,
        },
        {
          Icon: Smartphone, label: "Default Preview Format", value: "H5 Page",
          desc: "Preferred format on template open",
        },
      ]} />

      <SettingsGroup title="Privacy & Data" items={[
        {
          Icon: Shield, label: "Privacy Settings",
          desc: "Manage your data & visibility",
        },
        {
          Icon: Download, label: "Export My Data",
          desc: "Download a copy of your data",
        },
        {
          Icon: Trash2, label: "Delete Account",
          desc: "Permanently remove your account",
          danger: true,
        },
      ]} />

      <SettingsGroup title="Legal" items={[
        { Icon: FileText, label: "Terms of Service" },
        { Icon: Shield, label: "Privacy Policy" },
        { Icon: Cookie, label: "Cookie Policy" },
      ]} />

      <SettingsGroup title="About" items={[
        { Icon: Info, label: "App Version", value: "1.0.0", static: true },
        { Icon: Info, label: "Build", value: "2026.03.25", static: true },
      ]} />

      <div style={{ textAlign: "center", paddingTop: 4 }}>
        <span style={{ fontSize: typography.xs, color: colors.textMuted }}>
          © 2026 Jiantie Inc. All rights reserved.
        </span>
      </div>
    </div>
  </main>
);

const SettingsGroup = ({ title, items }) => (
  <div>
    <div style={{
      fontSize: typography.xs, fontWeight: typography.semibold,
      color: colors.textMuted, letterSpacing: 0.5, textTransform: "uppercase",
      marginBottom: 6, paddingLeft: 2,
    }}>
      {title}
    </div>
    <div style={{
      background: colors.surface, borderRadius: radius.lg,
      border: `1px solid ${colors.border}`, overflow: "hidden",
    }}>
      {items.map((item, i) => (
        <div
          key={item.label}
          style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "12px 16px",
            borderBottom: i < items.length - 1 ? `1px solid ${colors.borderSubtle}` : "none",
            cursor: item.static ? "default" : "pointer",
          }}
          onMouseEnter={e => { if (!item.static) e.currentTarget.style.background = colors.surfaceAlt; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
        >
          <div style={{
            width: 32, height: 32, borderRadius: radius.sm,
            background: item.danger ? "#fee2e2" : colors.surfaceAlt,
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <item.Icon size={15} color={item.danger ? colors.danger : colors.textSecondary} strokeWidth={1.8} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontSize: typography.sm + 1,
              fontWeight: typography.medium,
              color: item.danger ? colors.danger : colors.textPrimary,
            }}>
              {item.label}
            </div>
            {item.desc && (
              <div style={{ fontSize: typography.xs + 1, color: colors.textMuted, marginTop: 1 }}>
                {item.desc}
              </div>
            )}
          </div>
          {item.toggle ? (
            <div style={{
              width: 36, height: 20, borderRadius: radius.full,
              background: item.toggleOn ? colors.primary : colors.border,
              position: "relative", flexShrink: 0, transition: "background 0.2s",
            }}>
              <div style={{
                position: "absolute",
                top: 2, left: item.toggleOn ? 18 : 2,
                width: 16, height: 16, borderRadius: radius.full,
                background: "#fff", transition: "left 0.2s",
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
              }} />
            </div>
          ) : item.value && !item.static ? (
            <span style={{ fontSize: typography.xs + 1, color: colors.textTertiary, flexShrink: 0 }}>
              {item.value}
            </span>
          ) : item.value && item.static ? (
            <span style={{ fontSize: typography.xs + 1, color: colors.textTertiary, flexShrink: 0, fontFamily: "monospace" }}>
              {item.value}
            </span>
          ) : null}
          {!item.static && !item.toggle && (
            <ChevronRight size={14} color={colors.textMuted} strokeWidth={2} />
          )}
        </div>
      ))}
    </div>
  </div>
);

export default SettingsScreen;
