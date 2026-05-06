"use client";
import { useState } from "react";

export default function CTASection() {
  const [email, setEmail] = useState("");

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

      <div
        className="flex items-center w-full max-w-[520px] overflow-hidden"
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
          className="flex-1 px-5 py-3.5 bg-transparent outline-none text-black placeholder-gray-400"
          style={{ fontFamily: "var(--font-body)", fontSize: 15 }}
        />
        <a
          href="https://cal.com/alijan/subio-demo"
          className="btn-dark mx-1 my-1 px-5 py-3"
          style={{ fontSize: 14, borderRadius: 9, textDecoration: "none" }}
        >
          Book a Call
        </a>
      </div>
    </section>
  );
}
