import warehouse from "../../assets/img/warehouse.png"
import graph from "../../assets/img/_Stocks Line Chart.png";
import news from "../../assets/News Icon.png";
import Image from "next/image";
import { IoTriangle } from "react-icons/io5";

const Card2 = () => {
  return (
    <div className="bg-[#040404] p-2 rounded-xl shadow-md text-center lg:w-[18.7rem]">
      
      <div className="flex mb-4">
        <div className="flex justify-between w-full">
          <section>
            <article className="flex text-gray-100 items-start text-[.8rem]">
             <div className="bg-white rounded-[70%] flex justify-center items-center h-4 w-4 lg:h-3 lg:w-3">
                       <Image height={100} width={200} src={warehouse.src} alt="News icon" className=" w-3" />
                     </div>
              <h2 className="ml-1">Depot</h2>
            </article>
          </section>
          <section>
          <article className="flex text-gray-100 items-start text-[.8rem]">
                <IoTriangle className="text-green-500 text-[.6rem] mix-blend-normal mt-1" />
                <h2 className="ml-1 ">NIPCO</h2>
              </article>
              <p className="text-gray-300 text-[.75rem]">Lagos</p>
          </section>
        </div>
      </div>

      
      <div>
        <Image width={200} height={100} src={graph.src} alt="Stock chart" />
      </div>

   
      <div className="mt-4 text-left">
        <div className="flex items-center gap-2 mb-2">
          <Image width={200} height={100} src={news.src} alt="News icon" className="w-3 mt-1" />
          <p className="text-[.78rem] text-[#737373]">Vanguard</p>
        </div>

        <h2 id="h1" className="lg:text-[.95rem] text-[.7rem] font-bold text-white">
          Heirs Energies doubles oil production - Official...
        </h2>
      </div>
    </div>
  );
};

export default Card2;
