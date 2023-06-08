import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, AddJobs, AllJobs, Landing, SharedHeader, Error } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>  
      <Route path="/" element={<SharedHeader/>}>
        <Route index path="" element={<Landing />} />
        <Route path="add-jobs" element={<AddJobs />} />
        <Route path="all-jobs" element={<AllJobs />} />
        <Route path="dashboard" element={<Home />} />
      </Route>
      <Route path="*" element={<Error/>}/>

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
