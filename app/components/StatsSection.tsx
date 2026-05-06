export default function StatsSection() {
  const stats = [
    { value: "4.6M+", label: "Reddit views generated in 60 days", bg: "#F5F5F0" },
    { value: "50K+", label: "Weekly organic visits", bg: "#FAFAFA" },
    { value: "3+", label: "Startups scaled", bg: "#FEF9E7" },
  ];

  return (
    <section className="w-full py-8" style={{ borderBottom: "1px solid #F0EFED" }}>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4"
        style={{ maxWidth: 1180, margin: "0 auto" }}
      >
        {stats.map((stat) => (
          <div
            key={stat.value}
            className="rounded-2xl p-8"
            style={{ background: stat.bg }}
          >
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 400,
                fontSize: "clamp(36px, 4vw, 52px)",
                color: "#000",
                lineHeight: 1,
                marginBottom: 10,
                letterSpacing: "-1px",
              }}
            >
              {stat.value}
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 15,
                color: "#44403C",
                lineHeight: 1.4,
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
