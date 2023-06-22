import React, { useEffect } from "react";
import SingleJobCard from "../components/SingleJobCard";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../features/allJob/allJobSlice";
import Loading from "../components/Loading";

const AllJobs = () => {
  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  const { isLoading, jobs } = useSelector((store) => store.allJobs);
  console.log(jobs);
  const dispatch = useDispatch();

  if(isLoading){
    return <Loading/>
  }

  return (
    <React.Fragment>
      <div className="bg-[--bg-card] rounded px-4 py-10  lg:p-10">
        <h2 className="text-2xl mb-4">Search Job</h2>
        <form className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col">
            <label className="mb-1">Search</label>
            <input
              type="text"
              name="name"
              className="rounded h-8 focus:outline-none px-3 focus:border focus:border-[--bg-icon]"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Status</label>
            <select className="rounded h-8 focus:outline-none px-3 cursor-pointer">
              <option>all</option>
              <option>interview</option>
              <option>pending</option>
              <option>declined</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Type</label>
            <select className="rounded h-8 focus:outline-none px-3 cursor-pointer">
              <option>all</option>
              <option>full-time</option>
              <option>Part-time</option>
              <option>remote</option>
              <option>Internship</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Sort</label>
            <select className="rounded  h-8 focus:outline-none focus:border focus:border-[--bg-icon] px-3 cursor-pointer">
              <option>latest</option>
              <option>oldest</option>
              <option>a-z</option>
              <option>z-a</option>
            </select>
          </div>
          <button className="bg-[--bg-icon] rounded text-[--text-active] mt-7 h-8">
            Clear Filters
          </button>
        </form>
      </div>
      <div className="text-2xl mt-10 text-[--text-active]">1000 Jobs Found</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {jobs?.map((job, index) => {
          const { _id, status, position, jobType, jobLocation, company } = job;
          console.log(job);
          return <SingleJobCard key={index} {...job} />;
        })}
      </div>
      <div className="flex justify-center mt-10 mb-3">
        <Pagination />
      </div>
    </React.Fragment>
  );
};

export default AllJobs;
