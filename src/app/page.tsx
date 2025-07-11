import Sidebar from "./components/SideBar";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
import Done from "./components/Done";

export default function Home() {
  const cards = [
    {
      title: "Retail product",
      description:
        "View price quotes and track performance of a product ",
      description2:
        "throughout the week",
      card: Card1,
    },
    {
      title: "Retail product & news",
      description:
        "View price quotes, track performance and latest news",
      description2:
        "of a product throughout the week",
      card: Card2,
    },
    {
      title: "Watchlist",
      description:
        "View price quotes and track performance of watchlist ",
      description2:
        "throughout the week",
      card: Card3,
    },
    {
      title: "Watchlist & news",
      description:
        "View price quotes, track performance and latest news ",
      description2:
        "of watchlist throughout the week",
      card: Card4,
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#040404]">
      {/* Sidebar (fixed width) */}
      <aside className="w-[15rem]">
        <Sidebar />
      </aside>

      {/* Main & Done container */}
      <div className="flex w-full">
        {/* Main content: 65% */}
        <main className="w-[65%] p-6 ml-[2rem]">
          <div id="cards" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <div
                key={i}
                className="bg-[#404040] flex flex-col items-center rounded-xl shadow-md p-6 text-[#f5f5f5]"
              >
                <div>
                  <h2 className="lg:text-md font-semibold text-[.9rem]">{card.title}</h2>
                  <div className="lg:text-[.706rem] text-[.45rem]  font-light mb-7 whitespace-nowrap
">
                  <p>
                    {card.description}
                  </p>
                  <p >
                    {card.description2}
                  </p>
                  </div>
                </div>
                <div>
                <card.card />
                </div>
                <div className="flex mt-[2rem]">
                  <div className=" bg-[#040404] border-[.1rem] border-gray-300 rounded-[50%] flex  justify-center items-center w-7 h-7 ">S</div>
                  <div className=" rounded-[50%] border-[.1rem] border-gray-300 flex  justify-center items-center w-7 h-7">M</div>
                  <div className=" rounded-[50%] border-[.1rem] border-gray-300 flex  justify-center items-center w-7 h-7">L</div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Done component: 30% */}
        <div className="w-[35%] p-6">
          <Done />
        </div>
      </div>
    </div>
  );
}
