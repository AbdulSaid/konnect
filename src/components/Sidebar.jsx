import { Avatar } from "@mui/material";
import React from "react";
import "../styles/sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recenItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media.istockphoto.com/photos/abstract-background-green-picture-id621484894?b=1&k=20&m=621484894&s=170667a&w=0&h=N5jh9me3fiSjYCMol3moBu3enlQzNgrwG1GXX5N4uhA="
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Abdul Said</h2>
        <h4>abdulrahman.asaid@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("software engineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
