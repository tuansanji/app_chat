import News from "./News";
import Reels from "./Reels";
import Status from "./Status";
import React from "react";
const HomePage = () => {
  return (
    <>
      <News />
      <Status />
      <div className="w-full">
        <Reels />
      </div>
    </>
  );
};

export default HomePage;
