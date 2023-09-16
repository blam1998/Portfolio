"use client";
import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';

export default function About() {
 return (
    <section className = "flex flex-col gap-4 items-center justify-center w-[80%] sm:w-[60%] pt-28 border-box">
        <motion.div 
        className = "flex flex-col items-center justify-center w-[100%]"
        initial = {{opacity: 0, y: 100}}
        animate = {{opacity: 1, y: 0}}
        transition = {{delay: 0.5}}>
            <Image src = {'/assets/GrizzCub.jpg'} alt = "image" width = {192} height = {192}
            className = "rounded-full bg-white drop-shadow-2xl" />
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
