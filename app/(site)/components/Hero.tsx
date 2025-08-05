"use client"
import { LazyMotion, domAnimation, m } from "framer-motion"
import Image from "next/image"
import { useState, useEffect, useContext } from "react"
import Link from "next/link"
import Script from "next/script"

function Hero() {
  return (
    <LazyMotion features={domAnimation}>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-XLESEE5RRC`} // Replace with your GA4 ID
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XLESEE5RRC');
        `}
      </Script>
      <div className="hero bold-text">
        <div className="container mx-auto min-h-[76vh] px-4">
          <div className="flex flex-col items-center gap-10 pt-[10%]">
            <m.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 50,
                delay: 0.7,
              }}
              className="items-center justify-center w-[85%] gap-10"
            >
              <div className="flex items-center justify-between  pt-20 lg:pt-0">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1E9n67LzNYQSWsMXSFpRXjhch4u_sRx9R"
                  width={400}
                  height={400}
                  alt="hero section image"
                  loading="lazy"
                  className="object-contain"
                />
                <Image
                  className="hidden 2xl:block pt-5 "
                  src="/shadel.png"
                  width={400}
                  height={400}
                  alt="hero section image"
                  loading="lazy"
                />
              </div>
              <m.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 50,
                  delay: 1,
                }}
                className="hero-text  sm:pt-10 pt-0 sm:py-3 py-5 text-black w-[100%] lg:w-[70%] justify-start sm:justify-end bold-text "
              >
                Since 2016, SHADEL has been a leader in sheet metal fabrication,{" "}
                <br />
                specializing in stainless steel products at competitive prices.
                <br /> Our commitment to quality and innovation drives us,
                ensuring customer satisfaction.
              </m.p>
              <div className="">
             
                <Link href="https://drive.google.com/file/d/1cMpvC3Pbugh2NnlPJlTOa2sEGCXe7UPJ/preview">
                  <m.button className="mb-2 bhero bold-text ">
                    SHADEL CATALOGUE
                  </m.button>
                  {/* https://forms.gle/yupjcejBGYtZaNLL7 */}
                </Link>
                {/* <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf424HkuupmgACtShL-oMXCaNxpa3MM6LN2himkjlY5lvcpKg/viewform?usp=header">
                  <m.button className="mb-2 bhero bold-text ">
                    Please Fill The Form
                  </m.button>
                </Link> */}
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </LazyMotion>
  )
}

export default Hero
