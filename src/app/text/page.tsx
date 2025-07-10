"use client";

import Image from "next/image";

import warehouse from "../assets/img/warehouse.png";

const Card2 = () => {
  return (
    <div className="bg-[#040404] p-2 rounded-xl shadow-md text-center w-[14rem]">
      <div className="flex items-center">
        <div className="bg-white rounded-full flex justify-center items-center h-3 w-3">
          <Image
            height={100}
            width={200}
            src={warehouse.src}
            alt="Depot icon"
            className="w-2 h-2 object-contain"
          />
        </div>
        <p className="text-white text-[.45rem] mt-[.1rem] pl-1 mb-[.5rem]">Depot</p>
      </div>
    </div>
  );
};

export default Card2;
