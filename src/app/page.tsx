import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radio Guide Rentals | Wireless Tour Audio for Museums & Events",
  description:
    "Rent professional radio guide systems for city tours, museums, and events. Crystal-clear wireless tour audio since 1996. Book online — we deliver. Trusted worldwide.",
  keywords: [
    "radio guide rental",
    "tour guide system",
    "museum audio equipment",
    "wireless tour guide",
    "event audio rental",
    "group tour headsets",
  ],
  openGraph: {
    title: "Radio Guide Rentals | Wireless Tour Audio | Go Go Guide",
    description:
      "Crystal-clear radio guide rentals for tours, museums, and events. Book online, we deliver — professional audio since 1996.",
  },
};

export default function HomePage() {
  return (
    <main className="bg-white text-brand-black antialiased">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden" aria-label="Hero">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-red-50/40 pointer-events-none" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-brand-red/8 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 w-[400px] h-[400px] rounded-full bg-brand-red/6 blur-3xl -translate-x-1/2 pointer-events-none" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24">
            <header className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start mb-2">
                <span className="inline-block h-0.5 w-12 bg-brand-red rounded-full mb-4" />
                <p className="text-sm font-semibold text-brand-red uppercase tracking-widest font-heading">
                  Wireless Tour Audio Since 1996
                </p>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-black tracking-tight leading-[1.1]">
                Everyone hears you.
                <span className="text-brand-red"> Every time.</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Rent professional radio guide systems for museums, city tours, and events. Book online in minutes — we deliver to your venue. No hidden fees.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/booking"
                  className="font-heading inline-flex items-center justify-center bg-brand-red text-white font-semibold py-4 px-8 rounded-xl hover:bg-brand-black transition-all duration-200 shadow-lg shadow-brand-red/25 hover:shadow-xl hover:scale-[1.02] ring-2 ring-brand-red/20 hover:ring-brand-red/40"
                >
                  Reserve your equipment
                </Link>
                <Link
                  href="/products"
                  className="font-heading inline-flex items-center justify-center bg-white text-brand-black font-semibold py-4 px-8 rounded-xl border-2 border-gray-200 hover:border-brand-red/40 hover:bg-red-50/50 hover:shadow-md transition-all duration-200"
                >
                  See products & pricing
                </Link>
              </div>
            </header>

            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-lg">
                {/* Soft glow behind card */}
                <div className="absolute -inset-6 bg-gradient-to-br from-brand-red/12 via-brand-red/5 to-transparent rounded-[2rem] blur-2xl pointer-events-none" />
                {/* Image card with frame */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-200/90 shadow-2xl shadow-gray-400/30 ring-1 ring-black/5 bg-white">
                  {/* Red accent bar */}
                  <div className="h-2 w-full bg-gradient-to-r from-brand-red via-brand-red to-brand-red/90" />
                  {/* Image area - full product visible, no harsh crop */}
                  <div className="relative aspect-[4/3] sm:aspect-[5/4] bg-gradient-to-b from-gray-50 to-white">
                    <Image
                      src="/RadioImg.jpeg"
                      alt="Professional wireless radio guide equipment for tours and events - Go Go Guide"
                      fill
                      className="object-contain p-6 sm:p-8 drop-shadow-md"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  {/* Subtle bottom gradient for depth */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="how-it-works-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block h-0.5 w-12 bg-brand-red rounded-full mb-4" />
            <p className="text-sm font-semibold text-brand-red uppercase tracking-widest mb-3 font-heading">
              How it works
            </p>
            <h2 id="how-it-works-heading" className="font-heading text-4xl md:text-5xl font-bold text-brand-black tracking-tight">
              Book in 3 steps — we handle the rest
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              No hidden fees. No complicated contracts. Reserve online, we deliver to your venue.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-4 lg:gap-8">
            {[
              {
                n: "01",
                t: "Choose your equipment",
                d: "Pick the radio guide system that fits your group size and venue. See products and pricing in minutes.",
              },
              {
                n: "02",
                t: "Confirm dates & details",
                d: "Tell us when and where. We send confirmation and answer any questions before your event.",
              },
              {
                n: "03",
                t: "We deliver — you shine",
                d: "Equipment arrives at your location. After the event, we collect. You focus on your guests.",
              },
            ].map((step, idx) => (
              <div key={idx} className="flex flex-1 items-center gap-4">
                <article className="flex-1 bg-white rounded-2xl border-2 border-gray-200/80 p-8 lg:p-9 shadow-md hover:shadow-xl hover:border-brand-red/30 hover:shadow-brand-red/5 transition-all duration-300 h-full flex flex-col overflow-hidden">
                  <div className="h-0.5 w-full bg-brand-red/20 rounded-full -mx-2 mb-6" />
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-brand-red text-white font-heading font-bold text-base mb-6 shadow-lg shadow-brand-red/20">
                    {step.n}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-brand-black mb-4">
                    {step.t}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed flex-grow">
                    {step.d}
                  </p>
                </article>
                {idx < 2 && (
                  <div className="hidden md:flex items-center justify-center shrink-0 w-8">
                    <svg
                      className="w-6 h-6 text-brand-red/40"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="py-20 lg:py-24 bg-white" aria-labelledby="why-choose-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block h-0.5 w-12 bg-brand-red rounded-full mb-4" />
            <p className="text-sm font-semibold text-brand-red uppercase tracking-widest mb-3 font-heading">
              Why choose us
            </p>
            <h2 id="why-choose-heading" className="font-heading text-4xl md:text-5xl font-bold text-brand-black mb-4 tracking-tight">
              Why Choose <span className="text-brand-red">Go</span>{" "}
              <span className="text-black">Go</span>{" "}
              <span className="text-brand-red">Guide</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Professional radio guide rentals trusted by museums, tour operators, and event organizers worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" role="list">
            {[
              {
                t: "Premium equipment",
                d: "Crystal-clear wireless tour guide systems built for museums, city tours, and large events. No dropouts, no fuss.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  </svg>
                ),
              },
              {
                t: "Worldwide delivery",
                d: "We deliver and support events across 50+ countries. Same reliable equipment and support wherever you are.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V8.935M12 12.35V12a2 2 0 00-2-2h-.5a2.5 2.5 0 01-2.5-2.5V8.935"
                    />
                  </svg>
                ),
              },
              {
                t: "Simple booking",
                d: "Reserve online in minutes. We deliver to your venue and collect after. No long-term contracts or hidden fees.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                t: "Support when you need it",
                d: "24/7 technical support so your event runs smoothly. We're here before, during, and after your rental.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12 12 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <article
                key={idx}
                className="group bg-white rounded-2xl border-2 border-gray-200/80 p-8 lg:p-9 shadow-md hover:shadow-xl hover:border-brand-red/30 hover:shadow-brand-red/5 transition-all duration-300 h-full flex flex-col"
                role="listitem"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-6 ring-1 ring-brand-red/20 group-hover:ring-brand-red transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-black mb-4">
                  {item.t}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed flex-grow">
                  {item.d}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative bg-brand-red py-20 lg:py-24 overflow-hidden" aria-label="Book your rental">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-red to-brand-red/95 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight">
            Ready to make every word heard?
          </h2>
          <p className="text-white/95 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Reserve your radio guide equipment in minutes. We&apos;ll confirm availability and deliver to your venue — no hassle.
          </p>
          <Link
            href="/booking"
            className="font-heading inline-flex items-center justify-center bg-white text-brand-red font-semibold py-4 px-10 rounded-xl hover:bg-brand-black hover:text-white transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-[1.02] ring-2 ring-white/20 hover:ring-white/40"
          >
            Reserve your equipment now
          </Link>
        </div>
      </section>
    </main>
  );
}
