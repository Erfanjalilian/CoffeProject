"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiFilter, FiStar, FiShoppingCart, FiHeart, FiChevronDown, FiX, FiMessageCircle,FiAward, FiZap, FiClock, FiShield } from "react-icons/fi";
import { LuCrown } from "react-icons/lu";

export default function ValuablePurchasesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [expandedFilter, setExpandedFilter] = useState<string | null>(null);

  const valuableProducts = [
    {
      id: 1,
      name: "ست کامل قهوه ساز حرفه‌ای ایتالیایی دلوگنگی",
      price: "۱,۲۹۰,۰۰۰ تومان",
      originalPrice: "۱,۵۰۰,۰۰۰ تومان",
      image: "/Images/premium_photo-1664970900335-a7c99062bc51.avif",
      category: "تجهیزات حرفه‌ای",
      badge: "پریمیوم",
      rating: 4.9,
      reviews: 89,
      isPrime: true,
      discount: 14,
      isPremium: true,
      features: ["گرید حرفه‌ای", "گارانتی طلایی", "پشتیبانی VIP"],
      timeLeft: "۲ روز",
      soldCount: 43
    },
    {
      id: 2,
      name: "قهوه عربیکا درجه یک اتیوپی سیدامو",
      price: "۴۵۰,۰۰۰ تومان",
      image: "/Images/photo-1525088553748-01d6e210e00b.avif",
      category: "دانه خاص",
      badge: "انحصاری",
      rating: 5.0,
      reviews: 156,
      isPrime: true,
      discount: 0,
      isPremium: true,
      features: ["درجه AA", "ارگانیک", "بسته‌بندی ویژه"],
      timeLeft: "۱ هفته",
      soldCount: 128
    },
    {
      id: 3,
      name: "آسیاب قهوه دیجیتال سوپریم براون",
      price: "۸۵۰,۰۰۰ تومان",
      originalPrice: "۹۵۰,۰۰۰ تومان",
      image: "/Images/photo-1592663527359-cf6642f54cff.avif",
      category: "تجهیزات پیشرفته",
      badge: "تکنولوژی",
      rating: 4.8,
      reviews: 67,
      isPrime: true,
      discount: 11,
      isPremium: true,
      features: ["کنترل دیجیتال", "۱۸ سطح آسیاب", "نمایشگر LED"],
      timeLeft: "۳ روز",
      soldCount: 29
    },
    {
      id: 4,
      name: "فرنچ پرس کریستال لوکس بادر‌میر",
      price: "۳۲۰,۰۰۰ تومان",
      originalPrice: "۳۸۰,۰۰۰ تومان",
      image: "/Images/photo-1596098823457-74e360fcd023.avif",
      category: "تجهیزات لوکس",
      badge: "طراحی ویژه",
      rating: 4.7,
      reviews: 124,
      isPrime: true,
      discount: 16,
      isPremium: false,
      features: ["شیشه بوروسیلیکات", "فیلتر استیل", "بدنه چوبی"],
      timeLeft: "۵ روز",
      soldCount: 87
    },
    {
      id: 5,
      name: "قهوه کوبا سوپریم رزرو ۲۰۲۴",
      price: "۶۸۰,۰۰۰ تومان",
      image: "/Images/premium_photo-1669687924558-386bff1a0469.avif",
      category: "دانه نایاب",
      badge: "محدود",
      rating: 4.9,
      reviews: 92,
      isPrime: true,
      discount: 0,
      isPremium: true,
      features: ["محصول محدود", "عطر پیچیده", "بسته‌بندی اختصاصی"],
      timeLeft: "محدود",
      soldCount: 15
    },
    {
      id: 6,
      name: "اسپرسو ساز تمام اتوماتیک فیلیپس",
      price: "۲,۳۵۰,۰۰۰ تومان",
      originalPrice: "۲,۶۰۰,۰۰۰ تومان",
      image: "/Images/premium_photo-1674327105076-36c4419864cf.avif",
      category: "تجهیزات حرفه‌ای",
      badge: "پریمیوم",
      rating: 4.9,
      reviews: 45,
      isPrime: true,
      discount: 10,
      isPremium: true,
      features: ["کنترل لمسی", "ساخت ایتالیا", "گارانتی مادام العمر"],
      timeLeft: "۱ ماه",
      soldCount: 23
    }
  ];

  const categories = [
    { name: "پرفروش‌ترین‌ها", count: 45, active: true },
    { name: "جدیدترین‌ها", count: 28, active: false },
    { name: "محصولات پریمیوم", count: 32, active: false },
    { name: "تخفیف‌های ویژه", count: 15, active: false },
    { name: "منتخب کاربران", count: 41, active: false }
  ];

  const filters = {
    levels: ["پریمیوم پلاس", "پریمیوم", "استاندارد ویژه"],
    priceRanges: [
      { label: "زیر ۵۰۰ هزار تومان", value: "0-500" },
      { label: "۵۰۰ هزار تا ۱ میلیون", value: "500-1000" },
      { label: "۱ تا ۲ میلیون تومان", value: "1000-2000" },
      { label: "بالای ۲ میلیون تومان", value: "2000-5000" }
    ],
    features: ["گارانتی ویژه", "پشتیبانی VIP", "بسته‌بندی لوکس", "تحویل اکسپرس"]
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 to-orange-50/30 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-gray-600 mb-6 font-[var(--font-yekan)]"
        >
          <span className="hover:text-amber-700 cursor-pointer">خانه</span>
          <span className="mx-2">/</span>
          <span className="hover:text-amber-700 cursor-pointer">خریدهای باارزش</span>
          <span className="mx-2">/</span>
          <span className="text-amber-700 font-semibold">محصولات منتخب</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar Filters - Redesigned */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-72 flex-shrink-0 hidden lg:block"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-amber-200/60 p-6 sticky top-32">
              {/* Header with Crown Icon */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-amber-200">
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-2 rounded-lg">
                  <LuCrown className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 font-[var(--font-yekan)]">فیلترهای ویژه</h3>
                  <p className="text-xs text-gray-500 mt-1 font-[var(--font-yekan)]">محصولات منتخب و باارزش</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-4 mb-6 border border-amber-200">
                <div className="flex items-center justify-between text-sm font-[var(--font-yekan)]">
                  <span className="text-gray-700">تعداد محصولات:</span>
                  <span className="font-bold text-amber-700">۴۵ قلم</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2 font-[var(--font-yekan)]">
                  <span className="text-gray-700">میانگین امتیاز:</span>
                  <span className="font-bold text-amber-700">۴.۸ از ۵</span>
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3 font-[var(--font-yekan)] flex items-center gap-2">
                  <FiZap className="text-amber-500" />
                  دسته‌بندی‌ها
                </h4>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <motion.button
                      key={category.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all font-[var(--font-yekan)] text-right ${
                        category.active
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                          : 'bg-amber-50 text-gray-700 hover:bg-amber-100 hover:text-amber-700'
                      }`}
                    >
                      <span className="text-sm">{category.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        category.active ? 'bg-white/20 text-white' : 'bg-amber-200 text-amber-700'
                      }`}>
                        {category.count}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3 font-[var(--font-yekan)] flex items-center gap-2">
                  <FiAward className="text-amber-500" />
                  محدوده قیمت
                </h4>
                <div className="space-y-2">
                  {filters.priceRanges.map((range, index) => (
                    <motion.label
                      key={range.value}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-amber-50"
                    >
                      <div className="flex items-center gap-2">
                        <input type="radio" name="price" className="text-amber-600 focus:ring-amber-500 w-4 h-4" />
                        <span className="text-sm text-gray-600 group-hover:text-amber-700 transition-colors font-[var(--font-yekan)]">
                          {range.label}
                        </span>
                      </div>
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="font-semibold text-gray-700 mb-3 font-[var(--font-yekan)] flex items-center gap-2">
                  <FiShield className="text-amber-500" />
                  ویژگی‌های ویژه
                </h4>
                <div className="space-y-2">
                  {filters.features.map((feature, index) => (
                    <motion.label
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-amber-50"
                    >
                      <input type="checkbox" className="rounded border-amber-300 text-amber-600 focus:ring-amber-500 w-4 h-4" />
                      <span className="text-sm text-gray-600 group-hover:text-amber-700 transition-colors font-[var(--font-yekan)]">
                        {feature}
                      </span>
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
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-2xl p-4 flex items-center justify-between shadow-lg font-[var(--font-yekan)]"
              >
                <div className="flex items-center gap-2">
                  <LuCrown className="text-white" />
                  <span className="font-semibold">فیلترهای ویژه</span>
                </div>
                <FiChevronDown className="text-white" />
              </motion.button>
            </div>

            {/* Premium Header - Redesigned */}
           

            {/* Consultation Banner - Different Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl shadow-lg border border-emerald-400 p-6 mb-6 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-24 h-24 bg-white/10 rounded-full -translate-x-12 -translate-y-12"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/10 rounded-full translate-x-10 translate-y-10"></div>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                    <FiMessageCircle className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 font-[var(--font-yekan)]">
                      نیاز به مشاوره تخصصی دارید؟
                    </h3>
                    <p className="text-emerald-100 font-[var(--font-yekan)] text-sm leading-relaxed">
                      برای دریافت راهنمایی تخصصی در انتخاب محصول، روی دکمه "از من بپرس" کلیک کنید
                    </p>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-white hover:bg-emerald-50 text-emerald-700 px-6 py-3 rounded-xl font-semibold transition-all shadow-lg font-[var(--font-yekan)] whitespace-nowrap"
                >
                  <FiMessageCircle size={18} />
                  <span>از من بپرس</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Products Grid - Completely Different Layout */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {valuableProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-200 overflow-hidden group relative"
                >
                  {/* Product Image with Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Time Left Badge */}
                    <div className="absolute top-3 left-3 bg-gray-800/90 text-white text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1">
                      <FiClock size={10} />
                      <span>{product.timeLeft}</span>
                    </div>
                    
                    {/* Top Right Badges - Fixed positioning */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                      {/* Discount Badge - Shows first if exists */}
                      {product.discount > 0 && (
                        <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
                          {product.discount}% تخفیف
                        </div>
                      )}
                      
                      {/* Premium Ribbon - Shows in top-right when no discount */}
                      {product.isPremium && product.discount === 0 && (
                        <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg flex items-center gap-1">
                          <LuCrown size={10} />
                          <span>پریمیوم</span>
                        </div>
                      )}
                    </div>

                    {/* Premium Ribbon - Shows below when there's a discount */}
                    {product.isPremium && product.discount > 0 && (
                      <div className="absolute top-12 right-3 z-10">
                        <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg flex items-center gap-1">
                          <LuCrown size={10} />
                          <span>پریمیوم</span>
                        </div>
                      </div>
                    )}

                    {/* Sold Count */}
                    <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                      فروخته شده: {product.soldCount}
                    </div>

                    {/* Quick Actions */}
                    <div className="absolute bottom-3 right-3 flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white/90 hover:bg-white text-amber-700 p-2 rounded-full shadow-lg transition-all"
                      >
                        <FiHeart size={16} />
                      </motion.button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    {/* Category and Rating */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded-full font-[var(--font-yekan)]">
                        {product.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <FiStar className="text-amber-400 fill-amber-400 w-3 h-3" />
                        <span className="text-xs text-gray-600 font-[var(--font-yekan)]">
                          {product.rating}
                        </span>
                      </div>
                    </div>

                    {/* Product Name */}
                    <h3 className="font-bold text-gray-800 mb-3 text-sm leading-relaxed font-[var(--font-yekan)] min-h-[3rem]">
                      {product.name}
                    </h3>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full border border-amber-200">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Ask Me Button - Fixed for every product */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-2 rounded-xl text-sm font-semibold transition-all shadow-lg font-[var(--font-yekan)] mb-3"
                    >
                      <FiMessageCircle size={14} />
                      <span>آنلاین هستم — از من بپرس</span>
                    </motion.button>

                    {/* Price and Add to Cart */}
                    <div className="flex items-center justify-between pt-3 border-t border-amber-200">
                      <div className="flex flex-col">
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
                        className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-lg font-[var(--font-yekan)] flex items-center gap-2"
                      >
                        <FiShoppingCart size={16} />
                        <span>خرید</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Load More Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3 rounded-2xl font-semibold transition-all shadow-lg font-[var(--font-yekan)]"
              >
                مشاهده محصولات بیشتر
              </motion.button>
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
              <div className="flex items-center justify-between p-4 border-b border-amber-200 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                <h2 className="text-xl font-bold font-[var(--font-yekan)]">فیلترهای ویژه</h2>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="p-2 text-white hover:text-amber-100"
                >
                  <FiX size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                <div className="bg-white rounded-2xl border border-amber-200">
                  <FilterSection title="دسته‌بندی‌ها" filterKey="categories">
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category.name}
                          className={`w-full flex items-center justify-between p-3 rounded-xl transition-all font-[var(--font-yekan)] text-right ${
                            category.active
                              ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                              : 'bg-amber-50 text-gray-700 hover:bg-amber-100'
                          }`}
                        >
                          <span className="text-sm">{category.name}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            category.active ? 'bg-white/20 text-white' : 'bg-amber-200 text-amber-700'
                          }`}>
                            {category.count}
                          </span>
                        </button>
                      ))}
                    </div>
                  </FilterSection>

                  <FilterSection title="محدوده قیمت" filterKey="price">
                    <div className="space-y-2">
                      {filters.priceRanges.map((range) => (
                        <label key={range.value} className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-amber-50">
                          <input type="radio" name="price" className="text-amber-600 focus:ring-amber-500 w-4 h-4" />
                          <span className="text-sm text-gray-600 group-hover:text-amber-700 transition-colors font-[var(--font-yekan)]">
                            {range.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </FilterSection>

                  <FilterSection title="ویژگی‌های ویژه" filterKey="features">
                    <div className="space-y-2">
                      {filters.features.map((feature) => (
                        <label key={feature} className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-amber-50">
                          <input type="checkbox" className="rounded border-amber-300 text-amber-600 focus:ring-amber-500 w-4 h-4" />
                          <span className="text-sm text-gray-600 group-hover:text-amber-700 transition-colors font-[var(--font-yekan)]">
                            {feature}
                          </span>
                        </label>
                      ))}
                    </div>
                  </FilterSection>
                </div>
              </div>

              <div className="p-4 border-t border-amber-200 bg-white">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowMobileFilters(false)}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 rounded-2xl font-semibold shadow-lg font-[var(--font-yekan)]"
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