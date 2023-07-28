import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";

const initialFilterState = {
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a']
}

const initialState = {
  isLoading: false,
  jobs: [],
  defaultStats: {},
  monthlyApplications: [],
  noOfPages: 1,
  totalJobs: 0,
  page: 1,
  ...initialFilterState
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

export const getStats = createAsyncThunk(
  "alljob/getStats",
  async (_, thunkApi) => {
    try {
      const resp = await customFetch.get("jobs/stats", {
        headers: {
          authorization: `Bearer ${thunkApi.getState().user.user.token}`,
        },
      });
      return resp.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);

const getAllJobsSlice = createSlice({
  name: "allJob",
  initialState,
  reducers: {
    showLoading(state) {
      state.isLoading = true;
    },
    hideLoading(state) {
      state.isLoading = false;
    },
    searchState(state, {payload}){
      state[payload.name] = payload.value
    },
    clearFilter(state){
      return {...state, ...initialFilterState}
    }
  },
  extraReducers: {
    [getAllJobs.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllJobs.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.jobs = payload?.jobs;
      state.noOfPages = payload?.numOfPages;
      state.totalJobs = payload?.totalJobs;
    },
    [getAllJobs.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [getStats.fulfilled]: (state, {payload}) =>{
      state.defaultStats = payload?.defaultStats
      state.monthlyApplications = payload?.monthlyApplications
    }
  },
});

export const { showLoading, hideLoading, searchState, clearFilter } = getAllJobsSlice.actions;
export default getAllJobsSlice.reducer;
