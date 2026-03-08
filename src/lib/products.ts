import { Product } from "@/types";

export const radioProducts: Product[] = [
  {
    name: "GoGo Transmitter",
    description:
      "The industry standard for large city tours and noisy museum environments.",
    image: "/transmiter.png",
    features: ["18h Battery", "100m Range", "Crystal Clear"],
    price: "2.10€",
    priceUnit: "per device / day",
  },
  {
    name: "GoGo Receiver",
    description:
      "Lightweight and easy-to-use system perfect for small galleries and indoor talks.",
    image: "/reciever.png",
    features: ["Ultra-light", "Simple Setup", "High-fidelity"],
    price: "2.10€",
    priceUnit: "per device / day",
  },
  {
    name: "GoGo Microphone",
    description:
      "Premium model with noise-canceling microphones and encrypted transmission.",
    image: "/microphone.png",
    features: ["Noise Canceling", "Secure Link", "Premium Audio"],
    price: "2.10€",
    priceUnit: "per device / day",
  },
];
