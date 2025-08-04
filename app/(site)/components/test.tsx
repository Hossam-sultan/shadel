"use client"

import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"

function VvTest() {
  return (
    <section id="golf" className="bg-gray-200">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 bold-text">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 pb-10 sm:pb-5 pt-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-full rounded"
          >
            <header>
              <h1 className="text-2xl  text-gray-900 sm:text-3xl pt-8 bold-text">
                Golf Car Assembly Line
              </h1>
              <h5 className="mt-4 max-w-md text-gray-600 bold-text">
                We manufacture and assemble multi-seater electric golf carts locally, incorporating high-quality Egyptian
                materials and 100% Egyptian labor. Local components are integrated into the production process to
                ensure superior quality and support national industry.
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
        {[1, 2].map((group) => (
          <ul key={group} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 bg-gray-200">
            {[
              { src: "/golf/g5.png", label: "Electric Bus With Closed Cabinet" },
              { src: "/golf/g3.png", label: "Electric Bus Open Design -12 Seats" },
              { src: "/golf/g2.png", label: "Golf Car- 6 Seats 150 A and More than 100 KM range" },
              { src: "/golf/g1.png", label: "Golf Car- 4 Seats 150 A and More than 100 KM range" },
              { src: "/golf/gg.png", label: "6-Seater Golf Cart" },
              { src: "/golf/g6.png", label: "Lifted Off-Road Golf Cart" },
              { src: "/golf/g9.png", label: "Standard 6-Seater Golf Cart" },
              { src: "/golf/ggg.png", label: "Standard 10-Seater Golf Cart" },
            ]
              .slice((group - 1) * 4, group * 4)
              .map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <a href="#" className="group block overflow-hidden">
                    <motion.img
                      src={item.src}
                      alt=""
                      className="h-[350px] w-full object-contain sm:h-[450px]"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="pt-3">
                      <h3 className="text-xs text-black group-hover:underline group-hover:underline-offset-4 bold-text">
                        {item.label}
                      </h3>
                    </div>
                  </a>
                </motion.li>
              ))}
          </ul>
        ))}
      </div>
    </section>
  )
}

export default VvTest
