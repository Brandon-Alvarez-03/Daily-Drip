import React, {useState} from "react";
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
          Tab 1
        </li>
        <li
          className={selectedTab === 2 ? "active" : ""}
          onClick={() => handleTabSelection(2)}
        >
          Tab 2
        </li>
        <li
          className={selectedTab === 3 ? "active" : ""}
          onClick={() => handleTabSelection(3)}
        >
          Tab 3
        </li>
      </ul>
      <div className="tab-content">
        <div className={selectedTab === 1 ? "active" : ""}>Tab 1 content</div>
        <div className={selectedTab === 2 ? "active" : ""}>Tab 2 content</div>
        <div className={selectedTab === 3 ? "active" : ""}>Tab 3 content</div>
      </div>
    </div>
  );
}

export default Tabs;
