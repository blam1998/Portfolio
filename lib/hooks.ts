import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/ActiveContext';
import { sectionName } from './types';


export function useSectionInView(sectionName:sectionName, threshold = 0.75) {
    const {ref, inView} = useInView({threshold});
    const {setActiveSection, lastClick} = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - lastClick > 1000){
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, lastClick, sectionName])

    return {
        ref,
    }
}