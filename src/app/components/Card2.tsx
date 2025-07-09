import { IoTriangle } from "react-icons/io5";
import graph from "../assets/img/_Stocks Line Chart.png"

const Card2 = () => {
 
  return (
    <div className="bg-[#040404] p-8 rounded-xl shadow-md text-center  w-[300px]">
        <div className="flex  mb-4">
          <div className="flex justify-between w-full">
            <section>
              <article className="flex text-gray-100 items-start">
                <IoTriangle className="text-green-500 text-[.7rem] mix-blend-normal mt-2" />
                <h2 className="ml-1 ">PMS</h2>
              </article>
              
            </section>
            <section >
            <p>N714.26</p>
            </section>
          </div>
        </div>
        
        <div>
            <img src={graph.src} alt="" />
        </div>
        <h2 className="text-4xl font-bold mt-[2rem] text-white">N714.26</h2>
        
      </div>
  )
}

export default Card2