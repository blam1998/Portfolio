"use client";
import React from 'react';
import {motion} from 'framer-motion';
import { links } from '@/lib/variables';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/ActiveContext';


export default function Header(){
    const {activeSection, setActiveSection, setLastClick} = useActiveSectionContext();

    return(
    <div className = "z-[50] relative">
        <motion.div className = {`fixed rounded-none top-0 left-1/2 w-[min(100%,36rem)]  h-[4.5rem]
        bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 
        sm:h-[3.25rem] sm:rounded-full`}
        initial = {{y: -100, x: "-50%", opacity: 0}}
        animate = {{y: 0, x:"-50%", opacity: 1}}>
        </motion.div>
        <nav className = "fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 w-[min(100%,26rem)]">
            <ul className = "flex w-full flex-wrap items-center justify-center text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                {
                    links.map((link) => (
                        <motion.li className = "h-3/4 flex items-center justify-center relative" key = {link.hash}
                        initial = {{y: -100, opacity: 0}}
                        animate = {{y: 0, opacity: 1}}>
                            <Link 
                            className = {clsx("flex w-full items-center justify-center px-3 py-1 sm:py-3 hover:text-gray-950 transition",{
                                "text-gray-950" : activeSection === link.name, 
                            })}
                            onClick = {() => 
                                {
                                    setActiveSection(link.name)
                                    setLastClick(Date.now())
                                }}
                            href = {link.hash}>
                            {link.name}
                            { link.name === activeSection && 
                                (
                                <motion.span className = {`${activeSection === link.name? 'rounded-full absolute inset-0 -z-10 bg-lime-200/40': ''}`}
                                layoutId = "activeSection"
                                transition = {{
                                    type: "spring",
                                    stiffness: 380,
                                    damping: 30
                                }}
                                ></motion.span>
                                )
                            }
                            </Link>
                        </motion.li>
                    ))
                }
            </ul>
        </nav>
    </div>
    )
}