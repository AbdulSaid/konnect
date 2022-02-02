import React from "react";
import "../styles/header.css";
import SavedSearchIcon from '@mui/icons-material/SavedSearch';

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

      </div>
    </div>
  )
}

export default Header;
