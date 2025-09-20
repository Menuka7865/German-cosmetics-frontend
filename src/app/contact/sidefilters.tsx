'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Star } from 'lucide-react';

interface FilterSection {
  title: string;
  isOpen: boolean;
}

interface CategoryItem {
  name: string;
  count: number;
  checked: boolean;
}

interface PriceRange {
  label: string;
  min: number;
  max: number | null;
  checked: boolean;
}

interface RatingItem {
  stars: number;
  count: number;
  checked: boolean;
}

export default function ProductFilterSidebar() {
  const [sections, setSections] = useState<Record<string, boolean>>({
    categories: true,
    highlight: true,
    price: true,
    rating: true,
  });

  const [categories, setCategories] = useState<CategoryItem[]>([
    { name: 'Uncategorized', count: 2, checked: false },
    { name: 'Cosmetic', count: 11, checked: false },
    { name: 'Hair care', count: 26, checked: false },
    { name: 'Skin Care', count: 20, checked: false },
  ]);

  const [highlightItems] = useState([
    { name: 'All Products', active: true },
    { name: 'Best Seller', active: false },
    { name: 'New Arrivals', active: false },
    { name: 'Sale', active: false },
    { name: 'Hot Items', active: false },
  ]);

  const [priceRanges, setPriceRanges] = useState<PriceRange[]>([
    { label: 'All', min: 0, max: null, checked: true },
    { label: 'Rs.0–Rs.4,400', min: 0, max: 4400, checked: false },
    { label: 'Rs.4,400–Rs.8,800', min: 4400, max: 8800, checked: false },
    { label: 'Rs.8,800–Rs.13,200', min: 8800, max: 13200, checked: false },
    { label: 'Rs.17,600+', min: 17600, max: null, checked: false },
  ]);

  const [ratings, setRatings] = useState<RatingItem[]>([
    { stars: 5, count: 0, checked: false },
    { stars: 4, count: 0, checked: false },
    { stars: 3, count: 0, checked: false },
    { stars: 2, count: 0, checked: false },
    { stars: 1, count: 0, checked: false },
  ]);

  const toggleSection = (section: string) => {
    setSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleCategory = (index: number) => {
    setCategories(prev => 
      prev.map((cat, i) => 
        i === index ? { ...cat, checked: !cat.checked } : cat
      )
    );
  };

  const togglePriceRange = (index: number) => {
    setPriceRanges(prev => 
      prev.map((range, i) => 
        i === index ? { ...range, checked: !range.checked } : range
      )
    );
  };

  const toggleRating = (index: number) => {
    setRatings(prev => 
      prev.map((rating, i) => 
        i === index ? { ...rating, checked: !rating.checked } : rating
      )
    );
  };

  const renderStars = (count: number, filled: boolean = true) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={`${
          i < count
            ? filled
              ? 'fill-yellow-400 text-yellow-400'
              : 'fill-yellow-400 text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="w-full max-w-xs bg-white border-r border-gray-200 h-fit">
      <div className="p-4 space-y-6">
        
        {/* Shop By Categories */}
        <div className="border-b border-gray-200 pb-4">
          <button
            onClick={() => toggleSection('categories')}
            className="flex items-center justify-between w-full text-left"
          >
            <h3 className="text-lg font-semibold text-gray-900">Shop By Categories</h3>
            {sections.categories ? (
              <ChevronUp size={20} className="text-gray-600" />
            ) : (
              <ChevronDown size={20} className="text-gray-600" />
            )}
          </button>
          
          {sections.categories && (
            <div className="mt-4 space-y-3">
              {categories.map((category, index) => (
                <label key={index} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={category.checked}
                    onChange={() => toggleCategory(index)}
                    className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <span className="ml-3 text-sm text-gray-700">
                    {category.name} ({category.count})
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Highlight */}
        <div className="border-b border-gray-200 pb-4">
          <button
            onClick={() => toggleSection('highlight')}
            className="flex items-center justify-between w-full text-left"
          >
            <h3 className="text-lg font-semibold text-gray-900">Highlight</h3>
            {sections.highlight ? (
              <ChevronUp size={20} className="text-gray-600" />
            ) : (
              <ChevronDown size={20} className="text-gray-600" />
            )}
          </button>
          
          {sections.highlight && (
            <div className="mt-4 space-y-2">
              {highlightItems.map((item, index) => (
                <button
                  key={index}
                  className={`block w-full text-left text-sm py-1 px-0 hover:text-purple-600 transition-colors ${
                    item.active ? 'text-purple-600 font-medium' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Price Filter */}
        <div className="border-b border-gray-200 pb-4">
          <button
            onClick={() => toggleSection('price')}
            className="flex items-center justify-between w-full text-left"
          >
            <h3 className="text-lg font-semibold text-gray-900">Price Filter</h3>
            {sections.price ? (
              <ChevronUp size={20} className="text-gray-600" />
            ) : (
              <ChevronDown size={20} className="text-gray-600" />
            )}
          </button>
          
          {sections.price && (
            <div className="mt-4 space-y-3">
              {priceRanges.map((range, index) => (
                <label key={index} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="priceRange"
                    checked={range.checked}
                    onChange={() => togglePriceRange(index)}
                    className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  />
                  <span className={`ml-3 text-sm ${
                    range.checked ? 'text-purple-600 font-medium' : 'text-gray-700'
                  }`}>
                    {range.label}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Average Rating */}
        <div className="pb-4">
          <button
            onClick={() => toggleSection('rating')}
            className="flex items-center justify-between w-full text-left"
          >
            <h3 className="text-lg font-semibold text-gray-900">Average rating</h3>
            {sections.rating ? (
              <ChevronUp size={20} className="text-gray-600" />
            ) : (
              <ChevronDown size={20} className="text-gray-600" />
            )}
          </button>
          
          {sections.rating && (
            <div className="mt-4 space-y-3">
              {ratings.map((rating, index) => (
                <label key={index} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rating.checked}
                    onChange={() => toggleRating(index)}
                    className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <div className="ml-3 flex items-center space-x-2">
                    <div className="flex">
                      {renderStars(rating.stars)}
                    </div>
                    <span className="text-sm text-gray-600">({rating.count})</span>
                  </div>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}