import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-brand-black text-white overflow-hidden"
      role="contentinfo"
    >
      {/* Subtle red gradient at top for depth */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 font-heading group">
              <span className="inline-block h-0.5 w-10 bg-brand-red rounded-full mb-4" />
              <span className="font-bold tracking-tight block text-[19px] md:text-[17px]">
                <span className="text-brand-red">Go</span>{" "}
                <span className="text-white">Go</span>{" "}
                <span className="text-brand-red">Guide</span>
              </span>
            </Link>
            {/* Mobile: 18px | Desktop: 16px */}
            <p className="text-gray-400 leading-relaxed max-w-xs text-[18px] md:text-[16px]">
              Crystal-clear radio guide rentals. Trusted by professionals
              worldwide. We deliver — you focus on your event.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="font-heading font-semibold text-white uppercase tracking-widest mb-6 text-[18px] md:text-[16px]">
              Quick Links
            </h3>
            <ul
              className="space-y-3.5 text-gray-400 text-[18px] md:text-[16px]"
              role="list"
            >
              {[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: "Pricing", href: "/pricing" },
                { label: "About", href: "/about" },
                { label: "Book Now", href: "/booking" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 font-medium hover:text-brand-red transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Support */}
          <div>
            <h3 className="font-heading font-semibold text-white uppercase tracking-widest mb-6 text-[18px] md:text-[16px]">
              Support
            </h3>
            <ul className="space-y-3.5" role="list">
              {[
                { label: "Contact us", href: "/contact" },
                { label: "FAQs", href: "/booking#faq" },
                { label: "Terms of Service", href: "#" },
                { label: "Privacy Policy", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 font-medium hover:text-brand-red transition-colors duration-200 text-[18px] md:text-[16px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white uppercase tracking-widest mb-6 text-[18px] md:text-[16px]">
              Get in touch
            </h3>
            <ul
              className="space-y-4 text-gray-400 text-[18px] md:text-[16px]"
              role="list"
            >
              <li>
                <span className="block text-gray-500 font-semibold uppercase tracking-wider mb-1.5 text-[17px] md:text-[15px]">
                  Email
                </span>
                <a
                  href="mailto:gogoguideinfo@gmail.com"
                  className="text-white/90 hover:text-brand-red transition-colors duration-200 font-medium"
                >
                  gogoguideinfo@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-gray-500 font-semibold uppercase tracking-wider mb-1.5 text-[17px] md:text-[15px]">
                  Phone
                </span>
                <a
                  href="tel:+15550000000"
                  className="text-white/90 hover:text-brand-red transition-colors duration-200 font-medium"
                >
                  +1 (555) 000-0000
                </a>
              </li>
              <li>
                <span className="block text-gray-500 font-semibold uppercase tracking-wider mb-1.5 text-[17px] md:text-[15px]">
                  Address
                </span>
                <span className="text-white/80">
                  Main St 123, Tour District
                </span>
              </li>
            </ul>
            <p className="mt-4 text-gray-500 text-[18px] md:text-[16px]">
              We reply within 24 hours.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 lg:mt-20 pt-8 border-t border-white/10">
          <p className="text-gray-500 tracking-wider text-center text-[18px] md:text-[16px]">
            © {currentYear} <span className="text-brand-red">Go</span>{" "}
            <span className="text-white">Go</span>{" "}
            <span className="text-brand-red">Guide</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
