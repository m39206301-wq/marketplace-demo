import { colors, radius, typography } from "../styles/tokens";
import { useResponsive } from "../hooks/useResponsive";
import { CATEGORIES } from "../data/categories";
import { Search, Heart, HelpCircle, TrendingUp, ChevronRight, User } from "lucide-react";
import Icon from "./ui/Icon";

const AppShell = ({
  children,
  containerRef,
  currentScreen,
  // Desktop sidebar props
  onCategoryClick,
  onProfileClick,
  onFavoritesClick,
  onHelpClick,
  onAgentClick,
  favoritesCount,
  activeCategory,
}) => {
  const { isDesktop } = useResponsive();

  if (isDesktop) {
    return (
      <DesktopLayout
        currentScreen={currentScreen}
        onCategoryClick={onCategoryClick}
        onProfileClick={onProfileClick}
        onFavoritesClick={onFavoritesClick}
        onHelpClick={onHelpClick}
        onAgentClick={onAgentClick}
        favoritesCount={favoritesCount}
        activeCategory={activeCategory}
        containerRef={containerRef}
      >
        {children}
      </DesktopLayout>
    );
  }

  return <MobilePhoneFrame currentScreen={currentScreen} containerRef={containerRef}>{children}</MobilePhoneFrame>;
};

// ── Mobile phone frame ──
const MobilePhoneFrame = ({ children, containerRef, currentScreen }) => (
  <div style={{
    display: "flex", justifyContent: "center", alignItems: "center",
    minHeight: "100vh", background: "#1a1a2e", padding: 20,
    fontFamily: typography.fontSans,
  }}>
    <div style={{
      width: 390, height: 844, background: colors.bg, borderRadius: 40,
      overflow: "hidden", position: "relative",
      boxShadow: "0 20px 60px rgba(0,0,0,0.4), 0 0 0 8px #2d2d3f, 0 0 0 10px #3d3d4f",
      // transform creates a new containing block for position:fixed children
      transform: "translateZ(0)",
    }}>
      <StatusBar screen={currentScreen} />

      <div
        ref={containerRef}
        style={{
          height: "calc(100% - 44px)",
          overflowY: "auto", overflowX: "hidden",
          scrollbarWidth: "none",
        }}
      >
        {children}
      </div>

      {/* Home indicator */}
      <div style={{
        position: "absolute", bottom: 5, left: "50%", transform: "translateX(-50%)",
        width: 134, height: 5, background: colors.primary, borderRadius: 3, opacity: 0.2,
      }} />
    </div>
  </div>
);

