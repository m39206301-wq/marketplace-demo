import { ChevronLeft, Heart } from "lucide-react";
import { colors, radius, typography } from "../styles/tokens";
import TemplateCard from "./TemplateCard";

const FavoritesScreen = ({ onBack, favorites, onTemplateClick, onToggleFavorite }) => {
  const hasFavorites = favorites.length > 0;

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
          Favorites
        </h1>
        <span style={{
          padding: "3px 10px", borderRadius: radius.full,
          background: "#fde2e4", fontSize: typography.xs + 1,
          fontWeight: typography.bold, color: "#e74c3c",
        }}>
          {favorites.length}
        </span>
      </header>

      {!hasFavorites ? (
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center", padding: "60px 32px",
          textAlign: "center",
        }}>
          <div style={{
            width: 72, height: 72, borderRadius: radius.full,
            background: "#fde2e4",
            display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: 16,
          }}>
            <Heart size={30} color="#e74c3c" strokeWidth={1.5} />
          </div>
          <h2 style={{ fontSize: typography.lg, fontWeight: typography.bold, color: colors.textPrimary, margin: "0 0 8px" }}>
            No favorites yet
          </h2>
          <p style={{ fontSize: typography.sm + 1, color: colors.textSecondary, margin: "0 0 20px", lineHeight: 1.5 }}>
            Tap the heart icon on any template to save it here for easy access.
          </p>
          <button
            onClick={onBack}
            style={{
              padding: "10px 24px", borderRadius: radius.full,
              background: colors.primary, color: "#fff",
              border: "none", cursor: "pointer",
              fontSize: typography.sm + 1, fontWeight: typography.bold,
              fontFamily: typography.fontSans,
            }}
          >
            Browse Templates
          </button>
        </div>
      ) : (
        <section style={{ padding: "12px 16px 24px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 10,
          }}>
            {favorites.map(template => (
              <TemplateCard
                key={template.id}
                template={template}
                onClick={() => onTemplateClick(template)}
                favoriteIds={new Set([template.id])}
                onToggleFavorite={onToggleFavorite}
                narrow
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default FavoritesScreen;
