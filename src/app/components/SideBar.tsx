// components/Sidebar.tsx
"use client";
import { ReactNode } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import { CiFileOn, CiSearch } from "react-icons/ci";
import { SlPlane } from "react-icons/sl";
import { LuWarehouse, LuNewspaper, LuTag } from "react-icons/lu";

interface NavItem {
  name: string;
  icon: ReactNode;
}

interface SidebarProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
}

const navItems: NavItem[] = [
  { name: "Product retail price", icon: <LuTag /> },
  { name: "Flight widget", icon: <SlPlane /> },
  { name: "Depot widget", icon: <LuWarehouse /> },
  { name: "News widget", icon: <LuNewspaper /> },
  { name: "Report widget", icon: <CiFileOn /> },
  { name: "Exchange rate", icon: <FaExchangeAlt /> },
];

const Sidebar: React.FC<SidebarProps> = ({ activeItem, setActiveItem }) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-[15rem] border-r bg-[#040404] px-1">
      <div className="flex flex-wrap pl-1 gap-4 items-center">
        <div className="flex mt-[1.5rem] items-center gap-2 rounded-xl border bg-gray-600 px-3 py-1 w-[90%] max-w-md">
          <CiSearch className="text-[#a3a3a3] text-lg" />
          <input
            type="search"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-full text-sm text-[f5f5f5] placeholder-gray-500 h-[1.7rem]"
          />
        </div>
      </div>

      <ul className="space-y-1 px-2 pt-4">
        {navItems.map((item, index) => (
          <li key={index}>
            <div
              onClick={() => setActiveItem(item.name)}
              className={`text-sm font-thin flex items-center gap-4 p-2 rounded-lg transition-colors duration-200 cursor-pointer ${
                activeItem === item.name
                  ? "bg-[--green] text-white font-bold"
                  : "text-gray-200 hover:bg-gray-600 hover:text-white hover:w-[92%]"
              }`}
            >
              {item.icon}
              <span className="hidden md:block">{item.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
