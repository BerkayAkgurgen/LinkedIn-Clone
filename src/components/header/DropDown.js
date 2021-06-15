import React from "react";
import { auth } from "../../firebase/firebase";
import { Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";

function Dropdown({ status }) {
  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut().then(() => dispatch(logout()));
  };

  return (
    <div className={status ? "dropdown dropdown-active" : "dropdown pasif"}>
      <div className="dropdown__top">
        <Avatar
          src="https://media-exp1.licdn.com/dms/image/C4E03AQEW7Q3xbjXniA/profile-displayphoto-shrink_100_100/0/1619898269205?e=1629331200&v=beta&t=3IjSSef57my3Z3nIRtYu8ctZSmUMv1CDzH2Ugh6LUsk"
          className="dropdown__avatar"
        />
        <div className="dropdown__top-info">
          <h3>Berkay Akgürgen</h3>
          <p>
            İstanbul Aydın Üniversitesi | Eskişehir Anadolu Üniversitesi |
            Front-End Developer
          </p>
        </div>
        <div className="dropdown__top-btn">
          <p>View Profile</p>
        </div>
      </div>
      <div className="dropdown__lists">
        <div className="dropdown__lists-account">
          <h4>Account</h4>
          <ul>
            <li>Settings & Privacy</li>
            <li>Help</li>
            <li>Language</li>
          </ul>
        </div>
        <div className="dropdown__lists-manage">
          <h4>Manage</h4>
          <ul>
            <li>Post & Activity</li>
            <li>Job Posting Account</li>
          </ul>
        </div>
        <div className="dropdown__lists-exit">
          <p onClick={signOut}>Sign Out</p>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;