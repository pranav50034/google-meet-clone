'use client'

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Separator from "@/components/Separator";
import { Keyboard, Video } from "lucide-react";
import Image from "next/image";
import { Input } from "postcss";

const Hero = () => {
    const handleClick = () => {
        console.log("clicked");
        
    }
  return (
     <div className="py-8 mx-auto text-center flex flex-col items-center max-w-3xl border-b border-gray-300">
        <p className="text-[40px] leading-tight mb-6">
           Video calls and meetings for everyone
        </p>
        <p className="text-gray-500 text-lg mb-6">
           Connect, collaborate, and celebrate from anywhere with Google Meet
        </p>
        <div className="w-full flex flex-col gap-3 items-start">
           <Button
              onClick={handleClick}
              className="bg-blue-600 text-white px-3 py-4 rounded-[4px] flex"
           >
              <Video />
              <span className="ml-2 font-normal">New meeting</span>
           </Button>
           <div className="flex gap-2 justify-between w-full">
              <InputField
                 placeholder="Enter meeting ID"
                 className="flex border border-gray-500 p-4 rounded-[4px]"
              >
                 <Keyboard className="mr-2 text-gray-500" />
              </InputField>
              <Button className="border py-4 px-5 text-blue-600 font-medium hover:bg-blue-50">Join</Button>
           </div>
        </div>
        {/* <Separator /> */}
     </div>
  );
}

export default Hero