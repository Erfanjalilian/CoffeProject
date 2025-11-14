"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiCoffee, FiSmartphone, FiMessageCircle } from "react-icons/fi";
import { useAuth } from "@/contaxt/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phone) {
      setError("لطفاً شماره موبایل خود را وارد کنید");
      return;
    }

    if (phone.length !== 11) {
      setError("شماره موبایل باید ۱۱ رقم باشد");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Get all users from API
      const response = await fetch('https://6810ff2827f2fdac24139dec.mockapi.io/user');
      
      if (!response.ok) {
        throw new Error('خطا در ارتباط با سرور');
      }

      const users = await response.json();
      
      // Find user by phone number
      let user = users.find((u: any) => u.phone === phone);
      
      if (!user) {
        // If user doesn't exist, create a new one automatically
        console.log("Creating new user for phone:", phone);
        
        // Create mock user object
        user = {
          id: Date.now().toString(),
          phone: phone,
          name: `کاربر ${phone}`,
          createdAt: new Date().toISOString(),
        };
        
        // In real implementation, you would save the user to your database
        // await fetch('https://6810ff2827f2fdac24139dec.mockapi.io/user', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(user)
        // });
        
        console.log("New user created:", user);
      } else {
        console.log("Existing user found:", user);
      }

      // ✅ Store user data in AuthContext
      login(user);
      
      // ✅ Redirect to dashboard page
      router.push('/DashboardPage');
      
    } catch (err) {
      console.error('Login error:', err);
      setError("خطا در ارتباط با سرور");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 pt-44 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <Link href="/" className="inline-block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-amber-600 to-amber-700 text-white w-14 h-14 flex items-center justify-center rounded-2xl font-bold text-2xl shadow-lg shadow-amber-600/25"
              >
                <FiCoffee size={24} />
              </motion.div>
              <div className="flex flex-col text-right">
                <span className="text-2xl font-bold text-gray-800 font-[var(--font-yekan)] leading-tight">
                  آی‌کسب
                </span>
                <span className="text-sm text-amber-600 font-[var(--font-yekan)] font-medium">
                  فروش با دستیار هوش مصنوعی
                </span>
              </div>
            </motion.div>
          </Link>
        </motion.div>

        <div className="flex justify-center">
          <div className="w-full max-w-md">
            {/* Login Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-2xl shadow-amber-200/50 border border-amber-200 overflow-hidden"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-6">
                <h1 className="text-2xl font-bold text-white text-center font-[var(--font-yekan)]">
                  ورود | ثبت‌نام
                </h1>
                <p className="text-amber-100 text-center mt-2 font-[var(--font-yekan)] text-sm">
                  شماره موبایل خود را وارد کنید
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 bg-red-50 border border-red-200 rounded-xl p-4"
                  >
                    <p className="text-red-700 text-sm font-[var(--font-yekan)] text-center">{error}</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Phone Number Field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 font-[var(--font-yekan)]">
                      شماره موبایل
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <FiSmartphone className="h-5 w-5 text-amber-600" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={handleChange}
                        required
                        placeholder="09*********"
                        className="w-full pr-10 pl-4 py-3 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-amber-50/50 transition-all duration-200 font-[var(--font-yekan)] placeholder-gray-400"
                        dir="ltr"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-right font-[var(--font-yekan)]">
                      فقط شماره موبایل خود را وارد کنید
                    </p>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-4 rounded-xl font-semibold shadow-lg shadow-amber-600/25 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-[var(--font-yekan)]"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>در حال ورود...</span>
                      </div>
                    ) : (
                      "ورود به حساب"
                    )}
                  </motion.button>
                </form>

                {/* AI Assistant Message */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200 mt-6"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-2 rounded-full">
                      <FiMessageCircle size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 font-[var(--font-yekan)] text-sm leading-relaxed">
                        <span className="font-semibold text-amber-700">دستیار هوش مصنوعی:</span>
                        <br />
                        فقط شماره موبایل خود را وارد کنید! اگر حساب ندارید، به طور خودکار برای شما ساخته می‌شود و به داشبورد هدایت می‌شوید.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Terms Notice */}
                <div className="mt-6 text-center">
                  <p className="text-gray-500 font-[var(--font-yekan)] text-xs">
                    با ورود یا ثبت‌نام، با{" "}
                    <Link href="/terms" className="text-amber-600 hover:text-amber-700 underline">
                      شرایط و قوانین
                    </Link>{" "}
                    آی‌کسب موافقت می‌کنید
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}