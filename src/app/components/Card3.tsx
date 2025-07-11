import { IoTriangle } from "react-icons/io5";

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
        {
          name: "DPK",
          full: "Dual Purpose Kerosene",
          price: "₦1088.92",
          change: "-50.90",
          changeColor: "text-red-500",
          iconColor: "text-red-500",
        },
      ].map((fuel, i) => (
        <div key={i} className="flex mb-2 lg:text-[.8rem] ">
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

            {/* Right Side (Bottom Aligned) */}
            <section className="flex flex-col justify-end items-end text-[.6rem] lg:text-[.8rem]">
              <p>{fuel.price}</p>
              <p className={`flex font-light ${fuel.changeColor} items-start  lg:text-[.9rem]`}>
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