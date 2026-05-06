"use client";
import { useState } from "react";

const cards = [
  {
    sub: "r/artificial",
    question: "What's the best AI video generation tool right now?",
    startup: "Higgsfield AI",
    upvotes: 203,
    logo: "/logo-higgsfield.jpg",
  },
  {
    sub: "r/webdev",
    question: "Vibe coding tools that actually work in production?",
    startup: "Lovable",
    upvotes: 147,
    logo: "/logo-lovable.png",
  },
  {
    sub: "r/MachineLearning",
    question: "Which AI assistant do you actually trust for coding?",
    startup: "Claude",
    upvotes: 312,
    logo: "/logo-claude.svg",
  },
  {
    sub: "r/SaaS",
    question: "How are you automating content creation in 2026?",
    startup: "Eleven Labs",
    upvotes: 94,
    logo: "/logo-elevenlabs.png",
  },
];

const CARD_H = 110;
const PEEK = 16;
const GAP = 14;

export default function RedditStackedCards() {
  const [expanded, setExpanded] = useState(false);

  const collapsedHeight = CARD_H + PEEK * (cards.length - 1);
  const expandedHeight = CARD_H * cards.length + GAP * (cards.length - 1);

  return (
    <div className="flex flex-col items-center w-full" style={{ padding: "24px 0" }}>
      <div
        style={{
          position: "relative",
          width: 360,
          height: expanded ? expandedHeight : collapsedHeight,
          transition: "height 0.7s cubic-bezier(0.075, 0.82, 0.165, 1)",
          cursor: "pointer",
        }}
        onClick={() => setExpanded(!expanded)}
      >
        {cards.map((card, i) => (
          <div
            key={card.sub}
            style={{
              position: "absolute",
              left: 0,
              width: 360,
              height: CARD_H,
              top: expanded ? i * (CARD_H + GAP) : i * PEEK,
              zIndex: cards.length - i,
              transition: "top 0.7s cubic-bezier(0.075, 0.82, 0.165, 1), opacity 0.5s ease",
              opacity: expanded ? 1 : i === 0 ? 1 : i === 1 ? 0.75 : i === 2 ? 0.5 : 0.3,
              background: "#F7F4EE",
              border: "1px solid #E8E3D8",
              borderRadius: 16,
              padding: "12px 16px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 14,
            }}
          >
            {/* Logo */}
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: "#E8E3D8",
                flexShrink: 0,
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={card.logo}
                alt={card.startup}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Right content */}
            <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 5 }}>
              {/* Top row: dot + subreddit */}
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#FF4500",
                    flexShrink: 0,
                    animation: "pulse-dot 2s ease-in-out infinite",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    fontWeight: 500,
                    color: "#FF4500",
                  }}
                >
                  {card.sub}
                </span>
              </div>

              {/* Question */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  color: "#3D3D3D",
                  lineHeight: 1.4,
                  margin: 0,
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                {card.question}
              </p>

              {/* Bottom row: badge + upvotes */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span
                  style={{
                    background: "#EEEAE0",
                    color: "#1A1A1A",
                    fontSize: 12,
                    borderRadius: 6,
                    padding: "2px 10px",
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                  }}
                >
                  {card.startup}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    color: "#6B6B6B",
                  }}
                >
                  ▲ {card.upvotes}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.25; }
        }
      `}</style>
    </div>
  );
}
