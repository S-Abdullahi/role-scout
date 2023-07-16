import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { CgToolbox } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { deleteJob } from "../features/allJob/allJobSlice";
import moment from "moment";
import { deleteJob, setEditJob } from "../features/job/jobSlice";

const SingleJobCard = ({
  _id,
  status,
  position,
  jobType,
  jobLocation,
  company,
  createdAt,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="bg-[--bg-card] rounded py-5 shadow-md">
      <div className="pb-3 mb-3 border-b-[0.5px] border-[--bg-main]">
        <div className="flex px-4 gap-10">
          <div className="bg-[--bg-main] text-[--text-inactive] w-10 flex items-center justify-center rounded text-2xl font-bold">
            {company.split("")[0]}
          </div>
          <div>
            <p className="text-[--text-active]">{position}</p>
            <p className="text-sm text-[--text-inactive]">{company}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-4">
        <div className="flex items-center gap-3 text-[--text-active]">
          <BsFillSendFill className="text-[--card-hover]" />
          <span>{jobLocation}</span>
        </div>
        <div className="flex items-center gap-3 text-[--text-active]">
          <FaCalendarAlt className="text-[--card-hover]" />
          <span>{moment(createdAt).format("MMM Do YY")} </span>
        </div>
        <div className="flex items-center gap-3 text-[--text-active]">
          <CgToolbox className="text-[--card-hover]" />
          <span>{jobType}</span>
        </div>
        <div>
          <span
            className={`${
              status === "interview"
                ? "bg-green-300"
                : status === "pending"
                ? "bg-yellow-300"
                : "bg-red-300"
            } px-3 py-1 rounded`}
          >
            {status}
          </span>
        </div>
        <div className="flex gap-4 mt-4">
          <button
            className="bg-[--bg-main] px-3 py-1 rounded text-[--text-active]"
            onClick={() => {
              navigate("/add-jobs");
              dispatch(
                setEditJob({
                  editId: _id,
                  status,
                  position,
                  jobType,
                  jobLocation,
                  company,
                })
              );
            }}
          >
            Edit
          </button>
          <button
            className="bg-[--bg-icon] px-3 py-1 rounded text-[--text-active]"
            onClick={() => dispatch(deleteJob(_id))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleJobCard;
