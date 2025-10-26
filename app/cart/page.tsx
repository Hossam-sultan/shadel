"use client";
import { useCart } from "@/app/context/CartContext";
import Header from "../(site)/components/Header";
import Image from "next/image";
import { motion as m, LazyMotion, domAnimation } from "framer-motion";
import { useRouter } from "next/navigation"; // ✅ أضف دي هنا
import "../globals.css";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const router = useRouter(); // ✅ استخدم الرواتر

  const handleClearCart = () => {
    clearCart(); // يمسح السلة
    router.push("/"); // ✅ يرجع للهوم
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <Header />

      <div className="relative w-full h-[50vh] flex justify-center items-center">
       
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ y: -150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            className="text-center"
          >
            <h1 className="text-black text-4xl md:text-6xl font-bold drop-shadow-lg">
              Your Cart
            </h1>
          </m.div>
        </LazyMotion>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 mt-20 text-lg">
            Your cart is empty 🛍️
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {cartItems.map((item) => (
                <m.div
                  key={item.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center text-center transition-all"
                >
                  <div className="relative w-full h-56 mb-3">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-600 mb-3">${item.price.toFixed(2)}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-full transition-all"
                  >
                    Remove
                  </button>
                </m.div>
              ))}
            </div>

           <div className="text-center mt-10 flex flex-col sm:flex-row gap-4 justify-center">
  <button
    onClick={clearCart}
    className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition-all"
  >
    Clear Cart
  </button>

  <button
    onClick={() => window.location.href = "/checkout"}
    className="bg-green-600 text-white px-6 py-3 rounded-full text-sm hover:bg-green-700 transition-all"
  >
    Proceed to Checkout
  </button>
</div>
          </>
        )}
      </div>
    </div>
  );
}
