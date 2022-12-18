import React from "react";
import {Routes, Route} from "react-router-dom";
import Tabs from "../components/Tabs/Tabs.jsx";
import Profile from "./Profile.jsx";
import DashBoard from "./DashBoard.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Tracker from "./Tracker.jsx";
import Newsletter from "./Newsletter.jsx";
import ProtectedRoute from "../services/protectedRoute";

function Main() {
  return (
    <div className="main">
      <Routes>
        <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Tabs />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </div>
  );
}

export default Main;
