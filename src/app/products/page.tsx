import { radioProducts } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radio Guide Systems & Tour Audio Equipment",
  description:
    "Rent professional radio guide systems for city tours, museums, and events. Wireless tour guide equipment with crystal-clear audio. Compare models and get instant pricing.",
  keywords: [
    "radio guide rental",
    "tour guide system",
    "museum audio equipment",
    "wireless tour guide",
    "group tour headsets",
    "event audio rental",
  ],
  openGraph: {
    title: "Radio Guide Systems & Tour Audio | Go Go Guide",
    description: "Professional wireless tour guide equipment for museums, city tours, and events. Rent crystal-clear radio guide systems.",
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50/80 to-gray-50 pt-32 pb-24 antialiased">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <header className="text-center mb-16 lg:mb-20">
          <div className="flex flex-col items-center mb-2">
            <span className="inline-block h-0.5 w-12 bg-brand-red rounded-full mb-4" />
            <p className="text-sm font-semibold text-brand-red uppercase tracking-widest font-heading">
              Professional Tour Audio
            </p>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-black tracking-tight leading-[1.1] mb-5">
            Radio guide systems that{" "}
            <span className="text-brand-red">everyone hears</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Wireless tour guide equipment for museums, city tours, and events. Crystal-clear audio, simple setup, trusted by organizers worldwide since 1996.
          </p>
        </header>

        {/* Product Grid */}
        <section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          aria-label="Radio guide equipment options"
        >
          {radioProducts.map((product, index) => (
            <article
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden border-2 border-gray-200/80 shadow-md hover:shadow-xl hover:shadow-brand-red/5 hover:border-brand-red/40 transition-all duration-300 flex flex-col ring-1 ring-black/5"
            >
              {/* Accent bar + image */}
              <div className="relative">
                <div className="h-1.5 w-full bg-gradient-to-r from-brand-red via-brand-red to-brand-red/80" />
                <div className="relative aspect-[4/3] bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-8 sm:p-10">
                  <Image
                    src={product.image}
                    alt={`${product.name} - wireless tour guide system`}
                    fill
                    className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              <div className="p-8 lg:p-9 flex flex-col flex-grow">
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-black leading-tight">
                  {product.name}
                </h2>
                <p className="mt-3 text-gray-600 text-base leading-relaxed">
                  {product.description}
                </p>

                <ul className="mt-6 space-y-3" role="list">
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red/10 ring-1 ring-brand-red/20">
                        <Check className="h-3.5 w-3.5 text-brand-red" strokeWidth={2.5} />
                      </span>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-100 flex-grow flex flex-col justify-end">
                  <Link
                    href="/pricing"
                    className="font-heading inline-flex items-center justify-center bg-brand-red text-white font-semibold py-3.5 px-6 rounded-xl hover:bg-brand-black transition-all duration-200 shadow-lg shadow-brand-red/20 hover:shadow-xl hover:scale-[1.01] w-full ring-2 ring-brand-red/20 hover:ring-brand-red/40"
                  >
                    See pricing & book
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Trust / SEO block */}
        <section className="mt-20 lg:mt-24 max-w-3xl mx-auto" aria-label="Why choose us">
          <div className="rounded-2xl border-2 border-gray-200/80 bg-white p-8 sm:p-10 shadow-sm">
            <span className="inline-block h-0.5 w-12 bg-brand-red rounded-full mb-4" />
            <h2 className="sr-only">Why choose Go Go Guide radio guide equipment</h2>
            <p className="text-gray-600 leading-relaxed text-center sm:text-left">
              Our <strong className="text-brand-black">radio guide systems</strong> are built for guided tours, museum visits, and large events. Rent by the day or week — we deliver, you focus on your guests. Need help choosing?{" "}
              <Link href="/contact" className="text-brand-red font-semibold hover:underline">
                Contact us
              </Link>{" "}
              for a custom quote.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
