"use client"
import React from 'react'
import { experience } from '@/lib/variables'
import {motion, useScroll, useTransform} from "framer-motion";
import { useRef, useEffect } from "react";
import { useSectionInView } from '@/lib/hooks';


export default function Experience() {
    const ref1 = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref1,
        offset: ["0 1", "1.3 1"]
    })
    const scrollOpacity = useTransform(scrollYProgress, [0,1], [0.2,1])
    const scrollScale = useTransform(scrollYProgress, [0,1], [0.7, 1])

    const {ref} = useSectionInView("Experience");

  return (
    <motion.div
    ref = {ref1}
    style = {{
        scale: scrollScale,
        opacity: scrollOpacity
    }}
    className = "w-[min(90%,60rem)] max-w-[60rem] my-28 flex flex-col justify-center items-center">
        <div className = "w-[100%] flex flex-col justify-center items-center" ref = {ref}>
            <h2 className = "text-2xl font-medium capitalize">My Experience</h2>
            <div className = {`bg-slate-100 hover:bg-lime-200/20 hover:scale-[1.02] h-fit flex flex-col items-start justify-center mt-14 w-[100%]
            min-h-[200px] p-8 rounded-md scroll-mt-56`}
            id = "experience">
                <div className = "text-[1.5rem] font-semibold">{experience[0].companyName}</div>
                <div className = "text-[1rem] font-medium">{experience[0].positionName}</div>
                <div className = "text-[1rem] font-medium">{experience[0].duration}</div>
                <ul className = "list-disc pl-4">
                    {
                    experience[0].description.map((curr,index) => (
                        <li key = {index} className = "text-wrap">
                            {curr}
                        </li>
                    ))}
                </ul>
                <div className = "w-[100%] h-[2px] bg-slate-500 mt-2"></div>
                <ul className = "flex flex-row flex-wrap gap-2">
                    {
                        experience[0].skills.map((curr,index) => (
                            <li className = "bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 mt-2">
                                {curr}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </motion.div>
  )
}
