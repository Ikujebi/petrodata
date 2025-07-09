import Sidebar from "./components/SideBar";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
export default function Home() {

  const cards = [
    { title: "Retail product", description: "View price quotes and track performance of a product throughout the week" , card: Card1},
    { title: "Retail product & news", description: "View price quotes, track performance and latest news of a product throughout the week" , card: Card2},
    { title: "Watchlist", description: "View price quotes and track performance of watchlist throughout the week", card: Card3 },
    { title: "Watchlist & news", description: "View price quotes, track performance and latest news of watchlist throughout the week", card: Card4 },
  ];
  return (
    <div className="flex min-h-screen bg-[#040404]">
      
      <aside className="w-[16rem] ">
        <Sidebar />
      </aside>

      {/* Main content on the right */}
      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        {cards.map((card, i) => (
            <div
              key={i}
              className="bg-[#404040] flex flex-col items-center rounded-xl shadow-md p-6 text-[#f5f5f5]"
            >
              <div>
              <h2 className="text-lg font-semibold">{card.title}</h2>
           
              <p className="text-[.706rem] font-light mb-7">{card.description}</p>
              </div>
              <card.card/>
            </div>
            
          ))}
        </div>
      </main>
    </div>
  );
}