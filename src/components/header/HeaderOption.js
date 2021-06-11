import React from "react";

const HeaderOption = ({ title, Icon }) => {
  return (
    <div className="header__option">
      {Icon && <Icon className="header__option-icon" />}
      <h3 className="header__option-title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
