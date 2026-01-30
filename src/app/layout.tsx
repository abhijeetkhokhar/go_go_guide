import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GoGoGuide | Professional Radio Rentals",
  description: "Seamless audio solutions for tours, museums, and events.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        {/* We will add the Footer here later */}
      </body>
    </html>
  );
}
