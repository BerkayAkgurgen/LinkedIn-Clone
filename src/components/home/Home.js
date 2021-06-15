import React from "react";
import Sidebar from "./sidebar/SideBar";
import Feed from "./feed/form/Feed";

function Home() {
  return (
    <div className="app__body">
      <Sidebar />
      <Feed />
    </div>
  );
}

export default Home;
