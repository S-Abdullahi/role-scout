import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  AddJobs,
  AllJobs,
  Landing,
  SharedHeader,
  Error,
  Login,
  Profile,
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login />}></Route>
        <Route path="/" element={<SharedHeader />}>
          <Route path="add-jobs" element={<AddJobs />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="dashboard" element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer className='top-center'/>
    </BrowserRouter>
  );
}

export default App;
