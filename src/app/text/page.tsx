"use client";
import Image from "next/image";
import { IoTriangle } from "react-icons/io5";
import warehouse from "../assets/img/warehouse.png";


  return (
    <div className="bg-[#040404] p-2 rounded-xl shadow-md text-center w-[14rem]">
  
      <div className="flex">
        <div className="bg-white rounded-[70%] flex justify-center items-center h-3 w-3">
          <Image height={100} width={200} src={warehouse.src} alt="News icon" className="w-2" />
        </div>
        <p className="text-white text-[.45rem] mt-[.1rem] pl-1 mb-[.5rem]">Depot</p>
      </div>

      
      

     

 
     
    </div>
  );
};

export default Card2;
