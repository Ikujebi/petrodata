import Sidebar from "./components/SideBar";
import Done from "./components/Done";
import Product from "./components/Product";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#040404]">
      <aside className="w-[15rem]">
        <Sidebar />
      </aside>

      <div className="flex w-full">
        {/* Main content: 65% */}
        <main className="w-[65%] p-6 ml-[2rem]">
          <Product />
        </main>

        {/* Done component: 35% */}
        <div className="w-[35%] p-6">
          <Done />
        </div>
      </div>
    </div>
  );
}
