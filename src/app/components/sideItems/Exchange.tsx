import { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";

type FuelCategory = "Official rate" | "Black market";

const Card2 = () => {
  const [selected, setSelected] = useState<FuelCategory>("Official rate");
  const exchange = ["1544.71", "1600"];

  return (
    <div className="bg-[#040404] p-2 rounded-xl shadow-md text-center lg:w-[18.7rem]">
      <div className="flex mb-4">
        <div className="flex justify-between w-full">
          <section>
            <article className="flex text-gray-100 items-start text-[.8rem]">
              <div className="bg-[#404040] rounded-[70%] flex justify-center items-center h-5 w-5 ">
                <FaExchangeAlt className="text-[#26A69A]  w-3" />
              </div>
              <h2 className="ml-1 text-gray-500">Exchange </h2>
            </article>
          </section>
        </div>
      </div>

      <div className="mt-4 text-left text-[#404040] text-[.8em]">
        <p>Naira (₦)</p>
        <div className="flex justify-between w-full">
          <section>
            <h2 className="text-2xl  mt-4 text-white"> {selected === "Official rate" ? `${exchange[0]}` : `${exchange[1]}`}</h2>
          </section>
          <section></section>
        </div>
      </div>
      <div className="relative w-full h-[1px] bg-white mt-[3rem]">
        <div className="absolute inset-0 flex justify-between px-2 w-[70%]">
          <div className="w-[2.6rem] flex justify-center relative">
            {selected === "Official rate" && (
              <div className="h-[3px] bg-[#009688] w-full absolute top-1/2 -translate-y-1/2 rounded-sm" />
            )}
          </div>
          <div className="w-[2.5rem] flex justify-center relative">
            {selected === "Black market" && (
              <div className="h-[3px] bg-[#009688] w-full absolute top-1/2 -translate-y-1/2 rounded-sm" />
            )}
          </div>
        </div>
      </div>

      {/* Labels */}
      <section className="flex justify-between px-2 mt-1 w-[75%] ">
        <p
          className={`cursor-pointer text-[.5rem] lg:text-[.65rem] ${
            selected === "Official rate" ? "text-[#009688]" : "text-white"
          }`}
          onClick={() => setSelected("Official rate")}
        >
          Official rate
        </p>
        <p
          className={`cursor-pointer text-[.5rem] lg:text-[.65rem] ${
            selected === "Black market" ? "text-[#009688]" : "text-white"
          }`}
          onClick={() => setSelected("Black market")}
        >
          Black market
        </p>
      </section>
    </div>
  );
};

export default Card2;
