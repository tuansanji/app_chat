import "./App.scss";
import Header from "./component/header/Header";
import Content from "./component/mainContent/Content";
import RightSidebar from "./component/sideMenu/RightSidebar";
import Sidebar from "./component/sideMenu/Sidebar";
import React from "react";

function App() {
  return (
    <div className="w-[1280px] h-[832px] ">
      <Header />
      <div className="flex absolute w-full h-full top-[75px]">
        <Sidebar />
        <Content />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
