'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react'

export default function page() {
  

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-[350px]">
        <form className="space-y-6">
          <button className='text-black ml-[270px]'><Link href='/login'><ArrowLeft/></Link></button>
          {/* Username Field */}
          <div>
            <label 
              htmlFor="username" 
              className="block text-gray-700 text-sm font-light mb-2"
            >
              Username 
            </label>
            <input
              type="text"
              name="username"
              id="username"
            
              className="w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-700"
              required
            />
          </div>
          {/* Email Field */}
          <div>
            <label 
              htmlFor="email" 
              className="block text-gray-700 text-sm font-light mb-2"
            >
              Email Address
            </label>
            <input
              type="text"
              name="email"
              id="email"
            
              className="w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-700"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label 
              htmlFor="password" 
              className="block text-gray-700 text-sm font-light mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              
              className="w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-700"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-4 rounded-full transition duration-200 ease-in-out transform "
          >
           Sign Up
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-6 text-center space-y-4">
          
          
          <div className="text-sm text-gray-600">
            Already have an account?{' '}
            <a 
              href="/login" 
              className="text-pink-500 hover:text-pink-600 font-medium"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}