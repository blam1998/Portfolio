"use client"
import React from 'react'
import { projects } from '@/lib/variables'
import {motion} from 'framer-motion';
import Image from 'next/image';
import Project from './Project';

export default function Projects() {
  return (
    <section 
        className = "flex flex-col gap-4 items-center justify-center w-[80%] sm:w-[60%] scroll-mt-56 my-28"
        id = "projects">
        <h2 className = "text-2xl font-medium capitalize tracking-widest">My Projects</h2>
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
