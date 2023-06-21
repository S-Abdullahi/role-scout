import React, { useState } from "react";
import FormRow from "../components/FormRow";
import { Form } from "react-router-dom";
import FormSelect from "../components/FormSelect";
import { toast } from "react-toastify";

const initialJobData = {
  position: "",
  company: "",
  location: "",
  status: "",
  jobType: "",
}

const AddJobs = () => {
  const statusOptions = ["interview", "pending", "decline"];
  const jobTypeOption = ["full-time", "part-time", "remote", "internship"];
  const [jobData, setJobData] = useState(initialJobData);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setJobData({ ...jobData, [name]: value });
    console.log(jobData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { position, company, location, status, jobType } = jobData;
    if (!position || !company || !location || !status || !jobType) {
      toast.error("please fill a fields");
      return;
    }
  };

  const handleClear = () =>{
    setJobData(initialJobData)
    toast.success('All fields cleared')
  }

  return (
    <React.Fragment>
      <div className="bg-[--bg-card] rounded px-4 py-10  lg:p-10">
        <h2 className="text-2xl mb-4">Add Job</h2>
        <form className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" onSubmit={handleSubmit}>
          <FormRow
            type="text"
            name="position"
            labelText="Position"
            value={jobData.position}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="company"
            labelText="company"
            value={jobData.company}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="location"
            labelText="Job Location"
            value={jobData.location}
            handleChange={handleChange}
          />

          <FormSelect
            labelText="Status"
            name="status"
            options={statusOptions}
            value={jobData.status}
            handleChange={handleChange}
          />

          <FormSelect
            labelText="Job Type"
            name="jobType"
            options={jobTypeOption}
            value={jobData.jobType}
            handleChange={handleChange}
          />

          <div className="grid grid-cols-2 gap-3">
            <button type="submit" className="bg-[--bg-icon] rounded text-[--text-active] mt-7 h-8">
              Submit
            </button>
            <button type="reset" className="rounded text-[--text-active] mt-7 h-8 bg-[--bg-main]" onClick={handleClear}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AddJobs;
