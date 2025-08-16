import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
export default function Banner() {
  return (
    <div className="bg-[#1C352D] pt-20">
      <div className="flex items-center gap-20 justify-around ml-28">
        <div className="text-[#A6B28B]  space-y-7">
          <p className="font-bold text-7xl ">
            <span className="bg-[#F5C9B0] rounded-lg mt-2 mb-2 pl-3 pr-3 pb-2 text-[#1C352D] mr-2">
              Nurse
            </span>
            Here
          </p>
          <p className="font-bold text-7xl ">For Your Care</p>
          <p className="text-2xl">
            Certified cloud technology and integrated approach to service
            delivery enables seamless exchange of information across multiple
            platforms, systems and organizations - driving greater
            collaboration, productivity and, patient safety.g
          </p>
          <Button
            className="text-xl p-5 text-[#1C352D] bg-[#F5C9B0] "
            variant={"secondary"}
          >
            Get Started
          </Button>
        </div>
        <Image
          className="md:block hidden mr-16 overflow-hidden"
          src="/mdoctor.png"
          alt="image is not found"
          width={1000}
          height={1000}
        ></Image>
      </div>
    </div>
  );
}
