import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Heart, TrendingUp, Eye } from 'lucide-react';
export default function Discountsection() {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    
        const scrollLeft = () => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
            }
        };
    
        const scrollRight = () => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
            }
        };
    
        interface Product {
            id: number;
            title: string;
            image: string;
            alt: string;
            price: string;
            rating: number;
        }
    
        const products: Product[] = [
            {
                id: 1,
                title: "MAC Pro Longwear Nourishing Waterproof Foundation (35ml)",
                image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300&h=300&fit=crop",
                alt: "MAC Pro Foundation",
                price: "Rs.21,975",
                rating: 0
            },
            {
                id: 2,
                title: "MAC Pro Longwear Nourishing Waterproof Foundation (25ml)",
                image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300&h=300&fit=crop",
                alt: "MAC Pro Foundation Black",
                price: "Rs.21,975",
                rating: 0
            },
            {
                id: 3,
                title: "F.S. Silky Soft & Smooth Conditioner",
                image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300&h=300&fit=crop",
                alt: "Hair Conditioner",
                price: "Rs.8,275",
                rating: 0
            },
            {
                id: 4,
                title: "Schauma Frucht & Vitamin Shampoo",
                image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop&sat=30&hue=30",
                alt: "Schauma Orange Shampoo",
                price: "Rs.7,250",
                rating: 0
            },
            {
                id: 5,
                title: "Schauma Pro-Vitamin B5 Shampoo",
                image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop&sat=30&hue=60",
                alt: "Schauma Yellow Shampoo",
                price: "Rs.6,975",
                rating: 0
            },
            {
                id: 6,
                title: "Schauma Mandelmilch Shampoo",
                image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop&sat=10&hue=30",
                alt: "Schauma Beige Shampoo",
                price: "Rs.6,975",
                rating: 0
            }
        ];
    
        const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
            return (
                <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                            key={star}
                            className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-200'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>
            );
        };
    
  return (
    <section className='py-12 px-4 bg-gray-50'>
                <div className='max-w-7xl mx-auto mt-[-60px]'>
                    <div className='relative'>
                        {/* Left Arrow */}
                        <button 
                            onClick={scrollLeft}
                            className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 hover:bg-gray-50'
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>
    
                        {/* Right Arrow */}
                        <button 
                            onClick={scrollRight}
                            className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 hover:bg-gray-50'
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-600" />
                        </button>
    
                        <div 
                            ref={scrollRef}
                            className='flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-4'
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            <style jsx>{`
                                .scrollbar-hide::-webkit-scrollbar {
                                    display: none;
                                }
                            `}</style>
                        {products.map((product) => (
                            <div key={product.id} className='flex-shrink-0 w-64 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group'>
                                <div className='p-4'>
                                    <div className='aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden relative'>
                                        <img
                                            src={product.image}
                                            alt={product.alt}
                                            className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                                        />
                                        
                                        {/* Hover Icons */}
                                        <div className='absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                            <button className='p-2 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-red-50 transition-all duration-200 group/heart'>
                                                <Heart className="w-4 h-4 text-gray-600 group-hover/heart:text-red-500" />
                                            </button>
                                            <button className='p-2 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-blue-50 transition-all duration-200 group/chart'>
                                                <TrendingUp className="w-4 h-4 text-gray-600 group-hover/chart:text-blue-500" />
                                            </button>
                                            <button className='p-2 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-green-50 transition-all duration-200 group/eye'>
                                                <Eye className="w-4 h-4 text-gray-600 group-hover/eye:text-green-500" />
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <h3 className='text-sm font-medium text-gray-800 mb-3 line-clamp-3 leading-tight min-h-[60px]'>
                                        {product.title}
                                    </h3>
                                    
                                    <StarRating rating={product.rating} />
                                    
                                    <div className='flex items-center justify-between mb-4'>
                                        <span className='text-lg font-bold text-gray-900'>
                                            {product.price}
                                        </span>
                                    </div>
                                    
                                    <button className='w-full bg-purple-100 hover:bg-pink-600 text-black font-medium py-2.5 px-4 rounded-2xl transition-colors duration-200 border border-purple-200 hover:border-purple-300'>
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </section>
  )
}
