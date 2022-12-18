import React, { useState } from "react";
import DashBoard from "../../pages/DashBoard";
import Newsletter from "../../pages/Newsletter";
import Tracker from "../../pages/Tracker";
import "./Tabs.css";

function Tabs() {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabSelection = (id) => {
    setSelectedTab(id);
  };

  return (
    <div className="tabs-container">
      <ul className="tabs">
        <li
          className={selectedTab === 1 ? "active" : ""}
          onClick={() => handleTabSelection(1)}
        >
          Water Usage Tracker
        </li>
        <li
          className={selectedTab === 2 ? "active" : ""}
          onClick={() => handleTabSelection(2)}
        >
          Newsletter
        </li>
        <li
          className={selectedTab === 3 ? "active" : ""}
          onClick={() => handleTabSelection(3)}
        >
          Dashboard
        </li>
      </ul>
      <div className="tab-content">
        <div className={selectedTab === 1 ? "active" : ""}><Tracker/></div>
        <div className={selectedTab === 2 ? "active" : ""}><Newsletter/></div>
        <div className={selectedTab === 3 ? "active" : ""}><DashBoard/> </div>
      </div>
    </div>
  );
}

export default Tabs;
