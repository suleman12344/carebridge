"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(menu == true ? false : true);
  };

  return (
    <>
      <nav className="flex items-center md:justify-between justify-between text-xl bg-[#1C352D]">
        <div className="mx-auto hidden md:flex items-center gap-2 bg-[#A6B28B] rounded-2xl p-5 mt-12">
          <Link
            href="/"
            className="text-[#F9F6F3] font-semibold  mr-24 ml-10 text- text-4xl "
          >
            CareBridgeBilling
          </Link>
          <Link
            href="/"
            className=" text-[#F9F6F3] rounded-full pt-3 pb-3 pl-5 pr-5 hover:underline hover:underline-offset-4"
          >
            Home
          </Link>
          <Link
            href="/AboutUs"
            className=" text-[#F9F6F3] rounded-full pt-3 pb-3 pl-5 pr-5 hover:underline hover:underline-offset-4"
          >
            AboutUs
          </Link>
          <Link
            href="/FAQ"
            className=" text-[#F9F6F3] rounded-full pt-3 pb-3 pl-5 pr-5 hover:underline hover:underline-offset-4"
          >
            FAQ&apos;s
          </Link>
          <Link
            href="/GetStarted"
            className=" text-[#F9F6F3] rounded-full pt-3 pb-3 pl-5 pr-5 hover:underline hover:underline-offset-4"
          >
            Contact Us
          </Link>
          <div className="flex gap-4 ml-20 mr-10">
            <Link href="/GetStarted" className="">
              <Image
                src="/facebook.png"
                alt="image is not found"
                width={30}
                height={30}
              ></Image>
            </Link>
            <Link href="/GetStarted" className=" ">
              <Image
                src="/twitter.png"
                alt="image is not found"
                width={30}
                height={30}
              ></Image>
            </Link>
            <Link href="/GetStarted" className=" ">
              <Image
                src="/youtube.png"
                alt="image is not found"
                width={30}
                height={30}
              ></Image>
            </Link>
          </div>
        </div>
        {/*<div className="md:block hidden md:ml-auto ">
          <Button className="bg-white text-black text-xl rounded-2xl hover:bg-black hover:text-white hover:shadow-2xl mr-5">
            <Link href="/signup">Register</Link>
          </Button>
          <Button className="bg-white text-black text-xl rounded-2xl hover:bg-black hover:text-white hover:shadow-2xl mr-10">
            <Link href="/login">Log In</Link>
          </Button>
        </div>
*/}
        <p className="md:hidden text-4xl m-2">CareBridgeBilling</p>
        <button className="md:hidden " onClick={toggleMenu}>
          <Image src="/menu.png" alt="Menu" width={30} height={30} />
        </button>
      </nav>
      {/*mobile navbar*/}
      {menu && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center gap-8 p-5 md:hidden">
          <button className="self-end mb-5" onClick={toggleMenu}>
            <Image src="/error.png" alt="Close Menu" width={50} height={50} />
          </button>
          <Link
            href="/"
            className="text-xl hover:text-gray-500"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/AboutUs"
            className="text-xl hover:text-gray-500"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            href="/FAQ"
            className="text-xl hover:text-gray-500"
            onClick={toggleMenu}
          >
            FAQ&apos;s
          </Link>
          <Link
            href="/GetStarted"
            className="text-xl hover:text-gray-500"
            onClick={toggleMenu}
          >
            Get Started
          </Link>
          {/*<div className="flex justify-center items-center gap-5">
            <Button className="bg-white text-black rounded-2xl hover:bg-black hover:text-white hover:shadow-2xl">
              Register
            </Button>
            <Button className="bg-white text-black rounded-2xl hover:bg-black hover:text-white hover:shadow-2xl">
              Log In
            </Button>
          </div>*/}
          <button onClick={toggleMenu}></button>
        </div>
      )}
    </>
  );
}

export default Navbar;
