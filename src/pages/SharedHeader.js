import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxPerson } from "react-icons/rx";
import { HiMenuAlt1 } from "react-icons/hi";
import SideBar from "../components/SideBar";
import MobileSideBar from "../components/MobileSideBar";
import { useMainContext } from "../context/mainContext";
import { useSelector } from "react-redux";
import { getFirstName } from "../utils/helper";
import { logOut } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

const SharedHeader = () => {
  const { openSideBar, openSideSlider } = useMainContext();
  const [isOpenLogout, setIsOpenLogout] = useState(false);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div className="">
        <div className="flex items-center justify-between bg-[--bg-main] text-[--text-active] px-4 md:px-8 py-3 col-start-1 col-end-[-1]">
          <div>
            <HiMenuAlt1
              className="text-4xl cursor-pointer"
              onClick={() => openSideSlider()}
            />
          </div>
          <div>
            {/* <Logo /> */}
            <p className="text-lg md:text-xl">Dashboard</p>
          </div>
          <div className="flex flex-col gap-2 relative">
            <Link>
              <button
                className="flex items-center gap-2 bg-[--bg-icon] rounded px-3 py-2"
                onClick={() => {
                  setIsOpenLogout(!isOpenLogout);
                }}
              >
                <RxPerson className="hidden md:block" />{" "}
                {getFirstName(user?.name)} <IoMdArrowDropdown />
              </button>
            </Link>
            {isOpenLogout && (
              <button
                className="bg-[--bg-icon] rounded px-3 py-2 absolute top-12 w-full"
                onClick={() => dispatch(logOut())}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 bg-slate-300 h-screen">
        <div className="absolute">
          <MobileSideBar />
        </div>
        <SideBar />
        {/* <SideBar /> */}
        <div
          className={`p-4 bg-[--bg-main] border-t col-span-12 ${
            openSideBar ? "md:col-span-10" : "md:col-span-12"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SharedHeader;
