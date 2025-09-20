import React from 'react'
import HeaderMenu from '../Componant/computer/HeaderMenu'
import PinkNavigation from '../Componant/computer/PinkNavigation'
import CosmeticFooter from '../Componant/computer/CosmeticFooter'
import ProductFilterSidebar from '../contact/sidefilters'
import ProductGrid from './shopitems'

export default function Page() {
  return (
   <>
     <HeaderMenu/>
     <PinkNavigation />
     <div className="text-black bg-[#F5F0FC] text-center font-medium text-2xl md:text-3xl py-4 md:py-6">
        Shop
      </div>
      <div className='flex flex-row gap-8 mt-4 mr-3 ml-3'>
        <div className='mr-5 mt-8'> <ProductFilterSidebar/></div>
        <div className='mb-10'><ProductGrid/></div>
      </div>
     
      
     <CosmeticFooter/>
   </>
  )
}
