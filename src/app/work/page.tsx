"use client";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const Work = () => {
  return (
    <div className="grid grid-cols-10">
      <div className="col-start-3 col-span-10 route-page">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-box-wrapper">
            <h2 className="text-[170px] font-bold text-center mb-5">My Work</h2>
          </div>
          <div className="col-start-3 col-span-8">
            <p className="text-3xl/[1.5em] font-jetbrains">
              <FaQuoteLeft className="inline quote"/>
              &nbsp;Here you'll find a collection of my projects that showcase my skills in front-end development. 
              From interactive web applications built with React.js and GSAP to custom WordPress themes and plugins, 
              each project represents my commitment to creating engaging user experiences. I focus on writing clean, 
              efficient code while maintaining beautiful, responsive designs.
              <FaQuoteRight className="inline quote"/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
