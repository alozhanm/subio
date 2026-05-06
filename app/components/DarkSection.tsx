"use client";
import RetainerCard from "./RetainerCard";
import ResultsTimeline from "./ResultsTimeline";

export default function DarkSection() {
  return (
    <section
      className="w-full py-20 px-4"
      style={{ background: "#1C1917" }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        {/* Section heading */}
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            fontSize: "clamp(36px, 4vw, 52px)",
            letterSpacing: "-1.5px",
            color: "#fff",
            lineHeight: 1.1,
          }}
        >
          How we grow your startup
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Big left card */}
          <div
            className="rounded-2xl flex items-center justify-center"
            style={{
              background: "#292524",
              border: "1px solid #44403C",
              minHeight: 420,
              padding: 24,
            }}
          >
            <RetainerCard />
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {/* Top right card */}
            <div
              className="rounded-2xl"
              style={{
                background: "#292524",
                border: "1px solid #44403C",
                flex: 1,
                overflow: "hidden",
              }}
            >
              <ResultsTimeline />
            </div>

            {/* Bottom right CTA card */}
            <div
              className="rounded-2xl p-8 flex flex-col items-start justify-between"
              style={{
                background:
                  "radial-gradient(ellipse 80% 80% at 10% 85%, rgba(245,162,35,0.7) 0%, transparent 55%), radial-gradient(ellipse 70% 70% at 85% 30%, rgba(180,175,220,0.6) 0%, transparent 50%), #FAF8F5",
                minHeight: 160,
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 500,
                  fontSize: 22,
                  color: "#000",
                  marginBottom: 20,
                  lineHeight: 1.2,
                }}
              >
                Ready to stop being invisible?
              </h3>
              <a
                href="https://cal.com/alijan/subio-demo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all hover:opacity-90"
                style={{
                  fontFamily: "var(--font-body)",
                  background: "#1C1917",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Book a Call
                <ArrowRight dark />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ dark }: { dark?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8h10M9 5l3 3-3 3"
        stroke={dark ? "#fff" : "#fff"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
