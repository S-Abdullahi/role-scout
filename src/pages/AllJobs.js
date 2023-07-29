import React, { useEffect } from "react";
import SingleJobCard from "../components/SingleJobCard";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../features/allJob/allJobSlice";
import Loading from "../components/Loading";
import {
  showLoading,
  hideLoading,
  searchState,
  clearFilter
} from "../features/allJob/allJobSlice";
import FormRow from "../components/FormRow";
import FormSelect from "../components/FormSelect";

const AllJobs = () => {
 

  const {
    isLoading,
    jobs,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    page
  } = useSelector((store) => store.allJobs);
  const { statusOptions, jobTypeOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  function handleSearch(e) {
    dispatch(searchState({ name: e.target.name, value: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(clearFilter())
  }

  useEffect(() => {
    dispatch(getAllJobs());
  }, [page, search, searchType, searchStatus, sort]);

  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center">
  //       <Loading />
  //     </div>
  //   );
  // }

  // if (jobs?.length < 1) {
  //   return (
  //     <div>
  //       <p>No job</p>
  //     </div>
  //   );
  // }

  return (
    <React.Fragment>
      <div className="bg-[--bg-card] rounded px-4 py-10  lg:p-10">
        <h2 className="text-2xl mb-4">Search Job</h2>
        <form className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <FormRow
            type="text"
            name="search"
            value={search}
            labelText="Search"
            handleChange={handleSearch}
          />
          <FormSelect
            labelText="Status"
            options={['all',...statusOptions]}
            name="searchStatus"
            handleChange={handleSearch}
            value={searchStatus}
          />
          <FormSelect
            labelText="Type"
            options={['all', ...jobTypeOptions]}
            name="searchType"
            handleChange={handleSearch}
            value={searchType}
          />
          <FormSelect
            labelText="Sort"
            name="sort"
            options={sortOptions}
            handleChange={handleSearch}
            value={sort}
          />
          <button className="bg-[--bg-icon] rounded text-[--text-active] mt-7 h-8" disabled={isLoading} onClick={handleSubmit}>
            Clear Filters
          </button>
        </form>
      </div>
      {isLoading ? (
        <div className="flex justify-center">
          <Loading />
        </div>
      ) : jobs?.length < 1 ? (
        <div className="text-xl lg:text-4xl text-white text-center mt-4">
          No job Found
        </div>
      ) : (
        <div>
          <div className="text-2xl mt-10 text-[--text-active]">
            {jobs?.length} Job{jobs.length > 1 ? 's' : ''} Found
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {jobs?.map((job, index) => {
              return <SingleJobCard key={index} {...job} />;
            })}
          </div>
          <div className="flex justify-center mt-10 mb-3 text-white">
            {jobs?.length >= 1 && <Pagination />}
            
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default AllJobs;
