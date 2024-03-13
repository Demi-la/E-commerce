"use client";
import React, { useState, useEffect } from "react";
import Nav from "./nav";
import SideNav from "./sideNav";
const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSideBar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <Nav isSidebarOpen={isSidebarOpen} toggleSideBar={toggleSideBar} />

      <SideNav isSidebarOpen={isSidebarOpen} toggleSideBar={toggleSideBar} />
    </>
  );
};

export default Navbar;
