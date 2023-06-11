import React from "react";
import { BsFillCalendarCheckFill, BsBriefcaseFill } from "react-icons/bs";
import {FaBug} from 'react-icons/fa'

const Home = () => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="md:col-span-4 bg-white p-3 rounded bg-[--bg-card]">
        <div className="flex justify-between mb-10">
          <span className="text-4xl font-semibold text-[--text-active]">
            24
          </span>
          <div className="bg-[--bg-icon] rounded-full flex justify-center items-center p-3">
            <BsBriefcaseFill className="text-lg text-[--card-title]" />
          </div>
        </div>
        <p className="text-[--text-inactive]">Pending Application</p>
      </div>
      <div className=" md:col-span-4 bg-gradient-to-r from-[--bg-icon] to-[--card-hover] p-3 rounded">
        <div className="flex justify-between mb-10">
          <span className="text-4xl font-semibold text-[--text-active]">
            24
          </span>
          <div className="rounded-full flex justify-center items-center p-3 bg-[--bg-icon]">
            <BsFillCalendarCheckFill className="text-lg text-[--card-title]"/>
          </div>
        </div>
        <p className="text-[--text-inactive]">Interview Schedule</p>
      </div>
      <div className=" md:col-span-4 bg-white p-3 rounded bg-[--bg-card]">
        <div className="flex justify-between mb-10">
          <span className="text-4xl font-semibold text-[--text-active]">
            24
          </span>
          <div className="bg-[--bg-icon] rounded-full flex justify-center items-center p-3">
            <FaBug className="text-[--card-title] text-lg"/>
          </div>
        </div>
        <p className="text-[--text-inactive]">Pending Application</p>
      </div>
    </div>
  );
};

export default Home;
