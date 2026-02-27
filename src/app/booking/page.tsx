"use client";

import { useRef } from "react";
import { useFormStatus } from "react-dom";
import { sendEmail } from "@/app/actions/sendEmail";
import FAQ from "./FAQ";

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
      {pending ? "Sending request…" : "Send reservation request"}
    </button>
  );
}

/* ---------- Booking Page ---------- */
export default function BookingsPage() {
  const formRef = useRef<HTMLFormElement | null>(null);

  async function handleAction(formData: FormData) {
    const result = await sendEmail(formData);

    if (result.success) {
      alert("Your reservation request has been sent.");
      formRef.current?.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  }

  const inputClass =
    "w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3.5 text-base text-brand-black placeholder:text-gray-400 hover:border-gray-300 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 focus:outline-none transition-colors duration-200";

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50/80 to-gray-50 pt-32 pb-24 antialiased">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <header className="text-center mb-12 lg:mb-16" aria-label="Reserve equipment">
          <div className="relative inline-block">
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 h-0.5 w-12 bg-brand-red rounded-full" />
            <p className="text-sm font-semibold text-brand-red uppercase tracking-widest font-heading pt-3">
              Reservation
            </p>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-black tracking-tight leading-[1.08] mb-5 mt-2">
            Reserve your{" "}
            <span className="text-brand-red">equipment</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Fill in the form below — we&apos;ll confirm availability and delivery within 24 hours. No hidden fees.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200/80 px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            We reply within 24 hours
          </div>
        </header>

        {/* Booking Form */}
        <section aria-label="Booking form">
          <div className="bg-white rounded-2xl border-2 border-gray-200/90 shadow-xl overflow-hidden hover:shadow-2xl hover:border-brand-red/25 transition-all duration-300 ring-1 ring-black/5">
            <div className="h-1.5 w-full bg-gradient-to-r from-brand-red via-brand-red to-brand-red/80" />
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="mb-10">
                <span className="inline-block h-0.5 w-10 bg-brand-red rounded-full mb-3" />
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-black mb-2">
                  Your reservation details
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tell us when and where — we&apos;ll handle the rest.
                </p>
              </div>

              <form
                ref={formRef}
                action={handleAction}
                noValidate
                className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                aria-label="Reservation form"
              >
                {/* Your details */}
                <div className="sm:col-span-2">
                  <p className="text-xs font-semibold text-brand-red uppercase tracking-wider mb-4 font-heading">Your details</p>
                </div>
                <div className="sm:col-span-2 -mt-2">
                  <label htmlFor="booking-name" className="block text-sm font-semibold text-brand-black mb-2 font-heading">
                    Full name <span className="text-brand-red">*</span>
                  </label>
                  <input
                    id="booking-name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Smith"
                    className={inputClass}
                  />
                </div>

                {/* Email */}
                <div className="sm:col-span-2">
                  <label htmlFor="booking-email" className="block text-sm font-semibold text-brand-black mb-2 font-heading">
                    Email address <span className="text-brand-red">*</span>
                  </label>
                  <input
                    id="booking-email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className={inputClass}
                  />
                </div>

                {/* Rental period */}
                <div className="sm:col-span-2 pt-6 border-t border-gray-100">
                  <p className="text-xs font-semibold text-brand-red uppercase tracking-wider mb-4 font-heading">Rental period</p>
                </div>
                <div>
                  <label htmlFor="booking-start" className="block text-sm font-semibold text-brand-black mb-2 font-heading">
                    Start date <span className="text-brand-red">*</span>
                  </label>
                  <input
                    id="booking-start"
                    name="startDate"
                    type="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="booking-return" className="block text-sm font-semibold text-brand-black mb-2 font-heading">
                    Return date <span className="text-brand-red">*</span>
                  </label>
                  <input
                    id="booking-return"
                    name="returnDate"
                    type="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className={inputClass}
                  />
                </div>

                {/* Equipment */}
                <div className="sm:col-span-2 pt-6 border-t border-gray-100">
                  <p className="text-xs font-semibold text-brand-red uppercase tracking-wider mb-3 font-heading">Equipment</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-xl bg-gray-50/80 p-4 sm:p-5 border border-gray-100">
                    <div>
                      <label htmlFor="booking-transmitters" className="block text-xs font-medium text-gray-600 mb-1.5">
                        Transmitters
                      </label>
                      <input
                        id="booking-transmitters"
                        name="transmitters"
                        type="number"
                        min={0}
                        required
                        placeholder="0"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="booking-receivers" className="block text-xs font-medium text-gray-600 mb-1.5">
                        Receivers
                      </label>
                      <input
                        id="booking-receivers"
                        name="receivers"
                        type="number"
                        min={0}
                        required
                        placeholder="0"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="booking-microphones" className="block text-xs font-medium text-gray-600 mb-1.5">
                        Earphones
                      </label>
                      <input
                        id="booking-microphones"
                        name="microphones"
                        type="number"
                        min={0}
                        required
                        placeholder="0"
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="sm:col-span-2 pt-6 border-t border-gray-100">
                  <p className="text-xs font-semibold text-brand-red uppercase tracking-wider mb-3 font-heading">Delivery</p>
                  <label htmlFor="booking-location" className="block text-sm font-semibold text-brand-black mb-2 font-heading">
                    Delivery location <span className="text-brand-red">*</span>
                  </label>
                  <input
                    id="booking-location"
                    name="location"
                    type="text"
                    required
                    placeholder="City, full address"
                    className={inputClass}
                  />
                </div>

                {/* Submit */}
                <div className="sm:col-span-2 pt-8 mt-2 border-t border-gray-100">
                  <SubmitButton />
                  <p className="mt-4 text-center text-xs text-gray-500">
                    By submitting, you agree to be contacted for rental confirmation.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ />
      </div>
    </main>
  );
}
