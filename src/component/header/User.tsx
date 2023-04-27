import nav6 from "../../assets/image/nav6.svg";
import nav7 from "../../assets/image/nav7.svg";
import nav8 from "../../assets/image/nav8.svg";
import nav9 from "../../assets/image/nav9.png";
import React from "react";
const User = () => {
  return (
    <div className="flex pt-[17px] gap-[15px] px-[30px]">
      <img src={nav6} alt="" className="object-cover w-[40px] h-[40px] " />
      <img src={nav7} alt="" className="object-cover w-[40px] h-[40px] " />
      <img src={nav8} alt="" className="object-cover w-[40px] h-[40px] " />
      <img src={nav9} alt="" className="object-cover w-[40px] h-[40px] " />
    </div>
  );
};

export default User;
