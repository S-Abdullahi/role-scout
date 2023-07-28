import React from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";

const Pagination = () => {
  const {totalJobs, noOfPages} = useSelector((store)=>store.allJobs)
  return (
    <div className="flex items-center gap-5">
      <button className="flex items-center gap-1 bg-[--bg-card] p-3 rounded text-[--text-active] hover:bg-[--text-inactive] hover:text-[--bg-main] transition-all ease-linear duration-300">
        <MdKeyboardDoubleArrowLeft /> Prev
      </button>
      <div className="flex">
        <button className="p-3 bg-[--text-inactive] hover:rounded hover:bg-[--bg-card] hover:text-[--text-inactive] transition-all ease-linear duration-300">
          1
        </button>
      </div>
      <button className="flex items-center gap-1 bg-[--bg-card] p-3 rounded text-[--text-active] hover:bg-[--text-inactive] hover:text-[--bg-main] transition-all ease-linear duration-300">
        Next <MdKeyboardDoubleArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
