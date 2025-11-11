"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  badge: string;
  rating: number;
  reviews: number;
  isPrime: boolean;
  discount: number;
  type: string;
  dealType?: string;
  timeLeft?: string;
  soldCount?: number;
  totalCount?: number;
  isPremium?: boolean;
  features?: string[];
}

export default function BestSellingProducts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(true);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch products from API
  useEffect(() => {
    async function loadFeaturedProducts() {
      try {
        setLoading(true);
        const response = await fetch('https://6810ff2827f2fdac24139dec.mockapi.io/Product');
        const products: Product[] = await response.json();
        
        // Get top 7 products based on rating and reviews
        const topProducts = products
          .sort((a, b) => {
            // Sort by rating first, then by number of reviews
            if (b.rating !== a.rating) {
              return b.rating - a.rating;
            }
            return b.reviews - a.reviews;
          })
          .slice(0, 7);
        
        setFeaturedProducts(topProducts);
      } catch (error) {
        console.error('Error loading featured products:', error);
      } finally {
        setLoading(false);
      }
    }

    loadFeaturedProducts();
  }, []);

  // Fix for RTL scroll detection
  useEffect(() => {
    updateArrowVisibility();
  }, [featuredProducts]);

  const scroll = (direction: 'left' | 'right'): void => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 300;
      const newScrollLeft = direction === 'left' 
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });

      setTimeout(() => {
        updateArrowVisibility();
      }, 300);
    }
  };

  const updateArrowVisibility = (): void => {
    const container = scrollContainerRef.current;
    if (container) {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;
      
      setShowLeftArrow(currentScroll > 0);
      setShowRightArrow(currentScroll < maxScroll - 10);
    }
  };

  // Loading skeleton
  if (loading) {
    return (
      <section className="w-full bg-gradient-to-b from-amber-50 to-white py-20 px-4 md:px-10 lg:px-20" dir="rtl">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 mb-16 border-2 border-amber-200/80">
            <div className="mb-8">
              <div className="h-8 bg-amber-200 rounded-lg w-64 mb-2 animate-pulse"></div>
              <div className="h-4 bg-amber-100 rounded w-48 animate-pulse"></div>
            </div>
            
            <div className="flex gap-6 overflow-x-auto pb-4">
              {[...Array(7)].map((_, index) => (
                <div key={index} className="flex-shrink-0 w-64 bg-white rounded-2xl p-4 shadow-lg border-2 border-amber-100/80">
                  <div className="h-32 bg-amber-200 rounded-xl mb-4 animate-pulse"></div>
                  <div className="h-6 bg-amber-100 rounded w-20 mb-2 animate-pulse"></div>
                  <div className="h-4 bg-amber-100 rounded w-full mb-2 animate-pulse"></div>
                  <div className="h-4 bg-amber-100 rounded w-3/4 mb-4 animate-pulse"></div>
                  <div className="flex justify-between">
                    <div className="h-6 bg-amber-200 rounded w-20 animate-pulse"></div>
                    <div className="h-4 bg-amber-100 rounded w-10 animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-gradient-to-b from-amber-50 to-white py-20 px-4 md:px-10 lg:px-20" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Featured Products Section with Horizontal Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 mb-16 border-2 border-amber-200/80 relative"
        >
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-amber-800 mb-2 font-[var(--font-yekan)]">
              پر فروش ترین محصولات
            </h3>
            <p className="text-gray-600 font-[var(--font-yekan)]">
              محصولاتی که بیشترین محبوبیت را در بین مشتریان دارند
            </p>
          </div>

          {/* Scroll Arrows */}
          {showLeftArrow && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => scroll('left')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-amber-700 w-10 h-10 rounded-full shadow-lg flex items-center justify-center z-10 transition-all duration-300 hover:scale-110 border border-amber-200"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
          )}

          {showRightArrow && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => scroll('right')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-amber-700 w-10 h-10 rounded-full shadow-lg flex items-center justify-center z-10 transition-all duration-300 hover:scale-110 border border-amber-200"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          )}

          {/* Horizontal Scroll Container */}
          <div 
            ref={scrollContainerRef}
            onScroll={updateArrowVisibility}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
            dir="ltr"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-64 bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group border-2 border-amber-100/80 hover:border-amber-200 cursor-pointer"
                dir="rtl"
                onClick={() => window.location.href = `/CoffeeCategoryPage/${product.id}`}
              >
                <div className="relative h-32 mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Discount Badge */}
                  {product.discount > 0 && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold font-[var(--font-yekan)]">
                      {product.discount}% تخفیف
                    </div>
                  )}
                  
                  {/* Product Badge */}
                  <div className="absolute top-2 right-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      product.badge === 'پرفروش' ? 'bg-red-500 text-white' :
                      product.badge === 'جدید' ? 'bg-green-500 text-white' :
                      product.badge === 'ویژه' ? 'bg-purple-500 text-white' :
                      product.badge === 'شگفت‌انگیز' ? 'bg-orange-500 text-white' :
                      product.badge === 'اقتصادی' ? 'bg-blue-500 text-white' :
                      product.badge === 'پریمیوم' ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white' :
                      product.badge === 'انحصاری' ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white' :
                      'bg-amber-500 text-white'
                    } font-[var(--font-yekan)]`}>
                      {product.badge}
                    </span>
                  </div>

                  {/* Prime Badge */}
                  {product.isPrime && (
                    <div className="absolute bottom-2 right-2">
                      <span className="bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xs px-2 py-1 rounded-full font-bold font-[var(--font-yekan)]">
                        PRIME
                      </span>
                    </div>
                  )}
                </div>

                {/* Category */}
                <div className="mb-2">
                  <span className="text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded-full font-[var(--font-yekan)]">
                    {product.category}
                  </span>
                </div>

                {/* Product Name */}
                <h4 className="font-bold text-gray-800 mb-2 text-sm font-[var(--font-yekan)] leading-relaxed">
                  {product.name}
                </h4>

                {/* Price and Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-700 font-bold font-[var(--font-yekan)] text-sm">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through text-xs font-[var(--font-yekan)]">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span className="text-sm text-gray-600">{product.rating}</span>
                    <span className="text-xs text-gray-500 font-[var(--font-yekan)]">({product.reviews})</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-amber-700 border-2 border-amber-300 px-8 py-3 rounded-2xl font-semibold hover:bg-amber-50 transition-colors font-[var(--font-yekan)]"
              onClick={() => window.location.href = '/CoffeeCategoryPage'}
            >
              مشاهده همه محصولات
            </motion.button>
          </div>
        </motion.div>

        {/* Main Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg transition-all duration-300 font-[var(--font-yekan)] text-lg"
            onClick={() => window.location.href = '/CoffeeCategoryPage'}
          >
            کشف همه محصولات
          </motion.button>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}