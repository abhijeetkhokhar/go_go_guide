"use client";

import { useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { sendEmail } from "@/app/actions/sendEmail";

/* ---------- Submit Button ---------- */
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`font-heading w-full rounded-xl py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 flex justify-center items-center ${
        pending
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-brand-red hover:bg-brand-black hover:shadow-xl hover:scale-[1.01] shadow-brand-red/25"
      }`}
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

/* ---------- Contact Page ---------- */
export default function ContactPage() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formKey, setFormKey] = useState(0);

  async function handleAction(formData: FormData) {
    const result = await sendEmail(formData);

    if (result.success) {
      alert(
        "Your message has been sent. We'll get back to you within 24 hours.",
      );
      formRef.current?.reset();
      setFormKey((k) => k + 1);
    } else {
      alert("Something went wrong. Please try again or contact us directly.");
    }
  }

  const contactItems = [
    {
      label: "Email",
      href: "mailto:info@goguide.com",
      value: "info@goguide.com",
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
      value: "Main St 123, Tour District, Global City",
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
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-black tracking-tight leading-[1.08] mb-5">
              Let&apos;s start a{" "}
              <span className="text-brand-red">conversation</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6">
              Planning a tour, managing a large group, or need a custom quote? We&apos;re here to help.
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
            {/* LEFT: Contact details + reply */}
            <div className="space-y-6">
              <div>
                <h2 className="font-heading text-sm font-semibold text-brand-red uppercase tracking-widest mb-4">
                  Contact details
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {contactItems.map((item) => (
                    <article
                      key={item.label}
                      className="group bg-white rounded-2xl border-2 border-gray-200/80 p-5 sm:p-6 shadow-md hover:shadow-lg hover:border-brand-red/25 transition-all duration-300 flex flex-col sm:block text-center sm:text-left"
                    >
                      <div className="flex justify-center sm:justify-start mb-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red ring-1 ring-brand-red/20 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                          {item.icon}
                        </span>
                      </div>
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
                    </article>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border-2 border-green-200/80 bg-green-50/50 px-5 py-4 flex items-center gap-3">
                <span className="inline-flex h-3 w-3 rounded-full bg-green-500 animate-pulse shrink-0" />
                <p className="text-gray-700 font-medium text-sm">
                  We usually reply within <strong className="text-brand-black">24 hours</strong>.
                </p>
              </div>
            </div>

            {/* RIGHT: Contact Form */}
            <div className="lg:pt-0">
              <div className="bg-white rounded-2xl border-2 border-gray-200/90 shadow-xl overflow-hidden hover:shadow-2xl hover:border-brand-red/25 transition-all duration-300">
                <div className="h-1.5 w-full bg-gradient-to-r from-brand-red via-brand-red to-brand-red/80" />
                <div className="p-8 sm:p-10">
                  <div className="mb-8">
                    <span className="inline-block h-0.5 w-10 bg-brand-red rounded-full mb-3" />
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-black mb-2">
                      Send us a message
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Tell us about your event or rental needs — we&apos;ll get back to you quickly.
                    </p>
                  </div>

                  <form
                    key={formKey}
                    ref={formRef}
                    action={handleAction}
                    noValidate
                    className="space-y-6"
                    aria-label="Contact form"
                  >
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-brand-black mb-2 font-heading">
                      Full name <span className="text-brand-red">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3.5 text-base text-brand-black placeholder:text-gray-400 hover:border-gray-300 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-brand-black mb-2 font-heading">
                      Email address <span className="text-brand-red">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3.5 text-base text-brand-black placeholder:text-gray-400 hover:border-gray-300 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-semibold text-brand-black mb-2 font-heading">
                      Phone number <span className="text-brand-red">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3.5 text-base text-brand-black placeholder:text-gray-400 hover:border-gray-300 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-brand-black mb-2 font-heading">
                      Message <span className="text-brand-red">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your tour, event, or rental needs…"
                      required
                      className="w-full min-h-[120px] resize-y bg-white border-2 border-gray-200 rounded-xl px-4 py-3.5 text-base text-brand-black placeholder:text-gray-400 hover:border-gray-300 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  <SubmitButton />

                  <p className="text-center text-xs text-gray-500">
                    By submitting, you agree to be contacted about your inquiry.
                  </p>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
