import { useState } from 'react';
import { T, S } from '../data/tokens';
import { MARKETS } from '../data/markets';
import SubPageHeader from './SubPageHeader';
import Footer from './Footer';

export default function SettingsPage({ onBack, isLoggedIn, user, onSignIn, onSignOut, market, onMarketClick, onDistributor, onNavigate }) {
  const [notifOn, setNotifOn] = useState(true);
  const m = MARKETS.find((x) => x.id === market);

  return (
    <div style={{
      position: "absolute", inset: 0, zIndex: 26, background: T.n[100],
      animation: "slideIn 0.3s ease-out forwards",
      display: "flex", flexDirection: "column",
    }}>
      <div style={{ flex: 1, overflowY: "auto", scrollbarWidth: "none" }}>
        <SubPageHeader title="Settings" onBack={onBack} />

        <div style={{ padding: "16px" }}>
          <div style={{
            background: T.n[0], borderRadius: "16px", padding: "20px",
            boxShadow: S.card, border: "0.5px solid rgba(0,0,0,0.04)", marginBottom: "12px",
          }}>
            {isLoggedIn ? (
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "50%",
                    background: "linear-gradient(135deg, " + T.green[400] + ", " + T.green[700] + ")",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "18px", fontWeight: 700, color: T.n[0],
                  }}>{user && user.avatar || "D"}</div>
                  <div>
                    <div style={{ fontSize: "15px", fontWeight: 650, color: T.n[900] }}>{user && user.name || "Demo User"}</div>
                    <div style={{ fontSize: "12.5px", color: T.n[500], marginTop: "2px" }}>{user && user.email || "demo@mori.app"}</div>
                  </div>
                </div>
                <button onClick={onSignOut} style={{
                  width: "100%", padding: "11px", borderRadius: "12px",
                  border: "1px solid " + T.n[200], background: T.n[0],
                  color: T.n[700], fontSize: "13.5px", fontWeight: 600,
                  cursor: "pointer", fontFamily: "inherit",
                }}>Sign Out</button>
              </div>
            ) : (
              <div>
                <div style={{ fontSize: "14px", fontWeight: 600, color: T.n[800], marginBottom: "6px" }}>Account</div>
                <div style={{ fontSize: "12.5px", color: T.n[500], marginBottom: "16px" }}>Sign in to sync your works across devices</div>
                <button onClick={onSignIn} style={{
                  width: "100%", padding: "12px", borderRadius: "12px", border: "none",
                  background: T.green[700], color: T.n[0], fontSize: "14px", fontWeight: 600,
                  cursor: "pointer", fontFamily: "inherit",
                }}>Sign In</button>
              </div>
            )}
          </div>

          <div style={{
            background: T.n[0], borderRadius: "16px", overflow: "hidden",
            boxShadow: S.card, border: "0.5px solid rgba(0,0,0,0.04)", marginBottom: "12px",
          }}>
            {/* Region */}
            <div onClick={onMarketClick} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "15px 20px", borderBottom: "0.5px solid " + T.n[100],
              cursor: "pointer",
            }}>
              <span style={{ fontSize: "14px", fontWeight: 500, color: T.n[800] }}>Region</span>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                {m && <span style={{ fontSize: "16px" }}>{m.flag}</span>}
                <span style={{ fontSize: "13px", color: T.n[500] }}>{m ? m.name_en : "Select"}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={T.n[400]} strokeWidth="2" strokeLinecap="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </div>
            </div>
            {/* Language */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "15px 20px", borderBottom: "0.5px solid " + T.n[100],
            }}>
              <span style={{ fontSize: "14px", fontWeight: 500, color: T.n[800] }}>Language</span>
              <span style={{ fontSize: "13px", color: T.n[500] }}>English</span>
            </div>
            {/* Notifications */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "15px 20px", borderBottom: "0.5px solid " + T.n[100],
            }}>
              <span style={{ fontSize: "14px", fontWeight: 500, color: T.n[800] }}>Notifications</span>
              <div onClick={() => setNotifOn(!notifOn)} style={{
                width: "44px", height: "26px", borderRadius: "13px",
                background: notifOn ? T.green[500] : T.n[300],
                padding: "2px", cursor: "pointer", transition: "background 0.2s",
                display: "flex", alignItems: "center",
                justifyContent: notifOn ? "flex-end" : "flex-start",
              }}>
                <div style={{
                  width: "22px", height: "22px", borderRadius: "50%", background: T.n[0],
                  boxShadow: "0 1px 3px rgba(0,0,0,0.15)", transition: "all 0.2s",
                }}/>
              </div>
            </div>
            {/* About */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "15px 20px",
            }}>
              <span style={{ fontSize: "14px", fontWeight: 500, color: T.n[800] }}>About Mori</span>
              <span style={{ fontSize: "13px", color: T.n[500] }}>v1.0.0</span>
            </div>
          </div>
        </div>

        <Footer onDistributor={onDistributor} onNavigate={onNavigate} />
      </div>
    </div>
  );
}
