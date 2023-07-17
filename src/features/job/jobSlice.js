import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserFromLocalStorage } from "../../utils/localstorage";
import { showLoading, hideLoading, getAllJobs } from "../allJob/allJobSlice";

const initialState = {
  isLoading: false,
  position: "",
  company: "",
  location: "",
  status: "interview",
  statusOptions: ["interview", "pending", "declined"],
  jobType: "full-time",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  isEditing: false,
};

export const addJob = createAsyncThunk("job/addJob", async (job, thunkAPI) => {
  try {
    const resp = await customFetch.post("/jobs", job, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    thunkAPI.dispatch(handleClear());
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response);
  }
});

export const deleteJob = createAsyncThunk(
  "job/deleteJob",
  async (jobID, thunkApi) => {
    thunkApi.dispatch(showLoading());
    try {
      const resp = await customFetch.delete(`/jobs/${jobID}`, {
        headers: {
          authorization: `Bearer ${thunkApi.getState().user.user.token}`,
        },
      });
      thunkApi.dispatch(getAllJobs());
      return resp.data;
    } catch (error) {
      thunkApi.dispatch(hideLoading());
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);

export const editJob = createAsyncThunk(
  "job/editJob",
  async ({jobId,job}, thunkAPI) => {
    try {
      const resp = await customFetch.patch(`/jobs/${jobId}`, job, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      thunkAPI.dispatch(handleClear())
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    handleInputChange: (state, { payload }) => {
      const { name, value } = payload;
      state[name] = value;
    },
    handleClear: () => {
      return { ...initialState };
    },
    setEditJob: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
  },
  extraReducers: {
    [addJob.pending]: (state) => {
      state.isLoading = true;
    },
    [addJob.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success("Job Created");
    },
    [addJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [deleteJob.fulfilled]: (state) => {
      toast.success("Job Deleted");
    },
    [editJob.pending]: (state) =>{
      state.isLoading = true
    },
    [editJob.fulfilled]: (state) => {
      state.isLoading = false
      toast.success('Job Modified...')
    },
    [editJob.rejected]: (state, {payload}) =>{
      state.isLoading = false
      toast.error(payload)
    }
  },
});

export default jobSlice.reducer;
export const { handleInputChange, handleClear, setEditJob } = jobSlice.actions;
