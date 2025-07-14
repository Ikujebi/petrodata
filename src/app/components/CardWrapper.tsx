// components/CardWrapper.tsx
"use client";
import { ReactNode } from "react";

interface CardWrapperProps {
  title: string;
  description: string;
  description2?: string;
  card: ReactNode;
}

const CardWrapper = ({ title, description, description2, card }: CardWrapperProps) => {
  return (
    <div className="bg-[#404040]  rounded-xl shadow-md p-6 text-[#f5f5f5] w-[15rem]">
      <div>
        <h2 className="lg:text-md font-semibold text-[.9rem]">{title}</h2>
        <div className="lg:text-[.706rem] text-[.45rem] font-light mb-7 whitespace-nowrap">
          <p>{description}</p>
          {description2 && <p>{description2}</p>}
        </div>
      </div>
      <div className="mx-auto">{card}</div>
      <div className="flex justify-center mt-[2rem] gap-2">
        <div className="bg-[#040404] border-[.1rem] border-gray-300 rounded-full flex justify-center items-center w-7 h-7">S</div>
        <div className="border-[.1rem] border-gray-300 rounded-full flex justify-center items-center w-7 h-7">M</div>
        <div className="border-[.1rem] border-gray-300 rounded-full flex justify-center items-center w-7 h-7">L</div>
      </div>
    </div>
  );
};

export default CardWrapper;
