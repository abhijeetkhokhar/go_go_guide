import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-white text-brand-black antialiased">
      {/* ================= HERO - SaaS Level ================= */}
      <section className="relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-linear-to-br from-gray-50 via-white to-red-50/30 pointer-events-none" />
        {/* Decorative gradient orbs */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 w-[400px] h-[400px] rounded-full bg-brand-red/5 blur-3xl -translate-x-1/2 pointer-events-none" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-36 lg:pb-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24">
            {/* Text Side */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <p className="text-sm font-semibold text-brand-red uppercase tracking-wider mb-4">
                Professional Radio Rentals
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-black tracking-tight leading-[1.1]">
                Seamless audio for
                <span className="text-brand-red"> every tour</span>
              </h1>

              <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Crystal-clear radio guides for museums, city tours, and events.
                Book online, we deliver — simple as that.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center bg-brand-red text-white font-semibold py-3.5 px-8 rounded-lg hover:bg-brand-black transition-all duration-200 shadow-lg shadow-brand-red/20 hover:shadow-xl"
                >
                  Book Now
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center bg-white text-gray-700 font-semibold py-3.5 px-8 rounded-lg border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                >
                  View Products
                </Link>
              </div>
            </div>

            {/* Image Side - Full-bleed product showcase */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-lg">
                {/* Decorative glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-brand-red/10 to-brand-red/5 rounded-3xl blur-2xl" />
                {/* Image card - no empty space */}
                <div className="relative overflow-hidden rounded-2xl border border-gray-200/80 shadow-2xl shadow-gray-200/50 aspect-[4/3] sm:aspect-[5/4]">
                  <Image
                    src="/RadioImg.jpeg"
                    alt="Go Go Guide radio equipment"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Subtle gradient overlay at top for polish */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-red uppercase tracking-wider mb-3">
              How it works
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black">
              Rentals in 3 Easy Steps
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Simple, transparent, and hassle-free — from browse to delivery.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-4 lg:gap-6">
            {[
              {
                n: "01",
                t: "Browse & Select",
                d: "Discover our range of radio guides and make your personalized reservation online.",
              },
              {
                n: "02",
                t: "Customize & Confirm",
                d: "Specify units, dates, and details. Receive an email confirmation instantly.",
              },
              {
                n: "03",
                t: "Delivery & Pickup",
                d: "We deliver to your location, answer queries, and collect afterwards.",
              },
            ].map((step, idx) => (
              <div key={idx} className="flex flex-1 items-center gap-4">
                <div className="flex-1 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl hover:border-brand-red/20 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-red text-white font-bold text-sm mb-6">
                    {step.n}
                  </div>
                  <h3 className="text-xl font-bold text-brand-black mb-4">
                    {step.t}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed flex-grow">
                    {step.d}
                  </p>
                </div>
                {idx < 2 && (
                  <div className="hidden md:flex items-center justify-center shrink-0 w-8">
                    <svg
                      className="w-5 h-5 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-red uppercase tracking-wider mb-3">
              What We Offer
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
              Why Choose <span className="text-brand-red">Go Go</span> Guide?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Everything you need for seamless audio communication at your
              events.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                t: "Premium Equipment",
                d: "Top-quality radio guide systems with crystal-clear audio for any environment.",
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
                t: "International Service",
                d: "We deliver and support events worldwide, wherever your business takes you.",
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
                t: "Easy Rental Process",
                d: "Simple booking, fast delivery, and hassle-free returns. Focus on your event.",
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
                t: "Reliable Support",
                d: "24/7 technical support ensures your event runs smoothly without interruptions.",
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
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl hover:border-brand-red/20 transition-all duration-300 h-full flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-4">
                  {item.t}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed flex-grow">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-brand-red py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to book the system?
          </h2>
          <p className="text-white/90 text-lg max-w-xl mx-auto mb-10">
            Fill in the form and we&apos;ll get back to you with availability
            and confirmation.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center justify-center bg-white text-brand-red font-semibold py-3.5 px-8 rounded-lg hover:bg-brand-black hover:text-white transition-all duration-200 shadow-lg"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </main>
  );
}
