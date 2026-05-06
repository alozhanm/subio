"use client";
import { useState } from "react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) return;
    setStatus("loading");
    await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setStatus("done");
  };

  return (
    <section className="cta-gradient w-full py-28 px-4 flex flex-col items-center text-center">
      <h2
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 400,
          fontSize: "clamp(24px, 2.6vw, 38px)",
          letterSpacing: "-1px",
          color: "#000",
          lineHeight: 1.2,
          marginBottom: 40,
          maxWidth: 800,
        }}
      >
        Your first 1,000 users are waiting for you.
        <br />
        Go get them.
      </h2>

      {status === "done" ? (
        <div style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#1C1917", background: "rgba(255,255,255,0.9)", borderRadius: 12, padding: "14px 28px" }}>
          ✅ Got it! We&apos;ll be in touch soon.
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row gap-2 w-full max-w-[520px]">
          <div
            className="flex-1 flex items-center overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(0,0,0,0.12)",
              borderRadius: 12,
              backdropFilter: "blur(8px)",
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="flex-1 px-5 py-3.5 bg-transparent outline-none text-black placeholder-gray-400"
              style={{ fontFamily: "var(--font-body)", fontSize: 15, minWidth: 0 }}
            />
          </div>
          <button
            onClick={handleSubmit}
            disabled={status === "loading"}
            className="btn-dark px-5 py-3.5 text-center"
            style={{ fontSize: 14, borderRadius: 12, whiteSpace: "nowrap", border: "none", cursor: status === "loading" ? "wait" : "pointer" }}
          >
            {status === "loading" ? "Sending..." : "Book a Call"}
          </button>
        </div>
      )}
    </section>
  );
}
