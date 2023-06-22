import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  jobs: [],
};

export const getAllJobs = createAsyncThunk(
  "allJob/getAllJobs",
  async (_, thunkApi) => {
    try {
      const resp = await customFetch.get("/jobs", {
        headers: {
          authorization: `Bearer ${thunkApi.getState().user.user.token}`,
        },
      });
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);

const getAllJobsSlice = createSlice({
  name: "allJob",
  initialState,
  extraReducers: {
    [getAllJobs.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllJobs.fulfilled]: (state, { payload }) => {
        state.isLoading = false, 
      state.jobs = payload?.jobs
    },
    [getAllJobs.rejected]: (state, {payload}) => {
    state.isLoading = false, 
      toast.error(payload);
    },
  },
});

export default getAllJobsSlice.reducer;
