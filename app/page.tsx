import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import AboutMe from '@/components/AboutMe'
import Contact from '@/components/Contact'
import RotateImage from '@/components/RotateImage'

export default function Home() {
  return (
    <main className = "flex flex-col justify-center items-center w-[100%]">
      <div className = "w-[100%] overflow-hidden flex flex-col items-center justify-center">
        <About/>
      </div>
      <AboutMe/>
      <Projects/>
      <RotateImage>
        <Skills/>
        <Experience/>
        <Contact/>
      </RotateImage>
    </main>
  )
}

