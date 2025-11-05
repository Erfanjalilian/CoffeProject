"use client";

import { useState } from "react";
import {
  FiShoppingCart,
  FiUser,
  FiChevronDown,
  FiSearch,
  FiGlobe,
  FiMenu,
  FiX,
} from "react-icons/fi";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-md bg-white fixed top-0 z-50">
      {/* --- Top Bar --- */}
      <div className="w-full flex justify-between items-center px-4 sm:px-8 py-3 border-b border-gray-200">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-gray-700 hover:text-amber-700"
        >
          <FiMenu size={24} />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-amber-700 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-xl">
            ل
          </div>
          <span className="text-lg font-semibold text-gray-700">لوگو</span>
        </div>

        {/* Search Box (hidden on small screens) */}
        <div className="flex-1 mx-4 hidden md:flex">
          <div className="relative w-full max-w-lg mx-auto">
            <input
              type="text"
              placeholder="جستجو..."
              className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
            <FiSearch className="absolute left-3 top-2.5 text-gray-500" size={20} />
          </div>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-4 text-gray-700">
          {/* Language Selector */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 hover:text-amber-700"
            >
              <FiGlobe size={18} />
              <span>زبان</span>
              <FiChevronDown size={14} />
            </button>
            {isLangOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md text-sm z-20">
                <button className="block w-full px-4 py-2 hover:bg-gray-100">فارسی</button>
                <button className="block w-full px-4 py-2 hover:bg-gray-100">English</button>
              </div>
            )}
          </div>

          <button className="flex items-center gap-1 hover:text-amber-700">
            <FiShoppingCart size={20} />
            <span className="hidden sm:inline">سبد خرید</span>
          </button>

          <button className="flex items-center gap-1 hover:text-amber-700">
            <FiUser size={20} />
            <span className="hidden sm:inline">ورود</span>
          </button>
        </div>
      </div>

      {/* --- Bottom Navigation (Desktop) --- */}
      <nav className="hidden md:flex justify-center md:justify-between items-center px-4 sm:px-8 py-2 text-sm font-medium text-gray-700 bg-gray-50">
        <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6">
          <Link href="#" className="hover:text-amber-700">
            دسته‌بندی
          </Link>
          <Link href="#" className="hover:text-amber-700">
            تخفیف‌های امروز
          </Link>
          <Link href="#" className="hover:text-amber-700">
            فروشنده هستم
          </Link>
          <Link href="#" className="hover:text-amber-700">
            پیگیری خرید
          </Link>
          <Link href="#" className="hover:text-amber-700">
            پشتیبانی
          </Link>
        </div>
      </nav>

      {/* --- Mobile Menu (Drawer) --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg z-50 flex flex-col p-6 space-y-6"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-semibold text-gray-700">منو</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-amber-700"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Search Box */}
            <div className="relative">
              <input
                type="text"
                placeholder="جستجو..."
                className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-700"
              />
              <FiSearch className="absolute left-3 top-2.5 text-gray-500" size={20} />
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-4 text-gray-700">
              <Link href="#" className="hover:text-amber-700">
                دسته‌بندی
              </Link>
              <Link href="#" className="hover:text-amber-700">
                تخفیف‌های امروز
              </Link>
              <Link href="#" className="hover:text-amber-700">
                فروشنده هستم
              </Link>
              <Link href="#" className="hover:text-amber-700">
                پیگیری خرید
              </Link>
              <Link href="#" className="hover:text-amber-700">
                پشتیبانی
              </Link>
            </nav>

            <div className="border-t border-gray-200 pt-4 flex flex-col gap-3">
              <button className="flex items-center gap-2 hover:text-amber-700">
                <FiUser size={20} />
                ورود / ثبت‌نام
              </button>
              <button className="flex items-center gap-2 hover:text-amber-700">
                <FiShoppingCart size={20} />
                سبد خرید
              </button>
              <button className="flex items-center gap-2 hover:text-amber-700">
                <FiGlobe size={20} />
                تغییر زبان
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
