import { T, S } from '../data/tokens';
import SubPageHeader from './SubPageHeader';

const SECTION_STYLE = {
  background: T.n[0], borderRadius: "16px", padding: "20px",
  boxShadow: S.card, border: "0.5px solid rgba(0,0,0,0.04)", marginBottom: "12px",
};

const HEADING = (text) => (
  <div style={{ fontSize: "15px", fontWeight: 700, color: T.n[800], marginBottom: "10px" }}>{text}</div>
);

const PARAGRAPH = (text) => (
  <div style={{ fontSize: "13px", color: T.n[600], lineHeight: 1.75, marginBottom: "12px" }}>{text}</div>
);

const BULLET = (text) => (
  <div style={{ display: "flex", gap: "8px", marginBottom: "6px", alignItems: "flex-start" }}>
    <span style={{ color: T.green[500], fontSize: "13px", lineHeight: 1.75, flexShrink: 0 }}>•</span>
    <span style={{ fontSize: "13px", color: T.n[600], lineHeight: 1.75 }}>{text}</span>
  </div>
);

function TermsContent() {
  return (
    <>
      <div style={SECTION_STYLE}>
        {HEADING("1. Acceptance of Terms")}
        {PARAGRAPH("By accessing or using Mori's services, website, and mobile applications (collectively, the \"Service\"), you agree to be bound by these Terms of Service. If you do not agree to all of these terms, you may not use the Service.")}
        {PARAGRAPH("Mori reserves the right to update these Terms at any time. Continued use of the Service after changes constitutes acceptance of the revised Terms. We will notify users of significant changes via email or in-app notification.")}
      </div>

      <div style={SECTION_STYLE}>
        {HEADING("2. Description of Service")}
        {PARAGRAPH("Mori provides a platform for discovering, customizing, and sharing culturally-inspired design templates. Our services include:")}
        {BULLET("Access to a library of visual templates inspired by global cultural traditions")}
        {BULLET("Template customization and editing tools")}
        {BULLET("Export and sharing capabilities across social media platforms")}
        {BULLET("Distributor program for content sharing and commission earning")}
        {BULLET("Multi-market support covering India, Indonesia, Brazil, France, Nigeria, Saudi Arabia, Turkey, and the United States")}
      </div>

      <div style={SECTION_STYLE}>
        {HEADING("3. User Accounts")}
        {PARAGRAPH("To access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.")}
        {PARAGRAPH("You agree to provide accurate and complete information when creating your account, and to update it as needed. Mori reserves the right to suspend or terminate accounts that violate these Terms.")}
      </div>

      <div style={SECTION_STYLE}>
        {HEADING("4. Intellectual Property")}
        {PARAGRAPH("All templates, designs, graphics, and content provided through the Service are owned by or licensed to Mori Studio. Upon purchasing or accessing a template, you are granted a limited, non-exclusive, non-transferable license to use the template for personal or commercial purposes as specified.")}
        {BULLET("Free templates: Personal use only, with Mori watermark or attribution")}
        {BULLET("Premium templates: Commercial use permitted, no attribution required")}
        {BULLET("You may not resell, redistribute, or sublicense any template as a standalone design asset")}
        {BULLET("Cultural motifs and patterns are adapted respectfully; original cultural heritage belongs to its communities")}
      </div>

      <div style={SECTION_STYLE}>
        {HEADING("5. Distributor Program")}
        {PARAGRAPH("Participants in the Mori Distributor Program agree to the following additional terms:")}
        {BULLET("Commission rates (30% direct, 5% team referral) are subject to adjustment with 30 days' prior notice")}
        {BULLET("Distributors must maintain active social media accounts with authentic followers")}
        {BULLET("Fraudulent activity, including fake engagement or misleading promotion, will result in immediate termination and forfeiture of unpaid commissions")}
        {BULLET("Minimum withdrawal threshold applies; earnings are paid via the designated payment method")}
        {BULLET("Mori provides marketing content; distributors may not alter branding or misrepresent the product")}
      </div>

      <div style={SECTION_STYLE}>
        {HEADING("6. Payment & Refunds")}
        {PARAGRAPH("All purchases are processed securely through our payment partners. Prices are displayed in your local currency based on your selected region. Refund requests must be submitted within 7 days of purchase. Digital goods that have been downloaded or customized are generally non-refundable.")}
      </div>

      <div style={SECTION_STYLE}>
        {HEADING("7. Prohibited Conduct")}
        {PARAGRAPH("You agree not to:")}
        {BULLET("Use the Service for any illegal or unauthorized purpose")}
        {BULLET("Upload or distribute harmful, offensive, or culturally disrespectful content")}
        {BULLET("Attempt to reverse-engineer, decompile, or extract source code from the Service")}
        {BULLET("Use automated systems (bots, scrapers) to access the Service")}
        {BULLET("Impersonate another person or entity")}
      </div>

      <div style={SECTION_STYLE}>
        {HEADING("8. Limitation of Liability")}
        {PARAGRAPH("Mori provides the Service \"as is\" without warranties of any kind. To the maximum extent permitted by law, Mori shall not be liable for any indirect, incidental, or consequential damages arising from the use of the Service.")}
      </div>

      <div style={SECTION_STYLE}>
        {HEADING("9. Governing Law")}
        {PARAGRAPH("These Terms shall be governed by and construed in accordance with applicable international commercial law. Any disputes arising from these Terms shall be resolved through arbitration in a mutually agreed jurisdiction.")}
        {PARAGRAPH("Last updated: April 2026")}
      </div>
    </>
  );
}

