import Image from "next/image";
import { IoTriangle } from "react-icons/io5";
import chart1 from "../../assets/img/Stroke1.png"
import chart2 from "../../assets/img/Stroke2.png"
import chart3 from "../../assets/img/Stroke3.png"
import chart4 from "../../assets/img/Stroke4.png"
const Card2 = () => {
  return (
    <div className="bg-[#040404] p-2 rounded-xl shadow-md text-center w-full">
      {[
        {
          name: "PMS",
          full: "Premium Motor Spirit",
          price: "₦714.26",
          change: "+0.09%",
          changeColor: "text-green-500",
          iconColor: "text-green-500",
          image: chart1
        },
        {
          name: "AGO",
          full: "Automotive Gas Oil",
          price: "₦1249.06",
          change: "-9.01",
          changeColor: "text-red-500",
          iconColor: "text-red-500",
          image: chart2
        },
        {
          name: "ICE",
          full: "ICE Brent Crude",
          price: "₦0.00",
          change: "0.00",
          changeColor: "text-green-500",
          iconColor: "text-green-500",
          image: chart3
        },
        {
          name: "DPK",
          full: "Dual Purpose Kerosene",
          price: "₦1088.92",
          change: "-50.90",
          changeColor: "text-red-500",
          iconColor: "text-red-500",
          image: chart4
        },
      ].map((fuel, i) => (
        <div key={i} className="flex mb-2 text-[.4rem] lg:text-[.5rem]">
          <div className="flex justify-between w-full">
           
            <section>
              <article className="flex text-gray-100 items-start">
                <IoTriangle className={`${fuel.iconColor} text-[.3rem] mix-blend-normal mt-1`} />
                <h2 className="ml-1">{fuel.name}</h2>
              </article>
              <article className="font-thin text-white text-[.15rem] lg:text-[.4rem]">
                {fuel.full}
              </article>
            </section>

            <div className="mx-2 mt-1" >
            <Image src={fuel.image} alt="chart" width={50} height={30} />
          </div>
            
            <section className="flex flex-col justify-end items-end text-[.3rem] lg:text-[.5rem]">
              <p className="text-white ">{fuel.price}</p>
              <p className={`flex font-light ${fuel.changeColor} items-start `}>
                {fuel.change}
              </p>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card2;