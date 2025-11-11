"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiFilter, FiGrid, FiList, FiStar, FiShoppingCart, FiHeart, FiChevronDown, FiX, FiMessageCircle } from "react-icons/fi";
import Link from "next/link";

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
}

interface Category {
  id: number;
  name: string;
  count: number;
  active: boolean;
}

interface PriceRange {
  id: number;
  label: string;
  value: string;
}

interface Filters {
  brands: string[];
  priceRanges: PriceRange[];
  ratings: number[];
}

export default function CoffeeCategoryPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [expandedFilter, setExpandedFilter] = useState<string | null>(null);
  const [coffeeProducts, setCoffeeProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [filters, setFilters] = useState<Filters>({ brands: [], priceRanges: [], ratings: [] });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const response = await fetch('https://6810ff2827f2fdac24139dec.mockapi.io/Product');
        const data = await response.json();
        console.log(data)
        
        // The new API returns a flat products array directly
        setCoffeeProducts(data|| []);
        
        // For categories and filters, we'll use static data since your mock API doesn't include them
        setCategories([
          { id: 1, name: "همه دسته‌بندی‌ها", count: 45, active: true },
          { id: 2, name: "قهوه اسپرسو", count: 12, active: false },
          { id: 3, name: "قهوه ترک", count: 8, active: false },
          { id: 4, name: "دانه قهوه", count: 15, active: false },
          { id: 5, name: "قهوه فوری", count: 5, active: false },
          { id: 6, name: "تجهیزات دم‌آوری", count: 25, active: false },
          { id: 7, name: "اکسسوری قهوه", count: 18, active: false }
        ]);
        
        setFilters({
          brands: ["دیویدوف", "لاوازا", "ایلی", "استارباکس", "نسپرسو", "کمکس"],
          priceRanges: [
            { id: 1, label: "زیر ۱۰۰ هزار تومان", value: "0-100" },
            { id: 2, label: "۱۰۰ تا ۳۰۰ هزار تومان", value: "100-300" },
            { id: 3, label: "۳۰۰ تا ۵۰۰ هزار تومان", value: "300-500" },
            { id: 4, label: "بالای ۵۰۰ هزار تومان", value: "500-1000" }
          ],
          ratings: [4, 3, 2, 1]
        });
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    }
    
    loadData();
  }, []);

  // Rest of the component remains EXACTLY the same as your original design
  const FilterSection = ({ title, children, filterKey }: { title: string; children: React.ReactNode; filterKey: string }) => (
    <div className="border-b border-amber-200 last:border-b-0">
      <button
        onClick={() => setExpandedFilter(expandedFilter === filterKey ? null : filterKey)}
        className="w-full py-4 flex items-center justify-between text-right font-[var(--font-yekan)]"
      >
        <span className="font-semibold text-gray-700">{title}</span>
        <motion.div
          animate={{ rotate: expandedFilter === filterKey ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronDown className="text-amber-600" />
        </motion.div>
      </button>
      <AnimatePresence>
        {expandedFilter === filterKey && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="pb-4"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-[var(--font-yekan)]">در حال بارگذاری محصولات...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-gray-600 mb-6 font-[var(--font-yekan)] mt-8 lg:mt-0"
        >
          <span>خانه</span>
          <span className="mx-2">/</span>
          <span>دسته‌بندی‌ها</span>
          <span className="mx-2">/</span>
          <span className="text-amber-700 font-semibold">قهوه و تجهیزات</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar Filters */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-64 flex-shrink-0 hidden lg:block"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-amber-200 p-6 sticky top-32">
              <div className="flex items-center gap-2 mb-6">
                <FiFilter className="text-amber-600" />
                <h3 className="font-bold text-gray-800 font-[var(--font-yekan)]">فیلترها</h3>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3 font-[var(--font-yekan)]">دسته‌بندی‌ها</h4>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <motion.label
                      key={category.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between cursor-pointer group"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={category.active}
                          onChange={() => {}}
                          className="rounded border-amber-300 text-amber-600 focus:ring-amber-500"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-amber-700 transition-colors font-[var(--font-yekan)]">
                          {category.name}
                        </span>
                      </div>
                      <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3 font-[var(--font-yekan)]">محدوده قیمت</h4>
                <div className="space-y-2">
                  {filters.priceRanges.map((range, index) => (
                    <motion.label
                      key={range.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <input type="radio" name="price" className="text-amber-600 focus:ring-amber-500" />
                      <span className="text-sm text-gray-600 group-hover:text-amber-700 transition-colors font-[var(--font-yekan)]">
                        {range.label}
                      </span>
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3 font-[var(--font-yekan)]">برندها</h4>
                <div className="space-y-2">
                  {filters.brands.map((brand, index) => (
                    <motion.label
                      key={brand}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <input type="checkbox" className="rounded border-amber-300 text-amber-600 focus:ring-amber-500" />
                      <span className="text-sm text-gray-600 group-hover:text-amber-700 transition-colors font-[var(--font-yekan)]">
                        {brand}
                      </span>
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Ratings */}
              <div>
                <h4 className="font-semibold text-gray-700 mb-3 font-[var(--font-yekan)]">امتیاز</h4>
                <div className="space-y-2">
                  {filters.ratings.map((rating, index) => (
                    <motion.label
                      key={rating}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <input type="checkbox" className="rounded border-amber-300 text-amber-600 focus:ring-amber-500" />
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            className={`w-3 h-3 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                          />
                        ))}
                        <span className="text-xs text-gray-500 mr-1">و بالاتر</span>
                      </div>
                    </motion.label>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowMobileFilters(true)}
                className="w-full bg-white border-2 border-amber-300 rounded-2xl p-4 flex items-center justify-between shadow-lg font-[var(--font-yekan)]"
              >
                <div className="flex items-center gap-2">
                  <FiFilter className="text-amber-600" />
                  <span className="font-semibold text-gray-800">فیلترها و مرتب‌سازی</span>
                </div>
                <FiChevronDown className="text-amber-600" />
              </motion.button>
            </div>

            {/* Header with Sort and View Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl shadow-lg border border-amber-200 p-6 mb-6"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-amber-500 rounded-full p-3">
                    <FiMessageCircle className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-amber-800 mb-1 font-[var(--font-yekan)]">
                      نیاز به مشاوره دارید؟
                    </h3>
                    <p className="text-amber-700 font-[var(--font-yekan)] text-sm">
                      برای دریافت راهنمایی تخصصی در انتخاب محصول، روی دکمه "از من بپرس" کلیک کنید
                    </p>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg font-[var(--font-yekan)] whitespace-nowrap"
                >
                  <FiMessageCircle size={18} />
                  <span>از من بپرس</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Filter Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              {['پربازدیدترین', 'پرفروش‌ترین', 'گران‌ترین', 'ارزان‌ترین'].map((filter, index) => (
                <motion.button
                  key={filter}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all font-[var(--font-yekan)] ${
                    index === 0
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-amber-200 hover:bg-amber-50 hover:text-amber-700'
                  }`}
                >
                  {filter}
                </motion.button>
              ))}
            </motion.div>

            {/* Products Grid/List */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className={`${
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'space-y-6'
              }`}
            >
              
              {coffeeProducts.map((product, index) => (
                <Link 
                  key={product.id} 
                  href={`/CoffeeCategoryPage/${product.id}`}
                  className="block"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-100 overflow-hidden group cursor-pointer ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                  >
                    {/* Product Image */}
                    <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'h-48'}`}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Discount Badge */}
                      {product.discount > 0 && (
                        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                          {product.discount}% تخفیف
                        </div>
                      )}
                      
                      {/* Product Badge */}
                      <div className="absolute top-3 right-3">
                        <span className="bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xs px-2 py-1 rounded-full font-medium">
                          {product.badge}
                        </span>
                      </div>

                      {/* Quick Actions */}
                      <div className="absolute bottom-3 left-3 flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-white/90 hover:bg-white text-amber-700 p-2 rounded-full shadow-lg transition-all"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <FiHeart size={16} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-white/90 hover:bg-white text-amber-700 p-2 rounded-full shadow-lg transition-all"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <FiShoppingCart size={16} />
                        </motion.button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className={`p-4 flex-1 ${viewMode === 'list' ? 'flex flex-col justify-between' : ''}`}>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-2 text-sm leading-relaxed font-[var(--font-yekan)]">
                          {product.name}
                        </h3>
                        
                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <FiStar
                                key={i}
                                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500 font-[var(--font-yekan)]">
                            ({product.reviews} نظر)
                          </span>
                        </div>

                        {/* Prime Badge */}
                        {product.isPrime && (
                          <div className="flex items-center gap-1 mb-3">
                            <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xs px-2 py-1 rounded-full font-bold">
                              PRIME
                            </div>
                            <span className="text-xs text-amber-600 font-[var(--font-yekan)]">ارسال رایگان</span>
                          </div>
                        )}
                      </div>

                      {/* Price and Actions */}
                      <div className="space-y-2 mt-3">
                        {/* Ask Me Button */}
                        <div className="flex justify-end">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-lg font-[var(--font-yekan)] whitespace-nowrap"
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                          >
                            <FiMessageCircle size={14} />
                            <span className="text-xs">از من بپرس — آنلاین هستم</span>
                          </motion.button>
                        </div>

                        {/* Price and Add to Cart */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-amber-700 font-[var(--font-yekan)]">
                              {product.price}
                            </span>
                            {product.originalPrice && (
                              <span className="text-sm text-gray-500 line-through font-[var(--font-yekan)]">
                                {product.originalPrice}
                              </span>
                            )}
                          </div>
                          
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-lg font-[var(--font-yekan)]"
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                          >
                            افزودن به سبد
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>

            {/* Pagination */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-center items-center gap-2 mt-12"
            >
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`w-10 h-10 rounded-xl transition-all font-[var(--font-yekan)] ${
                    page === 1
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-amber-200 hover:bg-amber-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="w-10 h-10 rounded-xl bg-white text-gray-700 border border-amber-200 hover:bg-amber-50 transition-all font-[var(--font-yekan)]">
                ...
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      <AnimatePresence>
        {showMobileFilters && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMobileFilters(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 right-0 bottom-0 bg-white z-50 lg:hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-amber-200 bg-amber-50">
                <h2 className="text-xl font-bold text-amber-800 font-[var(--font-yekan)]">فیلترها و مرتب‌سازی</h2>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="p-2 text-gray-600 hover:text-amber-700"
                >
                  <FiX size={24} />
                </button>
              </div>

              {/* Filters Content */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="bg-white rounded-2xl border border-amber-200">
                  {/* Categories */}
                  <FilterSection title="دسته‌بندی‌ها" filterKey="categories">
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <label key={category.id} className="flex items-center justify-between cursor-pointer group">
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={category.active}
                              onChange={() => {}}
                              className="rounded border-amber-300 text-amber-600 focus:ring-amber-500"
                            />
                            <span className="text-sm text-gray-600 group-hover:text-amber-700 transition-colors font-[var(--font-yekan)]">
                              {category.name}
                            </span>
                          </div>
                          <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </label>
                      ))}
                    </div>
                  </FilterSection>

                  {/* Price Range */}
                  <FilterSection title="محدوده قیمت" filterKey="price">
                    <div className="space-y-2">
                      {filters.priceRanges.map((range) => (
                        <label key={range.id} className="flex items-center gap-2 cursor-pointer group">
                          <input type="radio" name="price" className="text-amber-600 focus:ring-amber-500" />
                          <span className="text-sm text-gray-600 group-hover:text-amber-700 transition-colors font-[var(--font-yekan)]">
                            {range.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </FilterSection>

                  {/* Brands */}
                  <FilterSection title="برندها" filterKey="brands">
                    <div className="space-y-2">
                      {filters.brands.map((brand) => (
                        <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                          <input type="checkbox" className="rounded border-amber-300 text-amber-600 focus:ring-amber-500" />
                          <span className="text-sm text-gray-600 group-hover:text-amber-700 transition-colors font-[var(--font-yekan)]">
                            {brand}
                          </span>
                        </label>
                      ))}
                    </div>
                  </FilterSection>

                  {/* Ratings */}
                  <FilterSection title="امتیاز" filterKey="ratings">
                    <div className="space-y-2">
                      {filters.ratings.map((rating) => (
                        <label key={rating} className="flex items-center gap-2 cursor-pointer group">
                          <input type="checkbox" className="rounded border-amber-300 text-amber-600 focus:ring-amber-500" />
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <FiStar
                                key={i}
                                className={`w-3 h-3 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                              />
                            ))}
                            <span className="text-xs text-gray-500 mr-1">و بالاتر</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </FilterSection>
                </div>
              </div>

              {/* Apply Button */}
              <div className="p-4 border-t border-amber-200 bg-white">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowMobileFilters(false)}
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 rounded-2xl font-semibold shadow-lg font-[var(--font-yekan)]"
                >
                  اعمال فیلترها
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}