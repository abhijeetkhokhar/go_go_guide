"use client";

import { useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { sendEmail } from "@/app/actions/sendEmail";

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
        : "Send equipment reservation request"}
    </button>
  );
}

export default function BookingForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);
    setMessage("");

    const formData = new FormData(event.currentTarget);

    // Validation
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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    if (new Date(startDate) >= new Date(returnDate)) {
      setMessage("Return date must be after start date.");
      setIsSubmitting(false);
      return;
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
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
      aria-label="Reservation form"
    >
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

      <div className="sm:col-span-2 pt-6 border-t border-gray-100">
        <p className="text-xs font-semibold text-brand-red uppercase tracking-wider mb-3 font-heading">
          Tour guide equipment
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-xl bg-gray-50/80 p-4 sm:p-5 border border-gray-100">
          <div>
            <label
              htmlFor="booking-transmitters"
              className="block text-xs font-medium text-gray-600 mb-1.5"
            >
              Guide transmitters
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
            <label
              htmlFor="booking-receivers"
              className="block text-xs font-medium text-gray-600 mb-1.5"
            >
              Guest receivers
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
            <label
              htmlFor="booking-microphones"
              className="block text-xs font-medium text-gray-600 mb-1.5"
            >
              Earphones / headsets
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

      <div className="sm:col-span-2 pt-6 border-t border-gray-100">
        <p className="text-xs font-semibold text-brand-red uppercase tracking-wider mb-3 font-heading">
          Equipment delivery & pickup
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="booking-pickup"
              className="block text-sm font-semibold text-brand-black mb-2 font-heading"
            >
              Pickup location <span className="text-brand-red">*</span>
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
              Drop-off location <span className="text-brand-red">*</span>
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

      <div className="sm:col-span-2 pt-8 mt-2 border-t border-gray-100">
        {message && (
          <div
            className={`mb-4 p-4 rounded-lg text-center ${message.includes("sent") ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}
          >
            {message}
          </div>
        )}
        <SubmitButton isSubmitting={isSubmitting} />
        <p className="mt-4 text-center text-xs text-gray-500">
          By submitting this form, you agree to be contacted regarding your tour
          guide equipment reservation and delivery details.
        </p>
      </div>
    </form>
  );
}
