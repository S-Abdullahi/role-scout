import React from "react";

const StatCard = ({title, icon, value}) => {
  return (
    <div className="md:col-span-4 p-3 rounded bg-[--bg-card]">
      <div className="flex justify-between mb-10">
        <span className="text-4xl font-semibold text-[--text-active]">{value}</span>
        <div className="bg-[--bg-icon] rounded-full flex justify-center items-center p-3">
            {icon}
          {/* <BsBriefcaseFill className="text-lg text-[--card-title]" /> */}
        </div>
      </div>
      <p className="text-[--text-inactive]">{title}</p>
    </div>
  );
};

export default StatCard;
