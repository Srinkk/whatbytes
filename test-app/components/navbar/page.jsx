import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.svg";

const NavBar = () => {
    const getFirstLetter = (name) =>{
        return name[0]
    }
  return (
    <div className="fixed bg-white z-10 w-full border-b">
      <div className="flex justify-between items-center p-5">
        <div className="flex flex-row gap-[6px] items-center">
          <Image src={logo} alt="Logo" width={30} height={30} />
          <span className="md:text-2xl text-lg font-bold ">WhatBytes</span>
        </div>
        <span className="hidden md:block p-3 border border-slate-300  items-center text-md font-bold rounded-md ">
          Shreya Ganguly
        </span>
        <span className="md:hidden  px-3 py-1 border border-slate-300 flex items-center text-md font-bold rounded-[100%] ">
          {getFirstLetter("Shreya Ganguly")}
        </span>
      </div>
    </div>
  );
};

export default NavBar;
