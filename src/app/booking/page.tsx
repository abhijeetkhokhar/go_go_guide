import { Metadata } from "next";
import FAQ from "./FAQ";
import BookingForm from "./BookingForm";

export const metadata: Metadata = {
  title:
    "Reserve Wireless Tour Guide Systems | Radio Guide Equipment Rental | Go Go Guide",
  description:
    "Reserve professional wireless tour guide systems and radio guide equipment for museums, city tours, factory visits, conferences, and group events. Reliable tour guide audio systems with fast confirmation and delivery.",
  keywords: [
    "tour guide system rental",
    "radio guide equipment rental",
    "wireless tour guide system",
    "museum audio guide system",
    "tour guide headset system",
    "guided tour audio equipment",
    "tour guide transmitter receiver",
    "group tour communication system",
  ],
  openGraph: {
    title:
      "Reserve Wireless Tour Guide Systems | Go Go Guide Equipment Booking",
    description:
      "Book professional radio guide systems for museums, tours, conferences, and events. Reliable wireless tour audio equipment delivered to your venue.",
  },
};

export default function BookingsPage() {
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
            Complete the reservation form below to request professional wireless
            tour guide systems for your event. Our team will confirm equipment
            availability and delivery details within 24 hours.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200/80 px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            We reply within 24 hours
          </div>
        </header>

        {/* Booking Form Wrapper */}
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
                  Provide your event details including dates, equipment
                  quantities, and locations. We will organize equipment
                  preparation, pickup, and delivery for your tour or event.
                </p>
              </div>

              {/* Client Component injected here */}
              <BookingForm />
            </div>
          </div>
        </section>

        <FAQ />
      </div>
    </main>
  );
}
