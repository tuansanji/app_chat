import LeftSidebar from "./LeftSidebar";
import ShortCut from "./ShortCut";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex  h-full w-[299px] bg-[#1D1D24]  left-0 border-r border-r-[#FFFFFF]  border-opacity-20 fixed top-[74px] z-[9999] flex-col ">
      <LeftSidebar />
      <ShortCut />
    </div>
  );
};

export default Sidebar;
