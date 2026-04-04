import { T, S } from '../data/tokens';

export default function WorkCard({ work, onEdit, onShare, onDelete, onViewData }) {
  const isFlyer = work.format === "flyer";
  const formatColor = isFlyer ? T.green[700] : "#4D8A6E";
  const formatBg = isFlyer ? T.green[50] : "#EDF6F1";
  return (
    <div style={{
      background: T.n[0], borderRadius: "16px", overflow: "hidden",
      boxShadow: S.card, border: "0.5px solid rgba(0,0,0,0.04)",
      display: "flex", flexDirection: "row",
      marginBottom: "12px", position: "relative",
    }}>
      <div style={{
        width: "100px", aspectRatio: isFlyer ? "4/5" : "1/1",
        background: work.bg, position: "relative", overflow: "hidden",
        flexShrink: 0,
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 35% 30%, " + work.accent + "15, transparent 55%)", pointerEvents: "none" }}/>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.15, display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
          <div style={{ width: "20px", height: "2px", borderRadius: "1px", background: work.accent }}/>
          <div style={{ width: "20px", height: "20px", borderRadius: "5px", border: "1.5px solid " + work.accent, transform: "rotate(45deg)", margin: "3px 0" }}/>
          <div style={{ width: "14px", height: "2px", borderRadius: "1px", background: work.accent }}/>
        </div>
        <div style={{
          position: "absolute", top: "6px", left: "6px",
          fontSize: "9px", fontWeight: 650, letterSpacing: "0.4px", textTransform: "uppercase",
          padding: "2px 6px", borderRadius: "4px",
          background: formatBg, color: formatColor,
        }}>{work.format === "flyer" ? "Flyer" : "Image"}</div>
      </div>

      <div style={{ flex: 1, padding: "12px 14px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: "13.5px", fontWeight: 650, color: T.n[900], marginBottom: "4px", letterSpacing: "-0.2px" }}>{work.name}</div>
          <div style={{ fontSize: "11px", color: T.n[500], marginBottom: "10px" }}>
            {work.l3} · {work.created}
          </div>
        </div>

        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {isFlyer && (
            <button onClick={() => onViewData && onViewData(work)} style={{
              flex: 1, padding: "8px", borderRadius: "8px", border: "none",
              background: T.green[700], color: T.n[0], fontSize: "11.5px", fontWeight: 600,
              cursor: "pointer", fontFamily: "inherit",
              display: "flex", alignItems: "center", justifyContent: "center", gap: "4px",
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
              Data
            </button>
          )}
          <button onClick={() => onShare && onShare(work)} style={{
            flex: 1, padding: "8px", borderRadius: "8px",
            border: "1px solid " + T.n[200], background: T.n[0],
            color: T.n[700], fontSize: "11.5px", fontWeight: 600,
            cursor: "pointer", fontFamily: "inherit",
          }}>Share</button>
          <button onClick={() => onEdit && onEdit(work)} style={{
            flex: 1, padding: "8px", borderRadius: "8px",
            border: "1px solid " + T.n[200], background: T.n[0],
            color: T.n[700], fontSize: "11.5px", fontWeight: 600,
            cursor: "pointer", fontFamily: "inherit",
          }}>Edit</button>
        </div>
      </div>
    </div>
  );
}
