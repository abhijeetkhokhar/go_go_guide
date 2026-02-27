import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Go Go Guide | Radio Guide Rentals Since 1996",
  description:
    "Go Go Guide has delivered crystal-clear wireless tour guide equipment since 1996. Trusted by museums, city tours, and events worldwide. Learn our mission, values, and story.",
  keywords: [
    "radio guide rental company",
    "tour guide system provider",
    "museum audio equipment",
    "Go Go Guide about",
  ],
  openGraph: {
    title: "About Us | Go Go Guide – Radio Guide Rentals Since 1996",
    description: "Professional radio guide rentals since 1996. Mission, values, and global reach.",
  },
};

export default function AboutPage() {
  const values = [
    {
      title: "Quality first",
      description: "We use and rent only equipment that meets the highest standards for audio clarity and reliability — so every guest hears every word.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "Customer focus",
      description: "Your event’s success is our priority. We handle logistics and support so you can focus on delivering a great experience.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Global reach",
      description: "We deliver and support events in 50+ countries. Same reliable equipment and service wherever you are.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V8.935M12 12.35V12a2 2 0 00-2-2h-.5a2.5 2.5 0 01-2.5-2.5V8.935" />
        </svg>
      ),
    },
    {
      title: "Sustainability",
      description: "Reusable equipment and responsible practices. We help you run great events without unnecessary waste.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { value: "1996", label: "Year Founded" },
    { value: "50+", label: "Countries" },
    { value: "28+", label: "Years of Experience" },
  ];

  return (
    <main className="bg-white text-brand-black antialiased">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden" aria-label="About us">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-red-50/40 pointer-events-none" />
        <div className="absolute top-20 right-0 w-[450px] h-[450px] rounded-full bg-brand-red/8 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-brand-red/6 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-16 xl:gap-20">
            {/* Left: copy + stats */}
            <header className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
              <div className="mb-6 flex flex-col items-center lg:items-start">
                <span className="inline-block h-0.5 w-12 bg-brand-red rounded-full mb-4" />
                <p className="text-sm font-semibold text-brand-red uppercase tracking-widest font-heading">
                  Our story
                </p>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-black tracking-tight leading-[1.08]">
                Crystal-clear audio
                <br />
                <span className="text-brand-red">for every tour</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Since 1996, <span className="font-semibold text-brand-black"><span className="text-brand-red">Go</span> <span className="text-black">Go</span> <span className="text-brand-red">Guide</span></span> has been the go-to for radio guide rentals. Our mission: make sure every word is heard clearly — no matter the crowd size or environment.
              </p>

              {/* Stats: card strip */}
              <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto lg:mx-0">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl border-2 border-gray-200/80 px-4 py-5 sm:px-5 sm:py-6 text-center shadow-sm hover:border-brand-red/30 hover:shadow-md hover:shadow-brand-red/5 transition-all duration-200 overflow-hidden"
                  >
                    <div className="h-0.5 w-full bg-brand-red/20 rounded-full mb-4 -mx-2 sm:-mx-3" />
                    <div className="font-heading text-2xl sm:text-3xl font-bold text-brand-red tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-gray-500 mt-1.5 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </header>

            {/* Right: image */}
            <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-4 bg-gradient-to-br from-brand-red/15 to-brand-red/5 rounded-3xl blur-2xl pointer-events-none" />
                <div className="relative overflow-hidden rounded-2xl border-2 border-gray-200/90 shadow-2xl shadow-gray-300/50 ring-1 ring-black/5">
                  <div className="h-1.5 w-full bg-gradient-to-r from-brand-red via-brand-red to-brand-red/80" />
                  <div className="relative aspect-[4/3] sm:aspect-[5/4] bg-gray-100">
                    <Image
                      src="/RadioImg.jpeg"
                      alt="Professional wireless radio guide equipment for tours and events"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUOTE ================= */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50/80" aria-label="Our philosophy">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <article className="relative bg-white rounded-2xl border-2 border-gray-200/80 p-8 sm:p-10 lg:p-12 shadow-md hover:shadow-xl hover:border-brand-red/20 hover:shadow-brand-red/5 transition-all duration-300 border-l-4 border-l-brand-red/50">
            <div className="h-1 w-20 bg-brand-red rounded-full mb-8" />
            <blockquote className="font-heading text-2xl sm:text-3xl font-semibold text-brand-black leading-relaxed">
              &ldquo;Our &lsquo;Book Now, Pay Later&rsquo; philosophy is built on trust. We handle the logistics so you can focus on the experience.&rdquo;
            </blockquote>
            <p className="mt-6 text-gray-600 text-base leading-relaxed">
              Today we support museums, city tour operators, and event organizers who demand simplicity and reliability.
            </p>
          </article>
        </div>
      </section>

      {/* ================= OUR VALUES ================= */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 lg:py-24" aria-labelledby="our-values-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block h-0.5 w-12 bg-brand-red rounded-full mb-4" />
            <p className="text-sm font-semibold text-brand-red uppercase tracking-widest mb-3 font-heading">
              What we stand for
            </p>
            <h2 id="our-values-heading" className="font-heading text-4xl md:text-5xl font-bold text-brand-black mb-4 tracking-tight">
              Our values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" role="list">
            {values.map((item, idx) => (
              <article
                key={idx}
                className="group bg-white rounded-2xl border-2 border-gray-200/80 p-8 lg:p-9 shadow-md hover:shadow-xl hover:border-brand-red/30 hover:shadow-brand-red/5 transition-all duration-300 h-full flex flex-col"
                role="listitem"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-6 ring-1 ring-brand-red/20 group-hover:bg-brand-red group-hover:text-white group-hover:ring-brand-red transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-black mb-4">{item.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed flex-grow">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative bg-brand-red py-20 lg:py-24 overflow-hidden" aria-label="Book your rental">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-red to-brand-red/95 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight">
            Ready to make every word heard?
          </h2>
          <p className="text-white/95 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Reserve your radio guide equipment in minutes. We&apos;ll confirm availability and deliver to your venue.
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
