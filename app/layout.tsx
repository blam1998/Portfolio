import './globals.css'
import './firefly.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import ActiveContext from '@/context/ActiveContext'
import ReactGA from "react-ga4";
import { Analytics } from '@vercel/analytics/react';





const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bao | Personal Portfolio',
  description: 'Personal Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className = "!scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-gray-950 relative w-[100%] overflow-x-hidden`}>
        <div className = {` bg-green-300/80 sm:bg-lime-100/80 -z-10 absolute top-[-6rem]
        right-[1rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]`}></div>
        <div className = {`bg-cyan-100 -z-10 absolute top-0 left-0 sm:left-[-35rem] h-[31.25rem] 
        w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-15rem] first-letter:xl:left-[-15rem] 2xl:left-[-5rem] hidden sm:block`}></div>
        <ActiveContext>
          <Header/>
          {children}
          <Analytics/>
        </ActiveContext>
      </body>
    </html>
  )
}
