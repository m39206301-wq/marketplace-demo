import { T, S } from '../data/tokens';

export default function Footer({ onDistributor, hideDistributor }) {
  return (
    <div style={{ padding: "28px 20px 36px" }}>
      {/* Social Media Follow */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <div style={{ fontSize: "11px", color: T.n[400], fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: "12px" }}>
          Follow Us
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {/* TikTok */}
          <a href="https://www.tiktok.com/@moridesign" target="_blank" rel="noopener noreferrer" style={{
            width: "40px", height: "40px", borderRadius: "50%",
            background: T.n[0], border: "1px solid " + T.n[200],
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", boxShadow: S.pill, textDecoration: "none",
            transition: "box-shadow 0.2s, border-color 0.2s",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill={T.n[700]}>
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.82 4.48 6.3 6.3 0 001.86-4.49V8.74a8.18 8.18 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.17z"/>
            </svg>
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/moridesign" target="_blank" rel="noopener noreferrer" style={{
            width: "40px", height: "40px", borderRadius: "50%",
            background: T.n[0], border: "1px solid " + T.n[200],
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", boxShadow: S.pill, textDecoration: "none",
            transition: "box-shadow 0.2s, border-color 0.2s",
          }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={T.n[700]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="5"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill={T.n[700]} stroke="none"/>
            </svg>
          </a>
          {/* YouTube */}
          <a href="https://www.youtube.com/@moridesign" target="_blank" rel="noopener noreferrer" style={{
            width: "40px", height: "40px", borderRadius: "50%",
            background: T.n[0], border: "1px solid " + T.n[200],
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", boxShadow: S.pill, textDecoration: "none",
            transition: "box-shadow 0.2s, border-color 0.2s",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill={T.n[700]}>
              <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 00.5 6.19 31.56 31.56 0 000 12a31.56 31.56 0 00.5 5.81 3.02 3.02 0 002.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 002.12-2.14A31.56 31.56 0 0024 12a31.56 31.56 0 00-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
            </svg>
          </a>
          {/* WhatsApp */}
          <a href="https://wa.me/message/moridesign" target="_blank" rel="noopener noreferrer" style={{
            width: "40px", height: "40px", borderRadius: "50%",
            background: T.n[0], border: "1px solid " + T.n[200],
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", boxShadow: S.pill, textDecoration: "none",
            transition: "box-shadow 0.2s, border-color 0.2s",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill={T.n[700]}>
              <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zm-5.42 7.4h-.03a9.87 9.87 0 01-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.38A9.86 9.86 0 012.1 12a9.9 9.9 0 019.9-9.9 9.9 9.9 0 019.9 9.9 9.9 9.9 0 01-9.85 9.78zm8.41-18.24A11.81 11.81 0 0012.05 0 11.95 11.95 0 001.04 17.88L0 22l4.21-1.1A11.93 11.93 0 0012.05 24 11.95 11.95 0 0024 12.05a11.8 11.8 0 00-3.54-8.51z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Become a Distributor CTA */}
      {!hideDistributor && onDistributor && (
        <div onClick={onDistributor} style={{
          background: "linear-gradient(135deg, " + T.green[50] + ", " + T.warm[50] + ")",
          border: "1px solid " + T.green[200],
          borderRadius: "16px", padding: "16px 18px", marginBottom: "20px",
          cursor: "pointer", boxShadow: S.card,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          transition: "box-shadow 0.2s",
        }}>
          <div>
            <div style={{ fontSize: "14px", fontWeight: 700, color: T.green[800], marginBottom: "3px" }}>
              Become a Distributor
            </div>
            <div style={{ fontSize: "11.5px", color: T.n[500], lineHeight: 1.4 }}>
              Earn 30% commission · Content ready to post
            </div>
          </div>
          <div style={{
            width: "32px", height: "32px", borderRadius: "50%",
            background: T.green[700], display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, marginLeft: "12px",
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.n[0]} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      )}

      {/* Legal links */}
      <div style={{ fontSize: "10.5px", color: T.n[400], lineHeight: 1.8, textAlign: "center" }}>
        Terms of Service · Privacy Policy · About Mori
      </div>
      <div style={{ fontSize: "10px", color: T.n[300], marginTop: "4px", textAlign: "center" }}>
        © 2026 Mori. All rights reserved.
      </div>
    </div>
  );
}
