"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  const categories = [
    {
      id: 1,
      title: "نوشیدنی خودت رو بخر",
      items: [
        { name: "قهوه اسپرسو", image: "/Images/premium_photo-1674407009848-4da7a12b6b25.avif" },
        { name: "قهوه ترک", image: "/Images/premium_photo-1674327105076-36c4419864cf.avif" },
        { name: "قهوه عربیکا", image: "/Images/premium_photo-1673545518947-ddf3240090b1.avif" },
        { name: "قهوه فوری", image: "/Images/premium_photo-1671559021551-95106555ee19.avif" }
      ],
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      accent: "bg-gradient-to-r from-amber-500 to-orange-500"
    },
    {
      id: 2,
      title: "محصولات ویژه",
      items: [
        { name: "قهوه برزیل", image: "/Images/premium_photo-1671379526961-1aebb82b317b.avif" },
        { name: "قهوه کلمبیا", image: "/Images/premium_photo-1669687924558-386bff1a0469.avif" },
        { name: "قهوه کنیا", image: "/Images/premium_photo-1664970900335-a7c99062bc51.avif" },
        { name: "قهوه ترکیبی", image: "/Images/photo-1621135177072-57c9b6242e7a.avif" }
      ],
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      accent: "bg-gradient-to-r from-emerald-500 to-teal-600"
    },
    {
      id: 3,
      title: "تجهیزات دم‌آوری",
      items: [
        { name: "فرنچ‌پرس", image: "/Images/photo-1596098823457-74e360fcd023.avif" },
        { name: "موکاپات", image: "/Images/photo-1594075731547-8c705bb69e50.avif" },
        { name: "آسیاب قهوه", image: "/Images/photo-1592663527359-cf6642f54cff.avif" },
        { name: "پورتافیلتر", image: "/Images/photo-1514432324607-a09d9b4aefdd.avif" }
      ],
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      accent: "bg-gradient-to-r from-blue-500 to-indigo-600"
    },
    {
      id: 4,
      title: "دانه‌های خاص",
      items: [
        { name: "بلو مانتین", image: "/Images/photo-1514066558159-fc8c737ef259.avif" },
        { name: "گواتمالا", image: "/Images/photo-1503481766315-7a586b20f66d.avif" },
        { name: "اتیوپی", image: "/Images/photo-1525088553748-01d6e210e00b.avif" },
        { name: "کاستاریکا", image: "/Images/premium_photo-1674407009848-4da7a12b6b25.avif" }
      ],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      accent: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-amber-50 via-white to-amber-100 py-16 px-4 md:px-10 lg:px-20 mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* --- Enhanced Promotional Banner --- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] lg:h-[600px] lg:col-span-1 group"
        >
          <Image 
            src="/Images/photo-1496582490020-60c1344c64aa.avif" 
            alt="بنر تبلیغاتی" 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-90"
            priority 
          />
          
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end items-center text-white p-8">
            
            {/* Promotional Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute top-6 left-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white py-2 px-4 rounded-full text-sm font-bold shadow-lg"
            >
              ویژه ✨
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center font-[var(--font-yekan)] leading-tight"
            >
              تجربه طعم
              <br />
              <span className="bg-gradient-to-r from-amber-300 to-amber-100 bg-clip-text text-transparent">
                اصیل قهوه
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-lg lg:text-xl text-amber-100 mb-6 max-w-md text-center leading-relaxed"
            >
              بهترین طعم قهوه برای بهترین لحظات زندگی — تجربه‌ای از عطر و کیفیت واقعی.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-3 px-6 rounded-full font-semibold shadow-lg transition-all duration-300 border border-amber-500 flex-1"
              >
                خرید کن
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white py-3 px-6 rounded-full font-semibold border border-white/30 transition-all duration-300 flex-1"
              >
                بیشتر بدانید
              </motion.button>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex justify-center gap-6 mt-6 text-amber-100 text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                تضمین کیفیت
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                ارسال رایگان
              </div>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 right-4 w-8 h-8 bg-amber-400/20 rounded-full blur-sm"
          />
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-1/4 left-4 w-6 h-6 bg-amber-300/20 rounded-full blur-sm"
          />
        </motion.div>

        {/* --- دسته‌بندی‌ها --- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 300
              }}
              className={`relative bg-gradient-to-br ${cat.bgGradient} border border-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden min-h-[320px] w-full`}
            >
              {/* Animated Background Elements */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Floating particles animation */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-20 h-20 ${cat.gradient} rounded-full opacity-0 group-hover:opacity-[0.03]`}
                    initial={{ x: -20, y: -20 }}
                    whileHover={{
                      x: ["0%", "100%", "0%"],
                      y: ["0%", "50%", "0%"],
                      opacity: [0.03, 0.08, 0.03],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      delay: i * 2,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className={`w-3 h-10 ${cat.accent} rounded-full ml-4 shadow-lg`}></div>
                  <h3 className="text-xl font-bold text-gray-800 font-[var(--font-yekan)] group-hover:text-gray-900 transition-colors duration-300">
                    {cat.title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4 flex-1">
                  {cat.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ 
                        scale: 1.08,
                        y: -2,
                        boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.2)"
                      }}
                      transition={{ 
                        duration: 0.3,
                        delay: (index * 0.1) + (itemIndex * 0.1)
                      }}
                      className="relative bg-white/80 backdrop-blur-sm border border-white rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl group/item"
                    >
                      {/* Image Container */}
                      <div className="relative h-20 w-full overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover/item:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            // Fallback for missing images
                            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f59e0b' opacity='0.2'/%3E%3Cpath d='M35 40L45 50L35 60' stroke='%23f59e0b' stroke-width='3' fill='none'/%3E%3Cpath d='M55 40L65 50L55 60' stroke='%23f59e0b' stroke-width='3' fill='none'/%3E%3C/svg%3E";
                          }}
                        />
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300`}></div>
                      </div>
                      
                      {/* Text Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
                        <span className="text-xs font-[var(--font-yekan)] text-white font-medium block text-center">
                          {item.name}
                        </span>
                      </div>

                      {/* Hover gradient border effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${cat.gradient} opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 -z-10`}></div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Animated corner accents */}
              <div className={`absolute top-0 right-0 w-16 h-16 ${cat.accent} opacity-0 group-hover:opacity-10 rounded-bl-3xl transition-opacity duration-500`}></div>
              <div className={`absolute bottom-0 left-0 w-16 h-16 ${cat.accent} opacity-0 group-hover:opacity-10 rounded-tr-3xl transition-opacity duration-500`}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-600/10 rounded-full blur-3xl"></div>
    </section>
  );
}