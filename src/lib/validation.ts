import { z } from "zod";

// Email validation regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Phone validation regex (international format)
const phoneRegex =
  /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Name can only contain letters, spaces, hyphens, and apostrophes",
    ),

  email: z
    .string()
    .min(1, "Email is required")
    .regex(emailRegex, "Please enter a valid email address"),

  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(phoneRegex, "Please enter a valid phone number"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

// Booking form validation schema
export const bookingFormSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(100, "Name must be less than 100 characters")
      .regex(
        /^[a-zA-Z\s'-]+$/,
        "Name can only contain letters, spaces, hyphens, and apostrophes",
      ),

    companyName: z
      .string()
      .min(2, "Company name must be at least 2 characters")
      .max(100, "Company name must be less than 100 characters"),

    email: z
      .string()
      .min(1, "Email is required")
      .regex(emailRegex, "Please enter a valid email address"),

    phone: z
      .string()
      .min(1, "Phone number is required")
      .regex(phoneRegex, "Please enter a valid phone number"),

    transmitters: z
      .string()
      .min(0, "Number of transmitters must be 0 or more")
      .transform((val) => parseInt(val))
      .refine((val) => val >= 0, "Transmitters must be 0 or more")
      .refine((val) => val <= 50, "Maximum 50 transmitters allowed"),

    microphones: z
      .string()
      .min(0, "Number of microphones must be 0 or more")
      .transform((val) => parseInt(val))
      .refine((val) => val >= 0, "Microphones must be 0 or more")
      .refine((val) => val <= 100, "Maximum 100 microphones allowed"),

    receivers: z
      .string()
      .min(0, "Number of receivers must be 0 or more")
      .transform((val) => parseInt(val))
      .refine((val) => val >= 0, "Receivers must be 0 or more")
      .refine((val) => val <= 50, "Maximum 50 receivers allowed"),

    startDate: z
      .string()
      .min(1, "Start date is required")
      .refine((val) => {
        const date = new Date(val);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date >= today;
      }, "Start date must be today or in the future"),

    returnDate: z
      .string()
      .min(1, "Return date is required")
      .refine((val) => {
        const date = new Date(val);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date >= today;
      }, "Return date must be today or in the future"),

    location: z
      .string()
      .min(5, "Location must be at least 5 characters")
      .max(200, "Location must be less than 200 characters"),

    additionalInfo: z
      .string()
      .max(500, "Additional info must be less than 500 characters")
      .optional(),
  })
  .refine(
    (data) => {
      const startDate = new Date(data.startDate);
      const returnDate = new Date(data.returnDate);
      return returnDate > startDate;
    },
    {
      message: "Return date must be after start date",
      path: ["returnDate"],
    },
  )
  .refine(
    (data) => {
      const totalItems =
        (data.transmitters || 0) +
        (data.microphones || 0) +
        (data.receivers || 0);
      return totalItems > 0;
    },
    {
      message: "At least one equipment item must be rented",
      path: ["transmitters"],
    },
  );

// Type exports
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type BookingFormData = z.infer<typeof bookingFormSchema>;
