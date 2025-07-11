import { IoTriangle } from "react-icons/io5";
import news from "../assets/News Icon.png";
import Image from "next/image";
const Card2 = () => {
  return (
    <div className="bg-[#040404] p-2 rounded-xl shadow-md text-center lg:w-[18.7rem]">
      {[
        {
          name: "PMS",
          full: "Premium Motor Spirit",
          price: "₦714.26",
          change: "+0.09%",
          changeColor: "text-green-500",
          iconColor: "text-green-500",
        },
        {
          name: "AGO",
          full: "Automotive Gas Oil",
          price: "₦1249.06",
          change: "-9.01",
          changeColor: "text-red-500",
          iconColor: "text-red-500",
        },
        {
          name: "ICE",
          full: "ICE Brent Crude",
          price: "₦0.00",
          change: "0.00",
          changeColor: "text-green-500",
          iconColor: "text-green-500",
        },
       
      ].map((fuel, i) => (
        <div key={i} className="flex mb-2 text-[.8rem]">
          <div className="flex justify-between w-full">
            {/* Left Side */}
            <section>
              <article className="flex text-gray-100 items-start">
                <IoTriangle className={`${fuel.iconColor} text-[.6rem] mix-blend-normal mt-1`} />
                <h2 className="ml-1">{fuel.name}</h2>
              </article>
              <article className="font-thin text-white lg:text-[.7rem] text-[.6rem]">
                {fuel.full}
              </article>
            </section>


            <section className="flex flex-col justify-end items-end text-[.6rem] lg:text-[.8rem]">
              <p className="">{fuel.price}</p>
              <p className={`flex font-light ${fuel.changeColor} items-start `}>
                {fuel.change}
              </p>
            </section>
          </div>
          
        </div>
      ))}
        <div className=" text-left">
        <div className="flex items-center gap-2 ">
          <Image height={1000} width={1000} src={news.src} alt="News icon" className="w-3 " />
          <p className="text-[.78rem] text-[#737373]">Vanguard</p>
        </div>

        <h2 id="h1" className="lg:text-[.85rem]  text-[.7rem] font-bold text-white">
          Heirs Energies doubles oil production - Official...
        </h2>
      </div>
    </div>
  );
};

export default Card2;