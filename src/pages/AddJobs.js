import React from "react";

const AddJobs = () => {
  return (
    <React.Fragment>
      <div className="bg-[--bg-card] rounded px-4 py-10  lg:p-10">
        <h2 className="text-xl">Add Job</h2>
        <form className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col">
            <label className="mb-1">Position</label>
            <input
              type="text"
              name="position"
              className="rounded h-8 focus:outline-none px-3 focus:border focus:border-[--bg-icon] bg-[--text-active]"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Company</label>
            <input
              type="text"
              name="company"
              className="rounded h-8 focus:outline-none px-3 focus:border focus:border-[--bg-icon] bg-[--text-active]"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Job Location</label>
            <input
              type="text"
              name="location"
              className="rounded h-8 focus:outline-none px-3 focus:border focus:border-[--bg-icon] bg-[--text-active]"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Status</label>
            <select className="rounded h-8 focus:outline-none px-3 cursor-pointer bg-[--text-active]">
              <option>interview</option>
              <option>pending</option>
              <option>declined</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Job Type</label>
            <select className="rounded h-8 focus:outline-none px-3 cursor-pointer bg-[--text-active]">
              <option>full-time</option>
              <option>Part-time</option>
              <option>remote</option>
              <option>Internship</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-[--bg-icon] rounded text-[--text-active] mt-7 h-8">
              Submit
            </button>
            <button className="rounded text-[--text-active] mt-7 h-8 bg-[--bg-main]">
              Clear
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AddJobs;
