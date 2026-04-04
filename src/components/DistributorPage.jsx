import { useState, useEffect } from 'react';
import { T, S } from '../data/tokens';
import { MARKETS } from '../data/markets';
import SubPageHeader from './SubPageHeader';
import Footer from './Footer';

const BENEFITS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.green[600]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    title: "Earn 30% Commission",
    desc: "Every sale through your link earns you 30% instantly. No caps, no delays — your earnings grow as you share.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.green[600]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
      </svg>
    ),
    title: "Content Ready to Post",
    desc: "We design and prepare all the marketing content for you. Just download, post it to your socials, and watch the sales roll in.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.green[600]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: "Recruit & Earn More",
    desc: "Invite others to join as distributors. When they make a sale, you earn an extra 5% on top — passive income, zero effort.",
  },
];

export default function DistributorPage({ onBack }) {
  const [status, setStatus] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("mori_distributor"));
      return saved && saved.status === "approved" ? "approved" : "form";
    } catch { return "form"; }
  });
  const [savedData, setSavedData] = useState(() => {
    try { return JSON.parse(localStorage.getItem("mori_distributor")) || {}; } catch { return {}; }
  });
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [tiktok, setTiktok] = useState("");
  const [instagram, setInstagram] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!selectedCountry) e.country = true;
    if (!tiktok.trim() && !instagram.trim()) e.social = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      const data = {
        status: "approved",
        country: selectedCountry,
        tiktok: tiktok.trim(),
        instagram: instagram.trim(),
        approvedAt: new Date().toISOString(),
      };
      localStorage.setItem("mori_distributor", JSON.stringify(data));
      setSavedData(data);
      setStatus("approved");
      setLoading(false);
    }, 1800);
  };

  // Approved view
  if (status === "approved") {
    return (
      <div style={{
        position: "absolute", inset: 0, zIndex: 27, background: T.n[100],
        animation: "slideIn 0.3s ease-out forwards",
        display: "flex", flexDirection: "column",
      }}>
        <div style={{ flex: 1, overflowY: "auto", scrollbarWidth: "none" }}>
          <SubPageHeader title="Distributor Program" onBack={onBack} />

          <div style={{ padding: "16px" }}>
            {/* Success Banner */}
            <div style={{
              background: "linear-gradient(135deg, " + T.green[700] + ", " + T.green[500] + ")",
              borderRadius: "20px", padding: "28px 22px", textAlign: "center",
              marginBottom: "16px", boxShadow: S.button,
            }}>
              <div style={{
                width: "56px", height: "56px", borderRadius: "50%",
                background: "rgba(255,255,255,0.2)", margin: "0 auto 14px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={T.n[0]} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
              <div style={{ fontSize: "20px", fontWeight: 800, color: T.n[0], marginBottom: "6px", fontFamily: "'DM Serif Display', Georgia, serif" }}>
                You're Approved!
              </div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>
                Welcome to the Mori Distributor Program. Start sharing and earning today.
              </div>
            </div>

            {/* Account Info */}
            <div style={{
              background: T.n[0], borderRadius: "16px", padding: "18px 20px",
              boxShadow: S.card, border: "0.5px solid rgba(0,0,0,0.04)", marginBottom: "12px",
            }}>
              <div style={{ fontSize: "13px", fontWeight: 600, color: T.n[800], marginBottom: "12px" }}>Your Accounts</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {savedData.country && (
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: T.n[600] }}>
                    <span>{(MARKETS.find(m => m.id === savedData.country) || {}).flag}</span>
                    <span>{(MARKETS.find(m => m.id === savedData.country) || {}).name_en}</span>
                  </div>
                )}
                {savedData.tiktok && (
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: T.n[600] }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill={T.n[500]}><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.82 4.48 6.3 6.3 0 001.86-4.49V8.74a8.18 8.18 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.17z"/></svg>
                    <span>{savedData.tiktok}</span>
                  </div>
                )}
                {savedData.instagram && (
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: T.n[600] }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.n[500]} strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/></svg>
                    <span>{savedData.instagram}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Commission Summary */}
            <div style={{
              background: T.n[0], borderRadius: "16px", padding: "18px 20px",
              boxShadow: S.card, border: "0.5px solid rgba(0,0,0,0.04)", marginBottom: "12px",
            }}>
              <div style={{ fontSize: "13px", fontWeight: 600, color: T.n[800], marginBottom: "14px" }}>Commission Rules</div>
              <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                <div style={{
                  flex: 1, background: T.green[50], borderRadius: "12px", padding: "14px", textAlign: "center",
                  border: "1px solid " + T.green[100],
                }}>
                  <div style={{ fontSize: "22px", fontWeight: 800, color: T.green[700] }}>30%</div>
                  <div style={{ fontSize: "11px", color: T.n[500], marginTop: "2px" }}>Direct Sales</div>
                </div>
                <div style={{
                  flex: 1, background: T.warm[50], borderRadius: "12px", padding: "14px", textAlign: "center",
                  border: "1px solid " + T.warm[200],
                }}>
                  <div style={{ fontSize: "22px", fontWeight: 800, color: T.warm[600] }}>5%</div>
                  <div style={{ fontSize: "11px", color: T.n[500], marginTop: "2px" }}>Team Sales</div>
                </div>
              </div>
              <div style={{ fontSize: "12px", color: T.n[500], lineHeight: 1.6 }}>
                Earn 30% on every sale from your referral link. Plus, earn 5% from every sale your recruited distributors make.
              </div>
            </div>

            {/* How It Works */}
            <div style={{
              background: T.n[0], borderRadius: "16px", padding: "18px 20px",
              boxShadow: S.card, border: "0.5px solid rgba(0,0,0,0.04)", marginBottom: "16px",
            }}>
              <div style={{ fontSize: "13px", fontWeight: 600, color: T.n[800], marginBottom: "14px" }}>How It Works</div>
              {[
                { step: "1", text: "We prepare professionally designed content for you" },
                { step: "2", text: "Download and post to your TikTok or Instagram" },
                { step: "3", text: "Followers purchase through your unique link" },
                { step: "4", text: "You earn 30% commission on every sale" },
              ].map((item) => (
                <div key={item.step} style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "12px" }}>
                  <div style={{
                    width: "24px", height: "24px", borderRadius: "50%", flexShrink: 0,
                    background: T.green[50], border: "1px solid " + T.green[200],
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "11px", fontWeight: 700, color: T.green[700],
                  }}>{item.step}</div>
                  <div style={{ fontSize: "13px", color: T.n[600], lineHeight: 1.5, paddingTop: "2px" }}>{item.text}</div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div
              onClick={() => window.open("https://wa.me/1234567890?text=Hi%20Mori%2C%20I%20just%20joined%20the%20Distributor%20Program!", "_blank")}
              style={{
                background: "#25D366", borderRadius: "16px", padding: "16px 20px",
                cursor: "pointer", boxShadow: S.button, marginBottom: "12px",
                display: "flex", alignItems: "center", gap: "14px",
                transition: "box-shadow 0.2s",
              }}
            >
              <div style={{
                width: "44px", height: "44px", borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill={T.n[0]}>
                  <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zm-5.42 7.4h-.03a9.87 9.87 0 01-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.38A9.86 9.86 0 012.1 12a9.9 9.9 0 019.9-9.9 9.9 9.9 0 019.9 9.9 9.9 9.9 0 01-9.85 9.78zm8.41-18.24A11.81 11.81 0 0012.05 0 11.95 11.95 0 001.04 17.88L0 22l4.21-1.1A11.93 11.93 0 0012.05 24 11.95 11.95 0 0024 12.05a11.8 11.8 0 00-3.54-8.51z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: T.n[0], marginBottom: "2px" }}>
                  Contact Your Dedicated Manager
                </div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.85)" }}>
                  Get started on WhatsApp — we'll guide you every step
                </div>
              </div>
            </div>
          </div>

          <Footer hideDistributor />
        </div>
      </div>
    );
  }

  // Application form view
  return (
    <div style={{
      position: "absolute", inset: 0, zIndex: 27, background: T.n[100],
      animation: "slideIn 0.3s ease-out forwards",
      display: "flex", flexDirection: "column",
    }}>
      <div style={{ flex: 1, overflowY: "auto", scrollbarWidth: "none" }}>
        <SubPageHeader title="Distributor Program" onBack={onBack} />

        <div style={{ padding: "16px" }}>
          {/* Hero */}
          <div style={{
            background: "linear-gradient(135deg, " + T.green[800] + ", " + T.green[600] + ")",
            borderRadius: "20px", padding: "28px 22px", marginBottom: "16px",
            boxShadow: S.button, position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: "-20px", right: "-20px", width: "120px", height: "120px",
              borderRadius: "50%", background: "rgba(255,255,255,0.06)",
            }}/>
            <div style={{
              position: "absolute", bottom: "-30px", left: "-10px", width: "80px", height: "80px",
              borderRadius: "50%", background: "rgba(255,255,255,0.04)",
            }}/>
            <div style={{
              fontSize: "22px", fontWeight: 800, color: T.n[0], lineHeight: 1.3,
              fontFamily: "'DM Serif Display', Georgia, serif", marginBottom: "10px",
              position: "relative",
            }}>
              Earn by Sharing{"\n"}Content You Love
            </div>
            <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, position: "relative" }}>
              Join thousands of creators earning real income. We handle the design — you just share and earn.
            </div>
          </div>

          {/* Benefits */}
          {BENEFITS.map((b, i) => (
            <div key={i} style={{
              background: T.n[0], borderRadius: "16px", padding: "18px 20px",
              boxShadow: S.card, border: "0.5px solid rgba(0,0,0,0.04)", marginBottom: "10px",
              display: "flex", gap: "14px", alignItems: "flex-start",
            }}>
              <div style={{
                width: "42px", height: "42px", borderRadius: "12px", flexShrink: 0,
                background: T.green[50], border: "1px solid " + T.green[100],
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {b.icon}
              </div>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: T.n[800], marginBottom: "4px" }}>{b.title}</div>
                <div style={{ fontSize: "12.5px", color: T.n[500], lineHeight: 1.5 }}>{b.desc}</div>
              </div>
            </div>
          ))}

          {/* Application Form */}
          <div style={{
            background: T.n[0], borderRadius: "16px", padding: "22px 20px",
            boxShadow: S.card, border: "0.5px solid rgba(0,0,0,0.04)",
            marginTop: "6px", marginBottom: "12px",
          }}>
            <div style={{ fontSize: "16px", fontWeight: 700, color: T.n[900], marginBottom: "4px" }}>Apply Now</div>
            <div style={{ fontSize: "12.5px", color: T.n[500], marginBottom: "20px", lineHeight: 1.5 }}>
              Takes less than a minute. Get approved instantly.
            </div>

            {/* Step 1: Country */}
            <div style={{ marginBottom: "18px" }}>
              <div style={{ fontSize: "13px", fontWeight: 600, color: T.n[700], marginBottom: "10px" }}>
                Select Your Country
              </div>
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px",
              }}>
                {MARKETS.map((m) => (
                  <div key={m.id} onClick={() => { setSelectedCountry(m.id); setErrors(e => ({ ...e, country: false })); }} style={{
                    padding: "10px 12px", borderRadius: "12px", cursor: "pointer",
                    border: selectedCountry === m.id
                      ? "2px solid " + T.green[500]
                      : errors.country ? "1.5px solid #E57373" : "1.5px solid " + T.n[200],
                    background: selectedCountry === m.id ? T.green[50] : T.n[0],
                    display: "flex", alignItems: "center", gap: "8px",
                    transition: "all 0.15s",
                  }}>
                    <span style={{ fontSize: "18px" }}>{m.flag}</span>
                    <span style={{ fontSize: "12.5px", fontWeight: 500, color: T.n[700] }}>{m.name_en}</span>
                  </div>
                ))}
              </div>
              {errors.country && (
                <div style={{ fontSize: "11.5px", color: "#E57373", marginTop: "6px" }}>Please select a country</div>
              )}
            </div>

            {/* Step 2: Social Media */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ fontSize: "13px", fontWeight: 600, color: T.n[700], marginBottom: "4px" }}>
                Social Media Accounts
              </div>
              <div style={{ fontSize: "11.5px", color: T.n[400], marginBottom: "12px" }}>
                At least one account required · 100+ followers
              </div>

              {/* TikTok */}
              <div style={{ marginBottom: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill={T.n[600]}><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.82 4.48 6.3 6.3 0 001.86-4.49V8.74a8.18 8.18 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.17z"/></svg>
                  <span style={{ fontSize: "12.5px", fontWeight: 600, color: T.n[600] }}>TikTok</span>
                </div>
                <input
                  type="text" value={tiktok} placeholder="@yourtiktok"
                  onChange={(e) => { setTiktok(e.target.value); setErrors(er => ({ ...er, social: false })); }}
                  style={{
                    width: "100%", padding: "12px 14px", borderRadius: "12px",
                    border: errors.social ? "1.5px solid #E57373" : "1.5px solid " + T.n[200],
                    background: T.n[50], fontSize: "14px", color: T.n[800],
                    fontFamily: "inherit", outline: "none", boxSizing: "border-box",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => e.target.style.borderColor = T.green[400]}
                  onBlur={(e) => e.target.style.borderColor = errors.social ? "#E57373" : T.n[200]}
                />
              </div>

              {/* Instagram */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.n[600]} strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/></svg>
                  <span style={{ fontSize: "12.5px", fontWeight: 600, color: T.n[600] }}>Instagram</span>
                </div>
                <input
                  type="text" value={instagram} placeholder="@yourinstagram"
                  onChange={(e) => { setInstagram(e.target.value); setErrors(er => ({ ...er, social: false })); }}
                  style={{
                    width: "100%", padding: "12px 14px", borderRadius: "12px",
                    border: errors.social ? "1.5px solid #E57373" : "1.5px solid " + T.n[200],
                    background: T.n[50], fontSize: "14px", color: T.n[800],
                    fontFamily: "inherit", outline: "none", boxSizing: "border-box",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => e.target.style.borderColor = T.green[400]}
                  onBlur={(e) => e.target.style.borderColor = errors.social ? "#E57373" : T.n[200]}
                />
              </div>
              {errors.social && (
                <div style={{ fontSize: "11.5px", color: "#E57373", marginTop: "8px" }}>Please provide at least one social media account</div>
              )}
            </div>

            {/* Submit */}
            <button onClick={handleSubmit} disabled={loading} style={{
              width: "100%", padding: "14px", borderRadius: "14px", border: "none",
              background: loading ? T.n[300] : "linear-gradient(135deg, " + T.green[700] + ", " + T.green[500] + ")",
              color: T.n[0], fontSize: "15px", fontWeight: 700,
              cursor: loading ? "not-allowed" : "pointer", fontFamily: "inherit",
              boxShadow: loading ? "none" : S.button,
              transition: "all 0.2s", letterSpacing: "0.3px",
              display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
            }}>
              {loading ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={T.n[0]} strokeWidth="2" style={{ animation: "spin 1s linear infinite" }}>
                    <path d="M21 12a9 9 0 11-6.219-8.56"/>
                  </svg>
                  Reviewing your application...
                </>
              ) : (
                "Apply Now — It's Free"
              )}
            </button>

            <div style={{ fontSize: "11px", color: T.n[400], textAlign: "center", marginTop: "10px", lineHeight: 1.5 }}>
              By applying, you agree to our Distributor Terms of Service
            </div>
          </div>
        </div>

        <Footer hideDistributor />
      </div>
    </div>
  );
}
