import React from "react";
import { Truck, ShoppingBag, Headphones, CreditCard, Gift } from "lucide-react";


export default function HeroSection() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Big Banner */}
          <div className="relative col-span-2">
            <img
              src="/banner.jpg" // 🔹 Replace with your banner image
              alt="Discount Banner"
              className="w-full h-[450px] object-cover rounded-lg"
            />
            
            {/* Overlay Content */}
            <div className="absolute top-0 left-0 w-full h-full rounded-lg flex items-center ml-[400px]">
              <div>
                <p className="text-sm font-medium">25% OFF</p>
                <h2 className="text-3xl font-bold mb-2">
                  Limited Weekly Discount!
                </h2>
                <p className="text-lg mb-4">
                  Starting at <span className="font-semibold">Rs. 5975.00</span>
                </p>
                <button className="bg-white text-gray-800 px-5 py-2 rounded-full shadow hover:bg-black,font-white">
                  Shop Now
                </button>
              </div>
            </div>
            
            {/* Slider Arrows (optional if carousel) */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white w-8 h-8 flex items-center justify-center rounded-full">
              ‹
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white w-8 h-8 flex items-center justify-center rounded-full">
              ›
            </button>
          </div>
          
          {/* Right Side Cards */}
          <div className="flex flex-col gap-4 mt-6">
            {/* Top Card */}
            <div className="bg-pink-100 rounded-lg p-4 flex items-center h-[200px]">
              <img
                src="/offer1.jpg" // 🔹 Replace with product image
                alt="Offer"
                className="w-[400px] h-[190px] object-cover rounded-md mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-black">Amazing Sale Offer!</h3>
                <p className="text-sm text-gray-600">Weekly Offers</p>
                <p className="text-xl font-bold text-black">Rs. 2000</p>
              </div>
            </div>
            
            {/* Bottom Card */}
            <div className="bg-pink-100 rounded-lg p-4 flex items-center h-[200px]">
              <img
                src="/offer2.jpg" // 🔹 Replace with product image
                alt="Cosmetic"
                className="w-[400px] h-[190px] object-cover rounded-md mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-black">Beauty Cosmetic</h3>
                <p className="text-sm text-gray-600">Lowest Price</p>
                <p className="text-xl font-bold text-black">Rs. 3000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-6 py-8 border-t border-gray-200">
          {/* Fast Shipping */}
          <div className="flex items-center space-x-3">
            <div className="bg-pink-100 p-3 rounded-lg">
              <Truck className="h-6 w-6 text-pink-600" />
            </div>
            <div>
              <h5 className="text-black font-bold text-m">Fast Shipping</h5>
              <p className="text-gray-500 text-xs">Orders in to your door within 2 days</p>
            </div>
          </div>

          {/* Easy Shopping */}
          <div className="flex items-center space-x-3">
            <div className="bg-pink-100 p-3 rounded-lg">
              <ShoppingBag className="h-6 w-6 text-pink-600" />
            </div>
            <div>
              <h5 className="text-black font-bold text-m">Easy Shopping</h5>
              <p className="text-gray-500 text-xs">More than 300+ Products</p>
            </div>
          </div>

          {/* Online Support */}
          <div className="flex items-center space-x-3">
            <div className="bg-pink-100 p-3 rounded-lg">
              <Headphones className="h-6 w-6 text-pink-600" />
            </div>
            <div>
              <h5 className="text-black font-bold text-m">Online Support</h5>
              <p className="text-gray-500 text-xs">Support for the products</p>
            </div>
          </div>

          {/* Flexible Payment */}
          <div className="flex items-center space-x-3">
            <div className="bg-pink-100 p-3 rounded-lg">
              <CreditCard className="h-6 w-6 text-pink-600" />
            </div>
            <div>
              <h5 className="text-black font-bold text-m">Flexible Payment</h5>
              <p className="text-gray-500 text-xs">COD & Online Payment Support</p>
            </div>
          </div>

          {/* Using For */}
          <div className="flex items-center space-x-3">
            <div className="bg-pink-100 p-3 rounded-lg">
              <Gift className="h-6 w-6 text-pink-600" />
            </div>
            <div>
              <h5 className="text-black font-bold text-m">Using For card</h5>
              <p className="text-gray-500 text-xs">Free Shipping for orders $199</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}