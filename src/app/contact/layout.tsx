import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Radio Guide Rentals & Custom Quotes",
  description:
    "Get in touch with Go Go Guide for radio guide rentals, custom quotes, and support. Planning a tour or event? We reply within 24 hours. Email, phone, or send a message.",
  keywords: [
    "contact Go Go Guide",
    "radio guide rental quote",
    "tour audio equipment contact",
    "museum guide system inquiry",
  ],
  openGraph: {
    title: "Contact | Go Go Guide – Radio Guide Rentals & Support",
    description: "Get in touch for radio guide rentals and custom solutions. We reply within 24 hours.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
