import SideBarChild from "./SideBarChild";
import nav8 from "../../assets/image/nav8.svg";
import nav9 from "../../assets/image/nav9.png";
import React from "react";

const RightSidebar = () => {
  return (
    <div>
      <div
        className="flex  items-center  h-full bg-[#181820]  gap-[30px]   bottom-0 right-0  fixed top-[75px] z-[9999] flex-col px-[31px] pt-[41px]
    "
      >
        <div className="w-[250px] p-[20px] bg-[#1D1D24] rounded-xl flex gap-[17px] flex-col ">
          <h1 className="text-white text-opacity-70 font-semibold text-[14px] leading-[16px]">
            Your Pages and profiles
          </h1>
          <SideBarChild title={"Sanji vinsmoke"} img={nav9} size={true} />
        </div>
        <div className="w-[250px] p-[20px] bg-[#1D1D24] rounded-xl flex gap-[17px] flex-col    ">
          <h1 className="text-white text-opacity-70 font-semibold text-[14px] leading-[16px]">
            Your Pages and profiles
          </h1>
          <SideBarChild
            title={"Clara Cross and 2 others have birthdays today."}
            img={nav9}
            size={true}
            font="text-[14px] leading-[16px] text-white text-opacity-[85]"
          />
        </div>
        <div className="w-[250px] p-[20px] bg-[#1D1D24] rounded-xl flex gap-[17px] flex-col flex-1 ">
          <div className="flex justify-between ">
            <span className="text-white text-opacity-70 font-semibold text-[14px] leading-[16px]">
              Contacts
            </span>
            <div className="flex gap-[12px]">
              <img src={nav8} alt="" className="w-[25px] h-[25px]" />
              <img src={nav8} alt="" className="w-[25px] h-[25px]" />
              <img src={nav8} alt="" className="w-[25px] h-[25px]" />
            </div>
          </div>
          <div className="flex flex-col gap-[15px]">
            <SideBarChild
              isOnline={true}
              title={"Cristiano Ronaldo"}
              img={nav9}
              size={true}
              font="text-[14px] leading-[16px] text-white text-opacity-[85]"
            />{" "}
            <SideBarChild
              isOnline={true}
              title={"Neymar"}
              img={nav9}
              size={true}
              font="text-[14px] leading-[16px] text-white text-opacity-[85]"
            />{" "}
            <SideBarChild
              isOnline={false}
              title={"Lionel Messi"}
              img={nav9}
              size={true}
              font="text-[14px] leading-[16px] text-white text-opacity-[85]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
