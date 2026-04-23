"use client";

import { useState } from "react";
import Image from "next/image";

const portfolioCompanies = [
  {
    name: "Company One",
    sector: "Consumer",
    stage: "Seed",
    description: "A brief one-line description of what this startup does.",
    location: "Bangalore, India",
    logo: "",
  },
  {
    name: "Company Two",
    sector: "Platform",
    stage: "Series A",
    description: "A brief one-line description of what this startup does.",
    location: "Mumbai, India",
    logo: "",
  },
  {
    name: "Company Three",
    sector: "Services",
    stage: "Pre-Seed",
    description: "A brief one-line description of what this startup does.",
    location: "Hyderabad, India",
    logo: "",
  },
  {
    name: "Company Four",
    sector: "Consumer",
    stage: "Seed",
    description: "A brief one-line description of what this startup does.",
    location: "Chennai, India",
    logo: "",
  },
  {
    name: "Company Five",
    sector: "Platform",
    stage: "Series A",
    description: "A brief one-line description of what this startup does.",
    location: "Delhi, India",
    logo: "",
  },
  {
    name: "Company Six",
    sector: "Services",
    stage: "Pre-Seed",
    description: "A brief one-line description of what this startup does.",
    location: "Pune, India",
    logo: "",
  },
];

const sectorColors: Record<string, string> = {
  Consumer: "text-blue-400 border-blue-400/30 bg-blue-400/5",
  Platform: "text-purple-400 border-purple-400/30 bg-purple-400/5",
  Services: "text-green-400 border-green-400/30 bg-green-400/5",
};

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter companies based on selected sector
  const filteredCompanies =
    activeFilter === "All"
      ? portfolioCompanies
      : portfolioCompanies.filter(
          (company) => company.sector === activeFilter
        );

  return (
    <>
      {/* Filter buttons */}
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

      {/* Company cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompanies.map((company, i) => (
          <div key={i} className="card-dark p-8 group flex flex-col">

            {/* Logo or initial */}
            <div className="w-28 h-14 mb-6 flex items-center">
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
          <p className="body-text">
            No companies in this sector yet.
          </p>
        </div>
      )}
    </>
  );
}