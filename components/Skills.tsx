"use client"
import React from 'react'
import { skills } from '@/lib/variables'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useSectionInView } from '@/lib/hooks';

export default function Skills() {
    const ref1 = useRef<HTMLDivElement>(null);
    const { scrollYProgress} = useScroll({
        target: ref1,
        offset: ["0 1", "2 1"]
    })
    const scrollOpacity = useTransform(scrollYProgress, [0,1], [0.2,1])
    const scrollScale = useTransform(scrollYProgress, [0,1], [0.7, 1])
    
    const {ref} = useSectionInView("Skills", 0.75);
  return (
    <motion.div className = "flex flex-col items-center justify-center w-[min(90%, 60rem)] max-w-[60rem] scroll-mt-56 my-28" id = "skills" 
    ref = {ref1}
    style = {{
        scale: scrollScale,
        opacity: scrollOpacity
    }}>
        <div ref = {ref} className = "flex flex-col items-center justify-center w-[100%] scroll-mt-56 my-28">
            <h2 className = "text-2xl font-medium capitalize">My Skills</h2>
            <ul className = "flex flex-row justify-center w-[100%] flex-wrap gap-4 border-box p-8">
                {
                skills.map((curr,index) => (
                    <li className = "rounded-full bg-slate-200 p-4 text-slate-800/70 shadow-black/15 shadow-md" key = {index}>{curr}</li>
                ))
                }
            </ul>
        </div>
    </motion.div>
  )
}
