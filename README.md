# Go Go Guide

Professional audio equipment rental and sales platform for guided tours, museums, and group communication systems.

## 🎯 Overview

Go Go Guide is a modern web application built with Next.js that provides:

- **Equipment Showcase**: Display of professional audio systems and communication devices
- **Flexible Pricing**: Multiple pricing plans including monthly rentals and outright purchases
- **Online Booking**: Streamlined reservation system with equipment specification
- **Contact Management**: Integrated contact forms and customer inquiry handling

## ✨ Features

### 🏠 **Home Page**

- Modern, responsive design with company branding
- Clear call-to-action buttons directing to key sections
- Professional hero section with company overview

### 📦 **Products Page**

- Detailed product catalog showcasing audio equipment
- Feature lists with checkmark indicators
- High-quality product images and descriptions
- Direct links to pricing information

### 💰 **Pricing Page**

- Three-tier pricing structure:
  - **Monthly Rental**: Flexible short-term equipment rental
  - **Outright Purchase**: Complete equipment ownership
  - **Enterprise Solution**: Custom pricing for large-scale operations
- Comprehensive FAQ section
- Clear feature comparisons

### 📅 **Booking System**

- Advanced booking form with equipment specification:
  - Number of transmitters
  - Number of microphones (earphones)
  - Number of receivers
- Date range selection
- Delivery location input
- Email notification system

### 📧 **Contact & About**

- Professional contact forms
- Company information pages
- Email integration via Nodemailer

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 16.1.5 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation

### Backend

- **Email Service**: Nodemailer with Gmail integration
- **Form Handling**: Next.js Server Actions
- **Validation**: Zod schema validation

### Development Tools

- **Package Manager**: npm
- **Linting**: ESLint with Next.js configuration
- **Build Tool**: Next.js with Webpack

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Gmail account for email functionality

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd go-go-guide
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:

   ```env
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-app-password
   RECEIVER_EMAIL=your-receiver@gmail.com
   ```

   **Note**: For Gmail, you'll need to:
   - Enable 2-factor authentication
   - Generate an App Password
   - Use the App Password instead of your regular password

4. **Run Development Server**

   ```bash
   npm run dev
   ```

5. **Open Application**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
go-go-guide/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── actions/           # Server actions (email handling)
│   │   ├── booking/           # Booking system
│   │   ├── contact/           # Contact page
│   │   ├── pricing/           # Pricing plans
│   │   ├── products/          # Product catalog
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable React components
│   │   └── Navbar.tsx         # Navigation component
│   ├── lib/                   # Utility libraries
│   │   ├── products.ts        # Product data
│   │   └── pricing.ts         # Pricing plans data
│   └── types/                 # TypeScript type definitions
│       └── index.ts           # Global types
├── public/                    # Static assets
│   └── goguide_logo_1.png   # Company logo
├── .env.local                # Environment variables (gitignored)
├── package.json              # Dependencies and scripts
├── tailwind.config.ts        # Tailwind CSS configuration
└── README.md                 # This file
```

## 🎨 Design System

### Color Palette

- **Brand Red**: `text-brand-red` / `bg-brand-red`
- **Brand Black**: `text-brand-black` / `bg-brand-black`
- **Gray Scale**: Various shades for text and backgrounds

### Typography

- Clean, modern sans-serif fonts
- Consistent heading hierarchy
- Responsive text sizing

### Components

- Consistent button styles with hover effects
- Card-based layouts for products and pricing
- Responsive grid systems
- Professional form inputs with validation

## 📧 Email Configuration

The application uses Nodemailer for sending:

- **Booking confirmations**: Detailed equipment rental requests
- **Contact inquiries**: Customer messages and questions

### Email Templates

- Professional formatting with company branding
- Detailed booking information including equipment specifications
- Automatic timestamps and contact details

## 🌐 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Environment Variables for Production

Ensure all required environment variables are set in your hosting environment:

- `EMAIL_USER`
- `EMAIL_PASS`
- `RECEIVER_EMAIL`

### Recommended Hosting Platforms

- **Vercel**: Optimized for Next.js applications
- **Netlify**: Static site hosting with serverless functions
- **AWS**: Full cloud deployment options

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential to Go Go Guide.

## 📞 Support

For support or questions:

- Visit our contact page at `/contact`
- Email us through the booking system
- Check our FAQ section on the pricing page

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
