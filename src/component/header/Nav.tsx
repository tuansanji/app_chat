import nav3 from "../../assets/image/nav3.svg";
import nav4 from "../../assets/image/nav4.svg";
import nav5 from "../../assets/image/nav5.svg";
import { HomeFilled, VideoCameraFilled } from "@ant-design/icons";
import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav flex pt-[27px] gap-[5px] flex-1 justify-center ">
      <NavLink className="w-[12rem]  flex justify-center border-0 " to="/">
        <HomeFilled className="text-[#ddd]" style={{ fontSize: "25px" }} />
      </NavLink>
      <NavLink className="w-[12rem]  flex justify-center border-0" to="/media">
        <VideoCameraFilled
          className="text-[#ddd]"
          style={{ fontSize: "25px" }}
        />
      </NavLink>
      <NavLink className="w-[12rem]  flex justify-center " to="/market">
        <img src={nav3} alt="" className="object-cover w-[26px] h-[24px]" />
      </NavLink>
      <NavLink className="w-[12rem]  flex justify-center " to="/friends">
        <img src={nav4} alt="" className="object-cover w-[26px] h-[24px]" />
      </NavLink>
      <NavLink className="w-[12rem] flex justify-center " to="/games">
        <img src={nav5} alt="" className="object-cover w-[26px] h-[24px]" />
      </NavLink>
    </div>
  );
};

export default Nav;
