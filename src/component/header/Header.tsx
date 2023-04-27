import Nav from "./Nav";
import User from "./User";
import React from "react";

const Header = () => {
  return (
    <div className="fixed flex h-[75px] w-full bg-[#1D1D24] border-b border-b-[#FFFFFF] border-opacity-20 z-[1000]">
      <div className="flex py-[18px] px-[19px] gap-5">
        <a href="/" className="w-[4rem] h-[4rem] rounded-[50%]">
          <img
            src="https://www.facebook.com/images/fb_icon_325x325.png"
            alt=""
            className="object-cover w-full h-full"
          />
        </a>
        <label htmlFor="" className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="absolute w-6 h-6 text-white text-[1.6rem] top-1/2 -translate-y-1/2 left-4 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            type="text"
            placeholder="Search Sanji Page"
            className="w-[207px] h-[40px] pl-12 rounded-[15px] border border-none bg-white bg-opacity-5 py-3 px-5 outline-none text-[1.4rem] text-white "
          />
        </label>
      </div>
      <div className="flex justify-between w-full">
        <Nav />
        <User />
      </div>
    </div>
  );
};

export default Header;
