"use client"
import Image from "next/image";
import StarBackground from "./components/StarBack";
// import Marquee from "./components/Marque";
import Marquee from "react-fast-marquee";
import { FaReact } from "react-icons/fa";
import { SiGreensock, SiRedux } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaWordpress, FaShopify } from "react-icons/fa";
import Work from "./components/Work";
import MarqueeCustom from "./components/MarqueCustom";

export default function Home() { 

  return (
    <>
      <div className="grid grid grid-cols-12 h-[100vh - 110px] hero-section border-b">
        <div className="col-span-8">
          <div className="flex flex-col text-box-wrapper h-full relative p-0">
          {/* <StarBackground/> */}
          <video 
          loop
          autoPlay
          muted
          className="object-cover h-full w-full absolute top-0 left-0"
          >
            <source src="../videos/banner_video.mp4" type="" />
          </video>
          <div className=" w-[75%]">
            {/* <h1 className="text-7xl font-bold">
              Helping people make the world a better place through quality software.
            </h1> */}
            {/* <span className="text-[20px]">
              I’m Sagar Johari, a Frontend Developer specializing in React, GSAP
              animations, and Headless CMS solutions. I create high-performance
              websites that blend functionality with stunning visuals.
            </span> */}
          </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex flex-col h-full border-l">
            {/* <div className="basis-[50%] text-box-wrapper pb-0 font-poppins text-center">
            "Let’s Build Something Amazing!"
            </div> */}
            <div className="basis-[60%] text-box-wrapper text-[1.6rem] pb-0 ">
              <h3 className="font-poppins">
              Helping people<br/>make the world a better place<br/>through <strong>Quality Software.</strong>
              </h3>
            </div>
            <div className=" flex border-y">
              <button className=" theme-btn border-r w-full p-2 text-[1rem]">Hire me!</button>
              <button className=" theme-btn w-full p-2 text-[1rem]">View my work</button>
            </div>
            <div className="basis-[40%] text-box-wrapper justify-start blog-card">
            <span className="subtitle">Blogs</span>
              <div className="flex flex-col h-full">
              <h3 className="text-[1rem] m-auto">Lorem ipsum is a dummy or placeholder text comm used in graphic design, publishinggraphic design, publishinggraphic design, publishinggraphic design, publishing.</h3>
              <span className="blog-date ">12 feb 2001</span>
              </div>
            </div>
              <button className=" theme-btn border-t w-full p-2 text-[1rem]">view all</button>
          </div>
        </div>
      </div>
      <Marquee className="marque-text border-b" speed={50}>
      {[...Array(3)].map((_, index) => (
          <div className="marquee__part flex items-center" key={index}>
            <FaReact className="mx-2" /> React JS &nbsp;&nbsp;
            <SiGreensock className="mx-2" /> GSAP&nbsp;&nbsp;
            <SiRedux className="mx-2" /> Redux&nbsp;&nbsp;
            <RiNextjsFill className="mx-2" /> Next JS&nbsp;&nbsp;
            <RiTailwindCssFill className="mx-2" /> Tailwind CSS&nbsp;&nbsp;
            <FaWordpress className="mx-2" /> Wordpress&nbsp;&nbsp;
            <FaShopify className="mx-2" /> Shopify&nbsp;&nbsp;
          </div>
        ))}
  </Marquee>
  {/* <MarqueeCustom/>   */}
  <Work/>
    </>
  );
}
