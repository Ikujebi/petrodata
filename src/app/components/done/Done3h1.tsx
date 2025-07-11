"use client";

import Image from "next/image";
import news from "../../assets/img/News widget.png"
import miranda from "../../assets/img/Image (4).png";
import flight from "../../assets/img/Flight icon.png";

const Card2 = () => {
  const imageTexts = [
    "PMS - Aug 12-17",
    "DPK - Aug 12-17",
    "AGO - Aug 12-17",
    "ICE - Aug 12-17",
  ];

  return (
    <div className="flex items-stretch gap-2 w-full">
    <div className="bg-[#040404] p-2 rounded-xl shadow-md text-center w-[60%] h-[10rem]">
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
        <p className="text-white text-[.228rem] lg:text-[.45rem] mt-[.1rem] pl-1">
          Reports - week 31
        </p>
      </div>

      
      <section className="grid grid-cols-2 gap-2">
        {imageTexts.map((text, index) => (
          <div key={index} className="text-white text-[.15rem] lg:text-[.5rem]">
            <Image
              height={100}
              width={200}
              src={miranda.src}
              alt={text}
              className="w-4 lg:w-full h-[2rem] object-contain mb-1"
            />
            <p className="text-center text-[a3a3a3]">{text}</p>
          </div>
        ))}
      </section>
    </div>
    <div
  id="imgcomp"
  className="rounded-xl text-center w-[34%] flex flex-col items-center"
>
  <Image
    height={300}
    width={200}
    src={news.src}
    alt="News"
    className="object-contain w-full h-[7rem] lg:h-auto"
  />
</div>
    </div>
  );
};

export default Card2;
