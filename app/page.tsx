import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Vruddhi Capital — Backing Mission-Driven Founders in India",
  description:
    "Vruddhi Capital is an investment firm based in Udupi, India. We back mission-driven startups from pre-seed to late stage across consumer, services, and platform businesses.",
};

// Stats data
const stats = [
  { number: "Pre-Seed", label: "to Late Stage" },
  { number: "India", label: "Focused Markets" },
  { number: "3", label: "Core Sectors" },
  { number: "Long", label: "Term Value Creation" },
];

// Investment thesis sectors
const sectors = [
  {
    title: "Consumer",
    description:
      "Brands and products solving real problems for India's growing consumer class in underpenetrated markets.",
    icon: "01",
  },
  {
    title: "Services",
    description:
      "Service businesses with strong unit economics, repeat usage, and deep market understanding.",
    icon: "02",
  },
  {
    title: "Platforms",
    description:
      "Platform-driven businesses creating network effects and long-term defensible moats.",
    icon: "03",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#C4621D 1px, transparent 1px), linear-gradient(90deg, #C4621D 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Orange glow top right */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Orange glow bottom left */}
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 text-center">

          {/* Tag line pill */}
          <div className="inline-flex items-center gap-3 border border-brand-orange/30 px-5 py-2 mb-10 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span className="font-body text-xs tracking-widest uppercase text-brand-orange">
              Investment Firm · Udupi, India
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-brand-off-white leading-none mb-8 animate-fade-up">
            Backing
            <span className="block italic text-brand-orange">
              Mission-Driven
            </span>
            Founders
          </h1>

          {/* Sub heading */}
          <p className="body-text max-w-2xl mx-auto mb-12 animate-fade-up delay-200">
            We partner with founders who have strong execution capability and
            deep market understanding — from pre-seed through their late-stage
            journey.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
            <Link href="/contact" className="btn-primary">
              Pitch to Us →
            </Link>
            <Link href="/portfolio" className="btn-outline">
              Our Portfolio
            </Link>
          </div>

          {/* Scroll indicator */}
          {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="font-body text-xs tracking-widest uppercase text-[#444444]">
              Scroll
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-[#444444] to-transparent" />
          </div> */}
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="border-y border-[#1A1A1A] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-display text-3xl md:text-4xl font-light text-brand-orange mb-2">
                  {stat.number}
                </p>
                <p className="font-body text-xs tracking-widest uppercase text-brand-gray-light">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SECTION ── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left text */}
            <div>
              <div className="orange-line mb-8" />
              <h2 className="section-heading mb-8">
                Who We
                <span className="block italic accent-text">Are</span>
              </h2>
              <p className="body-text mb-6">
                Vruddhi Capital is an investment firm based in Udupi, India,
                focused on backing mission-driven startups with scalable
                business models and long-term value creation.
              </p>
              <p className="body-text mb-10">
                We focus on identifying founders with strong execution
                capability and deep market understanding, particularly in
                underpenetrated and emerging markets across India.
              </p>
              <Link href="/about" className="btn-outline">
                Learn More →
              </Link>
            </div>

            {/* Right — decorative quote block */}
            <div className="relative">
              <div className="card-dark p-10 lg:p-12">
                <span className="font-display text-8xl text-brand-orange/20 leading-none">
                  &ldquo;
                </span>
                <p className="font-display text-2xl md:text-3xl font-light text-brand-off-white italic leading-relaxed -mt-6">
                  We partner with founders from the pre-seed stage through the
                  late-stage journey.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="orange-line" />
                  <span className="font-body text-xs tracking-widest uppercase text-brand-orange">
                    Our Promise
                  </span>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-brand-orange/30" />
            </div>
          </div>
        </div>
      </section>

      {/* ── INVESTMENT THESIS ── */}
      <section className="py-24 lg:py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="orange-line" />
            </div>
            <h2 className="section-heading">
              What We
              <span className="italic accent-text"> Invest In</span>
            </h2>
            <p className="body-text max-w-xl mx-auto mt-6">
              High-impact sectors with strong fundamentals and long-term growth
              potential in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sectors.map((sector, i) => (
              <div key={i} className="card-dark p-8 lg:p-10 group">
                <span className="font-display text-5xl font-light text-brand-orange/20 group-hover:text-brand-orange/40 transition-colors duration-300">
                  {sector.icon}
                </span>
                <h3 className="font-display text-2xl font-light text-brand-off-white mt-4 mb-4">
                  {sector.title}
                </h3>
                <div className="orange-line mb-6" />
                <p className="body-text text-base">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE LOOK FOR ── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left decorative */}
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Strong Execution",
                  "Deep Market Understanding",
                  "Emerging Markets Focus",
                  "Scalable Models",
                  "Long-term Vision",
                  "Mission-Driven",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="card-dark p-6 flex items-center justify-center text-center"
                  >
                    <span className="font-body text-sm text-brand-gray-light leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right text */}
            <div className="order-1 lg:order-2">
              <div className="orange-line mb-8" />
              <h2 className="section-heading mb-8">
                What We
                <span className="block italic accent-text">Look For</span>
              </h2>
              <p className="body-text mb-6">
                We seek founders who combine strong execution capability with
                deep domain expertise and an unwavering commitment to their
                mission.
              </p>
              <p className="body-text mb-10">
                Our focus is particularly on underpenetrated and emerging
                markets where the right founder can create outsized impact and
                build long-term defensible businesses.
              </p>
              <Link href="/about" className="btn-primary">
                Our Thesis →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-24 lg:py-32 bg-[#080808] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#C4621D 1px, transparent 1px), linear-gradient(90deg, #C4621D 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="flex justify-center mb-8">
            <div className="orange-line" />
          </div>
          <h2 className="section-heading mb-6">
            Ready to Build
            <span className="block italic accent-text">Something Big?</span>
          </h2>
          <p className="body-text max-w-lg mx-auto mb-12">
            If you are a founder building in high-impact sectors with a
            scalable vision, we would love to hear from you.
          </p>
          <Link href="/contact" className="btn-primary text-base px-12 py-5">
            Pitch to Vruddhi Capital →
          </Link>
        </div>
      </section>
    </>
  );
}
