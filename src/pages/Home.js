import React from "react";
import { BsFillCalendarCheckFill, BsBriefcaseFill } from "react-icons/bs";
import { FaBug } from "react-icons/fa";
import StatCard from "../components/StatCard";
import { getStats } from "../features/allJob/allJobSlice";
import { useDispatch, useSelector } from "react-redux";



const Home = () => {
  const dispatch = useDispatch();
  const {defaultStats}  = useSelector((store)=>store.allJobs)

  const dashboardStat = [
    {
      title: "Pending Application",
      icon: <BsBriefcaseFill className="text-lg text-[--card-title]" />,
      value: defaultStats?.pending,
    },
    {
      title: "Interview Application",
      icon: <BsFillCalendarCheckFill className="text-lg text-[--card-title]" />,
      value: defaultStats?.interview,
    },
    {
      title: "Declined Application",
      icon: <FaBug className="text-[--card-title] text-lg" />,
      value: defaultStats?.declined,
    },
  ];
  React.useEffect(() => {
    dispatch(getStats());
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
      {dashboardStat?.map((item, index) => {
        return <StatCard {...item} key={`${item.title}-${index}`} />;
      })}
    </div>
  );
};

export default Home;
