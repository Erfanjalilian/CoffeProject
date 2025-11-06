"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiFilter, FiGrid, FiList, FiStar, FiShoppingCart, FiHeart, FiChevronDown, FiX, FiClock, FiZap } from "react-icons/fi";

export default function SpecialDiscountsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [expandedFilter, setExpandedFilter] = useState<string | null>(null);
  const [activeDealType, setActiveDealType] = useState('all');

  const dealProducts = [
    {
      id: 1,
      name: "قهوه اسپرسو ایتالیایی - پک اقتصادی",
      price: "۲۹۰,۰۰۰ تومان",
      originalPrice: "۳۴۰,۰۰۰ تومان",
      image: "/Images/premium_photo-1674407009848-4da7a12b6b25.avif",
      category: "نوشیدنی",
      badge: "شگفت‌انگیز",
      rating: 4.8,
      reviews: 124,
      isPrime: true,
      discount: 15,
      dealType: "lightning",
      timeLeft: "02:45:30",
      soldCount: 45,
      totalCount: 100
    },
    {
      id: 2,
      name: "فرنچ پرس شیشه‌ای حرفه‌ای + قهوه هدیه",
      price: "۱۸۰,۰۰۰ تومان",
      originalPrice: "۲۲۰,۰۰۰ تومان",
      image: "/Images/photo-1596098823457-74e360fcd023.avif",
      category: "تجهیزات",
      badge: "فروش ویژه",
      rating: 4.6,
      reviews: 89,
      isPrime: true,
      discount: 18,
      dealType: "special",
      timeLeft: "1 روز",
      soldCount: 23,
      totalCount: 50
    },
    {
      id: 3,
      name: "دانه قهوه برزیل درجه یک - پک خانوادگی",
      price: "۲۲۰,۰۰۰ تومان",
      originalPrice: "۲۸۰,۰۰۰ تومان",
      image: "/Images/premium_photo-1671379526961-1aebb82b317b.avif",
      category: "دانه خاص",
      badge: "تخفیف پایان فصل",
      rating: 4.9,
      reviews: 203,
      isPrime: true,
      discount: 21,
      dealType: "clearance",
      timeLeft: "3 روز",
      soldCount: 78,
      totalCount: 120
    },
    {
      id: 4,
      name: "قهوه ترک اصل استانبولی - پک طلایی",
      price: "۲۶۰,۰۰۰ تومان",
      originalPrice: "۳۰۰,۰۰۰ تومان",
      image: "/Images/premium_photo-1674327105076-36c4419864cf.avif",
      category: "نوشیدنی",
      badge: "پیشنهاد شگفت‌انگیز",
      rating: 4.7,
      reviews: 156,
      isPrime: false,
      discount: 13,
      dealType: "lightning",
      timeLeft: "01:15:20",
      soldCount: 67,
      totalCount: 80
    },
    {
      id: 5,
      name: "آسیاب قهوه حرفه‌ای دیجیتال + آموزش رایگان",
      price: "۳۵۰,۰۰۰ تومان",
      originalPrice: "۴۲۰,۰۰۰ تومان",
      image: "/Images/photo-1592663527359-cf6642f54cff.avif",
      category: "تجهیزات",
      badge: "فروش ویژه",
      rating: 4.8,
      reviews: 78,
      isPrime: true,
      discount: 17,
      dealType: "special",
      timeLeft: "2 روز",
      soldCount: 34,
      totalCount: 60
    },
    {
      id: 6,
      name: "موکاپات استیل ایتالیایی - مجموعه کامل",
      price: "۱۴۰,۰۰۰ تومان",
      originalPrice: "۱۷۰,۰۰۰ تومان",
      image: "/Images/photo-1594075731547-8c705bb69e50.avif",
      category: "تجهیزات",
      badge: "شگفت‌انگیز",
      rating: 4.6,
      reviews: 92,
      isPrime: true,
      discount: 18,
      dealType: "lightning",
      timeLeft: "04:20:45",
      soldCount: 89,
      totalCount: 100
    },
    {
      id: 7,
      name: "قهوه عربیکا اتیوپی - پک اقتصادی",
      price: "۳۱۰,۰۰۰ تومان",
      originalPrice: "۳۸۰,۰۰۰ تومان",
      image: "/Images/photo-1525088553748-01d6e210e00b.avif",
      category: "دانه خاص",
      badge: "تخفیف ویژه",
      rating: 4.9,
      reviews: 167,
      isPrime: true,
      discount: 18,
      dealType: "clearance",
      timeLeft: "5 روز",
      soldCount: 45,
      totalCount: 75
    },
    {
      id: 8,
      name: "پورتافیلتر فلزی حرفه‌ای + تمپر رایگان",
      price: "۹۰,۰۰۰ تومان",
      originalPrice: "۱۲۰,۰۰۰ تومان",
      image: "/Images/photo-1514432324607-a09d9b4aefdd.avif",
      category: "تجهیزات",
      badge: "شگفت‌انگیز",
      rating: 4.7,
      reviews: 64,
      isPrime: false,
      discount: 25,
      dealType: "lightning",
      timeLeft: "00:45:10",
      soldCount: 28,
      totalCount: 40
    },
    {
      id: 9,
      name: "قهوه کلمبیا سوپریم - پک ویژه",
      price: "۲۷۰,۰۰۰ تومان",
      originalPrice: "۳۲۰,۰۰۰ تومان",
      image: "/Images/premium_photo-1669687924558-386bff1a0469.avif",
      category: "نوشیدنی",
      badge: "فروش ویژه",
      rating: 4.8,
      reviews: 134,
      isPrime: true,
      discount: 16,
      dealType: "special",
      timeLeft: "4 روز",
      soldCount: 56,
      totalCount: 90
    },
    {
      id: 10,
      name: "سرمaker قهوه ساز چند کاره + قهوه هدیه",
      price: "۴۲۰,۰۰۰ تومان",
      originalPrice: "۵۰۰,۰۰۰ تومان",
      image: "/Images/premium_photo-1664970900335-a7c99062bc51.avif",
      category: "تجهیزات",
      badge: "تخفیف پایان فصل",
      rating: 4.5,
      reviews: 45,
      isPrime: true,
      discount: 16,
      dealType: "clearance",
      timeLeft: "6 روز",
      soldCount: 23,
      totalCount: 40
    },
    {
      id: 11,
      name: "قهوه کنیا AA - پک اقتصادی",
      price: "۳۳۰,۰۰۰ تومان",
      originalPrice: "۴۰۰,۰۰۰ تومان",
      image: "/Images/photo-1621135177072-57c9b6242e7a.avif",
      category: "دانه خاص",
      badge: "شگفت‌انگیز",
      rating: 4.9,
      reviews: 98,
      isPrime: true,
      discount: 18,
      dealType: "lightning",
      timeLeft: "03:10:25",
      soldCount: 72,
      totalCount: 100
    },
    {
      id: 12,
      name: "ست کامل قهوه ساز خانگی + آموزش",
      price: "۵۵۰,۰۰۰ تومان",
      originalPrice: "۶۸۰,۰۰۰ تومان",
      image: "/Images/photo-1514066558159-fc8c737ef259.avif",
      category: "تجهیزات",
      badge: "فروش ویژه",
      rating: 4.7,
      reviews: 112,
      isPrime: true,
      discount: 19,
      dealType: "special",
      timeLeft: "3 روز",
      soldCount: 38,
      totalCount: 60
    }
  ];

  const dealTypes = [
    { id: 'all', name: 'همه تخفیف‌ها', count: 45, icon: FiZap },
    { id: 'lightning', name: 'پیشنهادهای شگفت‌انگیز', count: 18, icon: FiZap },
    { id: 'special', name: 'فروش ویژه', count: 15, icon: FiStar },
    { id: 'clearance', name: 'تخفیف پایان فصل', count: 12, icon: FiClock }
  ];

  const categories = [
    { name: "همه دسته‌بندی‌ها", count: 45, active: true },
    { name: "قهوه اسپرسو", count: 12, active: false },
    { name: "قهوه ترک", count: 8, active: false },
    { name: "دانه قهوه", count: 15, active: false },
    { name: "قهوه فوری", count: 5, active: false },
    { name: "تجهیزات دم‌آوری", count: 25, active: false },
    { name: "اکسسوری قهوه", count: 18, active: false }
  ];

  const filters = {
    brands: ["دیویدوف", "لاوازا", "ایلی", "استارباکس", "نسپرسو", "کمکس"],
    priceRanges: [
      { label: "زیر ۱۰۰ هزار تومان", value: "0-100" },
      { label: "۱۰۰ تا ۳۰۰ هزار تومان", value: "100-300" },
      { label: "۳۰۰ تا ۵۰۰ هزار تومان", value: "300-500" },
      { label: "بالای ۵۰۰ هزار تومان", value: "500-1000" }
    ],
    discountRanges: [
      { label: "۱۰٪ تا ۲۰٪", value: "10-20" },
      { label: "۲۰٪ تا ۳۰٪", value: "20-30" },
      { label: "۳۰٪ تا ۵۰٪", value: "30-50" },
      { label: "بالای ۵۰٪", value: "50-100" }
    ],
    ratings: [4, 3, 2, 1]
  };

  const filteredProducts = dealProducts.filter(product => 
    activeDealType === 'all' || product.dealType === activeDealType
  );

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

  const ProgressBar = ({ sold, total }: { sold: number; total: number }) => {
    const percentage = (sold / total) * 100;
    return (
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full"
        />
      </div>
    );
  };

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
          <span>تخفیف‌ها و پیشنهادها</span>
          <span className="mx-2">/</span>
          <span className="text-amber-700 font-semibold">تخفیف‌های ویژه</span>
        </motion.div>

        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl overflow-hidden shadow-2xl mb-8"
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative px-8 py-12 text-center text-white">
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4 font-[var(--font-yekan)]"
            >
              تخفیف‌های شگفت‌انگیز
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-6 font-[var(--font-yekan)]"
            >
              تا ۵۰٪ تخفیف روی بهترین محصولات قهوه
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 text-sm"
            >
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">⚡ پیشنهادهای لحظه‌ای</div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">⭐ فروش ویژه</div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">🕒 تخفیف پایان فصل</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Deal Type Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg border border-amber-200 p-6 mb-6"
        >
          <div className="flex flex-wrap gap-4">
            {dealTypes.map((dealType) => {
              const IconComponent = dealType.icon;
              return (
                <motion.button
                  key={dealType.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveDealType(dealType.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all font-[var(--font-yekan)] ${
                    activeDealType === dealType.id
                      ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg'
                      : 'bg-amber-50 text-gray-700 border border-amber-200 hover:bg-amber-100'
                  }`}
                >
                  <IconComponent size={18} />
                  <span>{dealType.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activeDealType === dealType.id
                      ? 'bg-white/20 text-white'
                      : 'bg-amber-200 text-amber-700'
                  }`}>
                    {dealType.count}
                  </span>
                </motion.button>
              );
            })}
          </div>
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
                <h3 className="font-bold text-gray-800 font-[var(--font-yekan)]">فیلتر تخفیف‌ها</h3>
              </div>

              {/* Discount Range */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3 font-[var(--font-yekan)]">میزان تخفیف</h4>
                <div className="space-y-2">
                  {filters.discountRanges.map((range, index) => (
                    <motion.label
                      key={range.value}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <input type="radio" name="discount" className="text-amber-600 focus:ring-amber-500" />
                      <span className="text-sm text-gray-600 group-hover:text-amber-700 transition-colors font-[var(--font-yekan)]">
                        {range.label}
                      </span>
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3 font-[var(--font-yekan)]">دسته‌بندی‌ها</h4>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <motion.label
                      key={category.name}
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
                      key={range.value}
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
                  <span className="font-semibold text-gray-800">فیلتر تخفیف‌ها</span>
                </div>
                <FiChevronDown className="text-amber-600" />
              </motion.button>
            </div>

            {/* Header with Sort and View Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-amber-200 p-6 mb-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-amber-800 mb-1 font-[var(--font-yekan)]">
                    {dealTypes.find(d => d.id === activeDealType)?.name}
                  </h2>
                  <p className="text-gray-600 font-[var(--font-yekan)]">
                    نمایش ۱-۱۲ از {filteredProducts.length} محصول تخفیف‌دار
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  {/* View Mode Toggle */}
                  <div className="flex items-center gap-2 bg-amber-50 rounded-xl p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-all ${
                        viewMode === 'grid' ? 'bg-white shadow-md text-amber-700' : 'text-gray-500'
                      }`}
                    >
                      <FiGrid size={18} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-all ${
                        viewMode === 'list' ? 'bg-white shadow-md text-amber-700' : 'text-gray-500'
                      }`}
                    >
                      <FiList size={18} />
                    </button>
                  </div>

                  {/* Sort Options */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white border border-amber-200 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-[var(--font-yekan)]"
                  >
                    <option value="popular">پربازدیدترین</option>
                    <option value="discount-high">بیشترین تخفیف</option>
                    <option value="discount-low">کمترین تخفیف</option>
                    <option value="price-low">قیمت: کم به زیاد</option>
                    <option value="price-high">قیمت: زیاد به کم</option>
                    <option value="ending-soon">زودتر تمام می‌شود</option>
                  </select>
                </div>
              </div>
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
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-100 overflow-hidden group ${
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
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-sm px-3 py-1 rounded-full font-bold shadow-lg">
                      {product.discount}% تخفیف
                    </div>
                    
                    {/* Deal Type Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xs px-2 py-1 rounded-full font-medium">
                        {product.badge}
                      </span>
                    </div>

                    {/* Time Left Badge */}
                    <div className="absolute bottom-3 left-3 bg-black/80 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <FiClock size={12} />
                      {product.timeLeft}
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

                      {/* Progress Bar */}
                      <div className="mb-3">
                        <div className="flex justify-between text-xs text-gray-600 mb-1 font-[var(--font-yekan)]">
                          <span>{product.soldCount} فروخته شده</span>
                          <span>فقط {product.totalCount - product.soldCount} باقی مانده</span>
                        </div>
                        <ProgressBar sold={product.soldCount} total={product.totalCount} />
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

                    {/* Price and Action */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-amber-700 font-[var(--font-yekan)]">
                          {product.price}
                        </span>
                        <span className="text-sm text-gray-500 line-through font-[var(--font-yekan)]">
                          {product.originalPrice}
                        </span>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-lg font-[var(--font-yekan)]"
                      >
                        افزودن به سبد
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
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
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMobileFilters(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />
            
            {/* Filters Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 right-0 bottom-0 bg-white z-50 lg:hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-amber-200 bg-amber-50">
                <h2 className="text-xl font-bold text-amber-800 font-[var(--font-yekan)]">فیلتر تخفیف‌ها</h2>
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
                  {/* Discount Range */}
                  <FilterSection title="میزان تخفیف" filterKey="discount">
                    <div className="space-y-2">
                      {filters.discountRanges.map((range) => (
                        <label key={range.value} className="flex items-center gap-2 cursor-pointer group">
                          <input type="radio" name="discount" className="text-amber-600 focus:ring-amber-500" />
                          <span className="text-sm text-gray-600 group-hover:text-amber-700 transition-colors font-[var(--font-yekan)]">
                            {range.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </FilterSection>

                  {/* Categories */}
                  <FilterSection title="دسته‌بندی‌ها" filterKey="categories">
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <label key={category.name} className="flex items-center justify-between cursor-pointer group">
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
                        <label key={range.value} className="flex items-center gap-2 cursor-pointer group">
                          <input type="radio" name="price" className="text-amber-600 focus:ring-amber-500" />
                          <span className="text-sm text-gray-600 group-hover:text-amber-700 transition-colors font-[var(--font-yekan)]">
                            {range.label}
                          </span>
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