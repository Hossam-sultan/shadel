import "./globals.css"
import { Inter } from "next/font/google"
import { CartProvider } from "./context/CartContext";
import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Shadel",
  description:
    "Top-quality sheet and press metal solutions for stylish designs.",
  icons: {
    icon: "/we.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
  <Providers>{children}</Providers>
</body>

    </html>
  )
}
