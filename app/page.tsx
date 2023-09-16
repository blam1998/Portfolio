import Image from 'next/image'
import Header from '@/components/Header'
import About from '@/components/About'

export default function Home() {
  return (
    <main className = "flex flex-col justify-center items-center w-[100%]">
      <Header/>
      <About/>
    </main>
  )
}
