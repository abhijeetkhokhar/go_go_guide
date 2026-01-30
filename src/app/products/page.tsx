import { radioProducts } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-red uppercase tracking-wider mb-3">
            Our Equipment
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-black mb-4">
            Our <span className="text-brand-red">Products</span>
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Professional audio systems designed for guided experiences and group communication.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {radioProducts.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 hover:border-brand-red/30 transition-all duration-300 flex flex-col"
            >
              {/* Image - with accent bar */}
              <div className="relative">
                <div className="h-1 w-full bg-gradient-to-r from-brand-red to-brand-red/70" />
                <div className="relative aspect-[4/3] bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-10">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-brand-black">
                  {product.name}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Features - pill style */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {product.features.map((feature, fIndex) => (
                    <span
                      key={fIndex}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-50 text-brand-red"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Pricing & CTA */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="text-2xl font-bold text-brand-black">
                      {product.price}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {product.priceUnit}
                    </div>
                  </div>
                  <Link
                    href="/booking"
                    className="inline-flex items-center justify-center bg-brand-red text-white font-semibold py-3 px-6 rounded-lg hover:bg-brand-black transition-all duration-200 shadow-sm"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
