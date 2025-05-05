"use client";
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa6";
import { useGSAP } from '@/app/js/custom-gsap';


const About = () => {
  useGSAP();

  return (
    <div className="col-start-2 col-span-9 page-div about fadecustom">
    <div className="grid grid-cols-10 about page-wrapper">
      <div className=" col-span-10 route-page">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-box-wrapper">
            <h2 className=" text-[170px] font-bold text-center mb-5">About Me</h2>
          </div>
          <div className="col-start-3 col-span-8">
            <p className="text-3xl/[1.5em] font-jetbrains">
          <FaQuoteLeft className="inline quote"/>
              &nbsp;Hey there! I'm Sagar Johari, a passionate front-end developer with
              a keen eye for design and smooth user experiences. I specialize in
              React.js, GSAP, WordPress, and CSS, crafting dynamic and engaging
              interfaces that bring ideas to life. With a strong background in
              modern web development, I've built custom plugins and themes for
              WordPress and developed performance-optimized web applications. My
              goal is to create seamless, interactive experiences while
              continuously expanding my skill set. 
          <FaQuoteRight className="inline quote"/>
            </p>


          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
