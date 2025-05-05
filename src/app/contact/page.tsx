"use client";
import { div } from "framer-motion/client";
import { useGSAP } from '@/app/js/custom-gsap';

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const Contact = () => {
  useGSAP();

  return (
    <div className="col-start-5 col-span-6 page-div fadecustom">
    <div className="grid grid-cols-10">
      <div className=" col-span-10 route-page">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-box-wrapper">
            <h2 className="text-[170px] font-bold text-center mb-5">Contact Me</h2>
          </div>
          <div className="col-start-3 col-span-8">
          
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
