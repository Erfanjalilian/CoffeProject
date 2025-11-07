"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  const featuredProducts = [
    {
      id: 1,
      name: "قهوه اسپرسو ایتالیایی",
      price: "۲۹۰,۰۰۰ تومان",
      image: "/Images/premium_photo-1674407009848-4da7a12b6b25.avif",
      category: "نوشیدنی",
      badge: "پرفروش",
      rating: 4.8
    },
    {
      id: 2,
      name: "فرنچ پرس شیشه‌ای",
      price: "۱۸۰,۰۰۰ تومان",
      image: "/Images/photo-1596098823457-74e360fcd023.avif",
      category: "تجهیزات",
      badge: "جدید",
      rating: 4.6
    },
    {
      id: 3,
      name: "دانه قهوه برزیل",
      price: "۲۲۰,۰۰۰ تومان",
      image: "/Images/premium_photo-1671379526961-1aebb82b317b.avif",
      category: "دانه خاص",
      badge: "ویژه",
      rating: 4.9
    },
    {
      id: 4,
      name: "قهوه ترک اصل",
      price: "۲۶۰,۰۰۰ تومان",
      image: "/Images/premium_photo-1674327105076-36c4419864cf.avif",
      category: "نوشیدنی",
      badge: "محبوب",
      rating: 4.7
    }
  ];

  const bestSellers = [
    {
      id: 5,
      name: "آسیاب قهوه حرفه‌ای",
      price: "۳۵۰,۰۰۰ تومان",
      image: "/Images/photo-1592663527359-cf6642f54cff.avif",
      rating: 4.8
    },
    {
      id: 6,
      name: "موکاپات استیل",
      price: "۱۴۰,۰۰۰ تومان",
      image: "/Images/photo-1594075731547-8c705bb69e50.avif",
      rating: 4.6
    },
    {
      id: 7,
      name: "قهوه عربیکا اتیوپی",
      price: "۳۱۰,۰۰۰ تومان",
      image: "/Images/photo-1525088553748-01d6e210e00b.avif",
      rating: 4.9
    },
    {
      id: 8,
      name: "پورتافیلتر فلزی",
      price: "۹۰,۰۰۰ تومان",
      image: "/Images/photo-1514432324607-a09d9b4aefdd.avif",
      rating: 4.7
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-amber-50 to-white py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
      

        {/* Featured Products Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 mb-16 border-2 border-amber-200/80"
        >
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-amber-800 mb-2 font-[var(--font-yekan)]">
              محصولات ویژه
            </h3>
            <p className="text-gray-600 font-[var(--font-yekan)]">
              منتخب بهترین محصولات با کیفیت تضمینی
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group border-2 border-amber-100/80 hover:border-amber-200"
              >
                <div className="relative h-32 mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Product Badge */}
                  <div className="absolute top-2 right-2">
                    <span className="bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {product.badge}
                    </span>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-2 left-2">
                    <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>
                <h4 className="font-bold text-gray-800 mb-2 text-sm font-[var(--font-yekan)]">
                  {product.name}
                </h4>
                <div className="flex items-center justify-between">
                  <span className="text-amber-700 font-bold font-[var(--font-yekan)]">
                    {product.price}
                  </span>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button - Moved to the end */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-amber-700 border-2 border-amber-300 px-8 py-3 rounded-2xl font-semibold hover:bg-amber-50 transition-colors font-[var(--font-yekan)]"
            >
              مشاهده همه محصولات ویژه
            </motion.button>
          </div>
        </motion.div>

        {/* Best Sellers Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 mb-16 border-2 border-amber-200/80"
        >
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-amber-800 mb-2 font-[var(--font-yekan)]">
              پرفروش‌ترین‌ها
            </h3>
            <p className="text-gray-600 font-[var(--font-yekan)]">
              محصولاتی که بیشترین محبوبیت را در بین مشتریان دارند
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {bestSellers.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group border-2 border-amber-100/80 hover:border-amber-200"
              >
                <div className="relative h-32 mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-bold text-gray-800 mb-2 text-sm font-[var(--font-yekan)]">
                  {product.name}
                </h4>
                <div className="flex items-center justify-between">
                  <span className="text-amber-700 font-bold font-[var(--font-yekan)]">
                    {product.price}
                  </span>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button - Moved to the end */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-amber-700 border-2 border-amber-300 px-8 py-3 rounded-2xl font-semibold hover:bg-amber-50 transition-colors font-[var(--font-yekan)]"
            >
              مشاهده همه پرفروش‌ها
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
          >
            کشف همه محصولات
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}