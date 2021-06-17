import React from "react";
import Sidebar from "./sidebar/SideBar";
import WidgetBar from "./sidebar/WidgetBar";
import Feed from "./feed/form/Feed";

function Home() {
  return (
    <div className="bgh">
      <div className="app__body">
        <Sidebar />
        <Feed />
        <WidgetBar/>
      </div>
    </div>
  );
}

export default Home;
