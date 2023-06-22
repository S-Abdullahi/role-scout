import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import jobReducer from './features/job/jobSlice'
import allJobReducer from './features/allJob/allJobSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        job: jobReducer,
        allJobs: allJobReducer
    }
})

export default store