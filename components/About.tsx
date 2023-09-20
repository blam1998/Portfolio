"use client";
import React, { useEffect } from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import github from "@/public/assets/Github.svg"
import { useSectionInView } from "@/lib/hooks";

var tempArray = new Array();
for (let i = 0; i < 25; i++){
    tempArray.push(new Object());
}

export default function About() {
    const {ref} = useSectionInView("Home");

 return (
    <section 
        className = "flex flex-col gap-4 items-center justify-center w-[80%] sm:w-[60%] my-28 scroll-mt-56 relative"
        id = "home"
        ref = {ref}>
        <motion.div 
            className = "flex flex-col items-center justify-center w-[100%]"
            initial = {{opacity: 0, y: 100}}
            animate = {{opacity: 1, y: 0}}
            transition = {{delay: 0.5}}>
            <Image src = {"/assets/GrizzCub.jpg"} alt = "image" width = {192} height = {192}
            className = "rounded-full bg-white drop-shadow-2xl" />
        </motion.div>
        <div className = "w-full h-full relative -z-10">
            <div className = "firefly-container">
                {
                    tempArray.map((x,i) => {
                        return(<div className = "firefly" key = {"firefly-" + i}></div>)
                    })
                }
            </div>
        </div>
        <motion.div
            className = "flex flex-col items-center justify-center w-[100%]"
            initial = {{opacity: 0}}
            animate = {{opacity: 1}}
            transition = {{delay: 1, duration: 1}}
        >
            <a 
                href = "https://github.com/blam1998"
                target="_blank"
                className = "mt-4 p-2 rounded-full bg-slate-50 hover:scale-[1.3] hover:bg-sky-200/40 transition"
                title = "Github"
            >
                <Image src= {github} alt = "github" quality = {90}/>
            </a>
        </motion.div>
        <motion.div
        className = "text-center whitespace-pre-line border-box pt-8 text-[2rem]"
            initial = {{opacity: 0, y: -100}}
            animate = {{opacity: 1, y: 0}}
            transition = {{delay: 0.5}}>
            Hi there. I'm Bao, a <span className = "underline underline-offset-8">Junior full stack developer</span>. <br></br>My main tech stack include <span className = "font-bold">React</span> and 
            <span className = "font-bold"> Next.js</span>.
        </motion.div>
    </section>
  )
}
