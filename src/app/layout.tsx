import type { Metadata, Viewport } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goguide.com"),
  title: {
    default: "Go Go Guide | Professional Radio Rentals",
    template: "%s | Go Go Guide",
  },
  description:
    "Crystal-clear radio guide rentals for tours, museums, and events. Book online, we deliver — professional audio since 1996.",
  keywords: [
    "radio guide rental",
    "tour audio equipment",
    "museum guide system",
    "event radio rental",
    "Go Go Guide",
  ],
  authors: [{ name: "Go Go Guide" }],
  creator: "Go Go Guide",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Go Go Guide",
    title: "Go Go Guide | Professional Radio Rentals",
    description:
      "Crystal-clear radio guide rentals for tours, museums, and events. Book online, we deliver.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Go Go Guide | Professional Radio Rentals",
    description:
      "Crystal-clear radio guide rentals for tours, museums, and events.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: "https://goguide.com" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E31E24",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${plusJakarta.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
