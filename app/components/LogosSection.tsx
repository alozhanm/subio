export default function LogosSection() {
  return (
    <section
      className="w-full py-6 overflow-hidden"
      style={{ borderTop: "1px solid #F0EFED", borderBottom: "1px solid #F0EFED" }}
    >
      {/* Label */}
      <p
        className="text-center mb-5"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 11,
          fontWeight: 500,
          color: "#B0ABA5",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        official affiliate partners
      </p>

      {/* Marquee */}
      <div className="flex overflow-hidden">
        <div className="flex items-center gap-14 marquee-track" style={{ minWidth: "max-content" }}>
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center"
              style={{ minWidth: 100, opacity: 0.6 }}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const logoStyle: React.CSSProperties = {
  height: 22,
  width: "auto",
  maxWidth: 110,
  objectFit: "contain",
  display: "block",
  filter: "grayscale(100%)",
};

const logos = [
  <img key="emergent" src="/logo-partner-emergent.jpeg" alt="Emergent" style={logoStyle} />,
  <img key="elevenlabs" src="/logo-partner-elevenlabs.png" alt="Eleven Labs" style={logoStyle} />,
  <img key="turbotic" src="/logo-partner-turbotic.png" alt="Turbotic" style={{ ...logoStyle, height: 32 }} />,
  <img key="gamma" src="/logo-partner-gamma.png" alt="Gamma" style={logoStyle} />,
  <img key="kit" src="/logo-partner-kit.png" alt="Kit" style={{ ...logoStyle, height: 36, maxWidth: 90 }} />,
  <span key="supersonic" style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 600, color: "#1C1917", whiteSpace: "nowrap", opacity: 0.6 }}>Supersonic Inc.</span>,
];
