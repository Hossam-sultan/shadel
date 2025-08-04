"use client"

import Image from "next/image"
import React from "react"

function Venti() {
  return (
   <section id="vene">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 ">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          Ventilation System 
          </h2>

          <p className="mt-4 text-gray-700">
        Our ventilation systems combine efficient exhaust and fresh air 
lines to ensure optimal air quality and temperature control across 
industrial, commercial, and residential spaces. Designed for 
reliability and sustainability, these systems help manage humidity, 
remove contaminants, and create healthier environments — 
supporting better comfort and performance while meeting the 
highest industry standards.
          </p>
        </div>
      </div>

      <div>
        <img
          src="/golf/v3.jpg"
          className="rounded"
          alt=""
        />
      </div>
    </div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8 pt-8">
      <div>
        <div className="max-w-lg md:max-w-none">
         <img
          src="/golf/v2.jpg"
          className="rounded"
          alt=""
        />
        </div>
      </div>

      <div>
        <img
          src="/golf/v1.jpg"
          className="rounded"
          alt=""
        />
      </div>
    </div>
  </div>
</section>
  )
}

export default Venti
