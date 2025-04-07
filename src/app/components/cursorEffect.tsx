"use client";

import { useEffect } from "react";

export default function CursorEffect() {
  useEffect(() => {
    const cursorDot = document.querySelector(".cursor-dot") as HTMLElement;
    const cursorLight = document.querySelector(".cursor-light") as HTMLElement;

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorDot) {
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
      }
      if (cursorLight) {
        cursorLight.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="cursor-dot"></div>
      <div className="cursor-light"></div>
    </>
  );
}
