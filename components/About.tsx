"use client";
import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';
import { FaGithubSquare } from "react-icons/fa";

export default function About() {
 return (
    <section 
        className = "flex flex-col gap-4 items-center justify-center w-[80%] sm:w-[60%] my-28 scroll-mt-56"
        id = "home">
        <motion.div 
            className = "flex flex-col items-center justify-center w-[100%]"
            initial = {{opacity: 0, y: 100}}
            animate = {{opacity: 1, y: 0}}
            transition = {{delay: 0.5}}>
            <Image src = {'/assets/GrizzCub.jpg'} alt = "image" width = {192} height = {192}
            className = "rounded-full bg-white drop-shadow-2xl" />
        </motion.div>
        <motion.div
            className = "flex flex-col items-center justify-center w-[100%]"
            initial = {{opacity: 0}}
            animate = {{opacity: 1}}
            transition = {{delay: 1, duration: 1}}
        >
            <a 
                href = "https://github.com/blam1998"
                target="_blank"
                className = "mt-4 p-4 rounded-full bg-slate-100 hover:scale-[1.3] hover:bg-slate-200 transition"
                title = "Github"
            >
                <FaGithubSquare />
            </a>
        </motion.div>
        <motion.div
        className = "text-center whitespace-pre-line border-box pt-8"
            initial = {{opacity: 0, y: -100}}
            animate = {{opacity: 1, y: 0}}
            transition = {{delay: 0.5}}>
            Hi There.
        </motion.div>
    </section>
  )
}
