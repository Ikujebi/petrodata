import { IoTriangle } from "react-icons/io5";
import graph from "../assets/img/_Stocks Line Chart.png"
import Image from "next/image";
const Card1 = () => {
    const stats = ["+0.37", "+0.09%"];
  return (
    <div className="bg-[#040404] p-2 rounded-xl shadow-md text-center  lg:w-[18.7rem]">
        <div className="flex  mb-4">
          <div className="flex justify-between w-full">
            <section>
              <article className="flex text-gray-100 items-start text-[.8rem]">
                <IoTriangle className="text-green-500 text-[.6rem] mix-blend-normal mt-1" />
                <h2 className="ml-1 ">PMS</h2>
              </article>
              <article className="font-thin text-white text-[.6rem]  lg:text-[.7rem]">
                Premium Motor Spirit
              </article>
            </section>
            <section >
            {stats.map((value, index) => (
                <article
                  key={index}
                  className="flex font-light text-green-500 items-start text-[.8rem]"
                >
                  {value}
                </article>
              ))}
            </section>
          </div>
        </div>
        <div>
            <Image width={200} height={100} src={graph.src} alt="" />
        </div>
        <h2 className="text-4xl font-bold mt-[2rem] text-white">N714.26</h2>
        
      </div>
  )
}

export default Card1