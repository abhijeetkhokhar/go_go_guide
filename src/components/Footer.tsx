import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-xl font-bold tracking-tight">
                <span className="text-brand-red">Go Go</span>
                <span className="text-white"> Guide</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Professional radio guide equipment rentals since 1996. Crystal clear audio for your tours and events.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: "About", href: "/about" },
                { label: "Book Now", href: "/booking" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <span className="block text-gray-500 text-xs uppercase tracking-wider mb-1">Email</span>
                <a href="mailto:info@goguide.com" className="hover:text-white transition-colors duration-200">
                  info@goguide.com
                </a>
              </li>
              <li>
                <span className="block text-gray-500 text-xs uppercase tracking-wider mb-1">Phone</span>
                <a href="tel:+15550000000" className="hover:text-white transition-colors duration-200">
                  +1 (555) 000-0000
                </a>
              </li>
              <li>
                <span className="block text-gray-500 text-xs uppercase tracking-wider mb-1">Address</span>
                <span>Main St 123, Tour District</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-xs tracking-wider text-center">
            © {currentYear} Go Go Guide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
