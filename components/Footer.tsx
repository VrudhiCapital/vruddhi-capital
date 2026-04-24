import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={140}
              height={50}
              className="h-10 w-auto object-contain mb-6"
            />
            <p className="body-text max-w-sm mb-6">
              Backing mission-driven founders building scalable businesses
              across India&apos;s emerging markets.
            </p>
            <p className="font-body text-sm text-[#555555]">
              
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-body text-xs tracking-widest uppercase text-brand-orange mb-6">
              Navigate
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Team", href: "/team" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-brand-gray-light hover:text-brand-orange transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-body text-xs tracking-widest uppercase text-brand-orange mb-6">
              Connect
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="mailto:ajit@vruddhicapital.com"
                  className="font-body text-sm text-brand-gray-light hover:text-brand-orange transition-colors duration-300"
                >
                  ajit@vruddhicapital.com
                </a>
              </li>
              <li>
                <p className="font-body text-sm text-brand-gray-light">
                 
                </p>
              </li>
              <li className="pt-4">
                <Link href="/contact" className="btn-outline text-xs">
                  Pitch to Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1A1A1A] mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[#444444]">
            © {new Date().getFullYear()} Vruddhi Capital. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}
