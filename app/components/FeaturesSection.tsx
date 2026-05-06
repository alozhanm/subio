import RedditStackedCards from "./RedditStackedCards";
import RedditHeatmap from "./RedditHeatmap";
import ClaudeRecommendation from "./ClaudeRecommendation";

export default function FeaturesSection() {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 px-4" style={{ maxWidth: 1180, margin: "0 auto" }}>
      {/* Section heading */}
      <h2
        className="text-center mb-8 md:mb-20"
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 400,
          fontSize: "clamp(36px, 4vw, 52px)",
          letterSpacing: "-1.5px",
          color: "#000",
          lineHeight: 1.1,
        }}
      >
        A better way to grow
        <br />
        your startup
      </h2>

      {/* Feature 1 — Left text, right image */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12 md:mb-20">
        <div className="flex-1">
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              fontSize: "clamp(28px, 3vw, 40px)",
              letterSpacing: "-1px",
              color: "#000",
              lineHeight: 1.15,
              marginBottom: 20,
            }}
          >
            Your buyers are on Reddit right now.
          </h3>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              color: "#44403C",
              lineHeight: 1.65,
              marginBottom: 28,
              maxWidth: 420,
            }}
          >
            They&apos;re asking for tool recommendations, reading comparisons, and trusting community opinions over any ad. We get your product into those conversations organically, at scale.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-medium transition-all hover:bg-gray-50"
            style={{
              fontFamily: "var(--font-body)",
              borderColor: "#E7E5E4",
              color: "#000",
              textDecoration: "none",
            }}
          >
            See how it works
            <ArrowRight />
          </a>
        </div>
        <div
          className="flex-1 rounded-2xl overflow-hidden flex items-center justify-center w-full"
          style={{ background: "#F5F5F0", minHeight: "auto", padding: "24px 16px" }}
        >
          <RedditStackedCards />
        </div>
      </div>

      {/* Feature 2 — Right text, left image */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-12 md:mb-20">
        <div
          className="flex-1 rounded-2xl overflow-hidden flex items-center justify-center w-full"
          style={{ background: "#F5F5F0", minHeight: "auto", padding: 16 }}
        >
          <RedditHeatmap />
        </div>
        <div className="flex-1">
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              fontSize: "clamp(28px, 3vw, 40px)",
              letterSpacing: "-1px",
              color: "#000",
              lineHeight: 1.15,
              marginBottom: 20,
            }}
          >
            Build an audience, not just traffic.
          </h3>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              color: "#44403C",
              lineHeight: 1.65,
              marginBottom: 28,
              maxWidth: 420,
            }}
          >
            Reddit communities compound over time. Every thread we create keeps driving discovery for months. Unlike paid ads, it doesn&apos;t stop when the budget runs out.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-medium transition-all hover:bg-gray-50"
            style={{
              fontFamily: "var(--font-body)",
              borderColor: "#E7E5E4",
              color: "#000",
              textDecoration: "none",
            }}
          >
            See our approach
            <ArrowRight />
          </a>
        </div>
      </div>

      {/* Feature 3 — Left text, right image */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              fontSize: "clamp(28px, 3vw, 40px)",
              letterSpacing: "-1px",
              color: "#000",
              lineHeight: 1.15,
              marginBottom: 20,
            }}
          >
            Get recommended by Claude and Perplexity.
          </h3>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              color: "#44403C",
              lineHeight: 1.65,
              marginBottom: 28,
              maxWidth: 420,
            }}
          >
            AI tools pull answers from Reddit and organic content. We seed the right data points so when a founder asks Claude what tool to use in your category, your name comes up.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-medium transition-all hover:bg-gray-50"
            style={{
              fontFamily: "var(--font-body)",
              borderColor: "#E7E5E4",
              color: "#000",
              textDecoration: "none",
            }}
          >
            See AI visibility
            <ArrowRight />
          </a>
        </div>
        <div
          className="flex-1 rounded-2xl overflow-hidden flex items-center justify-center w-full"
          style={{ background: "#F5F5F0", minHeight: "auto", padding: 20 }}
        >
          <ClaudeRecommendation startupName="CodeWisp (YC W26)" />
        </div>
      </div>
    </section>
  );
}

function FeatureMockup({ type }: { type: "scraping" | "enrichment" | "outreach" }) {
  if (type === "scraping") {
    return (
      <div className="p-6 h-full flex flex-col gap-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-sm">in</div>
          <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-sm">📷</div>
          <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-sm">G</div>
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-sm">🐦</div>
          <span className="text-xs text-gray-400 ml-1">+11 more</span>
        </div>
        {[
          { name: "Sarah K.", title: "VP Sales", company: "Acme Corp", signal: "Posted" },
          { name: "John M.", title: "Founder", company: "StartupXYZ", signal: "Liked" },
          { name: "Emily R.", title: "Head of Growth", company: "TechCo", signal: "Hired" },
        ].map((lead) => (
          <div key={lead.name} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-gray-900 truncate">{lead.name}</p>
              <p className="text-[11px] text-gray-500 truncate">{lead.title} · {lead.company}</p>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-50 text-green-600">{lead.signal}</span>
          </div>
        ))}
      </div>
    );
  }

  if (type === "enrichment") {
    return (
      <div className="p-6 h-full flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Email", value: "john@acme.com", color: "bg-blue-50" },
            { label: "Phone", value: "+1 555-0123", color: "bg-green-50" },
            { label: "Job change", value: "3 months ago", color: "bg-yellow-50" },
            { label: "Tech stack", value: "Salesforce, HubSpot", color: "bg-purple-50" },
            { label: "LinkedIn", value: "500+ connections", color: "bg-blue-50" },
            { label: "Company size", value: "51-200 employees", color: "bg-orange-50" },
          ].map((item) => (
            <div key={item.label} className={`${item.color} rounded-xl p-3`}>
              <p className="text-[10px] text-gray-500 mb-0.5">{item.label}</p>
              <p className="text-xs font-medium text-gray-900 leading-tight">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 h-full flex flex-col gap-3">
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-blue-100" />
          <div>
            <div className="h-2 w-20 bg-gray-200 rounded mb-1" />
            <div className="h-2 w-14 bg-gray-100 rounded" />
          </div>
        </div>
        <p className="text-xs text-gray-700 leading-relaxed">
          Hi Sarah, I noticed you just posted about scaling your SDR team. We help companies like yours automate lead gen...
        </p>
        <div className="flex gap-2 mt-3">
          <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">Connection request</span>
          <span className="text-[10px] bg-green-50 text-green-600 px-2 py-0.5 rounded-full">AI-personalized</span>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex-1 bg-white rounded-xl p-3 shadow-sm text-center">
          <p className="text-lg font-bold text-gray-900">68%</p>
          <p className="text-[10px] text-gray-500">Accept rate</p>
        </div>
        <div className="flex-1 bg-white rounded-xl p-3 shadow-sm text-center">
          <p className="text-lg font-bold text-gray-900">3x</p>
          <p className="text-[10px] text-gray-500">Reply rate</p>
        </div>
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
