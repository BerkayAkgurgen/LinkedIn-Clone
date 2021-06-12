import React from "react";
import { Avatar } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const HeaderOption = ({ avatar, title, Icon }) => {
  return (
    <div className="header__option">
      {Icon && <Icon className="header__option-icon" />}
      {avatar && <Avatar className="header__option-icon" src={avatar} />}
      {title === "Me" ? (
        <div className="header__option-dropdown">
          <h3 className="header__option-title">{title}</h3>
          <ArrowDropDownIcon />
        </div>
      ) : (
        <h3 className="header__option-title">{title}</h3>
      )}
    </div>
  );
};

export default HeaderOption;
