"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Replace these with real portfolio companies later
const portfolioCompanies = [
  {
    name: "Neo Wealth ",
    sector: "Services",
    stage: "Series B+",
    description: "Neo Wealth Management Private Limited is a Mumbai-based wealth management and investment advisory firm that offers services like equities, mutual funds, IPOs, and portfolio management to help clients grow and manage their wealth.",
    location: "Mumbai, India",
    logo: "/Company/neo.png",
  },
  {
    name: "Advance Cable Technologies",
    sector: "Services",
    stage: "Series B+",
    description: "Advance Cable Technologies is a leading manufacturer of high-quality electrical cables and wiring solutions, serving diverse industries with reliable and durable products.",
    location: " Bashettihalli, India",
    logo: "/advance.png",
  },
  {
    name: "FusionStays",
    sector: "Platform",
    stage: "Seed",
    description: "FusionStays is a travel and hospitality platform that connects travelers with verified homestays across offbeat destinations, offering curated and authentic local experiences.",
    location: "Kolkata, West Bengal, India",
    logo: "/FusionStays.webp",
  },
  {
    name: "Clinking Goblets ",
    sector: "--",
    stage: "aaa",
    description: "aaaa",
    location: "aaa, India",
    logo: "",
  },
  {
    name: "Yutori Designs",
    sector: "Services",
    stage: "Seed",
    description: "Yutori Designs is a premium interior design and turnkey project execution firm specializing in residential and commercial spaces across Coastal Karnataka.",
    location: "Udupi, India",
    logo: "/Yutori-logo.png",
  },
 
];

const sectorColors: Record<string, string> = {
  Consumer: "text-blue-400 border-blue-400/30 bg-blue-400/5",
  Platform: "text-purple-400 border-purple-400/30 bg-purple-400/5",
  Services: "text-green-400 border-green-400/30 bg-green-400/5",
};

export default function PortfolioPage() {

  // ── THIS IS WHAT WAS MISSING ──
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCompanies =
    activeFilter === "All"
      ? portfolioCompanies
      : portfolioCompanies.filter(
          (company) => company.sector === activeFilter
        );

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

          {/* ── FILTER BUTTONS ── */}
          <div className="flex flex-wrap gap-3 mb-12">
            {["All", "Consumer", "Services", "Platform"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-body text-xs tracking-widest uppercase px-4 py-2 border transition-colors duration-300 cursor-pointer ${
                  activeFilter === filter
                    ? "border-brand-orange text-brand-orange bg-brand-orange/5"
                    : "border-[#2A2A2A] text-brand-gray-light hover:border-brand-orange/40"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* ── COMPANY CARDS ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company, i) => (
              <div key={i} className="card-dark p-8 group flex flex-col">

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
                    className={`font-body text-xs tracking-widest uppercase px-3 py-1 border ${
                      sectorColors[company.sector]
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

          {/* Empty state */}
          {filteredCompanies.length === 0 && (
            <div className="text-center py-24">
              <p className="body-text">No companies in this sector yet.</p>
            </div>
          )}

          {/* Note */}
          <p className="body-text text-sm text-center mt-16 text-[#444444]">
            * Portfolio companies are representational. Contact us for full details.
          </p>
        </div>
      </section>

      {/* ── JOIN PORTFOLIO CTA ── */}
      <section className="py-24 bg-[#080808] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
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