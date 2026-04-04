import { useState } from 'react';
import { T } from '../data/tokens';

export default function LoginModal({ onClose, onLogin }) {
  const [loading, setLoading] = useState(false);

  const handleLogin = (provider) => {
    setLoading(true);
    setTimeout(() => {
      onLogin({ name: "Demo User", email: "demo@mori.app", avatar: "D", provider });
    }, 800);
  };

  return (
    <div onClick={onClose} style={{
      position: "absolute", inset: 0, zIndex: 40, background: "rgba(0,0,0,0.35)",
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        background: T.n[0], borderRadius: "24px 24px 0 0",
        padding: "12px 24px 36px", animation: "slideUp 0.3s ease-out",
      }}>
        <div style={{ width: "36px", height: "4px", borderRadius: "2px", background: T.n[300], margin: "0 auto 20px" }}/>

        <div onClick={onClose} style={{
          position: "absolute", top: "20px", right: "20px", width: "28px", height: "28px",
          borderRadius: "50%", background: T.n[100], display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer",
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.n[600]} strokeWidth="2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </div>

        <div style={{ fontSize: "22px", fontWeight: 700, color: T.n[900], marginBottom: "8px", letterSpacing: "-0.3px" }}>Welcome to Mori</div>
        <div style={{ fontSize: "14px", color: T.n[500], marginBottom: "28px" }}>Sign in to save and sync your works</div>

        {loading ? (
          <div style={{ textAlign: "center", padding: "24px 0" }}>
            <div style={{
              width: "32px", height: "32px", border: "3px solid " + T.n[200],
              borderTopColor: T.green[600], borderRadius: "50%",
              animation: "spin 0.8s linear infinite", margin: "0 auto 12px",
            }}/>
            <div style={{ fontSize: "13px", color: T.n[500] }}>Signing in...</div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <button onClick={() => handleLogin("Google")} style={{
              width: "100%", padding: "14px", borderRadius: "14px",
              border: "1px solid " + T.n[200], background: T.n[0],
              fontSize: "15px", fontWeight: 600, color: T.n[800],
              cursor: "pointer", fontFamily: "inherit",
              display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            <button onClick={() => handleLogin("Apple")} style={{
              width: "100%", padding: "14px", borderRadius: "14px",
              border: "none", background: T.n[900],
              fontSize: "15px", fontWeight: 600, color: T.n[0],
              cursor: "pointer", fontFamily: "inherit",
              display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
            }}>
              <svg width="16" height="18" viewBox="0 0 17 20" fill="#fff">
                <path d="M13.2 10.5c0-2.1 1.7-3.1 1.8-3.2-1-1.5-2.5-1.6-3-1.7-1.3-.1-2.5.8-3.2.8-.6 0-1.6-.7-2.7-.7-1.4 0-2.6.8-3.4 2-1.4 2.5-.4 6.2 1 8.2.7 1 1.5 2.1 2.6 2.1 1 0 1.4-.7 2.7-.7 1.2 0 1.6.7 2.7.7 1.1 0 1.8-1 2.5-2 .8-1.1 1.1-2.2 1.1-2.3 0 0-2.1-.8-2.1-3.2zM11.3 4c.6-.7 1-1.7.9-2.7-.8 0-1.9.6-2.5 1.3-.5.6-1 1.7-.9 2.7.9.1 1.9-.5 2.5-1.3z"/>
              </svg>
              Continue with Apple
            </button>
          </div>
        )}

        <div style={{ fontSize: "11px", color: T.n[400], textAlign: "center", marginTop: "20px", lineHeight: 1.6 }}>
          By continuing, you agree to our Terms of Service and Privacy Policy
        </div>
      </div>
    </div>
  );
}
