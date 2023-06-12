import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { CgToolbox } from "react-icons/cg";

const SingleJobCard = () => {
  return (
    <div className="bg-[--bg-card] rounded py-5 shadow-md">
      <div className="pb-3 mb-3 border-b-[0.5px] border-[--bg-main]">
        <div className="flex px-4 gap-10">
          <div className="bg-[--bg-main] text-[--text-inactive] w-10 flex items-center justify-center rounded text-2xl font-bold">B</div>
          <div>
            <p className="text-[--text-active]">Civil Engineer</p>
            <p className="text-sm text-[--text-inactive]">Bechtelar-Bednar</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-4">
        <div className="flex items-center gap-3 text-[--text-active]">
          <BsFillSendFill className="text-[--card-hover]" />
          <span>kiamba</span>
        </div>
        <div className="flex items-center gap-3 text-[--text-active]">
          <FaCalendarAlt className="text-[--card-hover]" />
          <span>Dec 27th, 2021</span>
        </div>
        <div className="flex items-center gap-3 text-[--text-active]">
          <CgToolbox className="text-[--card-hover]" />
          <span>Internship</span>
        </div>
        <div>
          <span className="bg-red-300 px-3 py-1 rounded">Declined</span>
        </div>
        <div className="flex gap-4 mt-4">
          <button className="bg-[--bg-main] px-3 py-1 rounded text-[--text-active]">Edit</button>
          <button className="bg-[--bg-icon] px-3 py-1 rounded text-[--text-active]">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default SingleJobCard;
