import React from "react";
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
  return (
    <div
      className={`bg-red-300 px-8 py-8 col-span-2 ${
        openSideBar
          ? "translate-x-0 transition-all duration-300"
          : "-translate-x-full transition-all duration-300"
      } transition ease-linear duration-300`}
    >
      <Logo />
      <div>
        <ul>
          {sideBarData.map((data) => {
            const { icon, title, url } = data;
            return (
              <li key={title} className="mb-5">
                <Link to={url} className="flex items-center gap-2 text-xl">
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
