import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      title: "Quality First",
      description: "Premium equipment that meets the highest standards of audio clarity and reliability.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "Customer Focus",
      description: "Your success is our priority. We go above and beyond to ensure your event runs smoothly.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Global Reach",
      description: "Operating worldwide, we deliver and support events in over 50 countries.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V8.935M12 12.35V12a2 2 0 00-2-2h-.5a2.5 2.5 0 01-2.5-2.5V8.935" />
        </svg>
      ),
    },
    {
      title: "Sustainability",
      description: "Environmental responsibility through reusable equipment and eco-friendly practices.",
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
    <main className="bg-white text-brand-black">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-red-50/20 pointer-events-none" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-28">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <p className="text-sm font-semibold text-brand-red uppercase tracking-wider mb-4">
                About Us
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-black tracking-tight leading-[1.1]">
                Crystal-clear audio
                <br />
                <span className="text-brand-red">for every tour</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Since 1996, <span className="font-semibold"><span className="text-brand-red">Go Go</span> Guide</span> has been at the forefront of radio guide rentals. Our mission: make sure every word is heard clearly — no matter the crowd or environment.
              </p>
              <div className="mt-10 flex flex-wrap gap-8 justify-center lg:justify-start">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-brand-red">{stat.value}</div>
                    <div className="text-sm text-gray-500 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-4 bg-gradient-to-br from-brand-red/10 to-brand-red/5 rounded-3xl blur-2xl" />
                <div className="relative overflow-hidden rounded-2xl border border-gray-200/80 shadow-2xl shadow-gray-200/50">
                  <div className="h-1.5 w-full bg-gradient-to-r from-brand-red to-brand-red/70" />
                  <div className="relative aspect-[5/4] bg-gray-50">
                    <Image
                      src="/RadioImg.jpeg"
                      alt="Go Go Guide radio equipment"
                      fill
                      className="object-contain p-6"
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
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="h-1 w-24 bg-brand-red rounded-full mb-8 mx-auto lg:mx-0" />
            <blockquote className="text-2xl sm:text-3xl font-medium text-brand-black leading-relaxed text-center lg:text-left">
              &ldquo;Our &lsquo;Book Now, Pay Later&rsquo; philosophy is built on trust. We handle the logistics so you can focus on the experience.&rdquo;
            </blockquote>
            <p className="mt-6 text-gray-500 text-base">
              Today we support museums, city tour operators, and event organizers who demand simplicity and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* ================= OUR VALUES ================= */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-red uppercase tracking-wider mb-3">
              What We Stand For
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl hover:border-brand-red/20 transition-all duration-300 h-full flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-4">{item.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed flex-grow">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-brand-red py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to book the system?
          </h2>
          <p className="text-white/90 text-lg max-w-xl mx-auto mb-10">
            Fill in the form and we&apos;ll get back to you with availability and confirmation.
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
