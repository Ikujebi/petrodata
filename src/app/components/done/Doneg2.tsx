"use client";

import { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { IoTriangle } from "react-icons/io5";
import chart1 from "../../assets/img/Stroke5.png";
import chart2 from "@/app/assets/img/Gradient1.png";
import chart3 from "../../assets/img/Stroke7.png";
import warehouse from "../../assets/img/warehouse.png";

type FuelCategory = "PMS" | "AGO" | "DPK" | "ICE" | "LPG";

type Fuel = {
  name: string;
  full: string;
  prices: Record<FuelCategory, string>;
  change: Record<FuelCategory, string>;
  changeColor: string;
  iconColor: string;
  image: StaticImageData;
};

const Card2 = () => {
  const [selected, setSelected] = useState<FuelCategory  | null>(null);
  // const [selectedChnage, seselectedChnage] = useState<FuelCategory  | null>(null);

  const fuels: Fuel[]  = [
    {
      name: "NIPCO",
      full: "Lagos",
      prices: {
      PMS: "₦714.26",
      AGO: "₦1249.06",
      DPK: "$75.00",
      ICE: "₦1088.92",
      LPG: "₦500.10"
    },
      change : {
        PMS: "+0.37",
        AGO: "-9.01",
        DPK: "0.68",
        ICE: "-50.90",
        LPG: "00.0"
    },
      changeColor: "text-green-500",
      iconColor: "text-green-500",
      image: chart1,
    },
    {
      name: "Oando PLC",
      full: "Rivers",
      prices: {
        PMS: "₦714.26",
        AGO: "₦1249.06",
        DPK: "$75.00",
        ICE: "₦1088.92",
        LPG: "₦500.10"
    },
      change : {
        PMS: "+0.37",
        AGO: "-9.01",
        DPK: "0.68",
        ICE: "-50.90",
        LPG: "00.0"
    },
      changeColor: "text-red-500",
      iconColor: "text-red-500",
      image: chart2,
    },
    {
      name: "MRS Oil Nigeria PLC",
      full: "Oyo",
      prices: {
        PMS: "₦714.26",
        AGO: "₦1249.06",
        DPK: "$75.00",
        ICE: "₦1088.92",
        LPG: "₦500.10"
    },
      change : {
        PMS: "+0.37",
        AGO: "-9.01",
        DPK: "0.68",
        ICE: "-50.90",
        LPG: "00.0"
    },
      changeColor: "text-green-500",
      iconColor: "text-green-500",
      image: chart3,
    },
  ];

  const categories: FuelCategory[] = ["PMS", "AGO", "DPK", "ICE", "LPG"];

  return (
    <div className="bg-[#040404] p-2 rounded-xl shadow-md text-center w-full">
      {/* Header */}
      <div className="flex">
        <div className="bg-white rounded-[70%] flex justify-center items-center h-2 w-2 lg:h-3 lg:w-3">
          <Image height={100} width={200} src={warehouse.src} alt="News icon" className="lg:w-2 w-1" />
        </div>
        <p className="text-white text-[.45rem] mt-[.1rem] pl-1 mb-[.5rem]">Depot</p>
      </div>

      {/* Fuel cards */}
      {fuels.map((fuel, i) => (
        <div key={i} className="flex mb-2 text-[.14rem] lg:text-[.5rem]">
          <div className="flex justify-between w-full">
            <section>
              <article className="flex text-gray-100 items-start">
                <IoTriangle className={`${fuel.iconColor} text-[.14rem] lg:text-[.3rem] mix-blend-normal mt-1`} />
                <h2 className="ml-1">{fuel.name}</h2>
              </article>
              <article className="font-thin text-white text-[.3rem] lg:text-[.4rem]">{fuel.full}</article>
            </section>

            <div className="mx-2 mt-1">
              <Image src={fuel.image} alt="chart" width={50} height={30} />
            </div>

            <section className="flex flex-col justify-end items-end text-[.3rem] lg:text-[.5rem]">
              <p className="text-white"> {selected ? fuel.prices[selected] : fuel.prices["PMS"]}</p>
              <p className={`flex font-light ${fuel.changeColor} items-start `}>{selected ? fuel.change[selected] : fuel.change["PMS"]}</p>
            </section>
          </div>
        </div>
      ))}

      {/* Static white line with dynamic green segment */}
      <div className="relative w-full h-[1px] bg-white mt-3">
        {/* Green overlay only when item is selected */}
        <div className="absolute inset-0 flex justify-between px-2 w-[50%]">
          {categories.map((item) => (
            <div key={item} className="w-4 flex justify-center relative ">
              {selected === item && (
                <div className="h-[3px] bg-[#009688] w-full absolute top-1/2 -translate-y-1/2 rounded-sm" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Labels */}
      <section className="flex justify-between px-2 mt-1 w-[50%]">
        {categories.map((item) => (
          <p
            key={item}
            onClick={() => setSelected(item)}
            className={`cursor-pointer text-[.2rem] lg:text-[.45rem] ${
              selected === item ? "text-[#009688]" : "text-white"
            }`}
          >
            {item}
          </p>
        ))}
      </section>
    </div>
  );
};

export default Card2;