function PrivacyContent() {
  return (
    <>
      <div style={SECTION_STYLE}>
        {HEADING("1. Information We Collect")}
        {PARAGRAPH("Mori is committed to protecting your privacy. We collect the following categories of information to provide and improve our services:")}
        <div style={{ fontSize: "13.5px", fontWeight: 600, color: T.n[700], marginBottom: "6px", marginTop: "4px" }}>Account Information</div>
        {BULLET("Name, email address, and profile photo when you create an account")}
        {BULLET("Selected region/market preference")}
        {BULLET("Social media handles (if you join the Distributor Program)")}
        <div style={{ fontSize: "13.5px", fontWeight: 600, color: T.n[700], marginBottom: "6px", marginTop: "10px" }}>Usage Data</div>
        {BULLET("Templates viewed, favorited, and downloaded")}
        {BULLET("Search queries and category browsing patterns")}
        {BULLET("Device type, operating system, and browser information")}
        {BULLET("IP address and approximate location (country-level)")}
        <div style={{ fontSize: "13.5px", fontWeight: 600, color: T.n[700], marginBottom: "6px", marginTop: "10px" }}>Payment Information</div>
        {BULLET("Transaction records and purchase history")}
        {BULLET("Payment details are processed by third-party payment providers; Mori does not store your credit card numbers")}
      </div>

      <div style={SECTION_STYLE}>
        {HEADING("2. How We Use Your Information")}
        {PARAGRAPH("We use your information to:")}
        {BULLET("Provide, personalize, and improve the Service")}
        {BULLET("Show culturally relevant templates based on your selected region")}
        {BULLET("Process transactions and manage your account")}
        {BULLET("Communicate service updates, new features, and promotional offers")}
        {BULLET("Calculate and pay distributor commissions")}
        {BULLET("Detect fraud and ensure platform security")}
        {BULLET("Comply with legal obligations")}
      </div>

      <div style={SECTION_STYLE}>
        {HEADING("3. Data Sharing")}
        {PARAGRAPH("Mori does not sell your personal data. We may share information with:")}
        {BULLET("Payment processors — to complete transactions securely")}
        {BULLET("Cloud hosting providers — to store and serve content reliably")}
        {BULLET("Analytics services — to understand usage patterns (aggregated, anonymized data)")}
        {BULLET("Law enforcement — when required by valid legal process")}
        {PARAGRAPH("All third-party partners are bound by data protection agreements consistent with applicable privacy laws.")}
      </div>

      <div style={SECTION_STYLE}>
        {HEADING("4. Data Storage & Security")}
        {PARAGRAPH("Your data is stored on secure servers with industry-standard encryption (AES-256 at rest, TLS 1.3 in transit). We implement access controls, regular security audits, and incident response procedures.")}
        {PARAGRAPH("Local preferences (region, favorites, works) are stored on your device via localStorage and are not transmitted to our servers unless you sign in to sync.")}
      </div>

      <div style={SECTION_STYLE}>
        {HEADING("5. Your Rights")}
        {PARAGRAPH("Depending on your jurisdiction, you may have the right to:")}
        {BULLET("Access — request a copy of the personal data we hold about you")}
        {BULLET("Correction — update or correct inaccurate information")}
        {BULLET("Deletion — request deletion of your account and associated data")}
        {BULLET("Portability — receive your data in a structured, machine-readable format")}
        {BULLET("Opt-out — unsubscribe from marketing communications at any time")}
        {PARAGRAPH("To exercise any of these rights, contact us via WhatsApp or email at privacy@mori.studio.")}
      </div>

      <div style={SECTION_STYLE}>
        {HEADING("6. Cookies & Tracking")}
        {PARAGRAPH("Mori uses essential cookies to maintain your session and preferences. We use analytics cookies to understand how users interact with the Service. You can manage cookie preferences through your browser settings.")}
      </div>

      <div style={SECTION_STYLE}>
        {HEADING("7. Children's Privacy")}
        {PARAGRAPH("The Service is not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will promptly delete it.")}
      </div>

      <div style={SECTION_STYLE}>
        {HEADING("8. International Data Transfers")}
        {PARAGRAPH("As a global platform operating across multiple markets, your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for all cross-border data transfers in compliance with applicable data protection regulations.")}
      </div>

      <div style={SECTION_STYLE}>
        {HEADING("9. Changes to This Policy")}
        {PARAGRAPH("We may update this Privacy Policy periodically. Material changes will be communicated through the Service or via email. Your continued use of the Service after such changes constitutes acceptance.")}
        {PARAGRAPH("Last updated: April 2026")}
      </div>
    </>
  );
}

