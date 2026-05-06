"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Who are you and why Reddit?",
    a: "Our founder Alizhan has 4+ years in growth marketing and started building his own Reddit community over a year ago, reaching 4.6M views organically. Now he helps startups replicate the same results.",
  },
  {
    q: "Do you create a new subreddit from scratch?",
    a: "Yes. We launch and grow a dedicated subreddit for your product. We can scale it to 15,000+ members in under a month, which is when the first real traction kicks in.",
  },
  {
    q: "How do you manage multiple accounts and communities?",
    a: "We have a dedicated back-office platform where we manage all accounts, content scheduling, and community engagement in one place.",
  },
  {
    q: "When do I see the first results?",
    a: "We guarantee first results within 14 days of starting. No waiting months to see if it works.",
  },
  {
    q: "How much does it cost?",
    a: "Plans start at $1,500/month for full community growth and distribution management.",
  },
  {
    q: "Is this against Reddit's rules?",
    a: "Everything we do is within Reddit's guidelines. We build real communities around real value, not spam or fake engagement.",
  },
  {
    q: "Do I need to be involved day to day?",
    a: "No. We handle everything. You get weekly reports. Most founders spend less than 1 hour a week on this.",
  },
  {
    q: "What kind of startups do you work with?",
    a: "Seed to Series A tech startups. Developer tools, AI products, B2B SaaS. If your ICP is technical, Reddit is where they live.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full py-24 px-4">
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            fontSize: "clamp(36px, 4vw, 52px)",
            letterSpacing: "-1.5px",
            color: "#000",
            lineHeight: 1.1,
          }}
        >
          FAQ
        </h2>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid #E7E5E4" }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50"
                onClick={() => setOpen(open === i ? null : i)}
                style={{ background: "transparent" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    fontSize: 16,
                    color: "#000",
                    lineHeight: 1.4,
                    paddingRight: 16,
                  }}
                >
                  {faq.q}
                </span>
                <span
                  className="flex-shrink-0 transition-transform duration-200"
                  style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  <ChevronDown />
                </span>
              </button>
              {open === i && (
                <div
                  className="px-6 pb-5"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    color: "#44403C",
                    lineHeight: 1.65,
                    borderTop: "1px solid #F0EFED",
                    paddingTop: 16,
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChevronDown() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 8l5 5 5-5" stroke="#78716C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
