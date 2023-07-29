import React from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../features/allJob/allJobSlice";

const Pagination = () => {
  const { totalJobs, noOfPages, page } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();
  const pageArray = Array.from({ length: noOfPages }, (_, index) => index + 1);

  const nextPage = ()=> {
    let newPage = page + 1;
    if (newPage > noOfPages) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  }

  const previousPage = ()=> {
    let prevPage = page - 1;
    if (prevPage < 1) {
      prevPage = noOfPages;
    }
    dispatch(changePage(prevPage));
  }
  console.log(page)
  return (
    <div className="flex items-center gap-5">
      <button className="flex items-center gap-1 bg-[--bg-card] p-3 rounded text-[--text-active] hover:bg-[--text-inactive] hover:text-[--bg-main] transition-all ease-linear duration-300" onClick={()=>previousPage()}>
        <MdKeyboardDoubleArrowLeft /> Prev
      </button>
      <div className="flex gap-4">
        {pageArray.map((item, index) => {
          return (
            <button
              className={`${
                page === item ? "bg-[--bg-card] text-white p-2 rounded border" : ''
              }`}
              key={item}
              onClick={() => dispatch(changePage( item ))}
            >
              {item}
            </button>
          );
        })}
      </div>
      <button className="flex items-center gap-1 bg-[--bg-card] p-3 rounded text-[--text-active] hover:bg-[--text-inactive] hover:text-[--bg-main] transition-all ease-linear duration-300" onClick={()=>nextPage()}>
        Next <MdKeyboardDoubleArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
