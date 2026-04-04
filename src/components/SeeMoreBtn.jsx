import { T, S } from '../data/tokens';

export default function SeeMoreBtn() {
  return (
    <button style={{
      width: "100%", padding: "11px", background: T.n[0],
      border: "0.5px solid " + T.n[200], borderRadius: "11px",
      fontSize: "12.5px", fontWeight: 600, color: T.n[500],
      cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "5px",
      boxShadow: S.seeMore, letterSpacing: "0.2px",
    }}>
      See more
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </button>
  );
}
