import customFetch from "../../utils/axios";
import { logOut } from "./userSlice";
import { clearAllJobsState } from "../allJob/allJobSlice";
import { handleClear } from "../job/jobSlice";

export const registerLoginUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.patch(url, user, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logOut());
      return thunkAPI.rejectWithValue("Unauthorized! loggin out...");
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const clearStoreThunk = async (message, thunkAPI) =>{
  try{
    thunkAPI.dispatch(logOut(message))
    thunkAPI.dispatch(clearAllJobsState())
    thunkAPI.dispatch(handleClear())
    return Promise.resolve()
  }catch(error){
    return Promise.reject
  }
}