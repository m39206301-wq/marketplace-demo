import { T } from '../data/tokens';

export default function StatusBar() {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "10px 24px 4px", fontSize: "15px", fontWeight: 600,
      color: T.n[900], letterSpacing: "0.2px",
    }}>
      <span style={{ fontVariantNumeric: "tabular-nums" }}>9:41</span>
      <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
          <rect x="0" y="7" width="3" height="5" rx="0.8" fill={T.n[900]}/>
          <rect x="4.5" y="5" width="3" height="7" rx="0.8" fill={T.n[900]}/>
          <rect x="9" y="2" width="3" height="10" rx="0.8" fill={T.n[900]}/>
          <rect x="13.5" y="0" width="3" height="12" rx="0.8" fill={T.n[900]}/>
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M8 3C9.8 3 11.4 3.7 12.6 4.9L14 3.5C12.4 1.9 10.3 1 8 1S3.6 1.9 2 3.5L3.4 4.9C4.6 3.7 6.2 3 8 3Z" fill={T.n[900]}/>
          <path d="M8 6.5C9 6.5 9.9 6.9 10.6 7.6L12 6.2C10.9 5.1 9.5 4.5 8 4.5S5.1 5.1 4 6.2L5.4 7.6C6.1 6.9 7 6.5 8 6.5Z" fill={T.n[900]}/>
          <circle cx="8" cy="10" r="1.5" fill={T.n[900]}/>
        </svg>
        <svg width="27" height="13" viewBox="0 0 27 13" fill="none">
          <rect x="0.5" y="0.5" width="22" height="12" rx="3.5" stroke={T.n[900]} strokeOpacity="0.25"/>
          <rect x="2" y="2" width="19" height="9" rx="2" fill={T.n[900]}/>
          <path d="M24 4.5V8.5C24.8 8.2 25.5 7.2 25.5 6.5S24.8 4.8 24 4.5Z" fill={T.n[900]} fillOpacity="0.3"/>
        </svg>
      </div>
    </div>
  );
}
