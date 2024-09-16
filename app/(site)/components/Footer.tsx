import Link from "next/link"
import Image from "next/image"
import React from "react"

function Footer() {
  return (
    <footer id="footer" className="bg-black text-white py-8 mt-50 px-4">
      <div className="container mx-auto flex flex-col items-center justify-center gap-10 w-full">
        <div className="flex flex-col md:flex-row  justify-between md:items-center w-[70%] md:w-[80%] gap-10">
          <div className="flex gap-4 flex-col sm:pb-12 pb-0">
            <h1 className="text-2xl font-semibold">Visit Us</h1>

            <div className="flex gap-1 flex-col">
              <div className="flex -ml-6">
                <Image
                  src="/ricon.png"
                  alt="Location icon"
                  width={25}
                  height={25}
                  className="h-7 w-auto pt-1 "
                />
                <b className="hover:text-red-600 cursor-pointer">
                  Blocks 156:160,
                  <br />
                  Sadat Industrial Zone
                </b>
              </div>
              <div className="flex ">
                <b className="hover:text-red-600 cursor-pointer">
                  Factory 7A, Six Of October <br /> Industrial Zone
                </b>
              </div>
            </div>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-2xl font-semibold"> Get In Touch</h1>
            <div className="flex gap-1 flex-col">
              <b className="hover:text-red-600 ">
                Egypt <span className="underline">+2 0106 518 8966</span>
              </b>
              <b className="hover:text-red-600">
                KSA <span className="underline ml-3"> +966 55 769 1015</span>{" "}
              </b>
              <b className="hover:text-red-600">
                Oman <span className="underline">+968 9932 9189</span>
              </b>
              <b className="hover:text-red-600">
                USA <span className="underline ml-3">+1 321 948 3883</span>
              </b>
              <b className="hover:text-red-600">
                China <span className="underline ">+86 138 2551 3735</span>
              </b>

              <a href="mailto:info@shadel.net" className="hover:text-red-600">
                info@shadel.net
              </a>
            </div>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-2xl font-semibold">
              For Technical Consultation
            </h1>
            <div className="flex gap-1 flex-col">
              <div className="text-xl font-medium flex gap-1">
                <Image
                  src={"/phone.png"}
                  alt="contact"
                  width={20}
                  height={20}
                />
                <b className="hover:text-red-600 underline ">
                  +2 0106 033 3646
                </b>
              </div>
              <a href="/" className="hover:text-red-600 pt-2">
                Home
              </a>
              <a href="/products" className="hover:text-red-600">
                Products
              </a>
              <a href="/products/#allmachines" className="hover:text-red-600">
                Machines
              </a>
              <div className="flex gap-3 items-center">
                <a
                  href="https://www.facebook.com/"
                  className="border p-2 rounded-full group hover:bg-blue-500"
                >
                  <Image
                    src={"/facebook.png"}
                    alt="contact"
                    width={20}
                    height={20}
                  />
                </a>

                <a
                  href="mailto:info@shadel.net"
                  className="border p-2 rounded-full hover:bg-blue-500"
                >
                  <Image
                    src={"/mail.png"}
                    alt="contact"
                    width={20}
                    height={20}
                  />
                </a>
                <a
                  href="https://www.youtube.com/"
                  className="border p-2 rounded-full hover:bg-red-500"
                >
                  <Image
                    src={"/youtube.png"}
                    alt="contact"
                    width={20}
                    height={20}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  className="border p-2 rounded-full hover:bg-blue-500"
                >
                  <Image
                    src={"/linkedIn.png"}
                    alt="contact"
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
