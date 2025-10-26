"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

function VvTest() {
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState<string[]>([]);

  const products = [
    { src: "/golf/g5.png", label: "Electric Bus With Closed Cabinet" },
    { src: "/golf/g3.png", label: "Electric Bus Open Design -12 Seats" },
    { src: "/golf/g2.png", label: "Golf Car - 6 Seats 150A 100KM Range" },
    { src: "/golf/g1.png", label: "Golf Car - 4 Seats 150A 100KM Range" },
    { src: "/golf/gg.png", label: "6-Seater Golf Cart" },
    { src: "/golf/g6.jpeg", label: "Lifted Off-Road Golf Cart" },
  ];

  const handleAddToCart = (item: { src: string; label: string }) => {
    addToCart({
      id: item.label,
      title: item.label,
      image: item.src,
      price: 0,
      description: "Golf Car Model",
    });
    setAddedItems((prev) => [...prev, item.label]);
  };

  return (
    <section id="golf" className="pb-20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 bold-text pt-20">
        {/* Header */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 pb-10 sm:pb-5 pt-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-full rounded"
          >
            <header>
              <h1 className="text-2xl text-gray-900 sm:text-3xl pt-8 bold-text">
                Golf Car Assembly Line
              </h1>
              <h5 className="mt-4 max-w-md text-gray-600 bold-text">
                We manufacture and assemble multi-seater electric golf carts locally,
                incorporating high-quality Egyptian materials and 100% Egyptian labor.
              </h5>
            </header>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded flex flex-col items-center justify-center space-y-4 sm:space-y-6"
          >
            <motion.img
              src="/golf/gg.png"
              alt="Off-road golf cart"
              className="h-auto w-full max-w-[350px] object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>

        {/* Product Grid */}
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl p-4 shadow-lg flex flex-col items-center text-center"
            >
              <div className="relative w-full h-[300px] overflow-hidden rounded-xl">
                <motion.img
                  src={item.src}
                  alt={item.label}
                  className="h-full w-full object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="pt-4 flex justify-between items-center w-full">
                <h3 className="text-md text-black bold-text truncate max-w-[80%]">
                  {item.label}
                </h3>

                {/* 🛒 Cart Icon */}
                <button
                  onClick={() => handleAddToCart(item)}
                  className={`transition ${
                    addedItems.includes(item.label)
                      ? "text-red-600"
                      : "text-gray-700 hover:text-red-600"
                  }`}
                  title={
                    addedItems.includes(item.label)
                      ? "Added to cart"
                      : "Add to cart"
                  }
                >
                  <ShoppingCart size={22} />
                </button>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default VvTest;
