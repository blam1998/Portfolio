"use client"
import React, {useRef} from 'react'
import { projects } from '@/lib/variables'
import Project from './Project';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const {ref} = useSectionInView("Projects", 0.5);

  return (
    <section 
        className = "flex flex-col gap-4 items-center justify-center w-[min(90%,60rem)] scroll-mt-56 my-28 relative"
        id = "projects"
        ref = {ref}>
          <h2 className = "text-2xl font-medium capitalize tracking-widest mb-8">My Projects</h2>
          <div>
              {
              projects.map((project,index) =>(
                  <React.Fragment key = {index}>
                      <Project {...project}/>
                  </React.Fragment>
              ))
              }
          </div>
    </section>
  )
}
