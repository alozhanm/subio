"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center"
      style={{ padding: "16px 16px 0" }}
    >
      <nav
        className="flex w-full items-center justify-between rounded-2xl px-5"
        style={{
          maxWidth: 1064,
          height: 52,
          background: scrolled
            ? "rgba(255,255,255,0.85)"
            : "rgba(255,255,255,0.4)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.6)",
          transition: "background 0.3s ease, box-shadow 0.3s ease",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
        }}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 no-underline">
          <Image src="/subio-logo.png" alt="subio logo" width={28} height={28} style={{ objectFit: "contain" }} />
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: 17,
              color: "#000",
              letterSpacing: "-0.3px",
            }}
          >
            subio
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {["How it works", "FAQ"].map((item) => (
            <a
              key={item}
              href={item === "How it works" ? "#how-it-works" : "#faq"}
              className="px-3 py-2 rounded-lg text-sm font-medium text-black hover:bg-black/5 transition-colors"
              style={{ fontFamily: "var(--font-body)", fontSize: 14, textDecoration: "none" }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="https://cal.com/alijan/subio-demo"
            className="btn-dark px-4 py-2 text-sm rounded-lg"
            style={{ fontFamily: "var(--font-body)", fontSize: 14, textDecoration: "none" }}
          >
            Book a Call
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-black/5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="flex flex-col gap-1.5 w-5">
            <span className="block h-0.5 bg-black rounded" />
            <span className="block h-0.5 bg-black rounded" />
            <span className="block h-0.5 bg-black rounded" />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-4 right-4 mt-2 rounded-2xl p-4 flex flex-col gap-2 md:hidden"
          style={{
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(0,0,0,0.08)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          }}
        >
          {["How it works", "FAQ"].map((item) => (
            <a
              key={item}
              href={item === "How it works" ? "#how-it-works" : "#faq"}
              className="px-3 py-2.5 text-sm font-medium text-black hover:bg-black/5 rounded-lg transition-colors"
              style={{ fontFamily: "var(--font-body)", textDecoration: "none" }}
            >
              {item}
            </a>
          ))}
          <div className="border-t border-gray-100 pt-2 mt-1">
            <a href="https://cal.com/alijan/subio-demo" className="btn-dark px-3 py-2.5 text-sm text-center rounded-lg block" style={{ textDecoration: "none" }}>
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
