'use client'

import Lottie from "lottie-react";
import handLottie from "@/assets/hand-lottie.json";

export default function LottieSection() {
  return (
    <div className="flex h-full justify-end ">
      <div className="lottie-to-top w-[30%] flex items-center justify-center h-full border-l-2 bg-white">
        <Lottie animationData={handLottie} className="rotate-180" />
      </div>
    </div>
  );
} 