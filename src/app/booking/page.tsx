"use client";

import { useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { sendEmail } from "@/app/actions/sendEmail";
import FAQ from "./FAQ";

/* ---------- Submit Button ---------- */
function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending || isSubmitting}
      className={`font-heading w-full rounded-xl py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 flex justify-center items-center ${
        pending || isSubmitting
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-brand-red hover:bg-brand-black hover:shadow-xl hover:scale-[1.01] shadow-brand-red/25"
      }`}
    >
      {pending || isSubmitting
        ? "Sending request…"
        : "Send reservation request"}
    </button>
  );
}

/* ---------- Booking Page ---------- */
export default function BookingsPage() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Prevent multiple submissions
    if (isSubmitting) return;
    setIsSubmitting(true);
    setMessage("");

    // Get form data
    const formData = new FormData(event.currentTarget);

    // Client-side validation before sending
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const companyName = formData.get("companyName") as string;
    const startDate = formData.get("startDate") as string;
    const returnDate = formData.get("returnDate") as string;
    const transmitters = formData.get("transmitters") as string;
    const receivers = formData.get("receivers") as string;
    const microphones = formData.get("microphones") as string;
    const pickupLocation = formData.get("pickupLocation") as string;
    const dropoffLocation = formData.get("dropoffLocation") as string;

    // Validate all required fields
    const requiredFields = {
      name,
      email,
      companyName,
      startDate,
      returnDate,
      transmitters,
      receivers,
      microphones,
      pickupLocation,
      dropoffLocation,
    };

    const emptyFields = Object.entries(requiredFields).filter(
      ([, value]) => !value || value.trim() === "",
    );

    if (emptyFields.length > 0) {
      setMessage("Please fill in all required fields before submitting.");
      setIsSubmitting(false);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    // Validate dates
    const start = new Date(startDate);
    const end = new Date(returnDate);
    if (start >= end) {
      setMessage("Return date must be after start date.");
      setIsSubmitting(false);
      return;
    }

    // Validate equipment quantities (must be non-negative numbers)
    const equipmentFields = { transmitters, receivers, microphones };
    for (const [field, value] of Object.entries(equipmentFields)) {
      const num = parseInt(value);
      if (isNaN(num) || num < 0) {
        setMessage(`Please enter a valid number for ${field}.`);
        setIsSubmitting(false);
        return;
      }
    }

    const result = await sendEmail(formData);

    if (result.success) {
      setMessage("Your reservation request has been sent.");
      formRef.current?.reset();
    } else {
      setMessage("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  }

  const inputClass =
    "w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3.5 text-base text-brand-black placeholder:text-gray-400 hover:border-gray-300 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 focus:outline-none transition-colors duration-200";

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50/80 to-gray-50 pt-32 pb-24 antialiased">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <header
          className="text-center mb-12 lg:mb-16"
          aria-label="Reserve equipment"
        >
          <div className="relative inline-block">
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 h-0.5 w-12 bg-brand-red rounded-full" />
            <p className="text-sm font-semibold text-brand-red uppercase tracking-widest font-heading pt-3">
              Reservation
            </p>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-black tracking-tight leading-[1.1] mb-5 mt-2">
            Reserve your <span className="text-brand-red">equipment</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Fill in the form below — we&apos;ll confirm availability and
            delivery within 24 hours. No hidden fees.
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
                  Tell us when and where — we&apos;ll handle pickup and
                  drop-off.
                </p>
              </div>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                aria-label="Reservation form"
              >
                {/* Your details */}
                <div className="sm:col-span-2">
                  <p className="text-xs font-semibold text-brand-red uppercase tracking-wider mb-4 font-heading">
                    Your details
                  </p>
                </div>
                <div className="sm:col-span-2 -mt-2">
                  <label
                    htmlFor="booking-name"
                    className="block text-sm font-semibold text-brand-black mb-2 font-heading"
                  >
                    Full name <span className="text-brand-red">*</span>
                  </label>
                  <input
                    id="booking-name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Smith"
                    className={inputClass}
                    minLength={2}
                  />
                </div>

                {/* Email */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="booking-email"
                    className="block text-sm font-semibold text-brand-black mb-2 font-heading"
                  >
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

                {/* Company */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="booking-company"
                    className="block text-sm font-semibold text-brand-black mb-2 font-heading"
                  >
                    Company name <span className="text-brand-red">*</span>
                  </label>
                  <input
                    id="booking-company"
                    name="companyName"
                    type="text"
                    required
                    placeholder="Your company"
                    className={inputClass}
                    minLength={2}
                  />
                </div>

                {/* Rental period */}
                <div className="sm:col-span-2 pt-6 border-t border-gray-100">
                  <p className="text-xs font-semibold text-brand-red uppercase tracking-wider mb-4 font-heading">
                    Rental period
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="booking-start"
                    className="block text-sm font-semibold text-brand-black mb-2 font-heading"
                  >
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
                  <label
                    htmlFor="booking-return"
                    className="block text-sm font-semibold text-brand-black mb-2 font-heading"
                  >
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
                  <p className="text-xs font-semibold text-brand-red uppercase tracking-wider mb-3 font-heading">
                    Equipment
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-xl bg-gray-50/80 p-4 sm:p-5 border border-gray-100">
                    <div>
                      <label
                        htmlFor="booking-transmitters"
                        className="block text-xs font-medium text-gray-600 mb-1.5"
                      >
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
                        onChange={(e) => {
                          if (e.target.value === "") {
                            e.target.setCustomValidity("Please enter a number");
                          } else {
                            e.target.setCustomValidity("");
                          }
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="booking-receivers"
                        className="block text-xs font-medium text-gray-600 mb-1.5"
                      >
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
                        onChange={(e) => {
                          if (e.target.value === "") {
                            e.target.setCustomValidity("Please enter a number");
                          } else {
                            e.target.setCustomValidity("");
                          }
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="booking-microphones"
                        className="block text-xs font-medium text-gray-600 mb-1.5"
                      >
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
                        onChange={(e) => {
                          if (e.target.value === "") {
                            e.target.setCustomValidity("Please enter a number");
                          } else {
                            e.target.setCustomValidity("");
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="sm:col-span-2 pt-6 border-t border-gray-100">
                  <p className="text-xs font-semibold text-brand-red uppercase tracking-wider mb-3 font-heading">
                    Pickup & Drop-off
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="booking-pickup"
                        className="block text-sm font-semibold text-brand-black mb-2 font-heading"
                      >
                        Pickup location{" "}
                        <span className="text-brand-red">*</span>
                      </label>
                      <input
                        id="booking-pickup"
                        name="pickupLocation"
                        type="text"
                        required
                        placeholder="Pickup address"
                        className={inputClass}
                        minLength={5}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="booking-dropoff"
                        className="block text-sm font-semibold text-brand-black mb-2 font-heading"
                      >
                        Drop-off location{" "}
                        <span className="text-brand-red">*</span>
                      </label>
                      <input
                        id="booking-dropoff"
                        name="dropoffLocation"
                        type="text"
                        required
                        placeholder="Drop-off address"
                        className={inputClass}
                        minLength={5}
                      />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="sm:col-span-2 pt-8 mt-2 border-t border-gray-100">
                  {message && (
                    <div
                      className={`mb-4 p-4 rounded-lg text-center ${
                        message.includes("sent")
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}
                    >
                      {message}
                    </div>
                  )}
                  <SubmitButton isSubmitting={isSubmitting} />
                  <p className="mt-4 text-center text-xs text-gray-500">
                    By submitting, you agree to be contacted for rental
                    confirmation.
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
