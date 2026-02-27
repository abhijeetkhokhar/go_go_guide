import { pricingPlans } from "@/lib/pricing";
import Link from "next/link";
import { Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radio Guide Rental & Purchase Pricing | Transparent Plans",
  description:
    "Compare radio guide rental and purchase plans. From daily rental to outright purchase and enterprise solutions. Transparent pricing, no hidden fees. Get a quote today.",
  keywords: [
    "radio guide rental price",
    "tour guide system pricing",
    "museum audio equipment cost",
    "wireless tour guide rental",
  ],
  openGraph: {
    title: "Pricing | Radio Guide Rental & Purchase | Go Go Guide",
    description: "Transparent pricing for radio guide rental and purchase. Monthly rental, outright purchase, enterprise.",
  },
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50/80 to-gray-50 pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16 lg:mb-20" aria-label="Pricing overview">
          <p className="text-sm font-semibold text-brand-red uppercase tracking-widest mb-4 font-heading">
            Transparent pricing
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-black mb-5 tracking-tight leading-[1.1]">
            Rent or own —{" "}
            <span className="text-brand-red">you choose</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            No hidden fees. Whether you need short-term rental for one event or equipment for the long term, we have a plan that fits.
          </p>
        </header>

        {/* Pricing Cards */}
        <section
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-20 lg:mb-24"
          aria-label="Pricing plans"
        >
          {pricingPlans.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? "bg-white border-2 border-brand-red shadow-xl shadow-brand-red/10 ring-2 ring-brand-red/20 ring-offset-4 ring-offset-gray-50 scale-[1.02] lg:scale-105 z-10"
                  : "bg-white border-2 border-gray-200/90 shadow-md hover:shadow-xl hover:border-brand-red/30 hover:shadow-brand-red/5"
              }`}
            >
              {/* Popular: red accent bar */}
              {plan.popular && (
                <>
                  <div className="h-1.5 w-full bg-gradient-to-r from-brand-red via-brand-red to-brand-red/90" />
                  <div className="absolute top-4 right-4">
                    <span className="font-heading inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-red text-white shadow-md">
                      Most popular
                    </span>
                  </div>
                </>
              )}

              <div className="p-8 flex flex-col flex-grow">
                {/* Plan Header */}
                <div className={`text-center mb-8 ${plan.popular ? "pt-2" : "pt-4"}`}>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-black mb-3">
                    {plan.name}
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-1">
                    <span className="font-heading text-4xl sm:text-5xl font-bold text-brand-black tracking-tight">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">{plan.billingCycle}</p>
                </div>

                {/* Features */}
                <div className="grow mb-8">
                  <ul className="space-y-4" role="list">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red/10 ring-1 ring-brand-red/20">
                          <Check className="h-3.5 w-3.5 text-brand-red" strokeWidth={2.5} />
                        </span>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  href={plan.ctaHref}
                  className={`font-heading w-full py-4 px-6 rounded-xl font-semibold text-center transition-all duration-200 ${
                    plan.popular
                      ? "bg-brand-red text-white hover:bg-brand-black shadow-lg shadow-brand-red/25 hover:shadow-xl hover:scale-[1.02]"
                      : "bg-gray-100 text-brand-black hover:bg-gray-200 hover:border-brand-red/20 border-2 border-transparent"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </article>
          ))}
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto" aria-labelledby="pricing-faq-heading">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-red uppercase tracking-widest mb-3 font-heading">
              Common questions
            </p>
            <h2 id="pricing-faq-heading" className="font-heading text-3xl sm:text-4xl font-bold text-brand-black tracking-tight">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What's included in the monthly rental?",
                a: "Everything you need: equipment, maintenance, 24/7 technical support, and free delivery and pickup. You also get access to equipment upgrades as new models become available.",
              },
              {
                q: "Can I switch between plans?",
                a: "Yes. You can move from monthly rental to outright purchase at any time. We credit a portion of your rental payments toward the purchase price.",
              },
              {
                q: "Do you offer bulk discounts?",
                a: "We do. Bulk orders on both rental and purchase get significant discounts. Contact us for a custom quote based on your needs.",
              },
              {
                q: "What kind of support do you get?",
                a: "All plans include technical support. Monthly rentals get 24/7 support; purchases include lifetime support; enterprise clients get a dedicated account manager.",
              },
            ].map((faq, idx) => (
              <article
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200/80 shadow-sm hover:shadow-lg hover:border-brand-red/20 transition-all duration-300"
              >
                <h3 className="font-heading font-bold text-brand-black mb-3 text-lg">
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA strip */}
        <section className="mt-16 lg:mt-20 text-center" aria-label="Get a quote">
          <p className="text-gray-600 mb-4">
            Need a custom quote or have questions?{" "}
            <Link href="/contact" className="text-brand-red font-semibold hover:underline">
              Contact us
            </Link>{" "}
            — we reply within 24 hours.
          </p>
        </section>
      </div>
    </main>
  );
}
