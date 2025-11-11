"use client";

import Image from "next/image";
import { useCart } from "@/contaxt/CartContext";
import { FiTrash2 } from "react-icons/fi";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const totalPrice = cart.reduce((total, item) => {
    // تبدیل رشته به عدد برای جمع کل
    const priceNumber = parseInt(item.price.replace(/[^\d]/g, ""));
    return total + priceNumber * item.quantity;
  }, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center font-[var(--font-yekan)]">
        <h2 className="text-2xl font-bold">سبد خرید شما خالی است</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50 pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6 font-[var(--font-yekan)]">سبد خرید</h1>
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-amber-200">
              <div className="relative w-24 h-24 rounded-xl overflow-hidden">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold font-[var(--font-yekan)] text-gray-800">{item.name}</h3>
                <span className="text-amber-700 font-bold">{item.price}</span>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 bg-amber-100 text-amber-700 rounded-lg"
                  >-</button>
                  <span className="font-bold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 bg-amber-100 text-amber-700 rounded-lg"
                  >+</button>
                  <button onClick={() => removeFromCart(item.id)} className="ml-auto text-red-500">
                    <FiTrash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-between items-center bg-white p-6 rounded-2xl border border-amber-200">
          <span className="text-xl font-bold font-[var(--font-yekan)]">جمع کل: {totalPrice.toLocaleString()} تومان</span>
          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-6 py-3 rounded-xl font-semibold font-[var(--font-yekan)] hover:bg-red-600 transition-colors"
          >
            خالی کردن سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
}
