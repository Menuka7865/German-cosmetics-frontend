import React from 'react';

export default function PopularCategories() {
    const categories = [
        {
            id: 1,
            title: "Skincare",
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop&crop=face",
            alt: "Woman applying skincare cream"
        },
        {
            id: 2,
            title: "Hair Care",
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
            alt: "Hair washing and spa treatment"
        },
        {
            id: 3,
            title: "Makeup",
            image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop",
            alt: "Pink makeup products flat lay"
        },
        {
            id: 4,
            title: "Serums & Treatments",
            image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=300&fit=crop",
            alt: "The Ordinary skincare products"
        }
    ];

    return (
        <section className="py-12 px-4 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* Section Title */}
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Popular Categories
                </h2>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {categories.map((category) => (
                        <div key={category.id} className="cursor-pointer">
                            <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                <img
                                    src={category.image}
                                    alt={category.alt}
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}