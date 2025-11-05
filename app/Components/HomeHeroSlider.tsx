"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

export default function HomeHeroSlider() {
  const slides: Slide[] = [
    {
      id: 1,
      image: "/Images/photo-1497935586351-b67a49e012bf.avif",
      title: "هنر قهوه‌سازی",
      subtitle: "تجربه طعم بی‌نظیر قهوه‌های specialty با بهترین دانه‌های قهوه",
    },
    {
      id: 2,
      image: "/Images/photo-1514066558159-fc8c737ef259.avif",
      title: "قهوه‌های تازه رست شده",
      subtitle: "هر روز تازه، هر فنجان یک تجربه منحصر به فرد",
    },
    {
      id: 3,
      image: "/Images/photo-1525088553748-01d6e210e00b.avif",
      title: "از مزرعه تا فنجان شما",
      subtitle: "انتخاب دقیق بهترین دانه‌های قهوه از سراسر جهان",
    },
  ];

  return (
    <div className="relative w-full h-[90vh] bg-neutral-900">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        slidesPerView={1}
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active !bg-amber-700",
          bulletClass: "swiper-pagination-bullet !bg-white/70 !w-3 !h-3",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="h-full w-full group"
      >
        <div className="absolute z-10 top-1/2 -translate-y-1/2 w-full">
          <div className="swiper-button-next !text-white after:!text-2xl hover:!text-amber-700 transition-colors opacity-0 group-hover:opacity-100 !left-6 rtl:!right-auto"></div>
          <div className="swiper-button-prev !text-white after:!text-2xl hover:!text-amber-700 transition-colors opacity-0 group-hover:opacity-100 !right-6 rtl:!left-auto"></div>
        </div>
        
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <div className="relative w-full h-[90vh]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover brightness-50"
                sizes="100vw"
                quality={100}
                priority
              />
              <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 md:px-10">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-amber-500 font-bold mb-4 tracking-wider"
                >
                  COFFEE HOUSE
                </motion.span>
                
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg"
                >
                  {slide.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-lg md:text-xl mb-8 max-w-2xl text-gray-200"
                >
                  {slide.subtitle}
                </motion.p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 
                  text-white font-medium py-4 px-10 rounded-full shadow-lg transition-all duration-300 
                  hover:shadow-amber-700/30 hover:shadow-xl border border-amber-600/20"
                >
                  سفارش آنلاین
                </motion.button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}