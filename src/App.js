import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, AddJobs, AllJobs, Landing, SharedHeader, Error, Login } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login/>}></Route>
        <Route path="/" element={<SharedHeader />}>
          <Route path="add-jobs" element={<AddJobs />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="dashboard" element={<Home />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
