import { T } from '../data/tokens';
import SubPageHeader from './SubPageHeader';
import WorkCard from './WorkCard';
import Footer from './Footer';

export default function MyWorks({ works, onBack, onSettings, onEdit, onShare, onDelete, onBrowse, onDistributor, onNavigate }) {
  const rightIcons = (
    <div style={{ display: "flex", gap: "8px" }}>
      <div onClick={() => {}} style={{
        width: "32px", height: "32px", borderRadius: "10px",
        background: T.n[50], border: "0.5px solid " + T.n[200],
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer",
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.n[600]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        </svg>
      </div>
      <div onClick={onSettings} style={{
        width: "32px", height: "32px", borderRadius: "10px",
        background: T.n[50], border: "0.5px solid " + T.n[200],
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer",
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.n[600]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
        </svg>
      </div>
    </div>
  );

  return (
    <div style={{
      position: "absolute", inset: 0, zIndex: 25, background: T.n[100],
      animation: "slideIn 0.3s ease-out forwards",
      display: "flex", flexDirection: "column",
    }}>
      <div style={{ flex: 1, overflowY: "auto", scrollbarWidth: "none" }}>
        <SubPageHeader title="My Works" onBack={onBack} rightIcon={rightIcons} />

        <div style={{ padding: "16px 16px 4px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "13px", color: T.n[500] }}>{works.length} works</span>
        </div>

        <div style={{ padding: "8px 16px 16px" }}>
          {works.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 20px" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={T.n[300]} strokeWidth="1.5" strokeLinecap="round" style={{ marginBottom: "16px" }}>
                <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
              </svg>
              <div style={{ fontSize: "15px", fontWeight: 600, color: T.n[600], marginBottom: "6px" }}>No works yet</div>
              <div style={{ fontSize: "13px", color: T.n[400], marginBottom: "16px" }}>Start by browsing templates</div>
              <button onClick={onBrowse} style={{
                padding: "10px 24px", borderRadius: "12px", border: "none",
                background: T.green[700], color: T.n[0], fontSize: "13px", fontWeight: 600,
                cursor: "pointer", fontFamily: "inherit",
              }}>Browse Templates</button>
            </div>
          ) : (
            works.map((w) => (
              <WorkCard key={w.id} work={w} onEdit={onEdit} onShare={onShare} onDelete={onDelete} />
            ))
          )}
        </div>
        <Footer onDistributor={onDistributor} onNavigate={onNavigate} />
      </div>
    </div>
  );
}
