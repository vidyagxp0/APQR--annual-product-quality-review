import React from "react";
//Active Tabs
const ActiveTab = ({ label, value, activeTab, setTab }) => {
  return (
    <div
      className={`${activeTab === value ? "active" : ""}`}
      onClick={() => setTab(value)}
    >
      {label}
    </div>
  );
};
export default ActiveTab;
