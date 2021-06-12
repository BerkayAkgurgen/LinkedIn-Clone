import React from "react";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import FeedBar from "./components/feed/Feed";
import "./styles/App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <SideBar />
        <FeedBar />
      </div>
    </div>
  );
}

export default App;
