"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const USER_MSG = "What's the best dev tool from YC W26 for automating workflows?";
const RESPONSE_TEMPLATE = (name: string) =>
  `Based on recent Reddit discussions and community feedback, ${name} stands out as the top pick. Developers across r/webdev and r/SaaS consistently recommend it for workflow automation. It has strong organic traction and a highly engaged community around it.`;

interface Props {
  startupName?: string;
}

export default function ClaudeRecommendation({ startupName = "subio" }: Props) {
  const [showUser, setShowUser] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(false);
  const started = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  const fullResponse = RESPONSE_TEMPLATE(startupName);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          runSequence();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  function runSequence() {
    // Step 1: user msg fades in
    setTimeout(() => setShowUser(true), 400);

    // Step 2: typing indicator
    setTimeout(() => setShowTyping(true), 1200);

    // Step 3: typing disappears, response types out
    setTimeout(() => {
      setShowTyping(false);
      setShowCursor(true);
      let i = 0;
      const interval = setInterval(() => {
        i += 2;
        setTypedText(fullResponse.slice(0, i));
        if (i >= fullResponse.length) {
          clearInterval(interval);
          setTimeout(() => setShowCursor(false), 600);
        }
      }, 30);
    }, 2800);
  }

  // Split response into parts to highlight the startup name
  function renderResponse(text: string) {
    const idx = text.indexOf(startupName);
    if (idx === -1) return <span>{text}</span>;
    const before = text.slice(0, idx);
    const match = text.slice(idx, idx + startupName.length);
    const after = text.slice(idx + startupName.length);
    return (
      <>
        {before}
        <span
          style={{
            background: "#EEEAE0",
            color: "#C0392B",
            fontWeight: 500,
            borderRadius: 4,
            padding: "1px 6px",
          }}
        >
          {match}
        </span>
        {after}
      </>
    );
  }

  return (
    <div
      ref={ref}
      style={{
        background: "#F7F4EE",
        borderRadius: 16,
        padding: 20,
        maxWidth: "100%",
        width: "100%",
        boxSizing: "border-box",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          paddingBottom: 14,
          borderBottom: "0.5px solid #E8E3D8",
          marginBottom: 16,
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            overflow: "hidden",
            background: "#CC785C",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Image
            src="/logo-claude-avatar.svg"
            alt="Claude"
            width={36}
            height={36}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <div
            style={{
              fontWeight: 600,
              fontSize: 14,
              color: "#1A1A1A",
              lineHeight: 1.2,
            }}
          >
            Claude
          </div>
          <div style={{ fontSize: 11, color: "#6B6B6B" }}>by Anthropic</div>
        </div>
      </div>

      {/* Chat area */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12, minHeight: 180 }}>

        {/* User message */}
        {showUser && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              animation: "fadeInUp 0.4s ease",
            }}
          >
            <div
              style={{
                background: "#1A1A1A",
                color: "#F7F4EE",
                borderRadius: "12px 12px 2px 12px",
                fontSize: 13,
                lineHeight: 1.5,
                padding: "9px 13px",
                maxWidth: 280,
              }}
            >
              {USER_MSG}
            </div>
          </div>
        )}

        {/* Typing indicator */}
        {showTyping && (
          <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "10px 14px", background: "#fff", border: "0.5px solid #E8E3D8", borderRadius: "2px 12px 12px 12px", width: "fit-content" }}>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#9B9B9B",
                  display: "inline-block",
                  animation: `bounce 1s ease-in-out ${i * 0.15}s infinite`,
                }}
              />
            ))}
          </div>
        )}

        {/* Claude response */}
        {typedText && (
          <div
            style={{
              background: "#fff",
              border: "0.5px solid #E8E3D8",
              borderRadius: "2px 12px 12px 12px",
              fontSize: 13,
              lineHeight: 1.5,
              padding: "9px 13px",
              maxWidth: 300,
              color: "#1A1A1A",
            }}
          >
            {renderResponse(typedText)}
            {showCursor && (
              <span
                style={{
                  display: "inline-block",
                  width: 2,
                  height: 13,
                  background: "#1A1A1A",
                  marginLeft: 1,
                  verticalAlign: "middle",
                  animation: "blink 0.8s step-end infinite",
                }}
              />
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
