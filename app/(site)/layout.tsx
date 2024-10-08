import Footer from "./components/Footer"
import Header from "./components/Header"
import "../globals.css"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] })
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "Shadel",
  description:
    "Top-quality sheet and press metal solutions for stylish designs.",
  icons: {
    icon: "/we.png",
  },
}

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
