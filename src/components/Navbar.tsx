"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b border-gray-200/80 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - Image-based */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center group"
          >
            <Image
              src="/goguide_logo_1.png"
              alt="Go Go Guide"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors duration-200 ${
                      active
                        ? "text-brand-red"
                        : "text-gray-600 hover:text-brand-red"
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-brand-red rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            <Link
              href="/booking"
              className="rounded-lg bg-brand-red px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-black transition-all duration-200"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 p-2 -mr-2 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-5 bg-gray-700 transition-all duration-200 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-gray-700 transition-opacity duration-200 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-gray-700 transition-all duration-200 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="flex flex-col gap-1 px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-gray-100 text-brand-black"
                    : "text-gray-600 hover:bg-gray-50 hover:text-brand-black"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/booking"
              onClick={() => setIsOpen(false)}
              className="mt-2 mx-4 rounded-lg bg-brand-red py-3.5 text-center text-white font-semibold hover:bg-brand-black transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
