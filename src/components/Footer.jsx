import { T } from '../data/tokens';

export default function Footer() {
  return (
    <div style={{ padding: "24px 20px 32px", textAlign: "center" }}>
      <div style={{ fontSize: "10.5px", color: T.n[400], lineHeight: 1.8 }}>
        Terms of Service · Privacy Policy · About Mori
      </div>
      <div style={{ fontSize: "10px", color: T.n[300], marginTop: "4px" }}>
        © 2026 Mori. All rights reserved.
      </div>
    </div>
  );
}
