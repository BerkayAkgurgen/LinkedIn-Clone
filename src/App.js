import React from "react";
import { useSelector } from "react-redux";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import Feed from "./components/feed/form/Feed";
import { selectUser } from "./features/userSlice";
import "./styles/App.scss";
import Login from "./components/login/Login";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <SideBar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;