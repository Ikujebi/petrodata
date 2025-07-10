"use client";

import { ReactNode } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { SlPlane } from "react-icons/sl";
import { LuWarehouse } from "react-icons/lu";
import { LuNewspaper } from "react-icons/lu";
import { usePathname,  } from "next/navigation";
import { LuTag } from "react-icons/lu";
import Link from "next/link";

import LogoutButton from "./LogoutButton";

interface NavItem {
  name: string;
  icon: ReactNode;
  link: string;
  spacing?: boolean;
  subItems?: NavItem[];
}

const Sidebar: React.FC = () => {
  // const router = useRouter();
  const pathname = usePathname();

  const navItems: NavItem[] = [
    {
      name: "Product retail price",
      icon: <LuTag />,
      link: "/dashboard/details",
    },
    {
      name: "Flight widget",
      icon: <SlPlane />,
      link: "/dashboard/details/clockins",
    },
    {
      name: "Depot widget",
      icon: <LuWarehouse />,
      link: "/dashboard/details/profile",
    },
    {
      name: "News widget",
      icon: <LuNewspaper />,
      link: "/dashboard/details/participants",
    },
    {
      name: "Report widget",
      icon: <CiFileOn />,
      link: "/dashboard/details/participantsSelection",
    },
    {
      name: "Exchange rate",
      icon: <FaExchangeAlt />,
      link: "/dashboard/details/instructors",
    },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-[15rem] border-r  bg-[#040404] px-1 ">
      <div className="flex flex-wrap pl-1 gap-4  items-center ">
        
        <div className="flex mt-[1.5rem] items-center gap-2 rounded-xl border bg-gray-600 px-3 py-1 w-[90%] max-w-md">
          <CiSearch className="text-gray-500 text-lg" />
          <input
            type="search"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-full text-sm text-[f5f5f5] placeholder-gray-500 h-[1.7rem]"
          />
        </div>

        {/* <div
          id="closeSide"
          className="md:block xl:block lg:block 2xl:block hidden"
        >
          <p className="pl-2"> &larr;</p>
          <span>close</span>
        </div> */}
      </div>

      <div className="flex flex-col justify-between h-full pt-[1.5rem]">
        <ul className=" space-y-1 px-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.link} replace>
                <div
                  className={`text-sm font-thin flex items-center gap-4 p-2 rounded-lg transition-colors duration-200 cursor-pointer ${
                    pathname === item.link
                      ? "bg-[--green] text-white font-bold"
                      : "text-gray-200 hover:bg-gray-600 hover:text-white hover:w-[92%]"
                  }`}
                >
                  {item.icon}
                  <span className="hidden md:block">{item.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto px-2">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
