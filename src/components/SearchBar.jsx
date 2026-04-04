import { T } from '../data/tokens';

export default function SearchBar({ onClick }) {
  return (
    <div onClick={onClick} style={{
      margin: "0 16px 12px", height: "36px", borderRadius: "18px",
      background: T.n[100], border: "0.5px solid " + T.n[200],
      display: "flex", alignItems: "center", gap: "8px", padding: "0 14px",
      cursor: "pointer",
    }}>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={T.n[400]} strokeWidth="2" strokeLinecap="round">
        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
      </svg>
      <span style={{ fontSize: "13px", color: T.n[400], fontWeight: 400 }}>Search templates...</span>
    </div>
  );
}
