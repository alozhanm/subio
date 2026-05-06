export default function TestimonialsSection() {
  return (
    <section className="w-full py-24 px-4">
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>

        {/* Heading */}
        <h2
          className="text-center mb-16"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            fontSize: "clamp(32px, 3.5vw, 48px)",
            letterSpacing: "-1.5px",
            color: "#000",
            lineHeight: 1.1,
          }}
        >
          400+ signups delivered to startups
          <br />through community
        </h2>

        {/* Single card */}
        <div
          className="rounded-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden"
          style={{ background: "#F5F5EF", maxWidth: 900, margin: "0 auto", minHeight: 420 }}
        >
          {/* Photo */}
          <div style={{ minHeight: 360, overflow: "hidden" }}>
            <img
              src="/arsen-review.jpg"
              alt="Arsen Kylyshbek"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Quote side */}
          <div
            className="p-10 flex flex-col justify-between"
          >
            <div>
              {/* Company label */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: 12,
                  color: "#78716C",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: 24,
                }}
              >
                SUPERSONIC INC.
              </p>

              {/* Quote */}
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 400,
                  fontSize: "clamp(20px, 2vw, 26px)",
                  color: "#000",
                  lineHeight: 1.35,
                  letterSpacing: "-0.5px",
                }}
              >
                &ldquo;subio helped us get 1,500 signups through Reddit community alone. No paid ads, just organic distribution that actually worked.&rdquo;
              </p>
            </div>

            {/* Author */}
            <div style={{ borderTop: "1px solid #E7E5E4", paddingTop: 20, marginTop: 28 }}>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15, color: "#000", marginBottom: 4 }}>
                Arsen Kylyshbek
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#78716C" }}>
                Founder, Supersonic inc.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
