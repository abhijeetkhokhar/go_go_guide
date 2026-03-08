export interface Product {
  name: string;
  description: string;
  image: string;
  features: string[];
  price: string;
  priceUnit: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  billingCycle: string;
  features: string[];
  popular: boolean;
  cta: string;
  ctaHref: string;
}

export interface BookingForm {
  name: string;
  email: string;
  companyName: string;
  startDate: string;
  returnDate: string;
  transmitters: number;
  microphones: number;
  receivers: number;
  pickupLocation: string;
  dropoffLocation: string;
}
