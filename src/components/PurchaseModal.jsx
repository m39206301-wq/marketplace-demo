import { T, S } from '../data/tokens';

export default function PurchaseModal({ templatePrice, onClose, onPurchaseSingle, onUpgrade }) {
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
        <div style={{ fontSize: "18px", fontWeight: 700, color: T.n[900], marginBottom: "6px", letterSpacing: "-0.3px" }}>Use This Template</div>
        <div style={{ fontSize: "13px", color: T.n[500], marginBottom: "24px" }}>Choose a plan to start creating</div>

        <div onClick={onPurchaseSingle} style={{
          border: "1.5px solid " + T.n[200], borderRadius: "16px", padding: "16px",
          marginBottom: "12px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div>
            <div style={{ fontSize: "15px", fontWeight: 650, color: T.n[900], marginBottom: "4px" }}>Single Creation</div>
            <div style={{ fontSize: "12px", color: T.n[500] }}>One-time use for this template</div>
          </div>
          <div style={{
            fontSize: "18px", fontWeight: 700, color: T.green[700],
          }}>{templatePrice || "$0.99"}</div>
        </div>

        <div onClick={onUpgrade} style={{
          border: "2px solid " + T.green[600], borderRadius: "16px", padding: "16px",
          marginBottom: "20px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between",
          background: T.green[50], position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: "0", right: "0",
            background: T.green[600], color: T.n[0], fontSize: "9px", fontWeight: 700,
            padding: "3px 10px", borderRadius: "0 14px 0 8px", letterSpacing: "0.3px",
          }}>BEST VALUE</div>
          <div>
            <div style={{ fontSize: "15px", fontWeight: 650, color: T.n[900], marginBottom: "4px" }}>Annual Membership</div>
            <div style={{ fontSize: "12px", color: T.n[500] }}>Unlimited templates · All formats</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "18px", fontWeight: 700, color: T.green[700] }}>$9.99</div>
            <div style={{ fontSize: "10px", color: T.n[500] }}>/year</div>
          </div>
        </div>

        <div style={{ fontSize: "11px", color: T.n[400], textAlign: "center", lineHeight: 1.6 }}>
          Secure payment · Cancel anytime · Terms apply
        </div>
      </div>
    </div>
  );
}
