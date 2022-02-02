import React from "react";
import "../styles/header.css";
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className="header">

      <div className="header__left">
        <img src="https://is4-ssl.mzstatic.com/image/thumb/Purple116/v4/42/2b/8f/422b8fa5-8aaf-3567-0c4a-a849bddd1c88/source/512x512bb.jpg" alt="Konnect" />

        <div className="header__search">
          <SavedSearchIcon />

          <input type="text" name="" id="" />
        </div>
      </div>
      
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" title="me"/>
      </div>
    </div>
  )
}

export default Header;
