import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Pitch",
  description:
    "Pitch your startup to Vruddhi Capital. We invest in mission-driven founders from pre-seed to late stage across India.",
};

const contactInfo = [
  {
    label: "Email",
    value: "ajit@vruddhicapital.com",
    href: "mailto:ajit@vruddhicapital.com",
  },
  // {
  //   label: "Location",
  //   value: "Udupi, Karnataka, India",
  //   href: null,
  // },
  {
    label: "Investment Stage",
    value: "Pre-Seed to Late Stage",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-orange/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="orange-line mb-8" />
          <h1 className="section-heading mb-6">
            Pitch
            <span className="block italic accent-text">to Us</span>
          </h1>
          <p className="body-text max-w-2xl">
            Tell us about what you are building. We read every submission and
            respond to founders we want to learn more about.
          </p>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section className="py-16 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Left — contact info */}
            <div className="lg:col-span-1">
              <h2 className="font-display text-2xl font-light text-brand-off-white mb-8">
                Get in Touch
              </h2>

              <div className="flex flex-col gap-8 mb-12">
                {contactInfo.map((info, i) => (
                  <div key={i}>
                    <p className="font-body text-xs tracking-widest uppercase text-brand-orange mb-2">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="font-body text-brand-gray-light hover:text-brand-off-white transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-body text-brand-gray-light">
                        {info.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* What we look for */}
              <div className="card-dark p-8">
                <h3 className="font-body text-xs tracking-widest uppercase text-brand-orange mb-6">
                  We Love Founders Who
                </h3>
                <ul className="flex flex-col gap-4">
                  {[
                    "Have deep domain expertise",
                    "Are building in large markets",
                    "Have early validation or traction",
                    "Think long-term",
                    "Are mission-driven",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                      <span className="font-body text-sm text-brand-gray-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
