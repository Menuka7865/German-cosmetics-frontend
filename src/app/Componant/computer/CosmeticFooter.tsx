import React from 'react';

export default function CosmeticFooter() {
  return (
    <footer className="bg-black text-gray-300 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-start">
          {/* Left Section - Logo and Description */}
          <div className="flex-1 max-w-xs">
            {/* Logo */}
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 mr-3">
                <img
                  src="/logo.png" 
                  alt="German Cosmetic"
                  className="h-[50px] w-[50px] mt-[-5px]"
                />
              </div>
              <div>
                <div className="text-gray-400 text-xs">German</div>
                <div className="text-pink-500 font-bold text-lg">Cosmetic</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-xs leading-relaxed">
              A renowned retail store of branded cosmetic products & perfumes directly imported from Germany
            </p>
          </div>

          {/* Center Section - Address and Contact */}
          <div className="flex-1 text-center mx-8">
            {/* Address */}
            <div className="mb-6">
              <h3 className="text-gray-400 font-semibold mb-2 text-sm">Address</h3>
              <p className="text-gray-500 text-xs">
                451/C, Colombo Road, Negombo, Sri Lanka
              </p>
            </div>

            {/* Contact */}
            <div className="mb-6">
              <h3 className="text-gray-400 font-semibold mb-2 text-sm">Contact</h3>
              <div className="space-y-1 text-xs">
                <p className="text-gray-500">
                  <span className="text-gray-400">Phone :</span> 076 394 2823
                </p>
                <p className="text-gray-500">
                  <span className="text-gray-400">Email :</span> germancosmeticparma@outlook.de
                </p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-2">
              {/* Facebook */}
              <a href="#" className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Twitter */}
              <a href="#" className="w-7 h-7 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>

              {/* YouTube */}
              <a href="#" className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Section - Useful Pages */}
          <div className="flex-1 max-w-xs">
            <h3 className="text-gray-400 font-semibold mb-4 text-sm">Useful Pages</h3>
            <div className="grid grid-cols-1 gap-2">
              <a href="#" className="text-pink-500 hover:text-pink-400 transition-colors text-xs">
                Blog
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-400 transition-colors text-xs">
                About Us
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-400 transition-colors text-xs">
                Contact Us
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-400 transition-colors text-xs">
                FAQs
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-400 transition-colors text-xs">
                Terms and Conditions
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-400 transition-colors text-xs">
                Refund and Returns Policy
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-400 transition-colors text-xs">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden text-center space-y-8">
          {/* Logo and Description */}
          <div>
            {/* Logo */}
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 mr-3">
                <img
                  src="/logo.png" 
                  alt="German Cosmetic"
                  className="h-[60px] w-[60px] mt-[-5px]"
                />
              </div>
              <div>
                <div className="text-gray-400 text-sm">German</div>
                <div className="text-pink-500 font-bold text-xl">Cosmetic</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed px-4">
              A renowned retail store of branded cosmetic products & perfumes directly imported from Germany
            </p>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-3 text-base">Address</h3>
            <p className="text-gray-500 text-sm px-4">
              451/C, Colombo Road, Negombo, Sri Lanka
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-3 text-base">Contact</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-500">
                <span className="text-gray-400">Phone :</span> 076 394 2823
              </p>
              <p className="text-gray-500 px-4">
                <span className="text-gray-400">Email :</span> germancosmeticparma@outlook.de
              </p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4">
            {/* Facebook */}
            <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Twitter */}
            <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>

            {/* YouTube */}
            <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.30 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          {/* Useful Pages */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-4 text-base">Useful Pages</h3>
            <div className="space-y-3">
              <a href="#" className="block text-pink-500 hover:text-pink-400 transition-colors text-sm">
                Blog
              </a>
              <a href="#" className="block text-pink-500 hover:text-pink-400 transition-colors text-sm">
                About Us
              </a>
              <a href="#" className="block text-pink-500 hover:text-pink-400 transition-colors text-sm">
                Contact Us
              </a>
              <a href="#" className="block text-pink-500 hover:text-pink-400 transition-colors text-sm">
                FAQs
              </a>
              <a href="#" className="block text-pink-500 hover:text-pink-400 transition-colors text-sm">
                Terms and Conditions
              </a>
              <a href="#" className="block text-pink-500 hover:text-pink-400 transition-colors text-sm">
                Refund and Returns Policy
              </a>
              <a href="#" className="block text-pink-500 hover:text-pink-400 transition-colors text-sm">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}