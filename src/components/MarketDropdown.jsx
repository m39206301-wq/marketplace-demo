import { T, S } from '../data/tokens';
import { MARKETS } from '../data/markets';

export default function MarketDropdown({ current, onSelect, onClose }) {
  return (
    <div onClick={onClose} style={{
      position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 30,
      background: "rgba(0,0,0,0.15)",
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        position: "absolute", top: "68px", left: "12px", right: "12px",
        background: "rgba(255,255,255,0.92)", backdropFilter: "blur(24px) saturate(1.6)",
        WebkitBackdropFilter: "blur(24px) saturate(1.6)",
        borderRadius: "16px", padding: "16px", boxShadow: S.dropdown,
        border: "0.5px solid rgba(16,38,28,0.06)",
        animation: "dropIn 0.25s cubic-bezier(0.34,1.56,0.64,1)",
      }}>
        <div style={{ fontSize: "11px", fontWeight: 600, color: T.n[500], marginBottom: "12px", letterSpacing: "0.5px", textTransform: "uppercase" }}>
          Select Market
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px" }}>
          {MARKETS.map((m) => {
            const active = m.id === current;
            return (
              <button key={m.id} onClick={() => { onSelect(m.id); onClose(); }} style={{
                display: "flex", alignItems: "center", gap: "10px",
                padding: "10px 12px", borderRadius: "12px", border: "none",
                background: active ? T.green[50] : "transparent",
                cursor: "pointer", transition: "all 0.2s",
                outline: active ? "2px solid " + T.green[400] : "2px solid transparent",
                fontFamily: "inherit",
              }}>
                <span style={{ fontSize: "22px" }}>{m.flag}</span>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: active ? T.green[800] : T.n[800] }}>{m.name_en}</div>
                  <div style={{ fontSize: "10.5px", color: T.n[500], marginTop: "1px" }}>{m.name_local}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
