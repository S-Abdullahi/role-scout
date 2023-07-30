import customFetch from "../../utils/axios";

export const getAllJobsThunk = async (_, thunkApi) => {
  try {
    const { page, search, searchStatus, searchType, sort } =
      thunkApi.getState().allJobs;
    let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
    if (search) {
      url = url + `&search=${search}`;
    }
    const resp = await customFetch.get(url, {
      headers: {
        authorization: `Bearer ${thunkApi.getState().user.user.token}`,
      },
    });
    return resp.data;
  } catch (error) {
//    return thunkApi.rejectWithValue(error.response.data.msg);
  }
};
