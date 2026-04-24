import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Vruddhi Capital — our mission, investment philosophy, and what drives us to back mission-driven founders across India's emerging markets.",
};

const values = [
  {
    title: "Founder First",
    description:
      "We believe great companies are built by exceptional founders. We invest in people before we invest in ideas.",
  },
  {
    title: "Long-Term Thinking",
    description:
      "We are patient capital. We partner for the entire journey — from the earliest days through late stage growth.",
  },
  {
    title: "Emerging Markets",
    description:
      "We focus on underpenetrated markets where deep local understanding creates a genuine competitive advantage.",
  },
  {
    title: "Value Creation",
    description:
      "Beyond capital, we bring strategic guidance, network access, and operational support to our portfolio founders.",
  },
];

const stages = [
  {
    stage: "Pre-Seed",
    description: "Idea validation, early product, finding product-market fit",
    active: true,
  },
  {
    stage: "Seed",
    description: "Early traction, initial team building, market entry",
    active: true,
  },
  {
    stage: "Series A",
    description: "Scaling operations, expanding market reach",
    active: true,
  },
  {
    stage: "Late Stage",
    description: "Growth acceleration, market leadership",
    active: true,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="orange-line mb-8" />
          <h1 className="section-heading mb-6">
            About
            <span className="block italic accent-text">Vruddhi Capital</span>
          </h1>
          <p className="body-text max-w-2xl mb-6 text-justify">
           Vruddhi Capital is an investment firm based in Udupi, India, focused on backing mission-driven startups with scalable business models and long-term value creation in high-impact sectors across consumer, services, and platform-driven businesses. 
           
          </p>
          <p className="body-text max-w-2xl mb-6 text-justify">
           
           The firm focuses on identifying founders with strong execution capability and deep market understanding, particularly in underpenetrated and emerging markets. Vruddhi Capital partners with founders from the pre-seed stage through the late-stage journey of the startups.
          </p>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-brand-off-white mb-8 leading-tight">
                Our
                <span className="italic accent-text"> Mission</span>
              </h2>
              <p className="body-text mb-6">
                Vruddhi Capital was founded with a clear mission — to back
                exceptional founders building scalable, mission-driven
                businesses in India's high-impact sectors.
              </p>
              <p className="body-text mb-6">
                We believe that India's next wave of growth will come from
                founders who deeply understand their markets, have the
                execution capability to navigate uncertainty, and the
                conviction to build for the long term.
              </p>
              <p className="body-text">
                Our focus on underpenetrated and emerging markets means we
                often invest where others don't — and we believe that's
                precisely where the biggest opportunities lie.
              </p>
            </div>

            <div className="relative">
              <div className="card-dark p-10">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/Logo-About-.png"
                      alt="Vruddhi Capital"
                      width={48}
                      height={48}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-body text-xs tracking-widest uppercase text-brand-orange mb-2">
                      What Vruddhi Means
                    </h3>
                    <p className="body-text text-base">
                      Vruddhi means growth in Sanskrit. It reflects
                      our core belief — that with the right support, great
                      founders can create extraordinary and lasting growth.
                    </p>
                  </div>
                </div>
                <div className="orange-line" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-brand-orange/30" />
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="orange-line" />
            </div>
            <h2 className="section-heading">
              Our
              <span className="italic accent-text"> Approach </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <div key={i} className="card-dark p-8 group">
                <span className="font-display text-4xl text-brand-orange/20 group-hover:text-brand-orange/40 transition-colors duration-300 font-light">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl font-light text-brand-off-white mt-4 mb-3">
                  {value.title}
                </h3>
                <div className="orange-line mb-5" />
                <p className="body-text">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INVESTMENT STAGES ── */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="orange-line" />
            </div>
            <h2 className="section-heading">
              Stages We
              <span className="italic accent-text"> Invest In</span>
            </h2>
            <p className="body-text max-w-xl mx-auto mt-6">
              We partner with founders early and stay with them through their
              entire growth journey.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {stages.map((item, i) => (
                <div key={i} className="relative text-center">
                  {/* Timeline dot */}
                  <div className="hidden md:flex justify-center mb-8">
                    <div className="w-4 h-4 rounded-full bg-brand-orange border-4 border-[#080808] relative z-10" />
                  </div>
                  <div className="card-dark p-6">
                    <h3 className="font-body text-xs tracking-widest uppercase text-brand-orange mb-4">
                      {item.stage}
                    </h3>
                    <p className="body-text text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="section-heading mb-6">
            Let&apos;s Build
            <span className="italic accent-text"> Together</span>
          </h2>
          <p className="body-text max-w-lg mx-auto mb-10">
            If our thesis resonates with what you are building, we would love
            to connect.
          </p>
          <Link href="/contact" className="btn-primary">
            Reach Out →
          </Link>
        </div>
      </section>
    </>
  );
}
