"use client";
import HeroCards from "./HeroCards";

export default function HeroSection() {
  return (
    <section className="hero-gradient w-full min-h-screen flex flex-col items-center pt-[90px]">
      {/* Hero content */}
      <div className="flex flex-col items-center text-center px-4 pt-16 pb-8 w-full max-w-4xl mx-auto">
        <h1
          className="fade-up"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            fontSize: "clamp(48px, 5.5vw, 80px)",
            lineHeight: 1.05,
            letterSpacing: "-2px",
            color: "#000",
            marginBottom: 24,
          }}
        >
          Your first 1,000 users are already on Reddit.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 18,
            color: "#1C1917",
            lineHeight: 1.6,
            maxWidth: 640,
            marginBottom: 36,
            opacity: 0.85,
          }}
        >
          We build Reddit communities and organic content that gets your startup
          <br />
          recommended by Claude, Perplexity, and Google every day.
        </p>

        {/* Email CTA */}
        <EmailForm />
      </div>

      {/* Three feature cards */}
      <div className="w-full px-4" style={{ maxWidth: 1180, margin: "20px auto 0" }}>
        <HeroCards />
      </div>
    </section>
  );
}

const heroCards = [
  {
    title: "Reddit Community",
    desc: "Your buyers are already there. We get you in front of them.",
  },
  {
    title: "AI Recommendations",
    desc: "When someone asks Claude what tool to use, your name comes up.",
  },
  {
    title: "Organic Search",
    desc: "Reddit ranks above your landing page. We own that real estate for you.",
  },
];

function EmailForm() {
  return (
    <div
      className="flex items-center gap-2"
      style={{
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(0,0,0,0.12)",
        borderRadius: 14,
        padding: "6px 6px 6px 16px",
        width: "100%",
        maxWidth: 460,
      }}
    >
      <input
        type="email"
        placeholder="your@email.com"
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          background: "transparent",
          fontFamily: "var(--font-body)",
          fontSize: 15,
          color: "#1C1917",
        }}
      />
      <a
        href="https://cal.com/alijan/subio-demo"
        className="btn-dark"
        style={{
          whiteSpace: "nowrap",
          borderRadius: 10,
          padding: "10px 18px",
          fontSize: 14,
          fontFamily: "var(--font-body)",
          textDecoration: "none",
        }}
      >
        Let&apos;s build your community →
      </a>
    </div>
  );
}

function ArrowRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M4 10h12M12 6l4 4-4 4"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
