"use client"
import { IoIosSunny } from "react-icons/io";
import React from "react";
import { useEffect } from "react";
export const Header = () => {
  return (
    <>
      <header className="border-b border-1 h-[55px] flex items-center sticky top-0 bg-background filter-invert z-50">
        <div className="h-full w-full">
          <div className="grid grid-cols-10 h-full ml-[2rem]">
            <div className="col-span-7">
                <div className="flex h-full items-center border-r">
              <svg
                width="180"
                height="40"
                viewBox="0 0 180 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text
                  x="10"
                  y="30"
                  className="font-jetBrainsMono"
                  fontSize="20"
                  fill="white"
                >
                  Sagar Johari
                </text>
              </svg>
                </div>
            </div>
            <div className="col-span-3 ">
              <div className="flex justify-between items-center">
                <div className="flex h-full">
                  <div className="flex items-center px-4 font-jetBrainsMono">
                    <time suppressHydrationWarning>
                      {(() => {
                        const [time, setTime] = React.useState(new Date());
                        
                        React.useEffect(() => {
                          const timer = setInterval(() => {
                            setTime(new Date());
                          }, 1000);
                          
                          return () => clearInterval(timer);
                        }, []);

                        return time.toLocaleTimeString('en-US', {
                          hour: '2-digit', 
                          minute: '2-digit',
                          second: '2-digit',
                          hour12: true
                        });
                      })()}
                    </time>
                  </div>
                </div>
                <div className="flex h-full p-3">
            <IoIosSunny size={28} className="hover:text-yellow-300 duration-300 transition-colors cursor-pointer " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
