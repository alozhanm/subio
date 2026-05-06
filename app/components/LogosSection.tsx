export default function LogosSection() {
  return (
    <section
      className="w-full py-8 overflow-hidden"
      style={{ borderTop: "1px solid #F0EFED", borderBottom: "1px solid #F0EFED" }}
    >
      <div className="flex overflow-hidden">
        <div className="flex items-center gap-16 marquee-track" style={{ minWidth: "max-content" }}>
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center"
              style={{ minWidth: 120, opacity: 0.75 }}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const logos = [
  // belkins
  <svg key="belkins" width="100" height="28" viewBox="0 0 100 28" fill="none">
    <text x="0" y="20" fontFamily="var(--font-heading)" fontWeight="600" fontSize="18" fill="#1C1917">belkins</text>
    <circle cx="48" cy="10" r="3" fill="#1C1917" />
  </svg>,

  // Airtable
  <svg key="airtable" width="100" height="28" viewBox="0 0 100 28" fill="none">
    <text x="0" y="20" fontFamily="var(--font-heading)" fontWeight="600" fontSize="18" fill="#1C1917">Airtable</text>
  </svg>,

  // paddle
  <svg key="paddle" width="80" height="28" viewBox="0 0 80 28" fill="none">
    <text x="0" y="20" fontFamily="var(--font-heading)" fontWeight="500" fontSize="18" fill="#1C1917">paddle</text>
  </svg>,

  // Index Ventures
  <div key="index" className="flex items-center gap-1">
    <div style={{ width: 20, height: 20, background: "#1C1917", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ color: "#fff", fontSize: 10, fontWeight: 700 }}>≡</span>
    </div>
    <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 14, color: "#1C1917", lineHeight: 1.1 }}>
      Index<br />Ventures
    </span>
  </div>,

  // WOJO
  <svg key="wojo" width="80" height="28" viewBox="0 0 80 28" fill="none">
    <text x="0" y="20" fontFamily="var(--font-heading)" fontWeight="700" fontSize="20" fill="#1C1917" letterSpacing="2">WOJO</text>
  </svg>,

  // Workday
  <svg key="workday" width="100" height="28" viewBox="0 0 100 28" fill="none">
    <text x="0" y="20" fontFamily="var(--font-heading)" fontWeight="500" fontSize="17" fill="#1C1917">workday.</text>
  </svg>,
];
