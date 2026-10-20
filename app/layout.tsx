import { Geist_Mono, Montserrat } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import Header from "@/components/shared/header"

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        montserrat.variable
      )}
    >
      <body>
        <main className="min-h-screen">
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
