"use client"
import React from 'react'
import { projects } from '@/lib/variables'
import {motion} from 'framer-motion';

export default function Projects() {
  return (
    <section className = "flex flex-col gap-4 items-center justify-center w-[80%] sm:w-[50%] pt-[12rem] border-box">
        {
            projects.map((curr) => (
                <div className = "flex flex-col rounded-md w-[100%] justify-center items-center mb-8">
                    <a className = "text-2xl mb-8" href = {curr.link} target = "_blank">{curr.name}</a>
                    <div className = "flex flex-row rounded-md w-[100%] justify-center items-center bg-slate-200 border-box p-4 relative">
                        <div className = "flex flex-col basis-[50%]">
                            <div className = "w-[100%] p-16 border-box">{curr.description}</div>
                            <div className = "flex flex-row flex-wrap w-[100%] border-box p-16 gap-4">
                                {
                                curr.languages.map((lang) => (
                                    <div className = "rounded-md bg-slate-500 p-2">
                                        {lang}
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                        <div>

                        </div>
                        <a href = {curr.link} target = "_blank" className = "absolute w-[100%] h-[100%]"></a>
                    </div>
                </div>
            ))
        }
    </section>
  )
}
