'use client'  // Add this at the top of the file

import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "./splitText";

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

// Text split and animation for quotes
const setupSplits = () => {
    const quotes = document.querySelectorAll("h1, h4");
    
    quotes.forEach(quote => {
        // Reset if needed
        if (quote.anim) {
            quote.anim.progress(1).kill();
            // quote.split.revert();
        }

        // Create split text
        quote.split = new SplitText(quote, {
            type: "lines,words,chars",
            linesClass: "split-line"
        });

        // Animate characters
        quote.anim = gsap.from(quote.split.words, {
            scrollTrigger: {
                trigger: quote,
                start: "top 80%",
                markers: true
            },
            duration: 0.4,
            ease: "circ.out",
            y: 80,
            stagger: 0.04,
        });
    });
};

// Fade in animation for elements (uncommented and fixed)
const setupFadeIn = () => {
    const boxes = gsap.utils.toArray('.fadecustom');
    
    boxes.forEach((box) => {
        const anim = gsap.fromTo(box, 
            { autoAlpha: 0, y: 20 }, // Added some y movement
            { 
                duration: 1.5, 
                autoAlpha: 1, 
                y: 0,
                scrollTrigger: {
                    trigger: box,
                    start: "top 80%",
                    once: true,
                    markers:true
                }
            }
        );
    });
};

// Initialize animations
const initAnimations = () => {
    setupSplits();
    setupFadeIn();
    
    // Add refresh listener
    ScrollTrigger.addEventListener("refresh", setupSplits);
};

// React hook for using GSAP
export function useGSAP() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            initAnimations();
        }

        // Cleanup function
        return () => {
            if (typeof window !== 'undefined') {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
                ScrollTrigger.removeEventListener("refresh", setupSplits);
            }
        };
    }, []);
}

export { initAnimations };