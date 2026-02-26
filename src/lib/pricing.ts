import { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    id: "monthly-rental",
    name: "Monthly Rental",
    description: "Perfect for companies needing flexible, short-term access to our equipment",
    price: "2.10€",
    billingCycle: "per device / day",
    features: [
      "Flexible monthly contracts",
      "All maintenance included",
      "24/7 technical support",
      "Free delivery & pickup",
      "Equipment upgrades available",
      "No long-term commitment"
    ],
    popular: true,
    cta: "Start Monthly Rental",
    ctaHref: "/booking?plan=monthly"
  },
  {
    id: "outright-purchase",
    name: "Outright Purchase",
    description: "Ideal for companies wanting to own their equipment permanently",
    price: "189€",
    billingCycle: "one-time per device",
    features: [
      "Complete ownership",
      "1-year manufacturer warranty",
      "Lifetime technical support",
      "Bulk order discounts",
      "Custom branding options",
      "Training included"
    ],
    popular: false,
    cta: "Purchase Equipment",
    ctaHref: "/booking?plan=purchase"
  },
  {
    id: "enterprise",
    name: "Enterprise Solution",
    description: "Comprehensive package for large-scale operations and custom requirements",
    price: "Custom",
    billingCycle: "tailored pricing",
    features: [
      "Custom hardware configurations",
      "Dedicated account manager",
      "Priority support & maintenance",
      "Software integration options",
      "Volume licensing",
      "On-site training & setup"
    ],
    popular: false,
    cta: "Contact Sales",
    ctaHref: "/contact?plan=enterprise"
  }
];
