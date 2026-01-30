export interface Product {
  name: string;
  description: string;
  image: string;
  features: string[];
  price: string;
  priceUnit: string;
}

export interface BookingForm {
  name: string;
  email: string;
  startDate: string;
  endDate: string;
  quantity: number;
  location: string;
}
