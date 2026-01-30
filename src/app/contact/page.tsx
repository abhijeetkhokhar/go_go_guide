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
      className={`w-full rounded-lg py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-200 flex justify-center items-center ${
        pending
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-brand-red hover:bg-brand-black"
      }`}
    >
      {pending ? "Sending…" : "Send Message"}
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
    <main className="min-h-screen bg-white">
      {/* Hero background - match About/Home */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-gray-50 via-white to-red-50/20 pointer-events-none" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12 lg:pb-16">
          <div className="text-center">
            <p className="text-sm font-semibold text-brand-red uppercase tracking-wider mb-3">
              Get in Touch
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-black tracking-tight mb-4">
              Let&apos;s Start a{" "}
              <span className="text-brand-red">Conversation</span>
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">
              Whether you&apos;re planning a tour, managing a large group, or
              need custom rental solutions — we&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative pb-24">
        <div className="absolute inset-0 bg-gray-50/80 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-8 lg:-mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* LEFT: Contact Info - light cards like About page */}
            <div className="space-y-6">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="group bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-brand-red/20 transition-all duration-300 flex gap-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-brand-red uppercase tracking-wider mb-2">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-brand-black font-medium hover:text-brand-red transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 leading-relaxed">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  Our team usually replies within 24 hours.
                </p>
              </div>
            </div>

            {/* RIGHT: Contact Form */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-xl hover:border-brand-red/20 transition-all duration-300">
              <div className="h-1.5 w-full bg-linear-to-r from-brand-red to-brand-red/70" />
              <div className="p-8 sm:p-10">
                <h3 className="text-xl font-bold text-brand-black mb-6">
                  Send us a message
                </h3>

                <form
                  key={formKey}
                  ref={formRef}
                  action={handleAction}
                  noValidate
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-sm font-medium text-brand-black mb-2">
                      Full Name <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-left text-base text-brand-black placeholder:text-gray-400 hover:border-gray-300 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-black mb-2">
                      Email Address <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-left text-base text-brand-black placeholder:text-gray-400 hover:border-gray-300 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-black mb-2">
                      Phone Number <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-left text-base text-brand-black placeholder:text-gray-400 hover:border-gray-300 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-black mb-2">
                      Message <span className="text-brand-red">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell us about your requirements"
                      required
                      className="w-full min-h-[120px] resize-y bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-left text-base text-brand-black placeholder:text-gray-400 hover:border-gray-300 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  <SubmitButton />

                  <p className="text-center text-xs text-gray-500">
                    By submitting, you agree to be contacted regarding your
                    inquiry.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
