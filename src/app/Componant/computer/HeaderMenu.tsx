'use client';
import React, { useState } from "react";
import Link from 'next/link';

export default function HeaderMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block bg-white border-b border-gray-200 px-6 py-2 h-[118px]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2 align-middle">
            <img
              src="/logo.png"
              alt="German Cosmetic"
              className="h-[100px] w-[115px]"
            />
          </Link>

          {/* Search Section */}
          <div className="flex items-center flex-1 max-w-2xl mx-8 h-[30px] my-auto">
            <div className="flex w-full bg-gray-100 rounded-full overflow-hidden">
              {/* Category Dropdown */}
              <button className="flex items-center px-4 text-gray-500 border-r border-gray-300">
                <span className="text-m">All Categories</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 
                    1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Input */}
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 px-4 py-2 bg-gray-100 focus:outline-none text-sm"
              />

              {/* Search Icon */}
              <button className="px-4 text-gray-500 hover:text-pink-600">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 
                    0 1110.89 3.476l4.817 4.817a1 1 0 
                    01-1.414 1.414l-4.816-4.816A6 6 
                    0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-10 text-sm pl-5">
            {/* Need Help */}
            <div className="flex items-center text-gray-700">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 
                01.986.836l.74 4.435a1 1 0 01-.54 
                1.06l-1.548.773a11.037 11.037 0 
                006.105 6.105l.774-1.548a1 1 0 
                011.059-.54l4.435.74a1 1 0 
                01.836.986V17a1 1 0 01-1 
                1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <div>
                <div className="text-gray-500 text-l">Need Help?</div>
                <div className="font-semibold">076 394 2823</div>
              </div>
            </div>

            {/* My Account */}
            <Link href="/login" className="flex items-center text-gray-700 hover:text-pink-600">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 
                  000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <div className="text-gray-500 text-l">My Account</div>
                <div className="font-semibold">Log In</div>
              </div>
            </Link>

            {/* Cart */}
            <Link href="/cart" className="flex items-center text-gray-700 relative hover:text-pink-600">
              <div className="relative">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 
                  1.222a.997.997 0 00.01.042l1.358 
                  5.43-.893.892C3.74 11.846 4.632 
                  14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 
                  1 0 00.894-.553l3-6A1 1 0 
                  0017 3H6.28l-.31-1.243A1 1 0 
                  005 1H3zM16 16.5a1.5 1.5 0 
                  11-3 0 1.5 1.5 0 013 
                  0zM6.5 18a1.5 1.5 0 100-3 
                  1.5 1.5 0 000 3z" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </div>
              <div className="ml-2">
                <div className="text-gray-500 text-l">Cart</div>
                <div className="font-semibold">Item</div>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1"
          >
            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Mobile Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="German Cosmetic"
              className="h-12 w-auto"
            />
          </Link>

          {/* Mobile Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Account Icon */}
            <Link href="/account">
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </Link>

            {/* Cart Icon */}
            <Link href="/cart" className="relative">
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsMenuOpen(false)}>
            <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-lg" onClick={(e) => e.stopPropagation()}>
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <img src="/logo.png" alt="German Cosmetic" className="h-10 w-auto" />
                  <button onClick={() => setIsMenuOpen(false)}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <nav className="p-4">
                <div className="space-y-4">
                  <Link 
                    href="/" 
                    className="block text-lg font-medium text-gray-800 hover:text-pink-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/shop" 
                    className="block text-lg font-medium text-gray-800 hover:text-pink-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Shop
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block text-lg font-medium text-gray-800 hover:text-pink-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <Link 
                    href="/about" 
                    className="block text-lg font-medium text-gray-800 hover:text-pink-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link 
                    href="/offers" 
                    className="block text-lg font-medium text-gray-800 hover:text-pink-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Top Offers!
                  </Link>
                </div>
                
                <div className="mt-8 pt-8 border-t">
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <div>
                        <div className="text-sm text-gray-500">Need Help?</div>
                        <div className="font-semibold">076 394 2823</div>
                      </div>
                    </div>
                    
                    <Link href="/login" className="flex items-center text-gray-700 hover:text-pink-600">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="text-sm text-gray-500">My Account</div>
                        <div className="font-semibold">Log In</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