// ── Desktop layout ──
const DesktopLayout = ({
  children,
  containerRef,
  currentScreen,
  onCategoryClick,
  onProfileClick,
  onFavoritesClick,
  onHelpClick,
  onAgentClick,
  favoritesCount,
  activeCategory,
}) => {
  const activeCategories = CATEGORIES.filter(c => !c.comingSoon);

  return (
    <div style={{
      display: "flex", height: "100vh", background: colors.bg,
      fontFamily: typography.fontSans,
    }}>
      {/* ── Left Sidebar ── */}
      <aside style={{
        width: 248, flexShrink: 0,
        background: colors.surface,
        borderRight: `1px solid ${colors.border}`,
        display: "flex", flexDirection: "column",
        overflow: "hidden",
      }}>
        {/* Logo */}
        <div style={{ padding: "20px 20px 14px", borderBottom: `1px solid ${colors.borderSubtle}` }}>
          <div style={{
            fontSize: 22, fontWeight: typography.extrabold, color: colors.textPrimary,
            letterSpacing: -0.5, fontFamily: typography.fontSerif, marginBottom: 2,
          }}>
            Jiantie
          </div>
          <div style={{ fontSize: typography.xs + 1, color: colors.textMuted, fontWeight: typography.medium }}>
            Beautiful moments, meaningful designs
          </div>
        </div>

        {/* Categories nav */}
        <nav aria-label="Categories" style={{ flex: 1, overflowY: "auto", padding: "10px 0" }}>
          <div style={{
            fontSize: typography.xs, fontWeight: typography.semibold, color: colors.textMuted,
            letterSpacing: 0.5, textTransform: "uppercase",
            padding: "4px 20px 8px",
          }}>
            Categories
          </div>
          {activeCategories.map(cat => {
            const isActive = activeCategory?.id === cat.id && (currentScreen === "category" || currentScreen === "preview");
            return (
              <button
                key={cat.id}
                onClick={() => onCategoryClick && onCategoryClick(cat)}
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "9px 20px", width: "100%",
                  background: isActive ? `${cat.accent}12` : "none",
                  border: "none", borderLeft: isActive ? `3px solid ${cat.accent}` : "3px solid transparent",
                  cursor: "pointer", textAlign: "left", fontFamily: typography.fontSans,
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = colors.surfaceAlt; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = "none"; }}
              >
                <Icon name={cat.icon} size={15} color={isActive ? cat.accent : colors.textSecondary} strokeWidth={1.6} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontSize: typography.sm + 1,
                    fontWeight: isActive ? typography.bold : typography.medium,
                    color: isActive ? cat.accent : colors.textPrimary,
                    overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                  }}>
                    {cat.localName}
                  </div>
                </div>
                <span style={{
                  fontSize: typography.xs, color: isActive ? cat.accent : colors.textMuted,
                  fontWeight: typography.semibold,
                }}>
                  {cat.count >= 1000 ? `${(cat.count / 1000).toFixed(1)}k` : cat.count}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Bottom shortcuts */}
        <div style={{ borderTop: `1px solid ${colors.borderSubtle}`, padding: "10px 0 16px" }}>
          {[
            { label: "Favorites", sublabel: `${favoritesCount || 0} saved`, Icon: Heart, color: "#e74c3c", bg: "#fde2e4", onClick: onFavoritesClick },
            { label: "Help & Feedback", sublabel: "Tutorials & support", Icon: HelpCircle, color: colors.accent, bg: colors.accentSubtle, onClick: onHelpClick },
            { label: "Become Agent", sublabel: "Earn 30% commission", Icon: TrendingUp, color: "#c5944a", bg: "#fdf6ec", onClick: onAgentClick },
          ].map(item => (
            <button
              key={item.label}
              onClick={item.onClick}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "8px 20px", width: "100%",
                background: "none", border: "none", cursor: "pointer",
                textAlign: "left", fontFamily: typography.fontSans,
              }}
              onMouseEnter={e => e.currentTarget.style.background = colors.surfaceAlt}
              onMouseLeave={e => e.currentTarget.style.background = "none"}
            >
              <div style={{
                width: 30, height: 30, borderRadius: radius.sm, flexShrink: 0,
                background: item.bg, display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <item.Icon size={14} color={item.color} strokeWidth={1.8} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: typography.xs + 1, fontWeight: typography.semibold, color: colors.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {item.label}
                </div>
                <div style={{ fontSize: typography.xs, color: colors.textMuted }}>{item.sublabel}</div>
              </div>
              <ChevronRight size={12} color={colors.textMuted} strokeWidth={2} />
            </button>
          ))}
        </div>
      </aside>

      {/* ── Main Content ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Top nav bar */}
        <header style={{
          height: 56, flexShrink: 0,
          background: colors.surface, borderBottom: `1px solid ${colors.border}`,
          display: "flex", alignItems: "center", gap: 16, padding: "0 24px",
        }}>
          <div style={{
            flex: 1, display: "flex", alignItems: "center", gap: 8,
            padding: "7px 12px", background: colors.surfaceAlt,
            borderRadius: radius.md, border: `1px solid ${colors.border}`,
            maxWidth: 480,
          }}>
            <Search size={14} color={colors.textMuted} strokeWidth={2} />
            <input
              type="search"
              placeholder="Search templates, occasions..."
              style={{
                flex: 1, border: "none", outline: "none", background: "none",
                fontSize: typography.sm + 1, color: colors.textPrimary,
                fontFamily: typography.fontSans,
              }}
            />
          </div>
          <button
            onClick={onProfileClick}
            style={{
              display: "flex", alignItems: "center", gap: 6,
              padding: "7px 14px", borderRadius: radius.full,
              background: colors.surfaceAlt, border: `1px solid ${colors.border}`,
              cursor: "pointer", fontFamily: typography.fontSans, flexShrink: 0,
            }}
          >
            <User size={13} color={colors.textSecondary} strokeWidth={1.8} />
            <span style={{ fontSize: typography.sm, fontWeight: typography.semibold, color: colors.textSecondary }}>
              My Account
            </span>
          </button>
        </header>

        {/* Scrollable content */}
        <div
          ref={containerRef}
          style={{
            flex: 1, overflowY: "auto", overflowX: "hidden",
            scrollbarWidth: "thin",
          }}
        >
          {/* Desktop content wrapper */}
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Status bar (mobile only) ──
const StatusBar = ({ screen }) => (
  <div style={{
    height: 44,
    background: screen === "home" ? colors.surface : "transparent",
    display: "flex", alignItems: "center", justifyContent: "center",
    position: "relative", zIndex: 20, padding: "0 20px",
  }}>
    <div style={{ fontSize: typography.md, fontWeight: typography.semibold, color: colors.textPrimary }}>
      9:41
    </div>
    <div style={{ position: "absolute", right: 20, display: "flex", gap: 5, alignItems: "center" }}>
      <SignalBars />
      <BatteryIcon />
    </div>
  </div>
);

const SignalBars = () => (
  <svg width="17" height="12" viewBox="0 0 17 12" fill={colors.textPrimary}>
    <rect x="0" y="7" width="3" height="5" rx="1" />
    <rect x="4.5" y="5" width="3" height="7" rx="1" />
    <rect x="9" y="2.5" width="3" height="9.5" rx="1" />
    <rect x="13.5" y="0" width="3" height="12" rx="1" opacity="0.3" />
  </svg>
);

const BatteryIcon = () => (
  <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
    <rect x="0.5" y="0.5" width="21" height="11" rx="3" stroke={colors.textPrimary} strokeWidth="1.2" opacity="0.9" />
    <rect x="2" y="2" width="16" height="8" rx="1.5" fill={colors.textPrimary} opacity="0.9" />
    <path d="M22.5 4.5v3" stroke={colors.textPrimary} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
  </svg>
);

export default AppShell;
