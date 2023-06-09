import React from "react";
import { Link } from "react-router-dom";
import landing from "../assets/landing.svg";
import Logo from "../components/Logo";

const Landing = () => {
  return (
    <div className=" bg-[#194058] h-screen px-8 ">
      <div className="pt-10">
        <Logo/>
      </div>
      {/* flex flex-col-reverse md:flex-row items-center */}
      <div className="pt-20 md:pt-40 grid grid-cols-1 md:grid-cols-12 md:items-center gap-4">
        <div className="col-span-6 order-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#d3f1ff]">
            Job Application <span className="text-[#926b00]">Tracking</span> App
          </h1>
          <p className="text-[#d3f1ff] text-base font-normal w-full lg:w-2/3 leading-6 mt-4">
            Role Scout is an innovative job tracking app designed to empower
            individuals on their professional journey. Whether you're a seasoned
            professional seeking new opportunities or a fresh graduate taking
            your first steps into the workforce, Role Scout is here to guide you
            every step of the way.
          </p>
          <Link to="/login">
            <button className="mt-5 mb-5 px-3 py-2  bg-[#926b00] rounded font-medium text-xl text-[#d3f1ff]">
              Login / Register
            </button>
          </Link>
        </div>
        <div className="col-span-6 w-2/3 sm:w-full lg:w-2/3 order-1 md:order-2">
          <img src={landing} alt="tracking" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
