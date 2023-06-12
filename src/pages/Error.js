import React from "react";
import errorSvg from "../assets/error.svg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <React.Fragment>
      <div className="w-screen h-screen bg-[--text-inactive] flex flex-col items-center justify-center">
        <img src={errorSvg} alt="error" className="w-1/2 md:w-1/3 mb-10" />
        <Link to="/">
          <button className="bg-[--bg-main] text-[--text-active] p-3 rounded">Return home</button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Error;
