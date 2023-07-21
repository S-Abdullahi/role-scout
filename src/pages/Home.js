import React, { useState } from "react";
import { BsFillCalendarCheckFill, BsBriefcaseFill } from "react-icons/bs";
import { FaBug } from "react-icons/fa";
import StatCard from "../components/StatCard";
import { getStats } from "../features/allJob/allJobSlice";
import { useDispatch, useSelector } from "react-redux";
import AreaChartDisplay from "../components/AreaChart";
import BarChartDisplay from "../components/BarChart";

const dummyData = [
  {
    date: 'July 2023',
    count: 2
  },
  {
    date: 'August 2023',
    count: 5
  },
  {
    date: 'September 2023',
    count: 1
  },
  {
    date: 'October 2023',
    count: 9
  }
]

const Home = () => {
  const dispatch = useDispatch();
  const { defaultStats, monthlyApplications } = useSelector((store) => store.allJobs);
  const [barChart, setBarChart] = useState(false);

  const dashboardStat = [
    {
      title: "Pending Application",
      icon: <BsBriefcaseFill className="text-lg text-[--card-title]" />,
      value: defaultStats?.pending || 0,
    },
    {
      title: "Interview Application",
      icon: <BsFillCalendarCheckFill className="text-lg text-[--card-title]" />,
      value: defaultStats?.interview || 0,
    },
    {
      title: "Declined Application",
      icon: <FaBug className="text-[--card-title] text-lg" />,
      value: defaultStats?.declined || 0,
    },
  ];
  React.useEffect(() => {
    dispatch(getStats());
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {dashboardStat?.map((item, index) => {
          return <StatCard {...item} key={`${item.title}-${index}`} />;
        })}
      </div>
      <p onClick={() => setBarChart(!barChart)} className="text-3xl text-white text-center my-4 cursor-pointer">
        {barChart ? "Bar Chart" : "Area Chart"}
      </p>
      <div className="w-full h-1/2">{barChart ? <BarChartDisplay data={dummyData}/> : <AreaChartDisplay data={dummyData}/>}</div>
    </>
  );
};

export default Home;
