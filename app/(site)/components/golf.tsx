"use client";

import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

const Golf = () => {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const images = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        type: "spring",
        stiffness: 50,
      },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
     <m.div className="bg-gray-100"> 
        <m.div
                       initial={{ y: -150 }}
                       whileInView={{ y: 0 }}
                       transition={{ duration: 1, type: "spring", stiffness: 50 }}
                       className="row flex flex-col pb-10 "
                     >
                       <h5 className="section-heading text-black ">Golf Car Assembly Line</h5>
                     </m.div>
                   
 <m.div
                       initial={{ y: -150 }}
                       whileInView={{ y: 0 }}
                       transition={{ duration: 1, type: "spring", stiffness: 50 }}
                       className="row flex flex-col pb-10 "
                     >
                       <p className=" text-black align-center ">  Discover the ultimate in sheet metal raw material processing, where every sheet is primed for excellence from the very 
beginning. Starting with precision-driven annealing and treatment, our process transforms raw metal into finely 
calibrated, thin sheets, ready for high-quality fabrication and secondary applications.</p>
                     </m.div>

      <m.div
        className="grid grid-cols-2 gap-8 p-8 bg-gray-100 min-h-screen"
        variants={variants}
        initial="hidden"
        animate="show"
      >
        {/* Left Side - Electric Buses */}
        <div className="flex flex-col gap-8">
          <div className="text-left">
            <h2 className="text-xl font-semibold">Electric Bus</h2>
            <p className="text-gray-600">With Closed Cabinet</p>
          </div>
          <m.img
            src="/bg/x.jpeg"
            alt="Electric Bus Closed"
            className="rounded-xl shadow-md"
            variants={images}
          />

          <div className="text-left">
            <h2 className="text-xl font-semibold">Electric Bus Open</h2>
            <p className="text-gray-600">Design - 12 Seats</p>
          </div>
          <m.img
            src="/bg/x.jpeg"
            alt="Electric Bus Open"
            className="rounded-xl shadow-md"
            variants={images}
          />
        </div>

        {/* Right Side - Golf Cars */}
        <div className="flex flex-col gap-8">
          <div className="text-right">
            <h2 className="text-xl font-semibold">Golf Car - 6 Seats 150 A</h2>
            <p className="text-gray-600">and More than 100 KM range</p>
          </div>
          <m.img
            src="/bg/x.jpeg"
            alt="Golf Car 6 Seats"
            className="rounded-xl shadow-md self-end"
            variants={images}
          />

          <div className="text-right">
            <h2 className="text-xl font-semibold">Golf Car - 4 Seats 150 A</h2>
            <p className="text-gray-600">and More than 100 KM range</p>
          </div>
          <m.img
            src="/bg/x.jpeg"
            alt="Golf Car 4 Seats"
            className="rounded-xl shadow-md self-end"
            variants={images}
          />
        </div>
      </m.div></m.div>
    </LazyMotion>
  );
};

export default Golf;
