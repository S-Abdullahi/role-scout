import React, { useEffect, useState } from "react";
import FormRow from "../components/FormRow";
import { Form } from "react-router-dom";
import FormSelect from "../components/FormSelect";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { handleInputChange, handleClear } from "../features/job/jobSlice";
import { addJob, editJob } from "../features/job/jobSlice";

const initialJobData = {
  position: "",
  company: "",
  location: "",
  status: "",
  jobType: "",
};

const AddJobs = () => {
  const {
    
    isLoading,
    position,
    company,
    status,
    statusOptions,
    jobType,
    jobTypeOptions,
    isEditing,
    location,
    editId
  } = useSelector((store) => store.job);
  const {user} = useSelector((store) => store.user)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleInputChange({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !location || !status || !jobType) {
      toast.error("please fill a fields");
      return;
    }
    
    if(isEditing){
      dispatch(editJob({
        jobId: editId,
        job: {
          position,
          company, 
          jobLocation: location,
          status,
          jobType
        }
      }))
      return
    }
    dispatch(
      addJob({ position, company, jobLocation: location, status, jobType })
    );
  };


  return (
    <React.Fragment>
      <div className="bg-[--bg-card] rounded px-4 py-10  lg:p-10">
        <h2 className="text-2xl mb-4">{isEditing ? "Edit Job" : "Add Job"}</h2>
        <form
          className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          onSubmit={handleSubmit}
        >
          <FormRow
            type="text"
            name="position"
            labelText="Position"
            value={position}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="company"
            labelText="company"
            value={company}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="location"
            labelText="Job Location"
            value={location}
            handleChange={handleChange}
          />

          <FormSelect
            labelText="Status"
            name="status"
            options={statusOptions}
            value={status}
            handleChange={handleChange}
          />

          <FormSelect
            labelText="Job Type"
            name="jobType"
            options={jobTypeOptions}
            value={jobType}
            handleChange={handleChange}
          />

          <div className="grid grid-cols-2 gap-3">
            <button
              type="submit"
              className="bg-[--bg-icon] rounded text-[--text-active] mt-7 h-8"
            >
              {isLoading ? "creating job..." : "submit"}
            </button>
            <button
              type="reset"
              className="rounded text-[--text-active] mt-7 h-8 bg-[--bg-main]"
              onClick={() => dispatch(handleClear())}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AddJobs;
