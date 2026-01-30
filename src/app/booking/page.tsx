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
      className={`w-full rounded-lg py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-200 flex justify-center items-center ${
        pending
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-brand-red hover:bg-brand-black"
      }`}
    >
      {pending ? "Sending request…" : "Send Reservation Request"}
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

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-brand-red uppercase tracking-wider mb-3">
            Reservation
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-black mb-4">
            Book Your <span className="text-brand-red">Equipment</span>
          </h1>
          <p className="mt-4 text-base text-gray-600 max-w-xl mx-auto">
            Fill in the details below and we’ll get back to you with
            availability and confirmation.
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="h-1 w-full bg-gradient-to-r from-brand-red to-brand-red/70" />
          <div className="p-8 sm:p-10">
            <form
              ref={formRef}
              action={handleAction}
              noValidate
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              {/* Full Name */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-brand-black mb-2">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="John Smith"
                  className="w-full"
                />
              </div>

              {/* Email */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-brand-black mb-2">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full"
                />
              </div>

              {/* Start Date */}
              <div>
                <label className="block text-sm font-medium text-brand-black mb-2">
                  Starting Date
                </label>
                <input
                  name="startDate"
                  type="date"
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full"
                />
              </div>

              {/* Return Date */}
              <div>
                <label className="block text-sm font-medium text-brand-black mb-2">
                  Return Date
                </label>
                <input
                  name="returnDate"
                  type="date"
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full"
                />
              </div>

              {/* Number of Units */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-brand-black mb-2">
                  Number of Units
                </label>
                <input
                  name="quantity"
                  type="number"
                  min="1"
                  required
                  placeholder="1"
                  className="w-full"
                />
              </div>

              {/* Location */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-brand-black mb-2">
                  Delivery Location
                </label>
                <input
                  name="location"
                  type="text"
                  required
                  placeholder="City, Address"
                  className="w-full"
                />
              </div>

              {/* Submit */}
              <div className="sm:col-span-2 mt-8">
                <SubmitButton />
                <p className="mt-4 text-center text-xs text-gray-500">
                  By submitting, you agree to be contacted for rental
                  confirmation.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* FAQ SECTION */}
        <FAQ />
      </div>
    </main>
  );
}
