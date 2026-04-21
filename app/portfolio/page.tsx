import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Vruddhi Capital's portfolio of mission-driven startups across consumer, services, and platform sectors in India.",
};

// Replace these with real portfolio companies later
const portfolioCompanies = [
  {
    name: "Company One",
    sector: "Consumer",
    stage: "Seed",
    description: "A brief one-line description of what this startup does.",
    location: "Bangalore, India",
    logo: "/logo.png", 
  },
  {
    name: "Company Two",
    sector: "Platform",
    stage: "Series A",
    description:
      "A brief one-line description of what this startup does and the problem they solve.",
    location: "Mumbai, India",
    
  },
  {
    name: "Company Three",
    sector: "Services",
    stage: "Pre-Seed",
    description:
      "A brief one-line description of what this startup does and the problem they solve.",
    location: "Hyderabad, India",
  },
  {
    name: "Company Four",
    sector: "Consumer",
    stage: "Seed",
    description:
      "A brief one-line description of what this startup does and the problem they solve.",
    location: "Chennai, India",
  },
  {
    name: "Company Five",
    sector: "Platform",
    stage: "Series A",
    description:
      "A brief one-line description of what this startup does and the problem they solve.",
    location: "Delhi, India",
  },
  {
    name: "Company Six",
    sector: "Services",
    stage: "Pre-Seed",
    description:
      "A brief one-line description of what this startup does and the problem they solve.",
    location: "Pune, India",
  },
];

const sectorColors: Record<string, string> = {
  Consumer: "text-blue-400 border-blue-400/30 bg-blue-400/5",
  Platform: "text-purple-400 border-purple-400/30 bg-purple-400/5",
  Services: "text-green-400 border-green-400/30 bg-green-400/5",
};

export default function PortfolioPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-orange/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="orange-line mb-8" />
          <h1 className="section-heading mb-6">
            Our
            <span className="block italic accent-text">Portfolio</span>
          </h1>
          <p className="body-text max-w-2xl">
            Companies we believe in. Founders we back. Businesses building
            long-term value across India&apos;s emerging markets.
          </p>
        </div>
      </section>

      {/* ── PORTFOLIO GRID ── */}
      <section className="py-16 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Sector filter hint */}
          <div className="flex flex-wrap gap-3 mb-12">
            {["All", "Consumer", "Services", "Platform"].map((filter) => (
              <span
                key={filter}
                className={`font-body text-xs tracking-widest uppercase px-4 py-2 border transition-colors duration-300 cursor-pointer ${filter === "All"
                    ? "border-brand-orange text-brand-orange"
                    : "border-[#2A2A2A] text-brand-gray-light hover:border-brand-orange/40"
                  }`}
              >
                {filter}
              </span>
            ))}
          </div>

          {/* Company cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioCompanies.map((company, i) => (
              <div key={i} className="card-dark p-8 group flex flex-col">

                {/* Company initial avatar */}
                {/* Company logo */}
                <div className="w-28 h-14 mb-5 flex items-center">
                  {company.logo ? (
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={112}
                      height={56}
                      className="object-contain w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  ) : (
                    <div className="w-14 h-14 border border-brand-orange/30 flex items-center justify-center group-hover:border-brand-orange transition-colors duration-300">
                      <span className="font-display text-2xl font-light text-brand-orange">
                        {company.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="font-display text-xl font-light text-brand-off-white mb-3">
                  {company.name}
                </h3>

                <p className="body-text text-sm mb-6 flex-grow">
                  {company.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-[#1E1E1E]">
                  <span
                    className={`font-body text-xs tracking-widest uppercase px-3 py-1 border ${sectorColors[company.sector]
                      }`}
                  >
                    {company.sector}
                  </span>
                  <span className="font-body text-xs text-brand-gray-light">
                    {company.stage}
                  </span>
                </div>

                <p className="font-body text-xs text-[#444444] mt-3">
                  📍 {company.location}
                </p>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="body-text text-sm text-center mt-16 text-[#444444]">
            * Portfolio companies are representational. Contact us for full
            details.
          </p>
        </div>
      </section>

      {/* ── JOIN PORTFOLIO CTA ── */}
      <section className="py-24 bg-[#080808] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#C4621D 1px, transparent 1px), linear-gradient(90deg, #C4621D 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="flex justify-center mb-8">
            <div className="orange-line" />
          </div>
          <h2 className="section-heading mb-6">
            Want to be in
            <span className="italic accent-text"> Our Portfolio?</span>
          </h2>
          <p className="body-text max-w-lg mx-auto mb-12">
            If you are building something meaningful in consumer, services, or
            platform sectors — we would love to talk.
          </p>
          <Link href="/contact" className="btn-primary">
            Pitch to Us →
          </Link>
        </div>
      </section>
    </>
  );
}
