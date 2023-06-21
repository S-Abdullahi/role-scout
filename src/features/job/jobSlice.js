import customFetch from "../../utils/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
}


const jobSlice = createSlice({
    name: 'job',
    initialState
})

export default jobSlice.reducer