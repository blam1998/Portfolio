import './globals.css'
import './firefly.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import ActiveContext from '@/context/ActiveContext'

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
      <body className={`${inter.className} bg-slate-50 text-gray-950 relative`}>
        <div className = "hidden sm:block bg-lime-100/80 -z-10 absolute top-[-6rem] right-[1rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className = "bg-cyan-100 -z-10 absolute top-[-1rem] left-0 sm:left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-15rem] first-letter:xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ActiveContext>
          <Header/>
          {children}
        </ActiveContext>
      </body>
    </html>
  )
}
