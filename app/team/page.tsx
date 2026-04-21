import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the Vruddhi Capital team — experienced investors and operators backing mission-driven founders across India.",
};

// Replace with real team data
const teamMembers = [
  {
    name: "Team Member Name",
    role: "Founder & Managing Partner",
    bio: "Brief background about this team member — their experience, expertise, and what they bring to portfolio founders. Keep it concise and authentic.",
    focus: ["Consumer", "Fintech"],
    initials: "TM",
  },
  {
    name: "Team Member Name",
    role: "Partner",
    bio: "Brief background about this team member — their experience, expertise, and what they bring to portfolio founders. Keep it concise and authentic.",
    focus: ["SaaS", "Platforms"],
    initials: "TM",
  },
  {
    name: "Team Member Name",
    role: "Venture Partner",
    bio: "Brief background about this team member — their experience, expertise, and what they bring to portfolio founders. Keep it concise and authentic.",
    focus: ["Services", "D2C"],
    initials: "TM",
  },
];

const advisors = [
  {
    name: "Advisor Name",
    role: "Advisor",
    expertise: "Domain expertise area",
    initials: "AN",
  },
  {
    name: "Advisor Name",
    role: "Advisor",
    expertise: "Domain expertise area",
    initials: "AN",
  },
  {
    name: "Advisor Name",
    role: "Advisor",
    expertise: "Domain expertise area",
    initials: "AN",
  },
  {
    name: "Advisor Name",
    role: "Advisor",
    expertise: "Domain expertise area",
    initials: "AN",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="orange-line mb-8" />
          <h1 className="section-heading mb-6">
            The
            <span className="block italic accent-text">Team</span>
          </h1>
          <p className="body-text max-w-2xl">
            Experienced investors and operators who have built and scaled
            companies — now helping the next generation of founders do the same.
          </p>
        </div>
      </section>

      {/* ── CORE TEAM ── */}
      <section className="py-16 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="card-dark p-8 group">

                {/* Avatar */}
                <div className="w-16 h-16 rounded-full border border-brand-orange/40 flex items-center justify-center mb-6 group-hover:border-brand-orange transition-colors duration-300">
                  <span className="font-display text-2xl font-light text-brand-orange">
                    {member.initials}
                  </span>
                </div>

                <h3 className="font-display text-xl font-light text-brand-off-white mb-1">
                  {member.name}
                </h3>
                <p className="font-body text-xs tracking-widest uppercase text-brand-orange mb-6">
                  {member.role}
                </p>
                <div className="orange-line mb-6" />
                <p className="body-text text-sm mb-6">{member.bio}</p>

                {/* Focus areas */}
                <div className="flex flex-wrap gap-2">
                  {member.focus.map((area, j) => (
                    <span
                      key={j}
                      className="font-body text-xs text-brand-gray-light border border-[#2A2A2A] px-3 py-1"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADVISORS ── */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="orange-line" />
            </div>
            <h2 className="section-heading">
              Our
              <span className="italic accent-text"> Advisors</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisors.map((advisor, i) => (
              <div key={i} className="card-dark p-6 text-center group">
                <div className="w-12 h-12 rounded-full border border-brand-orange/30 flex items-center justify-center mx-auto mb-4 group-hover:border-brand-orange transition-colors duration-300">
                  <span className="font-display text-lg font-light text-brand-orange">
                    {advisor.initials}
                  </span>
                </div>
                <h4 className="font-display text-lg font-light text-brand-off-white mb-1">
                  {advisor.name}
                </h4>
                <p className="font-body text-xs text-brand-orange tracking-widest uppercase mb-3">
                  {advisor.role}
                </p>
                <p className="font-body text-xs text-brand-gray-light">
                  {advisor.expertise}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN CTA ── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="section-heading mb-6">
            Work With
            <span className="italic accent-text"> Us</span>
          </h2>
          <p className="body-text max-w-lg mx-auto mb-10">
            We are always looking to connect with exceptional founders,
            operators, and investors who share our vision.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  );
}
