"use client"

import Image from "next/image"
import React from "react"

function VvTest() {
  return (
   <section className="bg-gray-200">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6  lg:px-8 ">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 pb-10 sm:pb-5">
  <div className="h-full rounded">
    <header>
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl pt-8">
        Golf Car Assembly Line
      </h2>

      <p className="mt-4 max-w-md text-gray-500">
        We manufacture and assemble multi-seater electric golf carts locally, incorporating high-quality Egyptian
        materials and 100% Egyptian labor. Local components are integrated into the production process to
        ensure superior quality and support national industry.
      </p>
    </header>
  </div>

  <div className="rounded flex flex-col items-center justify-center space-y-4 sm:space-y-6">
    <img
      src="/golf/gg.png"
      alt="Off-road golf cart"
      className="h-auto w-full max-w-[300px] object-contain transition duration-500"
    />
   
  </div>
</div>

    

    <ul className=" grid gap-4 sm:grid-cols-2 lg:grid-cols-4 bg-gray-200">
      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="/golf/g5.png"
            alt=""
            className="h-[350px] w-full object-contain transition duration-500 sm:h-[450px]bg-gray-200"
          />

          <div className="relativebg-gray-200 pt-3">
            <h3 className="text-xs text-black group-hover:underline group-hover:underline-offset-4">
               Electric Bus 
With Closed Cabinet 
            </h3>

           
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="/golf/g3.png"
            alt=""
            className="h-[350px] w-full object-contain transition duration-500 sm:h-[450px]bg-gray-200"
          />

          <div className="relativebg-gray-200 pt-3">
            <h3 className="text-xs text-black group-hover:underline group-hover:underline-offset-4">
             Electric Bus Open 
Design -12 Seats
            </h3>

           
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="/golf/g2.png"
            alt=""
            className="h-[350px] w-full object-contain transition duration-500 sm:h-[450px]bg-gray-200"
          />

          <div className="relativebg-gray-200 pt-3">
            <h3 className="text-xs text-black group-hover:underline group-hover:underline-offset-4">
              Golf Car- 6 Seats 150 A 
and More than 100 KM 
range
            </h3>

           
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="/golf/g1.png"
            alt=""
            className="h-[350px] w-full object-contain transition duration-500 sm:h-[450px]bg-gray-200"
          />

          <div className="relativebg-gray-200 pt-3">
            <h3 className="text-xs text-black group-hover:underline group-hover:underline-offset-4">
              Golf Car- 4 Seats 150 A 
and More than 100 KM 
range
            </h3>

           
          </div>
        </a>
      </li>
    </ul>
     <ul className=" grid gap-4 sm:grid-cols-2 lg:grid-cols-4 bg-gray-200">
      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="/golf/gg.png"
            alt=""
            className="h-[350px] w-full object-contain transition duration-500 sm:h-[450px]bg-gray-200"
          />

          <div className="relativebg-gray-200 pt-3">
            <h3 className="text-xs text-black group-hover:underline group-hover:underline-offset-4">
               6-Seater Golf Cart
            </h3>

           
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="/golf/g6.png"
            alt=""
            className="h-[350px] w-full object-contain transition duration-500 sm:h-[450px]bg-gray-200"
          />

          <div className="relativebg-gray-200 pt-3">
            <h3 className="text-xs text-black group-hover:underline group-hover:underline-offset-4">
           2-Seater Modern Golf Cart
            </h3>

           
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="/golf/g9.png"
            alt=""
            className="h-[350px] w-full object-contain transition duration-500 sm:h-[450px]bg-gray-200 pt-14" 
          />

          <div className="relativebg-gray-200 pt-3">
            <h3 className="text-xs text-black group-hover:underline group-hover:underline-offset-4">
              Standard 2-Seater Golf Cart
            </h3>

           
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="/golf/ggg.png"
            alt=""
            className="h-[350px] w-full object-contain transition duration-500 sm:h-[450px]bg-gray-200"
          />

          <div className="relativebg-gray-200 pt-3">
            <h3 className="text-xs text-black group-hover:underline group-hover:underline-offset-4">
             Lifted Off-Road Golf Cart
            </h3>

           
          </div>
        </a>
      </li>
    </ul>
  </div>
</section>
  )
}

export default VvTest
