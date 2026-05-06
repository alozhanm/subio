"use client";
import { useEffect, useState, useRef } from "react";

const STEPS = [
  { day: 14, title: "First traction", desc: "Community live, first posts ranking" },
  { day: 25, title: "Google visibility", desc: "Threads on page 1 for your keywords" },
  { day: 30, title: "AI recommends you", desc: "Claude and Perplexity cite your product" },
];

const TOTAL_DAYS = 30;
const DURATION = 2500;

export default function ResultsTimeline() {
  const [currentDay, setCurrentDay] = useState(0);
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let startTime: number | null = null;
          const animate = (ts: number) => {
            if (!startTime) startTime = ts;
            const elapsed = ts - startTime;
            const p = Math.min(elapsed / DURATION, 1);
            const day = Math.floor(p * TOTAL_DAYS);
            setCurrentDay(day);
            setProgress(p * 100);
            if (p < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Which connectors are filled: connector i fills when day passes step[i].day
  const activeStep = (i: number) => currentDay >= STEPS[i].day;
  // Connector between step i and i+1 fills when step i+1 is active
  const connectorFill = (i: number) => {
    if (currentDay < STEPS[i].day) return 0;
    if (currentDay >= STEPS[i + 1].day) return 100;
    return ((currentDay - STEPS[i].day) / (STEPS[i + 1].day - STEPS[i].day)) * 100;
  };

  return (
    <div
      ref={ref}
      style={{
        background: "#292524",
        borderRadius: 16,
        padding: 28,
        width: "100%",
        boxSizing: "border-box",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* Header */}
      <p style={{ fontSize: 18, fontWeight: 500, color: "#F7F4EE", marginBottom: 6 }}>
        Results start in 30 days
      </p>
      <p style={{ fontSize: 13, color: "#6B6B6B", marginBottom: 32 }}>
        Most clients see meaningful traction in the first month.
      </p>

      {/* Timeline */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        {STEPS.map((step, i) => {
          const active = activeStep(i);
          return (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", flex: 1 }}>
              {/* Step */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: "0 0 auto" }}>
                {/* Dot */}
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: active ? "#C0392B" : "#3A3A3A",
                    boxShadow: active ? "0 0 0 4px rgba(192,57,43,0.2)" : "none",
                    transition: "background 0.3s ease, box-shadow 0.3s ease",
                    flexShrink: 0,
                    marginBottom: 10,
                  }}
                />
                {/* Labels */}
                <span
                  style={{
                    fontSize: 11,
                    color: active ? "#C0392B" : "#4A4A4A",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    transition: "color 0.3s ease",
                    textAlign: "center",
                  }}
                >
                  DAY {step.day}
                </span>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: active ? "#F7F4EE" : "#4A4A4A",
                    transition: "color 0.3s ease",
                    textAlign: "center",
                    marginTop: 2,
                  }}
                >
                  {step.title}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    color: active ? "#6B6B6B" : "#3A3A3A",
                    transition: "color 0.3s ease",
                    textAlign: "center",
                    marginTop: 3,
                    lineHeight: 1.4,
                    maxWidth: 100,
                  }}
                >
                  {step.desc}
                </span>
              </div>

              {/* Connector (not after last step) */}
              {i < STEPS.length - 1 && (
                <div
                  style={{
                    flex: 1,
                    height: 1,
                    background: "#3A3A3A",
                    marginTop: 10,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      height: "100%",
                      width: `${connectorFill(i)}%`,
                      background: "#C0392B",
                      transition: "width 0.1s linear",
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Progress bar */}
      <div style={{ marginTop: 32, paddingTop: 16, borderTop: "0.5px solid #3A3A3A" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: 11, color: "#6B6B6B" }}>Progress</span>
          <span style={{ fontSize: 11, color: "#F7F4EE" }}>Day {currentDay}</span>
        </div>
        <div
          style={{
            height: 4,
            background: "#3A3A3A",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: "#C0392B",
              borderRadius: 4,
              transition: "width 0.05s linear",
            }}
          />
        </div>
      </div>
    </div>
  );
}
