import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout-container">
      <div>
        <SideBar />
      </div>
      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
