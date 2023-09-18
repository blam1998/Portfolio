
"use client"
import React, { useRef } from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';



export default function AboutMe() {
  const ref1 = useRef<HTMLDivElement>(null);
  const {ref} = useSectionInView("About");

  const { scrollYProgress } = useScroll({
    target: ref1,
    offset: ["0 1", "1.3 1"]
  })
  const scrollOpacity = useTransform(scrollYProgress, [0,1], [0.5,1]);
  const scrollScale = useTransform(scrollYProgress, [0,1], [0.75,1])

  return (
    <section 
      ref = {ref} 
      className = "flex flex-col items-center justify-center w-[min(90%,60rem)] my-28 lg:max-w-[60rem] scroll-mt-56" id = "about">
        <motion.div
        className = "flex flex-col items-center justify-center w-[100%]"
        ref = {ref1}
        style = {{
          opacity: scrollOpacity,
          scale: scrollScale,
        }}>
          <h2 className = "text-2xl font-medium capitalize tracking-widest">About Me</h2>
          <div className = "flex flex-row flex-wrap text-[1.15rem] mt-8">
            <ul className = "flex flex-col gap-4">
              <li className = "leading-8">
                I graduated from <span className = "font-semibold">University of California, Riverside</span> with a <span className = "font-semibold">Bachelors</span> degree in <span className = "underline underline-offset-8">Computer Science</span>.
              </li>
              <li className = "leading-8">
                I'm currently working as a <span className = "font-semibold">Wordpress Developer Intern</span> for <span className = "underline underline-offset-8">SEOD Digital Marketing.</span>
              </li>
              <li className = "leading-8">
                My Hobbies are: <span className = "font-semibold">Drawing</span>, <span className = "font-semibold">Coding</span>, and <span className = "font-semibold">Competitive Online Games</span>. 
              </li>
              <li className = "leading-8">
                I like <span className = "underline underline-offset-8">learning new things</span> in my free time as a form of <span className = "font-semibold">self improvement</span>. 
                I'm currently learning new coloring techniques for <span className = "font-semibold">art</span>; And learning new
                <span className = "font-semibold"> {` computer science`}</span> fundamentals by creating projects that mimic other 
                professional websites/applications.
              </li>
              <li className = "leading-8">
                I'm currently learning <span className = "font-semibold">React native</span> and plan to explore other frameworks for <span className = "underline underline-offset-8">mobile development.</span>
              </li>
              <li className = "leading-8">
                <span className = "font-semibold">I enjoy working in groups</span>, especially if our goals align. 
                I like working in groups since <span className = "underline underline-offset-8">it feels very rewarding</span> to overcome difficult tasks together.
              </li>
              <li className = "leading-8 underline underline-offset-8">
                I'm open for Freelance work or other inquiries.
              </li>
            </ul>
          </div>
        </motion.div>

    </section>
  )
}
