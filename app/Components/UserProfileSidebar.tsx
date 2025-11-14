"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { 
  FiUser, 
  FiHeart, 
  FiMapPin, 
  FiCreditCard, 
  FiLogOut,
  FiSettings 
} from "react-icons/fi";

interface UserProfileSidebarProps {
  userName?: string;
  userRole?: string;
  className?: string;
  onLogout?: () => void;
}

export default function UserProfileSidebar({ 
  userName = "کاربر", 
  userRole = "USER",
  className = "",
  onLogout 
}: UserProfileSidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    {
      id: "profile",
      label: "اطلاعات کاربری",
      icon: FiUser,
      href: "/dashboard/profile",
      badge: null
    },
    {
      id: "favorites",
      label: "علاقه‌مندی‌ها",
      icon: FiHeart,
      href: "/dashboard/favorites",
      badge: null
    },
    {
      id: "addresses",
      label: "آدرس‌های من",
      icon: FiMapPin,
      href: "/dashboard/addresses",
      badge: null
    },
    {
      id: "bank-accounts",
      label: "حساب‌های بانکی",
      icon: FiCreditCard,
      href: "/dashboard/bank-accounts",
      badge: null
    },
    {
      id: "settings",
      label: "تنظیمات",
      icon: FiSettings,
      href: "/dashboard/settings",
      badge: null
    },
  ];

  const isActive = (href: string) => {
    return pathname === href || pathname?.startsWith(href);
  };

  return (
    <div className={`bg-white rounded-2xl shadow-lg border border-amber-200 overflow-hidden ${className}`}>
      {/* User Info Header */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-xl">
            <FiUser className="text-white text-lg" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-bold font-[var(--font-yekan)] text-lg">
              {userName}
            </h3>
            <p className="text-amber-100 text-sm font-[var(--font-yekan)]">
              {userRole === "ADMIN" ? "مدیر" : "کاربر"}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            
            return (
              <li key={item.id}>
                <Link href={item.href}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-[var(--font-yekan)] ${
                      active
                        ? "bg-amber-100 text-amber-700 border-r-4 border-amber-600"
                        : "text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                    }`}
                  >
                    <Icon 
                      size={20} 
                      className={active ? "text-amber-600" : "text-gray-500"} 
                    />
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </motion.div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout Section */}
      <div className="border-t border-amber-200 p-4">
        <motion.button
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
          onClick={onLogout}
          className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 font-[var(--font-yekan)]"
        >
          <FiLogOut size={20} />
          <span>خروج از حساب</span>
        </motion.button>
      </div>
    </div>
  );
}