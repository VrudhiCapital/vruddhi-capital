import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the Vruddhi Capital team — experienced investors and operators backing mission-driven founders across India.",
};

const teamMembers = [
  {
    name: "Roshan Bava",
    role: "Co-founder & Investor, Vruddhi Capital",
    bio: [
      "Roshan Bava is an entrepreneur-turned-investor with a proven track record of building and scaling technology-led businesses. He is the co-founder of Niveus Solutions, which grew into a leading cloud engineering firm before being acquired by NTT Data in 2025.",
      "At Vruddhi Capital, Roshan brings an operator's lens to investing — backing founders who are building with both ambition and responsibility. His approach combines first-principles thinking, capital efficiency, and long-term value creation.",
      "He is deeply committed to supporting ventures that align growth with sustainability, ethical execution, and real-world impact. Roshan works closely with founders through key inflection points, helping them scale with discipline while staying anchored to purpose.",
    ],
    // focus: ["Consumer", "Fintech"],
    photo: "/Team/Roshan.png",
    initials: "TM",
    // linkedin: "https://www.linkedin.com/in/yourprofile",
  },
  {
    name: "Rashmi George",
    role: "Co-founder & Investor, Vruddhi Capital",
    bio: [
      "Rashmi George is a serial entrepreneur and investor known for building scalable, execution-led technology businesses. She co-founded Niveus Solutions, which became one of India’s leading cloud services firms prior to its acquisition by NTT Data.",
      "At Vruddhi Capital, Rashmi partners with founders to build enduring businesses that balance commercial strength with long - term relevance.Her investment approach emphasizes product- market fit, execution discipline, and organizational clarity, while also encouraging companies to integrate sustainable practices and human - centric design from the ground up.",
      "She is particularly drawn to ventures that aim to create lasting value beyond financial returns—whether through responsible innovation, community impact, or environmentally conscious growth.Rashmi takes a hands - on, founder - first approach, working closely with teams to shape resilient, thoughtful companies built to stand the test of time.",
    ],
    // focus: ["Consumer", "Fintech"],
    photo: "/Team/Rashmi.png",
    initials: "TM",
    // linkedin: "https://www.linkedin.com/in/yourprofile",
  },
  {
    name: "Ajit Narayan",
    role: "Venture Partner, Vruddhi Capital",
    bio: [
      "Ajit Narayan is a capital allocator, operator, and advisor with 20 years of experience across marketing, business strategy, and growth leadership. He previously served as Vice President – Global Marketing at Experion Technologies, where he worked closely with leadership on scaling the business through its growth phase and eventual acquisition.",
      "Across his career, he has been associated with companies that have achieved significant outcomes, including MobiKwik (IPO) and Niveus (acquired). He later transitioned into capital markets as a professional trader, bringing a strong lens on risk, timing, and capital efficiency to his investing approach",
      "At Vruddhi Capital, Ajit leads deal sourcing and originates high-quality investment opportunities, bringing startups with strong compounding potential into the Vruddhi ecosystem. He also selectively supports portfolio companies on positioning and go-to-market, with an emphasis on sustainable growth.",
    ],
    // focus: ["Consumer", "Fintech"],
    photo: "/Team/Ajith.jpeg",
    initials: "AN",
    // linkedin: "https://www.linkedin.com/in/yourprofile",
  },
    {
    name: "Sandeep Prabhu K",
    role: "Head of Investments, Vruddhi Capital",
    bio: [
      "Sandeep Prabhu K is a finance and transaction specialist with over 16 years of experience in M&A, acquisitions, tax, and regulatory advisory. He has advised on 300+ transactions across sectors including IT, real estate, pharmaceuticals, manufacturing, and e-commerce.",
      "He has spent his career across leading Big Four firms, most recently serving as a Director, where he worked on complex, high-value deals and strategic transactions. He is a Chartered Accountant and holds a Bachelor’s degree in Commerce.",
      "At Vruddhi Capital, Sandeep evaluates investment opportunities from a financial, commercial, and operational perspective and is an integral part of the investment committee. Post-investment, he oversees portfolio performance, operations, and compliance, with a focus on financial discipline and ongoing monitoring of business health.",
    ],
    // focus: ["Consumer", "Fintech"],
    photo: "/Team/Sandeep.jpeg",
    initials: "SP",
    // linkedin: "https://www.linkedin.com/in/yourprofile",
  },

];

// const advisors = [
//   {
//     name: "Advisor Name",
//     role: "Advisor",
//     expertise: "Domain expertise area",
//     initials: "AN",
//     photo: "/team/advisor-one.jpg",
//     linkedin: "https://www.linkedin.com/in/yourprofile",
//   },
//   {
//     name: "Advisor Name",
//     role: "Advisor",
//     expertise: "Domain expertise area",
//     initials: "AN",
//     photo: "/team/advisor-one.jpg",
//     linkedin: "https://www.linkedin.com/in/yourprofile",
//   },
// ];

export default function TeamPage() {
  return (
    <>
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

      <section className="py-16 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, i) => (
              <div key={i} className="card-dark p-8 group flex flex-col">
                <div className="w-20 h-20 rounded-full border border-brand-orange/40 overflow-hidden mb-6 group-hover:border-brand-orange transition-colors duration-300 flex items-center justify-center flex-shrink-0">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <span className="font-display text-2xl font-light text-brand-orange">
                      {member.initials}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-xl font-light text-brand-off-white mb-1">
                  {member.name}
                </h3>
                <p className="font-body text-xs tracking-widest uppercase text-brand-orange mb-6">
                  {member.role}
                </p>
                <div className="orange-line mb-6" />
                <div className="flex flex-col gap-3 mb-6 flex-grow">
                  {Array.isArray(member.bio) ? (
                    member.bio.map((paragraph, p) => (
                      <p key={p} className="body-text text-sm text-justify">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="body-text text-sm">{member.bio}</p>
                  )}
                </div>
                {/* <div className="flex flex-wrap gap-2">
                  {member.focus.map((area, j) => (
                    <span
                      key={j}
                      className="font-body text-xs text-brand-gray-light border border-[#2A2A2A] px-3 py-1"
                    >
                      {area}
                    </span>
                  ))}
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>



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
} 104