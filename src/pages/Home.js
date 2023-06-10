import React from "react";

const Home = () => {
  return (
      <div className=" flex w-full bg-red-200">
        <div className="  md:col-span-4">
          <div className="flex">
            <span>24</span>
            <span>icon</span>
          </div>
          <p>Pending Application</p>
        </div>
        <div className="bg-white md:col-span-4">
          <div className="flex">
            <span>24</span>
            <span>icon</span>
          </div>
          <p>Interview Schedule</p>
        </div>
        <div className="bg-white md:col-span-4">
          <div className="flex">
            <span>24</span>
            <span>icon</span>
          </div>
          <p>Pending Application</p>
        </div>
      </div>
  );
};

export default Home;
