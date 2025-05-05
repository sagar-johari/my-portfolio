'use client'  // Add this at the top of the file

import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from 'next/navigation';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}


// Fade in animation for elements (uncommented and fixed)
const setupFadeIn = () => {
    const boxes = gsap.utils.toArray('.fadecustom');
    
    // Set initial state with visibility hidden
    gsap.set(boxes, { 
        visibility: "hidden",
        y: 20,
        opacity: 0
    });
    
    gsap.to(boxes, 
        { 
            duration: 1.2,
            visibility: "visible",
            opacity: 1,
            y: 0,
            delay:1,
            stagger: 0.3,
            ease: "power2.out", // Add smooth easing
            scrollTrigger: {
                trigger: boxes[0],
                start: "top 80%",
                once: true,
                markers: false
            }
        }
    );
};

//translate '.marque' from y -100% to y 0%
const setupMarqueeAnimation = () => {
    const marquee = document.querySelector('.marque-text');
    if (!marquee) return;

    gsap.to(marquee,
        {
            y: '0%', 
            delay: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: marquee,
                start: "top 80%",
                once: true
            }
        }
    );
};

//make .route-page:before from initial value to 0
// const setupRoutePageAnimation = () => {
//     const lineRoute = document.querySelector('.line-route');
//     if (!lineRoute) return;

//     // Initial state
//     gsap.set(lineRoute, {
//         translateX: '-100%'
//     });

//     // Animate in
//     gsap.to(lineRoute, {
//         translateX: '0%',
//         duration: 1.2,
//         ease: "power2.out",
//         delay: 0.2 // Small delay to let page transition complete
//     });
// };

// Add fade out animation before route change
const setupFadeOut = () => {
    const boxes = gsap.utils.toArray('.fadecustom');
    
    gsap.to(boxes, {
        duration: 0.5,
        opacity: 0,
        y: -20,
        stagger: 0.1,
        ease: "power2.in",
        onComplete: () => {
            // Reset visibility after fade out
            gsap.set(boxes, { visibility: "hidden" });
        }
    });
};

// Initialize animations
const initAnimations = () => {
    setupFadeIn();
    setupMarqueeAnimation();
    // setupRoutePageAnimation();
    
    // Add refresh listener
    ScrollTrigger.addEventListener("refresh", () => { 
        setupFadeIn();
        setupMarqueeAnimation();
        // setupRoutePageAnimation();
        
    });
};

// React hook for using GSAP
export const useGSAP = () => {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Run fade out before route change
            setupFadeOut();
            
            // Small delay to ensure fade out completes before fade in
            setTimeout(() => {
                initAnimations();
            }, 500);
        }

        const handleGrootLayout = () => {
            try {
                const groot = document.querySelector('.body-div .groot');
                const main = document.querySelector('.body-div .page-div');
                if (!groot || !main) return;

                const match = main.className.match(/col-span-(\d+)/);
                const mainSpan = match ? parseInt(match[1]) : 0;
                const remaining = 10 - mainSpan;

                // Remove existing classes and add new one
                groot.className = groot.className.replace(/col-span-\d+/, '').trim();
                // groot.classList.add(`col-span-${remaining}`);

                // Animate width with GSAP
                gsap.to(groot, {
                    delay:0.5,
                    width: `${(remaining * 100)}%`,
                    // width: `100%`,
                    duration: 0.5,
                    ease: "power2.inOut"
                });
            } catch (error) {
                console.error('Error in handleGrootLayout:', error);
            }
        };

        // Run on initial load and on route change
        handleGrootLayout();

        // No MutationObserver needed!

        // Cleanup (if you have GSAP triggers)
        return () => {
            if (typeof window !== 'undefined') {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
                ScrollTrigger.removeEventListener("refresh", setupMarqueeAnimation);
            }
        };
    // Add pathname as a dependency so this runs on every route change
    }, [pathname]);
};

export { initAnimations };
