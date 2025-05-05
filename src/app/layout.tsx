import type { Metadata } from "next";
import { JetBrains_Mono, Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import CursorEffect from "./components/cursorEffect";
import { ContactForm } from "@/components/ContactForm";
import { IoMdDownload } from "react-icons/io";
import Lottie from "lottie-react";
import handLottie from "@/assets/hand-lottie.json";
import LottieSection from "./components/LottieSection";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { LiaDownloadSolid } from "react-icons/lia";
import illuminati from "@/assets/actual-ill.svg";
import Image from "next/image";
import { NewsletterForm } from "./components/Newsletter";
import Link from "next/link";
import DynamicListings from "./components/DynamicListings";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Sagar Johari Portfolio",
  description:
    "I'm Sagar Johari, a Frontend Developer specializing in React, GSAP animations, and Headless CMS solutions. I create high-performance websites that blend functionality with stunning visuals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} ${bebasNeue.variable} ${poppins.variable} antialiased`}
      >
        {/* <CursorEffect />  */}
        <Header />
        <div className="ml-[2rem] grid grid-cols-10 grid-rows-1 body-div">
          <div className="groot">
            <DynamicListings />
          </div>
          {children}
        </div>
        {/* <Footer /> */}
        <nav className="sticky bottom-nav right-0 left-0 bg-theme_accent z-10 border-t-2">
          <ul className="ml-[2rem] text-center flex h-[55px] items-center justify-between grid grid-cols-10 font-jetBrainsMono">
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/about'}>About</Link></li>
            <li><Link href={'/work'}>Work</Link></li>
            <li><Link href={'/blogs'}>Blogs</Link></li>
            <li><Link href={'/contact'}>Contact</Link></li>
          </ul>
          <div className="bg-background fake-footer border-t-2 h-full">
            <div className="grid grid-cols-10 ml-[2rem] border-b-2">
              <div className="col-span-4 border-x h-[90vh] ">
                <div className="border-b-2 p-[1rem] h-[20%] gap-x-4 flex items-center justify-center text-start bg-theme_accent text-white hover:bg-opacity-90 transition-all duration-200 cursor-pointer ">
                  {/* <a href="#" className="button theme-btn text-[20px]">Download Resume</a> */}
                  <div className="flex flex-col ">
                    <h2 className="text-7xl font-bold flex  items-center justify-center text-center gap-[1rem]">
                      Download &nbsp;
                    {/* </h2>
                    <h2 className="text-5xl font-bold h-[40%] flex items-center justify-start text-start"> */}
                      Resume
                  <IoMdDownload size={60} />
                    </h2>
                  </div>
                </div>
                <div className="w-full max-w-2xl mx-auto  font-jetBrainsMono footer-contact h-[80%] flex flex-col justify-between">
                  <div className="w-[95%] mx-auto">
                  <h2 className=" mt-[1rem]  text-7xl font-bold  p-[1rem]  flex items-center justify-start text-center">
                    Newsletter
                  </h2>
                  <p className=" px-[1rem] w-[70%]">Stay updated with my latest projects, insights, and tech tips. Subscribe to my newsletter!</p>
                  </div>
                  <NewsletterForm />
                </div>
                {/* <ContactForm /> */}
              </div>
              <div className="col-span-6">
                <div className="flex flex-col h-full">
                  <div className="h-[40%] flex  items-center justify-center">
                    <div className="w-[90%] p-[2rem] h-full  border-b-2 flex flex-col justify-center items-center">
                      <h2 className="text-7xl font-bold  p-[1rem] h-fit w-[70%] flex items-center justify-center text-center h-full">
                        Social Links
                      </h2>
                      <ul className="text-lg flex space-x-6">
                        <li>
                          <FaWhatsapp size={30} />
                        </li>
                        <li>
                          <FaLinkedinIn size={30} />
                        </li>
                        <li>
                          <FaGithub size={30} />
                        </li>
                      </ul>
                    </div>
                    <div className="w-[10%] h-full border-l-2 p-[2rem]"></div>
                  </div>
                  <div className="h-[60%] flex items-center justify-around">
                    <div className="w-[90%] h-full flex flex-col items-center justify-center">
                      <h2 className=" text-7xl font-bold text-center mb-5">
                        Quick Links
                      </h2>
                      <ul className="w-[75%] text-[20px] text-center grid grid-cols-5 font-jetBrainsMono">
                        <li>Home</li>
                        <li>About</li>
                        <li>Work</li>
                        <li>Blogs</li>
                        <li>Contact</li>
                      </ul>
                      <a
                        href="#"
                        className="text-[20px] font-jetBrainsMono absolute top-0 right-[100px] h-[55px] flex items-center"
                      >
                        Newsletter
                      </a>
                    </div>
                    <div className="w-[10%] border-l-2 h-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </body>
    </html>
  );
}
