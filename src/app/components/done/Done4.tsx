"use client";

import LeftCard from "./Done4L"

const Card2 = () => {
 

  const airport = [
    { name: "Murtala Muhammed I...", flight: "12,489 flights" },
    { name: "Nnamdi Azikiwe Inter...", flight: "934,483 flights" },
    { name: "Mallam Aminu Kano I...", flight: "10,722 flights" },
    { name: "Port Harcourt Interna...", flight: "9,823 flights" },
    { name: "Akanu Ibiam Internati...", flight: "12,489 flights" },
    { name: "Muritala Mohamm...", flight: "89 flights" },
  ];

  return (
    <div className="flex items-stretch">
      {/* Left card */}
      <LeftCard/>

      {/* Right card */}
      <div className="bg-[#404040] px-1 lg:px-0 lg:p-2 rounded-e-xl text-white text-[.13rem] lg:text-[.5rem] lg:space-y-2 overflow-y-auto lg:max-h-[16rem] w-[40%]">
        {airport.map((item, index) => (
          <div key={index} className="flex justify-between items-start mt-1 lg:mt-3 lg:space-y-1">
            <div className="flex-1 pr-2">
              <p className="font-semibold">{item.name}</p>
            </div>
            <div className="w-[4rem]">
              <p className="text-[#a3a3a3] whitespace-nowrap">{item.flight}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card2;
