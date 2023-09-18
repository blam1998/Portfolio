"use client"
import React, {useRef} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/ActiveContext';
import { useSectionInView } from '@/lib/hooks';



export default function Contact() {
    const {ref} = useSectionInView("Contact");
    
  return (
    <motion.section className = "w-[min(90%,60rem)] flex flex-col items-center justify-center gap-4 scroll-mt-56 my-28" id = "contact" ref = {ref}>
        <h2 className = "text-2xl font-medium capitalize tracking-widest">Contact Me</h2>
        <div>Please contact me at <span className = "underline underline-offset-2">baolamleh@gmail.com</span> or through this form.</div>
        <form className = "w-[100%]">
            <input className = "w-[100%] my-4 h-8 border-box p-4 rounded-md shadow-black/5 shadow-xl text-[1.1rem]" 
            type = "email"
            name = "senderEmail"
            required
            maxLength = {500}
            placeholder = "Your Email"/>
            <textarea className = "w-[100%] my-4 h-52 border-box p-2 rounded-md shadow-black/5 shadow-xl text-[1.1rem]" 
            required
            name = "message" 
            placeholder = "Message"
            maxLength = {5000}/>
            <button className = "rounded-xl bg-slate-200 hover:bg-lime-200/40 p-3 font-semibold" type = "submit">Submit</button>
        </form>
    </motion.section>
  )
}
