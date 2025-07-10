import { IoTriangle } from "react-icons/io5";
import graph from "../assets/img/_Stocks Line Chart.png";
import news from "../assets/News Icon.png";

const Card2 = () => {
  return (
    <div className="bg-[#040404] p-8 rounded-xl shadow-md text-center w-[300px]">
      {/* Top section with title and price */}
      <div className="flex mb-4">
        <div className="flex justify-between w-full">
          <section>
            <article className="flex text-gray-100 items-start">
              <IoTriangle className="text-green-500 text-[.7rem] mix-blend-normal mt-2" />
              <h2 className="ml-1">PMS</h2>
            </article>
          </section>
          <section>
            <p>N714.26</p>
          </section>
        </div>
      </div>

      {/* Graph Image */}
      <div>
        <img src={graph.src} alt="Stock chart" />
      </div>

      {/* News source and headline */}
      <div className="mt-4 text-left">
        <div className="flex items-center gap-2 mb-2">
          <img src={news.src} alt="News icon" className="w-3 mt-1" />
          <p className="text-[.78rem] text-[#737373]">Vanguard</p>
        </div>

        <h2 id="h1" className="text- font-bold text-white">
          Heirs Energies doubles oil production - Official...
        </h2>
      </div>
    </div>
  );
};

export default Card2;
