import { T } from '../data/tokens';

export default function ShareSheet({ onClose, onToast }) {
  const options = [
    { label: "Copy Link", icon: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71", action: () => { onToast("Link copied!"); onClose(); } },
    { label: "WhatsApp", icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z", action: () => { onToast("Opening WhatsApp..."); onClose(); } },
    { label: "Instagram", icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2z", action: () => { onToast("Opening Instagram..."); onClose(); } },
    { label: "Download", icon: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3", action: () => { onToast("Downloading..."); onClose(); } },
  ];

  return (
    <div onClick={onClose} style={{
      position: "absolute", inset: 0, zIndex: 35, background: "rgba(0,0,0,0.3)",
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        background: T.n[0], borderRadius: "20px 20px 0 0", padding: "16px 20px 32px",
        animation: "slideUp 0.3s ease-out",
      }}>
        <div style={{ width: "36px", height: "4px", borderRadius: "2px", background: T.n[300], margin: "0 auto 16px" }}/>
        <div style={{ fontSize: "15px", fontWeight: 650, color: T.n[800], marginBottom: "20px", textAlign: "center" }}>Share</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
          {options.map((opt) => (
            <div key={opt.label} onClick={opt.action} style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", cursor: "pointer",
            }}>
              <div style={{
                width: "50px", height: "50px", borderRadius: "14px", background: T.n[50],
                border: "0.5px solid " + T.n[200], display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.n[700]} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={opt.icon}/>
                </svg>
              </div>
              <span style={{ fontSize: "11px", color: T.n[600], fontWeight: 500 }}>{opt.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
