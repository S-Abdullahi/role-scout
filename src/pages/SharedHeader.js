import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxPerson } from "react-icons/rx";
import { HiMenuAlt1 } from "react-icons/hi";
import SideBar from "../components/SideBar";
import { useMainContext } from "../context/mainContext";

const SharedHeader = () => {
  const { openSideBar, openSideSlider } = useMainContext();
  return (
    <React.Fragment>
      <div className="flex items-center justify-between bg-[--bg-main] text-[--text-active] px-2 col-start-1 col-end-[-1] ">
        <div>
          <HiMenuAlt1 className="text-4xl" onClick={() => openSideSlider()} />
        </div>
        <div>
          <Logo />
        </div>
        <div>
          <button className="flex items-center gap-2 bg-[--bg-icon] rounded px-3 py-2">
            <RxPerson /> Test User <IoMdArrowDropdown />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 bg-slate-300 h-screen">
        <SideBar />
        {/* <SideBar /> */}
        <div
          className={`p-4 ${
            openSideBar ? "translate-x-0" : "-translate-x-[200%]"
          } transition ease-linear duration-300`}
        >
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SharedHeader;
