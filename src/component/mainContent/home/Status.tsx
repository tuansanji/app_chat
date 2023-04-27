import news4 from "../../../assets/image/news4.png";
import status1 from "../../../assets/image/status1.svg";
import status2 from "../../../assets/image/status2.svg";
import status3 from "../../../assets/image/status3.svg";
import React from "react";

const Status = () => {
  return (
    <div className="h-[117px]  w-full flex flex-col bg-[#1D1D24] ">
      <div className="flex flex-1 p-[20px] gap-[20px]">
        <img src={news4} alt="" className="w-[40px] h-[40px] object-cover" />
        <input
          type="text"
          placeholder="What's on your mind, Eric?"
          className="flex-1 rounded-[20px] bg-white bg-opacity-5 px-[19px] outline-none text-[14px] leading-[16px] font-normal text-white text-opacity-70"
        />
      </div>
      <div className="h-[39px] flex justify-around  py-[12px] bg-white bg-opacity-5 border-t border-opacity-[0.07] border-white rounded-b-md">
        <div className="flex items-center gap-4">
          {" "}
          <img src={status1} alt="" />
          <span className="text-[12px] text-white text-opacity-80 font-medium leading-[16px]">
            Live video
          </span>
        </div>{" "}
        <div className="flex items-center gap-4">
          {" "}
          <img src={status2} alt="" />
          <span className="text-[12px] text-white text-opacity-80 font-medium leading-[16px]">
            Photo/video
          </span>
        </div>{" "}
        <div className="flex items-center gap-4">
          {" "}
          <img src={status3} alt="" />
          <span className="text-[12px] text-white text-opacity-80 font-medium leading-[16px]">
            Feeling/activity
          </span>
        </div>
      </div>
    </div>
  );
};

export default Status;
