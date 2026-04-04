import { T, S } from '../data/tokens';
import { MARKETS } from '../data/markets';
import StatusBar from './StatusBar';

export default function Header({ scrollY, market, onMarketClick, onWorksClick, onFavoritesClick }) {
  const bg = Math.min(scrollY / 50, 0.88);
  const compact = scrollY > 12;
  const m = MARKETS.find((x) => x.id === market);
  return (
    <div style={{
      position: "sticky", top: 0, zIndex: 20,
      backdropFilter: bg > 0.1 ? "blur(28px) saturate(1.5)" : "none",
      WebkitBackdropFilter: bg > 0.1 ? "blur(28px) saturate(1.5)" : "none",
      background: "rgba(255,255,255," + bg + ")",
      borderBottom: bg > 0.4 ? "0.5px solid rgba(16,38,28,0.06)" : "0.5px solid transparent",
      transition: "all 0.35s ease",
    }}>
      {!compact && <StatusBar />}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: compact ? "10px 20px" : "6px 20px 14px", transition: "padding 0.35s ease",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{
            fontSize: "25px", fontWeight: 800, color: T.green[800],
            fontFamily: "'DM Serif Display', Georgia, serif", letterSpacing: "-0.5px",
          }}>Mori</span>
          <div onClick={onMarketClick} style={{
            display: "flex", alignItems: "center", gap: "5px",
            background: "rgba(240,249,244,0.8)", border: "0.5px solid " + T.green[100],
            borderRadius: "999px", padding: "4px 10px 4px 8px",
            fontSize: "12px", color: T.green[700], fontWeight: 500,
            boxShadow: S.pill, cursor: "pointer",
          }}>
            <span style={{ fontSize: "14px" }}>{m.flag}</span>
            <span>{m.name_en}</span>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={T.green[400]} strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div onClick={onFavoritesClick} style={{
            width: "34px", height: "34px", borderRadius: "10px",
            background: T.n[0], border: "0.5px solid " + T.n[200],
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", boxShadow: S.pill,
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={T.n[600]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
          </div>
          <div onClick={onWorksClick} style={{
            display: "flex", alignItems: "center", gap: "5px",
            background: T.green[800], border: "none", borderRadius: "10px",
            padding: "7px 13px", fontSize: "12.5px", color: T.n[0],
            cursor: "pointer", fontWeight: 600, boxShadow: S.button + ", " + S.insetDark,
            letterSpacing: "0.15px",
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
            </svg>
            My Works
          </div>
        </div>
      </div>
    </div>
  );
}
