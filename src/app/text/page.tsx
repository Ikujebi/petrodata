import React from "react";
import { IoTriangle } from "react-icons/io5";
import graph from "../assets/img/_Stocks Line Chart.png"

const page = () => {
    const stats = ["+0.37", "+0.09%"];
  return (
    <div className="bg-gray-600 text-white h-screen flex flex-col items-center justify-center">
      <div className="bg-[#040404] p-8 rounded-lg shadow-md text-center  w-[300px]">
        <div className="flex  mb-4">
          <div className="flex justify-between w-full">
            <section>
              <article className="flex text-gray-100 items-start">
                <IoTriangle className="text-green-500 text-[.7rem] mix-blend-normal mt-2" />
                <h2 className="ml-1 ">PMS</h2>
              </article>
              <article className="font-thin text-white text-[.8rem]">
                Premium Motor Spirit
              </article>
            </section>
            <section >
            {stats.map((value, index) => (
                <article
                  key={index}
                  className="flex font-light text-green-500 items-start text-[.9rem]"
                >
                  {value}
                </article>
              ))}
            </section>
          </div>
        </div>
        <div>
            <img src={graph.src} alt="" />
        </div>
        <h2 className="text-4xl font-bold mt-[2rem]">N714.26</h2>
        
      </div>
      ygyg
    </div>
  );
};

export default page;
