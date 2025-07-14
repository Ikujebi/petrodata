"use client";
import { useState } from "react";
import Image from "next/image";
import { IoTriangle } from "react-icons/io5";
import flight from "../../assets/img/Flight icon (2).png";
import graph from "../../assets/img/Group 6.png";

const Done4L = () => {
    const [selected, setSelected] = useState<"International" | "Domestic">("International");
  return (
    <div><div className="bg-[#040404] p-2 rounded-xl shadow-md text-center ">
    {/* Header */}
    <div className="flex items-center mb-2">
      <div className="bg-white rounded-full flex justify-center items-center h-3 w-3">
        <Image
          height={100}
          width={200}
          src={flight.src}
          alt="Depot icon"
          className="w-2 h-2 object-contain"
        />
      </div>
      <p className="text-white text-[.2rem] lg:text-[.5rem] pl-1">284,774</p>
      <div className="text-[#a3a3a3] font-thin flex gap-1 mt-1">
        <p className="text-white text-[.15rem] lg:text-[.45rem] mt-[.1rem] pl-1">Flights</p>
        <article className="flex text-gray-100 items-start">
          <IoTriangle className="text-[#027a48] text-[.15rem] lg:text-[.3rem] mt-1" />
          <h2 className="ml-1 text-[#027a48] text-[.15rem] lg:text-[.7rem]">15%</h2>
        </article>
        <p className="text-white text-[.15rem] lg:text-[.45rem]">last week</p>
      </div>
    </div>

    {/* Graph */}
    <div>
      <Image width={1000} height={200} src={graph} alt="Graph" className="w-[14rem]" />
    </div>

    {/* Indicator Line */}
    <div className="relative w-full h-[1px] bg-white mt-3">
      <div className="absolute inset-0 flex justify-between px-2 w-[50%]">
        <div className="w-[2.6rem] flex justify-center relative">
          {selected === "International" && (
            <div className="h-[3px] bg-[#009688] w-full absolute top-1/2 -translate-y-1/2 rounded-sm" />
          )}
        </div>
        <div className="w-[2.5rem] flex justify-center relative">
          {selected === "Domestic" && (
            <div className="h-[3px] bg-[#009688] w-full absolute top-1/2 -translate-y-1/2 rounded-sm" />
          )}
        </div>
      </div>
    </div>

    {/* Labels */}
    <section className="flex justify-between px-2 mt-1 w-[50%]">
      <p
        className={`cursor-pointer text-[.15rem] lg:text-[.45rem] ${
          selected === "International" ? "text-[#009688]" : "text-white"
        }`}
        onClick={() => setSelected("International")}
      >
        International
      </p>
      <p
        className={`cursor-pointer text-[.15rem] lg:text-[.45rem] ${
          selected === "Domestic" ? "text-[#009688]" : "text-white"
        }`}
        onClick={() => setSelected("Domestic")}
      >
        Domestic
      </p>
    </section>
  </div>
</div>
  )
}

export default Done4L