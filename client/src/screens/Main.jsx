import React from "react";
import {Routes, Route} from "react-router-dom";
import Profile from "./Profile.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Tracker from "./Tracker.jsx";
import Newsletter from "./Newsletter.jsx";

function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </div>
  );
}

export default Main;
