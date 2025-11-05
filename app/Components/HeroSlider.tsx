"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  const categories = [
    {
      id: 1,
      title: "نوشیدنی خودت رو بخر",
      items: ["قهوه اسپرسو", "قهوه ترک", "قهوه عربیکا", "قهوه فوری"],
    },
    {
      id: 2,
      title: "محصولات ویژه",
      items: ["قهوه برزیل", "قهوه کلمبیا", "قهوه کنیا", "قهوه ترکیبی"],
    },
    {
      id: 3,
      title: "تجهیزات دم‌آوری",
      items: ["فرنچ‌پرس", "موکاپات", "آسیاب قهوه", "پورتافیلتر"],
    },
    {
      id: 4,
      title: "دانه‌های خاص",
      items: ["بلو مانتین", "گواتمالا", "اتیوپی", "کاستاریکا"],
    },
  ];

  return (
    <section className="w-full bg-white py-10 px-4 md:px-10 lg:px-20 mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* --- بنر تبلیغاتی --- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden shadow-lg h-[300px] sm:h-[400px] lg:col-span-1"
        >
          <Image
            src="/Images/photo-1496582490020-60c1344c64aa.avif"
            alt="بنر تبلیغاتی"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl font-bold mb-3"
            >
              بنر تبلیغاتی برند
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-sm sm:text-base text-gray-200 mb-4 max-w-md"
            >
              بهترین طعم قهوه برای بهترین لحظات زندگی — تجربه‌ای از عطر و کیفیت واقعی.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-700 hover:bg-amber-800 text-white py-2 px-5 rounded-full font-semibold shadow-lg transition"
            >
              خرید کن
            </motion.button>
          </div>
        </motion.div>

        {/* --- دسته‌بندی‌ها --- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition bg-white"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {cat.items.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="border border-amber-700 rounded-xl py-4 text-center font-medium text-gray-700 hover:bg-amber-700 hover:text-white transition cursor-pointer"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
