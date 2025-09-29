"use client";
import React, { useState } from "react";
import Image from 'next/image';
import HeaderMenu from "../Componant/computer/HeaderMenu";
import PinkNavigation from "../Componant/computer/PinkNavigation";
import CosmeticFooter from "../Componant/computer/CosmeticFooter";

// Define type for tabs
type Tab = "development" | "team" | "strategy";

// Tab contents
const TabContent: Record<Tab, string> = {
  development:
    "At German Cosmetics, we blend tradition with cutting-edge innovation to bring you the finest skincare and beauty solutions. Rooted in the German philosophy of precision and excellence, our products are meticulously developed using state-of-the-art technology and carefully selected ingredients. Each product undergoes rigorous testing and refinement to ensure optimal performance and safety, giving you a skincare experience like no other.",

  team:
    "Our team at German Cosmetics is composed of highly skilled professionals, including dermatologists, chemists, and beauty experts. With decades of combined experience and a passion for innovation, our team is dedicated to creating products that meet the highest standards of quality. From initial research to final formulation, every step is guided by expertise and a commitment to delivering the best for your skin.",

  strategy:
    "Our strategy revolves around one simple goal: enhancing your natural beauty while protecting your skin. At German Cosmetics, we focus on sustainability, sourcing eco-friendly ingredients and maintaining cruelty-free practices. By staying ahead of trends and continuously innovating, we bring you products that are effective, luxurious, and environmentally responsible. Your beauty and well-being are at the heart of everything we do."
};

export default function Page() {
  const [activeTab, setActiveTab] = useState<Tab>("development");

  return (
    <>
      {/* Header */}
      <HeaderMenu />
      <PinkNavigation />

      {/* Title Section */}
      <div className="text-black bg-[#F5F0FC] text-center font-medium text-2xl md:text-3xl py-4 md:py-6">
        About Us
      </div>

      {/* Tabs Section */}
      <div className="w-full max-w-7xl mx-auto px-8 mt-6">
        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("development")}
            className={`pb-2 font-semibold transition-colors ${
              activeTab === "development"
                ? "text-pink-600 border-b-2 border-pink-600"
                : "text-gray-600 hover:text-pink-600"
            }`}
          >
            Development
          </button>

          <button
            onClick={() => setActiveTab("team")}
            className={`pb-2 font-semibold transition-colors ${
              activeTab === "team"
                ? "text-pink-600 border-b-2 border-pink-600"
                : "text-gray-600 hover:text-pink-600"
            }`}
          >
            Qualified Team
          </button>

          <button
            onClick={() => setActiveTab("strategy")}
            className={`pb-2 font-semibold transition-colors ${
              activeTab === "strategy"
                ? "text-pink-600 border-b-2 border-pink-600"
                : "text-gray-600 hover:text-pink-600"
            }`}
          >
            Strategy
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-6 bg-white border rounded-lg shadow-sm p-6 text-gray-700 text-justify leading-relaxed">
          {TabContent[activeTab]}
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 ml-50 ">
        <div className="flex flex-row ml-10">
          <div className="relative h-48 w-96">
            <Image src="/banner.jpg" alt="banner" fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <div className="relative w-40 h-28 ml-8"><Image src="/offer2.jpg" alt="offer" fill className="object-contain" /></div>
            <div className="relative w-40 h-28 ml-8"><Image src="/offer2.jpg" alt="offer" fill className="object-contain" /></div>
          </div>
        </div>
        <div className="flex flex-row mb-30 ml-50 mt-20">
          <div className="relative w-48 h-32"><Image src="/offer1.jpg" alt="offer" fill className="object-contain" /></div>
          <div className="ml-50 relative w-48 h-32"><Image src="/offer2.jpg" alt="offer" fill className="object-contain" /></div>
        </div>
      </div>

      {/* Footer */}
      <CosmeticFooter />
    </>
  );
}
