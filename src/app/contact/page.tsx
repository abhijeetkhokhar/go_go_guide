import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Go Go Guide | Wireless Tour Guide System Rental Support",
  description:
    "Contact Go Go Guide for wireless tour guide system rentals, radio guide equipment, and group tour audio solutions. Get support, request a quote, or ask about equipment availability.",
  keywords: [
    "tour guide system rental contact",
    "radio guide equipment support",
    "wireless tour guide system rental",
    "tour guide headset system",
    "museum audio guide equipment",
    "guided tour audio system",
    "tour guide equipment provider",
  ],
  openGraph: {
    title: "Contact Go Go Guide | Tour Guide Equipment Rental",
    description:
      "Get in touch with Go Go Guide for professional wireless tour guide systems and radio guide equipment rentals for tours, museums, and events.",
  },
};

export default function ContactPage() {
  const contactItems = [
    {
      label: "Email",
      href: "mailto:gogoguideinfo@gmail.com",
      value: "gogoguideinfo@gmail.com",
      icon: (
        <svg
          className="w-6 h-6 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      label: "Phone",
      href: "tel:+15550000000",
      value: "+1 (555) 000-0000",
      icon: (
        <svg
          className="w-6 h-6 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
    {
      label: "Office",
      href: null,
      value: "Tour Operations Office, Global Events District",
      icon: (
        <svg
          className="w-6 h-6 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-white antialiased">
      {/* Hero */}
      <section className="relative overflow-hidden" aria-label="Contact us">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-red-50/40 pointer-events-none" />
        <div className="absolute top-20 right-0 w-[450px] h-[450px] rounded-full bg-brand-red/8 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-brand-red/6 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-12 lg:pb-16">
          <header className="text-center max-w-3xl mx-auto">
            <div className="mb-5">
              <span className="inline-block h-0.5 w-12 bg-brand-red rounded-full mb-4" />
              <p className="text-sm font-semibold text-brand-red uppercase tracking-widest font-heading">
                Get in touch
              </p>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-black tracking-tight leading-[1.1] mb-5">
              Let&apos;s start a{" "}
              <span className="text-brand-red">conversation</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6">
              Planning a guided tour, organizing a museum visit, or managing a
              large group event? Contact Go Go Guide for professional wireless
              tour guide systems and radio guide equipment rentals tailored to
              your needs.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200/80 px-4 py-2 text-sm font-medium text-gray-700">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              We reply within 24 hours
            </div>
          </header>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative pb-24" aria-label="Contact form and details">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/90 to-gray-50 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-2 lg:-mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* LEFT: Contact details */}
            <div className="space-y-6">
              <div>
                <h2 className="font-heading text-sm font-semibold text-brand-red uppercase tracking-widest mb-4">
                  Contact details
                </h2>
                <div className="space-y-4">
                  {contactItems.map((item) => (
                    <article
                      key={item.label}
                      className="group bg-white rounded-2xl border-2 border-gray-200/80 p-5 sm:p-6 shadow-md hover:shadow-lg hover:border-brand-red/25 transition-all duration-300 flex items-center gap-4"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red ring-1 ring-brand-red/20 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 shrink-0">
                        {item.icon}
                      </span>
                      <div className="flex-grow">
                        <p className="text-xs font-semibold text-brand-red uppercase tracking-wider mb-1.5 font-heading">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-brand-black font-semibold text-sm sm:text-base hover:text-brand-red transition-colors break-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-700 font-medium text-sm sm:text-base leading-snug">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border-2 border-green-200/80 bg-green-50/50 px-5 py-4 flex items-center gap-3">
                <span className="inline-flex h-3 w-3 rounded-full bg-green-500 animate-pulse shrink-0" />
                <p className="text-gray-700 font-medium text-sm">
                  We usually reply within{" "}
                  <strong className="text-brand-black">24 hours</strong>.
                </p>
              </div>
            </div>

            {/* RIGHT: Contact Form (Client Side) */}
            <div className="lg:pt-0">
              <div className="bg-white rounded-2xl border-2 border-gray-200/90 shadow-xl overflow-hidden hover:shadow-2xl hover:border-brand-red/25 transition-all duration-300">
                <div className="h-1.5 w-full bg-gradient-to-r from-brand-red via-brand-red to-brand-red/80" />
                <div className="p-8 sm:p-10">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
