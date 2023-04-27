import SideBarChild from "./SideBarChild";
import nav1 from "../../assets/image/nav1.png";
import nav10 from "../../assets/image/nav10.svg";
import nav11 from "../../assets/image/nav11.svg";
import nav12 from "../../assets/image/nav12.svg";
import nav2 from "../../assets/image/nav2.svg";
import nav3 from "../../assets/image/nav3.svg";
import nav4 from "../../assets/image/nav4.svg";
import nav9 from "../../assets/image/nav9.png";
import React from "react";

const LeftSidebar = () => {
  return (
    <div className="h-[420px] px-[20px] border-b-white border-b border-opacity-5 py-[10px] flex flex-col justify-between">
      <SideBarChild title={"Sanji vinsmoke"} img={nav9} size={true} />
      <SideBarChild title={"Friends"} img={nav11} />
      <SideBarChild title={"Markitplace"} img={nav3} />
      <SideBarChild title={"Most Recent"} img={nav10} />
      <SideBarChild title={"Groups"} img={nav4} />
      <SideBarChild title={"Watch"} img={nav2} />
      <SideBarChild title={"See more"} img={nav12} />
    </div>
  );
};

export default LeftSidebar;
