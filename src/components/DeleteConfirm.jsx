import { T, S } from '../data/tokens';

export default function DeleteConfirm({ workName, onConfirm, onCancel }) {
  return (
    <div onClick={onCancel} style={{
      position: "absolute", inset: 0, zIndex: 35, background: "rgba(0,0,0,0.3)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: T.n[0], borderRadius: "18px", padding: "24px", margin: "0 32px",
        boxShadow: S.dropdown, animation: "dropIn 0.25s ease-out", maxWidth: "320px",
      }}>
        <div style={{ fontSize: "16px", fontWeight: 650, color: T.n[900], marginBottom: "8px" }}>Delete work?</div>
        <div style={{ fontSize: "13.5px", color: T.n[600], marginBottom: "20px", lineHeight: 1.5 }}>
          "{workName}" will be permanently deleted. This cannot be undone.
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={onCancel} style={{
            flex: 1, padding: "11px", borderRadius: "12px", border: "1px solid " + T.n[200],
            background: T.n[0], color: T.n[700], fontSize: "14px", fontWeight: 600,
            cursor: "pointer", fontFamily: "inherit",
          }}>Cancel</button>
          <button onClick={onConfirm} style={{
            flex: 1, padding: "11px", borderRadius: "12px", border: "none",
            background: "#D93025", color: T.n[0], fontSize: "14px", fontWeight: 600,
            cursor: "pointer", fontFamily: "inherit",
          }}>Delete</button>
        </div>
      </div>
    </div>
  );
}
