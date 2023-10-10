import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import AboutMe from '@/components/AboutMe'
import Contact from '@/components/Contact'
import RotateImage from '@/components/RotateImage'
import ReactGA from "react-ga4";


export default function Home() {
  return (
    <main className = "flex flex-col justify-center items-center w-[100%] overflow-x-hidden">
      <About/>
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

