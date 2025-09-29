'use client';
import { useState } from 'react';
import { Heart, Eye, RotateCcw, ChevronDown, Grid3X3, List, Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  onSale?: boolean;
  category: string;
}

export default function ProductGrid() {
  const [sortBy, setSortBy] = useState('default');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const products: Product[] = [
    {
      id: 1,
      name: 'Bella Professional Taurin Locken Shampoo and Conditioner',
      price: 2750,
      image: 'https://app.germancosmetic.lk/api/item-image/9376_item-image_1757495237.png',
      rating: 0,
      reviews: 0,
      category: 'Hair care'
    },
    {
      id: 2,
      name: 'Bioxine Vitamin C Glow Lotion',
      price: 5750,
      image: 'https://app.germancosmetic.lk/api/item-image/9383_item-image_1758877947.png',
      rating: 0,
      reviews: 0,
      category: 'Skin Care'
    },
    {
      id: 3,
      name: 'Caro Light Brightening Cream',
      price: 6500,
      image: 'https://app.germancosmetic.lk/api/item-image/9382_item-image_1758626373.png',
      rating: 0,
      reviews: 0,
      category: 'Skin Care'
    },
    {
      id: 4,
      name: 'Caro Light Lightening Beauty Cream',
      price: 6500,
      image: 'https://app.germancosmetic.lk/api/item-image/9380_item-image_1758358394.png',
      rating: 0,
      reviews: 0,
      category: 'Skin Care'
    },
    {
      id: 5,
      name: 'Caro White Lightening Oil',
      price: 6500,
      image: 'https://app.germancosmetic.lk/api/item-image/9317_item-image_1758461468.png',
      rating: 0,
      reviews: 0,
      category: 'Skin Care'
    },
    {
      id: 6,
      name: 'Caro White Lightening Oil',
      price: 6500,
      image: 'https://app.germancosmetic.lk/api/item-image/9316_item-image_1758461649.png',
      rating: 0,
      reviews: 0,
      category: 'Skin Care'
    },
    {
      id: 7,
      name: 'Clinique All About Clean Liquid Facial Soap - Oily Skin Formula',
      price: 9500,
      image: 'https://app.germancosmetic.lk/api/item-image/9314_item-image_1758025192.png',
      rating: 0,
      reviews: 0,
      category: 'Skin Care'
    },
    {
      id: 8,
      name: 'F.S. Silky Soft & Smooth Conditioner',
      price: 8275,
      image: 'https://app.germancosmetic.lk/api/item-image/9310_item-image_1758528328.png',
      rating: 0,
      reviews: 0,
      category: 'Hair care'
    },
    {
      id: 9,
      name: 'Fair & White Exclusive Brightening Serum',
      price: 6500,
      image: 'https://app.germancosmetic.lk/api/item-image/9305_item-image_1758532462.png',
      rating: 0,
      reviews: 0,
      category: 'Skin Care'
    },
    {
      id: 10,
      name: 'Fair & White Exclusive Power C Brightening Body Lotion',
      price: 6500,
      image: 'https://app.germancosmetic.lk/api/item-image/9304_item-image_1758533224.png',
      rating: 0,
      reviews: 0,
      category: 'Skin Care'
    },
    {
      id: 11,
      name: 'Fair & White Exclusive Whitening',
      price: 6500,
      image: 'https://app.germancosmetic.lk/api/item-image/9303_item-image_1758803656.png',
      rating: 0,
      reviews: 0,
      category: 'Skin Care'
    },
    {
      id: 12,
      name: 'Fair & White So White Lait Ultra',
      price: 6500,
      image: 'https://app.germancosmetic.lk/api/item-image/9301_item-image_1758532325.png',
      rating: 0,
      reviews: 0,
      category: 'Skin Care'
    }
  ];

  const sortOptions = [
    { value: 'default', label: 'Default sorting' },
    { value: 'popularity', label: 'Sort by popularity' },
    { value: 'rating', label: 'Sort by average rating' },
    { value: 'latest', label: 'Sort by latest' },
    { value: 'price-low', label: 'Sort by price: low to high' },
    { value: 'price-high', label: 'Sort by price: high to low' }
  ];

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={12}
        className={`${
          i < rating
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const formatPrice = (price: number) => {
    return `Rs.${price.toLocaleString()}`;
  };

  return (
    <div className="w-full">
      {/* Header with results count and sorting */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div className="text-sm text-gray-600">
          Showing 1–15 of 59 results
        </div>
        
        <div className="flex items-center gap-3">
          {/* View Mode Toggle */}
          <div className="flex border border-gray-200 rounded">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${
                viewMode === 'grid'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Grid3X3 size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${
                viewMode === 'list'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <List size={16} />
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded bg-white text-sm text-gray-700 hover:bg-gray-50"
            >
              {sortOptions.find(opt => opt.value === sortBy)?.label}
              <ChevronDown size={16} />
            </button>
            
            {showSortDropdown && (
              <div className="absolute right-0 top-full mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value);
                      setShowSortDropdown(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 ${
                      sortBy === option.value
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700'
                    } ${option.value === sortOptions[0].value ? 'rounded-t-lg' : ''} ${
                      option.value === sortOptions[sortOptions.length - 1].value ? 'rounded-b-lg' : ''
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5' 
          : 'grid-cols-1'
      }`}>
        {products.map((product) => (
          <div
            key={product.id}
            className={`bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 ${
              viewMode === 'list' ? 'flex' : ''
            }`}
          >
            {/* Product Image */}
            <div className={`relative group ${
              viewMode === 'list' ? 'w-48 h-48 flex-shrink-0' : 'aspect-square'
            }`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover bg-gray-100"
              />
              
              {/* Hover Actions */}
              <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className={`p-2 rounded-full bg-white shadow-md hover:bg-gray-50 ${
                    favorites.has(product.id) ? 'text-red-500' : 'text-gray-600'
                  }`}
                >
                  <Heart size={16} className={favorites.has(product.id) ? 'fill-current' : ''} />
                </button>
                <button className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 text-gray-600">
                  <Eye size={16} />
                </button>
                <button className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 text-gray-600">
                  <RotateCcw size={16} />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
              <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-1 overflow-hidden">
                {product.name}
              </h3>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-2">
                {renderStars(product.rating)}
                <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
              </div>
              
              {/* Price */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-semibold text-gray-900">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              
              {/* Add to Cart Button */}
              <button className="w-full py-2 px-4 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors duration-200">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More or Pagination could go here */}
      <div className="mt-8 flex justify-center">
        <button className="px-6 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
          Load More Products
        </button>
      </div>
    </div>
  );
}