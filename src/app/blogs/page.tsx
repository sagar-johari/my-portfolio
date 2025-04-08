"use client";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const Blogs = () => {
  return (
    <div className="grid grid-cols-10">
      <div className="col-start-4 col-span-9 route-page">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-box-wrapper">
            <h2 className="text-[170px] font-bold text-center mb-5">My Blog</h2>
          </div>
          <div className="col-start-3 col-span-8">
            <p className="text-3xl/[1.5em] font-jetbrains">
              <FaQuoteLeft className="inline quote"/>
              &nbsp;Welcome to my blog! Here, I share my thoughts, experiences, and insights about front-end development, 
              React.js, animations, and web development best practices. I believe in learning in public and helping others 
              grow through shared knowledge. Stay tuned for regular updates on technical tutorials, code snippets, and 
              industry trends.
              <FaQuoteRight className="inline quote"/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
