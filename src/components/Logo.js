import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="p-2 bg-[--bg-icon] rounded flex flex-col items-center">
        <span className="text-4xl shadow-md font-bold text-[--text-active]">
          RS
        </span>
        <div className="text-[--text-active] font-bold">role scout</div>
      </div>
    </div>
  );
};

export default Logo;
