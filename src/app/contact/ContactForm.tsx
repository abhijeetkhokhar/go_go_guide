"use client";

import { useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { sendEmail } from "@/app/actions/sendEmail";

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

export default function ContactForm() {
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
      alert("Something went wrong. Please try again.");
    }
  }

  const inputClass =
    "w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3.5 text-base text-brand-black placeholder:text-gray-400 hover:border-gray-300 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 focus:outline-none transition-colors duration-200";

  return (
    <>
      <div className="mb-8">
        <span className="inline-block h-0.5 w-10 bg-brand-red rounded-full mb-3" />
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-black mb-2">
          Send us a message
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Tell us about your tour, museum visit, conference, or group event. Our
          team will recommend the right wireless tour guide system and confirm
          equipment availability.
        </p>
      </div>

      <form
        key={formKey}
        ref={formRef}
        action={handleAction}
        noValidate
        className="space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-brand-black mb-2 font-heading"
          >
            Full name <span className="text-brand-red">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="John Doe"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-brand-black mb-2 font-heading"
          >
            Email address <span className="text-brand-red">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="john@example.com"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-brand-black mb-2 font-heading"
          >
            Phone number <span className="text-brand-red">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            required
            placeholder="+1 (555) 000-0000"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-brand-black mb-2 font-heading"
          >
            Message <span className="text-brand-red">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Describe your tour, event, group size, and radio guide equipment requirements…"
            className={`${inputClass} min-h-[120px] resize-y`}
          />
        </div>
        <SubmitButton />
        <p className="text-center text-xs text-gray-500 mt-4">
          By submitting this form, you agree to be contacted regarding your tour
          guide equipment inquiry or rental request.
        </p>
      </form>
    </>
  );
}
