import React from 'react'
import HeaderMenu from "../computer/HeaderMenu";
import CosmeticFooter from "../computer/CosmeticFooter";
import PinkNavigation from "../computer/PinkNavigation";
import PopularCategories from "./popularCategories";
import HeroSection from "./HeroSection";
import WeekHighlights from "./weekHighlights";
import Discountsection from "./Discountsection";

export default function Home_page() {
  return (
    <div>
      <HeaderMenu />
      <PinkNavigation />
      <HeroSection/>
            
      <PopularCategories />
      <WeekHighlights/>
      <Discountsection/>
            
      <CosmeticFooter />
    </div>
  )
}
