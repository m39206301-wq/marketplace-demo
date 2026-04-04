import { T, S } from '../data/tokens';

export default function ScrollToTop({ visible, onClick }) {
  if (!visible) return null;
  return (
    <div onClick={onClick} style={{
      position: "absolute", bottom: "24px", right: "16px", zIndex: 15,
      width: "40px", height: "40px", borderRadius: "50%", background: T.n[0],
      boxShadow: S.cardHover, border: "0.5px solid " + T.n[200],
      display: "flex", alignItems: "center", justifyContent: "center",
      cursor: "pointer", animation: "fadeIn 0.3s ease-out",
    }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.n[600]} strokeWidth="2.5" strokeLinecap="round">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </div>
  );
}
