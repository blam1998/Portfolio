import Image from 'next/image'
import Header from '@/components/Header'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import AboutMe from '@/components/AboutMe'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className = "flex flex-col justify-center items-center w-[100%]">
      <About/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>
    </main>
  )
}
