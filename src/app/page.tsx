"use client";
import Sidebar from "./components/SideBar";
import Done from "./components/Done";
import { useMainContent } from "./hooks/useMainContent"; // adjust path if needed

export default function Home() {
  const { activeItem, setActiveItem, renderContent } = useMainContent();

  return (
    <div className="flex min-h-screen bg-[#040404]">
      <aside className="w-[15rem]">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      </aside>

      <div className="flex w-full">
        <main className="w-[65%] p-6 ml-[2rem]">
          {renderContent()}
        </main>

        <div className="w-[35%] p-6">
          <Done />
        </div>
      </div>
    </div>
  );
}
