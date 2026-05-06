"use client";
import { useEffect, useState, useRef } from "react";

// ─── Shared card style ────────────────────────────────────────────────
const card: React.CSSProperties = {
  background: "rgba(255,255,255,0.72)",
  border: "0.5px solid rgba(0,0,0,0.09)",
  borderRadius: 18,
  padding: "20px 18px",
  display: "flex",
  flexDirection: "column",
  gap: 10,
};
const iconBox: React.CSSProperties = {
  width: 36,
  height: 36,
  borderRadius: 10,
  background: "rgba(0,0,0,0.05)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 4,
};
const title: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: 14,
  fontWeight: 500,
  color: "#1A1A1A",
};
const desc: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: 12,
  color: "#6B6B6B",
  lineHeight: 1.5,
  marginBottom: 8,
};

// ─── Card 1: Reddit Community ─────────────────────────────────────────
const BARS = [
  { sub: "r/SaaS", target: 847, pct: 85 },
  { sub: "r/webdev", target: 312, pct: 60 },
  { sub: "r/startups", target: 203, pct: 45 },
];

function useCountUp(target: number, active: boolean, dur = 1500) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return;
    let t0: number | null = null;
    const tick = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / dur, 1);
      setV(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, dur]);
  return v;
}

function BarRow({ sub, target, pct, active }: { sub: string; target: number; pct: number; active: boolean }) {
  const v = useCountUp(target, active);
  return (
    <div style={{ marginBottom: 8 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
        <span style={{ fontSize: 11, color: "#6B6B6B", fontFamily: "var(--font-body)" }}>{sub}</span>
        <span style={{ fontSize: 11, color: "#FF4500", fontFamily: "var(--font-body)", fontWeight: 500 }}>▲ {v}</span>
      </div>
      <div style={{ height: 4, borderRadius: 4, background: "rgba(0,0,0,0.07)", overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            borderRadius: 4,
            background: "#FF4500",
            width: active ? `${pct}%` : "0%",
            transition: "width 1.5s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
        />
      </div>
    </div>
  );
}

function Card1() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.4 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  return (
    <div ref={ref} style={card}>
      <div style={iconBox}>
        <RedditIcon />
      </div>
      <p style={title}>Reddit Community</p>
      <p style={desc}>Your buyers are already there. We get you in front of them.</p>
      <div>
        {BARS.map((b) => <BarRow key={b.sub} {...b} active={active} />)}
      </div>
    </div>
  );
}

// ─── Card 2: AI Recommendations ──────────────────────────────────────
function Card2() {
  const [show, setShow] = useState(false);
  const [typed, setTyped] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const run = () => {
            setShow(false);
            setTyped(false);
            setTimeout(() => setShow(true), 400);
            setTimeout(() => setTyped(true), 1600);
          };
          run();
          setInterval(run, 4000);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={card}>
      <div style={iconBox}>
        <ClaudeIcon />
      </div>
      <p style={title}>AI Recommendations</p>
      <p style={desc}>When someone asks Claude what tool to use, your name comes up.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {/* User question bubble */}
        {show && (
          <div
            style={{
              alignSelf: "flex-end",
              background: "#1A1A1A",
              color: "#F7F4EE",
              borderRadius: "10px 10px 2px 10px",
              fontSize: 11,
              padding: "7px 10px",
              maxWidth: 200,
              fontFamily: "var(--font-body)",
              lineHeight: 1.4,
              animation: "fadeUp 0.3s ease",
            }}
          >
            What&apos;s the best tool for workflow automation?
          </div>
        )}

        {/* Claude response bubble */}
        {typed && (
          <div
            style={{
              alignSelf: "flex-start",
              background: "#fff",
              border: "0.5px solid rgba(0,0,0,0.09)",
              borderRadius: "2px 10px 10px 10px",
              fontSize: 11,
              padding: "7px 10px",
              fontFamily: "var(--font-body)",
              color: "#1A1A1A",
              display: "flex",
              alignItems: "center",
              gap: 6,
              animation: "fadeUp 0.3s ease",
            }}
          >
            <span
              style={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: "#CC785C",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 9,
                color: "#fff",
                fontWeight: 700,
                flexShrink: 0,
              }}
            >C</span>
            <span>I&apos;d recommend{" "}
              <span style={{ background: "#EEEAE0", color: "#C0392B", fontWeight: 500, borderRadius: 4, padding: "1px 5px", fontSize: 11 }}>
                your startup
              </span>
            </span>
            <span style={{ width: 1.5, height: 11, background: "#1A1A1A", display: "inline-block", animation: "blink 0.8s step-end infinite" }} />
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Card 3: Organic Search ────────────────────────────────────────────
const SEARCH_TEXT = "best developer tools 2026";

function Card3() {
  const [query, setQuery] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let timeout: ReturnType<typeof setTimeout>;
          const type = () => {
            let i = 0;
            setQuery("");
            const interval = setInterval(() => {
              i++;
              setQuery(SEARCH_TEXT.slice(0, i));
              if (i >= SEARCH_TEXT.length) {
                clearInterval(interval);
                timeout = setTimeout(type, 1800);
              }
            }, 80);
          };
          type();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={card}>
      <div style={iconBox}>
        <SearchIcon />
      </div>
      <p style={title}>Organic Search</p>
      <p style={desc}>Reddit ranks above your landing page. We own that real estate for you.</p>

      {/* Fake search bar */}
      <div
        style={{
          background: "rgba(0,0,0,0.05)",
          borderRadius: 8,
          padding: "7px 10px",
          fontSize: 11,
          fontFamily: "var(--font-body)",
          color: "#1A1A1A",
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginBottom: 8,
        }}
      >
        <SearchIconSmall />
        <span style={{ display: "inline-flex", alignItems: "center" }}>
          {query}
          <span style={{ width: 1.5, height: 11, background: "#1A1A1A", display: "inline-block", marginLeft: 1, animation: "blink 0.8s step-end infinite" }} />
        </span>
      </div>

      {/* Results */}
      {[{ sub: "r/SaaS" }, { sub: "r/startups" }].map((r) => (
        <div
          key={r.sub}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#fff",
            border: "0.5px solid rgba(0,0,0,0.07)",
            borderRadius: 8,
            padding: "6px 10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#FF4500", flexShrink: 0, display: "inline-block" }} />
            <span style={{ fontSize: 11, fontFamily: "var(--font-body)", color: "#1A1A1A", whiteSpace: "nowrap" }}>reddit.com/{r.sub}</span>
          </div>
          <span
            style={{
              fontSize: 10,
              background: "#E8F5E9",
              color: "#2E7D32",
              borderRadius: 4,
              padding: "1px 6px",
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            Page 1
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Main export ───────────────────────────────────────────────────────
export default function HeroCards() {
  return (
    <>
      <style>{`
        @keyframes wobble {
          0%,100% { transform: rotate(-4deg); }
          50% { transform: rotate(4deg); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(6px); }
          to { opacity:1; transform:translateY(0); }
        }
        @keyframes blink {
          0%,100% { opacity:1; }
          50% { opacity:0; }
        }
      `}</style>
      <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 12, width: "100%" }}>
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </>
  );
}

// ─── Icons ─────────────────────────────────────────────────────────────
function RedditIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ animation: "wobble 3s ease-in-out infinite" }}>
      <circle cx="10" cy="10" r="10" fill="#FF4500" />
      <ellipse cx="10" cy="11.5" rx="5.5" ry="4" fill="white" />
      <circle cx="7.8" cy="11.2" r="1" fill="#FF4500" />
      <circle cx="12.2" cy="11.2" r="1" fill="#FF4500" />
      <path d="M8.2 13.2 Q10 14.2 11.8 13.2" stroke="#FF4500" strokeWidth="0.8" strokeLinecap="round" fill="none" />
      <circle cx="14.5" cy="7.5" r="1.2" fill="#FF4500" />
      <path d="M11 8.5 Q12.5 7 14.5 7.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" fill="none" />
      <path d="M9 8.5 Q7.5 7 5.5 7.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" fill="none" />
      <circle cx="5.5" cy="7.5" r="1.2" fill="#FF4500" />
      <circle cx="10" cy="6" r="1.5" fill="white" />
      <path d="M10 7.5 L11 9.5" stroke="white" strokeWidth="0.8" />
    </svg>
  );
}

function ClaudeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect width="20" height="20" rx="5" fill="#CC785C" />
      <text x="10" y="14.5" textAnchor="middle" fontSize="11" fontWeight="700" fill="white" fontFamily="sans-serif">C</text>
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="7" cy="7" r="4.5" stroke="#6B6B6B" strokeWidth="1.4" />
      <path d="M10.5 10.5L13 13" stroke="#6B6B6B" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function SearchIconSmall() {
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
      <circle cx="7" cy="7" r="4.5" stroke="#6B6B6B" strokeWidth="1.6" />
      <path d="M10.5 10.5L13 13" stroke="#6B6B6B" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
