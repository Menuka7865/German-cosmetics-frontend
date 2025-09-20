'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function PinkNavigation() {
    const pathname = usePathname();

    const navigationItems = [
        { href: '/', label: 'Home' },
        { href: '/shop', label: 'Shop' },
        { href: '/contact', label: 'Contact Us' },
        { href: '/about', label: 'About Us' },
    ];

    return (
        <>
            {/* Desktop Pink Navigation */}
            <nav className="hidden md:block bg-pink-500 text-white px-4 py-3 h-[60px]">
                <div className="max-w-7xl mx-auto flex justify-between items-center my-auto">
                    {/* Left Side - Main Navigation */}
                    <div className="flex items-center space-x-8 p-[10px]">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-[16px] hover:text-pink-200 transition-colors text-sm font-medium ${
                                    pathname === item.href 
                                        ? 'text-pink-100 font-semibold' 
                                        : 'text-white'
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side - Top Offers */}
                    <div className="flex items-center">
                        <div className="flex items-center space-x-2">
                            {/* Hamburger menu icon */}
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                            <Link 
                                href="/offers" 
                                className={`text-[16px] hover:text-pink-200 transition-colors text-sm font-medium ${
                                    pathname === '/offers' 
                                        ? 'text-pink-100 font-semibold' 
                                        : 'text-white'
                                }`}
                            >
                                Top Offers!
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Search Bar - Replaces Pink Navigation on Mobile */}
            <div className="md:hidden bg-pink-500 px-4 py-3">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full px-4 py-2 pr-10 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}