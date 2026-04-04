import { T } from '../data/tokens';

export default function Toast({ message }) {
  if (!message) return null;
  return (
    <div style={{
      position: "absolute", bottom: "80px", left: "50%", transform: "translateX(-50%)",
      background: T.n[800], color: T.n[0], fontSize: "13px", fontWeight: 500,
      padding: "10px 22px", borderRadius: "999px", zIndex: 100,
      animation: "toastIn 0.3s ease-out", whiteSpace: "nowrap",
      boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
    }}>{message}</div>
  );
}
