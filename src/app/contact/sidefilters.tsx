"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/helper';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CategoryItem {
  name: string;
  count: number;
  checked: boolean;
}

interface RawCategoryItem {
  id?: number;
  main_cat_name?: string;
  main_cat?: string;
  name?: string;
  image?: string;
  [key: string]: unknown;
}

// interface PriceRange {
//   label: string;
//   min: number;
//   max: number | null;
//   checked: boolean;
// }

// interface RatingItem {
//   stars: number;
//   count: number;
//   checked: boolean;
// }

export default function ProductFilterSidebar() {
  const [sections, setSections] = useState<Record<string, boolean>>({
    categories: true,
    highlight: true,
    price: true,
    rating: true,
  });

  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [categoriesError, setCategoriesError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const fetchCategories = async () => {
      setLoadingCategories(true);
      setCategoriesError(null);
      try {
        const resp = await axios.post(BASE_URL, { "type": "list_main_cat" });
        const payload = resp.data;

        // payload shape may vary. try common patterns and fallback to empty array
        let items: unknown[] = [];
        if (Array.isArray(payload)) items = payload as unknown[];
        else {
          const p = payload as Record<string, unknown>;
          const maybeData = p['data'];
          const maybeCategories = p['categories'];
          const maybeResult = p['result'];

          if (Array.isArray(maybeData)) items = maybeData as unknown[];
          else if (Array.isArray(maybeCategories)) items = maybeCategories as unknown[];
          else if (Array.isArray(maybeResult)) items = maybeResult as unknown[];
          else {
            // attempt to find first array in payload
            const found = Object.values(p).find(v => Array.isArray(v));
            if (Array.isArray(found)) items = found as unknown[];
          }
        }

  const mapped: CategoryItem[] = (items as RawCategoryItem[]).map(item => {
          // Prefer backend's `main_cat_name`, then common fallbacks.
          let name = item.main_cat_name ?? item.main_cat ?? item.name ?? item.cat_name ?? item.title;
          // If name is still an object or missing, coerce safely to string
          if (name === undefined || name === null) {
            name = `Category ${item.id ?? ''}`.trim();
          } else if (typeof name === 'object') {
            // If the API accidentally returned an object, try common keys or JSON stringify short form
            const obj = name as Record<string, unknown>;
            const maybeLabel = obj['label'] ?? obj['name'];
            if (typeof maybeLabel === 'string') name = maybeLabel;
            else name = JSON.stringify(obj);
          }

          const count = Number(item.count ?? item.total ?? item.products_count ?? 0) || 0;

          return {
            name: String(name),
            count,
            checked: false,
          };
        });

        if (mounted) setCategories(mapped);
      } catch (err: unknown) {
        console.error('Failed to fetch categories', err);
        if (mounted) {
          // Safely extract possible message from unknown error
          let errMsg = 'Failed to load categories';
          if (typeof err === 'object' && err !== null) {
            const errObj = err as Record<string, unknown>;
            const resp = errObj['response'];
            if (typeof resp === 'object' && resp !== null) {
              const respObj = resp as Record<string, unknown>;
              const data = respObj['data'];
              if (typeof data === 'object' && data !== null) {
                const dataObj = data as Record<string, unknown>;
                const maybeMessage = dataObj['message'];
                if (typeof maybeMessage === 'string') errMsg = maybeMessage;
              }
            }
            if (errMsg === 'Failed to load categories') {
              const maybeMessage = errObj['message'];
              if (typeof maybeMessage === 'string') errMsg = maybeMessage;
            }
          }
          setCategoriesError(errMsg);
        }
      } finally {
        if (mounted) setLoadingCategories(false);
      }
    };

    fetchCategories();

    return () => {
      mounted = false;
    };
  }, []);

  // const [highlightItems] = useState([
  //   { name: 'All Products', active: true },
  //   { name: 'Best Seller', active: false },
  //   { name: 'New Arrivals', active: false },
  //   { name: 'Sale', active: false },
  //   { name: 'Hot Items', active: false },
  // ]);

  // const [priceRanges, setPriceRanges] = useState<PriceRange[]>([
  //   { label: 'All', min: 0, max: null, checked: true },
  //   { label: 'Rs.0–Rs.4,400', min: 0, max: 4400, checked: false },
  //   { label: 'Rs.4,400–Rs.8,800', min: 4400, max: 8800, checked: false },
  //   { label: 'Rs.8,800–Rs.13,200', min: 8800, max: 13200, checked: false },
  //   { label: 'Rs.17,600+', min: 17600, max: null, checked: false },
  // ]);

  // const [ratings, setRatings] = useState<RatingItem[]>([
  //   { stars: 5, count: 0, checked: false },
  //   { stars: 4, count: 0, checked: false },
  //   { stars: 3, count: 0, checked: false },
  //   { stars: 2, count: 0, checked: false },
  //   { stars: 1, count: 0, checked: false },
  // ]);

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

  // const togglePriceRange = (index: number) => {
  //   setPriceRanges(prev => 
  //     prev.map((range, i) => 
  //       i === index ? { ...range, checked: !range.checked } : range
  //     )
  //   );
  // };

  // const toggleRating = (index: number) => {
  //   setRatings(prev => 
  //     prev.map((rating, i) => 
  //       i === index ? { ...rating, checked: !rating.checked } : rating
  //     )
  //   );
  // };

  // const renderStars = (count: number, filled: boolean = true) => {
  //   return Array.from({ length: 5 }, (_, i) => (
  //     <Star
  //       key={i}
  //       size={14}
  //       className={`${
  //         i < count
  //           ? filled
  //             ? 'fill-yellow-400 text-yellow-400'
  //             : 'fill-yellow-400 text-yellow-400'
  //           : 'text-gray-300'
  //       }`}
  //     />
  //   ));
  // };

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
                    {category.name} 
                  </span>
                </label>
              ))}
              {loadingCategories && (
                <div className="text-sm text-gray-500">Loading categories...</div>
              )}
              {categoriesError && (
                <div className="text-sm text-red-500">{categoriesError}</div>
              )}
            </div>
          )}
        </div>

        {/* Other filter sections omitted for brevity */}
      </div>
    </div>
  );
}