function AboutContent() {
  return (
    <>
      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg, " + T.green[800] + ", " + T.green[600] + ")",
        borderRadius: "20px", padding: "32px 22px", marginBottom: "14px",
        boxShadow: S.button, textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "-30px", right: "-20px", width: "140px", height: "140px",
          borderRadius: "50%", background: "rgba(255,255,255,0.05)",
        }}/>
        <div style={{
          position: "absolute", bottom: "-40px", left: "-20px", width: "100px", height: "100px",
          borderRadius: "50%", background: "rgba(255,255,255,0.03)",
        }}/>
        <div style={{
          fontSize: "32px", fontWeight: 800, color: T.n[0], marginBottom: "8px",
          fontFamily: "'DM Serif Display', Georgia, serif", position: "relative",
        }}>Mori</div>
        <div style={{
          fontSize: "13px", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, position: "relative",
          maxWidth: "300px", margin: "0 auto",
        }}>
          Where culture meets technology. A global studio preserving the world's visual heritage through modern design.
        </div>
      </div>

      {/* Mission */}
      <div style={SECTION_STYLE}>
        {HEADING("Our Mission")}
        {PARAGRAPH("Mori is an international design and technology team dedicated to discovering, preserving, and celebrating the rich tapestry of global cultural traditions. We believe that every culture holds unique visual stories — from the intricate henna patterns of South Asia to the vibrant carnival art of Brazil, from the geometric beauty of Islamic calligraphy to the bold textile traditions of West Africa.")}
        {PARAGRAPH("Our mission is to bridge tradition and technology: we transform these cultural treasures into accessible, modern design templates that empower people around the world to create, share, and celebrate cultural diversity in their everyday lives.")}
      </div>

      {/* What We Do */}
      <div style={SECTION_STYLE}>
        {HEADING("What We Do")}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {[
            {
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.green[600]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
              title: "Discover",
              desc: "Our research team travels across continents to study traditional art forms, patterns, color palettes, and visual rituals from diverse communities.",
            },
            {
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.green[600]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>,
              title: "Design",
              desc: "Our designers respectfully reinterpret cultural motifs into modern, versatile templates — invitations, flyers, social media content, and interactive experiences.",
            },
            {
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.green[600]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>,
              title: "Deliver",
              desc: "Through our platform, anyone can access, customize, and share these designs — making cultural beauty part of their celebrations, businesses, and social presence.",
            },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <div style={{
                width: "40px", height: "40px", borderRadius: "10px", flexShrink: 0,
                background: T.green[50], border: "1px solid " + T.green[100],
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>{item.icon}</div>
              <div>
                <div style={{ fontSize: "13.5px", fontWeight: 700, color: T.n[800], marginBottom: "3px" }}>{item.title}</div>
                <div style={{ fontSize: "12.5px", color: T.n[500], lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Presence */}
      <div style={SECTION_STYLE}>
        {HEADING("Global Presence")}
        {PARAGRAPH("Mori currently serves 8 markets across 4 continents, each with locally curated content that reflects the cultural identity of its region:")}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "4px" }}>
          {[
            { flag: "\uD83C\uDDEE\uD83C\uDDF3", name: "India", desc: "Diwali, Weddings, Holi" },
            { flag: "\uD83C\uDDEE\uD83C\uDDE9", name: "Indonesia", desc: "Batik, Eid, Traditions" },
            { flag: "\uD83C\uDDE7\uD83C\uDDF7", name: "Brazil", desc: "Carnival, Festa Junina" },
            { flag: "\uD83C\uDDEB\uD83C\uDDF7", name: "France", desc: "Haute couture, Patisserie" },
            { flag: "\uD83C\uDDF3\uD83C\uDDEC", name: "Nigeria", desc: "Ankara, Celebrations" },
            { flag: "\uD83C\uDDF8\uD83C\uDDE6", name: "Saudi Arabia", desc: "Calligraphy, Eid" },
            { flag: "\uD83C\uDDF9\uD83C\uDDF7", name: "Turkey", desc: "Ottoman, Ceramics" },
            { flag: "\uD83C\uDDFA\uD83C\uDDF8", name: "United States", desc: "Multicultural Fusion" },
          ].map((m, i) => (
            <div key={i} style={{
              background: T.n[50], borderRadius: "10px", padding: "10px 12px",
              border: "0.5px solid " + T.n[150],
            }}>
              <div style={{ fontSize: "18px", marginBottom: "4px" }}>{m.flag}</div>
              <div style={{ fontSize: "12px", fontWeight: 600, color: T.n[700] }}>{m.name}</div>
              <div style={{ fontSize: "10.5px", color: T.n[400], marginTop: "1px" }}>{m.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Values */}
      <div style={SECTION_STYLE}>
        {HEADING("Our Values")}
        {[
          { title: "Cultural Respect", desc: "We work with cultural consultants and local communities to ensure every design honors its origins. Appreciation, never appropriation." },
          { title: "Accessibility", desc: "Great design should be available to everyone, everywhere. We offer free templates alongside premium options to ensure no one is excluded." },
          { title: "Empowerment", desc: "Through our Distributor Program, we create economic opportunities for creators in emerging markets — turning cultural knowledge into income." },
          { title: "Innovation", desc: "We leverage the latest in design technology, AI-assisted tools, and interactive formats (H5, video) to push the boundaries of what templates can be." },
        ].map((v, i) => (
          <div key={i} style={{ marginBottom: i < 3 ? "14px" : 0 }}>
            <div style={{ fontSize: "13.5px", fontWeight: 700, color: T.green[700], marginBottom: "4px" }}>{v.title}</div>
            <div style={{ fontSize: "12.5px", color: T.n[500], lineHeight: 1.65 }}>{v.desc}</div>
          </div>
        ))}
      </div>

      {/* Contact */}
      <div style={SECTION_STYLE}>
        {HEADING("Contact Us")}
        {PARAGRAPH("We'd love to hear from you — whether you have a question, partnership proposal, or just want to share how Mori has helped celebrate your culture.")}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            { label: "General Inquiries", value: "hello@mori.studio" },
            { label: "Privacy & Data", value: "privacy@mori.studio" },
            { label: "Distributor Support", value: "partners@mori.studio" },
            { label: "WhatsApp", value: "Chat with us" },
          ].map((c, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: i < 3 ? "0.5px solid " + T.n[100] : "none" }}>
              <span style={{ fontSize: "12.5px", color: T.n[500] }}>{c.label}</span>
              <span style={{ fontSize: "12.5px", fontWeight: 600, color: T.green[700] }}>{c.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Version */}
      <div style={{ textAlign: "center", padding: "8px 0 4px" }}>
        <div style={{ fontSize: "11px", color: T.n[300] }}>Mori Studio · Version 1.0.0</div>
      </div>
    </>
  );
}

const PAGES = {
  terms: { title: "Terms of Service", Content: TermsContent },
  privacy: { title: "Privacy Policy", Content: PrivacyContent },
  about: { title: "About Mori", Content: AboutContent },
};

export default function InfoPage({ type, onBack }) {
  const { title, Content } = PAGES[type] || PAGES.about;

  return (
    <div style={{
      position: "absolute", inset: 0, zIndex: 28, background: T.n[100],
      animation: "slideIn 0.3s ease-out forwards",
      display: "flex", flexDirection: "column",
    }}>
      <div style={{ flex: 1, overflowY: "auto", scrollbarWidth: "none" }}>
        <SubPageHeader title={title} onBack={onBack} />
        <div style={{ padding: "16px" }}>
          <Content />
        </div>
        <div style={{ fontSize: "10px", color: T.n[300], textAlign: "center", padding: "8px 20px 32px" }}>
          © 2026 Mori Studio. All rights reserved.
        </div>
      </div>
    </div>
  );
}
