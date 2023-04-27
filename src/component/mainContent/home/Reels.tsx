import ReelsAction from "./ReelsAction";
import ReelsComment from "./ReelsComment";
import ReelsInput from "./ReelsInput";
import news4 from "../../../assets/image/news4.png";
import reels1 from "../../../assets/image/reels1.svg";
import reels2 from "../../../assets/image/reels2.png";
import React from "react";
const Reels = () => {
  const user = {
    user: {
      username: "sanji",
      time: 12,
    },
    comment: "active",
    like: 2,
  };
  return (
    <div className="  w-full flex flex-col bg-[#1D1D24] rounded-2xl overflow-hidden">
      <div className="flex p-[15px] gap-[10px] items-center ">
        <img src={news4} alt="" className="w-[40px] h-[40px]" />
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-[#fff] text-[1.4rem] font-medium leading-[12px]">
            The New York Times
          </h1>
          <p className="text-[#fff] text-opacity-50 items-center gap-4 text-[1.1rem] font-medium leading-[12px] flex">
            5h.
            <span>
              <img
                src={reels1}
                alt=""
                className="w-[15px] h-[15px] object-cover"
              />
            </span>
          </p>
        </div>
      </div>
      <div className="p-[15px] pt-0">
        <p className="text-[#ffff] text-[14px] leading-[19px] font-normal ">
          We consulted five design experts and tested gear in a 275-square-foot
          apartment to find the best multifunctional decor to maximize space in
          a tiny bedroom.
        </p>
      </div>
      <div className="w-full max-h-[38rem]">
        <img src={reels2} alt="" className="object-cover w-full h-full" />
      </div>
      <ReelsAction />
      <ReelsInput />
      <ReelsComment list={[user, user, user]} />
    </div>
  );
};

export default Reels;
