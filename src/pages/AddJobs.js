import React from "react";
import FormRow from "../components/FormRow";
import { Form } from "react-router-dom";
import FormSelect from "../components/FormSelect";

const AddJobs = () => {
  const statusOptions = ["interview", "pending", "decline"];
  const jobTypeOption = ["full-time", "part-time", "remote", "internship"];
  return (
    <React.Fragment>
      <div className="bg-[--bg-card] rounded px-4 py-10  lg:p-10">
        <h2 className="text-2xl mb-4">Add Job</h2>
        <form className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <FormRow type="text" name="position" labelText="Position" />
          <FormRow type="text" name="company" labelText="company" />
          <FormRow type="text" name="location" labelText="Job Location" />

          <FormSelect labelText="Status" options={statusOptions} />

          <FormSelect labelText="Job Type" options={jobTypeOption} />

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
