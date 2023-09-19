"use client"

import React from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from '@/lib/variables'
import grizzCub from '@/public/assets/GrizzCub.jpg'


type ProjectProps = (typeof projects)[number];


export default function Project({name, description, languages, link, inprogress, image, github}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
      });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    
    return (
        <motion.div
          ref={ref}
          style={{
            scale: scaleProgess,
            opacity: opacityProgess,
          }}
          className="group mb-3 sm:mb-8 last:mb-0 w-[100%]"
        >
          <section className={`flex flex-row lg:group-even:flex-row-reverse bg-slate-100 w-[100%] max-w-[60rem] border 
          border-black/5 rounded-lg overflow-hidden sm:pr-8 relative h-fit lg:h-[30rem] hover:bg-lime-50 hover:scale-[1.02] transition 
           dark:text-white dark:bg-white/10 dark:hover:bg-white/20`}>
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 w-[100%] lg:max-w-[50%] flex flex-col h-full">
              <h3 className="text-2xl font-semibold">{name}</h3>
              <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                {description}
              </p>
              <div className = "flex flex-col lg:group-even:items-end w-[100%] gap-2 sm:mt-auto flex-wrap">
                <div className = {`bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider 
                text-white rounded-full dark:text-white/70 mt-4 w-fit
                ${inprogress? 'bg-sky-200':'bg-green-400'}`}>
                    {inprogress? 'Inprogress' : 'Completed'}
                </div>
                <div className = "flex flex-row gap-4 flex-wrap">
                    {link?(<a href = {link} target = "_blank" className = {`bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider 
                text-white rounded-full dark:text-white/70 mt-auto w-fit cursor-pointer
                hover:bg-sky-400`}>Website Link</a>) : null}
                    {github?(<a href = {github} target = "_blank" className = {`bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider 
                text-white rounded-full dark:text-white/70 mt-auto w-fit cursor-pointer
                hover:bg-sky-400`}>Github</a>) : null}
                </div>
                {languages? (<div className = "h-[2px] w-full bg-slate-500"></div>) : null}
              </div>
              <ul className="flex lg:group-even:flex-row-reverse flex-wrap gap-2 mt-4">
                {languages.map((tag, index) => (
                  <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            
            <Image
              src={image}
              alt="Project I worked on"
              quality={95}
              className="project-image absolute hidden lg:block top-[30%] -right-20 w-[28.25rem] rounded-t-lg shadow-2xl 
            shadow-cyan-500/50
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
    
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
            group-even:shadow-blue-500/50
    
            group-even:right-[initial] group-even:-left-20
            "
            />
            <div className = "hidden ease-in-out duration-300 lg:block top-4 -right-20 group-even:-left-20 group-hover:-translate-x-20 group-hover:group-even:translate-x-20 absolute rounded-full w-16 h-16 transition">
              <Image
              src = {grizzCub}
              alt = "Grizzy & Cubby"
              className = "rounded-full"
              quality = {90}
              />
            </div>
          </section>
        </motion.div>
      );
}
