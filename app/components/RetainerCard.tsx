export default function RetainerCard() {
  const rows = [
    { num: "34", suffix: "min", desc: "Average time Reddit users spend on the platform daily" },
    { num: "90", suffix: "%", desc: "of Reddit users research products before buying" },
    { num: "3", suffix: "yr+", desc: "Reddit threads stay on page 1 of Google on average" },
    { num: "#1", suffix: "", desc: "Primary source Claude and Perplexity pull recommendations from" },
  ];

  return (
    <div
      style={{
        background: "#292524",
        borderRadius: 16,
        padding: 28,
        maxWidth: 400,
        width: "100%",
        boxSizing: "border-box",
        fontFamily: "var(--font-body)",
      }}
    >
      <p
        style={{
          fontSize: 16,
          fontWeight: 500,
          color: "#F7F4EE",
          marginBottom: 8,
          lineHeight: 1.3,
        }}
      >
        What&apos;s included in your retainer
      </p>

      <div>
        {rows.map((row, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "16px 0",
              borderBottom: i < rows.length - 1 ? "0.5px solid #3A3A3A" : "none",
            }}
          >
            {/* Number + suffix */}
            <div style={{ minWidth: 80, display: "flex", alignItems: "baseline", gap: 2 }}>
              <span
                style={{
                  fontSize: 32,
                  fontWeight: 500,
                  color: "#F7F4EE",
                  fontFamily: "var(--font-heading)",
                  letterSpacing: "-0.5px",
                  lineHeight: 1,
                }}
              >
                {row.num}
              </span>
              {row.suffix && (
                <span
                  style={{
                    fontSize: 18,
                    color: "#9B9B9B",
                    fontFamily: "var(--font-heading)",
                    marginLeft: 2,
                  }}
                >
                  {row.suffix}
                </span>
              )}
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: 13,
                color: "#9B9B9B",
                lineHeight: 1.4,
                margin: 0,
              }}
            >
              {row.desc}
            </p>
          </div>
        ))}
      </div>

      <a
        href="#"
        style={{
          display: "inline-block",
          marginTop: 24,
          fontSize: 13,
          color: "#9B9B9B",
          textDecoration: "none",
        }}
      >
        See full scope →
      </a>
    </div>
  );
}
