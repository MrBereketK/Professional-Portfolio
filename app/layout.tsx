import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { Jost } from "next/font/google"
import { ThemeProvider } from "@/providers/ThemeProvider"
import Loader from "@/components/Loader"
import Header from "@/components/layouts/header"
import "./globals.css"

const jost = Jost({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bereket.Dev",
  description:
    "Secure Full-Stack Developer — Backend, ML, and cybersecurity",
  applicationName: "Portfolio",
  openGraph: {
    type: "website",
    url: "https://bereketkiros.dev/",
    title: "Bereket.Dev",
    description:
      "Bereket Kiros — Full-Stack Developer specialising in secure backend architecture and machine learning.",
    siteName: "Portfolio",
  },
  authors: {
    name: "Bereket Kiros",
  },
  generator: "NextJs",
  keywords: [
    "Portfolio",
    "Full-Stack Developer",
    "Backend",
    "Machine Learning",
    "Cybersecurity",
    "NextJS",
    "GSAP",
    "Python",
  ],
  creator: "Bereket Kiros",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={jost.className}>
        <Loader />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
