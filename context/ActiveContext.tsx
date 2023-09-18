"use client"
import React, { useState, createContext, useContext } from 'react'
import { links } from '@/lib/variables';

type sectionName = typeof links[number]["name"]
interface ActiveContextProps{
    children: React.ReactNode
}

interface ActiveSectionContextType{
    activeSection: sectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<sectionName>>;
    lastClick: number;
    setLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const activeSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveContext({
    children,
}: ActiveContextProps) {
    const [activeSection, setActiveSection] = useState<sectionName>("Home");
    const [lastClick, setLastClick] = useState(0)

  return (
  <activeSectionContext.Provider
  value = {{
    activeSection,
    setActiveSection,
    lastClick,
    setLastClick
  }}>
    {children}
  </activeSectionContext.Provider>
  )
}

export function useActiveSectionContext(){
    const context = useContext(activeSectionContext);
    if (context === null){
        throw new Error("useActiveSectionContext returned null.");
    }

    return context;
}
