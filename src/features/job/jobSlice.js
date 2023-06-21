import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  position: "",
  company: "",
  location: "",
  status: "interview",
  statusOptions: ["interview", "pending", "decline"],
  jobType: "full-time",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  isEditing: false,
};

export const addJob = createAsyncThunk("job/addJob", async (job, thunkAPI) => {
  console.log("upper testing");
  try {
    const resp = await customFetch.post("/jobs", job, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    console.log("testing");
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response);
  }
});

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
  },
});

export default jobSlice.reducer;
export const { handleInputChange, handleClear } = jobSlice.actions;
