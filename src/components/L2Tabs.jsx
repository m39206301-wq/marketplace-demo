import { T, S } from '../data/tokens';

export default function L2Tabs({ items, selected, onSelect }) {
  return (
    <div style={{
      display: "flex", gap: "4px", overflowX: "auto", padding: "6px 20px 16px",
      scrollbarWidth: "none", WebkitOverflowScrolling: "touch",
      maskImage: "linear-gradient(to right, black 86%, transparent 100%)",
      WebkitMaskImage: "linear-gradient(to right, black 86%, transparent 100%)",
    }}>
      {items.map((cat) => {
        const active = cat.id === selected;
        return (
          <div key={cat.id} onClick={() => onSelect(cat.id)} style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
            cursor: "pointer", minWidth: "62px",
          }}>
            <div style={{
              width: "50px", height: "50px", borderRadius: "14px",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "22px", transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
              background: active
                ? "linear-gradient(145deg, " + T.green[600] + ", " + T.green[800] + ")"
                : T.n[0],
              boxShadow: active ? S.iconActive : S.icon,
              border: active ? "none" : "0.5px solid " + T.n[200],
              transform: active ? "scale(1.06)" : "scale(1)",
              filter: active ? "brightness(1)" : "brightness(0.95) saturate(0.7)",
            }}>
              <span style={{ filter: active ? "brightness(10)" : "none" }}>{cat.emoji}</span>
            </div>
            <span style={{
              fontSize: "10.5px", fontWeight: active ? 650 : 500,
              color: active ? T.green[800] : T.n[600],
              transition: "all 0.3s", whiteSpace: "nowrap", letterSpacing: active ? "0px" : "0.1px",
            }}>{cat.name}</span>
            <div style={{
              width: "4px", height: "4px", borderRadius: "50%",
              background: active ? T.green[600] : "transparent",
              transition: "background 0.3s", marginTop: "-3px",
            }}/>
          </div>
        );
      })}
    </div>
  );
}
