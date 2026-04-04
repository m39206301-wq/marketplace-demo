import { T, S } from '../data/tokens';

export default function TemplateDetail({ data, onBack, onUse }) {
  const { template, format } = data;
  return (
    <div style={{
      position: "absolute", inset: 0, zIndex: 25, background: template.bg,
      animation: "slideIn 0.3s ease-out forwards",
    }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 35% 30%, " + template.accent + "18, transparent 55%)", pointerEvents: "none" }}/>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 40%)", pointerEvents: "none" }}/>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.12, display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", width: "55%" }}>
          <div style={{ width: "80%", height: "4px", borderRadius: "2px", background: template.accent }}/>
          <div style={{ width: "55%", height: "3px", borderRadius: "2px", background: template.accent }}/>
          <div style={{ width: "50px", height: "50px", borderRadius: "12px", border: "2px solid " + template.accent, transform: "rotate(45deg)", margin: "12px 0" }}/>
          <div style={{ width: "65%", height: "3px", borderRadius: "2px", background: template.accent }}/>
          <div style={{ width: "40%", height: "3px", borderRadius: "2px", background: template.accent }}/>
        </div>
      </div>

      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, transparent 100%)", pointerEvents: "none", zIndex: 2 }}/>

      <div onClick={onBack} style={{
        position: "absolute", top: "54px", left: "16px", zIndex: 10,
        width: "36px", height: "36px", borderRadius: "50%",
        background: "rgba(0,0,0,0.25)", backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer", transition: "background 0.2s",
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "140px", background: "linear-gradient(0deg, rgba(0,0,0,0.2) 0%, transparent 100%)", pointerEvents: "none", zIndex: 2 }}/>

      <button onClick={() => onUse && onUse(template.price)} style={{
        position: "absolute", bottom: "34px", left: "20px", right: "20px", zIndex: 10,
        height: "52px", borderRadius: "26px", border: "none",
        background: "linear-gradient(135deg, " + T.green[600] + ", " + T.green[800] + ")",
        color: T.n[0], fontSize: "16px", fontWeight: 650, cursor: "pointer",
        boxShadow: S.buttonHover, letterSpacing: "0.2px", fontFamily: "inherit",
        display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
      }}>
        Use This Template
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    </div>
  );
}
