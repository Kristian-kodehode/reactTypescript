import { Outlet } from "react-router-dom";

// import React from "react";
import Navbar from "../navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
