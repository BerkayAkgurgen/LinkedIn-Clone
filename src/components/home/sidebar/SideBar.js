import React from "react";
import { Avatar } from "@material-ui/core";

function SideBar() {
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recent-item">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E16AQEgm88VDBflmA/profile-displaybackgroundimage-shrink_200_800/0/1619898337287?e=1628726400&v=beta&t=BzSW1n7t7n3dXLvIzCQdFZSo75NYSwSTr1p2ZU01ZBM"
          alt="Avatar Background"
          className="sidebar__top-background"
        />
        <Avatar
          className="sidebar-avatar"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQEW7Q3xbjXniA/profile-displayphoto-shrink_100_100/0/1619898269205?e=1628726400&v=beta&t=FWxqya9uiYPnOSK0AWcuQpdvdHNYefUZLvKOd-WbXfk"
        />
        <h2>Berkay Akgürgen</h2>
        <h4>
          İstanbul Aydın Üniversitesi | Eskişehir Anadolu Üniversitesi |
          Front-End Developer
        </h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <div className="sidebar__stat-number">2.543</div>
        </div>
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <div className="sidebar__stat-number">2.543</div>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("Programming")}
        {recentItem("Design")}
        {recentItem("ReactJS")}
        {recentItem("UX/UI Design")}
        {recentItem("Software")}
      </div>
    </aside>
  );
}

export default SideBar;
