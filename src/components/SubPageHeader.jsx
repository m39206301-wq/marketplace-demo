import { T } from '../data/tokens';

export default function SubPageHeader({ title, onBack, rightIcon }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: "12px",
      padding: "14px 20px", position: "sticky", top: 0, zIndex: 10,
      background: "rgba(255,255,255,0.92)", backdropFilter: "blur(24px) saturate(1.5)",
      WebkitBackdropFilter: "blur(24px) saturate(1.5)",
      borderBottom: "0.5px solid rgba(16,38,28,0.06)",
    }}>
      <div onClick={onBack} style={{
        width: "32px", height: "32px", borderRadius: "10px",
        background: T.n[50], border: "0.5px solid " + T.n[200],
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer",
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.n[700]} strokeWidth="2" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      </div>
      <span style={{ fontSize: "16px", fontWeight: 650, color: T.n[800], letterSpacing: "-0.2px", flex: 1 }}>{title}</span>
      {rightIcon}
    </div>
  );
}
