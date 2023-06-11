import React, {useState} from "react";
import Logo from "./Logo";
import { ImStatsBars, ImProfile } from "react-icons/im";
import { MdOutlineQueryStats } from "react-icons/md";
import { BsBuildingAdd } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useMainContext } from "../context/mainContext";

const sideBarData = [
  {
    icon: <ImStatsBars />,
    title: "Stats",
    url: "/dashboard",
  },
  {
    icon: <MdOutlineQueryStats />,
    title: "All Jobs",
    url: "/all-jobs",
  },
  {
    icon: <BsBuildingAdd />,
    title: "Add Job",
    url: "/add-jobs",
  },
  {
    icon: <ImProfile />,
    title: "profile",
    url: "/profile",
  },
];

const SideBar = () => {
  const { openSideBar } = useMainContext();
  const [item, setItem] = useState('Stats')
  return (
    <div
      className={`bg-[--bg-main] pl-3 md:pl-8 py-8 ${
        openSideBar
          ? " transition-all duration-300 col-span-2"
          : " transition-all duration-300 hidden"
      } transition ease-linear duration-300`}
    >
      {/* <Logo /> */}
      <div>
        <ul>
          {sideBarData.map((data, index) => {
            const { icon, title, url } = data;
            return (
              <li
                key={title}
                onClick={()=>setItem(title)}
                className={`mb-5 p-2 text-[--text-active] ${item === title && 'bg-[--bg-card] text-[--bg-main]'} hover:bg-[--bg-card] hover:text-[--bg-main] transition-all ease-linear duration-300`}
              >
                <Link to={url} className="flex items-center gap-2 text-lg">
                  {icon} {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
