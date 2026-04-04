import { T, S } from '../data/tokens';

export default function L3SubTabs({ items, selected, onSelect }) {
  return (
    <div style={{
      display: "flex", gap: "7px", overflowX: "auto", padding: "0 20px 16px",
      scrollbarWidth: "none", WebkitOverflowScrolling: "touch",
    }}>
      {items.map((item) => {
        const active = item.id === selected;
        return (
          <button key={item.id} onClick={() => onSelect(item.id)} style={{
            padding: "7px 15px", borderRadius: "999px", border: "none",
            background: active ? T.green[700] : T.n[0],
            color: active ? T.n[0] : T.n[600],
            fontSize: "12.5px", fontWeight: active ? 600 : 500,
            cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.25s ease",
            boxShadow: active ? S.button : "0 0 0 0.5px " + T.n[200],
            fontFamily: "inherit",
          }}>
            {item.name}
          </button>
        );
      })}
    </div>
  );
}
