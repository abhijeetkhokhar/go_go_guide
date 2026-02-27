import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reserve Radio Guide Equipment | Book Online",
  description:
    "Reserve professional radio guide equipment for your tour, museum, or event. Fill in the form — we confirm availability and delivery within 24 hours. No hidden fees.",
  keywords: [
    "radio guide rental booking",
    "tour guide system reserve",
    "museum audio equipment rental",
    "book wireless tour guide",
  ],
  openGraph: {
    title: "Book Now | Reserve Radio Guide Equipment | Go Go Guide",
    description: "Reserve radio guide equipment online. We confirm availability and delivery within 24 hours.",
  },
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
