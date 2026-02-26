import { pricingPlans } from "@/lib/pricing";
import Link from "next/link";
import { Check } from "lucide-react";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-red uppercase tracking-wider mb-3">
            Pricing Plans
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-black mb-4">
            Choose Your <span className="text-brand-red">Solution</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Flexible pricing options designed to meet your specific needs.
            Whether you need short-term rentals or want to own your equipment
            outright.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl border-2 ${
                plan.popular
                  ? "border-brand-red shadow-xl"
                  : "border-gray-200 shadow-sm"
              } p-8 flex flex-col`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-brand-red text-white">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-brand-black mb-3">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-2">
                  <span className="text-5xl font-bold text-brand-black">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{plan.billingCycle}</p>
              </div>

              {/* Features */}
              <div className="grow mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-brand-red mr-3 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Link
                href={plan.ctaHref}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-200 ${
                  plan.popular
                    ? "bg-brand-red text-white hover:bg-brand-black shadow-md"
                    : "bg-gray-100 text-brand-black hover:bg-gray-200"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-black mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-brand-black mb-2">
                What&#39;s included in the monthly rental?
              </h3>
              <p className="text-gray-600">
                Our monthly rental includes all equipment, maintenance, 24/7
                technical support, and free delivery/pickup. You&#39;ll also
                have access to equipment upgrades as newer models become
                available.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-brand-black mb-2">
                Can I switch between plans?
              </h3>
              <p className="text-gray-600">
                Yes! You can upgrade from monthly rental to outright purchase at
                any time. We&apos;ll credit a portion of your rental payments
                toward the purchase price.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-brand-black mb-2">
                Do you offer bulk discounts?
              </h3>
              <p className="text-gray-600">
                Absolutely! We offer significant discounts for bulk orders on
                both rental and purchase plans. Contact our sales team for a
                custom quote based on your specific needs.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-brand-black mb-2">
                What kind of support do you provide?
              </h3>
              <p className="text-gray-600">
                All plans include comprehensive technical support. Monthly
                rentals get 24/7 support, purchases include lifetime support,
                and enterprise clients have a dedicated account manager.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
