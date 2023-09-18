
"use client"
import React, { useEffect } from 'react';
import {motion} from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';



export default function AboutMe() {
  const {ref} = useSectionInView("About");

  return (
    <section ref = {ref} className = "flex flex-col items-center justify-center w-[60%] my-28 max-w-[80%] md:max-w-[60%] scroll-mt-56" id = "about">
        <h2 className = "text-2xl font-medium capitalize tracking-widest">About Me</h2>
        <div className = "flex flex-row flex-wrap text-"></div>

    </section>
  )
}
