"use client"
import React from 'react'
import { skills } from '@/lib/variables'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "2 1"]
    })
    const scrollOpacity = useTransform(scrollYProgress, [0,1], [0.2,1])
    const scrollScale = useTransform(scrollYProgress, [0,1], [0.7, 1])
  return (
    <motion.div className = "flex flex-col items-center justify-center w-[60%] scroll-mt-56 my-28" id = "skills" 
    ref = {ref}
    style = {{
        opacity: scrollOpacity,
        scale: scrollScale
    }}>
        <h2 className = "text-2xl font-medium capitalize">My Skills</h2>
        <ul className = "flex flex-row justify-center w-[100%] flex-wrap gap-4 border-box p-8">
            {
            skills.map((curr,index) => (
                <li className = "rounded-full bg-slate-200 p-4 text-slate-800/70 shadow-black/15 shadow-md">{curr}</li>
            ))
            }
        </ul>
    </motion.div>
  )
}
