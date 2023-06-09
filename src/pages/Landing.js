import React from "react";
import { Link } from "react-router-dom";
import landing from '../assets/landing.svg'

const Landing = () => {
  return (
    <div className=" bg-[#194058] h-screen px-8 ">
      <div className="pt-10 text-3xl font-bold text-[#d3f1ff]">
        {" "}
        <span className="text-[#926b00]">R</span>ole
        <span className="text-[#926b00]">S</span>cout
      </div>
      <div className="pt-20 md:pt-40 flex flex-col-reverse md:flex-row items-center gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#d3f1ff]">
            Job Application <span className="text-[#926b00]">Tracking</span> App
          </h1>
          <p className="text-[#d3f1ff] w-full lg:w-2/3 leading-6 mt-4">
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post6ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <Link to="dashboard">
            <button className="mt-5 px-2 py-1  bg-[#926b00] rounded-sm font-medium text-[#d3f1ff]">
              Login / Register
            </button>
          </Link>
        </div>
        <div className="">
          <img src={landing} alt="tracking"/>
        </div>
      </div>
    </div>
  );
};

export default Landing;
