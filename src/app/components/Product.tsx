"use client"; 

import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";

const cards = [
  {
    title: "Retail product",
    description: "View price quotes and track performance of a product ",
    description2: "throughout the week",
    card: Card1,
  },
  {
    title: "Retail product & news",
    description: "View price quotes, track performance and latest news",
    description2: "of a product throughout the week",
    card: Card2,
  },
  {
    title: "Watchlist",
    description: "View price quotes and track performance of watchlist ",
    description2: "throughout the week",
    card: Card3,
  },
  {
    title: "Watchlist & news",
    description: "View price quotes, track performance and latest news ",
    description2: "of watchlist throughout the week",
    card: Card4,
  },
];

export default function CardGrid() {
  return (
    <div id="cards" className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-[#404040] flex flex-col items-center rounded-xl shadow-md p-6 text-[#f5f5f5]"
        >
          <div>
            <h2 className="lg:text-md font-semibold text-[.9rem]">{card.title}</h2>
            <div className="lg:text-[.706rem] text-[.45rem] font-light mb-7 whitespace-nowrap">
              <p>{card.description}</p>
              <p>{card.description2}</p>
            </div>
          </div>
          <div>
            <card.card />
          </div>
          <div className="flex mt-[2rem] gap-2">
            <div className="bg-[#040404] border-[.1rem] border-gray-300 rounded-full flex justify-center items-center w-7 h-7">S</div>
            <div className="border-[.1rem] border-gray-300 rounded-full flex justify-center items-center w-7 h-7">M</div>
            <div className="border-[.1rem] border-gray-300 rounded-full flex justify-center items-center w-7 h-7">L</div>
          </div>
        </div>
      ))}
    </div>
  );
}
