"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="footer-gradient w-full px-4 pb-8"
      style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
    >
      {/* Large brand text */}
      <p
        className="text-center"
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 500,
          fontSize: "clamp(60px, 12vw, 180px)",
          color: "#1C1917",
          letterSpacing: "-4px",
          lineHeight: 0.9,
          padding: "40px 0 48px",
          userSelect: "none",
        }}
      >
        grow with subio.
      </p>

      {/* Bottom bar */}
      <div
        className="flex items-center justify-between pt-6"
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          borderTop: "1px solid #E7E5E4",
        }}
      >
        {/* Logo + name */}
        <div className="flex items-center gap-2">
          <Image src="/subio-logo.png" alt="subio" width={24} height={24} style={{ objectFit: "contain" }} />
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: 16,
              color: "#1C1917",
            }}
          >
            subio
          </span>
        </div>

        {/* Copyright */}
        <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#78716C" }}>
          2026 © subio
        </p>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/company/subio-space"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-black/5 transition-colors"
          style={{ border: "1px solid #E7E5E4" }}
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>
      </div>
    </footer>
  );
}

function GhostIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
      <path
        d="M16 3C10.477 3 6 7.477 6 13v13l4-3 4 3 4-3 4 3 4-3V13c0-5.523-4.477-10-10-10z"
        fill="#1C1917"
      />
      <circle cx="12" cy="13" r="2" fill="white" />
      <circle cx="20" cy="13" r="2" fill="white" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#1C1917">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
