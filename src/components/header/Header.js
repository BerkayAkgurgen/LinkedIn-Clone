import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import HomeIcon from "@material-ui/icons/Home";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HeaderOption from "./HeaderOption";

const Header = () => {
  return (
    <div className="header">
      <div className="container flex">
        <div className="header__left">
          <img
            src="https://image.flaticon.com/icons/png/512/174/174857.png"
            alt="LinkedIn Logo"
            height="34"
          />
          <div className="header__search">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <nav className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption
            avatar="https://media-exp1.licdn.com/dms/image/C4E03AQEW7Q3xbjXniA/profile-displayphoto-shrink_400_400/0/1619898269205?e=1628726400&v=beta&t=NK_g6mYtsq_T7D9fmGDuzFMqjKTlppZF8BYjrPCuTr0"
            title="Me"
          />
        </nav>
      </div>
    </div>
  );
};

export default Header;
