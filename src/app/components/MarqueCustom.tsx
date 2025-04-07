"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SiGreensock, SiRedux } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaWordpress, FaShopify } from "react-icons/fa";
import { FaReact } from "react-icons/fa";


const MarqueeCustom = () => {
  const marqueeRef = useRef(null);
  const tweenRef = useRef(null);
  let lastScrollY = 0;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!marqueeRef.current) return;

    // GSAP animation setup
    tweenRef.current = gsap.to(".marquee__part", {
      xPercent: -100,
      repeat: -1,
      duration: 15,
      ease: "linear",
    }).totalProgress(0.5);

    gsap.set(marqueeRef.current, { xPercent: -50 });

    // Scroll event listener
    const handleScroll = () => {
      const newScrollY = window.pageYOffset;
      if (newScrollY > lastScrollY) {
        tweenRef.current.timeScale(1); // Normal speed
      } else {
        tweenRef.current.timeScale(-1); // Moves in reverse smoothly
      }
      lastScrollY = newScrollY;
    };

    // Hover event listeners - Speed up animation while keeping the direction
    const handleMouseEnter = () => tweenRef.current.timeScale(tweenRef.current.timeScale() * 3);
    const handleMouseLeave = () => tweenRef.current.timeScale(tweenRef.current.timeScale() / 3);

    const element = marqueeRef.current;
    window.addEventListener("scroll", handleScroll);
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (element) {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="marquee">
      <div className="marquee__inner" aria-hidden="true" ref={marqueeRef}>
        {[...Array(6)].map((_, i) => (
          <div className="marquee__part flex items-center" key={i}>
                      <FaReact className="mx-2" /> React JS &nbsp;&nbsp;
                      <SiGreensock className="mx-2" /> GSAP&nbsp;&nbsp;
                      <SiRedux className="mx-2" /> Redux&nbsp;&nbsp;
                      <RiNextjsFill className="mx-2" /> Next JS&nbsp;&nbsp;
                      <RiTailwindCssFill className="mx-2" /> Tailwind CSS&nbsp;&nbsp;
                      <FaWordpress className="mx-2" /> Wordpress&nbsp;&nbsp;
                      <FaShopify className="mx-2" /> Shopify&nbsp;&nbsp;
                    </div>
        ))}
      </div>
    </section>
  );
};

export default MarqueeCustom;
