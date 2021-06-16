import React, { useState } from "react";
import DropDown from "./DropDown";
import SearchIcon from "@material-ui/icons/Search";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import HomeIcon from "@material-ui/icons/Home";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HeaderOption from "./HeaderOption";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const Header = () => {
  const user = useSelector(selectUser);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="header">
      <div className="container flex">
        <div className="header__left">
          <a href="/">
            <img
              src="https://image.flaticon.com/icons/png/512/174/174857.png"
              alt="LinkedIn Logo"
              height="34"
            />
          </a>
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
            avatar={user?.photoUrl}
            title="Me"
            status={toggle}
            changeStatus={setToggle}
          />
          <DropDown status={toggle} />
        </nav>
      </div>
    </div>
  );
};

export default Header;
