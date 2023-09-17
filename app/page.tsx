import Image from 'next/image'
import Header from '@/components/Header'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import AboutMe from '@/components/AboutMe'

export default function Home() {
  return (
    <main className = "flex flex-col justify-center items-center w-[100%]">
      <Header/>
      <About/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Experience/>
    </main>
  )
}
