import HomePage from "./home/HomePage";
import MediaPages from "./media/MediaPages";
import React from "react";
import { Route, Routes } from "react-router-dom";
const Content = () => {
  return (
    <div
      id="main_content"
      className=" fixed top-[75px] left-[299px] bottom-0 right-[311px]  bg-[#181820] px-[90px]  flex-col  flex gap-[30px] pt-[41px]   items-center overflow-y-auto  pb-[5rem]"
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/media" element={<MediaPages />} />
      </Routes>
    </div>
  );
};

export default Content;
