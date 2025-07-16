import { useState } from "react";
import warehouse from "../../assets/img/warehouse.png"
import graph from "../../assets/img/_Stocks Line Chart.png";

import Image from "next/image";
import { IoTriangle } from "react-icons/io5";

type FuelCategory = "PMS" | "AGO" | "DPK" | "ICE" | "LPG";

const Card2 = () => {
    const [selected, setSelected] = useState<FuelCategory  | null>(null);
    const stats = ["+0.37", "+0.09%"];
    const categories: FuelCategory[] = ["PMS", "AGO", "DPK", "ICE", "LPG"];

  return (
    <div className="bg-[#040404] p-2 rounded-xl shadow-md text-center lg:w-[18.7rem]">
      
      <div className="flex mb-4">
        <div className="flex justify-between w-full">
          <section>
            <article className="flex text-gray-100 items-start text-[.8rem]">
             <div className="bg-white rounded-[70%] flex justify-center items-center h-4 w-4 lg:h-3 lg:w-3">
                       <Image height={100} width={200} src={warehouse.src} alt="News icon" className=" w-3" />
                     </div>
              <h2 className="ml-1">Depot</h2>
            </article>
          </section>
          <section>
          <article className="flex text-gray-100 items-start text-[.8rem]">
                <IoTriangle className="text-green-500 text-[.6rem] mix-blend-normal mt-1" />
                <h2 className="ml-1 ">NIPCO</h2>
              </article>
              <p className="text-gray-300 text-[.75rem]">Lagos</p>
          </section>
        </div>
      </div>

      
      <div>
        <Image width={200} height={100} src={graph.src} alt="Stock chart" />
      </div>

   
      <div className="mt-4 text-left">
     <div className="flex justify-between w-full">
                 <section>
                 <h2 className="text-2xl font-bold mt-1 text-white">N714.26</h2>
                 </section>
                 <section >
                 {stats.map((value, index) => (
                     <article
                       key={index}
                       className="flex font-light text-green-500 items-start text-[.72rem]"
                     >
                       {value}
                     </article>
                   ))}
                 </section>
               </div>
             </div>
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
            className={`cursor-pointer text-[.4rem] lg:text-[.65rem] ${
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
