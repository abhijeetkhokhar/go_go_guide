"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How far in advance should I place my rental order?",
    a: "We recommend booking as early as possible to ensure availability, especially during peak seasons. Last-minute requests may be accommodated depending on stock.",
  },
  {
    q: "How does the delivery and collection process work?",
    a: "We deliver the equipment to your specified location before your rental starts and collect it after the rental period ends.",
  },
  {
    q: "What is included in the radio guide rental?",
    a: "Each rental includes transmitters, receivers, headsets, charging equipment, and a transport case.",
  },
  {
    q: "What can I do if I run into technical issues with the equipment?",
    a: "Our support team is available to assist you. Instructions are also provided with every rental.",
  },
  {
    q: "Can I load my audio content into the radio guides?",
    a: "Our radio guide systems are designed for live audio transmission and do not support preloaded audio files.",
  },
  {
    q: "What is your cancellation and refund policy?",
    a: "Cancellations made in advance may be eligible for a refund. Please contact us for specific terms.",
  },
  {
    q: "I am a returning customer and have received a discount. How can I redeem it?",
    a: "You can mention your discount code or returning customer status in the booking form message.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="mt-20 lg:mt-24" aria-labelledby="booking-faq-heading">
      <div className="text-center mb-12">
        <span className="inline-block h-0.5 w-12 bg-brand-red rounded-full mb-4" />
        <p className="text-sm font-semibold text-brand-red uppercase tracking-widest mb-3 font-heading">
          FAQ
        </p>
        <h2 id="booking-faq-heading" className="font-heading text-3xl md:text-4xl font-bold text-brand-black mb-4 tracking-tight">
          Your questions answered
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
          Quick answers about reservations, delivery, and our rental policies.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={`
                cursor-pointer rounded-2xl border-2 transition-all duration-200 overflow-hidden
                ${isOpen
                  ? "bg-white border-brand-red/40 shadow-md shadow-brand-red/5"
                  : "bg-white border-gray-200/80 hover:border-brand-red/25 hover:shadow-md"
                }
              `}
            >
              <div className="flex items-start justify-between gap-4 px-6 sm:px-7 py-5 sm:py-6">
                <div className="flex items-start gap-4 min-w-0 flex-1">
                  <span
                    className={`
                      shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold
                      ${isOpen ? "bg-brand-red text-white" : "bg-gray-100 text-brand-red"}
                    `}
                  >
                    {index + 1}
                  </span>
                  <h3 className="font-heading text-base font-semibold text-brand-black pt-0.5">
                    {item.q}
                  </h3>
                </div>
                <span
                  className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 text-brand-red transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>

              <div
                className={`grid transition-all duration-200 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden min-h-0">
                  <div className="px-6 sm:px-7 pb-6 pt-0">
                    <div className="pl-12 sm:pl-14 border-t border-gray-100 pt-5">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}