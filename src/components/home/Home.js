import React from "react";
import Sidebar from "./sidebar/SideBar";
import Feed from "./feed/form/Feed";

function Home() {
  return (
    <div className="bgh">
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default Home;
