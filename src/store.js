import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import jobReducer from './features/job/jobSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        job: jobReducer,
    }
})

export default store