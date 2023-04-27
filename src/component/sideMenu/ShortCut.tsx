import SideBarChild from "./SideBarChild";
import nav5 from "../../assets/image/nav5.svg";
import nav6 from "../../assets/image/nav6.svg";
import nav7 from "../../assets/image/nav7.svg";
import nav8 from "../../assets/image/nav8.svg";
import React from "react";
const ShortCut = () => {
  return (
    <div className="flex-1 flex flex-col p-[20px]">
      <h1 className="font-semibold text-[14px] leading-[16ox] text-white text-opacity-70 relative -left-2">
        Your Shortcuts
      </h1>
      <div className="flex flex-col justify-between gap-[3rem] py-[20px]">
        <SideBarChild title={"Jlpt"} img={nav5} />
        <SideBarChild title={"Mindx"} img={nav6} />
        <SideBarChild title={"Typescript"} img={nav7} />
      </div>
    </div>
  );
};

export default ShortCut;
